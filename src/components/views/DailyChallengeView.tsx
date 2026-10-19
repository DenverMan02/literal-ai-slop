import React from 'react';
import { DailyChallengeConfig, PlayerProfile } from '../../types/game';
import { Calendar, Sun, AlertTriangle, Award, CheckCircle2, Play } from 'lucide-react';
import { PLANT_DEFINITIONS } from '../../constants/plants';

interface DailyChallengeViewProps {
  dailyConfig: DailyChallengeConfig;
  profile: PlayerProfile;
  onStartDailyRun: () => void;
}

export const DailyChallengeView: React.FC<DailyChallengeViewProps> = ({
  dailyConfig,
  profile,
  onStartDailyRun,
}) => {
  const isCompletedToday = profile.dailyCompletedDates.includes(dailyConfig.date);

  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-4 flex flex-col gap-6">
      {/* Daily Header Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-amber-950/40 via-slate-900 to-slate-950 border border-amber-900/40 p-6 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Daily Tactical Mission · {dailyConfig.date}</span>
          </div>

          {isCompletedToday ? (
            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-3 py-1 rounded-full">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Completed</span>
            </span>
          ) : (
            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/60 border border-amber-800/80 px-3 py-1 rounded-full">
              1.5x Score Bonus Active
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {dailyConfig.title}
        </h1>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {dailyConfig.modifierText}
        </p>

        {/* Tactical Parameters Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 block">Starting Sun</span>
            <span className="font-mono text-base font-bold text-amber-300 tabular-nums">
              {dailyConfig.startingSun}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Sun Pulse</span>
            <span className="font-mono text-base font-bold text-slate-200 tabular-nums">
              Every {dailyConfig.sunPulseInterval} Turns
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Horde Waves</span>
            <span className="font-mono text-base font-bold text-slate-200 tabular-nums">
              {dailyConfig.totalWaves} Waves
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Completion Reward</span>
            <span className="font-mono text-base font-bold text-amber-400 tabular-nums flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              +250 Trophies
            </span>
          </div>
        </div>

        {/* Banned Plants Callout */}
        {dailyConfig.bannedPlants.length > 0 && (
          <div className="mt-4 p-3 bg-red-950/30 border border-red-900/50 rounded-lg flex items-center gap-2.5 text-xs text-red-300">
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span>
              Restricted Flora: The following plants cannot be selected for today's seed:
              {' '}
              <strong className="text-white font-semibold">
                {dailyConfig.bannedPlants
                  .map((id) => PLANT_DEFINITIONS[id]?.name || id)
                  .join(', ')}
              </strong>
            </span>
          </div>
        )}

        {/* Start Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={onStartDailyRun}
            className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 border border-emerald-400/50 text-white font-bold text-base rounded-xl transition-all shadow-lg shadow-emerald-950/60 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{isCompletedToday ? 'Replay Daily Challenge' : 'Start Daily Run'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
