/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  GameMode,
  GameStatus,
  LawnHazard,
  PlantDefinition,
  PlantId,
  PlantInstance,
  PlayerProfile,
  Projectile,
  FloatingText,
  TurnPhase,
  ZombieInstance,
  LevelConfig,
} from './types/game';
import { PLANT_DEFINITIONS } from './constants/plants';
import { ZOMBIE_DEFINITIONS } from './constants/zombies';
import { CAMPAIGN_LEVELS } from './constants/levels';
import { StorageService } from './services/storage';
import { MMOService } from './services/mmoService';
import { sounds } from './services/sound';
import { TopNav } from './components/TopNav';
import { HUD } from './components/HUD';
import { SeedPacket } from './components/SeedPacket';
import { GameBoard } from './components/GameBoard';
import { WorldRaidView } from './components/views/WorldRaidView';
import { DailyChallengeView } from './components/views/DailyChallengeView';
import { LeaderboardView } from './components/views/LeaderboardView';
import { AlmanacView } from './components/views/AlmanacView';
import { CloudSaveModal } from './components/modals/CloudSaveModal';
import { GameOverModal } from './components/modals/GameOverModal';
import { ChooseSeedsModal } from './components/modals/ChooseSeedsModal';
import { RotateCcw, Sun, Shovel, Play } from 'lucide-react';

