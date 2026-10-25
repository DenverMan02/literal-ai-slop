import React from 'react';
import {
  Shield,
  FastForward,
  Volume2,
  VolumeX,
  Timer,
  SkipForward,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { TurnPhase } from '../types/game';

interface HUDProps {
  levelName: string;
  sectorName: string;
  currentLevelIndex: number;
  totalLevels: number;
  onSelectLevel: (idx: number) => void;
  currentWave: number;
  totalWaves: number;
  turnPhase: TurnPhase;
  isFastSpeed: boolean;
  soundEnabled: boolean;
  isAutoMode: boolean;
  autoCountdown: number;
  canSkipEmptyTurns: boolean;
  skipTurnsCount: number;
  onToggleSpeed: () => void;
  onToggleSound: () => void;
  onToggleAutoMode: () => void;
  onSkipEmptyTurns: () => void;
  onOpenChooseSeeds: () => void;
  onRestart: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  levelName,
  sectorName,
  currentLevelIndex,
  totalLevels,
  onSelectLevel,
  currentWave,
  totalWaves,
  turnPhase,
  isFastSpeed,
  soundEnabled,
  isAutoMode,
  autoCountdown,
  canSkipEmptyTurns,
  skipTurnsCount,
  onToggleSpeed,
  onToggleSound,
  onToggleAutoMode,
  onSkipEmptyTurns,
  onOpenChooseSeeds,
  onRestart,
}) => {
  const isResolving = turnPhase !== 'PLAYER_INPUT';

  const waveProgressPercent = Math.min(
    100,
    Math.round((currentWave / Math.max(1, totalWaves)) * 100)
  );

  return (
    <div className="w-full bg-stone-950/90 border-b border-stone-800 px-3 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-3 shadow-md select-none text-xs">
      {/* Left: Sector Plaque & Quick Sector Jump */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
        <div className="flex items-center gap-2 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-lg">
          <span className="font-extrabold text-stone-100">{levelName}</span>
          <span className="text-stone-600">·</span>
          <span className="text-emerald-400 font-semibold">{sectorName}</span>
        </div>

        {/* Sector quick selector */}
        <div className="flex items-center gap-1">
          {Array.from({ length: totalLevels }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectLevel(idx)}
              className={`w-6 h-6 rounded flex items-center justify-center font-mono font-bold text-[11px] transition-all cursor-pointer ${
                currentLevelIndex === idx
                  ? 'bg-emerald-600 text-white shadow-sm ring-1 ring-emerald-400'
                  : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800 border border-stone-800'
              }`}
              title={`Switch to Sector ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Middle: Horde Wave Progress Meter (Classic Zombie Flag style) */}
      <div className="flex items-center gap-2 min-w-[160px] sm:min-w-[220px]">
        <Shield className="w-3.5 h-3.5 text-red-400 shrink-0" />
        <div className="flex-1">
          <div className="flex justify-between text-[10px] font-bold text-stone-400 mb-0.5">
            <span className="text-red-400 uppercase tracking-wider">Horde Threat</span>
            <span className="font-mono text-stone-300">
              Wave {currentWave} / {totalWaves}
            </span>
          </div>
          <div className="w-full h-2 bg-stone-900 rounded-full border border-stone-800 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 transition-all duration-300"
              style={{ width: `${waveProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Skip Calm Turns button */}
        {canSkipEmptyTurns && !isResolving && (
          <button
            type="button"
            onClick={onSkipEmptyTurns}
            title={`Skip ${skipTurnsCount} calm turns directly to incoming wave`}
            className="px-2 py-1 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/60 text-emerald-300 text-[11px] font-bold flex items-center gap-1 transition-all animate-pulse cursor-pointer shrink-0"
          >
            <SkipForward className="w-3 h-3" />
            <span>Skip {skipTurnsCount}T</span>
          </button>
        )}
      </div>

      {/* Right: Combat Tool Controls */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Choose Seeds */}
        <button
          type="button"
          onClick={onOpenChooseSeeds}
          title="Choose Seeds: Pick up to 8 plants for battle"
          className="px-2.5 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 hover:text-white rounded border border-emerald-600/60 transition-colors flex items-center gap-1 text-[11px] font-bold cursor-pointer"
        >
          <Sparkles className="w-3 h-3 text-amber-300" />
          <span className="hidden sm:inline">Choose Seeds</span>
        </button>

        {/* Speed Toggle (1x / 2x) */}
        <button
          type="button"
          onClick={onToggleSpeed}
          title="Combat Speed (1x / 2x)"
          className={`px-2 py-1 text-[11px] font-bold rounded border transition-all flex items-center gap-1 cursor-pointer ${
            isFastSpeed
              ? 'bg-indigo-600/30 border-indigo-400 text-indigo-300 shadow-sm'
              : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
          }`}
        >
          <FastForward className="w-3 h-3" />
          <span className="font-mono">{isFastSpeed ? '2x' : '1x'}</span>
        </button>

        {/* Auto Mode */}
        <button
          type="button"
          onClick={onToggleAutoMode}
          title="Auto Advance: Advances turn automatically"
          className={`px-2 py-1 text-[11px] font-bold rounded border transition-all flex items-center gap-1 cursor-pointer ${
            isAutoMode
              ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300 shadow-sm ring-1 ring-emerald-500/40'
              : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-white'
          }`}
        >
          <Timer className="w-3 h-3" />
          <span>{isAutoMode ? `${autoCountdown}s` : 'Auto'}</span>
        </button>

        {/* Sound Toggle */}
        <button
          type="button"
          onClick={onToggleSound}
          title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          className="p-1 rounded bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
        >
          {soundEnabled ? (
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-stone-500" />
          )}
        </button>

        {/* Restart Battle */}
        <button
          type="button"
          onClick={onRestart}
          title="Restart Sector Battle"
          className="p-1 bg-stone-900 hover:bg-stone-800 border border-stone-800 text-stone-400 hover:text-white rounded transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
