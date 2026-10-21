import { Graphics } from 'pixi.js';
import { PlantInstance, ZombieInstance, LawnHazard, Projectile } from '../types/game';

/**
 * Procedural vector graphics for Plants in Pixi.js
 */
export function drawPlant(g: Graphics, plant: PlantInstance, time: number) {
  const bob = Math.sin(time * 3 + plant.col * 0.7) * 2;
  const cx = 0;
  const cy = bob;

  switch (plant.plantId) {
    case 'sunflower': {
      // Stem
      g.roundRect(cx - 3, cy + 10, 6, 25, 2).fill(0x16a34a);
      // Leaves
      g.ellipse(cx - 15, cy + 22, 12, 6).fill(0x22c55e);
      g.ellipse(cx + 15, cy + 22, 12, 6).fill(0x22c55e);
      // Petals (spinning)
      const petalCount = 8;
      const angleOffset = time * 0.8;
      for (let i = 0; i < petalCount; i++) {
        const angle = angleOffset + (i * Math.PI * 2) / petalCount;
        const px = cx + Math.cos(angle) * 16;
        const py = cy + Math.sin(angle) * 16;
        g.circle(px, py, 7).fill(0xfacc15);
      }
      // Face disk
      g.circle(cx, cy, 14).fill(0x854d0e);
      // Eyes
      g.circle(cx - 4, cy - 2, 2.5).fill(0x0f172a);
      g.circle(cx + 4, cy - 2, 2.5).fill(0x0f172a);
      g.circle(cx - 3, cy - 3, 0.8).fill(0xffffff);
      g.circle(cx + 5, cy - 3, 0.8).fill(0xffffff);
      // Smile
      g.roundRect(cx - 4, cy + 3, 8, 3, 1).fill(0xfef08a);
      break;
    }

    case 'peashooter':
    case 'repeater':
    case 'snowpea': {
      const isSnow = plant.plantId === 'snowpea';
      const isRepeater = plant.plantId === 'repeater';
      const bodyColor = isSnow ? 0x38bdf8 : isRepeater ? 0x15803d : 0x22c55e;
      const snoutColor = isSnow ? 0x0284c7 : isRepeater ? 0x166534 : 0x16a34a;

      // Stem
      g.roundRect(cx - 4, cy + 10, 8, 24, 3).fill(0x16a34a);
      // Leaves base
      g.ellipse(cx - 14, cy + 24, 12, 6).fill(0x15803d);
      g.ellipse(cx + 12, cy + 26, 10, 5).fill(0x15803d);
      // Back leaf / ponytail
      if (isRepeater) {
        g.ellipse(cx - 16, cy - 8, 8, 4).fill(0x15803d);
        g.ellipse(cx - 14, cy - 14, 8, 4).fill(0x166534);
      } else if (isSnow) {
        // Ice crystals behind head
        g.poly([cx - 12, cy - 4, cx - 22, cy - 8, cx - 14, cy - 14]).fill(0xa5f3fc);
        g.poly([cx - 8, cy - 12, cx - 14, cy - 22, cx - 4, cy - 16]).fill(0x7dd3fc);
      } else {
        g.ellipse(cx - 14, cy - 4, 7, 4).fill(0x15803d);
      }
      // Head
      g.circle(cx, cy, 16).fill(bodyColor);
      if (isSnow) {
        g.circle(cx - 4, cy - 4, 4).fill(0xe0f2fe);
      }
      // Snout
      g.roundRect(cx + 6, cy - 7, isRepeater ? 18 : 14, 14, 4).fill(snoutColor);
      g.ellipse(cx + (isRepeater ? 24 : 20), cy, 3, 7).fill(0x0f172a);
      // Eyes
      g.circle(cx + 3, cy - 5, 3.5).fill(0xffffff);
      g.circle(cx + 4, cy - 5, 2).fill(0x0f172a);
      break;
    }

    case 'wallnut':
    case 'tallnut': {
      const isTall = plant.plantId === 'tallnut';
      const w = 34;
      const h = isTall ? 58 : 42;
      const yOffset = isTall ? cy - 10 : cy;
      const hpPercent = plant.hp / plant.maxHp;

      // Body
      g.roundRect(cx - w / 2, yOffset - h / 2, w, h, 14).fill(0x78350f);
      g.roundRect(cx - w / 2 + 3, yOffset - h / 2 + 3, w - 6, h - 6, 12).fill(0x92400e);

      // Eyes
      g.circle(cx - 6, yOffset - 4, 4).fill(0xfef3c7);
      g.circle(cx + 6, yOffset - 4, 4).fill(0xfef3c7);
      g.circle(cx - 5, yOffset - 4, 2.5).fill(0x1c1917);
      g.circle(cx + 7, yOffset - 4, 2.5).fill(0x1c1917);

      // Cracks if damaged
      if (hpPercent < 0.6) {
        g.roundRect(cx - 10, yOffset + 6, 8, 2, 1).fill(0x451a03);
        g.roundRect(cx + 2, yOffset + 12, 10, 2, 1).fill(0x451a03);
      }
      if (hpPercent < 0.3) {
        g.roundRect(cx - 12, yOffset - 12, 12, 3, 1).fill(0x451a03);
        // Tear drop
        g.circle(cx - 8, yOffset + 4, 2).fill(0x38bdf8);
      }
      break;
    }

    case 'chomper': {
      const isChewing = (plant.chewingTurnsRemaining || 0) > 0;
      // Stem
      g.roundRect(cx - 4, cy + 8, 8, 24, 2).fill(0x15803d);
      g.ellipse(cx - 14, cy + 24, 12, 6).fill(0x166534);
      g.ellipse(cx + 14, cy + 24, 12, 6).fill(0x166534);

      if (isChewing) {
        // Mouth closed, chewing bulge
        g.circle(cx + 4, cy, 18).fill(0x7e22ce);
        g.circle(cx + 4, cy, 14).fill(0x9333ea);
        // Chewing motion
        const chewWobble = Math.sin(time * 12) * 3;
        g.roundRect(cx - 4, cy + 4 + chewWobble, 18, 4, 2).fill(0x581c87);
        // Closed eye / content
        g.roundRect(cx - 2, cy - 6, 8, 2, 1).fill(0xfef08a);
      } else {
        // Open wide jaws
        g.circle(cx + 2, cy - 4, 18).fill(0x7e22ce);
        // Open inner mouth
        g.ellipse(cx + 8, cy, 12, 10).fill(0x3b0764);
        // Sharp teeth
        g.poly([cx + 6, cy - 10, cx + 10, cy - 4, cx + 14, cy - 10]).fill(0xffffff);
        g.poly([cx + 6, cy + 10, cx + 10, cy + 4, cx + 14, cy + 10]).fill(0xffffff);
        // Eyes
        g.circle(cx - 4, cy - 10, 3).fill(0xfacc15);
        g.circle(cx - 3, cy - 10, 1.5).fill(0x0f172a);
      }
      break;
    }

    case 'cherrybomb': {
      // Twin explosive cherries
      const pulse = 1 + Math.sin(time * 10) * 0.1;
      // Stems
      g.roundRect(cx - 2, cy - 16, 4, 14, 1).fill(0x15803d);
      // Left Cherry
      g.circle(cx - 10, cy + 4, 13 * pulse).fill(0xdc2626);
      g.circle(cx - 8, cy + 2, 4).fill(0xf87171);
      // Right Cherry
      g.circle(cx + 10, cy + 4, 13 * pulse).fill(0xdc2626);
      g.circle(cx + 12, cy + 2, 4).fill(0xf87171);
      // Angry eyes
      g.circle(cx - 12, cy + 2, 2.5).fill(0xffffff);
      g.circle(cx - 11, cy + 2, 1.5).fill(0x0f172a);
      g.circle(cx + 8, cy + 2, 2.5).fill(0xffffff);
      g.circle(cx + 9, cy + 2, 1.5).fill(0x0f172a);
      // Sizzling spark
      g.circle(cx, cy - 18, 4 + Math.sin(time * 20) * 2).fill(0xfacc15);
      break;
    }

    case 'potatomine': {
      const isArmed = plant.isArmed ?? true;
      if (isArmed) {
        // Popped up ready
        g.ellipse(cx, cy + 10, 18, 14).fill(0x854d0e);
        g.ellipse(cx, cy + 8, 15, 11).fill(0xa16207);
        // Eyes
        g.circle(cx - 5, cy + 6, 2.5).fill(0x0f172a);
        g.circle(cx + 5, cy + 6, 2.5).fill(0x0f172a);
        // Flashing blinking antenna
        g.roundRect(cx - 1.5, cy - 6, 3, 14, 1).fill(0x475569);
        const blink = Math.sin(time * 8) > 0 ? 0xef4444 : 0xfacc15;
        g.circle(cx, cy - 8, 4).fill(blink);
      } else {
        // Underground dirt mound with tip
        g.ellipse(cx, cy + 18, 18, 8).fill(0x713f12);
        g.circle(cx, cy + 12, 6).fill(0x854d0e);
        g.circle(cx, cy + 4, 3).fill(0xef4444);
      }
      break;
    }

    case 'squash': {
      // Big frowning gourd
      g.poly([cx - 10, cy - 14, cx + 10, cy - 14, cx + 16, cy + 16, cx - 16, cy + 16]).fill(0x15803d);
      g.circle(cx, cy - 14, 10).fill(0x16a34a);
      // Furrowed brows
      g.roundRect(cx - 10, cy - 10, 8, 3, 1).fill(0x14532d);
      g.roundRect(cx + 2, cy - 10, 8, 3, 1).fill(0x14532d);
      // Angry eyes
      g.circle(cx - 6, cy - 4, 3).fill(0xffffff);
      g.circle(cx - 5, cy - 4, 1.8).fill(0x0f172a);
      g.circle(cx + 6, cy - 4, 3).fill(0xffffff);
      g.circle(cx + 5, cy - 4, 1.8).fill(0x0f172a);
      break;
    }

    case 'jalapeno': {
      // Hot chili
      g.ellipse(cx, cy + 4, 10, 20).fill(0xdc2626);
      g.roundRect(cx - 2, cy - 18, 4, 8, 1).fill(0x16a34a);
      // Flame aura
      const flame = Math.sin(time * 12) * 2;
      g.poly([cx - 8, cy - 6, cx, cy - 16 + flame, cx + 8, cy - 6]).fill(0xf97316);
      g.circle(cx - 3, cy, 2).fill(0xffffff);
      g.circle(cx + 3, cy, 2).fill(0xffffff);
      break;
    }

    case 'torchwood': {
      // Wooden stump
      g.roundRect(cx - 16, cy + 2, 32, 24, 4).fill(0x78350f);
      g.ellipse(cx, cy + 2, 16, 6).fill(0x92400e);
      // Roaring fire
      const flicker = Math.sin(time * 14) * 3;
      g.poly([cx - 14, cy + 2, cx, cy - 24 + flicker, cx + 14, cy + 2]).fill(0xf97316);
      g.poly([cx - 8, cy + 2, cx, cy - 18 + flicker, cx + 8, cy + 2]).fill(0xfacc15);
      break;
    }

    case 'melonpult': {
      // Basket frame
      g.roundRect(cx - 16, cy + 12, 32, 14, 3).fill(0x15803d);
      // Melon in catapult
      g.ellipse(cx - 4, cy - 2, 14, 11).fill(0x10b981);
      g.ellipse(cx - 4, cy - 2, 11, 8).fill(0x34d399);
      // Catapult spoon arm
      g.roundRect(cx + 4, cy - 8, 6, 24, 2).fill(0x78350f);
      break;
    }

    case 'fumeshroom':
    case 'hypnoshroom': {
      const isHypno = plant.plantId === 'hypnoshroom';
      // Stem
      g.roundRect(cx - 5, cy + 6, 10, 20, 2).fill(0xf3e8ff);
      // Cap
      if (isHypno) {
        g.ellipse(cx, cy - 4, 18, 14).fill(0xd946ef);
        g.circle(cx, cy - 4, 9).fill(0x06b6d4);
        g.circle(cx, cy - 4, 4).fill(0xfacc15);
      } else {
        g.ellipse(cx, cy - 4, 18, 14).fill(0x9333ea);
        // Snout
        g.roundRect(cx + 8, cy - 8, 12, 9, 3).fill(0x7e22ce);
        g.ellipse(cx + 20, cy - 3, 2, 5).fill(0x3b0764);
      }
      // Eyes
      g.circle(cx - 4, cy + 2, 2.5).fill(0x3b0764);
      g.circle(cx + 4, cy + 2, 2.5).fill(0x3b0764);
      break;
    }

    default: {
      // Spikeweed & others
      g.roundRect(cx - 18, cy + 18, 36, 8, 2).fill(0x475569);
      for (let s = -14; s <= 14; s += 7) {
        g.poly([cx + s - 3, cy + 18, cx + s, cy + 6, cx + s + 3, cy + 18]).fill(0x94a3b8);
      }
      break;
    }
  }

  // Mini Health Bar if damaged
  if (plant.hp < plant.maxHp) {
    const barWidth = 32;
    const barHeight = 4;
    const barX = cx - barWidth / 2;
    const barY = cy + 28;
    const healthWidth = Math.max(0, (plant.hp / plant.maxHp) * barWidth);

    g.roundRect(barX, barY, barWidth, barHeight, 2).fill(0x0f172a);
    g.roundRect(barX, barY, healthWidth, barHeight, 2).fill(0x22c55e);
  }
}

