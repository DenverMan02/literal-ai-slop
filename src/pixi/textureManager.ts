import { Texture } from 'pixi.js';
import {
  SVG_PLANTS,
  SVG_ZOMBIES,
  SVG_HAZARDS,
  SVG_PROJECTILES,
  SVG_LAWNMOWER,
} from './svgRegistry';

const textureCache: Map<string, Texture> = new Map();

function createTextureFromSvg(svgString: string): Texture {
  const cleanSvg = svgString.trim();
  const dataUri = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(cleanSvg);
  return Texture.from(dataUri);
}

export function getPlantTexture(plantId: string): Texture {
  const key = `plant_${plantId}`;
  if (!textureCache.has(key)) {
    const svg = SVG_PLANTS[plantId] || SVG_PLANTS.peashooter;
    textureCache.set(key, createTextureFromSvg(svg));
  }
  return textureCache.get(key)!;
}

export function getZombieTexture(zombieId: string): Texture {
  const key = `zombie_${zombieId}`;
  if (!textureCache.has(key)) {
    const svg = SVG_ZOMBIES[zombieId] || SVG_ZOMBIES.basic;
    textureCache.set(key, createTextureFromSvg(svg));
  }
  return textureCache.get(key)!;
}

export function getHazardTexture(hazardType: string): Texture {
  const key = `hazard_${hazardType}`;
  if (!textureCache.has(key)) {
    const svg = SVG_HAZARDS[hazardType] || SVG_HAZARDS.tombstone;
    textureCache.set(key, createTextureFromSvg(svg));
  }
  return textureCache.get(key)!;
}

export function getProjectileTexture(projType: string): Texture {
  const key = `proj_${projType}`;
  if (!textureCache.has(key)) {
    const svg = SVG_PROJECTILES[projType] || SVG_PROJECTILES.pea;
    textureCache.set(key, createTextureFromSvg(svg));
  }
  return textureCache.get(key)!;
}

export function getLawnMowerTexture(): Texture {
  const key = 'lawnmower';
  if (!textureCache.has(key)) {
    textureCache.set(key, createTextureFromSvg(SVG_LAWNMOWER));
  }
  return textureCache.get(key)!;
}
