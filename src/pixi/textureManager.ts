import { Texture } from 'pixi.js';
import {
  SVG_PLANTS,
  SVG_ZOMBIES,
  SVG_HAZARDS,
  SVG_PROJECTILES,
  SVG_LAWNMOWER,
} from './svgRegistry';

const textureCache: Map<string, Texture> = new Map();
let isInitialized = false;

function svgToCanvasTexture(svgString: string, targetHeight = 160): Promise<Texture> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      const natW = img.naturalWidth || 120;
      const natH = img.naturalHeight || 120;
      const aspect = natW / natH;
      const canvasH = targetHeight;
      const canvasW = Math.max(20, Math.round(targetHeight * aspect));

      const canvas = document.createElement('canvas');
      canvas.width = canvasW;
      canvas.height = canvasH;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, canvasW, canvasH);
      }
      resolve(Texture.from(canvas));
    };

    img.onerror = () => {
      // Fallback canvas if SVG parse fails
      const canvas = document.createElement('canvas');
      canvas.width = targetHeight;
      canvas.height = targetHeight;
      resolve(Texture.from(canvas));
    };

    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString.trim());
  });
}

function createFallbackTexture(color: string): Texture {
  const canvas = document.createElement('canvas');
  canvas.width = 60;
  canvas.height = 60;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(30, 30, 24, 0, Math.PI * 2);
    ctx.fill();
  }
  return Texture.from(canvas);
}

export async function preloadAllTextures(): Promise<void> {
  if (isInitialized) return;

  const promises: Promise<void>[] = [];

  for (const [id, svg] of Object.entries(SVG_PLANTS)) {
    promises.push(
      svgToCanvasTexture(svg, 140).then((tex) => {
        textureCache.set(`plant_${id}`, tex);
      })
    );
  }

  for (const [id, svg] of Object.entries(SVG_ZOMBIES)) {
    promises.push(
      svgToCanvasTexture(svg, 180).then((tex) => {
        textureCache.set(`zombie_${id}`, tex);
      })
    );
  }

  for (const [id, svg] of Object.entries(SVG_HAZARDS)) {
    promises.push(
      svgToCanvasTexture(svg, 140).then((tex) => {
        textureCache.set(`hazard_${id}`, tex);
      })
    );
  }

  for (const [id, svg] of Object.entries(SVG_PROJECTILES)) {
    promises.push(
      svgToCanvasTexture(svg, 70).then((tex) => {
        textureCache.set(`proj_${id}`, tex);
      })
    );
  }

  promises.push(
    svgToCanvasTexture(SVG_LAWNMOWER, 120).then((tex) => {
      textureCache.set('lawnmower', tex);
    })
  );

  await Promise.all(promises);
  isInitialized = true;
}

export function getPlantTexture(plantId: string): Texture {
  return (
    textureCache.get(`plant_${plantId}`) ||
    textureCache.get('plant_peashooter') ||
    createFallbackTexture('#22c55e')
  );
}

export function getZombieTexture(zombieId: string): Texture {
  return (
    textureCache.get(`zombie_${zombieId}`) ||
    textureCache.get('zombie_basic') ||
    createFallbackTexture('#84cc16')
  );
}

export function getHazardTexture(hazardType: string): Texture {
  return textureCache.get(`hazard_${hazardType}`) || createFallbackTexture('#64748b');
}

export function getProjectileTexture(projType: string): Texture {
  return textureCache.get(`proj_${projType}`) || createFallbackTexture('#22c55e');
}

export function getLawnMowerTexture(): Texture {
  return textureCache.get('lawnmower') || createFallbackTexture('#dc2626');
}
