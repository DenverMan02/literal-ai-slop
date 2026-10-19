import React from 'react';
import { GameMode, GameStatus } from '../../types/game';
import { Trophy, Award, RotateCcw, ArrowRight, ShieldCheck, Skull } from 'lucide-react';

interface GameOverModalProps {
  status: GameStatus;
  mode: GameMode;
  turnsSurvived: number;
  zombiesKilled: number;
  damageDealt: number;
  score: number;
  trophiesEarned: number;
  hasNextSector: boolean;
  onNextSector: () => void;
  onRestart: () => void;
  onViewLeaderboard: () => void;
}

export const GameOverModal: React.FC<GameOverModalProps> = ({
  status,
  mode,
  turnsSurvived,
  zombiesKilled,
  damageDealt,
  score,
  trophiesEarned,
  hasNextSector,
  onNextSector,
  onRestart,
  onViewLeaderboard,
}) => {
  if (status === 'PLAYING') return null;

  const isVictory = status === 'VICTORY';

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div
        className={`w-full max-w-lg rounded-2xl border p-6 sm:p-8 flex flex-col gap-6 shadow-2xl ${
          isVictory
            ? 'bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950 border-emerald-500/40'
            : 'bg-gradient-to-b from-red-950/40 via-slate-900 to-slate-950 border-red-500/40'
        }`}
      >
        {/* Title & Icon Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg ${
              isVictory
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400'
                : 'bg-red-500/20 border-red-400 text-red-400'
            }`}
          >
            {isVictory ? (
              <ShieldCheck className="w-8 h-8" />
            ) : (
              <Skull className="w-8 h-8" />
            )}
          </div>

          <div>
            <span
              className={`text-xs font-mono uppercase tracking-wider font-bold ${
                isVictory ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {mode} Combat Concluded
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">
              {isVictory ? 'Lawn Defended' : 'The Zombies Ate Your Brains'}
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              {isVictory
                ? 'All approaching waves neutralized. Domestic flora stood firm.'
                : 'Suburban perimeter breached. Re-evaluate defensive plant synergies.'}
            </p>
          </div>
        </div>

        {/* Tactical Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-mono">
          <div>
            <span className="text-slate-500 block font-sans">Turns</span>
            <span className="text-base font-bold text-slate-200 tabular-nums">
              {turnsSurvived}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block font-sans">Neutralized</span>
            <span className="text-base font-bold text-red-400 tabular-nums">
              {zombiesKilled}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block font-sans">Damage</span>
            <span className="text-base font-bold text-amber-300 tabular-nums">
              {damageDealt.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block font-sans">Score</span>
            <span className="text-base font-bold text-emerald-400 tabular-nums">
              {score.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Trophies Rewarded Banner */}
        {trophiesEarned > 0 && (
          <div className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-amber-950/30 border border-amber-800/50 text-xs">
            <span className="text-amber-300 font-semibold flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Tactical Trophy Honor:</span>
            </span>
            <span className="font-mono font-bold text-amber-300">
              +{trophiesEarned} Trophies
            </span>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          {isVictory && hasNextSector ? (
            <button
              type="button"
              onClick={onNextSector}
              className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Next Sector</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onRestart}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Again</span>
            </button>
          )}

          <button
            type="button"
            onClick={onViewLeaderboard}
            className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>View Standings</span>
          </button>
        </div>
      </div>
    </div>
  );
};
