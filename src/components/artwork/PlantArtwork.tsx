import React from 'react';
import { PlantId } from '../../types/game';
import { SVG_PLANTS } from '../../pixi/svgRegistry';

interface PlantArtworkProps {
  plantId: PlantId;
  hp?: number;
  maxHp?: number;
  isArmed?: boolean;
  chewingTurnsRemaining?: number;
  fuseTurnsRemaining?: number;
  actionCounter?: number;
  className?: string;
}

export const PlantArtwork: React.FC<PlantArtworkProps> = ({
  plantId,
  className = 'w-14 h-14',
}) => {
  const svg = SVG_PLANTS[plantId];

  if (!svg) {
    return <div className={`relative flex items-center justify-center ${className}`} />;
  }

  return (
    <div
      className={`relative flex items-center justify-center ${className} [&>svg]:w-full [&>svg]:h-full [&>svg]:drop-shadow-md`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