/**
 * Procedural vector graphics for Zombies in Pixi.js
 */
export function drawZombie(g: Graphics, zombie: ZombieInstance, time: number) {
  const sway = Math.sin(time * 4 + zombie.instanceId.charCodeAt(0)) * 2;
  const cx = sway;
  const cy = 0;

  const isSlow = zombie.slowedTurns > 0;
  const isHypno = zombie.isHypnotized;
  const skinColor = isSlow ? 0x67e8f9 : isHypno ? 0xc084fc : 0x86efac;
  const jacketColor = isSlow ? 0x0e7490 : 0x78350f;

  // Legs walking
  const legOffset = Math.sin(time * 6) * 4;
  g.roundRect(cx - 6 + legOffset, cy + 18, 5, 18, 2).fill(0x1e3a8a);
  g.roundRect(cx + 2 - legOffset, cy + 18, 5, 18, 2).fill(0x1e3a8a);

  // Body / Suit
  g.roundRect(cx - 10, cy - 2, 20, 22, 3).fill(jacketColor);
  // White tie / shirt slit
  g.roundRect(cx - 2, cy - 1, 4, 10, 1).fill(0xf8fafc);
  g.roundRect(cx - 1, cy + 1, 2, 8, 1).fill(0xdc2626);

  // Outstretched Arms
  const armY = zombie.isEating ? Math.sin(time * 12) * 3 : 0;
  g.roundRect(cx - 18, cy + 2 + armY, 14, 5, 2).fill(skinColor);

  // Head
  g.circle(cx, cy - 14, 12).fill(skinColor);
  // Big Yellow Zombie Eyes
  g.circle(cx - 4, cy - 15, 3.5).fill(0xfef08a);
  g.circle(cx - 4, cy - 15, 1.8).fill(0x1e293b);
  g.circle(cx + 4, cy - 15, 4).fill(0xfef08a);
  g.circle(cx + 4, cy - 15, 2).fill(0x1e293b);
  // Mouth
  if (zombie.isEating) {
    g.circle(cx, cy - 7, 4).fill(0x881337);
  } else {
    g.roundRect(cx - 4, cy - 8, 8, 2, 1).fill(0x451a03);
  }

  // Headgear / Equipment
  switch (zombie.zombieId) {
    case 'conehead': {
      // Orange traffic cone
      g.poly([cx - 8, cy - 18, cx, cy - 36, cx + 8, cy - 18]).fill(0xf97316);
      g.roundRect(cx - 10, cy - 19, 20, 3, 1).fill(0xea580c);
      // Reflective white stripe
      g.roundRect(cx - 5, cy - 28, 10, 3, 1).fill(0xffffff);
      break;
    }

    case 'buckethead': {
      // Steel bucket
      g.poly([cx - 10, cy - 14, cx - 8, cy - 30, cx + 8, cy - 30, cx + 10, cy - 14]).fill(0x94a3b8);
      g.roundRect(cx - 9, cy - 31, 18, 3, 1).fill(0x64748b);
      // Dents
      g.circle(cx - 3, cy - 22, 2).fill(0x475569);
      break;
    }

    case 'football': {
      // All-star red football helmet
      g.circle(cx, cy - 16, 14).fill(0xdc2626);
      g.roundRect(cx - 8, cy - 12, 16, 4, 1).fill(0xffffff); // Face cage
      // Shoulder pads
      g.roundRect(cx - 14, cy - 6, 28, 8, 3).fill(0xb91c1c);
      break;
    }

    case 'newspaper': {
      if (zombie.hasSpecialArmor) {
        // Holding newspaper shield
        g.roundRect(cx - 18, cy - 8, 14, 22, 2).fill(0xe2e8f0);
        g.roundRect(cx - 16, cy - 4, 10, 2, 1).fill(0x475569);
        g.roundRect(cx - 16, cy + 2, 10, 2, 1).fill(0x475569);
        g.roundRect(cx - 16, cy + 8, 10, 2, 1).fill(0x475569);
      }
      break;
    }

    case 'polevaulter': {
      if (!zombie.hasVaulted) {
        // Vaulting pole
        g.roundRect(cx - 24, cy - 24, 4, 48, 2).fill(0xd97706);
      }
      break;
    }

    case 'screendoor': {
      if (zombie.hasSpecialArmor) {
        // Heavy wire mesh door
        g.roundRect(cx - 20, cy - 14, 16, 38, 2).fill(0x64748b);
        g.roundRect(cx - 18, cy - 12, 12, 34, 1).fill(0x334155);
      }
      break;
    }

    case 'gargantuar': {
      // Giant telephone pole club
      g.roundRect(cx - 24, cy - 30, 8, 54, 3).fill(0x78350f);
      g.roundRect(cx - 26, cy - 28, 12, 10, 2).fill(0x94a3b8);
      // Red glowing enraged eyes
      g.circle(cx - 4, cy - 15, 3).fill(0xef4444);
      g.circle(cx + 4, cy - 15, 3).fill(0xef4444);
      break;
    }
  }

  // Zombie HP Bar
  const barWidth = 32;
  const barHeight = 4;
  const barX = cx - barWidth / 2;
  const barY = cy - 36;
  const healthWidth = Math.max(0, (zombie.hp / zombie.maxHp) * barWidth);

  g.roundRect(barX, barY, barWidth, barHeight, 2).fill(0x0f172a);
  g.roundRect(
    barX,
    barY,
    healthWidth,
    barHeight,
    2
  ).fill(isHypno ? 0xc084fc : isSlow ? 0x38bdf8 : 0xef4444);
}

