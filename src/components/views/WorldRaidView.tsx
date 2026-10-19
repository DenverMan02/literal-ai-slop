import React from 'react';
import { WorldBossState, PlayerProfile } from '../../types/game';
import { ShieldAlert, Users, Swords, Clock, Trophy } from 'lucide-react';
import { ZombieArtwork } from '../artwork/ZombieArtwork';

interface WorldRaidViewProps {
  bossState: WorldBossState;
  profile: PlayerProfile;
  onStartRaidBattle: () => void;
}

export const WorldRaidView: React.FC<WorldRaidViewProps> = ({
  bossState,
  profile,
  onStartRaidBattle,
}) => {
  const hpPercentage = Math.max(
    0,
    Math.min(100, Math.round((bossState.currentHp / bossState.maxHp) * 100))
  );

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 flex flex-col gap-8">
      {/* Boss Header Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-stone-900 via-stone-900/95 to-slate-950 border border-stone-800 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-red-400">
              <ShieldAlert className="w-4 h-4 text-red-500" />
              <span>Global Community Raid · {bossState.seasonId}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {bossState.bossName}
            </h1>
            <p className="text-sm text-slate-400 max-w-lg">
              All tactical commanders deal damage to this shared boss HP pool. Defeat the Titan before the weekly reset to earn massive seasonal trophies and the Titan Slayer emblem.
            </p>
          </div>

          {/* Boss Artwork Showcase */}
          <div className="w-32 h-36 flex items-center justify-center bg-stone-950/80 rounded-xl border border-stone-800/90 p-2 shrink-0">
            <ZombieArtwork zombieId="gargantuar" className="w-28 h-32" />
          </div>
        </div>

        {/* Boss HP Bar */}
        <div className="mt-8 flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-red-400 flex items-center gap-1.5">
              <span>Titan Hull Integrity:</span>
              <span className="text-white tabular-nums">
                {bossState.currentHp.toLocaleString()} / {bossState.maxHp.toLocaleString()} HP
              </span>
            </span>
            <span className="text-amber-400 font-extrabold">{hpPercentage}% Remaining</span>
          </div>

          <div className="w-full h-5 bg-stone-950 rounded-full border border-stone-800 overflow-hidden relative p-0.5 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 rounded-full transition-all duration-500"
              style={{ width: `${hpPercentage}%` }}
            />
          </div>
        </div>

        {/* Raid Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-800 text-xs">
          <div>
            <span className="text-slate-500 block mb-0.5">Your Contribution</span>
            <span className="font-mono text-base font-bold text-amber-300 tabular-nums">
              {bossState.playerContribution.toLocaleString()} DMG
            </span>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Community Total</span>
            <span className="font-mono text-base font-bold text-slate-200 tabular-nums">
              {bossState.totalCommunityDamage.toLocaleString()} DMG
            </span>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Season Reset</span>
            <span className="font-mono text-base font-bold text-emerald-400 tabular-nums flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {bossState.daysRemaining} Days
            </span>
          </div>
          <div>
            <span className="text-slate-500 block mb-0.5">Your Standing</span>
            <span className="font-mono text-base font-bold text-slate-200 flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              Rank {profile.rank}
            </span>
          </div>
        </div>

        {/* Start Raid Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onStartRaidBattle}
            className="px-8 py-3 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 border border-red-400/50 text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-red-950/60 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Swords className="w-5 h-5" />
            <span>Deploy Raid Squadron</span>
          </button>
        </div>
      </div>

      {/* Live Community Activity Feed */}
      <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>Live Community Raid Log</span>
          </h2>
          <span className="text-xs text-slate-500">Auto-synchronized</span>
        </div>

        <div className="divide-y divide-slate-800/60 font-mono text-xs">
          {bossState.recentAttackers.map((item, idx) => (
            <div key={idx} className="py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-slate-200">{item.playerName}</span>
                <span className="text-slate-500">inflicted strike</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-red-400 font-bold tabular-nums">
                  +{item.damage.toLocaleString()} DMG
                </span>
                <span className="text-slate-600">{item.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
