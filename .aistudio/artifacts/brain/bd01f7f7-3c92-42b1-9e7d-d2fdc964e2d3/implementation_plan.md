# Turn-Based Lawn Warfare: PvZ Online

A semi-turnbased tactical lawn defense web game combining classic Plants vs. Zombies defense mechanics with MMO-inspired features, including synchronized turn phases, global community horde raids, daily challenge seeds, global leaderboards, and persistent cloud save slots.

## User Review & Critical Decisions

> [!IMPORTANT]
> The core mechanics and visual presentation have been aligned based on your preferences:
> - **Game Format**: Semi-turnbased tactical tower defense where the player plans moves (planting, digging, upgrading, activating abilities), then commits the turn. Plant actions (shooting, sun generation, defensive barriers) and zombie actions (marching, eating, special skills) resolve in deterministic, animated sequence phases.
> - **Sun Generation**: Passive sun generation pulses every set number of turns (with Sunflowers producing extra burst sun on their action turns).
> - **MMO Elements**: Global cooperative World Boss Raid (shared community damage bar against giant Zomboss forces), daily challenge seed with fixed deck conditions, global high-score leaderboards across multiple modes, and simulated live online activity feed with player badges.
> - **Online & Cloud Save**: Full multi-slot cloud profile storage with seamless sync to local storage fallback, ensuring zero progress loss.
> - **Visual Style**: Vibrant, polished classic cartoon style inspired by original PvZ, rendered with SVG/CSS animations and clean high-contrast lawn aesthetics without emojis.

---

## 1. Overview & Core Concept

- **What It Does**: Players defend a 5x9 suburban lawn grid against relentless waves of zombies in a strategic turn-based format. During the "Player Phase", the player collects sun, places plants, prepares power-ups, or adjusts formation. Pressing "End Turn" (or auto-timer in Blitz mode) executes the "Resolution Phase", where plants shoot projectiles, activate defensive shields, and zombies advance grid cells and attack blockers.
- **Target Audience / Persona**: Fans of strategic tower defense, tactical turn-based grid games, and asynchronous casual MMOs who love classic PvZ gameplay with deeper tactical deliberation.
- **Key Value**: Delivers the tactile charm of PvZ without requiring frantic APM clicking, while introducing shared MMO community events, daily tactical puzzle modifiers, and global competition.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Title & Operations Hub**:
   - Player profile header displaying Player Rank, Total Trophies, Sun Crests, and Cloud Sync status.
   - Mode selector tabs: Campaign Sectors (suburban backyard, pool lane, roof pitch), Daily Seeded Challenge, and Community World Boss Raid.
   - Global Leaderboard drawer and Almanac (plant and zombie tactical codex).
2. **Tactical Lawn Battle View**:
   - **Top HUD**: Sun counter, Turn counter (with countdown indicator to next Sun Pulse), Lawn mower safety indicators, Wave threat gauge, and "End Turn / Execute" button.
   - **Seed Packet Conveyor**: Clean, selectable plant cards showing sun cost, recharge turn cooldowns, and tactical type (Economy, Direct Attack, Crowd Control, Barrier, Explosive).
   - **Lawn Grid (5 Lanes x 9 Columns)**: Vibrant alternating green lawn tiles with coordinate hover targeting, range previews, and health indicators.
   - **Turn Resolution**: Visual projectile paths (Peas, Ice Peas, Melons), chomper bites, wall-nut armor deterioration stages, zombie stagger, and lawn mower emergency activations.
3. **MMO Community Raid & World Events**:
   - Live World Boss meter: "Dr. Zomboss Mega-Gargantuar" with a shared HP pool damaged by all players' successful raid runs.
   - Daily Challenge seed of the day with distinct rule modifiers (e.g., "Solar Eclipse: Sun costs doubled, fast plant cooldowns").
4. **Victory / Defeat & Progression**:
   - Turn-by-turn performance stats (Damage dealt, Sun efficiency, Turns survived).
   - Trophy gains, rank progression, new plant unlocks, and automatic leaderboard score submission.

### Visual Identity & Theme

- **Aesthetic Direction**: Vibrant, hand-crafted cartoon defense with clean vector outlines and suburban palette. No emojis, no generic purple gradients, no pill badges.
- **Color Palette**:
  - Dominant Lawn Canvas: Fresh lawn greens (`#2d7a2d` and `#389e38` checkered tiles, deep soil border `#3d2314`).
  - Structural UI: Polished woodgrain fence headers (`#5c3d2e`, `#7a523a`), garden stone dialogs (`#334155`), clean slate card docks (`#1e293b`).
  - Accent Budget: Golden radiant sun yellow (`#eab308`), icy pea cyan (`#06b6d4`), cherry bomb crimson (`#dc2626`).
- **Typography**:
  - Display & Headings: `Plus Jakarta Sans` with bold weights and tight tracking for punchy, comic-book clarity.
  - Body & Stats: `Outfit` and `DM Sans` with clean tabular numerals (`font-mono tabular-nums`) for health points, turn counts, and damage numbers.
- **Audio Feedback**: Web Audio API procedural synthesizers generating pleasant plant pop sounds, metallic bucket thuds, sun chimes, and victory fanfares.

---

## 3. Key Product Decisions & Trade-Offs

- **Semi-Turnbased System vs Real-time**:
  - *Chosen Approach*: Distinct Turn Cycles consisting of "Player Action Phase" followed by a deterministic "Turn Resolution Phase" (Plants attack -> Zombies advance/bite -> Sun pulse check -> Wave spawn check).
  - *Why*: Allows true tactical depth, careful plant positioning, deliberate synergy planning, and smooth play on both mobile touch and desktop mice.
