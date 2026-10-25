import React from 'react';
import { LevelConfig, PlantId, ZombieId } from '../../types/game';
import { PLANT_DEFINITIONS } from '../../constants/plants';
import { ZOMBIE_DEFINITIONS } from '../../constants/zombies';
import { LEVEL_PLANT_UNLOCKS } from '../../services/storage';
import { PlantArtwork } from '../artwork/PlantArtwork';
import { ZombieArtwork } from '../artwork/ZombieArtwork';
import {
  Play,
  Sparkles,
  ShieldAlert,
  Sun,
  X,
  Check,
  Lock,
  ArrowLeft,
  RotateCcw,
} from 'lucide-react';

interface ChooseSeedsModalProps {
  isOpen: boolean;
  level: LevelConfig;
  allAvailablePlantIds: PlantId[];
  unlockedPlantIds?: PlantId[];
  selectedSeedIds: PlantId[];
  maxSeeds?: number;
  onToggleSeed: (plantId: PlantId) => void;
  onAutoFill: () => void;
  onClearSeeds: () => void;
  onStartBattle: () => void;
  onCancel?: () => void;
}

const getPlantUnlockSector = (plantId: PlantId): number | null => {
  for (const [secIdx, list] of Object.entries(LEVEL_PLANT_UNLOCKS)) {
    if (list.includes(plantId)) return Number(secIdx) + 1;
  }
  return null;
};

