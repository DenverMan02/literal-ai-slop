import React from 'react';

interface LawnMowerProps {
  isAvailable: boolean;
  isTriggered: boolean;
  className?: string;
}

export const LawnMower: React.FC<LawnMowerProps> = ({
  isAvailable,
  isTriggered,
  className = 'w-12 h-10',
}) => {
  if (!isAvailable && !isTriggered) {
    return <div className={`opacity-20 ${className}`} />;
  }

  return (
    <div
      className={`relative flex items-center justify-center transition-all ${
        isTriggered ? 'animate-pulse' : ''
      } ${className}`}
      title={isAvailable ? 'Lawn Mower: Emergency lane defense' : 'Mower deployed'}
    >
      <svg viewBox="0 0 60 50" className="w-full h-full drop-shadow">
        {/* Red Mower Body */}
        <rect x="12" y="15" width="34" height="20" rx="4" fill="#dc2626" stroke="#991b1b" strokeWidth="2" />
        {/* Engine Hood / Silver Accents */}
        <rect x="22" y="10" width="16" height="8" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        <line x1="26" y1="12" x2="34" y2="12" stroke="#334155" strokeWidth="1" />
        <line x1="26" y1="15" x2="34" y2="15" stroke="#334155" strokeWidth="1" />
        {/* Wheels */}
        <circle cx="16" cy="38" r="7" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
        <circle cx="16" cy="38" r="3" fill="#cbd5e1" />
        <circle cx="42" cy="38" r="7" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
        <circle cx="42" cy="38" r="3" fill="#cbd5e1" />
        {/* Handle Bar */}
        <path d="M 14 18 L 4 8 L 8 4" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Spinning blade glow when triggered */}
        {isTriggered && (
          <ellipse cx="48" cy="32" rx="10" ry="14" fill="#facc15" opacity="0.7" className="animate-spin" />
        )}
      </svg>
    </div>
  );
};