/**
 * Procedural vector graphics for Hazards in Pixi.js
 */
export function drawHazard(g: Graphics, hazard: LawnHazard, time: number) {
  const cx = 0;
  const cy = 0;

  switch (hazard.type) {
    case 'tombstone': {
      // Gravestone
      g.roundRect(cx - 16, cy - 14, 32, 36, 12).fill(0x475569);
      g.roundRect(cx - 14, cy - 12, 28, 32, 10).fill(0x64748b);
      // "R.I.P."
      g.roundRect(cx - 8, cy - 2, 16, 3, 1).fill(0x1e293b);
      g.roundRect(cx - 2, cy - 8, 4, 14, 1).fill(0x1e293b);
      // Earth dirt mound
      g.ellipse(cx, cy + 22, 22, 6).fill(0x713f12);
      break;
    }

    case 'crater': {
      // Scorched blast crater
      g.ellipse(cx, cy + 6, 26, 14).fill(0x1c1917);
      g.ellipse(cx, cy + 6, 20, 10).fill(0x0c0a09);
      break;
    }

    case 'toxic_puddle': {
      // Glowing green sludge puddle
      g.ellipse(cx, cy + 8, 28, 14).fill(0x15803d);
      g.ellipse(cx, cy + 8, 22, 10).fill(0x22c55e);
      // Bubbles popping
      const b1 = Math.sin(time * 6) * 3;
      const b2 = Math.cos(time * 5) * 4;
      g.circle(cx - 8 + b1, cy + 6, 3).fill(0x86efac);
      g.circle(cx + 8 + b2, cy + 8, 2).fill(0x86efac);
      break;
    }
  }
}

