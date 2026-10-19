import { DailyChallengeConfig, GameMode, LeaderboardEntry, WorldBossState } from '../types/game';

const WORLD_BOSS_KEY = 'pvz_tactics_world_boss_v1';
const LEADERBOARDS_KEY = 'pvz_tactics_leaderboards_v1';

export class MMOService {
  public static getTodayDailyConfig(): DailyChallengeConfig {
    const today = new Date().toISOString().split('T')[0]; // e.g. 2026-10-18
    // Generate deterministic values based on day string
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = (hash << 5) - hash + today.charCodeAt(i);
      hash |= 0;
    }
    const absHash = Math.abs(hash);

    const modifiers = [
      {
        title: 'Solar Drought Protocol',
        text: 'Sun generation pulses every 4 turns instead of 3. Economy planning is vital.',
        interval: 4,
        amount: 45,
        banned: [] as any,
      },
      {
        title: 'Sprinter Infestation',
        text: 'Football sprinters lead the charge early. Defense barriers must be deployed rapidly.',
        interval: 3,
        amount: 50,
        banned: [] as any,
      },
      {
        title: 'Restricted Arsenal: No Chompers',
        text: 'Chompers are prohibited in this sector. Rely on concentrated peashooter firepower.',
        interval: 3,
        amount: 60,
        banned: ['chomper'],
      },
      {
        title: 'Frostbite Surge',
        text: 'Zombies spawn with extra resilience, but sun pulses give 65 sun every 3 turns.',
        interval: 3,
        amount: 65,
        banned: [] as any,
      },
    ];

    const selectedMod = modifiers[absHash % modifiers.length];

