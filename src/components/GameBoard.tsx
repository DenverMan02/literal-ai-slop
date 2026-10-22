import React, { useEffect, useRef, useState } from 'react';
import { Application, Container, Graphics, Sprite } from 'pixi.js';
import {
  FloatingText,
  LawnHazard,
  PlantDefinition,
  PlantInstance,
  Projectile,
  TurnPhase,
  ZombieInstance,
} from '../types/game';
import {
  preloadAllTextures,
  getPlantTexture,
  getZombieTexture,
  getHazardTexture,
  getProjectileTexture,
  getLawnMowerTexture,
} from '../pixi/textureManager';
import { Cpu, ShieldCheck } from 'lucide-react';

export interface GameBoardProps {
  plants: PlantInstance[];
  zombies: ZombieInstance[];
  hazards: LawnHazard[];
  projectiles: Projectile[];
  floatingTexts: FloatingText[];
  lawnMowers: boolean[]; // 5 lanes
  selectedPlantDef: PlantDefinition | null;
  isShovelActive: boolean;
  turnPhase: TurnPhase;
  lawnTheme?: 'day' | 'pool' | 'roof' | 'night';
  onTileClick: (row: number, col: number) => void;
}

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 520;
const PORCH_WIDTH = 80;
const ROWS = 5;
const COLS = 8;
const TILE_WIDTH = (CANVAS_WIDTH - PORCH_WIDTH) / COLS; // 110px
const TILE_HEIGHT = CANVAS_HEIGHT / ROWS; // 104px