export default function App() {
  // Navigation & Profile
  const [activeTab, setActiveTab] = useState<'GAME' | 'WORLD_RAID' | 'DAILY' | 'LEADERBOARD' | 'ALMANAC'>('GAME');
  const [profile, setProfile] = useState<PlayerProfile>(() => StorageService.getProfile());
  const [isCloudModalOpen, setIsCloudModalOpen] = useState(false);
  const [isChoosingSeeds, setIsChoosingSeeds] = useState(false);
  const [gameMode, setGameMode] = useState<GameMode>('CAMPAIGN');

  // Selected Deck for Battle (Restored from Save System)
  const [selectedDeck, setSelectedDeck] = useState<PlantId[]>(() => {
    const prof = StorageService.getProfile();
    return prof.selectedDeck && prof.selectedDeck.length > 0
      ? prof.selectedDeck
      : [
          'sunflower',
          'peashooter',
          'wallnut',
          'snowpea',
          'fumeshroom',
          'repeater',
          'cherrybomb',
          'tallnut',
        ];
  });

  // Campaign & Level Configuration (Restored from Save System)
  const [currentLevelIndex, setCurrentLevelIndex] = useState(() => {
    const prof = StorageService.getProfile();
    return prof.campaignLevelIndex && prof.campaignLevelIndex < CAMPAIGN_LEVELS.length
      ? prof.campaignLevelIndex
      : 0;
  });
  const activeLevel = CAMPAIGN_LEVELS[currentLevelIndex] || CAMPAIGN_LEVELS[0];

  // Combat Battlefield State
  const [currentTurn, setCurrentTurn] = useState(1);
  const [sun, setSun] = useState(activeLevel.startingSun);
  const [turnPhase, setTurnPhase] = useState<TurnPhase>('PLAYER_INPUT');
  const [gameStatus, setGameStatus] = useState<GameStatus>('PLAYING');

  const [plants, setPlants] = useState<PlantInstance[]>([]);
  const [zombies, setZombies] = useState<ZombieInstance[]>([]);
  const [hazards, setHazards] = useState<LawnHazard[]>(() => activeLevel.initialHazards || []);
  const [projectiles, setProjectiles] = useState<Projectile[]>([]);
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
  const [lawnMowers, setLawnMowers] = useState<boolean[]>([true, true, true, true, true]);

  // Player Selection & Tools (All 16 Plants)
  const [selectedPlantId, setSelectedPlantId] = useState<PlantId | null>('peashooter');
  const [isShovelActive, setIsShovelActive] = useState(false);
  const [plantCooldowns, setPlantCooldowns] = useState<Record<PlantId, number>>({
    sunflower: 0,
    peashooter: 0,
    wallnut: 0,
    snowpea: 0,
    repeater: 0,
    cherrybomb: 0,
    potatomine: 0,
    chomper: 0,
    squash: 0,
    jalapeno: 0,
    spikeweed: 0,
    torchwood: 0,
    tallnut: 0,
    fumeshroom: 0,
    melonpult: 0,
    hypnoshroom: 0,
  });

  // Speedy Combat & Auto Mode Settings
  const [isFastSpeed, setIsFastSpeed] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);
  const [autoCountdown, setAutoCountdown] = useState(5);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentWave, setCurrentWave] = useState(1);
  const [stats, setStats] = useState({
    turnsSurvived: 0,
    zombiesKilled: 0,
    damageDealt: 0,
    score: 0,
    trophiesEarned: 0,
  });

  // Daily Challenge & World Boss Data
  const [dailyConfig] = useState(() => MMOService.getTodayDailyConfig());
  const [worldBossState, setWorldBossState] = useState(() => MMOService.getWorldBossState());

  // All 16 unlocked plants in database
  const allAvailablePlantIds: PlantId[] = useMemo(() => {
    const allPlants: PlantId[] = [
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
    ];
    return allPlants.filter((pId) => {
      if (gameMode === 'DAILY' && dailyConfig.bannedPlants.includes(pId)) {
        return false;
      }
      return true;
    });
  }, [gameMode, dailyConfig]);

  // Active seeds chosen for this battle
  const availablePlantIds: PlantId[] = useMemo(() => {
    const active = selectedDeck.filter((id) => allAvailablePlantIds.includes(id));
    return active.length > 0 ? active : allAvailablePlantIds.slice(0, 8);
  }, [selectedDeck, allAvailablePlantIds]);

  const handleToggleSeed = (pId: PlantId) => {
    setSelectedDeck((prev) => {
      let next: PlantId[];
      if (prev.includes(pId)) {
        next = prev.filter((id) => id !== pId);
      } else {
        if (prev.length >= 8) return prev;
        next = [...prev, pId];
      }
      StorageService.updateSelectedDeck(next);
      return next;
    });
  };

  const handleAutoFillSeeds = () => {
    const recommended: PlantId[] = [
      'sunflower',
      'peashooter',
      'wallnut',
      'snowpea',
      'fumeshroom',
      'tallnut',
      'cherrybomb',
      'squash',
    ];
    const filtered = recommended.filter((id) => allAvailablePlantIds.includes(id));
    const extra = allAvailablePlantIds.filter((id) => !filtered.includes(id));
    const full = [...filtered, ...extra].slice(0, 8);
    setSelectedDeck(full);
    StorageService.updateSelectedDeck(full);
  };

  const handleClearSeeds = () => {
    setSelectedDeck([]);
    StorageService.updateSelectedDeck([]);
  };

  // Check if player can afford and place any available plant right now
  const canAffordAnyPlant = useMemo(() => {
    return availablePlantIds.some(
      (id) => sun >= PLANT_DEFINITIONS[id].cost && (plantCooldowns[id] ?? 0) <= 0
    );
  }, [availablePlantIds, sun, plantCooldowns]);

  // Sound sync
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.setEnabled(next);
  };

  // Add Floating Text helper
  const addFloatingText = useCallback((row: number, col: number, text: string, color: FloatingText['color'] = 'yellow') => {
    const id = 'ft_' + Math.random().toString(36).substring(2, 9);
    setFloatingTexts((prev) => [...prev, { id, row, col, text, color }]);
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((item) => item.id !== id));
    }, 700);
  }, []);

  // Start / Reset Battle for a specific Level or Mode
  const initBattle = useCallback((level: LevelConfig, mode: GameMode = 'CAMPAIGN') => {
    setGameMode(mode);
    setCurrentTurn(1);
    setCurrentWave(1);
    setSun(mode === 'DAILY' ? dailyConfig.startingSun : level.startingSun);
    setPlants([]);
    setZombies([]);
    setHazards(level.initialHazards ? [...level.initialHazards] : []);
    setProjectiles([]);
    setFloatingTexts([]);
    setLawnMowers([true, true, true, true, true]);
    setTurnPhase('PLAYER_INPUT');
    setGameStatus('PLAYING');
    setSelectedPlantId('peashooter');
    setIsShovelActive(false);
    setAutoCountdown(5);
    setPlantCooldowns({
      sunflower: 0,
      peashooter: 0,
      wallnut: 0,
      snowpea: 0,
      repeater: 0,
      cherrybomb: 0,
      potatomine: 0,
      chomper: 0,
      squash: 0,
      jalapeno: 0,
      spikeweed: 0,
      torchwood: 0,
      tallnut: 0,
      fumeshroom: 0,
      melonpult: 0,
      hypnoshroom: 0,
    });
    setStats({
      turnsSurvived: 0,
      zombiesKilled: 0,
      damageDealt: 0,
      score: 0,
      trophiesEarned: 0,
    });
  }, [dailyConfig]);

  // Restart current battle
  const restartCurrentBattle = () => {
    initBattle(activeLevel, gameMode);
  };

  // Start World Raid Battle
  const handleStartWorldRaid = () => {
    setActiveTab('GAME');
    const raidLevel: LevelConfig = {
      id: 'world-raid-battle',
      name: 'World Boss Raid: Titan Assault',
      sectorName: 'Titan Arena',
      sunPulseInterval: 3,
      sunPulseAmount: 60,
      startingSun: 250,
      totalWaves: 10,
      rewardTrophies: 350,
      initialHazards: [
        { id: 'hr-1', type: 'crater', row: 1, col: 4, turnsRemaining: 8 },
        { id: 'hr-2', type: 'crater', row: 3, col: 5, turnsRemaining: 10 },
        { id: 'hr-3', type: 'tombstone', row: 0, col: 7, hp: 200, maxHp: 200 },
        { id: 'hr-4', type: 'tombstone', row: 4, col: 7, hp: 200, maxHp: 200 },
      ],
      spawns: [
        { turn: 2, row: 1, zombieId: 'screendoor' },
        { turn: 2, row: 3, zombieId: 'polevaulter' },
        { turn: 4, row: 2, zombieId: 'disco' },
        { turn: 4, row: 0, zombieId: 'buckethead' },
        { turn: 4, row: 4, zombieId: 'newspaper' },
        { turn: 6, row: 2, zombieId: 'gargantuar' },
        { turn: 8, row: 1, zombieId: 'football' },
        { turn: 8, row: 3, zombieId: 'screendoor' },
        { turn: 10, row: 0, zombieId: 'gargantuar' },
        { turn: 10, row: 4, zombieId: 'disco' },
      ],
    };
    initBattle(raidLevel, 'WORLD_RAID');
  };

  // Start Daily Run
  const handleStartDaily = () => {
    setActiveTab('GAME');
    const dailyLevel: LevelConfig = {
      id: 'daily-challenge-' + dailyConfig.date,
      name: dailyConfig.title,
      sectorName: 'Daily Theater',
      sunPulseInterval: dailyConfig.sunPulseInterval,
      sunPulseAmount: dailyConfig.sunPulseAmount,
      startingSun: dailyConfig.startingSun,
      totalWaves: dailyConfig.totalWaves,
      rewardTrophies: 250,
      initialHazards: [
        { id: 'hd-1', type: 'toxic_puddle', row: 2, col: 5, turnsRemaining: 9 },
        { id: 'hd-2', type: 'tombstone', row: 1, col: 6, hp: 150, maxHp: 150 },
      ],
      spawns: [
        { turn: 2, row: 2, zombieId: 'basic' },
        { turn: 3, row: 0, zombieId: 'polevaulter' },
        { turn: 5, row: 4, zombieId: 'screendoor' },
        { turn: 7, row: 1, zombieId: 'newspaper' },
        { turn: 9, row: 3, zombieId: 'disco' },
        { turn: 11, row: 2, zombieId: 'buckethead' },
        { turn: 13, row: 0, zombieId: 'football' },
        { turn: 13, row: 4, zombieId: 'screendoor' },
      ],
    };
    initBattle(dailyLevel, 'DAILY');
  };

  // Proceed to next campaign sector
  const handleNextSector = () => {
    if (currentLevelIndex < CAMPAIGN_LEVELS.length - 1) {
      const nextIdx = currentLevelIndex + 1;
      setCurrentLevelIndex(nextIdx);
      StorageService.updateCampaignProgress(nextIdx);
      initBattle(CAMPAIGN_LEVELS[nextIdx], 'CAMPAIGN');
    }
  };

  // Jump to specific campaign sector
  const handleSelectLevel = (idx: number) => {
    if (idx >= 0 && idx < CAMPAIGN_LEVELS.length) {
      setCurrentLevelIndex(idx);
      StorageService.updateCampaignProgress(idx);
      initBattle(CAMPAIGN_LEVELS[idx], 'CAMPAIGN');
    }
  };

  // Handle Tile Click for Planting or Shovel
  const handleTileClick = (row: number, col: number) => {
    if (turnPhase !== 'PLAYER_INPUT' || gameStatus !== 'PLAYING') return;

    setAutoCountdown(5);

    // Shovel action: can dig up plant OR clear a tombstone!
    if (isShovelActive) {
      const existingPlant = plants.find((p) => p.row === row && p.col === col);
      if (existingPlant) {
        sounds.playPlant();
        setPlants((prev) => prev.filter((p) => p.instanceId !== existingPlant.instanceId));
        addFloatingText(row, col, 'DIGGED', 'orange');
        setIsShovelActive(false);
        return;
      }

      const existingTombstone = hazards.find((h) => h.row === row && h.col === col && h.type === 'tombstone');
      if (existingTombstone) {
        sounds.playHit(true);
        setHazards((prev) => prev.filter((h) => h.id !== existingTombstone.id));
        addFloatingText(row, col, 'TOMBSTONE EXCAVATED', 'orange');
        setIsShovelActive(false);
        return;
      }
      return;
    }

    // Placing selected plant
    if (selectedPlantId) {
      const plantDef = PLANT_DEFINITIONS[selectedPlantId];
      if (!plantDef) return;

      const existingPlant = plants.find((p) => p.row === row && p.col === col);
      if (existingPlant) return;

      const hazard = hazards.find((h) => h.row === row && h.col === col);
      if (hazard && hazard.type !== 'toxic_puddle') {
        addFloatingText(row, col, 'BLOCKED BY HAZARD', 'red');
        return;
      }

      if (sun < plantDef.cost) return;
      if ((plantCooldowns[selectedPlantId] ?? 0) > 0) return;

      // Deduct sun
      setSun((prev) => prev - plantDef.cost);

      // Start cooldown
      setPlantCooldowns((prev) => ({
        ...prev,
        [selectedPlantId]: plantDef.cooldownTurns,
      }));

      // Add Plant instance with specific parameters
      const newPlant: PlantInstance = {
        instanceId: 'p_' + Math.random().toString(36).substring(2, 9),
        plantId: selectedPlantId,
        row,
        col,
        hp: plantDef.maxHp,
        maxHp: plantDef.maxHp,
        turnsAlive: 0,
        actionCounter: 0,
        hasProducedFirstSun: false,
        fuseTurnsRemaining: (selectedPlantId === 'cherrybomb' || selectedPlantId === 'jalapeno') ? 1 : 0,
        isArmed: selectedPlantId === 'potatomine' ? false : true,
        chewingTurnsRemaining: 0,
      };

      sounds.playPlant();
      setPlants((prev) => [...prev, newPlant]);
      addFloatingText(row, col, `-${plantDef.cost} SUN`, 'yellow');
    }
  };

  // Determine if empty turns can be skipped
  const upcomingSpawns = useMemo(() => {
    return activeLevel.spawns.filter((s) => s.turn > currentTurn);
  }, [activeLevel.spawns, currentTurn]);

  const nextThreatTurn = useMemo(() => {
    if (upcomingSpawns.length === 0) return null;
    return Math.min(...upcomingSpawns.map((s) => s.turn));
  }, [upcomingSpawns]);

  const canSkipEmptyTurns =
    zombies.length === 0 &&
    nextThreatTurn !== null &&
    nextThreatTurn > currentTurn + 1 &&
    turnPhase === 'PLAYER_INPUT' &&
    gameStatus === 'PLAYING';

  const skipTurnsCount = nextThreatTurn ? nextThreatTurn - currentTurn : 0;

  // Skip calm turns where nothing happens directly to next threat
  const handleSkipEmptyTurns = useCallback(() => {
    if (!canSkipEmptyTurns || !nextThreatTurn) return;

    const turnsSkipped = nextThreatTurn - currentTurn;
    const sunInterval = gameMode === 'DAILY' ? dailyConfig.sunPulseInterval : activeLevel.sunPulseInterval;
    const sunAmt = gameMode === 'DAILY' ? dailyConfig.sunPulseAmount : activeLevel.sunPulseAmount;

    let accumulatedSun = 0;
    for (let t = currentTurn + 1; t <= nextThreatTurn; t++) {
      if (t % sunInterval === 0) {
        accumulatedSun += sunAmt;
      }
    }

    // Advance sunflower production: first pulse takes 3 turns, then every 8 turns
    const updatedPlants = plants.map((plant) => {
      if (plant.plantId === 'sunflower') {
        let added = 0;
        let counter = plant.actionCounter + turnsSkipped;
        let hasFirst = plant.hasProducedFirstSun;

        if (!hasFirst && counter >= 3) {
          added += 25;
          hasFirst = true;
          counter -= 3;
        }
        if (hasFirst && counter >= 8) {
          const cycles = Math.floor(counter / 8);
          added += cycles * 25;
          counter = counter % 8;
        }

        accumulatedSun += added;
        return {
          ...plant,
          actionCounter: counter,
          hasProducedFirstSun: hasFirst,
          turnsAlive: plant.turnsAlive + turnsSkipped,
        };
      }
      if (plant.plantId === 'potatomine') {
        const newCounter = plant.actionCounter + turnsSkipped;
        return {
          ...plant,
          actionCounter: newCounter,
          isArmed: newCounter >= 4,
          turnsAlive: plant.turnsAlive + turnsSkipped,
        };
      }
      return { ...plant, turnsAlive: plant.turnsAlive + turnsSkipped };
    });

    // Advance plant cooldowns
    setPlantCooldowns((prev) => {
      const updated: Record<PlantId, number> = { ...prev };
      (Object.keys(updated) as PlantId[]).forEach((key) => {
        updated[key] = Math.max(0, updated[key] - turnsSkipped);
      });
      return updated;
    });

    // Advance hazards
    setHazards((prev) =>
      prev
        .map((h) => ({
          ...h,
          turnsRemaining: h.turnsRemaining !== undefined ? Math.max(0, h.turnsRemaining - turnsSkipped) : undefined,
        }))
        .filter((h) => h.turnsRemaining === undefined || h.turnsRemaining > 0)
    );

    // Regular zombies move 1 tile every turn!
    const spawnsToTrigger = activeLevel.spawns.filter((s) => s.turn === nextThreatTurn);
    const newZombies: ZombieInstance[] = spawnsToTrigger.map((spawn) => {
      const def = ZOMBIE_DEFINITIONS[spawn.zombieId];
      const stepInterval = spawn.zombieId === 'gargantuar' ? 2 : 1;

      return {
        instanceId: 'z_' + Math.random().toString(36).substring(2, 9),
        zombieId: spawn.zombieId,
        row: spawn.row,
        col: 7,
        hp: def.maxHp,
        maxHp: def.maxHp,
        damagePerTurn: def.damagePerTurn,
        stepInterval,
        stepCooldown: stepInterval,
        slowedTurns: 0,
        isEating: false,
        hasSpecialArmor: true,
        hasVaulted: false,
        hasSummoned: false,
        jackFuseRemaining: spawn.zombieId === 'jackinbox' ? 3 : undefined,
        isPogoJumping: spawn.zombieId === 'pogo',
      };
    });

    setCurrentTurn(nextThreatTurn);
    setSun((prev) => prev + accumulatedSun);
    setPlants(updatedPlants);
    setZombies(newZombies);
    setAutoCountdown(5);

    sounds.playSunCollect();
    addFloatingText(2, 4, `SKIPPED ${turnsSkipped} TURNS (+${accumulatedSun} SUN)`, 'yellow');
  }, [canSkipEmptyTurns, nextThreatTurn, currentTurn, gameMode, dailyConfig, activeLevel, plants, addFloatingText]);

  // Execute Turn Resolution Phase
  const handleEndTurn = useCallback(() => {
    if (turnPhase !== 'PLAYER_INPUT' || gameStatus !== 'PLAYING') return;

    setAutoCountdown(5);
    sounds.playTurnCommit();

    const nextTurn = currentTurn + 1;
    const hasSpawnsNextTurn = activeLevel.spawns.some((s) => s.turn === nextTurn);

    if (zombies.length === 0 && !hasSpawnsNextTurn && canSkipEmptyTurns) {
      handleSkipEmptyTurns();
      return;
    }

    setTurnPhase('RESOLVING_SUN');
  }, [turnPhase, gameStatus, currentTurn, activeLevel.spawns, zombies.length, canSkipEmptyTurns, handleSkipEmptyTurns]);

  // AUTO-SKIP TURNS WHEN YOU LITERALLY CANNOT DO ANYTHING:
  useEffect(() => {
    if (turnPhase !== 'PLAYER_INPUT' || gameStatus !== 'PLAYING') return;

    if (!canAffordAnyPlant) {
      const delayMs = isFastSpeed ? 250 : 550;
      const skipTimer = setTimeout(() => {
        addFloatingText(2, 4, 'OUT OF SUN / RECHARGING - AUTO ADVANCING', 'orange');
        handleEndTurn();
      }, delayMs);
      return () => clearTimeout(skipTimer);
    }
  }, [canAffordAnyPlant, turnPhase, gameStatus, isFastSpeed, handleEndTurn, addFloatingText]);

  // Auto Mode 5-Second Timer (Speed Up accelerates this by 2x)
  useEffect(() => {
    if (!isAutoMode || turnPhase !== 'PLAYER_INPUT' || gameStatus !== 'PLAYING') {
      return;
    }

    const tickInterval = isFastSpeed ? 500 : 1000;

    const timer = setInterval(() => {
      setAutoCountdown((prev) => {
        if (prev <= 1) {
          handleEndTurn();
          return 5;
        }
        return prev - 1;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [isAutoMode, turnPhase, gameStatus, isFastSpeed, handleEndTurn]);

  // SPEEDIER DETERMINISTIC TURN RESOLUTION ENGINE
  useEffect(() => {
    if (turnPhase === 'PLAYER_INPUT' || gameStatus !== 'PLAYING') return;

    const phaseDelay = isFastSpeed ? 40 : 85;

    if (turnPhase === 'RESOLVING_PLANTS' && zombies.length === 0) {
      setTurnPhase('CHECK_WAVE');
      return;
    }

    // STEP 1: RESOLVING SUN PULSE & SUNFLOWERS
    // Sunflower: Generates first sun after 3 turns, then every 8 turns!
    if (turnPhase === 'RESOLVING_SUN') {
      const timer = setTimeout(() => {
        let addedSun = 0;
        const sunInterval = gameMode === 'DAILY' ? dailyConfig.sunPulseInterval : activeLevel.sunPulseInterval;
        const sunAmt = gameMode === 'DAILY' ? dailyConfig.sunPulseAmount : activeLevel.sunPulseAmount;

        if (currentTurn % sunInterval === 0) {
          addedSun += sunAmt;
          sounds.playSunCollect();
          addFloatingText(2, 4, `+${sunAmt} SOLAR PULSE`, 'yellow');
        }

        const updatedPlants = plants.map((plant) => {
          if (plant.plantId === 'sunflower') {
            const nextCounter = plant.actionCounter + 1;
            const threshold = plant.hasProducedFirstSun ? 8 : 3;

            if (nextCounter >= threshold) {
              addedSun += 25;
              sounds.playSunCollect();
              addFloatingText(plant.row, plant.col, '+25 SUN', 'yellow');
              return {
                ...plant,
                actionCounter: 0,
                hasProducedFirstSun: true,
                turnsAlive: plant.turnsAlive + 1,
              };
            }
            return {
              ...plant,
              actionCounter: nextCounter,
              turnsAlive: plant.turnsAlive + 1,
            };
          }
          return { ...plant, turnsAlive: plant.turnsAlive + 1 };
        });

        if (addedSun > 0) {
          setSun((prev) => prev + addedSun);
        }
        setPlants(updatedPlants);
        setTurnPhase('RESOLVING_PLANTS');
      }, phaseDelay);
      return () => clearTimeout(timer);
    }

    // STEP 2: RESOLVING PLANTS (Attacks, Hazards, Chomps, Traps, Enhancers)
    if (turnPhase === 'RESOLVING_PLANTS') {
      const timer = setTimeout(() => {
        let currentZombies = [...zombies];
        let currentHazards = [...hazards];
        const newProjectiles: Projectile[] = [];
        let totalTurnDamage = 0;
        let killedThisTurn = 0;
        const survivingPlants: PlantInstance[] = [];

        // Identify Torchwoods on the field
        const torchwoodColsByRow: Record<number, number[]> = {};
        plants.forEach((p) => {
          if (p.plantId === 'torchwood') {
            if (!torchwoodColsByRow[p.row]) torchwoodColsByRow[p.row] = [];
            torchwoodColsByRow[p.row].push(p.col);
          }
        });

        for (const plant of plants) {
          // CHERRY BOMB: Needs 1 turn to pass before exploding!
          if (plant.plantId === 'cherrybomb') {
            if ((plant.fuseTurnsRemaining ?? 0) > 0) {
              addFloatingText(plant.row, plant.col, 'SIZZLING...', 'orange');
              survivingPlants.push({
                ...plant,
                fuseTurnsRemaining: (plant.fuseTurnsRemaining ?? 1) - 1,
                turnsAlive: plant.turnsAlive + 1,
              });
              continue;
            }

            // Fuse complete: Detonate 3x3!
            sounds.playExplosion();
            addFloatingText(plant.row, plant.col, 'BOOM! 900', 'red');

            currentZombies = currentZombies.map((z) => {
              const rowDiff = Math.abs(z.row - plant.row);
              const colDiff = Math.abs(z.col - plant.col);
              if (rowDiff <= 1 && colDiff <= 1) {
                const dmg = 900;
                totalTurnDamage += dmg;
                addFloatingText(z.row, z.col, `-${dmg}`, 'red');
                return { ...z, hp: z.hp - dmg };
              }
              return z;
            });

            currentHazards.push({
              id: 'crater_' + Math.random().toString(36).substring(2, 7),
              type: 'crater',
              row: plant.row,
              col: plant.col,
              turnsRemaining: 4,
            });
            continue;
          }

          // JALAPENO: Needs 1 turn to pass, then clears ENTIRE 9-tile row with inferno!
          if (plant.plantId === 'jalapeno') {
            if ((plant.fuseTurnsRemaining ?? 0) > 0) {
              addFloatingText(plant.row, plant.col, 'PRIMING INFERNO...', 'orange');
              survivingPlants.push({
                ...plant,
                fuseTurnsRemaining: (plant.fuseTurnsRemaining ?? 1) - 1,
                turnsAlive: plant.turnsAlive + 1,
              });
              continue;
            }

            sounds.playExplosion();
            addFloatingText(plant.row, 4, 'INFERNO CLEARED ROW!', 'red');

            currentZombies = currentZombies.map((z) => {
              if (z.row === plant.row) {
                const dmg = 1000;
                totalTurnDamage += dmg;
                addFloatingText(z.row, z.col, `-${dmg} (BURN)`, 'red');
                return { ...z, hp: z.hp - dmg };
              }
              return z;
            });

            // Clears tombstones on this row
            currentHazards = currentHazards.filter((h) => !(h.row === plant.row && h.type === 'tombstone'));
            continue;
          }

          // SQUASH: Leaps on zombie in its tile or 1 tile ahead, crushes for 1800 damage!
          if (plant.plantId === 'squash') {
            const targetZombie = currentZombies.find(
              (z) => z.row === plant.row && (z.col === plant.col || z.col === plant.col + 1 || z.col === plant.col - 1) && z.hp > 0
            );

            if (targetZombie) {
              sounds.playHit(false);
              addFloatingText(plant.row, targetZombie.col, 'SQUASH! 1800', 'orange');
              currentZombies = currentZombies.map((z) => {
                if (z.instanceId === targetZombie.instanceId) {
                  totalTurnDamage += 1800;
                  return { ...z, hp: z.hp - 1800 };
                }
                return z;
              });
              continue; // Squash is consumed
            }

            survivingPlants.push(plant);
            continue;
          }

          // SPIKEWEED: Ground thorns dealing 30 damage/turn; pops Zomboni tires!
          if (plant.plantId === 'spikeweed') {
            let spikeweedDestroyed = false;

            currentZombies = currentZombies.map((z) => {
              if (z.row === plant.row && z.col === plant.col && z.hp > 0) {
                // If Zomboni, tires pop and Zomboni is destroyed!
                if (z.zombieId === 'zomboni') {
                  sounds.playExplosion();
                  addFloatingText(z.row, z.col, 'ZAMBONI TIRES POPPED!', 'orange');
                  spikeweedDestroyed = true;
                  totalTurnDamage += z.hp;
                  return { ...z, hp: 0 };
                }

                totalTurnDamage += 30;
                addFloatingText(z.row, z.col, '-30 (SPIKES)', 'yellow');
                return { ...z, hp: z.hp - 30 };
              }
              return z;
            });

            if (!spikeweedDestroyed) {
              survivingPlants.push(plant);
            }
            continue;
          }

          // FUME-SHROOM: Shoots penetrating chemical spores up to 4 tiles that bypass shields
          if (plant.plantId === 'fumeshroom') {
            const maxRangeCol = Math.min(7, plant.col + 4);
            const inRangeZombies = currentZombies.filter(
              (z) => !z.isHypnotized && z.row === plant.row && z.col > plant.col && z.col <= maxRangeCol && z.hp > 0
            );

            if (inRangeZombies.length > 0) {
              sounds.playShoot();
              newProjectiles.push({
                id: 'proj_' + Math.random().toString(36).substring(2, 7),
                type: 'spore',
                row: plant.row,
                fromCol: plant.col,
                toCol: maxRangeCol,
                progress: 0.9,
                damage: 30,
              });

              totalTurnDamage += 30 * inRangeZombies.length;
              currentZombies = currentZombies.map((z) => {
                if (!z.isHypnotized && z.row === plant.row && z.col > plant.col && z.col <= maxRangeCol && z.hp > 0) {
                  addFloatingText(z.row, z.col, '-30 (SPORE)', 'purple');
                  return { ...z, hp: z.hp - 30 };
                }
                return z;
              });
            }

            survivingPlants.push(plant);
            continue;
          }

          // MELON-PULT: Heavy artillery lobbing watermelon for 80 damage + 26 3x3 splash
          if (plant.plantId === 'melonpult') {
            const laneZombies = currentZombies
              .filter((z) => !z.isHypnotized && z.row === plant.row && z.col >= plant.col && z.hp > 0)
              .sort((a, b) => a.col - b.col);

            const laneTombstones = currentHazards
              .filter((h) => h.row === plant.row && h.col >= plant.col && h.type === 'tombstone' && (h.hp ?? 0) > 0)
              .sort((a, b) => a.col - b.col);

            const firstZombie = laneZombies[0];
            const firstTomb = laneTombstones[0];

            const targetCol = firstZombie && firstTomb
              ? Math.min(firstZombie.col, firstTomb.col)
              : firstZombie
              ? firstZombie.col
              : firstTomb
              ? firstTomb.col
              : -1;

            if (targetCol >= 0) {
              sounds.playHit(false);
              newProjectiles.push({
                id: 'proj_' + Math.random().toString(36).substring(2, 7),
                type: 'melon',
                row: plant.row,
                fromCol: plant.col,
                toCol: targetCol,
                progress: 0.9,
                damage: 80,
              });

              // 80 Direct damage to target + 26 splash damage in 3x3 radius
              currentZombies = currentZombies.map((z) => {
                if (z.row === plant.row && z.col === targetCol && z.hp > 0) {
                  totalTurnDamage += 80;
                  addFloatingText(z.row, z.col, '-80 (MELON IMPACT)', 'green');
                  return { ...z, hp: z.hp - 80 };
                }
                if (Math.abs(z.row - plant.row) <= 1 && Math.abs(z.col - targetCol) <= 1 && z.hp > 0) {
                  totalTurnDamage += 26;
                  addFloatingText(z.row, z.col, '-26 (SPLASH)', 'green');
                  return { ...z, hp: z.hp - 26 };
                }
                return z;
              });

              if (firstTomb && firstTomb.col === targetCol) {
                currentHazards = currentHazards
                  .map((h) => {
                    if (h.id === firstTomb.id) {
                      return { ...h, hp: (h.hp ?? 100) - 80 };
                    }
                    return h;
                  })
                  .filter((h) => (h.hp ?? 1) > 0);
              }
            }

            survivingPlants.push(plant);
            continue;
          }

          // POTATO MINE: Takes 4 turns to arm underground!
          if (plant.plantId === 'potatomine') {
            let isNowArmed = plant.isArmed;
            let counter = plant.actionCounter + 1;
            if (!isNowArmed && counter >= 4) {
              isNowArmed = true;
              addFloatingText(plant.row, plant.col, 'ARMED!', 'orange');
            }

            const contactZombie = currentZombies.find(
              (z) => z.row === plant.row && z.col === plant.col && z.hp > 0
            );

            if (isNowArmed && contactZombie) {
              sounds.playExplosion();
              addFloatingText(plant.row, plant.col, 'BOOM! 900', 'red');
              currentZombies = currentZombies.map((z) => {
                if (z.instanceId === contactZombie.instanceId) {
                  totalTurnDamage += 900;
                  return { ...z, hp: z.hp - 900 };
                }
                return z;
              });
              continue;
            }

            survivingPlants.push({ ...plant, isArmed: isNowArmed, actionCounter: counter });
            continue;
          }

          // CHOMPER: Devours zombie, digests for 8 turns!
          if (plant.plantId === 'chomper') {
            let chewing = plant.chewingTurnsRemaining || 0;
            if (chewing > 0) {
              survivingPlants.push({ ...plant, chewingTurnsRemaining: chewing - 1 });
              continue;
            }

            const targetZombie = currentZombies.find(
              (z) => z.row === plant.row && (z.col === plant.col || z.col === plant.col + 1) && z.hp > 0
            );

            if (targetZombie && targetZombie.zombieId !== 'gargantuar') {
              sounds.playBite();
              addFloatingText(plant.row, plant.col, 'CHOMP!', 'orange');
              currentZombies = currentZombies.map((z) => {
                if (z.instanceId === targetZombie.instanceId) {
                  totalTurnDamage += z.hp;
                  return { ...z, hp: 0 };
                }
                return z;
              });
              survivingPlants.push({ ...plant, chewingTurnsRemaining: 8 });
              continue;
            }

            survivingPlants.push(plant);
            continue;
          }

          // PEASHOOTER / REPEATER / SNOW PEA (Passes through Torchwood for Fire Peas!)
          if (
            plant.plantId === 'peashooter' ||
            plant.plantId === 'repeater' ||
            plant.plantId === 'snowpea'
          ) {
            const laneZombies = currentZombies
              .filter((z) => z.row === plant.row && z.col >= plant.col && z.hp > 0)
              .sort((a, b) => a.col - b.col);

            const laneTombstones = currentHazards
              .filter((h) => h.row === plant.row && h.col >= plant.col && h.type === 'tombstone' && (h.hp ?? 0) > 0)
              .sort((a, b) => a.col - b.col);

            const firstZombieCol = laneZombies.length > 0 ? laneZombies[0].col : 999;
            const firstTombstoneCol = laneTombstones.length > 0 ? laneTombstones[0].col : 999;

            const isSnow = plant.plantId === 'snowpea';
            const isRepeater = plant.plantId === 'repeater';
            const peaCount = isRepeater ? 2 : 1;

            // Check if projectile passes through a Torchwood!
            const targetCol = Math.min(firstZombieCol, firstTombstoneCol);
            const rowTorchwoods = torchwoodColsByRow[plant.row] || [];
            const hasTorchwood = !isSnow && rowTorchwoods.some((twCol) => twCol > plant.col && twCol <= targetCol);

            const dmgPerPea = hasTorchwood ? 40 : 20;
            const projType: Projectile['type'] = isSnow ? 'frostpea' : hasTorchwood ? 'firepea' : 'pea';

            // Target is a tombstone if closer than zombie!
            if (firstTombstoneCol < firstZombieCol && laneTombstones.length > 0) {
              const targetTomb = laneTombstones[0];
              if (isSnow) sounds.playFrostShoot();
              else sounds.playShoot();

              for (let i = 0; i < peaCount; i++) {
                newProjectiles.push({
                  id: 'proj_' + Math.random().toString(36).substring(2, 7),
                  type: projType,
                  row: plant.row,
                  fromCol: plant.col,
                  toCol: targetTomb.col,
                  progress: 0.9,
                  damage: dmgPerPea,
                  slowEffect: false,
                });
              }

              const shotDmg = peaCount * dmgPerPea;
              sounds.playHit(true);
              addFloatingText(targetTomb.row, targetTomb.col, `-${shotDmg}`, 'orange');

              currentHazards = currentHazards
                .map((h) => {
                  if (h.id === targetTomb.id) {
                    const newHp = (h.hp ?? 100) - shotDmg;
                    if (newHp <= 0) {
                      addFloatingText(h.row, h.col, 'TOMBSTONE CRUMBLED', 'orange');
                    }
                    return { ...h, hp: newHp };
                  }
                  return h;
                })
                .filter((h) => (h.hp ?? 1) > 0);
            } else if (laneZombies.length > 0) {
              const target = laneZombies[0];
              if (isSnow) sounds.playFrostShoot();
              else sounds.playShoot();

              for (let i = 0; i < peaCount; i++) {
                newProjectiles.push({
                  id: 'proj_' + Math.random().toString(36).substring(2, 7),
                  type: projType,
                  row: plant.row,
                  fromCol: plant.col,
                  toCol: target.col,
                  progress: 0.9,
                  damage: dmgPerPea,
                  slowEffect: isSnow,
                });
              }

              const totalShotDmg = peaCount * dmgPerPea;
              totalTurnDamage += totalShotDmg;

              currentZombies = currentZombies.map((z) => {
                if (z.instanceId === target.instanceId) {
                  const newHp = z.hp - totalShotDmg;
                  sounds.playHit((z.zombieId === 'buckethead' || z.zombieId === 'screendoor') && newHp > 100);
                  addFloatingText(
                    z.row,
                    z.col,
                    isSnow
                      ? `-${totalShotDmg} (SLOW +1 TURN)`
                      : hasTorchwood
                      ? `-${totalShotDmg} (FIRE!)`
                      : `-${totalShotDmg}`,
                    isSnow ? 'cyan' : hasTorchwood ? 'orange' : 'yellow'
                  );
                  return {
                    ...z,
                    hp: newHp,
                    slowedTurns: isSnow ? Math.min(2, z.slowedTurns + 1) : z.slowedTurns,
                  };
                }
                return z;
              });
            }
          }

          survivingPlants.push(plant);
        }

        currentZombies.forEach((z) => {
          if (z.hp <= 0) killedThisTurn++;
        });

        const activeZombies = currentZombies.filter((z) => z.hp > 0);

        setProjectiles(newProjectiles);
        setTimeout(() => setProjectiles([]), isFastSpeed ? 120 : 250);

        setPlants(survivingPlants);
        setHazards(currentHazards);
        setZombies(activeZombies);
        setStats((prev) => ({
          ...prev,
          damageDealt: prev.damageDealt + totalTurnDamage,
          zombiesKilled: prev.zombiesKilled + killedThisTurn,
          score: prev.score + totalTurnDamage * 2 + killedThisTurn * 150,
        }));

        setTurnPhase('RESOLVING_ZOMBIES');
      }, phaseDelay);
      return () => clearTimeout(timer);
    }

    // STEP 3: RESOLVING ZOMBIES (Movement, Bites, Pole Vaults, Disco Summons, Zomboni, Hypno)
    if (turnPhase === 'RESOLVING_ZOMBIES') {
      const timer = setTimeout(() => {
        let updatedPlants = [...plants];
        let updatedHazards = [...hazards];
        const spawnedZombies: ZombieInstance[] = [];

        const movedZombies = zombies
          .map((zombie) => {
            // HYPNOTIZED ZOMBIE: Marches rightward toward col 7 and fights other zombies!
            if (zombie.isHypnotized) {
              const nextCol = zombie.col + 1;
              if (nextCol > 7) {
                addFloatingText(zombie.row, 7, 'RETIRED PEACEFULLY', 'purple');
                return null;
              }

              // Check if enemy zombie is in front
              const enemyZombie = zombies.find(
                (ez) => !ez.isHypnotized && ez.row === zombie.row && ez.col === nextCol && ez.hp > 0
              );

              if (enemyZombie) {
                sounds.playBite();
                enemyZombie.hp -= zombie.damagePerTurn;
                addFloatingText(enemyZombie.row, enemyZombie.col, `-${zombie.damagePerTurn} (HYPNO FIGHT)`, 'purple');
                return { ...zombie, isEating: true };
              }

              return { ...zombie, col: nextCol, isEating: false };
            }

            // JACK-IN-THE-BOX DETONATION COUNTDOWN
            if (zombie.zombieId === 'jackinbox') {
              const currentFuse = zombie.jackFuseRemaining ?? 3;
              if (currentFuse <= 1) {
                sounds.playExplosion();
                addFloatingText(zombie.row, zombie.col, 'JACK DETONATED! 800', 'red');

                updatedPlants = updatedPlants.map((p) => {
                  if (Math.abs(p.row - zombie.row) <= 1 && Math.abs(p.col - zombie.col) <= 1) {
                    return { ...p, hp: p.hp - 800 };
                  }
                  return p;
                });

                updatedHazards.push({
                  id: 'crater_' + Math.random().toString(36).substring(2, 7),
                  type: 'crater',
                  row: zombie.row,
                  col: zombie.col,
                  turnsRemaining: 4,
                });

                return null; // Jack explodes
              }
              zombie.jackFuseRemaining = currentFuse - 1;
            }

            // Check if there is a blocking plant in the exact same grid tile (spikeweed is not eaten!)
            const blockingPlant = updatedPlants.find(
              (p) => p.row === zombie.row && p.col === zombie.col && p.hp > 0 && p.plantId !== 'spikeweed'
            );

            if (blockingPlant) {
              // HYPNO-SHROOM: When bitten, hypnotizes the zombie!
              if (blockingPlant.plantId === 'hypnoshroom') {
                sounds.playBite();
                addFloatingText(zombie.row, zombie.col, 'HYPNOTIZED!', 'purple');
                updatedPlants = updatedPlants.map((p) =>
                  p.instanceId === blockingPlant.instanceId ? { ...p, hp: 0 } : p
                );
                return {
                  ...zombie,
                  isHypnotized: true,
                  isEating: false,
                };
              }

              // ZOMBONI: Crushes plant instantly and creates ice trail!
              if (zombie.zombieId === 'zomboni') {
                sounds.playHit(true);
                addFloatingText(blockingPlant.row, blockingPlant.col, 'CRUSHED!', 'red');
                updatedPlants = updatedPlants.map((p) =>
                  p.instanceId === blockingPlant.instanceId ? { ...p, hp: 0 } : p
                );
                updatedHazards.push({
                  id: 'ice_' + Math.random().toString(36).substring(2, 7),
                  type: 'ice_trail',
                  row: zombie.row,
                  col: zombie.col,
                  turnsRemaining: 8,
                });
                return {
                  ...zombie,
                  col: zombie.col - 1,
                  isEating: false,
                };
              }

              // TALL-NUT: Blocks Pole Vaulters and Pogo jumpers completely!
              if (blockingPlant.plantId === 'tallnut') {
                if (zombie.zombieId === 'polevaulter' && !zombie.hasVaulted) {
                  zombie.hasVaulted = true;
                  addFloatingText(zombie.row, zombie.col, 'VAULT BLOCKED BY TALL-NUT', 'orange');
                }
                if (zombie.zombieId === 'pogo') {
                  zombie.isPogoJumping = false;
                  addFloatingText(zombie.row, zombie.col, 'POGO SHATTERED BY TALL-NUT', 'orange');
                }
              }

              // Normal Pole Vault over regular plants
              if (zombie.zombieId === 'polevaulter' && !zombie.hasVaulted && blockingPlant.plantId !== 'tallnut') {
                sounds.playTurnCommit();
                addFloatingText(zombie.row, zombie.col - 1, 'POLE VAULT!', 'orange');
                return {
                  ...zombie,
                  col: zombie.col - 1,
                  hasVaulted: true,
                  isEating: false,
                };
              }

              // Normal Pogo Jump over regular plants
              if (zombie.zombieId === 'pogo' && zombie.isPogoJumping && blockingPlant.plantId !== 'tallnut') {
                sounds.playTurnCommit();
                addFloatingText(zombie.row, zombie.col - 1, 'POGO HOP!', 'orange');
                return {
                  ...zombie,
                  col: zombie.col - 1,
                  isEating: false,
                };
              }

              // Normal bite on plant
              sounds.playBite();
              const newPlantHp = blockingPlant.hp - zombie.damagePerTurn;
              addFloatingText(
                blockingPlant.row,
                blockingPlant.col,
                `-${zombie.damagePerTurn} HP`,
                'red'
              );

              updatedPlants = updatedPlants.map((p) => {
                if (p.instanceId === blockingPlant.instanceId) {
                  return { ...p, hp: newPlantHp };
                }
                return p;
              });

              return {
                ...zombie,
                isEating: true,
                eatingPlantId: blockingPlant.instanceId,
              };
            }

            // Disco Zombie: summons backup dancers on adjacent lanes!
            if (zombie.zombieId === 'disco' && !zombie.hasSummoned && zombie.col <= 6) {
              sounds.playVictory();
              addFloatingText(zombie.row, zombie.col, 'DISCO BACKUP SUMMON!', 'orange');
              const adjacentRows = [zombie.row - 1, zombie.row + 1].filter((r) => r >= 0 && r < 5);
              adjacentRows.forEach((r) => {
                spawnedZombies.push({
                  instanceId: 'dancer_' + Math.random().toString(36).substring(2, 9),
                  zombieId: 'basic',
                  row: r,
                  col: zombie.col,
                  hp: 100,
                  maxHp: 100,
                  damagePerTurn: 20,
                  stepInterval: 1,
                  stepCooldown: 1,
                  slowedTurns: 0,
                  isEating: false,
                  hasSpecialArmor: false,
                });
              });
              zombie.hasSummoned = true;
            }

            // Slow effect: simply makes zombies take an extra turn!
            if (zombie.slowedTurns > 0) {
              addFloatingText(zombie.row, zombie.col, 'SLOW DELAY', 'cyan');
              return {
                ...zombie,
                isEating: false,
                slowedTurns: zombie.slowedTurns - 1,
                hasSpecialArmor:
                  zombie.zombieId === 'newspaper' ? zombie.hp > 90 : zombie.hasSpecialArmor,
              };
            }

            // Regular zombies move a tile EVERY turn! (Gargantuars every 2 turns)
            const isTitan = zombie.zombieId === 'gargantuar';
            if (isTitan && zombie.stepCooldown > 1) {
              return {
                ...zombie,
                isEating: false,
                stepCooldown: zombie.stepCooldown - 1,
              };
            }

            const nextCol = zombie.col - 1;
            const resetCooldown = isTitan ? 2 : 1;

            return {
              ...zombie,
              col: nextCol,
              isEating: false,
              stepCooldown: resetCooldown,
              hasSpecialArmor:
                zombie.zombieId === 'newspaper' ? zombie.hp > 90 : zombie.hasSpecialArmor,
            };
          })
          .filter((z): z is ZombieInstance => z !== null);

        const remainingPlants = updatedPlants.filter((p) => p.hp > 0);

        setPlants(remainingPlants);
        setHazards(updatedHazards);
        setZombies([...movedZombies, ...spawnedZombies]);
        setTurnPhase('RESOLVING_MOWERS');
      }, phaseDelay);
      return () => clearTimeout(timer);
    }

    // STEP 4: RESOLVING LAWN MOWERS & BREACH CHECK
    if (turnPhase === 'RESOLVING_MOWERS') {
      const timer = setTimeout(() => {
        const nextMowers = [...lawnMowers];
        let breachedLawn = false;
        let survivingZombies = [...zombies];

        for (let row = 0; row < 5; row++) {
          const zombiesAtPorch = survivingZombies.filter(
            (z) => !z.isHypnotized && z.row === row && z.col < 0
          );

          if (zombiesAtPorch.length > 0) {
            if (nextMowers[row]) {
              sounds.playMower();
              nextMowers[row] = false;
              addFloatingText(row, 2, 'LAWN MOWER PURGE!', 'orange');

              survivingZombies = survivingZombies.filter((z) => !(z.row === row && z.col < 0));
              setStats((prev) => ({
                ...prev,
                zombiesKilled: prev.zombiesKilled + zombiesAtPorch.length,
                score: prev.score + zombiesAtPorch.length * 200,
              }));
            } else {
              breachedLawn = true;
            }
          }
        }

        setLawnMowers(nextMowers);
        setZombies(survivingZombies);

        if (breachedLawn) {
          sounds.playDefeat();
          setGameStatus('DEFEAT');
          setTurnPhase('PLAYER_INPUT');
          return;
        }

        setTurnPhase('CHECK_WAVE');
      }, phaseDelay);
      return () => clearTimeout(timer);
    }

    // STEP 5: CHECK WAVE PROGRESS & SPAWN INCOMING HORDE
    if (turnPhase === 'CHECK_WAVE') {
      const timer = setTimeout(() => {
        const nextTurn = currentTurn + 1;
        setCurrentTurn(nextTurn);
        setStats((prev) => ({ ...prev, turnsSurvived: nextTurn }));

        // Tick down temporary hazards
        setHazards((prev) =>
          prev
            .map((h) => ({
              ...h,
              turnsRemaining: h.turnsRemaining !== undefined ? h.turnsRemaining - 1 : undefined,
            }))
            .filter((h) => h.turnsRemaining === undefined || h.turnsRemaining > 0)
        );

        // Dynamic hazard spawning on milestone wave turns (Columns 4 to 6)
        if (nextTurn === 6 || nextTurn === 12 || nextTurn === 18) {
          const randRow = Math.floor(Math.random() * 5);
          const randCol = 4 + Math.floor(Math.random() * 3);
          const hazardTypes: LawnHazard['type'][] = ['tombstone', 'crater', 'toxic_puddle', 'ice_trail'];
          const chosenType = hazardTypes[Math.floor(Math.random() * hazardTypes.length)];

          setHazards((prev) => [
            ...prev,
            {
              id: 'dyn_h_' + Math.random().toString(36).substring(2, 7),
              type: chosenType,
              row: randRow,
              col: randCol,
              hp: chosenType === 'tombstone' ? 150 : undefined,
              maxHp: chosenType === 'tombstone' ? 150 : undefined,
              turnsRemaining: chosenType !== 'tombstone' ? 6 : undefined,
            },
          ]);
          addFloatingText(randRow, randCol, `DYNAMIC HAZARD: ${chosenType.toUpperCase()}`, 'orange');
        }

        // Spawn incoming zombies on tile 7 (8 discrete tiles 0-7)
        const spawnsToTrigger = activeLevel.spawns.filter((s) => s.turn === nextTurn);
        const newZombies: ZombieInstance[] = spawnsToTrigger.map((spawn) => {
          const def = ZOMBIE_DEFINITIONS[spawn.zombieId];
          const stepInterval = spawn.zombieId === 'gargantuar' ? 2 : 1;

          return {
            instanceId: 'z_' + Math.random().toString(36).substring(2, 9),
            zombieId: spawn.zombieId,
            row: spawn.row,
            col: 7,
            hp: def.maxHp,
            maxHp: def.maxHp,
            damagePerTurn: def.damagePerTurn,
            stepInterval,
            stepCooldown: stepInterval,
            slowedTurns: 0,
            isEating: false,
            hasSpecialArmor: true,
            hasVaulted: false,
            hasSummoned: false,
            jackFuseRemaining: spawn.zombieId === 'jackinbox' ? 3 : undefined,
            isPogoJumping: spawn.zombieId === 'pogo',
          };
        });

        const allZombies = [...zombies, ...newZombies];
        setZombies(allZombies);

        // Update wave indicator
        const totalSpawnsPassed = activeLevel.spawns.filter((s) => s.turn <= nextTurn).length;
        const computedWave = Math.min(
          activeLevel.totalWaves,
          Math.max(1, Math.ceil((totalSpawnsPassed / Math.max(1, activeLevel.spawns.length)) * activeLevel.totalWaves))
        );
        setCurrentWave(computedWave);

        // Check Victory Condition
        const allSpawnsSpawned = activeLevel.spawns.every((s) => s.turn <= nextTurn);
        if (allSpawnsSpawned && allZombies.length === 0) {
          sounds.playVictory();
          setGameStatus('VICTORY');

          const trophiesWon = activeLevel.rewardTrophies;
          StorageService.addTrophies(trophiesWon, 25);
          if (gameMode === 'CAMPAIGN') {
            const nextUnlocked = Math.min(CAMPAIGN_LEVELS.length - 1, currentLevelIndex + 1);
            StorageService.updateCampaignProgress(nextUnlocked);
          }
          const updatedProfile = StorageService.getProfile();
          setProfile(updatedProfile);

          if (gameMode === 'WORLD_RAID') {
            const raidDmg = stats.damageDealt + 2500;
            const updatedBoss = MMOService.recordBossAttack(profile.name, raidDmg);
            setWorldBossState(updatedBoss);
          }

          if (gameMode === 'DAILY') {
            const updatedDaily = StorageService.recordDailyCompletion(dailyConfig.date);
            setProfile(updatedDaily);
          }

          MMOService.submitScore({
            playerName: profile.name,
            score: stats.score + trophiesWon * 10,
            turnsSurvived: nextTurn,
            mode: gameMode,
          });

          setStats((prev) => ({ ...prev, trophiesEarned: trophiesWon }));
          setTurnPhase('PLAYER_INPUT');
          return;
        }

        // Decrement plant seed packet cooldowns
        setPlantCooldowns((prev) => {
          const updated: Record<PlantId, number> = { ...prev };
          (Object.keys(updated) as PlantId[]).forEach((key) => {
            updated[key] = Math.max(0, updated[key] - 1);
          });
          return updated;
        });

        setAutoCountdown(5);
        setTurnPhase('PLAYER_INPUT');
      }, phaseDelay);
      return () => clearTimeout(timer);
    }
  }, [turnPhase, isFastSpeed, currentTurn, plants, zombies, hazards, lawnMowers, activeLevel, gameMode, dailyConfig, gameStatus, stats, profile.name, addFloatingText]);

  // Keyboard Shortcuts (1-9 for seeds, Space for End Turn, S for Shovel, Esc to cancel)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeTab !== 'GAME' || turnPhase !== 'PLAYER_INPUT' || gameStatus !== 'PLAYING') return;

      const num = parseInt(e.key, 10);
      if (!isNaN(num) && num >= 1 && num <= availablePlantIds.length) {
        const plantId = availablePlantIds[num - 1];
        setSelectedPlantId(plantId);
        setIsShovelActive(false);
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleEndTurn();
      } else if (e.key.toLowerCase() === 's') {
        setIsShovelActive((prev) => !prev);
      } else if (e.key === 'Escape') {
        setSelectedPlantId(null);
        setIsShovelActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, turnPhase, gameStatus, availablePlantIds, handleEndTurn]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">
      {/* Universal 3-Zone Top Bar */}
      <TopNav
        currentTab={activeTab}
        gameMode={gameMode}
        profile={profile}
        onSelectTab={setActiveTab}
        onOpenCloudSync={() => setIsCloudModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {activeTab === 'GAME' && (
          <div className="flex-1 flex flex-col">
            {/* Top Tactical Status Bar */}
            <HUD
              levelName={activeLevel.name}
              sectorName={activeLevel.sectorName}
              currentLevelIndex={currentLevelIndex}
              totalLevels={CAMPAIGN_LEVELS.length}
              onSelectLevel={handleSelectLevel}
              currentWave={currentWave}
              totalWaves={gameMode === 'DAILY' ? dailyConfig.totalWaves : activeLevel.totalWaves}
              turnPhase={turnPhase}
              isFastSpeed={isFastSpeed}
              soundEnabled={soundEnabled}
              isAutoMode={isAutoMode}
              autoCountdown={autoCountdown}
              canSkipEmptyTurns={canSkipEmptyTurns}
              skipTurnsCount={skipTurnsCount}
              onToggleSpeed={() => setIsFastSpeed((prev) => !prev)}
              onToggleSound={toggleSound}
              onToggleAutoMode={() => setIsAutoMode((prev) => !prev)}
              onSkipEmptyTurns={handleSkipEmptyTurns}
              onOpenChooseSeeds={() => setIsChoosingSeeds(true)}
              onRestart={restartCurrentBattle}
            />

            {/* Tactical Battle Arena */}
            <div className="flex-1 p-2 sm:p-4 flex flex-col items-center justify-center gap-3 max-w-6xl mx-auto w-full">
              {/* Authentic Wooden PvZ Seed Bank Frame */}
              <div className="w-full bg-stone-900 border-2 border-amber-900/80 rounded-2xl p-2 sm:p-2.5 shadow-2xl flex flex-wrap items-center justify-between gap-3 select-none">
                {/* Left: Classic PvZ Sun Counter */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 bg-stone-950/90 border-2 border-amber-500/50 rounded-xl shadow-inner shrink-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-md shrink-0">
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-950 fill-amber-950 animate-sun-spin" />
                  </div>
                  <div className="leading-none">
                    <div className="text-[9px] uppercase font-black tracking-wider text-amber-400">
                      SUN
                    </div>
                    <div className="text-lg sm:text-xl font-mono font-black text-amber-300 leading-tight">
                      {sun}
                    </div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-amber-400/80">
                      +{gameMode === 'DAILY' ? dailyConfig.sunPulseAmount : activeLevel.sunPulseAmount} in {activeLevel.sunPulseInterval - ((currentTurn - 1) % activeLevel.sunPulseInterval)}T
                    </div>
                  </div>
                </div>

                {/* Center: Slotted Seed Packets Tray */}
                <div className="flex-1 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
                  {availablePlantIds.map((pId, idx) => {
                    const plantDef = PLANT_DEFINITIONS[pId];
                    return (
                      <SeedPacket
                        key={pId}
                        plant={plantDef}
                        currentSun={sun}
                        cooldownTurnsRemaining={plantCooldowns[pId] ?? 0}
                        isSelected={selectedPlantId === pId && !isShovelActive}
                        shortcutIndex={idx + 1}
                        onSelect={() => {
                          setSelectedPlantId(pId);
                          setIsShovelActive(false);
                        }}
                        disabled={turnPhase !== 'PLAYER_INPUT'}
                      />
                    );
                  })}
                </div>

                {/* Right: Shovel Slot & Primary End Turn Action */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Shovel Slot */}
                  <button
                    type="button"
                    onClick={() => {
                      setIsShovelActive((prev) => !prev);
                      setSelectedPlantId(null);
                    }}
                    disabled={turnPhase !== 'PLAYER_INPUT'}
                    title="Shovel Tool [S]: Dig up a plant or clear a tombstone"
                    className={`p-2 sm:p-2.5 rounded-xl border-2 transition-all flex flex-col items-center justify-center shadow-md cursor-pointer ${
                      isShovelActive
                        ? 'bg-amber-600 border-amber-300 text-white shadow-amber-900/50 scale-105 ring-2 ring-amber-400'
                        : 'bg-stone-950/80 border-stone-800 text-stone-300 hover:text-white hover:border-stone-600'
                    }`}
                  >
                    <Shovel className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[9px] font-mono font-bold mt-0.5">[S]</span>
                  </button>

                  {/* Big Arcade/Game Styled End Turn Button */}
                  <button
                    type="button"
                    onClick={handleEndTurn}
                    disabled={turnPhase !== 'PLAYER_INPUT'}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-black text-xs sm:text-sm tracking-wide uppercase transition-all shadow-xl flex items-center gap-2 select-none border-2 cursor-pointer ${
                      turnPhase !== 'PLAYER_INPUT'
                        ? 'bg-stone-800 border-stone-700 text-stone-500 cursor-wait'
                        : !canAffordAnyPlant
                        ? 'bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 border-amber-300 text-stone-950 animate-pulse shadow-amber-950/50 active:scale-95'
                        : 'bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 border-emerald-300 text-white shadow-emerald-950/50 active:scale-95'
                    }`}
                  >
                    {turnPhase !== 'PLAYER_INPUT' ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-stone-400 border-t-transparent rounded-full animate-spin" />
                        <span>Resolving</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>End Turn</span>
                        <span className="hidden sm:inline text-[10px] font-mono opacity-80">[Space]</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* 5x8 Fast Tactical Lawn with Dynamic Hazards & Discrete Movement */}
              <GameBoard
                plants={plants}
                zombies={zombies}
                hazards={hazards}
                projectiles={projectiles}
                floatingTexts={floatingTexts}
                lawnMowers={lawnMowers}
                selectedPlantDef={
                  selectedPlantId && !isShovelActive
                    ? PLANT_DEFINITIONS[selectedPlantId]
                    : null
                }
                isShovelActive={isShovelActive}
                turnPhase={turnPhase}
                lawnTheme={activeLevel.lawnTheme || 'day'}
                onTileClick={handleTileClick}
              />
            </div>
          </div>
        )}

        {/* World Boss MMO Raid View */}
        {activeTab === 'WORLD_RAID' && (
          <WorldRaidView
            bossState={worldBossState}
            profile={profile}
            onStartRaidBattle={handleStartWorldRaid}
          />
        )}

        {/* Daily Seed Challenge View */}
        {activeTab === 'DAILY' && (
          <DailyChallengeView
            dailyConfig={dailyConfig}
            profile={profile}
            onStartDailyRun={handleStartDaily}
          />
        )}

        {/* Global Leaderboards Standings View */}
        {activeTab === 'LEADERBOARD' && <LeaderboardView profile={profile} />}

        {/* Suburban Tactical Almanac Codex */}
        {activeTab === 'ALMANAC' && <AlmanacView />}
      </main>

      {/* Choose Your Seeds Pre-Combat Modal */}
      <ChooseSeedsModal
        isOpen={isChoosingSeeds}
        level={activeLevel}
        allAvailablePlantIds={allAvailablePlantIds}
        selectedSeedIds={selectedDeck}
        maxSeeds={8}
        onToggleSeed={handleToggleSeed}
        onAutoFill={handleAutoFillSeeds}
        onClearSeeds={handleClearSeeds}
        onStartBattle={() => {
          setIsChoosingSeeds(false);
          restartCurrentBattle();
        }}
      />

      {/* Cloud Save & Profile Modal */}
      <CloudSaveModal
        profile={profile}
        isOpen={isCloudModalOpen}
        onClose={() => setIsCloudModalOpen(false)}
        onProfileUpdated={(updated) => {
          setProfile(updated);
          if (updated.campaignLevelIndex !== undefined && updated.campaignLevelIndex !== currentLevelIndex) {
            const nextLvl = Math.min(CAMPAIGN_LEVELS.length - 1, Math.max(0, updated.campaignLevelIndex));
            setCurrentLevelIndex(nextLvl);
            initBattle(CAMPAIGN_LEVELS[nextLvl], 'CAMPAIGN');
          }
          if (updated.selectedDeck && updated.selectedDeck.length > 0) {
            setSelectedDeck(updated.selectedDeck);
          }
        }}
      />

      {/* Game Over Victory / Defeat Modal */}
      <GameOverModal
        status={gameStatus}
        mode={gameMode}
        turnsSurvived={stats.turnsSurvived}
        zombiesKilled={stats.zombiesKilled}
        damageDealt={stats.damageDealt}
        score={stats.score}
        trophiesEarned={stats.trophiesEarned}
        hasNextSector={currentLevelIndex < CAMPAIGN_LEVELS.length - 1}
        onNextSector={handleNextSector}
        onRestart={restartCurrentBattle}
        onViewLeaderboard={() => {
          setGameStatus('PLAYING');
          setActiveTab('LEADERBOARD');
        }}
      />
    </div>
  );
}
