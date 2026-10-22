/**
 * High-fidelity SVG vector definitions for all game entities in Pixi.js.
 * Preserves 100% of the rich cartoon PvZ artwork.
 */

export const SVG_PLANTS: Record<string, string> = {
  sunflower: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 50 65 Q 48 85 50 95" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M 49 78 Q 28 80 25 70 Q 36 68 49 76" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <path d="M 51 82 Q 72 84 75 74 Q 64 72 51 80" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <g style="transform-origin: 50px 48px;">
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(0 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(30 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(60 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(90 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(120 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(150 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(180 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(210 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(240 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(270 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(300 50 48)" />
        <ellipse cx="50" cy="20" rx="7" ry="14" fill="#facc15" stroke="#eab308" stroke-width="2" transform="rotate(330 50 48)" />
      </g>
      <circle cx="50" cy="48" r="21" fill="#78350f" stroke="#451a03" stroke-width="3" />
      <circle cx="50" cy="48" r="19" fill="#92400e" />
      <ellipse cx="43" cy="45" rx="3.5" ry="5.5" fill="#0f172a" />
      <ellipse cx="57" cy="45" rx="3.5" ry="5.5" fill="#0f172a" />
      <circle cx="44.5" cy="43.5" r="1.5" fill="#ffffff" />
      <circle cx="58.5" cy="43.5" r="1.5" fill="#ffffff" />
      <circle cx="38" cy="52" r="3" fill="#f87171" opacity="0.6" />
      <circle cx="62" cy="52" r="3" fill="#f87171" opacity="0.6" />
      <path d="M 44 53 Q 50 60 56 53" stroke="#fef08a" stroke-width="2.5" fill="none" stroke-linecap="round" />
    </svg>
  `,

  peashooter: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 45 65 Q 40 85 45 95" stroke="#16a34a" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <path d="M 32 40 Q 15 28 22 20 Q 35 25 36 38" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <circle cx="45" cy="45" r="22" fill="#4ade80" stroke="#16a34a" stroke-width="3" />
      <ellipse cx="68" cy="45" rx="14" ry="10" fill="#22c55e" stroke="#15803d" stroke-width="3" />
      <ellipse cx="73" cy="45" rx="5" ry="8" fill="#14532d" />
      <circle cx="44" cy="38" r="6" fill="#ffffff" stroke="#166534" stroke-width="1.5" />
      <circle cx="46" cy="38" r="3" fill="#0f172a" />
      <circle cx="47" cy="37" r="1" fill="#ffffff" />
    </svg>
  `,

  wallnut: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="92" rx="28" ry="6" fill="#1e293b" opacity="0.4" />
      <path d="M 50 12 C 72 12 80 40 78 70 C 76 90 64 92 50 92 C 36 92 24 90 22 70 C 20 40 28 12 50 12 Z" fill="#b45309" stroke="#78350f" stroke-width="3.5" />
      <path d="M 50 15 C 68 15 76 42 74 68 C 72 86 62 88 50 88 C 38 88 28 86 26 68 C 24 42 32 15 50 15 Z" fill="#d97706" opacity="0.4" />
      <ellipse cx="40" cy="42" rx="6" ry="8" fill="#ffffff" stroke="#78350f" stroke-width="1.5" />
      <circle cx="42" cy="42" r="3.5" fill="#0f172a" />
      <circle cx="43" cy="40" r="1.2" fill="#ffffff" />
      <ellipse cx="60" cy="42" rx="6" ry="8" fill="#ffffff" stroke="#78350f" stroke-width="1.5" />
      <circle cx="62" cy="42" r="3.5" fill="#0f172a" />
      <circle cx="63" cy="40" r="1.2" fill="#ffffff" />
      <path d="M 44 65 Q 50 69 56 65" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
    </svg>
  `,

  snowpea: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 45 65 Q 40 85 45 95" stroke="#0284c7" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
      <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
      <polygon points="26,38 12,22 28,18" fill="#7dd3fc" stroke="#0284c7" stroke-width="2" />
      <polygon points="34,28 24,10 38,8" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
      <circle cx="45" cy="45" r="22" fill="#38bdf8" stroke="#0284c7" stroke-width="3" />
      <ellipse cx="68" cy="45" rx="14" ry="10" fill="#0284c7" stroke="#0369a1" stroke-width="3" />
      <ellipse cx="73" cy="45" rx="5" ry="8" fill="#082f49" />
      <circle cx="44" cy="38" r="6" fill="#ffffff" stroke="#0369a1" stroke-width="1.5" />
      <circle cx="46" cy="38" r="3" fill="#082f49" />
      <circle cx="47" cy="37" r="1" fill="#ffffff" />
    </svg>
  `,

  repeater: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 45 65 Q 40 85 45 95" stroke="#15803d" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#16a34a" stroke="#166534" stroke-width="2" />
      <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#16a34a" stroke="#166534" stroke-width="2" />
      <path d="M 32 38 Q 12 25 18 16 Q 30 20 34 32" fill="#15803d" stroke="#166534" stroke-width="2" />
      <path d="M 36 30 Q 22 14 30 8 Q 40 12 40 26" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <circle cx="45" cy="45" r="22" fill="#22c55e" stroke="#166534" stroke-width="3" />
      <ellipse cx="68" cy="45" rx="16" ry="11" fill="#16a34a" stroke="#166534" stroke-width="3" />
      <ellipse cx="75" cy="45" rx="5" ry="9" fill="#14532d" />
      <circle cx="44" cy="38" r="6" fill="#ffffff" stroke="#166534" stroke-width="1.5" />
      <circle cx="46" cy="38" r="3" fill="#0f172a" />
      <circle cx="47" cy="37" r="1" fill="#ffffff" />
    </svg>
  `,

  cherrybomb: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 36 45 C 38 20 62 20 64 45" stroke="#15803d" stroke-width="4" fill="none" />
      <path d="M 50 20 L 50 8" stroke="#ca8a04" stroke-width="3" stroke-dasharray="3 2" />
      <circle cx="50" cy="6" r="4.5" fill="#facc15" />
      <circle cx="50" cy="6" r="3" fill="#ef4444" />
      <circle cx="36" cy="58" r="18" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
      <circle cx="30" cy="52" r="3" fill="#ffffff" opacity="0.6" />
      <path d="M 28 50 L 38 54" stroke="#450a0a" stroke-width="2.5" />
      <circle cx="33" cy="56" r="2.5" fill="#0f172a" />
      <circle cx="64" cy="58" r="18" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
      <circle cx="58" cy="52" r="3" fill="#ffffff" opacity="0.6" />
      <path d="M 72 50 L 62 54" stroke="#450a0a" stroke-width="2.5" />
      <circle cx="67" cy="56" r="2.5" fill="#0f172a" />
    </svg>
  `,

  potatomine: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="85" rx="35" ry="12" fill="#78350f" stroke="#451a03" stroke-width="3" />
      <ellipse cx="50" cy="65" rx="26" ry="22" fill="#b45309" stroke="#78350f" stroke-width="3" />
      <ellipse cx="50" cy="60" rx="20" ry="16" fill="#d97706" opacity="0.4" />
      <path d="M 50 43 L 50 22" stroke="#475569" stroke-width="4" stroke-linecap="round" />
      <circle cx="50" cy="18" r="7" fill="#ef4444" stroke="#991b1b" stroke-width="2" />
      <circle cx="52" cy="16" r="2" fill="#ffffff" />
      <circle cx="42" cy="62" r="4.5" fill="#0f172a" />
      <circle cx="43" cy="60" r="1.5" fill="#ffffff" />
      <circle cx="58" cy="62" r="4.5" fill="#0f172a" />
      <circle cx="59" cy="60" r="1.5" fill="#ffffff" />
    </svg>
  `,

  chomper: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 45 65 Q 40 85 45 95" stroke="#15803d" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M 44 80 Q 20 85 18 72 Q 32 70 44 78" fill="#16a34a" stroke="#15803d" stroke-width="2" />
      <path d="M 46 84 Q 70 88 72 75 Q 58 73 46 82" fill="#16a34a" stroke="#15803d" stroke-width="2" />
      <path d="M 30 25 C 60 10 85 20 85 45 C 85 55 70 65 50 65 C 30 65 20 50 30 25 Z" fill="#7e22ce" stroke="#581c87" stroke-width="3" />
      <ellipse cx="65" cy="45" rx="18" ry="12" fill="#3b0764" />
      <polygon points="52,36 56,44 60,36" fill="#ffffff" />
      <polygon points="62,36 66,44 70,36" fill="#ffffff" />
      <polygon points="72,36 76,44 80,36" fill="#ffffff" />
      <polygon points="52,54 56,46 60,54" fill="#ffffff" />
      <polygon points="62,54 66,46 70,54" fill="#ffffff" />
      <polygon points="72,54 76,46 80,54" fill="#ffffff" />
      <circle cx="42" cy="28" r="4" fill="#facc15" stroke="#a16207" stroke-width="1.5" />
      <circle cx="43" cy="28" r="2" fill="#0f172a" />
    </svg>
  `,

  squash: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="90" rx="30" ry="6" fill="#1e293b" opacity="0.4" />
      <path d="M 40 22 C 35 30 30 50 25 70 C 20 85 35 92 50 92 C 65 92 80 85 75 70 C 70 50 65 30 60 22 C 55 18 45 18 40 22 Z" fill="#22c55e" stroke="#15803d" stroke-width="3" />
      <path d="M 48 20 Q 50 10 55 8" stroke="#166534" stroke-width="4" fill="none" stroke-linecap="round" />
      <path d="M 34 46 L 46 50" stroke="#14532d" stroke-width="3.5" stroke-linecap="round" />
      <path d="M 66 46 L 54 50" stroke="#14532d" stroke-width="3.5" stroke-linecap="round" />
      <circle cx="40" cy="56" r="5" fill="#ffffff" stroke="#14532d" stroke-width="1.5" />
      <circle cx="42" cy="56" r="2.5" fill="#0f172a" />
      <circle cx="60" cy="56" r="5" fill="#ffffff" stroke="#14532d" stroke-width="1.5" />
      <circle cx="58" cy="56" r="2.5" fill="#0f172a" />
      <path d="M 44 72 Q 50 68 56 72" stroke="#14532d" stroke-width="3" fill="none" stroke-linecap="round" />
    </svg>
  `,

  jalapeno: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 48 22 C 45 35 35 60 40 85 C 42 92 48 94 52 90 C 60 75 65 50 58 22 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
      <path d="M 52 22 Q 54 10 60 8" stroke="#16a34a" stroke-width="5" fill="none" stroke-linecap="round" />
      <circle cx="46" cy="45" r="3.5" fill="#ffffff" />
      <circle cx="47" cy="45" r="2" fill="#0f172a" />
      <circle cx="54" cy="45" r="3.5" fill="#ffffff" />
      <circle cx="55" cy="45" r="2" fill="#0f172a" />
      <path d="M 46 60 Q 50 56 54 60" stroke="#450a0a" stroke-width="2.5" fill="none" />
      <polygon points="40,28 32,16 46,22" fill="#f97316" />
      <polygon points="56,26 68,14 58,22" fill="#facc15" />
    </svg>
  `,

  spikeweed: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="78" rx="42" ry="12" fill="#15803d" stroke="#14532d" stroke-width="2.5" />
      <polygon points="20,78 26,45 32,78" fill="#64748b" stroke="#334155" stroke-width="2" />
      <polygon points="34,78 42,35 48,78" fill="#94a3b8" stroke="#334155" stroke-width="2" />
      <polygon points="52,78 58,35 66,78" fill="#94a3b8" stroke="#334155" stroke-width="2" />
      <polygon points="68,78 74,45 80,78" fill="#64748b" stroke="#334155" stroke-width="2" />
      <circle cx="44" cy="74" r="3" fill="#facc15" />
      <circle cx="56" cy="74" r="3" fill="#facc15" />
    </svg>
  `,

  torchwood: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="85" rx="32" ry="8" fill="#1e293b" opacity="0.4" />
      <path d="M 30 45 L 26 85 L 74 85 L 70 45 Z" fill="#78350f" stroke="#451a03" stroke-width="3" />
      <ellipse cx="50" cy="45" rx="20" ry="8" fill="#92400e" stroke="#451a03" stroke-width="2" />
      <path d="M 28 40 C 32 15 45 8 50 4 C 55 8 68 15 72 40 C 65 30 58 45 50 35 C 42 45 35 30 28 40 Z" fill="#f97316" stroke="#ea580c" stroke-width="2" />
      <path d="M 36 38 C 40 22 48 14 50 12 C 52 14 60 22 64 38 C 58 32 54 40 50 34 C 46 40 42 32 36 38 Z" fill="#facc15" />
      <circle cx="42" cy="62" r="3.5" fill="#fef08a" />
      <circle cx="58" cy="62" r="3.5" fill="#fef08a" />
    </svg>
  `,

  tallnut: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="94" rx="26" ry="5" fill="#1e293b" opacity="0.4" />
      <path d="M 50 6 C 72 6 78 30 76 65 C 74 92 64 94 50 94 C 36 94 26 92 24 65 C 22 30 28 6 50 6 Z" fill="#92400e" stroke="#451a03" stroke-width="3.5" />
      <ellipse cx="40" cy="36" rx="5" ry="7" fill="#ffffff" stroke="#451a03" stroke-width="1.5" />
      <circle cx="41" cy="36" r="3" fill="#0f172a" />
      <ellipse cx="60" cy="36" rx="5" ry="7" fill="#ffffff" stroke="#451a03" stroke-width="1.5" />
      <circle cx="61" cy="36" r="3" fill="#0f172a" />
      <path d="M 42 54 L 58 54" stroke="#451a03" stroke-width="3" stroke-linecap="round" />
    </svg>
  `,

  fumeshroom: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 42 55 L 40 88 L 60 88 L 58 55 Z" fill="#e9d5ff" stroke="#a855f7" stroke-width="2.5" />
      <ellipse cx="50" cy="42" rx="30" ry="22" fill="#9333ea" stroke="#6b21a8" stroke-width="3" />
      <ellipse cx="74" cy="42" rx="14" ry="10" fill="#7e22ce" stroke="#581c87" stroke-width="2.5" />
      <ellipse cx="82" cy="42" rx="5" ry="8" fill="#3b0764" />
      <circle cx="44" cy="36" r="4" fill="#facc15" stroke="#7e22ce" stroke-width="1.5" />
      <circle cx="45" cy="36" r="2" fill="#0f172a" />
    </svg>
  `,

  melonpult: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 28 65 L 24 88 L 76 88 L 72 65 Z" fill="#15803d" stroke="#166534" stroke-width="3" />
      <path d="M 38 65 L 62 25" stroke="#78350f" stroke-width="6" stroke-linecap="round" />
      <ellipse cx="62" cy="24" rx="18" ry="14" fill="#22c55e" stroke="#15803d" stroke-width="3" transform="rotate(-15 62 24)" />
      <path d="M 48 24 Q 62 16 76 24" stroke="#14532d" stroke-width="2.5" fill="none" />
      <circle cx="38" cy="74" r="5" fill="#facc15" />
      <circle cx="62" cy="74" r="5" fill="#facc15" />
    </svg>
  `,

  hypnoshroom: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <path d="M 44 55 L 42 88 L 58 88 L 56 55 Z" fill="#fdf4ff" stroke="#d946ef" stroke-width="2.5" />
      <ellipse cx="50" cy="42" rx="28" ry="24" fill="#d946ef" stroke="#a21caf" stroke-width="3" />
      <ellipse cx="50" cy="42" rx="20" ry="16" fill="#06b6d4" />
      <ellipse cx="50" cy="42" rx="12" ry="9" fill="#facc15" />
      <circle cx="44" cy="42" r="3" fill="#0f172a" />
      <circle cx="56" cy="42" r="3" fill="#0f172a" />
    </svg>
  `,
};

export const SVG_ZOMBIES: Record<string, string> = {
  basic: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">

      <!-- Ground Shadow -->
      <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />

      <!-- Trailing Leg (Right) -->
      <g>
        <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <path d="M 50 103 C 50 97 66 96 68 100 C 69 104 67 107 58 107 L 50 107 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="50" y1="106" x2="67" y2="106" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Forward Leg (Left - Torn pant with bare green shin) -->
      <g>
        <path d="M 38 72 L 34 88 L 44 88 L 48 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <polygon points="34,86 37,82 40,87 42,82 44,88 34,88" fill="#1e40af" />
        <rect x="37" y="87" width="5" height="11" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <polygon points="34,98 43,98 42,102 33,102" fill="#1e40af" stroke="#1d4ed8" stroke-width="0.8" />
        <path d="M 24 104 C 24 98 40 97 44 101 C 45 105 42 108 32 108 L 24 108 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="24" y1="107" x2="43" y2="107" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Torso & Business Coat -->
      <g>
        <path d="M 36 44 C 30 54 28 64 30 72 C 38 75 60 75 67 72 C 69 64 67 54 62 44 Z" fill="#5c4728" stroke="#362917" stroke-width="2.5" />
        <polygon points="30,72 36,68 42,72 48,68 54,72 60,68 67,72 66,74 30,74" fill="#362917" />
        <polygon points="44,44 49,58 54,44" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8" />
        <polygon points="47,46 51,46 52,65 49,70 46,65" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
        <line x1="47" y1="51" x2="51" y2="50" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="47" y1="57" x2="51" y2="56" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="48" y1="63" x2="50" y2="62" stroke="#fca5a5" stroke-width="0.8" />
      </g>

      <!-- Back Arm -->
      <g>
        <path d="M 54 48 Q 42 56 32 62" stroke="#4a3920" stroke-width="5.5" stroke-linecap="round" fill="none" />
        <circle cx="28" cy="64" r="3.2" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 26 65 L 22 68 M 27 67 L 24 71 M 29 67 L 27 72" stroke="#3d4a34" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Front Arm -->
      <g>
        <path d="M 42 46 C 36 52 32 58 26 64 L 21 61 C 26 54 32 48 38 44 Z" fill="#664f2d" stroke="#362917" stroke-width="1.5" />
        <polygon points="26,64 22,66 26,69 22,70 24,71" fill="#362917" />
        <circle cx="20" cy="71" r="3.5" fill="#758c65" stroke="#3d4a34" stroke-width="1.4" />
        <path d="M 18 72 L 13 75 M 19 74 L 15 78 M 21 74 L 18 79" stroke="#3d4a34" stroke-width="1.6" stroke-linecap="round" />
      </g>

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
</svg>
  `,
  conehead: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -20 120 140" width="120" height="140">

      <!-- Ground Shadow -->
      <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />

      <!-- Trailing Leg (Right) -->
      <g>
        <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <path d="M 50 103 C 50 97 66 96 68 100 C 69 104 67 107 58 107 L 50 107 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="50" y1="106" x2="67" y2="106" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Forward Leg (Left - Torn pant with bare green shin) -->
      <g>
        <path d="M 38 72 L 34 88 L 44 88 L 48 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <polygon points="34,86 37,82 40,87 42,82 44,88 34,88" fill="#1e40af" />
        <rect x="37" y="87" width="5" height="11" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <polygon points="34,98 43,98 42,102 33,102" fill="#1e40af" stroke="#1d4ed8" stroke-width="0.8" />
        <path d="M 24 104 C 24 98 40 97 44 101 C 45 105 42 108 32 108 L 24 108 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="24" y1="107" x2="43" y2="107" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Torso & Business Coat -->
      <g>
        <path d="M 36 44 C 30 54 28 64 30 72 C 38 75 60 75 67 72 C 69 64 67 54 62 44 Z" fill="#5c4728" stroke="#362917" stroke-width="2.5" />
        <polygon points="30,72 36,68 42,72 48,68 54,72 60,68 67,72 66,74 30,74" fill="#362917" />
        <polygon points="44,44 49,58 54,44" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8" />
        <polygon points="47,46 51,46 52,65 49,70 46,65" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
        <line x1="47" y1="51" x2="51" y2="50" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="47" y1="57" x2="51" y2="56" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="48" y1="63" x2="50" y2="62" stroke="#fca5a5" stroke-width="0.8" />
      </g>

      <!-- Back Arm -->
      <g>
        <path d="M 54 48 Q 42 56 32 62" stroke="#4a3920" stroke-width="5.5" stroke-linecap="round" fill="none" />
        <circle cx="28" cy="64" r="3.2" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 26 65 L 22 68 M 27 67 L 24 71 M 29 67 L 27 72" stroke="#3d4a34" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Front Arm -->
      <g>
        <path d="M 42 46 C 36 52 32 58 26 64 L 21 61 C 26 54 32 48 38 44 Z" fill="#664f2d" stroke="#362917" stroke-width="1.5" />
        <polygon points="26,64 22,66 26,69 22,70 24,71" fill="#362917" />
        <circle cx="20" cy="71" r="3.5" fill="#758c65" stroke="#3d4a34" stroke-width="1.4" />
        <path d="M 18 72 L 13 75 M 19 74 L 15 78 M 21 74 L 18 79" stroke="#3d4a34" stroke-width="1.6" stroke-linecap="round" />
      </g>

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Traffic Cone on Head -->
  <polygon points="50,-10 32,15 68,15" fill="#f97316" stroke="#c2410c" stroke-width="2" />
  <ellipse cx="50" cy="15" rx="19" ry="4" fill="#ea580c" stroke="#9a3412" stroke-width="1.5" />
  <polygon points="46,0 38,10 62,10 54,0" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" />
</svg>
  `,
  buckethead: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -15 120 135" width="120" height="135">

      <!-- Ground Shadow -->
      <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />

      <!-- Trailing Leg (Right) -->
      <g>
        <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <path d="M 50 103 C 50 97 66 96 68 100 C 69 104 67 107 58 107 L 50 107 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="50" y1="106" x2="67" y2="106" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Forward Leg (Left - Torn pant with bare green shin) -->
      <g>
        <path d="M 38 72 L 34 88 L 44 88 L 48 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <polygon points="34,86 37,82 40,87 42,82 44,88 34,88" fill="#1e40af" />
        <rect x="37" y="87" width="5" height="11" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <polygon points="34,98 43,98 42,102 33,102" fill="#1e40af" stroke="#1d4ed8" stroke-width="0.8" />
        <path d="M 24 104 C 24 98 40 97 44 101 C 45 105 42 108 32 108 L 24 108 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="24" y1="107" x2="43" y2="107" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Torso & Business Coat -->
      <g>
        <path d="M 36 44 C 30 54 28 64 30 72 C 38 75 60 75 67 72 C 69 64 67 54 62 44 Z" fill="#5c4728" stroke="#362917" stroke-width="2.5" />
        <polygon points="30,72 36,68 42,72 48,68 54,72 60,68 67,72 66,74 30,74" fill="#362917" />
        <polygon points="44,44 49,58 54,44" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8" />
        <polygon points="47,46 51,46 52,65 49,70 46,65" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
        <line x1="47" y1="51" x2="51" y2="50" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="47" y1="57" x2="51" y2="56" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="48" y1="63" x2="50" y2="62" stroke="#fca5a5" stroke-width="0.8" />
      </g>

      <!-- Back Arm -->
      <g>
        <path d="M 54 48 Q 42 56 32 62" stroke="#4a3920" stroke-width="5.5" stroke-linecap="round" fill="none" />
        <circle cx="28" cy="64" r="3.2" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 26 65 L 22 68 M 27 67 L 24 71 M 29 67 L 27 72" stroke="#3d4a34" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Front Arm -->
      <g>
        <path d="M 42 46 C 36 52 32 58 26 64 L 21 61 C 26 54 32 48 38 44 Z" fill="#664f2d" stroke="#362917" stroke-width="1.5" />
        <polygon points="26,64 22,66 26,69 22,70 24,71" fill="#362917" />
        <circle cx="20" cy="71" r="3.5" fill="#758c65" stroke="#3d4a34" stroke-width="1.4" />
        <path d="M 18 72 L 13 75 M 19 74 L 15 78 M 21 74 L 18 79" stroke="#3d4a34" stroke-width="1.6" stroke-linecap="round" />
      </g>

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Galvanized Steel Bucket -->
  <path d="M 32 -2 L 68 -2 L 64 18 L 36 18 Z" fill="#94a3b8" stroke="#475569" stroke-width="2.5" />
  <ellipse cx="50" cy="-2" rx="18" ry="3.5" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
  <ellipse cx="50" cy="18" rx="14" ry="2.5" fill="#64748b" />
  <circle cx="38" cy="7" r="2" fill="#334155" />
  <circle cx="58" cy="9" r="2" fill="#334155" />
  <path d="M 32 4 Q 50 -6 68 4" stroke="#475569" stroke-width="2" fill="none" />
</svg>
  `,
  football: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">
  <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />
  <!-- White Pants & Red Cleats -->
  <path d="M 48 72 L 56 98 L 66 98 L 60 72 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.2" />
  <path d="M 50 103 C 50 97 66 96 68 100 C 69 104 67 107 58 107 L 50 107 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" />
  <path d="M 38 72 L 32 98 L 42 98 L 48 72 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.2" />
  <path d="M 24 104 C 24 98 40 97 44 101 C 45 105 42 108 32 108 L 24 108 Z" fill="#dc2626" stroke="#991b1b" stroke-width="1.5" />
  <!-- Red Football Jersey with Huge Shoulder Pads -->
  <path d="M 28 44 L 20 72 L 78 72 L 70 44 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2.5" />
  <text x="49" y="64" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="900" font-family="sans-serif">77</text>
  <!-- Arms with Red Gloves -->
  <path d="M 40 48 Q 28 58 18 64" stroke="#dc2626" stroke-width="6.5" stroke-linecap="round" fill="none" />
  <circle cx="16" cy="65" r="4.5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
  <!-- Red Football Helmet with White Stripe & Face Grill -->
  <circle cx="50" cy="22" r="18" fill="#dc2626" stroke="#991b1b" stroke-width="2.5" />
  <path d="M 50 4 L 50 25" stroke="#ffffff" stroke-width="3" />
  <ellipse cx="46" cy="23" rx="10" ry="7" fill="#18181b" />
  <circle cx="43" cy="22" r="3" fill="#fef08a" />
  <circle cx="43" cy="22" r="1.5" fill="#09090b" />
  <circle cx="49" cy="22" r="3" fill="#fef08a" />
  <circle cx="49" cy="22" r="1.5" fill="#09090b" />
  <line x1="36" y1="26" x2="56" y2="26" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" />
  <line x1="38" y1="30" x2="54" y2="30" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" />
</svg>
  `,
  newspaper: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">
  <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />
  <!-- Bare legs with Heart Boxers -->
  <path d="M 38 72 L 32 98 L 42 98 L 48 72 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2" />
  <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2" />
  <!-- Slippers -->
  <ellipse cx="32" cy="103" rx="8" ry="4" fill="#18181b" />
  <ellipse cx="62" cy="103" rx="8" ry="4" fill="#18181b" />
  <!-- White Boxer Shorts with Red Hearts -->
  <rect x="34" y="66" width="30" height="14" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" rx="2" />
  <circle cx="40" cy="73" r="2" fill="#ef4444" />
  <circle cx="48" cy="73" r="2" fill="#ef4444" />
  <circle cx="56" cy="73" r="2" fill="#ef4444" />
  <!-- Black Sweater Torso -->
  <path d="M 36 44 C 30 54 28 64 32 68 L 66 68 C 69 64 67 54 62 44 Z" fill="#27272a" stroke="#18181b" stroke-width="2.5" />

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Reading Spectacles on Eyes -->
  <circle cx="40" cy="22" r="7.5" fill="none" stroke="#18181b" stroke-width="1.8" />
  <circle cx="55" cy="21" r="6" fill="none" stroke="#18181b" stroke-width="1.8" />
  <line x1="47" y1="21.5" x2="49" y2="21" stroke="#18181b" stroke-width="2" />
  <!-- Open Broadsheet Newspaper in front -->
  <rect x="10" y="44" width="30" height="32" fill="#f1f5f9" stroke="#475569" stroke-width="1.8" rx="1.5" />
  <line x1="14" y1="50" x2="36" y2="50" stroke="#0f172a" stroke-width="2.5" />
  <line x1="14" y1="56" x2="36" y2="56" stroke="#64748b" stroke-width="1.2" />
  <line x1="14" y1="62" x2="36" y2="62" stroke="#64748b" stroke-width="1.2" />
  <line x1="14" y1="68" x2="30" y2="68" stroke="#64748b" stroke-width="1.2" />
</svg>
  `,
  polevaulter: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">
  <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />
  <!-- Athletic Legs with Running Shorts -->
  <path d="M 38 72 L 32 98 L 42 98 L 48 72 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2" />
  <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2" />
  <rect x="34" y="66" width="30" height="12" fill="#ea580c" stroke="#9a3412" stroke-width="1.5" />
  <ellipse cx="32" cy="103" rx="8" ry="4" fill="#dc2626" />
  <ellipse cx="62" cy="103" rx="8" ry="4" fill="#dc2626" />
  <!-- Orange Running Singlet -->
  <path d="M 38 44 L 34 68 L 64 68 L 60 44 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2" />

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Blue Athletic Headband -->
  <rect x="32" y="14" width="36" height="5" fill="#0284c7" stroke="#0369a1" stroke-width="1" rx="1" />
  <!-- Vaulting Pole -->
  <line x1="6" y1="8" x2="22" y2="105" stroke="#d97706" stroke-width="4.5" stroke-linecap="round" />
  <rect x="12" y="50" width="5" height="10" fill="#ffffff" stroke="#94a3b8" stroke-width="0.8" />
</svg>
  `,
  screendoor: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">

      <!-- Ground Shadow -->
      <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />

      <!-- Trailing Leg (Right) -->
      <g>
        <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <path d="M 50 103 C 50 97 66 96 68 100 C 69 104 67 107 58 107 L 50 107 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="50" y1="106" x2="67" y2="106" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Forward Leg (Left - Torn pant with bare green shin) -->
      <g>
        <path d="M 38 72 L 34 88 L 44 88 L 48 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <polygon points="34,86 37,82 40,87 42,82 44,88 34,88" fill="#1e40af" />
        <rect x="37" y="87" width="5" height="11" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <polygon points="34,98 43,98 42,102 33,102" fill="#1e40af" stroke="#1d4ed8" stroke-width="0.8" />
        <path d="M 24 104 C 24 98 40 97 44 101 C 45 105 42 108 32 108 L 24 108 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="24" y1="107" x2="43" y2="107" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Torso & Business Coat -->
      <g>
        <path d="M 36 44 C 30 54 28 64 30 72 C 38 75 60 75 67 72 C 69 64 67 54 62 44 Z" fill="#5c4728" stroke="#362917" stroke-width="2.5" />
        <polygon points="30,72 36,68 42,72 48,68 54,72 60,68 67,72 66,74 30,74" fill="#362917" />
        <polygon points="44,44 49,58 54,44" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8" />
        <polygon points="47,46 51,46 52,65 49,70 46,65" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
        <line x1="47" y1="51" x2="51" y2="50" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="47" y1="57" x2="51" y2="56" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="48" y1="63" x2="50" y2="62" stroke="#fca5a5" stroke-width="0.8" />
      </g>

      <!-- Back Arm -->
      <g>
        <path d="M 54 48 Q 42 56 32 62" stroke="#4a3920" stroke-width="5.5" stroke-linecap="round" fill="none" />
        <circle cx="28" cy="64" r="3.2" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 26 65 L 22 68 M 27 67 L 24 71 M 29 67 L 27 72" stroke="#3d4a34" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Front Arm -->
      <g>
        <path d="M 42 46 C 36 52 32 58 26 64 L 21 61 C 26 54 32 48 38 44 Z" fill="#664f2d" stroke="#362917" stroke-width="1.5" />
        <polygon points="26,64 22,66 26,69 22,70 24,71" fill="#362917" />
        <circle cx="20" cy="71" r="3.5" fill="#758c65" stroke="#3d4a34" stroke-width="1.4" />
        <path d="M 18 72 L 13 75 M 19 74 L 15 78 M 21 74 L 18 79" stroke="#3d4a34" stroke-width="1.6" stroke-linecap="round" />
      </g>

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Screen Door Shield held in front -->
  <rect x="4" y="24" width="28" height="78" fill="#334155" stroke="#0f172a" stroke-width="2.5" rx="2" />
  <rect x="7" y="28" width="22" height="32" fill="#475569" stroke="#64748b" stroke-width="1" />
  <rect x="7" y="64" width="22" height="32" fill="#475569" stroke="#64748b" stroke-width="1" />
  <line x1="7" y1="28" x2="29" y2="60" stroke="#94a3b8" stroke-width="1" />
  <line x1="29" y1="28" x2="7" y2="60" stroke="#94a3b8" stroke-width="1" />
  <line x1="7" y1="64" x2="29" y2="96" stroke="#94a3b8" stroke-width="1" />
  <line x1="29" y1="64" x2="7" y2="96" stroke="#94a3b8" stroke-width="1" />
  <!-- Door knob -->
  <circle cx="28" cy="62" r="2.5" fill="#facc15" stroke="#a16207" stroke-width="0.8" />
</svg>
  `,
  disco: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">
  <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />
  <!-- Red Flare Disco Pants & White Shoes -->
  <path d="M 38 72 L 28 98 L 44 98 L 48 72 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <path d="M 50 72 L 54 98 L 70 98 L 60 72 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <ellipse cx="32" cy="103" rx="8" ry="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
  <ellipse cx="64" cy="103" rx="8" ry="4" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
  <!-- Red Disco Jacket with Big White Lapels -->
  <path d="M 36 44 L 30 72 L 68 72 L 62 44 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2.5" />
  <polygon points="40,44 48,60 45,44" fill="#ffffff" />
  <polygon points="58,44 50,60 53,44" fill="#ffffff" />
  <!-- Raised Dancing Arm -->
  <path d="M 34 46 Q 24 38 18 24" stroke="#dc2626" stroke-width="5" stroke-linecap="round" fill="none" />
  <circle cx="17" cy="22" r="3.5" fill="#ffffff" />

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Big Black Afro Hairstyle -->
  <circle cx="50" cy="18" r="20" fill="#18181b" stroke="#09090b" stroke-width="2" />
  <circle cx="34" cy="18" r="10" fill="#18181b" />
  <circle cx="66" cy="18" r="10" fill="#18181b" />
  <circle cx="50" cy="6" r="10" fill="#18181b" />
</svg>
  `,
  gargantuar: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 130" width="120" height="130">
  <ellipse cx="60" cy="122" rx="40" ry="6" fill="#1e293b" opacity="0.4" />
  <!-- Massive Muscular Legs -->
  <path d="M 36 78 L 28 116 L 52 116 L 56 78 Z" fill="#1e293b" stroke="#0f172a" stroke-width="3" />
  <path d="M 64 78 L 70 116 L 94 116 L 86 78 Z" fill="#1e293b" stroke="#0f172a" stroke-width="3" />
  <!-- Giant Ripped Torso -->
  <path d="M 22 40 L 16 80 L 96 80 L 90 40 Z" fill="#3f3f46" stroke="#18181b" stroke-width="3" />
  <!-- Telephone Pole Club -->
  <rect x="4" y="10" width="18" height="105" fill="#78350f" stroke="#451a03" stroke-width="3" rx="2" />
  <rect x="0" y="24" width="26" height="8" fill="#71717a" stroke="#27272a" stroke-width="1.5" />
  <!-- Huge Gray Head -->
  <ellipse cx="56" cy="24" rx="22" ry="20" fill="#52525b" stroke="#27272a" stroke-width="3" />
  <!-- Glowing Red Eyes -->
  <circle cx="48" cy="22" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5" />
  <circle cx="48" cy="22" r="2" fill="#ffffff" />
  <circle cx="64" cy="22" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5" />
  <circle cx="64" cy="22" r="2" fill="#ffffff" />
  <!-- Grimace -->
  <path d="M 44 34 Q 56 38 68 34" stroke="#18181b" stroke-width="3" fill="none" stroke-linecap="round" />
</svg>
  `,
  jackinbox: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115" width="100" height="115">
  <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />
  <!-- White Straitjacket Pants -->
  <path d="M 38 72 L 32 98 L 44 98 L 48 72 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
  <path d="M 50 72 L 54 98 L 66 98 L 60 72 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
  <!-- White Straitjacket Body with Leather Straps -->
  <path d="M 36 44 L 30 72 L 68 72 L 62 44 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
  <line x1="32" y1="52" x2="66" y2="52" stroke="#78350f" stroke-width="2" />
  <line x1="31" y1="60" x2="67" y2="60" stroke="#78350f" stroke-width="2" />

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Jack-in-the-Box held in front -->
  <rect x="8" y="50" width="26" height="26" fill="#dc2626" stroke="#991b1b" stroke-width="2" rx="2" />
  <polygon points="12,54 16,62 8,62" fill="#facc15" />
  <polygon points="26,54 30,62 22,62" fill="#facc15" />
  <!-- Hand Crank -->
  <line x1="8" y1="62" x2="2" y2="62" stroke="#94a3b8" stroke-width="2" />
  <circle cx="2" cy="62" r="2.5" fill="#facc15" />
</svg>
  `,
  zomboni: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 115" width="120" height="115">
  <ellipse cx="60" cy="108" rx="45" ry="5" fill="#1e293b" opacity="0.4" />
  <!-- Blue Ice Resurfacer Machine -->
  <path d="M 10 65 L 110 65 L 105 100 L 15 100 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="3" />
  <!-- Big Red Z on hood -->
  <path d="M 25 72 L 55 72 L 25 93 L 55 93" stroke="#dc2626" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  <!-- Wheels -->
  <circle cx="32" cy="100" r="10" fill="#18181b" stroke="#09090b" stroke-width="2" />
  <circle cx="32" cy="100" r="4" fill="#94a3b8" />
  <circle cx="90" cy="100" r="10" fill="#18181b" stroke="#09090b" stroke-width="2" />
  <circle cx="90" cy="100" r="4" fill="#94a3b8" />
  <!-- Driver Head with Red Beanie -->
  <circle cx="85" cy="46" r="14" fill="#758c65" stroke="#3d4a34" stroke-width="2" />
  <circle cx="80" cy="45" r="4" fill="#ffffff" />
  <circle cx="80" cy="45" r="1.5" fill="#09090b" />
  <path d="M 70 38 Q 85 24 100 38 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <circle cx="85" cy="26" r="3.5" fill="#ef4444" />
</svg>
  `,
  pogo: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125" width="100" height="125">
  <ellipse cx="50" cy="120" rx="16" ry="3.5" fill="#1e293b" opacity="0.35" />

      <!-- Ground Shadow -->
      <ellipse cx="50" cy="107" rx="26" ry="4.5" fill="#1e293b" opacity="0.35" />

      <!-- Trailing Leg (Right) -->
      <g>
        <path d="M 50 72 L 56 98 L 66 98 L 60 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <path d="M 50 103 C 50 97 66 96 68 100 C 69 104 67 107 58 107 L 50 107 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="50" y1="106" x2="67" y2="106" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Forward Leg (Left - Torn pant with bare green shin) -->
      <g>
        <path d="M 38 72 L 34 88 L 44 88 L 48 72 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="2.2" />
        <polygon points="34,86 37,82 40,87 42,82 44,88 34,88" fill="#1e40af" />
        <rect x="37" y="87" width="5" height="11" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <polygon points="34,98 43,98 42,102 33,102" fill="#1e40af" stroke="#1d4ed8" stroke-width="0.8" />
        <path d="M 24 104 C 24 98 40 97 44 101 C 45 105 42 108 32 108 L 24 108 Z" fill="#291e14" stroke="#120c06" stroke-width="1.5" />
        <line x1="24" y1="107" x2="43" y2="107" stroke="#120c06" stroke-width="1.5" />
      </g>

      <!-- Torso & Business Coat -->
      <g>
        <path d="M 36 44 C 30 54 28 64 30 72 C 38 75 60 75 67 72 C 69 64 67 54 62 44 Z" fill="#5c4728" stroke="#362917" stroke-width="2.5" />
        <polygon points="30,72 36,68 42,72 48,68 54,72 60,68 67,72 66,74 30,74" fill="#362917" />
        <polygon points="44,44 49,58 54,44" fill="#f8fafc" stroke="#cbd5e1" stroke-width="0.8" />
        <polygon points="47,46 51,46 52,65 49,70 46,65" fill="#dc2626" stroke="#991b1b" stroke-width="1" />
        <line x1="47" y1="51" x2="51" y2="50" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="47" y1="57" x2="51" y2="56" stroke="#fca5a5" stroke-width="0.8" />
        <line x1="48" y1="63" x2="50" y2="62" stroke="#fca5a5" stroke-width="0.8" />
      </g>

      <!-- Back Arm -->
      <g>
        <path d="M 54 48 Q 42 56 32 62" stroke="#4a3920" stroke-width="5.5" stroke-linecap="round" fill="none" />
        <circle cx="28" cy="64" r="3.2" fill="#758c65" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 26 65 L 22 68 M 27 67 L 24 71 M 29 67 L 27 72" stroke="#3d4a34" stroke-width="1.5" stroke-linecap="round" />
      </g>

      <!-- Front Arm -->
      <g>
        <path d="M 42 46 C 36 52 32 58 26 64 L 21 61 C 26 54 32 48 38 44 Z" fill="#664f2d" stroke="#362917" stroke-width="1.5" />
        <polygon points="26,64 22,66 26,69 22,70 24,71" fill="#362917" />
        <circle cx="20" cy="71" r="3.5" fill="#758c65" stroke="#3d4a34" stroke-width="1.4" />
        <path d="M 18 72 L 13 75 M 19 74 L 15 78 M 21 74 L 18 79" stroke="#3d4a34" stroke-width="1.6" stroke-linecap="round" />
      </g>

      <!-- Zombie Head -->
      <g>
        <path d="M 44 38 L 44 45 L 52 45 L 52 38 Z" fill="#55664a" />
        <path d="M 33 24 C 29 12 39 3 53 3 C 65 3 71 13 67 24 C 64 32 57 36 47 37 C 39 37 35 32 33 24 Z" fill="#758c65" stroke="#3d4a34" stroke-width="2.5" />
        <path d="M 43 5 Q 39 -2 33 1" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 51 4 Q 55 -3 61 0" stroke="#18181b" stroke-width="1.8" fill="none" stroke-linecap="round" />
        <path d="M 57 6 Q 65 1 67 6" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
        <path d="M 66 18 C 70 18 71 22 67 25 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1.2" />
        <path d="M 36 13 Q 47 10 57 13" stroke="#3d4a34" stroke-width="1.6" fill="none" opacity="0.6" stroke-linecap="round" />
        <path d="M 34 17 Q 45 14 55 17" stroke="#3d4a34" stroke-width="1.4" fill="none" opacity="0.6" stroke-linecap="round" />
        <circle cx="55" cy="21" r="5.2" fill="#f8fafc" stroke="#3d4a34" stroke-width="1.8" />
        <circle cx="55" cy="22" r="2" fill="#0f172a" />
        <circle cx="55.8" cy="21.2" r="0.8" fill="#ffffff" />
        <path d="M 50 20 Q 55 23 60 20 C 60 17 50 17 50 20 Z" fill="#5c6e4f" stroke="#3d4a34" stroke-width="1" />
        <circle cx="40" cy="22" r="6.5" fill="#f8fafc" stroke="#3d4a34" stroke-width="2" />
        <path d="M 35 19 Q 37 21 36 24" stroke="#dc2626" stroke-width="0.8" fill="none" opacity="0.8" />
        <circle cx="39.5" cy="22.5" r="2.5" fill="#0f172a" />
        <circle cx="40.5" cy="21.5" r="1.1" fill="#ffffff" />
        <circle cx="36" cy="27.5" r="0.8" fill="#1e261a" />
        <circle cx="38.5" cy="28" r="0.7" fill="#1e261a" />
        <path d="M 31 30 Q 43 34 51 29 C 52 37 42 39 32 35 Z" fill="#240e13" stroke="#3d4a34" stroke-width="1.8" />
        <rect x="34" y="30.2" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="41" y="30.8" width="2.6" height="2.4" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="37" y="34" width="2.4" height="2.6" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
        <rect x="44" y="33.5" width="2.2" height="2.5" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" rx="0.4" />
      </g>
  <!-- Pogo Stick Frame & Spring -->
  <line x1="50" y1="55" x2="50" y2="105" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
  <!-- Spring coils -->
  <path d="M 45 105 L 55 107 L 45 109 L 55 111 L 45 113 L 55 115 L 50 118" stroke="#64748b" stroke-width="3" fill="none" />
  <!-- Foot peg -->
  <rect x="40" y="102" width="20" height="4" fill="#ef4444" stroke="#991b1b" stroke-width="1" rx="1" />
</svg>
  `,
};

export const SVG_HAZARDS: Record<string, string> = {
  tombstone: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="85" rx="36" ry="10" fill="#451a03" stroke="#290e02" stroke-width="2" />
      <polygon points="25,84 30,76 35,84" fill="#15803d" />
      <polygon points="65,84 70,78 75,84" fill="#15803d" />
      <path d="M 28 85 L 28 35 C 28 15 72 15 72 35 L 72 85 Z" fill="#64748b" stroke="#334155" stroke-width="3.5" />
      <path d="M 33 80 L 33 36 C 33 22 67 22 67 36 L 67 80 Z" fill="#475569" opacity="0.8" />
      <path d="M 50 32 L 50 56 M 40 40 L 60 40" stroke="#1e293b" stroke-width="3" stroke-linecap="round" />
      <text x="50" y="68" text-anchor="middle" fill="#1e293b" font-size="10" font-weight="bold" font-family="sans-serif">R.I.P.</text>
    </svg>
  `,

  crater: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="60" rx="38" ry="18" fill="#1c1917" stroke="#0c0a09" stroke-width="3" />
      <ellipse cx="50" cy="60" rx="28" ry="12" fill="#0c0a09" />
    </svg>
  `,

  toxic_puddle: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="62" rx="40" ry="18" fill="#15803d" stroke="#166534" stroke-width="2.5" />
      <ellipse cx="50" cy="62" rx="30" ry="12" fill="#22c55e" />
      <circle cx="38" cy="58" r="4" fill="#86efac" />
      <circle cx="62" cy="64" r="3" fill="#86efac" />
    </svg>
  `,
};

export const SVG_PROJECTILES: Record<string, string> = {
  pea: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <circle cx="20" cy="20" r="14" fill="#22c55e" stroke="#16a34a" stroke-width="2.5" />
      <circle cx="16" cy="15" r="4.5" fill="#86efac" />
      <circle cx="15" cy="14" r="2" fill="#ffffff" />
    </svg>
  `,

  frostpea: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <circle cx="20" cy="20" r="15" fill="#38bdf8" stroke="#0284c7" stroke-width="2.5" />
      <polygon points="20,2 24,12 34,16 26,24 28,34 20,28 12,34 14,24 6,16 16,12" fill="#e0f2fe" opacity="0.7" />
      <circle cx="20" cy="20" r="9" fill="#0284c7" />
      <circle cx="17" cy="16" r="3" fill="#ffffff" />
    </svg>
  `,

  firepea: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <circle cx="20" cy="20" r="16" fill="#ef4444" stroke="#b91c1c" stroke-width="2" />
      <ellipse cx="14" cy="20" rx="10" ry="6" fill="#f97316" />
      <circle cx="20" cy="20" r="9" fill="#facc15" />
      <circle cx="18" cy="17" r="3.5" fill="#ffffff" />
    </svg>
  `,

  melon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <ellipse cx="20" cy="20" rx="16" ry="12" fill="#15803d" stroke="#166534" stroke-width="2" transform="rotate(-15 20 20)" />
      <path d="M 8 20 Q 20 14 32 20" stroke="#22c55e" stroke-width="2" fill="none" />
      <path d="M 10 24 Q 20 28 30 24" stroke="#22c55e" stroke-width="2" fill="none" />
    </svg>
  `,

  spore: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
      <circle cx="20" cy="20" r="14" fill="#a855f7" stroke="#7e22ce" stroke-width="2" />
      <circle cx="20" cy="20" r="8" fill="#d946ef" />
      <circle cx="17" cy="16" r="3" fill="#ffffff" />
    </svg>
  `,
};

export const SVG_LAWNMOWER = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80">
    <ellipse cx="40" cy="72" rx="28" ry="4" fill="#0f172a" opacity="0.4" />
    <path d="M 22 36 L 62 36 L 58 64 L 26 64 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
    <rect x="34" y="28" width="18" height="12" fill="#94a3b8" stroke="#475569" stroke-width="2" rx="2" />
    <circle cx="26" cy="62" r="9" fill="#1e293b" stroke="#0f172a" stroke-width="2" />
    <circle cx="26" cy="62" r="4" fill="#94a3b8" />
    <circle cx="58" cy="62" r="9" fill="#1e293b" stroke="#0f172a" stroke-width="2" />
    <circle cx="58" cy="62" r="4" fill="#94a3b8" />
    <line x1="24" y1="36" x2="16" y2="18" stroke="#475569" stroke-width="4" stroke-linecap="round" />
    <circle cx="16" cy="18" r="4" fill="#dc2626" />
  </svg>
`;
