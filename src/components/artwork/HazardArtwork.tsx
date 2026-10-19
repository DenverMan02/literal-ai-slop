import React from 'react';
import { HazardType } from '../../types/game';

interface HazardArtworkProps {
  type: HazardType;
  hp?: number;
  maxHp?: number;
  turnsRemaining?: number;
  className?: string;
}

export const HazardArtwork: React.FC<HazardArtworkProps> = ({
  type,
  hp = 100,
  maxHp = 100,
  turnsRemaining,
  className = 'w-full h-full',
}) => {
  switch (type) {
    case 'tombstone': {
      const isDamaged = hp < maxHp * 0.6;
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Mound / Dirt Base */}
            <ellipse cx="50" cy="85" rx="36" ry="10" fill="#451a03" stroke="#290e02" strokeWidth="2" />
            <polygon points="25,84 30,76 35,84" fill="#15803d" />
            <polygon points="65,84 70,78 75,84" fill="#15803d" />

            {/* Stone Body */}
            <path
              d="M 28 85 L 28 35 C 28 15 72 15 72 35 L 72 85 Z"
              fill="#64748b"
              stroke="#334155"
              strokeWidth="3.5"
            />
            {/* Chiseled Border */}
            <path
              d="M 33 80 L 33 36 C 33 22 67 22 67 36 L 67 80 Z"
              fill="#475569"
              opacity="0.8"
            />

            {/* Engraved Cross / Text */}
            <path d="M 50 32 L 50 56 M 40 40 L 60 40" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            <text x="50" y="68" textAnchor="middle" fill="#1e293b" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
              R.I.P.
            </text>

            {/* Cracks if damaged */}
            {isDamaged && (
              <>
                <path d="M 68 30 L 58 42 L 64 52" stroke="#0f172a" strokeWidth="2.5" fill="none" />
                <path d="M 32 60 L 40 66" stroke="#0f172a" strokeWidth="2" fill="none" />
              </>
            )}
          </svg>

          {/* HP Bar for Tombstone */}
          {hp < maxHp && (
            <div className="absolute -top-1 w-10 h-1 bg-slate-950 rounded-full border border-slate-700 overflow-hidden">
              <div
                className="h-full bg-slate-400"
                style={{ width: `${Math.max(0, (hp / maxHp) * 100)}%` }}
              />
            </div>
          )}
        </div>
      );
    }

    case 'crater':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-inner">
            {/* Charred Outer Perimeter */}
            <ellipse cx="50" cy="50" rx="42" ry="26" fill="#1c1917" stroke="#292524" strokeWidth="2.5" />
            {/* Deep Scorched Earth Hole */}
            <ellipse cx="50" cy="52" rx="32" ry="18" fill="#0c0a09" />
            {/* Burning Embers / Debris */}
            <polygon points="28,45 32,48 26,52" fill="#78350f" />
            <polygon points="68,52 74,48 70,58" fill="#78350f" />
            <circle cx="44" cy="54" r="2.5" fill="#ea580c" className="animate-pulse" />
            <circle cx="56" cy="50" r="2" fill="#f97316" className="animate-ping" />
          </svg>
          {turnsRemaining !== undefined && turnsRemaining > 0 && (
            <span className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-amber-400 bg-slate-950/80 px-1 rounded">
              {turnsRemaining}T
            </span>
          )}
        </div>
      );

    case 'toxic_puddle':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Spilled Acid Slime */}
            <path
              d="M 20 50 C 15 35 38 25 55 30 C 75 32 88 45 80 62 C 72 75 45 78 30 70 C 18 64 22 55 20 50 Z"
              fill="#65a30d"
              stroke="#4d7c0f"
              strokeWidth="2.5"
            />
            {/* Toxic Green Liquid Center */}
            <path
              d="M 28 50 C 25 40 42 34 54 36 C 68 38 74 48 70 58 C 64 68 45 68 35 62 C 28 58 30 52 28 50 Z"
              fill="#84cc16"
              opacity="0.85"
            />
            {/* Acid Bubbles */}
            <circle cx="42" cy="48" r="4.5" fill="#bef264" className="animate-pulse" />
            <circle cx="58" cy="44" r="3" fill="#bef264" />
            <circle cx="50" cy="58" r="2.5" fill="#d9f99d" />
          </svg>
          {turnsRemaining !== undefined && turnsRemaining > 0 && (
            <span className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-lime-400 bg-slate-950/80 px-1 rounded">
              {turnsRemaining}T
            </span>
          )}
        </div>
      );

    case 'storm_cloud':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
            {/* Thunder Cloud */}
            <path
              d="M 30 65 L 70 65 C 80 65 88 56 86 46 C 85 36 76 32 70 34 C 67 22 52 18 42 26 C 36 22 26 28 26 36 C 18 38 16 52 24 60 C 26 63 28 65 30 65 Z"
              fill="#334155"
              stroke="#1e293b"
              strokeWidth="3"
            />
            {/* Lightning Bolt */}
            <polygon points="52,56 42,72 50,72 44,90 62,68 54,68" fill="#facc15" stroke="#eab308" strokeWidth="1" className="animate-pulse" />
          </svg>
        </div>
      );

    case 'ice_trail':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Frosted ice surface sheet */}
            <rect x="5" y="25" width="90" height="50" rx="6" fill="#e0f2fe" opacity="0.85" stroke="#38bdf8" strokeWidth="2.5" />
            <path d="M 12 35 L 35 48 L 50 38 L 88 45" stroke="#bae6fd" strokeWidth="2" fill="none" />
            <path d="M 22 62 L 44 54 L 75 60" stroke="#bae6fd" strokeWidth="2" fill="none" />
            {/* Ice shard crystals */}
            <polygon points="25,30 29,22 33,30" fill="#ffffff" />
            <polygon points="68,66 72,58 76,66" fill="#ffffff" />
            <polygon points="48,46 51,40 54,46" fill="#ffffff" />
          </svg>
          {turnsRemaining !== undefined && turnsRemaining > 0 && (
            <span className="absolute bottom-1 right-2 text-[10px] font-mono font-bold text-cyan-300 bg-slate-950/80 px-1 rounded">
              {turnsRemaining}T
            </span>
          )}
        </div>
      );

    default:
      return null;
  }
};
