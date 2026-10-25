import { PlayerProfile, PlantId, SaveSlotData } from '../types/game';

const STORAGE_KEY = 'pvz_tactics_profile_v2';
const SLOTS_KEY = 'pvz_tactics_save_slots_v2';

export const INITIAL_UNLOCKED_PLANTS: PlantId[] = [
  'sunflower',
  'peashooter',
  'wallnut',
];

export const LEVEL_PLANT_UNLOCKS: Record<number, PlantId[]> = {
  0: ['potatomine', 'snowpea'],              // Sector 1 clears unlock Potato Mine & Snow Pea
  1: ['repeater', 'chomper'],                // Sector 2 clears unlock Repeater & Chomper
  2: ['cherrybomb', 'squash'],               // Sector 3 clears unlock Cherry Bomb & Squash
  3: ['spikeweed', 'jalapeno'],              // Sector 4 clears unlock Spikeweed & Jalapeno
  4: ['torchwood', 'tallnut', 'fumeshroom'], // Sector 5 clears unlock Torchwood, Tall-nut & Fume-shroom
  5: ['melonpult', 'hypnoshroom'],           // Sector 6 clears unlock Melon-pult & Hypno-shroom
};

export const DEFAULT_PROFILE: PlayerProfile = {
  id: 'usr_' + Math.random().toString(36).substring(2, 9),
  name: 'Crazy Dave',
  rank: 1,
  trophies: 0,
  sunCrests: 10,
  highestWaveCampaign: 1,
  campaignLevelIndex: 0,
  maxUnlockedLevel: 0,
  selectedDeck: ['sunflower', 'peashooter', 'wallnut'],
  dailyCompletedDates: [],
  worldBossTotalDamage: 0,
  unlockedPlants: ['sunflower', 'peashooter', 'wallnut'],
  soundVolume: 0.6,
  soundEnabled: true,
  lastSynced: new Date().toISOString(),
};