/**
 * Procedural vector graphics for Projectiles in Pixi.js
 */
export function drawProjectile(g: Graphics, proj: Projectile, time: number) {
  const cx = 0;
  const cy = 0;

  switch (proj.type) {
    case 'frostpea': {
      // Glowing ice pea
      g.circle(cx, cy, 6).fill(0x38bdf8);
      g.circle(cx - 2, cy - 2, 2).fill(0xffffff);
      // Frost trail
      g.circle(cx - 8, cy, 3).fill({ color: 0x7dd3fc, alpha: 0.6 });
      break;
    }

    case 'firepea': {
      // Blazing fireball
      const flicker = Math.sin(time * 18) * 1.5;
      g.circle(cx, cy, 7 + flicker).fill(0xef4444);
      g.circle(cx - 2, cy, 5).fill(0xf97316);
      g.circle(cx - 3, cy, 3).fill(0xfacc15);
      // Flame trail
      g.ellipse(cx - 8, cy, 6, 3).fill({ color: 0xf97316, alpha: 0.7 });
      break;
    }

    case 'melon': {
      // Heavy watermelon spinning
      g.ellipse(cx, cy, 10, 7).fill(0x15803d);
      g.ellipse(cx, cy, 8, 5).fill(0x22c55e);
      g.roundRect(cx - 6, cy - 1, 12, 2, 1).fill(0x14532d);
      break;
    }

    case 'spore': {
      // Toxic spore cloud
      const pulse = 1 + Math.sin(time * 12) * 0.2;
      g.circle(cx, cy, 6 * pulse).fill(0xa855f7);
      g.circle(cx - 2, cy - 2, 2).fill(0xf3e8ff);
      break;
    }

    default: {
      // Standard pea
      g.circle(cx, cy, 5.5).fill(0x22c55e);
      g.circle(cx - 1.5, cy - 1.5, 2).fill(0x86efac);
      g.circle(cx - 2, cy - 2, 1).fill(0xffffff);
      break;
    }
  }
}

