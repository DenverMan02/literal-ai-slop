import React, { useState } from 'react';
import {
  FloatingText,
  LawnHazard,
  PlantDefinition,
  PlantInstance,
  Projectile,
  TurnPhase,
  ZombieInstance,
} from '../types/game';
import { PlantArtwork } from './artwork/PlantArtwork';
import { ZombieArtwork } from './artwork/ZombieArtwork';
import { HazardArtwork } from './artwork/HazardArtwork';
import { LawnMower } from './LawnMower';
import { Shovel, AlertOctagon } from 'lucide-react';

interface GameBoardProps {
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

export const GameBoard: React.FC<GameBoardProps> = ({
  plants,
  zombies,
  hazards,
  projectiles,
  floatingTexts,
  lawnMowers,
  selectedPlantDef,
  isShovelActive,
  turnPhase,
  lawnTheme = 'day',
  onTileClick,
}) => {
  const [hoveredTile, setHoveredTile] = useState<{ row: number; col: number } | null>(null);

  const ROWS = 5;
  const COLS = 8; // Faster paced: 8 discrete columns (0-7)

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl border-4 border-amber-950/80 bg-stone-900 shadow-2xl select-none">
      {/* Soil Curb / Fence Top Header */}
      <div className="w-full h-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-b border-amber-800/40" />

      {/* Main Lawn Arena Container */}
      <div className="relative flex w-full">
        {/* Left Side: Porch Curb with Lawn Mowers / Pool Cleaners */}
        <div className="flex flex-col w-12 sm:w-16 shrink-0 bg-stone-800 border-r-2 border-stone-700 z-10">
          {Array.from({ length: ROWS }).map((_, rowIdx) => {
            const isPoolLane = lawnTheme === 'pool' && (rowIdx === 2 || rowIdx === 3);
            return (
              <div
                key={rowIdx}
                className={`h-20 sm:h-24 border-b border-stone-700/60 flex items-center justify-center p-1 ${
                  isPoolLane ? 'bg-cyan-950/80' : 'bg-stone-800/90'
                }`}
              >
                <LawnMower
                  isAvailable={lawnMowers[rowIdx]}
                  isTriggered={false}
                  className="w-10 sm:w-12 h-9 sm:h-10"
                />
              </div>
            );
          })}
        </div>

        {/* Tactical 5x8 Lawn Grid */}
        <div className="relative flex-1 grid grid-rows-5 bg-emerald-950">
          {Array.from({ length: ROWS }).map((_, rowIdx) => {
            const isPoolLane = lawnTheme === 'pool' && (rowIdx === 2 || rowIdx === 3);

            return (
              <div
                key={rowIdx}
                className={`grid grid-cols-8 h-20 sm:h-24 border-b relative ${
                  isPoolLane ? 'border-cyan-800/60' : 'border-emerald-900/60'
                }`}
              >
                {Array.from({ length: COLS }).map((_, colIdx) => {
                  const plantOnTile = plants.find((p) => p.row === rowIdx && p.col === colIdx);
                  const hazardOnTile = hazards.find((h) => h.row === rowIdx && h.col === colIdx);
                  const isCheckered = (rowIdx + colIdx) % 2 === 0;
                  const isHovered =
                    hoveredTile?.row === rowIdx && hoveredTile?.col === colIdx;

                  const isBlockedByHazard = !!hazardOnTile && hazardOnTile.type !== 'toxic_puddle';
                  const canPlant = selectedPlantDef && !plantOnTile && !isBlockedByHazard;
                  const canShovel = isShovelActive && (!!plantOnTile || hazardOnTile?.type === 'tombstone');

                  // Determine tile color based on lawn theme & pool lane
                  let tileBg = isCheckered ? 'bg-[#276e27]' : 'bg-[#2f822f]';
                  if (lawnTheme === 'pool' && isPoolLane) {
                    tileBg = isCheckered ? 'bg-[#0284c7]' : 'bg-[#0369a1]';
                  } else if (lawnTheme === 'roof') {
                    tileBg = isCheckered ? 'bg-[#b45309]' : 'bg-[#9a3412]';
                  } else if (lawnTheme === 'night') {
                    tileBg = isCheckered ? 'bg-[#14532d]' : 'bg-[#052e16]';
                  }

                  return (
                    <div
                      key={colIdx}
                      onClick={() => onTileClick(rowIdx, colIdx)}
                      onMouseEnter={() => setHoveredTile({ row: rowIdx, col: colIdx })}
                      onMouseLeave={() => setHoveredTile(null)}
                      className={`relative border-r flex items-center justify-center transition-colors duration-100 cursor-pointer ${
                        isPoolLane ? 'border-cyan-800/40' : 'border-emerald-900/40'
                      } ${tileBg} ${
                        isHovered && canPlant
                          ? 'ring-2 ring-inset ring-amber-400/80 bg-emerald-600/60'
                          : isHovered && selectedPlantDef && (plantOnTile || isBlockedByHazard)
                          ? 'ring-2 ring-inset ring-red-500/80 bg-red-950/40'
                          : ''
                      } ${
                        isHovered && canShovel
                          ? 'ring-2 ring-inset ring-red-500 bg-red-950/40'
                          : ''
                      }`}
                    >
                      {/* Pool lane water ripples */}
                      {isPoolLane && !plantOnTile && (
                        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-around">
                          <div className="w-8 h-0.5 bg-white rounded-full animate-pulse" />
                        </div>
                      )}
                    {/* Dynamic Lawn Hazard on this Tile */}
                    {hazardOnTile && (
                      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none p-1">
                        <HazardArtwork
                          type={hazardOnTile.type}
                          hp={hazardOnTile.hp}
                          maxHp={hazardOnTile.maxHp}
                          turnsRemaining={hazardOnTile.turnsRemaining}
                          className="w-14 sm:w-16 h-14 sm:h-16"
                        />
                      </div>
                    )}

                    {/* Plant in Tile */}
                    {plantOnTile && (
                      <div className="relative flex flex-col items-center justify-center w-full h-full z-20 pointer-events-none">
                        <PlantArtwork
                          plantId={plantOnTile.plantId}
                          hp={plantOnTile.hp}
                          maxHp={plantOnTile.maxHp}
                          isArmed={plantOnTile.isArmed}
                          chewingTurnsRemaining={plantOnTile.chewingTurnsRemaining}
                          className="w-14 sm:w-16 h-14 sm:h-16"
                        />

                        {/* Plant HP Bar if damaged */}
                        {plantOnTile.hp < plantOnTile.maxHp && (
                          <div className="absolute bottom-1 w-10 sm:w-12 h-1.5 bg-slate-950 rounded-full border border-slate-700 overflow-hidden">
                            <div
                              className="h-full bg-emerald-400 transition-all"
                              style={{
                                width: `${Math.max(0, (plantOnTile.hp / plantOnTile.maxHp) * 100)}%`,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}

                    {/* Translucent Placement Preview when hovering */}
                    {isHovered && canPlant && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-60 pointer-events-none z-20">
                        <PlantArtwork
                          plantId={selectedPlantDef.id}
                          className="w-12 sm:w-14 h-12 sm:h-14"
                        />
                      </div>
                    )}

                    {/* Blocked placement alert */}
                    {isHovered && selectedPlantDef && isBlockedByHazard && (
                      <div className="absolute inset-0 flex items-center justify-center bg-red-950/50 pointer-events-none z-20">
                        <AlertOctagon className="w-6 h-6 text-red-400" />
                      </div>
                    )}

                    {/* Shovel Dig Preview */}
                    {isHovered && canShovel && (
                      <div className="absolute inset-0 flex items-center justify-center bg-red-900/30 pointer-events-none z-30">
                        <Shovel className="w-8 h-8 text-red-400 animate-bounce" />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Grid-locked Zombies in this row: strictly stationed on discrete integer tiles 0 to 8 */}
              {zombies
                .filter((z) => z.row === rowIdx)
                .map((zombie) => {
                  // Discrete grid calculation: zombie.col is strictly an integer tile index (0 to 8)
                  const leftPercentage = (zombie.col / COLS) * 100;

                  return (
                    <div
                      key={zombie.instanceId}
                      className="absolute top-0 h-full flex flex-col items-center justify-center z-25 transition-all duration-150 ease-out pointer-events-none"
                      style={{
                        left: `${leftPercentage}%`,
                        width: `${100 / COLS}%`,
                      }}
                    >
                      <ZombieArtwork
                        zombieId={zombie.zombieId}
                        hp={zombie.hp}
                        maxHp={zombie.maxHp}
                        isSlowed={zombie.slowedTurns > 0}
                        isEating={zombie.isEating}
                        hasSpecialArmor={zombie.hasSpecialArmor}
                        hasVaulted={zombie.hasVaulted}
                        isHypnotized={zombie.isHypnotized}
                        className="w-14 sm:w-16 h-18 sm:h-22"
                      />

                      {/* Zombie HP Bar */}
                      <div className="w-10 sm:w-12 h-1.5 bg-slate-950 rounded-full border border-slate-700 overflow-hidden mt-0.5">
                        <div
                          className={`h-full transition-all ${
                            zombie.isHypnotized
                              ? 'bg-purple-400'
                              : zombie.slowedTurns > 0
                              ? 'bg-cyan-400'
                              : 'bg-red-500'
                          }`}
                          style={{
                            width: `${Math.max(0, (zombie.hp / zombie.maxHp) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

              {/* Projectiles flying in this row */}
              {projectiles
                .filter((proj) => proj.row === rowIdx)
                .map((proj) => {
                  const currentCol =
                    proj.fromCol + (proj.toCol - proj.fromCol) * proj.progress;
                  const leftPercentage = (currentCol / COLS) * 100;

                  return (
                    <div
                      key={proj.id}
                      className="absolute top-1/2 -translate-y-1/2 z-30 pointer-events-none"
                      style={{ left: `${leftPercentage}%` }}
                    >
                      {proj.type === 'melon' ? (
                        <div className="w-6 h-5 rounded-full bg-emerald-500 border border-emerald-300 ring-2 ring-emerald-600/70 shadow-lg flex items-center justify-center transform -rotate-12 animate-pulse">
                          <div className="w-4 h-0.5 bg-emerald-800" />
                        </div>
                      ) : proj.type === 'spore' ? (
                        <div className="w-4 h-4 rounded-full bg-purple-500 border border-purple-300 ring-4 ring-purple-500/40 shadow-purple-500/80 animate-ping">
                          <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto mt-1" />
                        </div>
                      ) : (
                        <div
                          className={`w-4 h-4 rounded-full border shadow-md flex items-center justify-center ${
                            proj.type === 'frostpea'
                              ? 'bg-cyan-300 border-cyan-100 ring-2 ring-cyan-400/50'
                              : proj.type === 'firepea'
                              ? 'bg-gradient-to-r from-amber-400 to-red-500 border-yellow-200 ring-2 ring-orange-500/70 shadow-orange-500/50 animate-pulse'
                              : 'bg-emerald-400 border-emerald-200 ring-2 ring-emerald-500/40'
                          }`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        </div>
                      )}
                    </div>
                  );
                })}

              {/* Floating Combat Texts in this row */}
              {floatingTexts
                .filter((ft) => ft.row === rowIdx)
                .map((ft) => {
                  const leftPercentage = (ft.col / COLS) * 100;
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
                      className={`absolute top-2 z-40 font-mono font-black text-sm tracking-wide animate-float-damage pointer-events-none ${colorClass}`}
                      style={{ left: `${leftPercentage + 1.5}%` }}
                    >
                      {ft.text}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Lawn Footer Curb */}
      <div className="w-full h-4 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 border-t border-amber-800/40 flex items-center justify-between px-4 text-[10px] font-mono text-amber-500/80">
        <span className="capitalize">Lawn Type: {lawnTheme} Grid</span>
        <span>Grid Alignment: Fast 8 Tiles (0-7)</span>
      </div>
    </div>
  );
};
