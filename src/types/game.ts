export type PlantId = 
  | 'sunflower'
  | 'peashooter'
  | 'wallnut'
  | 'snowpea'
  | 'repeater'
  | 'cherrybomb'
  | 'potatomine'
  | 'chomper'
  | 'squash'
  | 'jalapeno'
  | 'spikeweed'
  | 'torchwood'
  | 'tallnut'
  | 'fumeshroom'
  | 'melonpult'
  | 'hypnoshroom';

export type ZombieId =
  | 'basic'
  | 'conehead'
  | 'buckethead'
  | 'football'
  | 'newspaper'
  | 'gargantuar'
  | 'polevaulter'
  | 'screendoor'
  | 'disco'
  | 'jackinbox'
  | 'zomboni'
  | 'pogo';

export interface PlantDefinition {
  id: PlantId;
  name: string;
  cost: number;
  cooldownTurns: number;
  maxHp: number;
  description: string;
  category: 'Economy' | 'Shooter' | 'Defense' | 'Explosive' | 'Trap' | 'Enhancer';
  turnActionDescription: string;
}

export interface ZombieDefinition {
  id: ZombieId;
  name: string;
  maxHp: number;
  damagePerTurn: number;
  speedTilesPerTurn: number; // 0.5 = 1 tile every 2 turns, 1 = 1 tile every turn
  description: string;
  armorType?: 'Cone' | 'Bucket' | 'Helmet' | 'Newspaper' | 'Titan Armor' | 'Screen Door' | 'Vault Pole' | 'Zamboni Chassis' | 'Pogo Spring';
}

export interface PlantInstance {
  instanceId: string;
  plantId: PlantId;
  row: number;
  col: number;
  hp: number;
  maxHp: number;
  turnsAlive: number;
  actionCounter: number; // For sunflowers, potato mine, chomper
  hasProducedFirstSun?: boolean; // Sunflower: 3 turns for first, then every 8 turns
  fuseTurnsRemaining?: number; // Cherry Bomb (1 turn delay), Jalapeno (1 turn delay)
  isArmed?: boolean; // Potato mine (4 turns to arm)
  chewingTurnsRemaining?: number; // Chomper (8 turns to digest)
  lastFiredTurn?: number;
}

export type HazardType = 'tombstone' | 'crater' | 'toxic_puddle' | 'storm_cloud' | 'ice_trail';

export interface LawnHazard {
  id: string;
  type: HazardType;
  row: number;
  col: number; // Discrete tile 0-7
  hp?: number; // Tombstones have HP and can be attacked
  maxHp?: number;
  turnsRemaining?: number; // Craters and toxic puddles expire after N turns
}

export interface ZombieInstance {
  instanceId: string;
  zombieId: ZombieId;
  row: number;
  col: number; // Strictly discrete integer tile 0 to 7
  hp: number;
  maxHp: number;
  damagePerTurn: number;
  stepInterval: number; // Number of turns between 1-tile movements
  stepCooldown: number; // Turns until next 1-tile advance
  slowedTurns: number; // If slowed by snow pea (adds delay)
  isEating: boolean;
  eatingPlantId?: string;
  hasSpecialArmor: boolean; // Newspaper intact, screen door intact, etc.
  hasVaulted?: boolean; // Pole vaulter
  hasSummoned?: boolean; // Disco zombie
  isHypnotized?: boolean; // Hypno-shroom turned around!
  jackFuseRemaining?: number; // Jack-in-the-box detonation
  isPogoJumping?: boolean; // Pogo hopping
}

export interface Projectile {
  id: string;
  type: 'pea' | 'frostpea' | 'firepea' | 'spore' | 'melon';
  row: number;
  fromCol: number;
  toCol: number;
  progress: number; // 0 to 1 for flight animation
  damage: number;
  slowEffect?: boolean;
}

export interface FloatingText {
  id: string;
  row: number;
  col: number;
  text: string;
  color: 'yellow' | 'red' | 'cyan' | 'green' | 'orange' | 'purple';
}

export type TurnPhase =
  | 'PLAYER_INPUT'
  | 'RESOLVING_SUN'
  | 'RESOLVING_PLANTS'
  | 'RESOLVING_ZOMBIES'
  | 'RESOLVING_MOWERS'
  | 'CHECK_WAVE';

export type GameStatus = 'PLAYING' | 'VICTORY' | 'DEFEAT';

export type GameMode = 'CAMPAIGN' | 'DAILY' | 'WORLD_RAID';

export type LawnTheme = 'day' | 'pool' | 'roof' | 'night';

export interface WaveZombieSpawn {
  zombieId: ZombieId;
  row: number;
  turn: number;
}

export interface LevelConfig {
  id: string;
  name: string;
  sectorName: string;
  lawnTheme?: LawnTheme;
  sunPulseInterval: number; // Sun drops every N turns (default 3)
  sunPulseAmount: number; // default 50
  startingSun: number;
  totalWaves: number;
  spawns: WaveZombieSpawn[];
  initialHazards?: LawnHazard[];
  specialModifier?: string;
  rewardTrophies: number;
}

export interface DailyChallengeConfig {
  date: string;
  title: string;
  modifierText: string;
  startingSun: number;
  sunPulseInterval: number;
  sunPulseAmount: number;
  bannedPlants: PlantId[];
  bonusScoreMultiplier: number;
  totalWaves: number;
}

export interface WorldBossState {
  bossName: string;
  seasonId: string;
  maxHp: number;
  currentHp: number;
  totalCommunityDamage: number;
  playerContribution: number;
  daysRemaining: number;
  recentAttackers: {
    playerName: string;
    damage: number;
    timestamp: string;
  }[];
}

export interface LeaderboardEntry {
  rank: number;
  playerName: string;
  score: number;
  turnsSurvived: number;
  mode: GameMode;
  date: string;
  badge: string;
}

export interface PlayerProfile {
  id: string;
  name: string;
  rank: number;
  trophies: number;
  sunCrests: number;
  highestWaveCampaign: number;
  campaignLevelIndex?: number;
  selectedDeck?: PlantId[];
  dailyCompletedDates: string[];
  worldBossTotalDamage: number;
  unlockedPlants: PlantId[];
  soundVolume: number;
  soundEnabled: boolean;
  lastSynced: string;
}

export interface SaveSlotData {
  slot: number;
  name: string;
  isAutoSave?: boolean;
  date: string;
  timestamp: number;
  campaignLevelIndex: number;
  trophies: number;
  rank: number;
  profile: PlayerProfile;
}
