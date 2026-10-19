import React from 'react';
import { ZombieId } from '../../types/game';

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
  hp = 100,
  maxHp = 100,
  isSlowed = false,
  isEating = false,
  hasSpecialArmor = true,
  hasVaulted = false,
  isHypnotized = false,
  className = 'w-16 h-20',
}) => {
  const hpRatio = hp / maxHp;

  // Base Zombie Body
  const renderBaseBody = () => (
    <>
      {/* Tattered Brown Coat */}
      <path d="M 32 46 L 24 74 L 66 74 L 58 46 Z" fill="#713f12" stroke="#451a03" strokeWidth="2" />
      {/* Dirty Blue Tie */}
      <polygon points="45,46 47,60 45,66 43,60" fill="#dc2626" />
      {/* Blue Slacks */}
      <path d="M 28 74 L 26 95 L 36 95 L 43 74 Z" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
      <path d="M 45 74 L 52 95 L 62 95 L 60 74 Z" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
      {/* Shoes */}
      <ellipse cx="30" cy="95" rx="7" ry="3" fill="#1c1917" />
      <ellipse cx="58" cy="95" rx="7" ry="3" fill="#1c1917" />
      {/* Outstretched Arms */}
      <path d="M 28 50 L 14 56 L 6 62" stroke="#84cc16" strokeWidth="6" strokeLinecap="round" />
    </>
  );

  // Base Zombie Head
  const renderBaseHead = () => (
    <>
      {/* Green Decayed Head */}
      <ellipse cx="45" cy="30" rx="17" ry="19" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2.5" />
      {/* Yellow Bloodshot Eyes */}
      <circle cx="38" cy="27" r="5" fill="#fef08a" stroke="#65a30d" strokeWidth="1.5" />
      <circle cx="39" cy="27" r="2.5" fill="#0f172a" />
      <circle cx="51" cy="28" r="3.5" fill="#fef08a" stroke="#65a30d" strokeWidth="1.5" />
      <circle cx="51.5" cy="28" r="1.8" fill="#0f172a" />
      {/* Tilted Mouth / Rotten Teeth */}
      <path d="M 36 38 Q 45 42 53 36" stroke="#365314" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <polygon points="40,38 42,42 44,38" fill="#fef9c3" />
      <polygon points="47,38 49,42 51,38" fill="#fef9c3" />
    </>
  );

  return (
    <div
      className={`relative flex items-center justify-center animate-zombie-walk ${className} ${
        isSlowed ? 'brightness-110 saturate-150 contrast-125' : ''
      }`}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        {/* Frost Aura overlay when slowed */}
        {isSlowed && (
          <ellipse cx="45" cy="94" rx="35" ry="6" fill="#38bdf8" opacity="0.4" />
        )}

        {/* Normal Basic Zombie */}
        {zombieId === 'basic' && (
          <>
            {renderBaseBody()}
            {renderBaseHead()}
          </>
        )}

        {/* Conehead Zombie */}
        {zombieId === 'conehead' && (
          <>
            {renderBaseBody()}
            {renderBaseHead()}
            {hpRatio > 0.35 && (
              <g>
                <polygon points="45,4 32,24 58,24" fill="#f97316" stroke="#c2410c" strokeWidth="2" />
                <rect x="36" y="14" width="18" height="4" fill="#ffffff" />
                <polygon points="26,24 64,24 62,28 28,28" fill="#ea580c" />
              </g>
            )}
          </>
        )}

        {/* Buckethead Zombie */}
        {zombieId === 'buckethead' && (
          <>
            {renderBaseBody()}
            {renderBaseHead()}
            {hpRatio > 0.25 && (
              <g>
                <path
                  d="M 30 10 L 60 10 L 58 28 L 32 28 Z"
                  fill="#94a3b8"
                  stroke="#475569"
                  strokeWidth="2.5"
                />
                <ellipse cx="45" cy="10" rx="15" ry="3" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
                <path d="M 28 16 Q 45 4 62 16" stroke="#475569" strokeWidth="2" fill="none" />
                <circle cx="38" cy="18" r="1.5" fill="#334155" />
                <circle cx="52" cy="22" r="2" fill="#334155" />
              </g>
            )}
          </>
        )}

        {/* Football Zombie */}
        {zombieId === 'football' && (
          <>
            <path d="M 26 44 L 18 72 L 72 72 L 64 44 Z" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2.5" />
            <text x="45" y="62" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold">
              77
            </text>
            <path d="M 24 72 L 22 95 L 36 95 L 43 72 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 47 72 L 54 95 L 68 95 L 66 72 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <ellipse cx="28" cy="95" rx="8" ry="3" fill="#000000" />
            <ellipse cx="62" cy="95" rx="8" ry="3" fill="#000000" />
            <ellipse cx="45" cy="28" rx="19" ry="17" fill="#dc2626" stroke="#991b1b" strokeWidth="3" />
            <path d="M 45 11 L 45 35" stroke="#ffffff" strokeWidth="3" />
            <ellipse cx="45" cy="32" rx="10" ry="8" fill="#84cc16" />
            <path d="M 37 32 L 53 32" stroke="#475569" strokeWidth="2.5" />
            <path d="M 40 28 L 40 38" stroke="#475569" strokeWidth="2" />
            <path d="M 50 28 L 50 38" stroke="#475569" strokeWidth="2" />
            <circle cx="41" cy="30" r="2.5" fill="#fef08a" />
            <circle cx="49" cy="30" r="2.5" fill="#fef08a" />
          </>
        )}

        {/* Newspaper Zombie */}
        {zombieId === 'newspaper' && (
          <>
            {renderBaseBody()}
            {renderBaseHead()}
            <circle cx="38" cy="27" r="6" stroke="#1e293b" strokeWidth="2" fill="none" />
            <circle cx="51" cy="28" r="5" stroke="#1e293b" strokeWidth="2" fill="none" />
            <path d="M 44 27 L 46 27" stroke="#1e293b" strokeWidth="2" />

            {hasSpecialArmor ? (
              <g>
                <rect x="6" y="52" width="28" height="22" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
                <line x1="10" y1="57" x2="30" y2="57" stroke="#0f172a" strokeWidth="2" />
                <line x1="10" y1="62" x2="30" y2="62" stroke="#64748b" strokeWidth="1" />
                <line x1="10" y1="66" x2="26" y2="66" stroke="#64748b" strokeWidth="1" />
                <line x1="10" y1="70" x2="28" y2="70" stroke="#64748b" strokeWidth="1" />
              </g>
            ) : (
              <g className="animate-pulse">
                <circle cx="39" cy="27" r="4" fill="#ef4444" />
                <circle cx="51" cy="28" r="3" fill="#ef4444" />
              </g>
            )}
          </>
        )}

        {/* Pole Vaulting Zombie */}
        {zombieId === 'polevaulter' && (
          <>
            {/* Athletic orange singlet */}
            <path d="M 30 46 L 24 74 L 66 74 L 60 46 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
            <path d="M 28 74 L 26 95 L 36 95 L 43 74 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <path d="M 45 74 L 52 95 L 62 95 L 60 74 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
            <ellipse cx="30" cy="95" rx="7" ry="3" fill="#000000" />
            <ellipse cx="58" cy="95" rx="7" ry="3" fill="#000000" />
            {renderBaseHead()}
            {/* Long Vaulting Pole in hand (unless already vaulted) */}
            {!hasVaulted && (
              <g>
                <line x1="10" y1="95" x2="75" y2="10" stroke="#facc15" strokeWidth="4" strokeLinecap="round" />
                <circle cx="75" cy="10" r="3" fill="#eab308" />
              </g>
            )}
          </>
        )}

        {/* Screen Door Zombie */}
        {zombieId === 'screendoor' && (
          <>
            {renderBaseBody()}
            {renderBaseHead()}
            {/* Metallic Mesh Screen Door */}
            {hasSpecialArmor && (
              <g>
                <rect x="8" y="25" width="30" height="65" rx="3" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
                <line x1="8" y1="57" x2="38" y2="57" stroke="#475569" strokeWidth="2" />
                <line x1="23" y1="25" x2="23" y2="90" stroke="#475569" strokeWidth="1.5" />
                <rect x="33" y="54" width="3" height="6" fill="#1e293b" />
              </g>
            )}
          </>
        )}

        {/* Disco Zombie */}
        {zombieId === 'disco' && (
          <>
            {/* White Disco Suit with flared collar */}
            <path d="M 30 46 L 22 74 L 68 74 L 60 46 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <polygon points="40,46 45,62 50,46" fill="#ec4899" />
            {/* Gold disco medallion */}
            <circle cx="45" cy="64" r="3" fill="#facc15" />
            {/* White bell-bottom slacks */}
            <path d="M 28 74 L 20 95 L 36 95 L 43 74 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 45 74 L 52 95 L 68 95 L 62 74 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
            <ellipse cx="26" cy="95" rx="8" ry="3" fill="#ffffff" stroke="#94a3b8" />
            <ellipse cx="62" cy="95" rx="8" ry="3" fill="#ffffff" stroke="#94a3b8" />
            {renderBaseHead()}
            {/* Giant Brown Afro Hair */}
            <ellipse cx="45" cy="18" rx="24" ry="16" fill="#3e2723" stroke="#1c1917" strokeWidth="2" />
            {/* Star-shaped Gold Sunglasses */}
            <rect x="32" y="24" width="12" height="7" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <rect x="46" y="24" width="12" height="7" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <line x1="44" y1="27" x2="46" y2="27" stroke="#ca8a04" strokeWidth="1.5" />
          </>
        )}

        {/* Gargantuar Titan */}
        {zombieId === 'gargantuar' && (
          <>
            <path d="M 18 36 L 10 82 L 80 82 L 72 36 Z" fill="#64748b" stroke="#334155" strokeWidth="3" />
            <path d="M 32 46 L 42 56" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="33" y1="52" x2="38" y2="48" stroke="#0f172a" strokeWidth="2" />
            <line x1="37" y1="56" x2="42" y2="52" stroke="#0f172a" strokeWidth="2" />

            <rect x="70" y="8" width="12" height="85" fill="#78350f" stroke="#451a03" strokeWidth="2.5" />
            <line x1="64" y1="20" x2="88" y2="20" stroke="#ca8a04" strokeWidth="4" />
            <circle cx="67" cy="18" r="2.5" fill="#94a3b8" />
            <circle cx="85" cy="18" r="2.5" fill="#94a3b8" />

            <ellipse cx="45" cy="24" rx="22" ry="20" fill="#475569" stroke="#1e293b" strokeWidth="3" />
            <circle cx="38" cy="22" r="5" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
            <circle cx="39" cy="22" r="2" fill="#ffffff" />
            <circle cx="52" cy="24" r="4" fill="#ef4444" stroke="#7f1d1d" strokeWidth="1.5" />
            <circle cx="52" cy="24" r="1.5" fill="#ffffff" />
            <path d="M 34 34 L 56 34" stroke="#0f172a" strokeWidth="3" />
            <rect x="36" y="32" width="4" height="4" fill="#ffffff" />
            <rect x="42" y="32" width="4" height="4" fill="#ffffff" />
            <rect x="48" y="32" width="4" height="4" fill="#ffffff" />
          </>
        )}

        {/* Jack-in-the-Box Zombie */}
        {zombieId === 'jackinbox' && (
          <>
            <path d="M 32 46 L 24 74 L 66 74 L 58 46 Z" fill="#f43f5e" stroke="#9f1239" strokeWidth="2" />
            <circle cx="38" cy="56" r="2.5" fill="#facc15" />
            <circle cx="52" cy="62" r="2.5" fill="#facc15" />
            <path d="M 28 74 L 26 95 L 36 95 L 43 74 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
            <path d="M 45 74 L 52 95 L 62 95 L 60 74 Z" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
            {renderBaseHead()}
            {/* Clown Nose & Colorful Hair Tufts */}
            <circle cx="43" cy="33" r="4.5" fill="#ef4444" />
            <circle cx="28" cy="22" r="6" fill="#06b6d4" />
            <circle cx="62" cy="22" r="6" fill="#06b6d4" />
            {/* Jack-in-the-Box Musical Box */}
            <g className="animate-pulse">
              <rect x="10" y="52" width="26" height="24" rx="2" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
              <polygon points="12,54 22,64 34,54" fill="#ef4444" />
              <line x1="6" y1="62" x2="10" y2="62" stroke="#475569" strokeWidth="2.5" />
              <circle cx="5" cy="62" r="2.5" fill="#ef4444" />
            </g>
          </>
        )}

        {/* Zomboni Driver */}
        {zombieId === 'zomboni' && (
          <>
            {/* Zamboni Vehicle Body */}
            <rect x="6" y="54" width="68" height="34" rx="4" fill="#dc2626" stroke="#991b1b" strokeWidth="3" />
            {/* Front roller and scraper */}
            <rect x="2" y="70" width="10" height="20" rx="2" fill="#64748b" stroke="#334155" strokeWidth="2" />
            <rect x="12" y="82" width="62" height="10" fill="#334155" stroke="#0f172a" strokeWidth="2" />
            {/* Heavy wheels */}
            <circle cx="22" cy="90" r="7" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            <circle cx="60" cy="90" r="7" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            {/* Smokestack */}
            <rect x="64" y="38" width="6" height="20" fill="#475569" />
            <circle cx="67" cy="34" r="3" fill="#cbd5e1" opacity="0.8" className="animate-ping" />
            {/* Driver Cockpit & Steering */}
            <path d="M 44 54 L 48 36 L 70 36 L 72 54 Z" fill="#0284c7" opacity="0.6" stroke="#0369a1" strokeWidth="1.5" />
            {/* Zombie Driver with Winter Trapper Hat */}
            <ellipse cx="58" cy="40" rx="11" ry="12" fill="#84cc16" stroke="#4d7c0f" strokeWidth="2" />
            <path d="M 47 36 C 47 24 69 24 69 36 L 71 46 L 45 46 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
            <circle cx="54" cy="38" r="2" fill="#ef4444" />
            <circle cx="62" cy="38" r="2" fill="#ef4444" />
          </>
        )}

        {/* Pogo Zombie */}
        {zombieId === 'pogo' && (
          <>
            {renderBaseBody()}
            {renderBaseHead()}
            {/* Pogo Chrome Shaft */}
            <line x1="45" y1="46" x2="45" y2="84" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
            {/* Handlebar */}
            <line x1="32" y1="48" x2="58" y2="48" stroke="#64748b" strokeWidth="4" strokeLinecap="round" />
            {/* Foot Pegs */}
            <line x1="36" y1="80" x2="54" y2="80" stroke="#475569" strokeWidth="4" />
            {/* Coiled Heavy Spring */}
            <path d="M 42 84 Q 48 87 42 90 Q 48 93 42 96 L 45 99" stroke="#334155" strokeWidth="3.5" fill="none" />
            <ellipse cx="45" cy="99" rx="5" ry="2" fill="#0f172a" />
          </>
        )}
      </svg>
    </div>
  );
};
