import React from 'react';
import { GameMode, GameStatus, PlantId } from '../../types/game';
import { PLANT_DEFINITIONS } from '../../constants/plants';
import { PlantArtwork } from '../artwork/PlantArtwork';
import {
  Trophy,
  Award,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  Skull,
  Sparkles,
  Map,
} from 'lucide-react';

interface GameOverModalProps {
  status: GameStatus;
  mode: GameMode;
  turnsSurvived: number;
  zombiesKilled: number;
  damageDealt: number;
  score: number;
  trophiesEarned: number;
  newlyUnlockedPlants?: PlantId[];
  hasNextSector: boolean;
  onNextSector: () => void;
  onReturnToMap: () => void;
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
  newlyUnlockedPlants = [],
  hasNextSector,
  onNextSector,
  onReturnToMap,
  onRestart,
  onViewLeaderboard,
}) => {
  if (status === 'PLAYING') return null;

  const isVictory = status === 'VICTORY';

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div
        className={`w-full max-w-lg rounded-2xl border-2 p-6 sm:p-8 flex flex-col gap-5 shadow-2xl ${
          isVictory
            ? 'bg-gradient-to-b from-emerald-950/40 via-stone-900 to-stone-950 border-emerald-500/50'
            : 'bg-gradient-to-b from-red-950/40 via-stone-900 to-stone-950 border-red-500/50'
        }`}
      >
        {/* Title & Icon Header */}
        <div className="flex flex-col items-center text-center gap-2.5">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 shadow-lg ${
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
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              {isVictory ? 'Lawn Defended!' : 'The Zombies Ate Your Brains!'}
            </h2>
            <p className="text-xs text-stone-400 mt-1 max-w-xs mx-auto">
              {isVictory
                ? 'All approaching waves neutralized. Domestic flora stood firm.'
                : 'Suburban perimeter breached. Re-evaluate defensive plant synergies.'}
            </p>
          </div>
        </div>

        {/* Tactical Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 bg-stone-950/80 rounded-xl border border-stone-800 text-xs font-mono">
          <div>
            <span className="text-stone-500 block font-sans">Turns</span>
            <span className="text-base font-bold text-stone-200 tabular-nums">
              {turnsSurvived}
            </span>
          </div>
          <div>
            <span className="text-stone-500 block font-sans">Neutralized</span>
            <span className="text-base font-bold text-red-400 tabular-nums">
              {zombiesKilled}
            </span>
          </div>
          <div>
            <span className="text-stone-500 block font-sans">Damage</span>
            <span className="text-base font-bold text-amber-300 tabular-nums">
              {damageDealt.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-stone-500 block font-sans">Score</span>
            <span className="text-base font-bold text-emerald-400 tabular-nums">
              {score.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Trophies Rewarded Banner */}
        {trophiesEarned > 0 && (
          <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs">
            <span className="text-amber-300 font-bold flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Tactical Trophy Honor:</span>
            </span>
            <span className="font-mono font-black text-amber-300">
              +{trophiesEarned} Trophies
            </span>
          </div>
        )}

        {/* Newly Unlocked Plants Celebration */}
        {isVictory && newlyUnlockedPlants.length > 0 && (
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/80 to-stone-950 border-2 border-emerald-500/80 flex flex-col gap-2.5 animate-pulse">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              New Plants Unlocked for Your Arsenal!
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              {newlyUnlockedPlants.map((pId) => {
                const def = PLANT_DEFINITIONS[pId];
                return (
                  <div
                    key={pId}
                    className="flex items-center gap-2 bg-stone-900 border border-emerald-500/50 px-2.5 py-1.5 rounded-lg shadow"
                  >
                    <div className="w-7 h-7">
                      <PlantArtwork plantId={pId} className="w-full h-full" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white leading-none">
                        {def.name}
                      </span>
                      <span className="text-[10px] text-amber-300 font-mono font-semibold">
                        {def.cost} Sun
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          {isVictory && hasNextSector ? (
            <button
              type="button"
              onClick={onNextSector}
              className="flex-1 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Next Sector</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onRestart}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Play Again</span>
            </button>
          )}

          <button
            type="button"
            onClick={onReturnToMap}
            className="px-4 py-3 bg-stone-850 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-bold text-xs uppercase rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Map className="w-4 h-4 text-emerald-400" />
            <span>Stage Map</span>
          </button>

          <button
            type="button"
            onClick={onViewLeaderboard}
            className="px-3.5 py-3 bg-stone-900 hover:bg-stone-850 text-stone-400 hover:text-white border border-stone-800 font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Standings</span>
          </button>
        </div>
      </div>
    </div>
  );
};