- **MMO Features via Server Proxy + Cloud Persistence**:
  - *Chosen Approach*: Integrated backend server endpoints for global leaderboards, daily challenge seeding, community raid boss health sync, and cloud profile slots, paired with instant client-side offline fallback in localStorage.
  - *Why*: Ensures the game is instantly playable anywhere with zero friction, while delivering authentic online competition, shared community milestones, and reliable cross-session progress.
- **Procedural SVG / Canvas Visual Assets**:
  - *Chosen Approach*: Detailed SVG vector representations for plants (Peashooter, Sunflower, Wall-nut, Repeater, Snow Pea, Cherry Bomb, Potato Mine, Chomper) and zombies (Regular Zombie, Conehead, Buckethead, Football Zombie, Newspaper Zombie, Dancing Zombie, Gargantuar), augmented with custom motion transitions.
  - *Why*: Guarantees crisp resolution at any display scale, zero network asset loading failures, and immediate rendering responsiveness.

---

## 4. Technical Architecture & Data Strategy

### System Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                        User Interface & Views                          │
│   ┌────────────────────┬─────────────────────┬─────────────────────┐   │
│   │   Title & Modes    │  5x9 Tactical Lawn  │ MMO Raid & Leaderbd │   │
│   │   - Campaign Map   │  - Seed Conveyor    │ - World Boss Bar    │   │
│   │   - Daily Challenge│  - Grid Tile Engine │ - Global Standings  │   │
│   │   - Cloud Profile  │  - Action Inspector │ - Live Activity Log │   │
│   └─────────▲──────────┴──────────▲──────────┴──────────▲──────────┘   │
└─────────────┼─────────────────────┼─────────────────────┼──────────────┘
              │                     │                     │
┌─────────────▼─────────────────────▼─────────────────────▼──────────────┐
│                    Turn-Based Combat Game Loop Engine                  │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │ 1. Player Turn: Deploy / Dig / Inspect (Consumes Turn / Sun)   │   │
│   │ 2. Plant Phase: Sunflowers generate sun, Peashooters fire      │   │
│   │ 3. Zombie Phase: Check lane blocks, zombies bite / march       │   │
│   │ 4. Environment: Check Sun pulse timer, trigger lawn mowers     │   │
│   │ 5. Wave Director: Evaluate wave progress, spawn incoming horde │   │
│   └────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────▲──────────────────────────────────────┘
                                  │
┌─────────────────────────────────▼──────────────────────────────────────┐
│                     Online Persistence & Services                      │
│   ┌───────────────────────────┬────────────────────────────────────┐   │
│   │ Express Server Endpoints  │ Web Audio Sound Synthesizer        │   │
│   │ - /api/leaderboard (Scores│ - Peashooter pop, Sun chime        │   │
│   │ - /api/raid (World Boss)  │ - Zombie bite, Mower motor         │   │
│   │ - /api/daily (Daily Seed) │ - Victory fanfare                  │   │
│   │ - /api/cloud-save (Sync)  │                                    │   │
│   └───────────────────────────┴────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

### Plant Roster & Tactical Roles

| Plant | Sun Cost | Cooldown | Role & Behavior |
| :--- | :--- | :--- | :--- |
| **Sunflower** | 50 Sun | 2 Turns | Generates 25 Sun every 2nd turn cycle |
| **Peashooter** | 100 Sun | 1 Turn | Deals 20 damage per turn to first zombie in lane |
| **Wall-nut** | 50 Sun | 4 Turns | High HP blocker (400 HP) absorbing zombie bites |
| **Snow Pea** | 175 Sun | 2 Turns | Deals 20 damage and slows zombie movement by 50% |
| **Repeater** | 200 Sun | 2 Turns | Fires 2 peas per turn (40 damage total) |
| **Cherry Bomb**| 150 Sun | 5 Turns | Detonates on resolution turn in a 3x3 blast (900 dmg) |
| **Potato Mine**| 25 Sun | 4 Turns | Arms after 2 turns; explodes on contact (900 dmg) |
| **Chomper** | 150 Sun | 3 Turns | Instantly swallows regular/cone zombie; chews 3 turns |

### Zombie Wave Hierarchy

| Zombie Type | Health | Speed | Special Characteristic |
| :--- | :--- | :--- | :--- |
| **Basic Zombie** | 100 HP | 1 tile / 2 turns | Standard shambler |
| **Conehead** | 280 HP | 1 tile / 2 turns | Armored defense with road cone |
| **Buckethead** | 650 HP | 1 tile / 2 turns | Heavy armor requiring sustained firepower |
| **Footballer** | 800 HP | 1 tile / 1 turn | High speed sprinter with durable helmet |
| **Newspaper** | 150 HP | 1 tile / 2 turns | Enrages and sprints (1 tile/turn) when paper is lost |
| **Gargantuar** | 1500 HP | 1 tile / 3 turns | World boss minion; smashes plants instantly |

---

## 5. Verification Plan

1. **Compilation Check**: Run `compile_applet` to verify TypeScript typing and bundle build.
2. **Game Engine Verification**:
   - Test placing Sunflower, Peashooter, Wall-nut, and Potato Mine on lawn tiles.
   - Verify sun deduction and turn-based cooldowns on seed packets.
   - Verify turn execution: projectiles traveling across lanes, damaging zombies, zombie HP depletion, and zombie removal.
   - Verify zombie step logic, biting plants, and lawn mower emergency lane clearing.
   - Verify win condition when all waves are defeated, and defeat condition when a zombie reaches the house porch without a lawn mower.
3. **MMO & Online Feature Testing**:
   - Test submitting high scores to the global leaderboard and toggling filters.
   - Test World Boss collective raid damage tracking.
   - Test Daily Challenge fixed seed modifiers.
   - Test cloud save export/import and browser persistence.
