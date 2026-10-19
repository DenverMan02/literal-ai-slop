import React from 'react';
import { PlantId } from '../../types/game';

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
  hp = 100,
  maxHp = 100,
  isArmed = true,
  chewingTurnsRemaining = 0,
  fuseTurnsRemaining = 0,
  actionCounter = 0,
  className = 'w-14 h-14',
}) => {
  const hpRatio = hp / maxHp;

  switch (plantId) {
    case 'sunflower':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Stem & Leaves */}
            <path d="M 50 65 Q 48 85 50 95" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 49 78 Q 28 80 25 70 Q 36 68 49 76" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
            <path d="M 51 82 Q 72 84 75 74 Q 64 72 51 80" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            {/* Sun Petals */}
            <g className="animate-sun-spin" style={{ transformOrigin: '50px 48px' }}>
              {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                <ellipse
                  key={deg}
                  cx="50"
                  cy="20"
                  rx="7"
                  ry="14"
                  fill="#facc15"
                  stroke="#eab308"
                  strokeWidth="2"
                  transform={`rotate(${deg} 50 48)`}
                />
              ))}
            </g>

            {/* Face Center */}
            <circle cx="50" cy="48" r="21" fill="#78350f" stroke="#451a03" strokeWidth="3" />
            <circle cx="50" cy="48" r="19" fill="#92400e" />

            {/* Cheerful Eyes */}
            <ellipse cx="43" cy="45" rx="3.5" ry="5.5" fill="#0f172a" />
            <ellipse cx="57" cy="45" rx="3.5" ry="5.5" fill="#0f172a" />
            <circle cx="44.5" cy="43.5" r="1.5" fill="#ffffff" />
            <circle cx="58.5" cy="43.5" r="1.5" fill="#ffffff" />

            {/* Rosy Cheeks */}
            <circle cx="38" cy="52" r="3" fill="#f87171" opacity="0.6" />
            <circle cx="62" cy="52" r="3" fill="#f87171" opacity="0.6" />

            {/* Smiling Mouth */}
            <path d="M 44 53 Q 50 60 56 53" stroke="#fef08a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'peashooter':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Base Stem & Leaves */}
            <path d="M 45 65 Q 40 85 45 95" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
            <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            {/* Head Crest Leaf */}
            <path d="M 32 40 Q 15 28 22 20 Q 35 25 36 38" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            {/* Head Base */}
            <circle cx="45" cy="45" r="22" fill="#4ade80" stroke="#16a34a" strokeWidth="3" />

            {/* Shooter Snout */}
            <ellipse cx="68" cy="45" rx="14" ry="10" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
            <ellipse cx="73" cy="45" rx="5" ry="8" fill="#14532d" />

            {/* Cartoon Eyes */}
            <circle cx="44" cy="38" r="6" fill="#ffffff" stroke="#166534" strokeWidth="1.5" />
            <circle cx="46" cy="38" r="3" fill="#0f172a" />
            <circle cx="47" cy="37" r="1" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'wallnut': {
      const isCrackedHeavy = hpRatio <= 0.35;
      const isCrackedLight = hpRatio <= 0.7;

      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Ground Shadow */}
            <ellipse cx="50" cy="92" rx="28" ry="6" fill="#1e293b" opacity="0.4" />

            {/* Nut Outer Shell */}
            <path
              d="M 50 12 C 72 12 80 40 78 70 C 76 90 64 92 50 92 C 36 92 24 90 22 70 C 20 40 28 12 50 12 Z"
              fill="#b45309"
              stroke="#78350f"
              strokeWidth="3.5"
            />
            {/* Nut Highlight */}
            <path
              d="M 48 16 C 65 16 72 40 70 66 C 68 80 60 84 48 84 C 38 84 32 80 30 66 C 28 40 35 16 48 16 Z"
              fill="#d97706"
              opacity="0.9"
            />

            {/* Sturdy Eyes */}
            <ellipse cx="40" cy="42" rx="5" ry="8" fill="#ffffff" stroke="#451a03" strokeWidth="1.5" />
            <ellipse cx="60" cy="42" rx="5" ry="8" fill="#ffffff" stroke="#451a03" strokeWidth="1.5" />
            <ellipse cx="42" cy="42" rx="3" ry="5" fill="#1e293b" />
            <ellipse cx="62" cy="42" rx="3" ry="5" fill="#1e293b" />
            <circle cx="43" cy="40" r="1.2" fill="#ffffff" />
            <circle cx="63" cy="40" r="1.2" fill="#ffffff" />

            {/* Mouth */}
            {!isCrackedHeavy ? (
              <path d="M 45 60 Q 50 64 55 60" stroke="#451a03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            ) : (
              <path d="M 43 64 Q 50 58 57 64" stroke="#451a03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            )}

            {isCrackedLight && (
              <path d="M 68 30 L 62 38 L 66 48" stroke="#451a03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            )}

            {isCrackedHeavy && (
              <>
                <path d="M 30 50 L 36 56 L 32 68" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 50 70 L 52 82 L 48 88" stroke="#451a03" strokeWidth="3" fill="none" strokeLinecap="round" />
              </>
            )}
          </svg>
        </div>
      );
    }

    case 'snowpea':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 45 65 Q 40 85 45 95" stroke="#0284c7" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
            <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />

            <polygon points="30,35 15,25 25,45" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />
            <polygon points="34,26 22,12 36,18" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" />

            <circle cx="45" cy="45" r="22" fill="#38bdf8" stroke="#0284c7" strokeWidth="3" />
            <ellipse cx="68" cy="45" rx="14" ry="10" fill="#0284c7" stroke="#0369a1" strokeWidth="3" />
            <ellipse cx="73" cy="45" rx="5" ry="8" fill="#0c4a6e" />

            <circle cx="44" cy="38" r="6" fill="#ffffff" stroke="#0284c7" strokeWidth="1.5" />
            <circle cx="46" cy="38" r="3" fill="#0369a1" />
            <circle cx="47" cy="37" r="1" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'repeater':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 45 65 Q 40 85 45 95" stroke="#16a34a" strokeWidth="6" fill="none" strokeLinecap="round" />
            <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
            <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            <path d="M 32 38 Q 12 24 20 14 Q 32 20 34 32" fill="#15803d" stroke="#14532d" strokeWidth="2" />
            <path d="M 36 28 Q 24 10 34 4 Q 42 12 40 24" fill="#15803d" stroke="#14532d" strokeWidth="2" />

            <circle cx="45" cy="45" r="22" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
            <path d="M 58 35 L 80 37 L 80 53 L 58 55 Z" fill="#15803d" stroke="#14532d" strokeWidth="2.5" />
            <ellipse cx="80" cy="45" rx="5" ry="9" fill="#14532d" />

            <path d="M 38 31 L 52 35" stroke="#14532d" strokeWidth="3" strokeLinecap="round" />
            <circle cx="44" cy="39" r="5.5" fill="#ffffff" stroke="#14532d" strokeWidth="1.5" />
            <circle cx="46" cy="39" r="3" fill="#0f172a" />
            <circle cx="47" cy="38" r="1" fill="#ffffff" />
          </svg>
        </div>
      );

    case 'potatomine': {
      const turnsNeeded = Math.max(0, 4 - actionCounter);

      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <ellipse cx="50" cy="85" rx="36" ry="12" fill="#78350f" stroke="#451a03" strokeWidth="2.5" />

            {isArmed ? (
              <>
                <ellipse cx="50" cy="62" rx="22" ry="20" fill="#ca8a04" stroke="#854d0e" strokeWidth="3" />
                <path d="M 50 42 L 50 24" stroke="#64748b" strokeWidth="3" />
                <circle cx="50" cy="20" r="7" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" className="animate-pulse" />
                <circle cx="43" cy="58" r="3.5" fill="#0f172a" />
                <circle cx="57" cy="58" r="3.5" fill="#0f172a" />
                <circle cx="44" cy="57" r="1" fill="#ffffff" />
                <circle cx="58" cy="57" r="1" fill="#ffffff" />
                <path d="M 45 68 Q 50 73 55 68" stroke="#713f12" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </>
            ) : (
              <>
                <ellipse cx="50" cy="78" rx="16" ry="10" fill="#a16207" stroke="#713f12" strokeWidth="2" />
                <path d="M 50 68 L 50 50" stroke="#64748b" strokeWidth="3" />
                <circle cx="50" cy="46" r="5" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                <text x="50" y="32" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">
                  ARMING ({turnsNeeded}T)
                </text>
              </>
            )}
          </svg>
        </div>
      );
    }

    case 'chomper': {
      const isChewing = (chewingTurnsRemaining ?? 0) > 0;

      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 40 68 Q 38 88 40 96" stroke="#15803d" strokeWidth="7" fill="none" strokeLinecap="round" />
            <path d="M 38 82 Q 15 88 16 75 Q 28 72 38 80" fill="#22c55e" stroke="#15803d" strokeWidth="2" />
            <path d="M 42 86 Q 66 90 68 78 Q 54 75 42 84" fill="#22c55e" stroke="#15803d" strokeWidth="2" />

            {!isChewing ? (
              <>
                <path
                  d="M 30 52 C 25 25 55 18 68 32 C 78 40 76 52 64 54 C 54 56 40 56 30 52 Z"
                  fill="#9333ea"
                  stroke="#6b21a8"
                  strokeWidth="3"
                />
                <path
                  d="M 32 55 C 38 72 65 72 74 60 C 65 57 48 56 32 55 Z"
                  fill="#9333ea"
                  stroke="#6b21a8"
                  strokeWidth="3"
                />
                <path d="M 40 48 Q 58 54 66 42 Q 62 60 42 54 Z" fill="#dc2626" />
                <polygon points="46,38 50,47 54,38" fill="#ffffff" />
                <polygon points="56,40 60,49 64,41" fill="#ffffff" />
                <polygon points="48,58 52,50 56,58" fill="#ffffff" />
                <circle cx="44" cy="32" r="4" fill="#facc15" stroke="#581c87" strokeWidth="1.5" />
                <circle cx="45" cy="32" r="2" fill="#0f172a" />
              </>
            ) : (
              <>
                <ellipse cx="50" cy="50" rx="24" ry="20" fill="#7e22ce" stroke="#581c87" strokeWidth="3" />
                <path d="M 32 54 Q 50 56 68 54" stroke="#3b0764" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M 38 42 Q 44 38 48 42" stroke="#facc15" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 52 42 Q 58 38 62 42" stroke="#facc15" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <text x="50" y="28" textAnchor="middle" fill="#d8b4fe" fontSize="10" fontWeight="bold">
                  CHEWING ({chewingTurnsRemaining}T)
                </text>
              </>
            )}
          </svg>
        </div>
      );
    }

    case 'cherrybomb':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <path d="M 36 45 C 38 20 62 20 64 45" stroke="#15803d" strokeWidth="4" fill="none" />
            <path d="M 50 20 L 50 8" stroke="#ca8a04" strokeWidth="3" strokeDasharray="3 2" />
            <circle cx="50" cy="6" r="4.5" fill="#facc15" className="animate-ping" />
            <circle cx="50" cy="6" r="3" fill="#ef4444" />

            <circle cx="36" cy="58" r="18" fill="#dc2626" stroke="#991b1b" strokeWidth="3" />
            <circle cx="30" cy="52" r="3" fill="#ffffff" opacity="0.6" />
            <path d="M 28 50 L 38 54" stroke="#450a0a" strokeWidth="2.5" />
            <circle cx="33" cy="56" r="2.5" fill="#0f172a" />
            <path d="M 30 66 Q 36 62 40 67" stroke="#450a0a" strokeWidth="2" fill="none" />

            <circle cx="64" cy="58" r="18" fill="#dc2626" stroke="#991b1b" strokeWidth="3" />
            <circle cx="58" cy="52" r="3" fill="#ffffff" opacity="0.6" />
            <path d="M 72 50 L 62 54" stroke="#450a0a" strokeWidth="2.5" />
            <circle cx="67" cy="56" r="2.5" fill="#0f172a" />
            <path d="M 60 67 Q 64 62 70 66" stroke="#450a0a" strokeWidth="2" fill="none" />

            {fuseTurnsRemaining !== undefined && fuseTurnsRemaining > 0 && (
              <text x="50" y="88" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">
                SIZZLING (1T)
              </text>
            )}
          </svg>
        </div>
      );

    case 'squash':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            <ellipse cx="50" cy="88" rx="24" ry="6" fill="#14532d" opacity="0.4" />
            {/* Pear-shaped squash body */}
            <path
              d="M 50 18 C 38 18 36 36 34 52 C 30 70 30 86 50 86 C 70 86 70 70 66 52 C 64 36 62 18 50 18 Z"
              fill="#22c55e"
              stroke="#15803d"
              strokeWidth="3.5"
            />
            {/* Top stem */}
            <path d="M 50 18 L 50 8 Q 58 10 54 14" stroke="#166534" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Grumpy eyebrows & eyes */}
            <path d="M 38 42 L 48 46" stroke="#14532d" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 62 42 L 52 46" stroke="#14532d" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="42" cy="50" r="4" fill="#ffffff" stroke="#14532d" strokeWidth="1.5" />
            <circle cx="43" cy="50" r="2.5" fill="#0f172a" />
            <circle cx="58" cy="50" r="4" fill="#ffffff" stroke="#14532d" strokeWidth="1.5" />
            <circle cx="57" cy="50" r="2.5" fill="#0f172a" />
            {/* Stern frown */}
            <path d="M 42 66 Q 50 60 58 66" stroke="#14532d" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'jalapeno':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Fiery Pepper Body */}
            <path
              d="M 44 26 C 36 32 30 50 36 74 C 40 86 48 94 54 94 C 58 84 62 50 56 26 Z"
              fill="#ef4444"
              stroke="#b91c1c"
              strokeWidth="3"
            />
            {/* Flame Top */}
            <path d="M 50 26 Q 44 14 50 6 Q 56 12 50 26 Z" fill="#f59e0b" className="animate-pulse" />
            <polygon points="46,18 50,8 54,18" fill="#facc15" />
            {/* Fierce Angry Eyes */}
            <path d="M 38 42 L 46 45" stroke="#450a0a" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 58 42 L 50 45" stroke="#450a0a" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="42" cy="48" r="3" fill="#fef08a" />
            <circle cx="42" cy="48" r="1.5" fill="#0f172a" />
            <circle cx="54" cy="48" r="3" fill="#fef08a" />
            <circle cx="54" cy="48" r="1.5" fill="#0f172a" />
            {/* Gritted teeth */}
            <path d="M 40 60 L 56 60" stroke="#450a0a" strokeWidth="2.5" />
            {fuseTurnsRemaining !== undefined && fuseTurnsRemaining > 0 && (
              <text x="50" y="88" textAnchor="middle" fill="#facc15" fontSize="10" fontWeight="bold">
                PRIMING (1T)
              </text>
            )}
          </svg>
        </div>
      );

    case 'spikeweed':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow">
            {/* Low weed bed */}
            <ellipse cx="50" cy="75" rx="38" ry="14" fill="#14532d" stroke="#052e16" strokeWidth="2" />
            {/* Steel Thorns & Spikes */}
            <polygon points="20,74 25,48 30,74" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
            <polygon points="32,76 38,42 44,76" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
            <polygon points="46,75 52,38 58,75" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
            <polygon points="60,76 66,44 72,76" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
            <polygon points="74,74 78,50 82,74" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
            {/* Green vine tendrils */}
            <path d="M 15 78 Q 30 82 50 80 Q 70 82 85 78" stroke="#22c55e" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'torchwood':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            {/* Tree Stump Trunk */}
            <path
              d="M 28 88 L 32 38 L 68 38 L 72 88 Z"
              fill="#78350f"
              stroke="#451a03"
              strokeWidth="3.5"
            />
            {/* Wood bark grain */}
            <path d="M 38 48 L 40 78" stroke="#451a03" strokeWidth="2" />
            <path d="M 62 48 L 60 78" stroke="#451a03" strokeWidth="2" />
            {/* Blazing Fire Hollow */}
            <ellipse cx="50" cy="38" rx="18" ry="6" fill="#451a03" />
            {/* Roaring Flames */}
            <g className="animate-pulse">
              <path
                d="M 36 38 Q 42 16 50 8 Q 58 16 64 38 Q 50 32 36 38 Z"
                fill="#f97316"
              />
              <path
                d="M 40 38 Q 46 22 50 14 Q 54 22 60 38 Q 50 34 40 38 Z"
                fill="#facc15"
              />
              <circle cx="50" cy="24" r="5" fill="#ffffff" opacity="0.8" />
            </g>
            {/* Face on tree trunk */}
            <circle cx="44" cy="56" r="3.5" fill="#facc15" />
            <circle cx="45" cy="56" r="2" fill="#0f172a" />
            <circle cx="56" cy="56" r="3.5" fill="#facc15" />
            <circle cx="57" cy="56" r="2" fill="#0f172a" />
            <path d="M 46 68 Q 50 72 54 68" stroke="#451a03" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      );

    case 'tallnut': {
      const isCracked = hpRatio < 0.6;
      const isSevere = hpRatio < 0.3;
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            {/* Base shadow */}
            <ellipse cx="50" cy="92" rx="30" ry="6" fill="#1e293b" opacity="0.4" />
            {/* Colossal Tall-Nut Body */}
            <path
              d="M 28 85 C 22 55 24 16 50 14 C 76 16 78 55 72 85 C 65 92 35 92 28 85 Z"
              fill="#92400e"
              stroke="#451a03"
              strokeWidth="3.5"
            />
            {/* Inner shading */}
            <path
              d="M 33 83 C 28 56 30 22 50 20 C 70 22 72 56 67 83 C 60 88 40 88 33 83 Z"
              fill="#b45309"
            />
            {/* Heavy Determined Eyebrows */}
            <path d="M 36 38 L 48 42 M 64 38 L 52 42" stroke="#451a03" strokeWidth="4.5" strokeLinecap="round" />
            {/* Eyes */}
            <ellipse cx="43" cy="46" rx="4" ry="5.5" fill="#f8fafc" />
            <circle cx="44" cy="46" r="2.5" fill="#0f172a" />
            <ellipse cx="57" cy="46" rx="4" ry="5.5" fill="#f8fafc" />
            <circle cx="56" cy="46" r="2.5" fill="#0f172a" />
            {/* Stoic mouth */}
            <path d="M 44 65 L 56 65" stroke="#451a03" strokeWidth="3" strokeLinecap="round" />
            {/* Tough Band */}
            <path d="M 26 58 Q 50 63 74 58" stroke="#78350f" strokeWidth="2.5" fill="none" />
            {/* Cracks if damaged */}
            {isCracked && (
              <path d="M 66 32 L 56 42 L 62 52" stroke="#451a03" strokeWidth="2.5" fill="none" />
            )}
            {isSevere && (
              <>
                <path d="M 34 50 L 44 58 L 38 70" stroke="#451a03" strokeWidth="2.5" fill="none" />
                {/* Tear of endurance */}
                <ellipse cx="61" cy="54" rx="2" ry="3.5" fill="#38bdf8" />
              </>
            )}
          </svg>
        </div>
      );
    }

    case 'fumeshroom':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
            {/* Base fungal foot */}
            <ellipse cx="50" cy="85" rx="18" ry="7" fill="#581c87" stroke="#3b0764" strokeWidth="2" />
            {/* Spore Stem */}
            <path d="M 42 85 L 44 55 L 56 55 L 58 85 Z" fill="#7e22ce" stroke="#3b0764" strokeWidth="2.5" />
            {/* Wide Mushroom Cap */}
            <path
              d="M 18 58 C 18 28 82 28 82 58 C 70 64 30 64 18 58 Z"
              fill="#9333ea"
              stroke="#3b0764"
              strokeWidth="3.5"
            />
            {/* Snout Nozzle for shooting spores */}
            <ellipse cx="78" cy="50" rx="9" ry="7" fill="#6b21a8" stroke="#3b0764" strokeWidth="2.5" />
            <ellipse cx="80" cy="50" rx="4" ry="4" fill="#3b0764" />
            {/* Cap Spore Spots */}
            <circle cx="34" cy="40" r="5" fill="#c084fc" opacity="0.8" />
            <circle cx="52" cy="34" r="6" fill="#c084fc" opacity="0.8" />
            <circle cx="68" cy="40" r="4.5" fill="#c084fc" opacity="0.8" />
            {/* Fume Puff Particles */}
            <circle cx="88" cy="48" r="3" fill="#e9d5ff" opacity="0.6" className="animate-ping" />
            {/* Eyes */}
            <ellipse cx="40" cy="53" rx="3.5" ry="5" fill="#f8fafc" />
            <circle cx="42" cy="53" r="2.5" fill="#0f172a" />
            <ellipse cx="56" cy="53" rx="3.5" ry="5" fill="#f8fafc" />
            <circle cx="58" cy="53" r="2.5" fill="#0f172a" />
          </svg>
        </div>
      );

    case 'melonpult':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
            {/* Vine Roots Base */}
            <ellipse cx="50" cy="85" rx="32" ry="9" fill="#15803d" stroke="#14532d" strokeWidth="2.5" />
            <circle cx="50" cy="65" r="18" fill="#16a34a" stroke="#14532d" strokeWidth="3" />
            {/* Eyes on base vine */}
            <circle cx="44" cy="64" r="3" fill="#0f172a" />
            <circle cx="56" cy="64" r="3" fill="#0f172a" />
            <circle cx="45" cy="63" r="1" fill="#ffffff" />
            <circle cx="57" cy="63" r="1" fill="#ffffff" />
            {/* Pivoting Catapult Stalk Arm */}
            <path d="M 48 65 Q 40 40 32 32" stroke="#15803d" strokeWidth="7" strokeLinecap="round" fill="none" />
            {/* Basket scoop */}
            <path d="M 20 38 Q 30 42 42 30" stroke="#78350f" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* Giant Green Watermelon with Stripes */}
            <g className="animate-pulse">
              <ellipse cx="30" cy="24" rx="18" ry="14" fill="#22c55e" stroke="#14532d" strokeWidth="2.5" transform="rotate(-15 30 24)" />
              {/* Dark Green Watermelon Stripes */}
              <path d="M 18 20 Q 30 26 42 22" stroke="#15803d" strokeWidth="2.5" fill="none" />
              <path d="M 19 28 Q 30 32 41 28" stroke="#15803d" strokeWidth="2.5" fill="none" />
              <path d="M 22 14 Q 30 18 38 15" stroke="#15803d" strokeWidth="2" fill="none" />
            </g>
          </svg>
        </div>
      );

    case 'hypnoshroom':
      return (
        <div className={`relative flex items-center justify-center animate-plant-idle ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
            {/* Slender stalk */}
            <path d="M 44 88 Q 48 65 47 50 L 53 50 Q 52 65 56 88 Z" fill="#fdf4ff" stroke="#a21caf" strokeWidth="2" />
            {/* Psychedelic Mushroom Cap with Hypnotic Waves */}
            <path
              d="M 20 54 C 20 22 80 22 80 54 C 65 62 35 62 20 54 Z"
              fill="#c026d3"
              stroke="#701a75"
              strokeWidth="3"
            />
            {/* Glowing Rainbow swirls */}
            <path d="M 26 48 Q 50 34 74 48" stroke="#f43f5e" strokeWidth="3" fill="none" opacity="0.9" />
            <path d="M 30 40 Q 50 28 70 40" stroke="#eab308" strokeWidth="3" fill="none" opacity="0.9" />
            <path d="M 36 32 Q 50 24 64 32" stroke="#06b6d4" strokeWidth="2.5" fill="none" opacity="0.9" />
            {/* Spiral Hypno Eyes */}
            <circle cx="42" cy="48" r="5" fill="#fef08a" stroke="#a21caf" strokeWidth="1.5" />
            <circle cx="42" cy="48" r="2.5" fill="#d946ef" className="animate-spin" />
            <circle cx="58" cy="48" r="5" fill="#fef08a" stroke="#a21caf" strokeWidth="1.5" />
            <circle cx="58" cy="48" r="2.5" fill="#d946ef" className="animate-spin" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};