/**
 * Procedural vector graphics for Lawnmower in Pixi.js
 */
export function drawLawnMower(g: Graphics, x: number, y: number, isAvailable: boolean, time: number) {
  if (!isAvailable) return;

  const bob = Math.sin(time * 4) * 0.5;
  const cx = x + 24;
  const cy = y + 24 + bob;

  // Red chassis body
  g.roundRect(cx - 18, cy - 10, 36, 20, 4).fill(0xdc2626);
  g.roundRect(cx - 16, cy - 8, 32, 16, 3).fill(0xef4444);

  // Engine block
  g.roundRect(cx - 8, cy - 14, 16, 8, 2).fill(0x64748b);
  g.roundRect(cx - 6, cy - 12, 12, 4, 1).fill(0x94a3b8);

  // Wheels
  g.circle(cx - 12, cy + 10, 6).fill(0x0f172a);
  g.circle(cx - 12, cy + 10, 3).fill(0x94a3b8);
  g.circle(cx + 12, cy + 10, 6).fill(0x0f172a);
  g.circle(cx + 12, cy + 10, 3).fill(0x94a3b8);

  // Handlebar
  g.roundRect(cx - 18, cy - 18, 3, 12, 1).fill(0x475569);
  g.roundRect(cx - 22, cy - 20, 8, 3, 1).fill(0x1e293b);
}