    return {
      date: today,
      title: selectedMod.title,
      modifierText: selectedMod.text,
      startingSun: 175,
      sunPulseInterval: selectedMod.interval,
      sunPulseAmount: selectedMod.amount,
      bannedPlants: selectedMod.banned,
      bonusScoreMultiplier: 1.5,
      totalWaves: 8,
    };
  }

  public static getWorldBossState(): WorldBossState {
    const defaultState: WorldBossState = {
      bossName: 'Dr. Zomboss Titan-Mech',
      seasonId: 'Season 4: Suburban Siege',
      maxHp: 10000000,
      currentHp: 6420500,
      totalCommunityDamage: 3579500,
      playerContribution: 0,
      daysRemaining: 4,
      recentAttackers: [
        { playerName: 'SolarCommander', damage: 3200, timestamp: '2 min ago' },
        { playerName: 'WallNutDefender', damage: 4850, timestamp: '6 min ago' },
        { playerName: 'PeaSniper_99', damage: 2900, timestamp: '14 min ago' },
        { playerName: 'FrostKnight', damage: 5400, timestamp: '21 min ago' },
        { playerName: 'LawnMowerMaster', damage: 3800, timestamp: '33 min ago' },
      ],
    };

    try {
      const raw = localStorage.getItem(WORLD_BOSS_KEY);
      if (raw) {
        return { ...defaultState, ...JSON.parse(raw) };
      }
    } catch {}
    return defaultState;
  }

  public static recordBossAttack(playerName: string, damageDealt: number): WorldBossState {
    const state = this.getWorldBossState();
    state.currentHp = Math.max(0, state.currentHp - damageDealt);
    state.totalCommunityDamage += damageDealt;
    state.playerContribution += damageDealt;
    state.recentAttackers.unshift({
      playerName,
      damage: damageDealt,
      timestamp: 'Just now',
    });
    if (state.recentAttackers.length > 8) {
      state.recentAttackers.pop();
    }
    try {
      localStorage.setItem(WORLD_BOSS_KEY, JSON.stringify(state));
    } catch {}
    return state;
  }

  public static getLeaderboards(mode: GameMode): LeaderboardEntry[] {
    const defaultLeaderboards: Record<GameMode, LeaderboardEntry[]> = {
      CAMPAIGN: [
        { rank: 1, playerName: 'SolarValkyrie', score: 18450, turnsSurvived: 42, mode: 'CAMPAIGN', date: '2026-10-18', badge: 'Grandmaster' },
        { rank: 2, playerName: 'LawnArchitect', score: 16900, turnsSurvived: 39, mode: 'CAMPAIGN', date: '2026-10-17', badge: 'Diamond' },
        { rank: 3, playerName: 'SpikeWeedPro', score: 15300, turnsSurvived: 36, mode: 'CAMPAIGN', date: '2026-10-18', badge: 'Platinum' },
        { rank: 4, playerName: 'PeaGatling_X', score: 14200, turnsSurvived: 34, mode: 'CAMPAIGN', date: '2026-10-16', badge: 'Gold' },
        { rank: 5, playerName: 'CherryBombastic', score: 12850, turnsSurvived: 30, mode: 'CAMPAIGN', date: '2026-10-18', badge: 'Gold' },
        { rank: 6, playerName: 'NutBarrier', score: 11400, turnsSurvived: 28, mode: 'CAMPAIGN', date: '2026-10-15', badge: 'Silver' },
        { rank: 7, playerName: 'KernelSniper', score: 9800, turnsSurvived: 24, mode: 'CAMPAIGN', date: '2026-10-17', badge: 'Bronze' },
      ],
      DAILY: [
        { rank: 1, playerName: 'DayBreaker', score: 24200, turnsSurvived: 24, mode: 'DAILY', date: '2026-10-18', badge: 'Top Seed' },
        { rank: 2, playerName: 'TacticalGardener', score: 21500, turnsSurvived: 23, mode: 'DAILY', date: '2026-10-18', badge: 'Master' },
        { rank: 3, playerName: 'SolarEclipse', score: 19800, turnsSurvived: 22, mode: 'DAILY', date: '2026-10-18', badge: 'Diamond' },
        { rank: 4, playerName: 'BucketCrusher', score: 18100, turnsSurvived: 20, mode: 'DAILY', date: '2026-10-18', badge: 'Platinum' },
        { rank: 5, playerName: 'GardenGeneral', score: 16400, turnsSurvived: 19, mode: 'DAILY', date: '2026-10-18', badge: 'Gold' },
      ],
      WORLD_RAID: [
        { rank: 1, playerName: 'TitanSlayer_01', score: 384000, turnsSurvived: 18, mode: 'WORLD_RAID', date: '2026-10-18', badge: 'Raid MVP' },
        { rank: 2, playerName: 'MegaSunflower', score: 320500, turnsSurvived: 17, mode: 'WORLD_RAID', date: '2026-10-18', badge: 'Raid Elite' },
        { rank: 3, playerName: 'RepeaterSquad', score: 295000, turnsSurvived: 16, mode: 'WORLD_RAID', date: '2026-10-17', badge: 'Raid Veteran' },
        { rank: 4, playerName: 'NutCracker', score: 240000, turnsSurvived: 15, mode: 'WORLD_RAID', date: '2026-10-18', badge: 'Defender' },
        { rank: 5, playerName: 'FrozenTrench', score: 210000, turnsSurvived: 14, mode: 'WORLD_RAID', date: '2026-10-16', badge: 'Guardian' },
      ],
    };

    try {
      const raw = localStorage.getItem(LEADERBOARDS_KEY);
      if (raw) {
        const stored = JSON.parse(raw);
        if (stored && stored[mode]) return stored[mode];
      }
    } catch {}

    return defaultLeaderboards[mode] || defaultLeaderboards.CAMPAIGN;
  }

  public static submitScore(entry: {
    playerName: string;
    score: number;
    turnsSurvived: number;
    mode: GameMode;
  }): LeaderboardEntry[] {
    const list = this.getLeaderboards(entry.mode);
    const newEntry: LeaderboardEntry = {
      rank: 0,
      playerName: entry.playerName,
      score: entry.score,
      turnsSurvived: entry.turnsSurvived,
      mode: entry.mode,
      date: new Date().toISOString().split('T')[0],
      badge: entry.score > 20000 ? 'Master' : entry.score > 12000 ? 'Gold' : 'Silver',
    };

    const combined = [...list, newEntry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 15)
      .map((item, idx) => ({ ...item, rank: idx + 1 }));

    try {
      const raw = localStorage.getItem(LEADERBOARDS_KEY);
      const all = raw ? JSON.parse(raw) : {};
      all[entry.mode] = combined;
      localStorage.setItem(LEADERBOARDS_KEY, JSON.stringify(all));
    } catch {}

    return combined;
  }
}
