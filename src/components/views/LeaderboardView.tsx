import React, { useState } from 'react';
import { GameMode, LeaderboardEntry, PlayerProfile } from '../../types/game';
import { MMOService } from '../../services/mmoService';
import { Trophy, Medal } from 'lucide-react';

interface LeaderboardViewProps {
  profile: PlayerProfile;
}

export const LeaderboardView: React.FC<LeaderboardViewProps> = ({ profile }) => {
  const [selectedMode, setSelectedMode] = useState<GameMode>('CAMPAIGN');
  const entries: LeaderboardEntry[] = MMOService.getLeaderboards(selectedMode);

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 flex flex-col gap-6">
      {/* Header and Segmented Control */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Trophy className="w-6 h-6 text-amber-400" />
            <span>Global Defense Standings</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Synchronized across all tactical commanders in the global theater
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            type="button"
            onClick={() => setSelectedMode('CAMPAIGN')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedMode === 'CAMPAIGN'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Campaign
          </button>
          <button
            type="button"
            onClick={() => setSelectedMode('DAILY')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedMode === 'DAILY'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Daily Seed
          </button>
          <button
            type="button"
            onClick={() => setSelectedMode('WORLD_RAID')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              selectedMode === 'WORLD_RAID'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            World Raid
          </button>
        </div>
      </div>

      {/* Standings Table */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-lg">
        <div className="grid grid-cols-12 px-5 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 bg-slate-950/60">
          <span className="col-span-2">Rank</span>
          <span className="col-span-4">Commander</span>
          <span className="col-span-3 text-right">High Score</span>
          <span className="col-span-3 text-right">Turns Survived</span>
        </div>

        <div className="divide-y divide-slate-800/60 font-mono text-xs">
          {entries.map((entry) => {
            const isTop3 = entry.rank <= 3;
            const isCurrentPlayer = entry.playerName === profile.name;

            return (
              <div
                key={entry.rank}
                className={`grid grid-cols-12 px-5 py-3.5 items-center transition-colors ${
                  isCurrentPlayer
                    ? 'bg-amber-950/20 text-amber-200'
                    : 'hover:bg-slate-800/40 text-slate-300'
                }`}
              >
                {/* Rank */}
                <div className="col-span-2 flex items-center gap-2">
                  {isTop3 ? (
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                        entry.rank === 1
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : entry.rank === 2
                          ? 'bg-slate-400/20 text-slate-200 border border-slate-400/40'
                          : 'bg-amber-700/20 text-amber-500 border border-amber-700/40'
                      }`}
                    >
                      {entry.rank}
                    </span>
                  ) : (
                    <span className="text-slate-500 pl-2">#{entry.rank}</span>
                  )}
                </div>

                {/* Player Name & Badge */}
                <div className="col-span-4 flex items-center gap-2">
                  <span className="font-sans font-bold text-slate-100 truncate">
                    {entry.playerName}
                  </span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline">
                    · {entry.badge}
                  </span>
                </div>

                {/* Score */}
                <div className="col-span-3 text-right font-bold text-amber-400 tabular-nums">
                  {entry.score.toLocaleString()}
                </div>

                {/* Turns Survived */}
                <div className="col-span-3 text-right text-slate-400 tabular-nums">
                  {entry.turnsSurvived} Turns
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
