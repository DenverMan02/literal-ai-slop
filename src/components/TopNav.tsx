import React from 'react';
import { PlayerProfile, GameMode } from '../types/game';
import { HardDrive, Trophy, Volume2, VolumeX, Shield } from 'lucide-react';

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
    <header className="w-full flex items-center justify-between gap-4 px-3 sm:px-6 py-2.5 bg-stone-950/95 border-b-2 border-stone-800 backdrop-blur-md sticky top-0 z-50 select-none shadow-md">
      {/* Brand Title with Leaf / Sprout Icon */}
      <button
        type="button"
        onClick={() => onSelectTab('GAME')}
        className="text-base sm:text-lg font-black tracking-tight text-white hover:text-emerald-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 text-left cursor-pointer"
      >
        <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-emerald-400/40 shadow-sm" />
        <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent font-extrabold">
          PvZ Tactics
        </span>
      </button>

      {/* Game Mode Tabs */}
      <nav className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold text-stone-300 overflow-x-auto py-0.5">
        <button
          type="button"
          onClick={() => onSelectTab('GAME')}
          className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'GAME'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-850'
          }`}
        >
          Campaign
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('WORLD_RAID')}
          className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'WORLD_RAID'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-850'
          }`}
        >
          World Raid
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('DAILY')}
          className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'DAILY'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-850'
          }`}
        >
          Daily Challenge
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('LEADERBOARD')}
          className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'LEADERBOARD'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-850'
          }`}
        >
          Leaderboard
        </button>

        <button
          type="button"
          onClick={() => onSelectTab('ALMANAC')}
          className={`px-2.5 py-1 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
            currentTab === 'ALMANAC'
              ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50 shadow-sm'
              : 'text-stone-400 hover:text-white hover:bg-stone-850'
          }`}
        >
          Almanac
        </button>
      </nav>

      {/* Right Controls: Profile & Save Slots */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-stone-200 bg-stone-900 border border-stone-800 px-2.5 py-1 rounded-lg shadow-inner">
          <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="font-bold">{profile.trophies}</span>
          <span className="text-stone-600">·</span>
          <span className="text-emerald-400 font-bold">{profile.name}</span>
        </div>

        <button
          type="button"
          onClick={onOpenCloudSync}
          title="Save System & Save Slots Manager"
          className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-600 hover:to-green-500 border border-emerald-500/70 rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-md active:scale-95 cursor-pointer"
        >
          <HardDrive className="w-3.5 h-3.5 text-emerald-200" />
          <span>Save / Slots</span>
        </button>
      </div>
    </header>
  );
};
