import React from 'react';
import { PlantDefinition } from '../types/game';
import { PlantArtwork } from './artwork/PlantArtwork';
import { Sun } from 'lucide-react';

interface SeedPacketProps {
  plant: PlantDefinition;
  currentSun: number;
  cooldownTurnsRemaining: number;
  isSelected: boolean;
  shortcutIndex: number;
  onSelect: () => void;
  disabled?: boolean;
}

export const SeedPacket: React.FC<SeedPacketProps> = ({
  plant,
  currentSun,
  cooldownTurnsRemaining,
  isSelected,
  shortcutIndex,
  onSelect,
  disabled = false,
}) => {
  const canAfford = currentSun >= plant.cost;
  const isReady = cooldownTurnsRemaining <= 0;
  const isAvailable = canAfford && isReady && !disabled;

  return (
    <button
      type="button"
      onClick={() => {
        if (isAvailable) onSelect();
      }}
      disabled={!isAvailable && !isSelected}
      title={`${plant.name} (${plant.cost} Sun) - ${plant.turnActionDescription}`}
      className={`group relative flex flex-col items-center justify-between w-16 sm:w-18 md:w-20 h-22 sm:h-24 md:h-26 rounded-lg p-1 transition-all duration-150 border-2 select-none shrink-0 ${
        isSelected
          ? 'bg-amber-950/90 border-amber-300 ring-4 ring-amber-400/40 scale-105 z-20 shadow-xl'
          : isAvailable
          ? 'bg-stone-900/95 border-amber-900/80 hover:border-emerald-400 hover:bg-stone-850 cursor-pointer shadow-md active:scale-95'
          : 'bg-stone-950/90 border-stone-800/80 opacity-60 cursor-not-allowed'
      }`}
    >
      {/* Keyboard shortcut hint */}
      <span className="absolute -top-1.5 -left-1 w-4 h-4 rounded bg-stone-800 border border-stone-600 text-[10px] font-mono text-amber-200 flex items-center justify-center font-bold shadow">
        {shortcutIndex}
      </span>

      {/* Plant Artwork */}
      <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center mt-0.5">
        <PlantArtwork plantId={plant.id} className="w-full h-full" />
      </div>

      {/* Name and Sun Cost */}
      <div className="w-full text-center bg-stone-950/80 rounded py-0.5 px-0.5 border-t border-stone-800">
        <span className="block text-[10px] font-bold text-stone-200 truncate leading-tight">
          {plant.name}
        </span>
        <div className="flex items-center justify-center gap-0.5 text-[10px] font-mono font-extrabold text-amber-300">
          <Sun className="w-2.5 h-2.5 text-amber-400 fill-amber-400 shrink-0" />
          <span>{plant.cost}</span>
        </div>
      </div>

      {/* Cooldown Overlay */}
      {!isReady && (
        <div className="absolute inset-0 bg-stone-950/85 rounded-md backdrop-blur-[1px] flex flex-col items-center justify-center z-10">
          <span className="text-sm font-mono font-black text-amber-300">
            {cooldownTurnsRemaining}
          </span>
          <span className="text-[8px] uppercase tracking-wider font-bold text-stone-400">
            Turns
          </span>
        </div>
      )}

      {/* Can't afford indicator */}
      {isReady && !canAfford && (
        <div className="absolute inset-0 bg-stone-950/50 rounded-md pointer-events-none" />
      )}
    </button>
  );
};
