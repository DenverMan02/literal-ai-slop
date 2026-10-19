import React from 'react';
import { PlayerProfile, GameMode } from '../types/game';
import { Cloud, Trophy } from 'lucide-react';

interface TopNavProps {
  currentTab: 'GAME' | 'WORLD_RAID' | 'DAILY' | 'LEADERBOARD' | 'ALMANAC';
  gameMode: GameMode;
  profile: PlayerProfile;
  onSelectTab: (tab: 'GAME' | 'WORLD_RAID' | 'DAILY' | 'LEADERBOARD' | 'ALMANAC') => void;
  onOpenCloudSync: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  currentTab,
  profile,
  onSelectTab,
  onOpenCloudSync,
}) => {
  return (
    <header className="w-full flex items-center justify-between gap-8 px-4 sm:px-8 py-3.5 bg-slate-950/95 border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 select-none">
      {/* Zone 1: Brand title, single line */}
      <button
        type="button"
        onClick={() => onSelectTab('GAME')}
        className="text-lg font-bold tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 text-left"
      >
        <span className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-emerald-400/40" />
        <span>PvZ Tactics Online</span>
      </button>

      {/* Zone 2: 4-5 nav links, 1-2 word labels, single-line */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
        <button
          type="button"
          onClick={() => onSelectTab('GAME')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            currentTab === 'GAME'
              ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          Campaign
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('WORLD_RAID')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            currentTab === 'WORLD_RAID'
              ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          World Raid
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('DAILY')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            currentTab === 'DAILY'
              ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          Daily Challenge
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('LEADERBOARD')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            currentTab === 'LEADERBOARD'
              ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          Leaderboards
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('ALMANAC')}
          className={`hover:text-white transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            currentTab === 'ALMANAC'
              ? 'text-emerald-400 border-b-2 border-emerald-400 font-semibold'
              : 'text-slate-400'
          }`}
        >
          Almanac
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span>{profile.trophies}</span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400">Rank {profile.rank}</span>
        </div>

        <button
          type="button"
          onClick={onOpenCloudSync}
          className="px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm"
        >
          <Cloud className="w-3.5 h-3.5 text-emerald-400" />
          <span>Cloud Sync</span>
        </button>
      </div>
    </header>
  );
};
