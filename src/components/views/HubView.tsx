import React from 'react';
import { PlayerProfile } from '../../types/game';
import { CAMPAIGN_LEVELS } from '../../constants/levels';
import {
  Play,
  Map,
  ShieldAlert,
  Calendar,
  BookOpen,
  Trophy,
  HardDrive,
  Sparkles,
  ChevronRight,
  Sun,
  Shield,
  Zap,
} from 'lucide-react';

interface HubViewProps {
  profile: PlayerProfile;
  onPlayCampaign: () => void;
  onOpenLevelSelect: () => void;
  onOpenWorldRaid: () => void;
  onOpenDaily: () => void;
  onOpenAlmanac: () => void;
  onOpenLeaderboard: () => void;
  onOpenSaveModal: () => void;
}

export const HubView: React.FC<HubViewProps> = ({
  profile,
  onPlayCampaign,
  onOpenLevelSelect,
  onOpenWorldRaid,
  onOpenDaily,
  onOpenAlmanac,
  onOpenLeaderboard,
  onOpenSaveModal,
}) => {
  const currentLevelIdx = Math.min(
    CAMPAIGN_LEVELS.length - 1,
    Math.max(0, profile.campaignLevelIndex ?? 0)
  );
  const maxUnlocked = Math.min(
    CAMPAIGN_LEVELS.length - 1,
    Math.max(0, profile.maxUnlockedLevel ?? 0)
  );
  const activeLevel = CAMPAIGN_LEVELS[currentLevelIdx] || CAMPAIGN_LEVELS[0];
  const unlockedPlantCount = (profile.unlockedPlants || []).length;

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-start p-4 sm:p-8 max-w-6xl mx-auto select-none gap-6">
      {/* Top Welcome & Gardener Dossier Banner */}
      <div className="w-full bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border-2 border-amber-900/70 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-green-400 border-2 border-emerald-300 flex items-center justify-center shadow-lg shrink-0">
            <Shield className="w-8 h-8 text-stone-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Command Backyard HQ
              </span>
              <span className="text-stone-600">·</span>
              <span className="text-xs text-amber-300 font-bold">Rank {profile.rank}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xs text-stone-400 mt-0.5">
              Defend domestic flora against incoming zombie hordes
            </p>
          </div>
        </div>

        {/* Tactical Metrics & Save Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end flex-wrap">
          <div className="flex items-center gap-2 bg-stone-950/90 border border-stone-800 px-3 py-1.5 rounded-xl shadow-inner text-xs font-mono">
            <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] text-stone-400 block font-sans">Trophies</span>
              <span className="text-base font-bold text-amber-300 leading-none">
                {profile.trophies}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-stone-950/90 border border-stone-800 px-3 py-1.5 rounded-xl shadow-inner text-xs font-mono">
            <Sun className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] text-stone-400 block font-sans">Arsenal</span>
              <span className="text-base font-bold text-emerald-300 leading-none">
                {unlockedPlantCount} / 16 Plants
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenSaveModal}
            className="px-3.5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white border border-stone-700 hover:border-amber-500/50 rounded-xl transition-all shadow-md flex items-center gap-1.5 text-xs font-bold cursor-pointer"
          >
            <HardDrive className="w-4 h-4 text-emerald-400" />
            <span>Save / Slots</span>
          </button>
        </div>
      </div>

      {/* Main Mode Showcase Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Featured Card: Adventure Campaign */}
        <div className="md:col-span-8 bg-gradient-to-br from-emerald-950/60 via-stone-900 to-stone-900 border-2 border-emerald-500/60 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between gap-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold uppercase tracking-wider">
                Primary Mission
              </span>
              <span className="text-xs text-stone-400">
                Sector Progress: {maxUnlocked + 1} / {CAMPAIGN_LEVELS.length}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Adventure Campaign
            </h2>
            <p className="text-stone-300 text-sm mt-1 max-w-lg leading-relaxed">
              Battle through 6 iconic suburban battlegrounds from daytime front yards to foggy pool graveyards and rooftop citadels. Unlock new plants as you progress!
            </p>

            {/* Current Target Sector Badge */}
            <div className="mt-4 p-3 bg-stone-950/80 border border-stone-800 rounded-xl flex items-center justify-between gap-3 max-w-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center font-black text-amber-300 font-mono text-sm">
                  {currentLevelIdx + 1}
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase font-bold tracking-wider">
                    Next Target Sector
                  </span>
                  <span className="text-sm font-extrabold text-white">
                    {activeLevel.name}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-700/50 px-2 py-1 rounded">
                +{activeLevel.rewardTrophies} Trophies
              </span>
            </div>
          </div>

          {/* Action Buttons: Continue Battle / Level Select */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              type="button"
              onClick={onPlayCampaign}
              className="w-full sm:flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-black text-sm tracking-wide uppercase rounded-xl transition-all shadow-xl shadow-emerald-950/50 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Choose Seeds & Deploy</span>
            </button>

            <button
              type="button"
              onClick={onOpenLevelSelect}
              className="w-full sm:w-auto px-5 py-3.5 bg-stone-850 hover:bg-stone-800 border-2 border-stone-700 text-stone-200 hover:text-white font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Map className="w-4 h-4 text-emerald-400" />
              <span>Level Map</span>
            </button>
          </div>
        </div>

        {/* Side Panel: Almanac & World Raid */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {/* Almanac Card */}
          <button
            type="button"
            onClick={onOpenAlmanac}
            className="p-5 rounded-2xl bg-stone-900 border-2 border-stone-800 hover:border-amber-500/60 transition-all text-left flex flex-col justify-between gap-3 shadow-lg group cursor-pointer hover:bg-stone-850"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
                <BookOpen className="w-5 h-5" />
              </div>
              <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                Suburban Almanac
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Inspect tactical stats, damage rates, and unlocks for all plants and zombies.
              </p>
            </div>
          </button>

          {/* Daily Challenge Card */}
          <button
            type="button"
            onClick={onOpenDaily}
            className="p-5 rounded-2xl bg-stone-900 border-2 border-stone-800 hover:border-emerald-500/60 transition-all text-left flex flex-col justify-between gap-3 shadow-lg group cursor-pointer hover:bg-stone-850"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
                <Calendar className="w-5 h-5" />
              </div>
              <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-emerald-400 transition-colors" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                Daily Seed Challenge
              </h3>
              <p className="text-xs text-stone-400 mt-0.5">
                Special rules and banned seeds daily. Earn bonus trophies and rank honors.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* Bottom Row: World Raid & Leaderboards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* World Raid */}
        <button
          type="button"
          onClick={onOpenWorldRaid}
          className="p-5 rounded-2xl bg-stone-900 border-2 border-stone-800 hover:border-red-500/60 transition-all text-left flex items-center justify-between gap-4 shadow-lg group cursor-pointer hover:bg-stone-850"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-red-300 transition-colors">
                World Raid: Titan Gargantuar
              </h3>
              <p className="text-xs text-stone-400">
                Communal mega-boss assault. Deal damage alongside other gardeners.
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-red-400 transition-colors shrink-0" />
        </button>

        {/* Global Leaderboard */}
        <button
          type="button"
          onClick={onOpenLeaderboard}
          className="p-5 rounded-2xl bg-stone-900 border-2 border-stone-800 hover:border-amber-500/60 transition-all text-left flex items-center justify-between gap-4 shadow-lg group cursor-pointer hover:bg-stone-850"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                Global Standings & Scores
              </h3>
              <p className="text-xs text-stone-400">
                View top commanders, high scores, and community honors.
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-stone-500 group-hover:text-amber-400 transition-colors shrink-0" />
        </button>
      </div>
    </div>
  );
};
