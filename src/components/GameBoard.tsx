import React, { useEffect, useRef, useState } from 'react';
import { Application, Container, Graphics, Text, TextStyle } from 'pixi.js';
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
  drawPlant,
  drawZombie,
  drawHazard,
  drawProjectile,
  drawLawnMower,
} from '../pixi/drawEntities';
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

  // Live performance stats
  const [fps, setFps] = useState<number>(60);
  const [hoveredTile, setHoveredTile] = useState<{ row: number; col: number } | null>(null);

  // Keep latest props in a ref so the Pixi ticker always reads fresh state without re-creating the app
  const stateRef = useRef({
    plants,
    zombies,
    hazards,
    projectiles,
    floatingTexts,
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
    floatingTexts,
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

    // Scene Graph Containers
    const stage = app.stage;
    const backgroundLayer = new Graphics();
    const mowerLayer = new Graphics();
    const hazardLayer = new Graphics();
    const plantLayer = new Graphics();
    const zombieLayer = new Graphics();
    const projectileLayer = new Graphics();
    const overlayLayer = new Graphics();
    const textLayer = new Container();

    stage.addChild(backgroundLayer);
    stage.addChild(mowerLayer);
    stage.addChild(hazardLayer);
    stage.addChild(plantLayer);
    stage.addChild(zombieLayer);
    stage.addChild(projectileLayer);
    stage.addChild(overlayLayer);
    stage.addChild(textLayer);

    const initPixi = async () => {
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

        // 1. Draw Lawn Background
        backgroundLayer.clear();
        // Porch Curb
        backgroundLayer.rect(0, 0, PORCH_WIDTH, CANVAS_HEIGHT).fill(0x1f2937);
        backgroundLayer.rect(PORCH_WIDTH - 3, 0, 3, CANVAS_HEIGHT).fill(0x374151);

        for (let row = 0; row < ROWS; row++) {
          const isPoolLane = state.lawnTheme === 'pool' && (row === 2 || row === 3);

          // Porch lane divider
          backgroundLayer.rect(0, row * TILE_HEIGHT, PORCH_WIDTH, 1).fill(0x374151);

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

            // Water ripples in pool lane
            if (isPoolLane) {
              const rippleOffset = Math.sin(time * 3 + col) * 6;
              backgroundLayer
                .roundRect(x + 20 + rippleOffset, y + TILE_HEIGHT / 2, 40, 2, 1)
                .fill({ color: 0xffffff, alpha: 0.25 });
            }

            // Grid border lines
            backgroundLayer
              .rect(x, y, TILE_WIDTH, TILE_HEIGHT)
              .stroke({ width: 1, color: isPoolLane ? 0x075985 : 0x14532d, alpha: 0.35 });
          }
        }

        // 2. Draw Lawnmowers
        mowerLayer.clear();
        for (let row = 0; row < ROWS; row++) {
          const isAvailable = state.lawnMowers[row] ?? true;
          drawLawnMower(mowerLayer, 16, row * TILE_HEIGHT + 24, isAvailable, time);
        }

        // 3. Draw Hazards
        hazardLayer.clear();
        for (const hazard of state.hazards) {
          const hx = PORCH_WIDTH + hazard.col * TILE_WIDTH + TILE_WIDTH / 2;
          const hy = hazard.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          hazardLayer.position.set(hx, hy);
          drawHazard(hazardLayer, hazard, time);
        }
        hazardLayer.position.set(0, 0);

        // 4. Draw Plants
        plantLayer.clear();
        for (const plant of state.plants) {
          const px = PORCH_WIDTH + plant.col * TILE_WIDTH + TILE_WIDTH / 2;
          const py = plant.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          plantLayer.position.set(px, py);
          drawPlant(plantLayer, plant, time);
        }
        plantLayer.position.set(0, 0);

        // 5. Draw Zombies (supports hundreds with batch WebGL)
        zombieLayer.clear();
        for (const zombie of state.zombies) {
          const zx = PORCH_WIDTH + zombie.col * TILE_WIDTH + TILE_WIDTH / 2;
          const zy = zombie.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          zombieLayer.position.set(zx, zy);
          drawZombie(zombieLayer, zombie, time);
        }
        zombieLayer.position.set(0, 0);

        // 6. Draw Projectiles (supports hundreds/thousands)
        projectileLayer.clear();
        for (const proj of state.projectiles) {
          const currentCol = proj.fromCol + (proj.toCol - proj.fromCol) * proj.progress;
          const px = PORCH_WIDTH + currentCol * TILE_WIDTH + TILE_WIDTH / 2;
          const py = proj.row * TILE_HEIGHT + TILE_HEIGHT / 2;
          projectileLayer.position.set(px, py);
          drawProjectile(projectileLayer, proj, time);
        }
        projectileLayer.position.set(0, 0);

        // 7. Interactive Hover Overlay & Ghost Placement Preview
        overlayLayer.clear();
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
            // Yellow placement highlight
            overlayLayer
              .roundRect(hx + 2, hy + 2, TILE_WIDTH - 4, TILE_HEIGHT - 4, 8)
              .fill({ color: 0x22c55e, alpha: 0.25 })
              .stroke({ width: 2, color: 0xfacc15, alpha: 0.9 });

            // Ghost Preview of plant
            overlayLayer.position.set(hx + TILE_WIDTH / 2, hy + TILE_HEIGHT / 2);
            overlayLayer.alpha = 0.6;
            drawPlant(
              overlayLayer,
              {
                instanceId: 'preview',
                plantId: state.selectedPlantDef.id,
                row,
                col,
                hp: state.selectedPlantDef.maxHp,
                maxHp: state.selectedPlantDef.maxHp,
                turnsAlive: 0,
                actionCounter: 0,
              },
              time
            );
            overlayLayer.alpha = 1;
            overlayLayer.position.set(0, 0);
          } else if (canShovel) {
            // Red Shovel highlight
            overlayLayer
              .roundRect(hx + 2, hy + 2, TILE_WIDTH - 4, TILE_HEIGHT - 4, 8)
              .fill({ color: 0xdc2626, alpha: 0.3 })
              .stroke({ width: 2, color: 0xef4444, alpha: 0.9 });

            // Draw Shovel icon
            const sx = hx + TILE_WIDTH / 2;
            const sy = hy + TILE_HEIGHT / 2 + Math.sin(time * 8) * 3;
            overlayLayer.roundRect(sx - 3, sy - 14, 6, 20, 2).fill(0x78350f);
            overlayLayer.poly([sx - 10, sy + 6, sx, sy + 18, sx + 10, sy + 6]).fill(0x94a3b8);
          } else if (state.selectedPlantDef && (plantOnTile || isBlocked)) {
            // Red blocked warning
            overlayLayer
              .roundRect(hx + 2, hy + 2, TILE_WIDTH - 4, TILE_HEIGHT - 4, 8)
              .fill({ color: 0xdc2626, alpha: 0.2 })
              .stroke({ width: 2, color: 0xef4444, alpha: 0.8 });
          } else {
            // Neutral hover tile border
            overlayLayer
              .roundRect(hx + 2, hy + 2, TILE_WIDTH - 4, TILE_HEIGHT - 4, 8)
              .stroke({ width: 1.5, color: 0xffffff, alpha: 0.4 });
          }
        }

        // 8. Floating Combat Text
        textLayer.removeChildren();
        for (const ft of state.floatingTexts) {
          const tx = PORCH_WIDTH + ft.col * TILE_WIDTH + TILE_WIDTH / 2;
          const ty = ft.row * TILE_HEIGHT + 14;

          const textColor =
            ft.color === 'yellow'
              ? 0xfacc15
              : ft.color === 'cyan'
              ? 0x38bdf8
              : ft.color === 'red'
              ? 0xef4444
              : ft.color === 'purple'
              ? 0xc084fc
              : 0xf97316;

          const label = new Text({
            text: ft.text,
            style: new TextStyle({
              fontFamily: 'Outfit, sans-serif',
              fontSize: 16,
              fontWeight: '900',
              fill: textColor,
              stroke: { color: 0x000000, width: 4 },
              dropShadow: {
                alpha: 0.8,
                angle: Math.PI / 6,
                blur: 3,
                color: 0x000000,
                distance: 2,
              },
            }),
          });
          label.anchor.set(0.5, 0.5);
          label.position.set(tx, ty);
          textLayer.addChild(label);
        }
      });
    };

    initPixi();

    return () => {
      isMounted = false;
      app.destroy(true, { children: true, texture: true });
    };
  }, []);

  // Mouse & Touch Interaction with the Lawn Canvas
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    // Scale from CSS display coordinates to 960x520 virtual canvas
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

      {/* Main Pixi.js Canvas Viewport */}
      <div
        ref={containerRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onClick={handleCanvasClick}
        className="relative w-full aspect-[960/520] cursor-pointer bg-slate-950"
      />

      {/* Lawn Footer Curb */}
      <div className="w-full h-5 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-t border-amber-800/40 flex items-center justify-between px-4 text-[10px] font-mono text-amber-500/80">
        <span className="capitalize">Theme: {lawnTheme} Lawn</span>
        <span>Resolution: 960x520 WebGL (5x8 Grid)</span>
      </div>
    </div>
  );
};