export const ChooseSeedsModal: React.FC<ChooseSeedsModalProps> = ({
  isOpen,
  level,
  allAvailablePlantIds,
  unlockedPlantIds,
  selectedSeedIds,
  maxSeeds = 8,
  onToggleSeed,
  onAutoFill,
  onClearSeeds,
  onStartBattle,
  onCancel,
}) => {
  if (!isOpen) return null;

  // Identify distinct zombie types appearing in this level
  const uniqueZombieIds: ZombieId[] = Array.from(
    new Set(level.spawns.map((s) => s.zombieId))
  );

  const canStart = selectedSeedIds.length > 0;
  const unlockedSet = new Set(unlockedPlantIds || allAvailablePlantIds);

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 select-none overflow-y-auto">
      <div className="bg-stone-900 border-2 border-amber-900/80 rounded-2xl w-full max-w-5xl shadow-2xl flex flex-col max-h-[94vh] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-stone-950 px-5 py-3 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
                title="Return to Level Map"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  Pre-Combat Seed Selection
                </span>
                <span className="text-stone-600">·</span>
                <span className="text-xs text-stone-400 capitalize">
                  {level.name} ({level.lawnTheme || 'Day'} Turf)
                </span>
              </div>
              <h2 className="text-xl font-black text-white tracking-tight">
                Choose Your Seeds
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-stone-400">Deck Slots:</span>
            <span
              className={`font-bold px-2 py-0.5 rounded ${
                selectedSeedIds.length === maxSeeds
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                  : 'bg-stone-800 text-amber-300'
              }`}
            >
              {selectedSeedIds.length} / {maxSeeds}
            </span>
          </div>
        </div>

        {/* Selected Seeds Conveyor Deck Tray (Top) */}
        <div className="bg-stone-950/80 border-b border-stone-800 p-3 sm:px-6 flex items-center justify-between gap-3 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            {Array.from({ length: maxSeeds }).map((_, slotIdx) => {
              const plantId = selectedSeedIds[slotIdx];
              const plant = plantId ? PLANT_DEFINITIONS[plantId] : null;

              return (
                <div
                  key={slotIdx}
                  onClick={() => plantId && onToggleSeed(plantId)}
                  className={`w-15 sm:w-16 h-20 rounded-xl border flex flex-col items-center justify-between p-1 transition-all relative ${
                    plant
                      ? 'bg-stone-900 border-emerald-500/80 hover:border-red-400 cursor-pointer shadow-md hover:scale-95'
                      : 'bg-stone-950/60 border-stone-800/80 border-dashed justify-center'
                  }`}
                  title={plant ? `Click to remove ${plant.name}` : `Empty Slot ${slotIdx + 1}`}
                >
                  {plant ? (
                    <>
                      <div className="w-8 h-8 mt-1">
                        <PlantArtwork plantId={plant.id} className="w-full h-full" />
                      </div>
                      <span className="text-[9px] font-bold text-stone-200 truncate w-full text-center">
                        {plant.name}
                      </span>
                      <div className="flex items-center gap-0.5 text-[10px] font-mono text-amber-300 font-bold">
                        <Sun className="w-2.5 h-2.5 fill-amber-300" />
                        <span>{plant.cost}</span>
                      </div>
                    </>
                  ) : (
                    <span className="text-[11px] font-mono text-stone-600 font-bold">
                      {slotIdx + 1}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Deck Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onAutoFill}
              className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Auto-Fill</span>
            </button>
            <button
              type="button"
              onClick={onClearSeeds}
              className="px-2.5 py-1.5 rounded-lg bg-stone-850 hover:bg-stone-800 text-stone-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Main Body: Catalog (Left) + Zombie Threat Recon (Right) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-y-auto">
          {/* Plants Catalog (8 cols) */}
          <div className="md:col-span-8 p-4 sm:p-5 border-r border-stone-800 overflow-y-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-stone-300 uppercase tracking-wider">
                Domestic Flora Arsenal
              </span>
              <span className="text-[11px] text-stone-400">
                Click unlocked plants to equip into your 8 battle slots
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {allAvailablePlantIds.map((pId) => {
                const plant = PLANT_DEFINITIONS[pId];
                const isUnlocked = unlockedSet.has(pId);
                const isSelected = selectedSeedIds.includes(pId);
                const isFull = selectedSeedIds.length >= maxSeeds;
                const unlockSector = getPlantUnlockSector(pId);

                if (!isUnlocked) {
                  return (
                    <div
                      key={pId}
                      className="p-2.5 rounded-xl border border-stone-800/80 bg-stone-950/60 opacity-60 flex flex-col justify-between relative cursor-not-allowed"
                      title={unlockSector ? `Unlocks by completing Sector ${unlockSector}` : 'Locked'}
                    >
                      <div className="flex items-start justify-between gap-1 w-full">
                        <div className="w-9 h-9 opacity-40 grayscale">
                          <PlantArtwork plantId={plant.id} className="w-full h-full" />
                        </div>
                        <Lock className="w-3.5 h-3.5 text-amber-500/80" />
                      </div>
                      <div className="mt-2">
                        <span className="block text-xs font-bold text-stone-400 truncate">
                          {plant.name}
                        </span>
                        <span className="block text-[9px] font-mono text-amber-500/80 font-bold mt-1">
                          {unlockSector ? `Sector ${unlockSector} Unlock` : 'Locked'}
                        </span>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={pId}
                    type="button"
                    disabled={!isSelected && isFull}
                    onClick={() => onToggleSeed(pId)}
                    className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition-all relative ${
                      isSelected
                        ? 'bg-emerald-950/70 border-emerald-500 shadow-md ring-2 ring-emerald-500/30'
                        : isFull
                        ? 'bg-stone-950/40 border-stone-800/60 opacity-40 cursor-not-allowed'
                        : 'bg-stone-950 border-stone-800 hover:border-amber-600/80 hover:bg-stone-850/60 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 w-full">
                      <div className="w-10 h-10 shrink-0">
                        <PlantArtwork plantId={plant.id} className="w-full h-full" />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-mono text-amber-300 font-extrabold flex items-center gap-0.5">
                          <Sun className="w-2.5 h-2.5 fill-amber-300" />
                          {plant.cost}
                        </span>
                        <span className="text-[9px] font-mono text-stone-400">
                          {plant.cooldownTurns}T CD
                        </span>
                      </div>
                    </div>

                    <div className="mt-2">
                      <span className="block text-xs font-bold text-white leading-tight">
                        {plant.name}
                      </span>
                      <span className="block text-[10px] text-stone-400 line-clamp-2 mt-0.5">
                        {plant.turnActionDescription}
                      </span>
                    </div>

                    {isSelected && (
                      <div className="absolute top-1.5 left-1.5 w-4 h-4 rounded-full bg-emerald-500 text-stone-950 flex items-center justify-center">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Zombie Reconnaissance Dossier (4 cols) */}
          <div className="md:col-span-4 p-4 sm:p-5 bg-stone-950/60 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Zombies Approaching Lawn
                </span>
              </div>

              <p className="text-[11px] text-stone-400 mb-3">
                Scout incoming threats to equip counters before starting!
              </p>

              <div className="flex flex-col gap-2">
                {uniqueZombieIds.map((zId) => {
                  const zombie = ZOMBIE_DEFINITIONS[zId];
                  return (
                    <div
                      key={zId}
                      className="p-2 rounded-xl bg-stone-900 border border-stone-800 flex items-center gap-3"
                    >
                      <div className="w-8 h-10 shrink-0">
                        <ZombieArtwork zombieId={zId} className="w-full h-full" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-xs font-bold text-stone-200 truncate">
                          {zombie.name}
                        </span>
                        <span className="block text-[10px] text-stone-400 truncate mt-0.5">
                          {zombie.description}
                        </span>
                        <span className="inline-block text-[9px] font-mono text-red-400">
                          {zombie.maxHp} HP · {zombie.armorType || 'Unarmored'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Level Modifiers Banner */}
            {level.specialModifier && (
              <div className="mt-4 p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs">
                <span className="font-bold text-amber-300 block">Sector Recon Intel:</span>
                <span className="text-[11px] text-stone-300 mt-0.5 block leading-relaxed">
                  {level.specialModifier}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Action Bar */}
        <div className="bg-stone-950 px-5 py-3 border-t border-stone-800 flex items-center justify-between gap-4">
          <div className="text-xs text-stone-400 font-mono">
            <span>Starting Sun: </span>
            <strong className="text-amber-300 font-bold">{level.startingSun}</strong>
            <span className="mx-2">·</span>
            <span>Waves: </span>
            <strong className="text-stone-200 font-bold">{level.totalWaves}</strong>
          </div>

          <button
            type="button"
            disabled={!canStart}
            onClick={onStartBattle}
            className={`px-8 py-2.5 rounded-xl font-black text-sm tracking-wide uppercase transition-all shadow-md flex items-center gap-2 cursor-pointer ${
              canStart
                ? 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white shadow-emerald-950/50 hover:shadow-lg active:scale-95'
                : 'bg-stone-800 text-stone-500 cursor-not-allowed border border-stone-700'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Rock and Roll!</span>
          </button>
        </div>
      </div>
    </div>
  );
};
