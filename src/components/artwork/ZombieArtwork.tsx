import React from 'react';
import { ZombieId } from '../../types/game';
import { SVG_ZOMBIES } from '../../pixi/svgRegistry';

interface ZombieArtworkProps {
  zombieId: ZombieId;
  hp?: number;
  maxHp?: number;
  isSlowed?: boolean;
  isEating?: boolean;
  hasSpecialArmor?: boolean;
  hasVaulted?: boolean;
  isHypnotized?: boolean;
  className?: string;
}

export const ZombieArtwork: React.FC<ZombieArtworkProps> = ({
  zombieId,
  isSlowed = false,
  isHypnotized = false,
  className = 'w-16 h-20',
}) => {
  const svgMarkup = SVG_ZOMBIES[zombieId] || SVG_ZOMBIES.basic;

  return (
    <div
      className={`relative flex items-center justify-center ${className} ${
        isSlowed ? 'brightness-110 hue-rotate-180' : ''
      } ${isHypnotized ? 'scale-x-[-1]' : ''}`}
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
};
