import { PlayerProfile, PlantId } from '../types/game';

const STORAGE_KEY = 'pvz_tactics_online_profile_v1';
const SLOTS_KEY = 'pvz_tactics_cloud_slots_v1';

export const DEFAULT_PROFILE: PlayerProfile = {
  id: 'usr_' + Math.random().toString(36).substring(2, 9),
  name: 'TacticalGardener',
  rank: 1,
  trophies: 100,
  sunCrests: 45,
  highestWaveCampaign: 1,
  dailyCompletedDates: [],
  worldBossTotalDamage: 0,
  unlockedPlants: [
    'sunflower',
    'peashooter',
    'wallnut',
    'snowpea',
    'repeater',
    'potatomine',
    'chomper',
    'cherrybomb',
    'squash',
    'jalapeno',
    'spikeweed',
    'torchwood',
    'tallnut',
    'fumeshroom',
    'melonpult',
    'hypnoshroom',
  ],
  soundVolume: 0.6,
  soundEnabled: true,
  lastSynced: new Date().toISOString(),
};

export class StorageService {
  public static getProfile(): PlayerProfile {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...DEFAULT_PROFILE, ...parsed };
      }
    } catch {
      // LocalStorage access fallback
    }
    return { ...DEFAULT_PROFILE };
  }

  public static saveProfile(profile: PlayerProfile): void {
    try {
      profile.lastSynced = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // Fallback
    }
  }

  public static addTrophies(amount: number, sunCrests = 0): PlayerProfile {
    const p = this.getProfile();
    p.trophies += amount;
    p.sunCrests += sunCrests;
    p.rank = Math.max(1, Math.floor(p.trophies / 200) + 1);
    this.saveProfile(p);
    return p;
  }

  public static recordBossDamage(dmg: number): PlayerProfile {
    const p = this.getProfile();
    p.worldBossTotalDamage += dmg;
    p.trophies += Math.floor(dmg / 20);
    p.sunCrests += Math.floor(dmg / 50);
    p.rank = Math.max(1, Math.floor(p.trophies / 200) + 1);
    this.saveProfile(p);
    return p;
  }

  public static recordDailyCompletion(dateStr: string): PlayerProfile {
    const p = this.getProfile();
    if (!p.dailyCompletedDates.includes(dateStr)) {
      p.dailyCompletedDates.push(dateStr);
      p.trophies += 250;
      p.sunCrests += 75;
      p.rank = Math.max(1, Math.floor(p.trophies / 200) + 1);
      this.saveProfile(p);
    }
    return p;
  }

  public static getCloudSlots(): { slot: number; name: string; trophies: number; date: string }[] {
    try {
      const raw = localStorage.getItem(SLOTS_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    return [
      { slot: 1, name: 'Cloud Slot A (Main)', trophies: 650, date: '2026-10-18' },
      { slot: 2, name: 'Cloud Slot B (Secondary)', trophies: 220, date: '2026-10-15' },
      { slot: 3, name: 'Cloud Slot C (Empty)', trophies: 0, date: 'Unsaved' },
    ];
  }

  public static saveToCloudSlot(slotIndex: number, profile: PlayerProfile): void {
    const slots = this.getCloudSlots();
    const existing = slots.find((s) => s.slot === slotIndex);
    if (existing) {
      existing.name = `${profile.name} (Rank ${profile.rank})`;
      existing.trophies = profile.trophies;
      existing.date = new Date().toISOString().split('T')[0];
    }
    try {
      localStorage.setItem(SLOTS_KEY, JSON.stringify(slots));
    } catch {}
  }

  public static exportSave(): string {
    const p = this.getProfile();
    return btoa(JSON.stringify(p));
  }

  public static importSave(dataStr: string): PlayerProfile | null {
    try {
      const json = atob(dataStr);
      const parsed = JSON.parse(json);
      if (parsed && typeof parsed.trophies === 'number') {
        const full = { ...DEFAULT_PROFILE, ...parsed };
        this.saveProfile(full);
        return full;
      }
    } catch {}
    return null;
  }
}