export class StorageService {
  /**
   * Retrieves the current active player profile.
   */
  public static getProfile(): PlayerProfile {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const unlocked: PlantId[] = Array.isArray(parsed.unlockedPlants) && parsed.unlockedPlants.length > 0
          ? Array.from(new Set([...INITIAL_UNLOCKED_PLANTS, ...parsed.unlockedPlants]))
          : [...INITIAL_UNLOCKED_PLANTS];

        const deck: PlantId[] = Array.isArray(parsed.selectedDeck) && parsed.selectedDeck.length > 0
          ? parsed.selectedDeck.filter((id: PlantId) => unlocked.includes(id))
          : unlocked.slice(0, 8);

        return {
          ...DEFAULT_PROFILE,
          ...parsed,
          campaignLevelIndex: parsed.campaignLevelIndex ?? 0,
          maxUnlockedLevel: parsed.maxUnlockedLevel ?? parsed.campaignLevelIndex ?? 0,
          unlockedPlants: unlocked,
          selectedDeck: deck.length > 0 ? deck : unlocked.slice(0, 3),
        };
      }
    } catch {
      // LocalStorage access fallback
    }
    return { ...DEFAULT_PROFILE };
  }

  /**
   * Saves the current active profile to LocalStorage and triggers Auto-Save.
   */
  public static saveProfile(profile: PlayerProfile): void {
    try {
      profile.lastSynced = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
      this.autoSave(profile);
    } catch {
      // Fallback
    }
  }

  /**
   * Updates current campaign level progress and awards newly unlocked plants upon level completion.
   */
  public static completeLevel(levelIndex: number): {
    profile: PlayerProfile;
    newlyUnlockedPlants: PlantId[];
    nextLevelUnlocked: boolean;
  } {
    const profile = this.getProfile();
    const nextLevel = Math.min(5, levelIndex + 1);
    const wasAlreadyUnlocked = (profile.maxUnlockedLevel ?? 0) >= nextLevel;
    profile.maxUnlockedLevel = Math.max(profile.maxUnlockedLevel ?? 0, nextLevel);
    profile.campaignLevelIndex = nextLevel;
    profile.highestWaveCampaign = Math.max(profile.highestWaveCampaign, levelIndex + 1);

    const rewards = LEVEL_PLANT_UNLOCKS[levelIndex] || [];
    const newlyUnlocked: PlantId[] = [];
    rewards.forEach((pId) => {
      if (!profile.unlockedPlants.includes(pId)) {
        profile.unlockedPlants.push(pId);
        newlyUnlocked.push(pId);
      }
    });

    // Auto-equip newly unlocked plants if deck has free slots (< 8)
    if (newlyUnlocked.length > 0 && (!profile.selectedDeck || profile.selectedDeck.length < 8)) {
      const currentDeck = profile.selectedDeck || [];
      const slotsAvailable = 8 - currentDeck.length;
      profile.selectedDeck = [...currentDeck, ...newlyUnlocked.slice(0, slotsAvailable)];
    }

    this.saveProfile(profile);
    return {
      profile,
      newlyUnlockedPlants: newlyUnlocked,
      nextLevelUnlocked: !wasAlreadyUnlocked && nextLevel > levelIndex,
    };
  }

  /**
   * Updates current campaign level progress in the active profile.
   */
  public static updateCampaignProgress(levelIndex: number): PlayerProfile {
    const profile = this.getProfile();
    profile.campaignLevelIndex = Math.max(0, levelIndex);
    profile.highestWaveCampaign = Math.max(profile.highestWaveCampaign, levelIndex + 1);
    this.saveProfile(profile);
    return profile;
  }

  /**
   * Updates chosen seed deck in the active profile.
   */
  public static updateSelectedDeck(deck: PlantId[]): PlayerProfile {
    const profile = this.getProfile();
    profile.selectedDeck = [...deck];
    this.saveProfile(profile);
    return profile;
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

  /**
   * Retrieves all save slots (Slot 0 = Auto-Save, Slots 1-3 = Manual Saves).
   */
  public static getSaveSlots(): SaveSlotData[] {
    try {
      const raw = localStorage.getItem(SLOTS_KEY);
      if (raw) {
        const parsed: SaveSlotData[] = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}

    const defaultProfile = this.getProfile();
    return [
      {
        slot: 0,
        name: 'Auto-Save',
        isAutoSave: true,
        date: new Date().toLocaleDateString(),
        timestamp: Date.now(),
        campaignLevelIndex: defaultProfile.campaignLevelIndex ?? 0,
        trophies: defaultProfile.trophies,
        rank: defaultProfile.rank,
        profile: { ...defaultProfile },
      },
      {
        slot: 1,
        name: 'Slot 1: Manual Save',
        date: 'Empty',
        timestamp: 0,
        campaignLevelIndex: 0,
        trophies: 0,
        rank: 1,
        profile: { ...DEFAULT_PROFILE },
      },
      {
        slot: 2,
        name: 'Slot 2: Manual Save',
        date: 'Empty',
        timestamp: 0,
        campaignLevelIndex: 0,
        trophies: 0,
        rank: 1,
        profile: { ...DEFAULT_PROFILE },
      },
      {
        slot: 3,
        name: 'Slot 3: Manual Save',
        date: 'Empty',
        timestamp: 0,
        campaignLevelIndex: 0,
        trophies: 0,
        rank: 1,
        profile: { ...DEFAULT_PROFILE },
      },
    ];
  }

  /**
   * Saves the provided profile to a specific slot.
   */
  public static saveToSlot(slotIndex: number, profile: PlayerProfile, customName?: string): void {
    const slots = this.getSaveSlots();
    const existingIdx = slots.findIndex((s) => s.slot === slotIndex);
    const sectorName = `Sector ${(profile.campaignLevelIndex ?? 0) + 1}`;

    const slotData: SaveSlotData = {
      slot: slotIndex,
      name: customName || (slotIndex === 0 ? 'Auto-Save' : `Slot ${slotIndex}: ${profile.name} (${sectorName})`),
      isAutoSave: slotIndex === 0,
      date: new Date().toLocaleString(),
      timestamp: Date.now(),
      campaignLevelIndex: profile.campaignLevelIndex ?? 0,
      trophies: profile.trophies,
      rank: profile.rank,
      profile: { ...profile },
    };

    if (existingIdx >= 0) {
      slots[existingIdx] = slotData;
    } else {
      slots.push(slotData);
    }

    try {
      localStorage.setItem(SLOTS_KEY, JSON.stringify(slots));
    } catch {}
  }

  /**
   * Internal auto-save updater for Slot 0.
   */
  public static autoSave(profile: PlayerProfile): void {
    this.saveToSlot(0, profile, `Auto-Save: Sector ${(profile.campaignLevelIndex ?? 0) + 1}`);
  }

  /**
   * Loads a saved profile from a specific slot and sets it as the active profile.
   */
  public static loadFromSlot(slotIndex: number): PlayerProfile | null {
    const slots = this.getSaveSlots();
    const target = slots.find((s) => s.slot === slotIndex);
    if (target && target.timestamp > 0) {
      const loadedProfile: PlayerProfile = {
        ...DEFAULT_PROFILE,
        ...target.profile,
      };
      this.saveProfile(loadedProfile);
      return loadedProfile;
    }
    return null;
  }

  /**
   * Clears a manual save slot back to empty.
   */
  public static deleteSlot(slotIndex: number): void {
    if (slotIndex === 0) return; // Cannot delete auto-save
    const slots = this.getSaveSlots();
    const existingIdx = slots.findIndex((s) => s.slot === slotIndex);
    if (existingIdx >= 0) {
      slots[existingIdx] = {
        slot: slotIndex,
        name: `Slot ${slotIndex}: Empty`,
        date: 'Empty',
        timestamp: 0,
        campaignLevelIndex: 0,
        trophies: 0,
        rank: 1,
        profile: { ...DEFAULT_PROFILE },
      };
      try {
        localStorage.setItem(SLOTS_KEY, JSON.stringify(slots));
      } catch {}
    }
  }

  /**
   * Exports full save payload as an encrypted/encoded string.
   */
  public static exportSave(): string {
    const current = this.getProfile();
    const slots = this.getSaveSlots();
    const exportBundle = {
      version: 2,
      exportedAt: new Date().toISOString(),
      activeProfile: current,
      slots,
    };
    return btoa(unescape(encodeURIComponent(JSON.stringify(exportBundle))));
  }

  /**
   * Imports save data from an encoded string or raw JSON.
   */
  public static importSave(dataStr: string): PlayerProfile | null {
    try {
      let json = dataStr;
      try {
        json = decodeURIComponent(escape(atob(dataStr)));
      } catch {
        // May already be plain JSON
      }

      const parsed = JSON.parse(json);
      let profileToRestore: PlayerProfile | null = null;

      if (parsed.activeProfile && typeof parsed.activeProfile.trophies === 'number') {
        profileToRestore = { ...DEFAULT_PROFILE, ...parsed.activeProfile };
        if (Array.isArray(parsed.slots)) {
          localStorage.setItem(SLOTS_KEY, JSON.stringify(parsed.slots));
        }
      } else if (parsed.trophies !== undefined) {
        profileToRestore = { ...DEFAULT_PROFILE, ...parsed };
      }

      if (profileToRestore) {
        this.saveProfile(profileToRestore);
        return profileToRestore;
      }
    } catch {}
    return null;
  }

  /**
   * Downloads save file as pvz_tactics_save.json to user's computer.
   */
  public static downloadSaveFile(): void {
    const raw = this.exportSave();
    const blob = new Blob([raw], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pvz_tactics_save_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