export const GameBoard: React.FC<GameBoardProps> = ({
  plants,
  zombies,
  hazards,
  projectiles,
  floatingTexts,
  lawnMowers,
  selectedPlantDef,
  isShovelActive,
  lawnTheme = 'day',
  onTileClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  const [fps, setFps] = useState<number>(60);
  const [hoveredTile, setHoveredTile] = useState<{ row: number; col: number } | null>(null);

  // Keep state in a ref so Pixi ticker reads fresh props without re-creating the WebGL app
  const stateRef = useRef({
    plants,
    zombies,
    hazards,
    projectiles,
    lawnMowers,
    selectedPlantDef,
    isShovelActive,
    lawnTheme,
    hoveredTile,
  });

  stateRef.current = {
    plants,
    zombies,
    hazards,
    projectiles,
    lawnMowers,
    selectedPlantDef,
    isShovelActive,
    lawnTheme,
    hoveredTile,
  };

  useEffect(() => {
    let isMounted = true;
    const app = new Application();
    appRef.current = app;

    let time = 0;
    let fpsFrames = 0;
    let lastFpsTime = performance.now();

    // Scene Graph Layers
    const stage = app.stage;
    const backgroundLayer = new Graphics();
    const mowersContainer = new Container();
    const hazardsContainer = new Container();
    const plantsContainer = new Container();
    const zombiesContainer = new Container();
    const projectilesContainer = new Container();
    const healthBarsLayer = new Graphics();
    const overlayLayer = new Graphics();
    const ghostSprite = new Sprite();
    ghostSprite.anchor.set(0.5, 0.5);
    ghostSprite.width = 68;
    ghostSprite.height = 68;
    ghostSprite.alpha = 0.6;
    ghostSprite.visible = false;

    stage.addChild(backgroundLayer);
    stage.addChild(mowersContainer);
    stage.addChild(hazardsContainer);
    stage.addChild(plantsContainer);
    stage.addChild(zombiesContainer);
    stage.addChild(projectilesContainer);
    stage.addChild(healthBarsLayer);
    stage.addChild(ghostSprite);
    stage.addChild(overlayLayer);

    // Persistent GPU Sprite Pools
    const mowerSprites: Sprite[] = [];
    const plantSprites = new Map<string, Sprite>();
    const zombieSprites = new Map<string, Sprite>();
    const projectileSprites = new Map<string, Sprite>();
    const hazardSprites = new Map<string, Sprite>();

    const initPixi = async () => {
      // 1. Preload and rasterize all SVG textures to high-res GPU textures first
      await preloadAllTextures();

      // 2. Initialize PixiJS v8 Application
      await app.init({
        width: CANVAS_WIDTH,
        height: CANVAS_HEIGHT,
        background: '#050b14',
        resolution: Math.min(window.devicePixelRatio || 1, 2),
        autoDensity: true,
        antialias: true,
      });

      if (!isMounted || !containerRef.current) {
        app.destroy(true);
        return;
      }

      containerRef.current.appendChild(app.canvas);
      app.canvas.className = 'w-full h-auto block select-none rounded-b';
      app.canvas.style.touchAction = 'none';

      // Initialize Lawnmower Sprites on Porch
      for (let r = 0; r < ROWS; r++) {
        const mower = new Sprite(getLawnMowerTexture());
        mower.anchor.set(0.5, 0.5);
        mower.width = 54;
        mower.height = 54;
        mowersContainer.addChild(mower);
        mowerSprites.push(mower);
      }

      // 60 FPS Render Loop
      app.ticker.add((ticker) => {
        time += ticker.deltaTime / 60;
        fpsFrames++;

        const now = performance.now();
        if (now - lastFpsTime >= 1000) {
          setFps(Math.round((fpsFrames * 1000) / (now - lastFpsTime)));
          fpsFrames = 0;
          lastFpsTime = now;
        }

        const state = stateRef.current;

        // 1. Draw Lawn Background & Grid
        backgroundLayer.clear();
        // Porch Curb
        backgroundLayer.rect(0, 0, PORCH_WIDTH, CANVAS_HEIGHT).fill(0x1e293b);
        backgroundLayer.rect(PORCH_WIDTH - 4, 0, 4, CANVAS_HEIGHT).fill(0x334155);

        for (let row = 0; row < ROWS; row++) {
          const isPoolLane = state.lawnTheme === 'pool' && (row === 2 || row === 3);

          // Porch lane divider
          backgroundLayer.rect(0, row * TILE_HEIGHT, PORCH_WIDTH, 1).fill(0x334155);

          for (let col = 0; col < COLS; col++) {
            const isCheckered = (row + col) % 2 === 0;
            const x = PORCH_WIDTH + col * TILE_WIDTH;
            const y = row * TILE_HEIGHT;

            let tileColor = isCheckered ? 0x276e27 : 0x2f822f;
            if (isPoolLane) {
              tileColor = isCheckered ? 0x0284c7 : 0x0369a1;
            } else if (state.lawnTheme === 'roof') {
              tileColor = isCheckered ? 0xb45309 : 0x9a3412;
            } else if (state.lawnTheme === 'night') {
              tileColor = isCheckered ? 0x14532d : 0x052e16;
            }

            backgroundLayer.rect(x, y, TILE_WIDTH, TILE_HEIGHT).fill(tileColor);

            // Water ripples on pool lane
            if (isPoolLane) {
              const rippleOffset = Math.sin(time * 3 + col) * 6;
              backgroundLayer
                .roundRect(x + 20 + rippleOffset, y + TILE_HEIGHT / 2, 40, 2, 1)
                .fill({ color: 0xffffff, alpha: 0.25 });
            }

            // Grid cell borders
            backgroundLayer
              .rect(x, y, TILE_WIDTH, TILE_HEIGHT)
              .stroke({ width: 1, color: isPoolLane ? 0x075985 : 0x14532d, alpha: 0.35 });
          }
        }

        // 2. Synchronize Lawnmowers
        for (let row = 0; row < ROWS; row++) {
          const mower = mowerSprites[row];
          if (mower) {
            const isAvailable = state.lawnMowers[row] ?? true;
            mower.visible = isAvailable;
            if (isAvailable) {
              const engineVibe = Math.sin(time * 16 + row) * 0.8;
              mower.position.set(PORCH_WIDTH / 2, row * TILE_HEIGHT + TILE_HEIGHT / 2 + engineVibe);
            }
          }
        }

        // 3. Synchronize Hazards
        const activeHazardIds = new Set(state.hazards.map((h) => h.id));
        // Remove dead hazards
        for (const [id, sprite] of hazardSprites.entries()) {
          if (!activeHazardIds.has(id)) {
            hazardsContainer.removeChild(sprite);
            hazardSprites.delete(id);
          }
        }
        // Update or add hazards
        for (const hazard of state.hazards) {
          let hSprite = hazardSprites.get(hazard.id);
          if (!hSprite) {
            hSprite = new Sprite(getHazardTexture(hazard.type));
            hSprite.anchor.set(0.5, 0.5);
            hSprite.width = 68;
            hSprite.height = 68;
            hazardsContainer.addChild(hSprite);
            hazardSprites.set(hazard.id, hSprite);
          }
          const hx = PORCH_WIDTH + hazard.col * TILE_WIDTH + TILE_WIDTH / 2;
          const hy = hazard.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          hSprite.position.set(hx, hy);
        }

        // 4. Synchronize Plants (High-res SVG Textures on Persistent Sprites)
        healthBarsLayer.clear();
        const activePlantIds = new Set(state.plants.map((p) => p.instanceId));

        // Remove dead / shoveled plants
        for (const [id, sprite] of plantSprites.entries()) {
          if (!activePlantIds.has(id)) {
            plantsContainer.removeChild(sprite);
            plantSprites.delete(id);
          }
        }

        // Update or add plants
        for (const plant of state.plants) {
          let pSprite = plantSprites.get(plant.instanceId);
          if (!pSprite) {
            pSprite = new Sprite(getPlantTexture(plant.plantId));
            pSprite.anchor.set(0.5, 0.5);
            pSprite.width = 72;
            pSprite.height = 72;
            plantsContainer.addChild(pSprite);
            plantSprites.set(plant.instanceId, pSprite);
          } else {
            pSprite.texture = getPlantTexture(plant.plantId);
          }

          const px = PORCH_WIDTH + plant.col * TILE_WIDTH + TILE_WIDTH / 2;
          const py = plant.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          const idleBob = Math.sin(time * 3 + plant.col * 0.8) * 2;
          pSprite.position.set(px, py + idleBob);

          // Plant HP Bar if damaged
          if (plant.hp < plant.maxHp) {
            const barW = 34;
            const barH = 4;
            const bx = px - barW / 2;
            const by = py + 30;
            const fillW = Math.max(0, (plant.hp / plant.maxHp) * barW);

            healthBarsLayer.roundRect(bx, by, barW, barH, 2).fill(0x0f172a);
            healthBarsLayer.roundRect(bx, by, fillW, barH, 2).fill(0x22c55e);
          }
        }

        // 5. Synchronize Zombies (High-res SVG Textures on Persistent Sprites)
        const activeZombieIds = new Set(state.zombies.map((z) => z.instanceId));

        // Remove dead zombies
        for (const [id, sprite] of zombieSprites.entries()) {
          if (!activeZombieIds.has(id)) {
            zombiesContainer.removeChild(sprite);
            zombieSprites.delete(id);
          }
        }

        // Update or add zombies
        for (const zombie of state.zombies) {
          let zSprite = zombieSprites.get(zombie.instanceId);
          if (!zSprite) {
            zSprite = new Sprite(getZombieTexture(zombie.zombieId));
            zSprite.anchor.set(0.5, 0.5);
            zSprite.width = 72;
            zSprite.height = 80;
            zombiesContainer.addChild(zSprite);
            zombieSprites.set(zombie.instanceId, zSprite);
          } else {
            zSprite.texture = getZombieTexture(zombie.zombieId);
          }

          // Discrete tile placement + walk animation sway
          const zx = PORCH_WIDTH + zombie.col * TILE_WIDTH + TILE_WIDTH / 2;
          const zy = zombie.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          const walkSway = Math.sin(time * 5 + zombie.instanceId.charCodeAt(0)) * 0.05;
          const eatBob = zombie.isEating ? Math.sin(time * 12) * 3 : 0;

          zSprite.position.set(zx, zy + eatBob);
          zSprite.rotation = walkSway;

          // Status Tints
          if (zombie.slowedTurns > 0) {
            zSprite.tint = 0x67e8f9; // Icy blue
          } else if (zombie.isHypnotized) {
            zSprite.tint = 0xc084fc; // Purple
            zSprite.scale.x = -1; // Turned around
          } else {
            zSprite.tint = 0xffffff;
            zSprite.scale.x = 1;
          }

          // Zombie HP Bar
          const barW = 34;
          const barH = 4;
          const bx = zx - barW / 2;
          const by = zy - 38;
          const fillW = Math.max(0, (zombie.hp / zombie.maxHp) * barW);
          const barColor = zombie.isHypnotized ? 0xc084fc : zombie.slowedTurns > 0 ? 0x38bdf8 : 0xef4444;

          healthBarsLayer.roundRect(bx, by, barW, barH, 2).fill(0x0f172a);
          healthBarsLayer.roundRect(bx, by, fillW, barH, 2).fill(barColor);
        }

        // 6. Synchronize Projectiles (High-res SVG Textures on Persistent Sprites)
        const activeProjIds = new Set(state.projectiles.map((p) => p.id));

        // Remove finished projectiles
        for (const [id, sprite] of projectileSprites.entries()) {
          if (!activeProjIds.has(id)) {
            projectilesContainer.removeChild(sprite);
            projectileSprites.delete(id);
          }
        }

        // Update or add projectiles
        for (const proj of state.projectiles) {
          let pSprite = projectileSprites.get(proj.id);
          if (!pSprite) {
            pSprite = new Sprite(getProjectileTexture(proj.type));
            pSprite.anchor.set(0.5, 0.5);
            pSprite.width = 24;
            pSprite.height = 24;
            projectilesContainer.addChild(pSprite);
            projectileSprites.set(proj.id, pSprite);
          } else {
            pSprite.texture = getProjectileTexture(proj.type);
          }

          const currentCol = proj.fromCol + (proj.toCol - proj.fromCol) * proj.progress;
          const px = PORCH_WIDTH + currentCol * TILE_WIDTH + TILE_WIDTH / 2;
          const py = proj.row * TILE_HEIGHT + TILE_HEIGHT / 2;

          pSprite.position.set(px, py);
          pSprite.rotation = time * 8; // Spinning flight
        }

        // 7. Interactive Hover Cursor & Ghost Placement Preview
        overlayLayer.clear();
        ghostSprite.visible = false;

        if (state.hoveredTile) {
          const { row, col } = state.hoveredTile;
          const hx = PORCH_WIDTH + col * TILE_WIDTH;
          const hy = row * TILE_HEIGHT;

          const plantOnTile = state.plants.find((p) => p.row === row && p.col === col);
          const hazardOnTile = state.hazards.find((h) => h.row === row && h.col === col);
          const isBlocked = !!hazardOnTile && hazardOnTile.type !== 'toxic_puddle';
          const canPlant = state.selectedPlantDef && !plantOnTile && !isBlocked;
          const canShovel = state.isShovelActive && (!!plantOnTile || hazardOnTile?.type === 'tombstone');

          if (canPlant && state.selectedPlantDef) {
            // Golden placement box
            overlayLayer
              .roundRect(hx + 3, hy + 3, TILE_WIDTH - 6, TILE_HEIGHT - 6, 8)
              .fill({ color: 0x22c55e, alpha: 0.25 })
              .stroke({ width: 2, color: 0xfacc15, alpha: 0.9 });

            // Ghost Preview of plant
            ghostSprite.texture = getPlantTexture(state.selectedPlantDef.id);
            ghostSprite.position.set(hx + TILE_WIDTH / 2, hy + TILE_HEIGHT / 2);
            ghostSprite.visible = true;
          } else if (canShovel) {
            // Red Shovel highlight
            overlayLayer
              .roundRect(hx + 3, hy + 3, TILE_WIDTH - 6, TILE_HEIGHT - 6, 8)
              .fill({ color: 0xdc2626, alpha: 0.3 })
              .stroke({ width: 2, color: 0xef4444, alpha: 0.9 });

            // Shovel icon preview
            const sx = hx + TILE_WIDTH / 2;
            const sy = hy + TILE_HEIGHT / 2 + Math.sin(time * 8) * 3;
            overlayLayer.roundRect(sx - 3, sy - 14, 6, 20, 2).fill(0x78350f);
            overlayLayer.poly([sx - 10, sy + 6, sx, sy + 18, sx + 10, sy + 6]).fill(0x94a3b8);
          } else if (state.selectedPlantDef && (plantOnTile || isBlocked)) {
            // Red blocked warning
            overlayLayer
              .roundRect(hx + 3, hy + 3, TILE_WIDTH - 6, TILE_HEIGHT - 6, 8)
              .fill({ color: 0xdc2626, alpha: 0.2 })
              .stroke({ width: 2, color: 0xef4444, alpha: 0.8 });
          } else {
            // Neutral hover border
            overlayLayer
              .roundRect(hx + 3, hy + 3, TILE_WIDTH - 6, TILE_HEIGHT - 6, 8)
              .stroke({ width: 1.5, color: 0xffffff, alpha: 0.4 });
          }
        }
      });
    };

    initPixi();

    return () => {
      isMounted = false;
      app.destroy(true, { children: true, texture: true });
    };
  }, []);

  // Mouse & Touch Tracking
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const scaleX = CANVAS_WIDTH / rect.width;
    const scaleY = CANVAS_HEIGHT / rect.height;

    const canvasX = clientX * scaleX;
    const canvasY = clientY * scaleY;

    if (canvasX >= PORCH_WIDTH && canvasX <= CANVAS_WIDTH && canvasY >= 0 && canvasY <= CANVAS_HEIGHT) {
      const col = Math.floor((canvasX - PORCH_WIDTH) / TILE_WIDTH);
      const row = Math.floor(canvasY / TILE_HEIGHT);

      if (row >= 0 && row < ROWS && col >= 0 && col < COLS) {
        setHoveredTile({ row, col });
        return;
      }
    }
    setHoveredTile(null);
  };

  const handlePointerLeave = () => {
    setHoveredTile(null);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const scaleX = CANVAS_WIDTH / rect.width;
    const scaleY = CANVAS_HEIGHT / rect.height;

    const canvasX = clientX * scaleX;
    const canvasY = clientY * scaleY;

    if (canvasX >= PORCH_WIDTH && canvasX <= CANVAS_WIDTH && canvasY >= 0 && canvasY <= CANVAS_HEIGHT) {
      const col = Math.floor((canvasX - PORCH_WIDTH) / TILE_WIDTH);
      const row = Math.floor(canvasY / TILE_HEIGHT);

      if (row >= 0 && row < ROWS && col >= 0 && col < COLS) {
        onTileClick(row, col);
      }
    }
  };

  const totalEntities = plants.length + zombies.length + projectiles.length + hazards.length;

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl border-4 border-amber-950/80 bg-stone-900 shadow-2xl select-none">
      {/* Top Soil Curb Header with Engine Info & FPS */}
      <div className="w-full h-8 bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 border-b border-amber-800/40 px-3 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-emerald-400 font-bold">
          <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>PIXI.JS v8 WebGL Accelerated</span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-700/60 text-[10px] text-emerald-300">
            {fps} FPS
          </span>
        </div>

        <div className="flex items-center gap-3 text-stone-400 text-[11px]">
          <span>
            Entities: <strong className="text-amber-300">{totalEntities}</strong> (
            <span className="text-emerald-400">{plants.length}P</span> /{' '}
            <span className="text-red-400">{zombies.length}Z</span> /{' '}
            <span className="text-cyan-400">{projectiles.length}Proj</span>)
          </span>
          <span className="hidden sm:flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" /> High-Cap Ready
          </span>
        </div>
      </div>

      {/* Main Pixi.js Canvas Viewport + Smooth Floating Text Overlay */}
      <div
        className="relative w-full aspect-[960/520] cursor-pointer bg-slate-950"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleCanvasClick}
      >
        {/* Pixi Canvas Viewport */}
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />

        {/* Floating Combat Text Overlay: Smooth CSS Animation Without Stacking */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-30">
          {floatingTexts.map((ft, index) => {
            const leftPct = ((PORCH_WIDTH + ft.col * TILE_WIDTH + TILE_WIDTH / 2) / CANVAS_WIDTH) * 100;
            const staggerY = (index % 3) * 6;
            const topPct = ((ft.row * TILE_HEIGHT + 16 + staggerY) / CANVAS_HEIGHT) * 100;

            const colorClass =
              ft.color === 'yellow'
                ? 'text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                : ft.color === 'cyan'
                ? 'text-cyan-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                : ft.color === 'red'
                ? 'text-red-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                : ft.color === 'purple'
                ? 'text-purple-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]'
                : 'text-orange-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]';

            return (
              <div
                key={ft.id}
                className={`absolute font-mono font-black text-sm tracking-wide animate-float-damage pointer-events-none -translate-x-1/2 ${colorClass}`}
                style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              >
                {ft.text}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lawn Footer Curb */}
      <div className="w-full h-5 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-t border-amber-800/40 flex items-center justify-between px-4 text-[10px] font-mono text-amber-500/80">
        <span className="capitalize">Theme: {lawnTheme} Lawn</span>
        <span>Resolution: 960x520 WebGL (5x8 Grid)</span>
      </div>
    </div>
  );
};
