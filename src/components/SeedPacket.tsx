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
      className={`group relative flex flex-col items-center justify-between w-18 sm:w-20 h-24 sm:h-26 rounded-lg p-1.5 transition-all duration-150 border-2 select-none shrink-0 ${
        isSelected
          ? 'bg-amber-950/80 border-amber-400 ring-4 ring-amber-400/30 scale-105 z-10 shadow-lg'
          : isAvailable
          ? 'bg-slate-900/90 border-slate-700 hover:border-emerald-500 hover:bg-slate-800/90 cursor-pointer shadow-md'
          : 'bg-slate-950/90 border-slate-800/80 opacity-60 cursor-not-allowed'
      }`}
    >
      {/* Keyboard shortcut hint */}
      <span className="absolute -top-2 -left-1.5 w-4 h-4 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-300 flex items-center justify-center font-bold">
        {shortcutIndex}
      </span>

      {/* Plant Artwork */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center mt-1">
        <PlantArtwork plantId={plant.id} className="w-full h-full" />
      </div>

      {/* Name and Sun Cost */}
      <div className="w-full text-center">
        <span className="block text-[11px] font-semibold text-slate-200 truncate leading-tight">
          {plant.name}
        </span>
        <div className="flex items-center justify-center gap-0.5 mt-0.5 text-[11px] font-mono font-bold text-amber-300">
          <Sun className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
          <span>{plant.cost}</span>
        </div>
      </div>

      {/* Cooldown Overlay */}
      {!isReady && (
        <div className="absolute inset-0 bg-slate-950/80 rounded-md backdrop-blur-[1px] flex flex-col items-center justify-center z-10">
          <span className="text-xs font-mono font-bold text-slate-300">
            {cooldownTurnsRemaining}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-slate-400">
            Turns
          </span>
        </div>
      )}

      {/* Can't afford indicator */}
      {isReady && !canAfford && (
        <div className="absolute inset-0 bg-slate-950/50 rounded-md pointer-events-none" />
      )}
    </button>
  );
};
