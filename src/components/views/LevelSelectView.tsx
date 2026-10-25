import React from 'react';
import { LevelConfig, PlayerProfile, PlantId } from '../../types/game';
import { LEVEL_PLANT_UNLOCKS } from '../../services/storage';
import { PLANT_DEFINITIONS } from '../../constants/plants';
import { PlantArtwork } from '../artwork/PlantArtwork';
import {
  ArrowLeft,
  Lock,
  Play,
  Trophy,
  Shield,
  Sun,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface LevelSelectViewProps {
  levels: LevelConfig[];
  profile: PlayerProfile;
  onSelectLevel: (levelIndex: number) => void;
  onBackToHub: () => void;
}

export const LevelSelectView: React.FC<LevelSelectViewProps> = ({
  levels,
  profile,
  onSelectLevel,
  onBackToHub,
}) => {
  const maxUnlocked = Math.min(
    levels.length - 1,
    Math.max(0, profile.maxUnlockedLevel ?? 0)
  );

  return (
    <div className="w-full flex-1 flex flex-col p-4 sm:p-8 max-w-6xl mx-auto select-none gap-6">
      {/* Top Navigation & Header */}
      <div className="flex items-center justify-between border-b border-stone-800 pb-4 flex-wrap gap-4">
        <button
          type="button"
          onClick={onBackToHub}
          className="px-4 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-stone-200 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Command Hub</span>
        </button>

        <div className="text-right">
          <div className="flex items-center gap-2 justify-end">
            <span className="text-xs font-mono font-bold text-emerald-400">
              Sector Progress: {maxUnlocked + 1} / {levels.length} Unlocked
            </span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Campaign Stage Map
          </h1>
        </div>
      </div>

      {/* Grid of 6 Campaign Sectors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {levels.map((lvl, idx) => {
          const isUnlocked = idx <= maxUnlocked;
          const isCompleted = idx < maxUnlocked;
          const rewards: PlantId[] = LEVEL_PLANT_UNLOCKS[idx] || [];

          const themeKey = (lvl.lawnTheme || 'day') as 'day' | 'pool' | 'night' | 'roof';
          const themeMap: Record<'day' | 'pool' | 'night' | 'roof', string> = {
            day: 'from-amber-950/40 via-stone-900 to-stone-900 border-amber-500/40 text-amber-300',
            pool: 'from-cyan-950/40 via-stone-900 to-stone-900 border-cyan-500/40 text-cyan-300',
            night: 'from-purple-950/40 via-stone-900 to-stone-900 border-purple-500/40 text-purple-300',
            roof: 'from-orange-950/40 via-stone-900 to-stone-900 border-orange-500/40 text-orange-300',
          };
          const themeColors = themeMap[themeKey] || themeMap.day;

          return (
            <div
              key={lvl.id}
              className={`rounded-2xl border-2 p-5 flex flex-col justify-between gap-4 transition-all shadow-xl relative overflow-hidden ${
                !isUnlocked
                  ? 'bg-stone-950/70 border-stone-800/80 opacity-70'
                  : `bg-gradient-to-b ${themeColors} hover:border-emerald-400 hover:scale-[1.01]`
              }`}
            >
              {/* Header: Sector # + Theme badge */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-stone-950 border border-stone-800 font-mono font-black text-xs text-white flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 capitalize">
                      {lvl.lawnTheme || 'Day'} Turf
                    </span>
                  </div>

                  {isCompleted ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/70 border border-emerald-700/60 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Cleared</span>
                    </span>
                  ) : !isUnlocked ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-stone-400 bg-stone-900 border border-stone-800 px-2 py-0.5 rounded-full">
                      <Lock className="w-3 h-3 text-stone-500" />
                      <span>Locked</span>
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-950/80 border border-amber-600/60 px-2 py-0.5 rounded-full animate-pulse">
                      Target
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-black text-white leading-snug">
                  {lvl.name}
                </h3>
                <p className="text-xs text-stone-300 font-medium mt-0.5">
                  {lvl.sectorName}
                </p>
                <p className="text-[11px] text-stone-400 mt-2 line-clamp-2 leading-relaxed">
                  {lvl.specialModifier}
                </p>
              </div>

              {/* Plant Unlock Rewards Preview */}
              <div className="bg-stone-950/80 border border-stone-800/80 rounded-xl p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Clear Rewards
                  </span>
                  <span className="font-mono text-amber-300">+{lvl.rewardTrophies} Trophies</span>
                </div>

                <div className="flex items-center gap-2">
                  {rewards.length > 0 ? (
                    rewards.map((pId) => {
                      const def = PLANT_DEFINITIONS[pId];
                      return (
                        <div
                          key={pId}
                          className="flex items-center gap-1.5 bg-stone-900 border border-stone-700 px-2 py-1 rounded-lg"
                          title={def.name}
                        >
                          <div className="w-6 h-6">
                            <PlantArtwork plantId={pId} className="w-full h-full" />
                          </div>
                          <span className="text-[10px] font-bold text-stone-200">
                            {def.name}
                          </span>
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-[11px] text-stone-500 font-mono">Master Gardener Badge</span>
                  )}
                </div>
              </div>

              {/* Level Action Button */}
              {isUnlocked ? (
                <button
                  type="button"
                  onClick={() => onSelectLevel(idx)}
                  className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isCompleted ? 'Replay Sector' : 'Choose Seeds & Battle'}</span>
                </button>
              ) : (
                <div className="w-full py-2 bg-stone-900/80 border border-stone-800 text-stone-500 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-not-allowed">
                  <Lock className="w-3 h-3" />
                  <span>Complete Sector {idx} to Unlock</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
