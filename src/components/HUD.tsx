import React from 'react';
import {
  Sun,
  Shield,
  FastForward,
  Play,
  Volume2,
  VolumeX,
  Shovel,
  Timer,
  SkipForward,
} from 'lucide-react';
import { TurnPhase } from '../types/game';

interface HUDProps {
  sun: number;
  currentTurn: number;
  sunPulseInterval: number;
  sunPulseAmount: number;
  currentWave: number;
  totalWaves: number;
  turnPhase: TurnPhase;
  isShovelActive: boolean;
  isFastSpeed: boolean;
  soundEnabled: boolean;
  isAutoMode: boolean;
  autoCountdown: number;
  canSkipEmptyTurns: boolean;
  skipTurnsCount: number;
  onToggleShovel: () => void;
  onToggleSpeed: () => void;
  onToggleSound: () => void;
  onToggleAutoMode: () => void;
  onSkipEmptyTurns: () => void;
  onEndTurn: () => void;
  onOpenAlmanac: () => void;
  onExitBattle: () => void;
}

export const HUD: React.FC<HUDProps> = ({
  sun,
  currentTurn,
  sunPulseInterval,
  sunPulseAmount,
  currentWave,
  totalWaves,
  turnPhase,
  isShovelActive,
  isFastSpeed,
  soundEnabled,
  isAutoMode,
  autoCountdown,
  canSkipEmptyTurns,
  skipTurnsCount,
  onToggleShovel,
  onToggleSpeed,
  onToggleSound,
  onToggleAutoMode,
  onSkipEmptyTurns,
  onEndTurn,
}) => {
  const isResolving = turnPhase !== 'PLAYER_INPUT';

  // Calculate turns until next sun pulse
  const turnsUntilPulse =
    sunPulseInterval - ((currentTurn - 1) % sunPulseInterval);

  const waveProgressPercent = Math.min(
    100,
    Math.round((currentWave / Math.max(1, totalWaves)) * 100)
  );

  return (
    <div className="w-full bg-slate-900/90 border-b border-slate-800 backdrop-blur-md px-3 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-lg select-none">
      {/* Left Zone: Sun Bank & Turn Counters */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Sun Counter */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-lg shadow-inner">
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-md">
            <Sun className="w-4 h-4 text-amber-950 fill-amber-950 animate-sun-spin" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold tracking-wider text-amber-400/80 leading-none">
              Solar Energy
            </div>
            <div className="text-lg font-mono font-extrabold text-amber-300 leading-tight tabular-nums">
              {sun}
            </div>
          </div>
        </div>

        {/* Turn Meter & Sun Pulse Countdown */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span>Turn {currentTurn}</span>
            <span className="text-slate-600">·</span>
            <span className="text-amber-400/90 text-[11px] font-mono">
              +{sunPulseAmount} Sun in {turnsUntilPulse} {turnsUntilPulse === 1 ? 'turn' : 'turns'}
            </span>
          </div>

          {/* Pulse Progress ticks */}
          <div className="flex gap-1 mt-1">
            {Array.from({ length: sunPulseInterval }).map((_, idx) => {
              const currentStep = (currentTurn - 1) % sunPulseInterval;
              const isFilled = idx <= currentStep;
              return (
                <div
                  key={idx}
                  className={`h-1.5 w-5 rounded-full transition-colors ${
                    isFilled ? 'bg-amber-400' : 'bg-slate-800'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Middle Zone: Wave Gauge & Skip Idle Button */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="flex flex-col items-center min-w-[180px] max-w-[240px] w-full">
          <div className="flex justify-between w-full text-[11px] font-semibold text-slate-400 mb-1">
            <span className="flex items-center gap-1 text-red-400">
              <Shield className="w-3 h-3 text-red-400" />
              Horde Threat
            </span>
            <span className="font-mono text-slate-300">
              Wave {currentWave} of {totalWaves}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-950 rounded-full border border-slate-800 overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500 transition-all duration-300"
              style={{ width: `${waveProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Skip Idle Turns Button */}
        {canSkipEmptyTurns && !isResolving && (
          <button
            type="button"
            onClick={onSkipEmptyTurns}
            title={`Skip ${skipTurnsCount} calm turns directly to next wave`}
            className="px-2.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/50 text-emerald-300 text-xs font-semibold flex items-center gap-1 transition-all animate-pulse"
          >
            <SkipForward className="w-3.5 h-3.5" />
            <span>Skip {skipTurnsCount} Idle Turns</span>
          </button>
        )}
      </div>

      {/* Right Zone: Controls & End Turn Action */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Shovel Tool Button */}
        <button
          type="button"
          onClick={onToggleShovel}
          disabled={isResolving}
          title="Shovel: Dig up a plant or clear a tombstone"
          className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
            isShovelActive
              ? 'bg-amber-600 border-amber-400 text-white shadow-md'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
          }`}
        >
          <Shovel className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Shovel</span>
        </button>

        {/* 5-Second Auto Mode Button */}
        <button
          type="button"
          onClick={onToggleAutoMode}
          title="Auto Mode: Automatically advances turns after 5 seconds"
          className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
            isAutoMode
              ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300 shadow-sm ring-2 ring-emerald-500/20'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          <Timer className={`w-3.5 h-3.5 ${isAutoMode ? 'animate-spin' : ''}`} style={{ animationDuration: '4s' }} />
          <span>
            {isAutoMode ? `Auto: ${autoCountdown}s` : 'Auto Mode'}
          </span>
        </button>

        {/* Speed Toggle (1x / 2x) */}
        <button
          type="button"
          onClick={onToggleSpeed}
          title="Toggle Combat Speed"
          className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1 ${
            isFastSpeed
              ? 'bg-indigo-600/30 border-indigo-400 text-indigo-300'
              : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          <FastForward className="w-3.5 h-3.5" />
          <span className="font-mono">{isFastSpeed ? '2x' : '1x'}</span>
        </button>

        {/* Audio Toggle */}
        <button
          type="button"
          onClick={onToggleSound}
          title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          className="p-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          {soundEnabled ? (
            <Volume2 className="w-4 h-4 text-emerald-400" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-500" />
          )}
        </button>

        {/* Primary Action: End Turn / Execute Button */}
        <button
          type="button"
          onClick={onEndTurn}
          disabled={isResolving}
          className={`px-4 sm:px-6 py-2 rounded-lg font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-2 select-none ${
            isResolving
              ? 'bg-amber-900/60 border border-amber-700/60 text-amber-200 cursor-wait'
              : 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 border border-emerald-400 text-white shadow-emerald-950/50 hover:shadow-lg active:scale-95'
          }`}
        >
          {isResolving ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-amber-300 border-t-transparent rounded-full animate-spin" />
              <span>Resolving...</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-white text-white" />
              <span>End Turn</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
