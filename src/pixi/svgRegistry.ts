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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 125" width="120" height="136">
  <ellipse cx="56" cy="116" rx="34" ry="6" fill="#1e293b" opacity="0.35" />

  <!-- Back Arm -->
  <g id="back-arm">
    <path d="M 60 48 Q 45 44 28 44" stroke="#78350f" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="20" cy="44" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <path d="M 16 41 L 9 40 M 15 44 L 8 44 M 16 47 L 10 49" stroke="#15803d" stroke-width="2.2" stroke-linecap="round" />
  </g>

  <!-- Trailing Leg (Right leg - back) -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Hunched Torso & Brown Suit Jacket -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" stroke-linejoin="round" />
    <polygon points="38,74 43,69 49,75 55,69 61,74 68,71 67,73 38,76" fill="#451a03" />
    <polygon points="45,43 49,58 55,43" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <polygon points="42,42 46,48 47,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="57,42 53,48 52,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="48,45 52,45 54,64 50,70 46,64" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" stroke-linejoin="round" />
    <line x1="48" y1="52" x2="53" y2="50" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
    <line x1="48" y1="59" x2="53" y2="57" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
  </g>


  <!-- Forward Leg (Left leg - with torn pant & bare green knee) -->
  <g id="front-leg">
    <path d="M 40 72 L 32 90 L 44 90 L 48 72 Z" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" stroke-linejoin="round" />
    <polygon points="32,90 35,84 38,91 41,85 44,90" fill="#1d4ed8" />
    <rect x="34" y="89" width="7" height="15" rx="3" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <polygon points="33,103 42,103 41,106 32,106" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Near Arm (reaching forward) -->
  <g id="front-arm">
    <path d="M 46 48 Q 28 58 15 52" stroke="#b45309" stroke-width="9.5" stroke-linecap="round" fill="none" />
    <polygon points="21,48 16,53 20,56 16,59 19,60" fill="#451a03" />
    <circle cx="10" cy="52" r="6" fill="#84cc16" stroke="#15803d" stroke-width="2.2" />
    <path d="M 6 48 Q 0 46 -4 49" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <path d="M 5 52 Q -1 52 -5 55" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <path d="M 6 56 Q 1 59 -3 62" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
  </g>


  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 40 2 Q 35 -6 28 -2" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 48 1 Q 53 -7 60 -3" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 56 4 Q 65 -1 68 5" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" fill="none" />

    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

</svg>
  `,
  conehead: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 135" width="120" height="147">
  <ellipse cx="56" cy="126" rx="34" ry="6" fill="#1e293b" opacity="0.35" />
  <g transform="translate(0, 10)">

  <!-- Back Arm -->
  <g id="back-arm">
    <path d="M 60 48 Q 45 44 28 44" stroke="#78350f" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="20" cy="44" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <path d="M 16 41 L 9 40 M 15 44 L 8 44 M 16 47 L 10 49" stroke="#15803d" stroke-width="2.2" stroke-linecap="round" />
  </g>

  <!-- Trailing Leg (Right leg - back) -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Hunched Torso & Brown Suit Jacket -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" stroke-linejoin="round" />
    <polygon points="38,74 43,69 49,75 55,69 61,74 68,71 67,73 38,76" fill="#451a03" />
    <polygon points="45,43 49,58 55,43" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <polygon points="42,42 46,48 47,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="57,42 53,48 52,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="48,45 52,45 54,64 50,70 46,64" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" stroke-linejoin="round" />
    <line x1="48" y1="52" x2="53" y2="50" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
    <line x1="48" y1="59" x2="53" y2="57" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
  </g>


  <!-- Forward Leg (Left leg - with torn pant & bare green knee) -->
  <g id="front-leg">
    <path d="M 40 72 L 32 90 L 44 90 L 48 72 Z" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" stroke-linejoin="round" />
    <polygon points="32,90 35,84 38,91 41,85 44,90" fill="#1d4ed8" />
    <rect x="34" y="89" width="7" height="15" rx="3" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <polygon points="33,103 42,103 41,106 32,106" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Near Arm (reaching forward) -->
  <g id="front-arm">
    <path d="M 46 48 Q 28 58 15 52" stroke="#b45309" stroke-width="9.5" stroke-linecap="round" fill="none" />
    <polygon points="21,48 16,53 20,56 16,59 19,60" fill="#451a03" />
    <circle cx="10" cy="52" r="6" fill="#84cc16" stroke="#15803d" stroke-width="2.2" />
    <path d="M 6 48 Q 0 46 -4 49" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <path d="M 5 52 Q -1 52 -5 55" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <path d="M 6 56 Q 1 59 -3 62" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
  </g>


  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

    <!-- Traffic Cone on Head -->
    <g id="cone" transform="rotate(-6 48 10)">
      <polygon points="48,-16 32,15 66,15" fill="#f97316" stroke="#c2410c" stroke-width="2.5" stroke-linejoin="round" />
      <polygon points="45,-3 37,10 61,10 53,-3" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
      <ellipse cx="49" cy="15" rx="19" ry="4.5" fill="#ea580c" stroke="#9a3412" stroke-width="2" />
    </g>
  </g>
</svg>
  `,
  buckethead: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 130" width="120" height="142">
  <ellipse cx="56" cy="121" rx="34" ry="6" fill="#1e293b" opacity="0.35" />
  <g transform="translate(0, 5)">

  <!-- Back Arm -->
  <g id="back-arm">
    <path d="M 60 48 Q 45 44 28 44" stroke="#78350f" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="20" cy="44" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <path d="M 16 41 L 9 40 M 15 44 L 8 44 M 16 47 L 10 49" stroke="#15803d" stroke-width="2.2" stroke-linecap="round" />
  </g>

  <!-- Trailing Leg (Right leg - back) -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Hunched Torso & Brown Suit Jacket -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" stroke-linejoin="round" />
    <polygon points="38,74 43,69 49,75 55,69 61,74 68,71 67,73 38,76" fill="#451a03" />
    <polygon points="45,43 49,58 55,43" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <polygon points="42,42 46,48 47,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="57,42 53,48 52,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="48,45 52,45 54,64 50,70 46,64" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" stroke-linejoin="round" />
    <line x1="48" y1="52" x2="53" y2="50" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
    <line x1="48" y1="59" x2="53" y2="57" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
  </g>


  <!-- Forward Leg (Left leg - with torn pant & bare green knee) -->
  <g id="front-leg">
    <path d="M 40 72 L 32 90 L 44 90 L 48 72 Z" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" stroke-linejoin="round" />
    <polygon points="32,90 35,84 38,91 41,85 44,90" fill="#1d4ed8" />
    <rect x="34" y="89" width="7" height="15" rx="3" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <polygon points="33,103 42,103 41,106 32,106" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Near Arm (reaching forward) -->
  <g id="front-arm">
    <path d="M 46 48 Q 28 58 15 52" stroke="#b45309" stroke-width="9.5" stroke-linecap="round" fill="none" />
    <polygon points="21,48 16,53 20,56 16,59 19,60" fill="#451a03" />
    <circle cx="10" cy="52" r="6" fill="#84cc16" stroke="#15803d" stroke-width="2.2" />
    <path d="M 6 48 Q 0 46 -4 49" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <path d="M 5 52 Q -1 52 -5 55" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
    <path d="M 6 56 Q 1 59 -3 62" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" fill="none" />
  </g>


  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

    <!-- Galvanized Metal Bucket -->
    <g id="bucket" transform="rotate(-8 48 12)">
      <polygon points="30,-10 68,-10 63,16 33,16" fill="#94a3b8" stroke="#475569" stroke-width="2.5" stroke-linejoin="round" />
      <!-- Rim & Highlight -->
      <path d="M 33 16 C 33 13 63 13 63 16 C 63 19 33 19 33 16 Z" fill="#cbd5e1" stroke="#475569" stroke-width="1.8" />
      <ellipse cx="49" cy="-10" rx="19" ry="4" fill="#64748b" stroke="#334155" stroke-width="2" />
      <path d="M 36 -6 L 38 12" stroke="#cbd5e1" stroke-width="2" opacity="0.75" />
      <!-- Handle -->
      <path d="M 31 16 Q 22 25 35 34" stroke="#475569" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <circle cx="31" cy="16" r="2.5" fill="#334155" />
    </g>
  </g>
</svg>
  `,
  football: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 125" width="120" height="136">
  <ellipse cx="56" cy="116" rx="36" ry="6" fill="#1e293b" opacity="0.35" />
  <!-- Back Arm with red sleeve -->
  <g id="back-arm">
    <path d="M 60 48 Q 45 44 28 44" stroke="#991b1b" stroke-width="10" stroke-linecap="round" fill="none" />
    <circle cx="20" cy="44" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  </g>
  <!-- Trailing Leg with white athletic pants -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#0f172a" stroke="#000000" stroke-width="2.2" />
  </g>
  <!-- Massive Padded Football Torso -->
  <g id="torso">
    <path d="M 42 42 C 34 50 32 64 36 74 C 48 78 64 78 70 72 C 76 60 74 46 60 40 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 38 42 Q 52 38 64 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" fill="none" />
    <!-- Jersey Number 77 -->
    <text x="50" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="#ffffff" text-anchor="middle">77</text>
  </g>
  <!-- Forward Leg (Padded pants & cleats) -->
  <g id="front-leg">
    <path d="M 38 72 L 30 106 L 42 106 L 48 72 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="2.5" stroke-linejoin="round" />
    <line x1="34" y1="80" x2="33" y2="100" stroke="#dc2626" stroke-width="3" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#0f172a" stroke="#000000" stroke-width="2.2" />
  </g>
  <!-- Front Arm with big padded shoulder -->
  <g id="front-arm">
    <path d="M 48 46 Q 30 56 16 50" stroke="#dc2626" stroke-width="11" stroke-linecap="round" fill="none" />
    <circle cx="10" cy="50" r="6" fill="#84cc16" stroke="#15803d" stroke-width="2.2" />
    <path d="M 6 46 L 0 44 M 5 50 L -1 50 M 6 54 L 1 57" stroke="#15803d" stroke-width="2.8" stroke-linecap="round" />
  </g>
  <!-- Zombie Head with Football Helmet & Grill -->
  <g id="head">
    <path d="M 43 42 L 38 32 L 48 32 L 51 42 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" />
    <!-- Helmet Dome -->
    <path d="M 24 22 C 18 10 28 0 48 0 C 66 0 72 10 70 24 C 68 34 60 40 48 40 C 32 40 26 32 24 22 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 46 1 Q 48 20 48 38" stroke="#ffffff" stroke-width="4" fill="none" />
    <!-- Face opening & zombie eyes -->
    <ellipse cx="40" cy="22" rx="14" ry="10" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <circle cx="36" cy="20" r="6" fill="#ffffff" stroke="#15803d" stroke-width="2" />
    <circle cx="37" cy="20.5" r="3" fill="#0f172a" />
    <circle cx="38" cy="19" r="1.2" fill="#ffffff" />
    <!-- Metal Grill Bars -->
    <path d="M 28 26 L 48 26 M 30 30 L 46 30 M 34 22 L 34 33 M 42 22 L 42 33" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" />
  </g>
</svg>
  `,
  newspaper: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 125" width="120" height="136">
  <ellipse cx="56" cy="116" rx="34" ry="6" fill="#1e293b" opacity="0.35" />
  <!-- Back Arm & leg (in boxers) -->
  <g id="back-arm">
    <path d="M 58 48 Q 45 44 26 44" stroke="#65a30d" stroke-width="7" stroke-linecap="round" fill="none" />
  </g>
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#84cc16" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#64748b" stroke="#334155" stroke-width="2.2" />
  </g>
  <!-- Torso: White undershirt & Boxer shorts with red hearts -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 60 38 66 C 48 68 62 68 68 64 C 72 56 70 48 58 42 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2.5" />
    <!-- Boxers with hearts -->
    <path d="M 37 65 L 34 78 L 47 78 L 50 67 L 54 78 L 67 78 L 68 64 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
    <circle cx="41" cy="71" r="2.2" fill="#ef4444" />
    <circle cx="43" cy="71" r="2.2" fill="#ef4444" />
    <polygon points="39,72 45,72 42,76" fill="#ef4444" />
    <circle cx="60" cy="71" r="2.2" fill="#ef4444" />
    <circle cx="62" cy="71" r="2.2" fill="#ef4444" />
    <polygon points="58,72 64,72 61,76" fill="#ef4444" />
  </g>
  <!-- Forward Leg (bare green leg & slipper) -->
  <g id="front-leg">
    <path d="M 40 76 L 32 106 L 44 106 L 48 76 Z" fill="#84cc16" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#64748b" stroke="#334155" stroke-width="2.2" />
  </g>
  <!-- Front Arm holding Newspaper -->
  <g id="front-arm">
    <path d="M 46 48 Q 30 52 18 50" stroke="#84cc16" stroke-width="8" stroke-linecap="round" fill="none" />
    <!-- The Newspaper -->
    <g id="newspaper" transform="rotate(-5 20 54)">
      <rect x="2" y="36" width="30" height="38" rx="2" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
      <rect x="4" y="38" width="26" height="6" fill="#ca8a04" />
      <text x="17" y="43" font-family="Arial, sans-serif" font-weight="900" font-size="4" fill="#ffffff" text-anchor="middle">DAILY BRAINZ</text>
      <line x1="6" y1="48" x2="28" y2="48" stroke="#78350f" stroke-width="1.2" />
      <line x1="6" y1="52" x2="28" y2="52" stroke="#78350f" stroke-width="1.2" />
      <line x1="6" y1="56" x2="28" y2="56" stroke="#78350f" stroke-width="1.2" />
      <rect x="6" y="60" width="10" height="10" fill="#eab308" />
    </g>
    <!-- Hand gripping paper -->
    <circle cx="16" cy="52" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  </g>
  <!-- Head with Reading Glasses -->
  <g id="head">

  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 40 2 Q 35 -6 28 -2" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 48 1 Q 53 -7 60 -3" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 56 4 Q 65 -1 68 5" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" fill="none" />

    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

    <!-- Round Reading Glasses -->
    <circle cx="35" cy="19" r="9" fill="none" stroke="#0f172a" stroke-width="2" />
    <circle cx="52" cy="19" r="7" fill="none" stroke="#0f172a" stroke-width="1.8" />
    <line x1="43" y1="19" x2="45" y2="19" stroke="#0f172a" stroke-width="2" />
    <line x1="26" y1="17" x2="28" y2="18" stroke="#0f172a" stroke-width="2" />
  </g>
</svg>
  `,
  polevaulter: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 125" width="125" height="136">
  <ellipse cx="56" cy="116" rx="34" ry="6" fill="#1e293b" opacity="0.35" />
  <!-- Back Arm holding long pole -->
  <g id="back-arm">
    <path d="M 60 48 Q 45 44 28 44" stroke="#84cc16" stroke-width="7" stroke-linecap="round" fill="none" />
  </g>
  <!-- Trailing Leg in white track shorts -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#84cc16" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2.2" />
  </g>
  <!-- Torso: Orange Athletic Singlet -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#ea580c" stroke="#9a3412" stroke-width="3" stroke-linejoin="round" />
    <path d="M 45 43 L 55 43" stroke="#ffffff" stroke-width="2.5" />
    <!-- White runner shorts -->
    <path d="M 38 72 L 34 84 L 46 84 L 49 73 L 53 84 L 66 84 L 68 71 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
  </g>
  <!-- Forward Leg -->
  <g id="front-leg">
    <path d="M 40 82 L 32 106 L 44 106 L 48 82 Z" fill="#84cc16" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2.2" />
  </g>
  <!-- Long Vaulting Pole diagonally across -->
  <line x1="2" y1="120" x2="88" y2="10" stroke="#ca8a04" stroke-width="4.5" stroke-linecap="round" />
  <line x1="2" y1="120" x2="88" y2="10" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round" />
  <!-- Front Arm gripping pole -->
  <g id="front-arm">
    <path d="M 46 48 Q 34 56 25 50" stroke="#84cc16" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="25" cy="50" r="5.5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  </g>
  <!-- Head with Athletic Headband -->
  <g id="head">

  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 40 2 Q 35 -6 28 -2" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 48 1 Q 53 -7 60 -3" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 56 4 Q 65 -1 68 5" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" fill="none" />

    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

    <path d="M 27 12 C 34 10 58 10 68 12" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none" />
    <path d="M 27 12 C 34 10 58 10 68 12" stroke="#ea580c" stroke-width="2" stroke-linecap="round" fill="none" />
  </g>
</svg>
  `,
  screendoor: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115 125" width="125" height="136">
  <ellipse cx="56" cy="116" rx="36" ry="6" fill="#1e293b" opacity="0.35" />

  <!-- Back Arm -->
  <g id="back-arm">
    <path d="M 60 48 Q 45 44 28 44" stroke="#78350f" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="20" cy="44" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <path d="M 16 41 L 9 40 M 15 44 L 8 44 M 16 47 L 10 49" stroke="#15803d" stroke-width="2.2" stroke-linecap="round" />
  </g>

  <!-- Trailing Leg (Right leg - back) -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Hunched Torso & Brown Suit Jacket -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" stroke-linejoin="round" />
    <polygon points="38,74 43,69 49,75 55,69 61,74 68,71 67,73 38,76" fill="#451a03" />
    <polygon points="45,43 49,58 55,43" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <polygon points="42,42 46,48 47,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="57,42 53,48 52,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="48,45 52,45 54,64 50,70 46,64" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" stroke-linejoin="round" />
    <line x1="48" y1="52" x2="53" y2="50" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
    <line x1="48" y1="59" x2="53" y2="57" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
  </g>


  <!-- Forward Leg (Left leg - with torn pant & bare green knee) -->
  <g id="front-leg">
    <path d="M 40 72 L 32 90 L 44 90 L 48 72 Z" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" stroke-linejoin="round" />
    <polygon points="32,90 35,84 38,91 41,85 44,90" fill="#1d4ed8" />
    <rect x="34" y="89" width="7" height="15" rx="3" fill="#84cc16" stroke="#15803d" stroke-width="2" />
    <polygon points="33,103 42,103 41,106 32,106" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" stroke-linejoin="round" />
  </g>


  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 40 2 Q 35 -6 28 -2" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 48 1 Q 53 -7 60 -3" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 56 4 Q 65 -1 68 5" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" fill="none" />

    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

  <!-- Metal Screen Door Held in Front -->
  <g id="screendoor" transform="rotate(-4 20 65)">
    <!-- Aluminum Frame -->
    <rect x="2" y="30" width="36" height="85" rx="3" fill="#cbd5e1" stroke="#475569" stroke-width="3" />
    <!-- Mesh Screen Area -->
    <rect x="6" y="34" width="28" height="77" fill="#334155" opacity="0.85" />
    <!-- Screen Grid Lines -->
    <line x1="6" y1="52" x2="34" y2="52" stroke="#94a3b8" stroke-width="1.2" />
    <line x1="6" y1="72" x2="34" y2="72" stroke="#94a3b8" stroke-width="1.2" />
    <line x1="6" y1="92" x2="34" y2="92" stroke="#94a3b8" stroke-width="1.2" />
    <line x1="20" y1="34" x2="20" y2="111" stroke="#94a3b8" stroke-width="1.2" />
    <!-- Gold Handle Knob -->
    <circle cx="32" cy="72" r="3.2" fill="#facc15" stroke="#a16207" stroke-width="1.5" />
  </g>
  <!-- Hands holding screen door -->
  <circle cx="34" cy="62" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  <circle cx="34" cy="80" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
</svg>
  `,
  disco: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 125" width="120" height="136">
  <ellipse cx="56" cy="116" rx="34" ry="6" fill="#1e293b" opacity="0.35" />
  <!-- Back Arm pointing up disco style -->
  <g id="back-arm">
    <path d="M 60 48 Q 50 30 38 18" stroke="#ffffff" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="36" cy="16" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  </g>
  <!-- White Flared Bellbottom Pants -->
  <g id="back-leg">
    <path d="M 58 72 L 62 106 L 76 106 L 68 72 Z" fill="#e2e8f0" stroke="#cbd5e1" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 60 106 C 60 101 74 100 78 104 C 80 107 77 112 68 112 L 60 112 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
  </g>
  <!-- White Disco Jumpsuit & Gold Chain -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="3" stroke-linejoin="round" />
    <!-- Wide V-Neck revealing green chest & gold medallion -->
    <polygon points="45,43 50,60 55,43" fill="#84cc16" stroke="#15803d" stroke-width="1.2" />
    <circle cx="50" cy="56" r="3" fill="#facc15" stroke="#ca8a04" stroke-width="1" />
  </g>
  <!-- Forward Leg in flared bellbottoms -->
  <g id="front-leg">
    <path d="M 40 72 L 26 106 L 42 106 L 48 72 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="2" />
  </g>
  <!-- Front Arm pointing down disco style -->
  <g id="front-arm">
    <path d="M 46 48 Q 30 62 14 74" stroke="#ffffff" stroke-width="9" stroke-linecap="round" fill="none" />
    <circle cx="12" cy="76" r="5.5" fill="#84cc16" stroke="#15803d" stroke-width="2.2" />
  </g>
  <!-- Head with GIANT AFRO & Star Glasses -->
  <g id="head">
    <!-- Huge Round 70s Afro Hair -->
    <circle cx="48" cy="14" r="22" fill="#18181b" stroke="#09090b" stroke-width="3" />
    <circle cx="34" cy="10" r="14" fill="#18181b" />
    <circle cx="62" cy="10" r="14" fill="#18181b" />
    <circle cx="48" cy="-1" r="14" fill="#18181b" />
    <!-- Face outline -->
    <path d="M 28 24 C 24 16 30 10 48 10 C 62 10 66 16 64 25 C 62 36 55 42 45 42 C 32 42 29 33 28 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3" stroke-linejoin="round" />
    <!-- Star Sunglasses -->
    <polygon points="34,14 36,19 41,19 37,22 39,27 34,24 29,27 31,22 27,19 32,19" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" />
    <polygon points="50,14 52,19 57,19 53,22 55,27 50,24 45,27 47,22 43,19 48,19" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" />
    <!-- Mouth -->
    <path d="M 29 32 Q 40 36 49 32 C 50 41 40 43 30 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.2" />
    <rect x="34" y="32" width="3.5" height="3.5" rx="0.8" fill="#fef08a" />
    <rect x="42" y="32" width="3.5" height="3.5" rx="0.8" fill="#fef08a" />
  </g>
</svg>
  `,
  gargantuar: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 140" width="140" height="150">
  <ellipse cx="65" cy="132" rx="44" ry="7" fill="#1e293b" opacity="0.4" />
  <!-- Massive Back Leg -->
  <g id="back-leg">
    <path d="M 70 82 Q 78 102 82 124 L 68 124 Q 64 104 58 82 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3" stroke-linejoin="round" />
    <path d="M 66 124 C 66 117 84 116 90 121 C 93 125 89 131 78 131 L 66 131 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.5" />
  </g>
  <!-- Basket on Back with Cute Little Imp -->
  <g id="imp-basket">
    <!-- Wicker basket -->
    <path d="M 72 40 L 98 40 L 94 72 L 76 72 Z" fill="#b45309" stroke="#78350f" stroke-width="2.5" />
    <!-- Imp Head peeking out -->
    <circle cx="85" cy="30" r="10" fill="#84cc16" stroke="#15803d" stroke-width="2.2" />
    <circle cx="82" cy="28" r="4.5" fill="#ffffff" stroke="#15803d" stroke-width="1.5" />
    <circle cx="83" cy="28" r="2" fill="#0f172a" />
    <circle cx="84" cy="27" r="0.8" fill="#ffffff" />
    <path d="M 79 35 Q 85 38 89 35" stroke="#15803d" stroke-width="1.8" fill="none" />
  </g>
  <!-- Colossal Muscular Torso -->
  <g id="torso">
    <path d="M 44 40 C 30 52 28 72 34 86 C 48 90 76 90 84 82 C 90 68 86 48 70 36 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.5" stroke-linejoin="round" />
    <!-- Torn tanktop vest -->
    <path d="M 38 48 C 34 62 38 78 44 86 L 76 86 C 80 74 80 60 74 46 Z" fill="#64748b" stroke="#334155" stroke-width="2.5" />
  </g>
  <!-- Massive Front Leg -->
  <g id="front-leg">
    <path d="M 44 84 L 32 124 L 50 124 L 58 84 Z" fill="#2563eb" stroke="#1d4ed8" stroke-width="3" stroke-linejoin="round" />
    <path d="M 26 126 C 26 118 46 117 54 122 C 57 126 53 133 40 133 L 26 133 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.5" />
  </g>
  <!-- Giant Telephone Pole Weapon Clutched in Fist -->
  <g id="telephone-pole">
    <line x1="8" y1="130" x2="38" y2="12" stroke="#78350f" stroke-width="12" stroke-linecap="round" />
    <!-- Metal crossbars & insulators -->
    <line x1="24" y1="26" x2="48" y2="20" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round" />
    <circle cx="26" cy="26" r="3" fill="#38bdf8" />
    <circle cx="46" cy="20" r="3" fill="#38bdf8" />
  </g>
  <!-- Massive Arm gripping Telephone Pole -->
  <g id="front-arm">
    <path d="M 58 46 Q 36 58 26 66" stroke="#84cc16" stroke-width="14" stroke-linecap="round" fill="none" />
    <circle cx="26" cy="66" r="9" fill="#84cc16" stroke="#15803d" stroke-width="3" />
  </g>
  <!-- Colossal Mean Underbite Head with Stitches -->
  <g id="head">
    <path d="M 28 24 C 20 10 32 -2 54 -2 C 70 -2 78 10 76 24 C 74 38 64 45 48 45 C 32 45 28 35 28 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.5" stroke-linejoin="round" />
    <!-- Furrowed Brow -->
    <path d="M 30 14 Q 45 8 62 14" stroke="#15803d" stroke-width="3.5" stroke-linecap="round" fill="none" />
    <!-- Left Bulging Eye -->
    <circle cx="38" cy="20" r="8" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <circle cx="39" cy="20.5" r="3.5" fill="#0f172a" />
    <circle cx="40.5" cy="18.5" r="1.4" fill="#ffffff" />
    <!-- Right Stitched Shut Eye -->
    <line x1="52" y1="20" x2="64" y2="20" stroke="#15803d" stroke-width="2.5" stroke-linecap="round" />
    <line x1="55" y1="17" x2="55" y2="23" stroke="#15803d" stroke-width="1.8" />
    <line x1="61" y1="17" x2="61" y2="23" stroke="#15803d" stroke-width="1.8" />
    <!-- Fierce Underbite Maw with Big Chunky Teeth -->
    <path d="M 28 32 Q 44 38 58 32 C 59 44 46 47 29 41 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.8" stroke-linejoin="round" />
    <rect x="32" y="32" width="4.5" height="5" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="42" y="33" width="5" height="4.5" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="36" y="38" width="5.5" height="5.5" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="48" y="37" width="4.5" height="5" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>
</svg>
  `,
  jackinbox: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 125" width="120" height="136">
  <ellipse cx="56" cy="116" rx="34" ry="6" fill="#1e293b" opacity="0.35" />
  <!-- Legs in straitjacket pants -->
  <g id="back-leg">
    <path d="M 58 72 Q 65 88 68 106 L 58 106 Q 55 90 50 72 Z" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 57 106 C 57 101 70 100 75 104 C 78 107 75 112 66 112 L 57 112 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" />
  </g>
  <!-- Torso: Straitjacket with buckles -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="3" stroke-linejoin="round" />
    <line x1="42" y1="52" x2="62" y2="52" stroke="#78350f" stroke-width="2.5" />
    <line x1="40" y1="62" x2="64" y2="62" stroke="#78350f" stroke-width="2.5" />
  </g>
  <!-- Forward Leg -->
  <g id="front-leg">
    <path d="M 40 72 L 32 106 L 44 106 L 48 72 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2.5" stroke-linejoin="round" />
    <path d="M 22 108 C 22 101 39 100 45 104 C 47 108 43 113 32 113 L 22 113 Z" fill="#451a03" stroke="#1c0a00" stroke-width="2.2" />
  </g>
  <!-- Clutched Jack-in-the-Box Tin & Crank -->
  <g id="jackbox">
    <rect x="10" y="44" width="28" height="28" rx="3" fill="#ec4899" stroke="#be185d" stroke-width="2.5" />
    <polygon points="12,46 24,58 12,70" fill="#facc15" />
    <polygon points="36,46 24,58 36,70" fill="#3b82f6" />
    <!-- Crank handle -->
    <path d="M 10 58 L 2 58 L 2 50" stroke="#ca8a04" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <circle cx="2" cy="50" r="2.5" fill="#ef4444" />
  </g>
  <!-- Arms holding box -->
  <path d="M 46 48 Q 32 52 24 58" stroke="#84cc16" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="24" cy="58" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  <!-- Crazy wide-eyed zombie head -->
  <g id="head">

  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 40 2 Q 35 -6 28 -2" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 48 1 Q 53 -7 60 -3" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round" fill="none" />
    <path d="M 56 4 Q 65 -1 68 5" stroke="#0f172a" stroke-width="2.2" stroke-linecap="round" fill="none" />

    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

    <!-- Crazy spiraling dilated pupil on left eye -->
    <circle cx="35.5" cy="19.5" r="5" fill="#ef4444" opacity="0.3" />
  </g>
</svg>
  `,
  zomboni: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 130" width="140" height="140">
  <ellipse cx="65" cy="120" rx="46" ry="7" fill="#1e293b" opacity="0.4" />
  <!-- Zomboni Machine Body (Vibrant Red Vehicle) -->
  <g id="vehicle">
    <path d="M 15 80 L 15 115 L 115 115 L 115 70 L 80 70 L 70 80 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" stroke-linejoin="round" />
    <rect x="20" y="85" width="45" height="22" rx="3" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.8" />
    <text x="42" y="100" font-family="Arial, sans-serif" font-weight="900" font-size="10" fill="#dc2626" text-anchor="middle">ZOMBONI</text>
    <!-- Big Heavy Wheels -->
    <circle cx="32" cy="116" r="10" fill="#0f172a" stroke="#334155" stroke-width="2.5" />
    <circle cx="32" cy="116" r="4" fill="#94a3b8" />
    <circle cx="98" cy="116" r="10" fill="#0f172a" stroke="#334155" stroke-width="2.5" />
    <circle cx="98" cy="116" r="4" fill="#94a3b8" />
    <!-- Smoking Exhaust Pipe -->
    <path d="M 105 70 L 105 50 L 112 45" stroke="#475569" stroke-width="4.5" stroke-linecap="round" fill="none" />
    <circle cx="114" cy="40" r="4" fill="#94a3b8" opacity="0.6" />
    <circle cx="118" cy="32" r="6" fill="#cbd5e1" opacity="0.4" />
  </g>
  <!-- Driver Seat & Steering Wheel -->
  <line x1="58" y1="78" x2="68" y2="65" stroke="#0f172a" stroke-width="3" />
  <ellipse cx="68" cy="65" rx="7" ry="2.5" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
  <!-- Zombie Driver Torso & Arms -->
  <path d="M 72 65 C 70 56 75 48 85 45 C 92 48 94 56 90 65 Z" fill="#92400e" stroke="#451a03" stroke-width="2.5" />
  <path d="M 80 54 Q 72 58 68 64" stroke="#84cc16" stroke-width="7" stroke-linecap="round" fill="none" />
  <!-- Zombie Driver Head with Winter Beanie Hat -->
  <g id="driver-head" transform="translate(40, 20)">
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <!-- Winter Knit Beanie with Bobble -->
    <path d="M 24 14 C 24 0 54 0 68 14 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2.5" />
    <rect x="22" y="12" width="48" height="6" rx="2" fill="#38bdf8" />
    <circle cx="46" cy="-2" r="5" fill="#facc15" stroke="#eab308" stroke-width="1.5" />
    <!-- Eyes & Mouth -->
    <circle cx="35" cy="22" r="7" fill="#ffffff" stroke="#15803d" stroke-width="2" />
    <circle cx="35.5" cy="22.5" r="3.2" fill="#0f172a" />
    <circle cx="37" cy="21" r="1.2" fill="#ffffff" />
    <path d="M 26 32 Q 38 36 48 32 C 49 41 38 43 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2" />
  </g>
</svg>
  `,
  pogo: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 135" width="120" height="147">
  <ellipse cx="56" cy="128" rx="28" ry="5.5" fill="#1e293b" opacity="0.35" />
  <!-- Chrome Pogo Stick Shaft, Handlebars & Coiled Spring -->
  <g id="pogostick">
    <line x1="52" y1="35" x2="52" y2="105" stroke="#cbd5e1" stroke-width="4.5" stroke-linecap="round" />
    <!-- Handlebars -->
    <line x1="38" y1="42" x2="66" y2="42" stroke="#475569" stroke-width="4" stroke-linecap="round" />
    <circle cx="38" cy="42" r="2.5" fill="#ef4444" />
    <circle cx="66" cy="42" r="2.5" fill="#ef4444" />
    <!-- Foot Pegs -->
    <rect x="42" y="96" width="20" height="4" rx="1.5" fill="#ef4444" stroke="#991b1b" stroke-width="1" />
    <!-- Coiled Heavy Spring -->
    <path d="M 48 105 L 56 109 L 48 113 L 56 117 L 48 121 L 52 125" stroke="#475569" stroke-width="3" fill="none" stroke-linecap="round" />
    <!-- Rubber tip -->
    <circle cx="52" cy="126" r="3.5" fill="#0f172a" />
  </g>
  <!-- Zombie Leg Bent on Pegs -->
  <g id="legs">
    <path d="M 44 72 Q 40 88 44 98" stroke="#2563eb" stroke-width="8" stroke-linecap="round" fill="none" />
    <path d="M 58 72 Q 62 88 58 98" stroke="#1d4ed8" stroke-width="8" stroke-linecap="round" fill="none" />
    <ellipse cx="44" cy="98" rx="6" ry="3.5" fill="#451a03" />
    <ellipse cx="58" cy="98" rx="6" ry="3.5" fill="#451a03" />
  </g>

  <!-- Hunched Torso & Brown Suit Jacket -->
  <g id="torso">
    <path d="M 44 45 C 38 52 36 64 38 74 C 48 77 62 76 68 71 C 72 61 70 48 58 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" stroke-linejoin="round" />
    <polygon points="38,74 43,69 49,75 55,69 61,74 68,71 67,73 38,76" fill="#451a03" />
    <polygon points="45,43 49,58 55,43" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
    <polygon points="42,42 46,48 47,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="57,42 53,48 52,43" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <polygon points="48,45 52,45 54,64 50,70 46,64" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" stroke-linejoin="round" />
    <line x1="48" y1="52" x2="53" y2="50" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
    <line x1="48" y1="59" x2="53" y2="57" stroke="#fca5a5" stroke-width="1.2" stroke-linecap="round" />
  </g>

  <!-- Arms Gripping Pogo Handlebars -->
  <path d="M 44 48 L 40 43" stroke="#84cc16" stroke-width="7" stroke-linecap="round" />
  <circle cx="40" cy="43" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  <path d="M 60 48 L 64 43" stroke="#84cc16" stroke-width="7" stroke-linecap="round" />
  <circle cx="64" cy="43" r="5" fill="#84cc16" stroke="#15803d" stroke-width="2" />
  <!-- Head with Pogo Helmet -->
  <g id="head">

  <!-- Neck & Head -->
  <g id="head">
    <path d="M 43 45 L 38 34 L 48 34 L 51 45 Z" fill="#65a30d" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
    <path d="M 26 24 C 20 12 30 2 48 2 C 63 2 70 12 68 25 C 66 36 57 42 45 42 C 30 42 27 33 26 24 Z" fill="#84cc16" stroke="#15803d" stroke-width="3.2" stroke-linejoin="round" />
    <path d="M 32 12 C 37 5 57 5 62 12 C 58 7 37 7 32 12 Z" fill="#bef264" opacity="0.6" />
    
    <path d="M 34 8 Q 44 5 54 8" stroke="#15803d" stroke-width="2" stroke-linecap="round" fill="none" />
    <path d="M 32 12 Q 43 9 52 12" stroke="#15803d" stroke-width="1.8" stroke-linecap="round" fill="none" />

    <!-- Right Eye (droopy) -->
    <ellipse cx="52" cy="19" rx="5.5" ry="6.2" fill="#fef08a" stroke="#15803d" stroke-width="2" />
    <circle cx="52" cy="20" r="2.5" fill="#0f172a" />
    <circle cx="53.2" cy="19" r="1" fill="#ffffff" />
    <path d="M 46.5 18 Q 52 21 57.5 18 C 57.5 14 46.5 14 46.5 18 Z" fill="#65a30d" stroke="#15803d" stroke-width="1.5" />

    <!-- Left Eye (Big cartoon eye with shine) -->
    <circle cx="35" cy="19" r="8.5" fill="#ffffff" stroke="#15803d" stroke-width="2.5" />
    <path d="M 29 15 Q 31 18 30 22" stroke="#ef4444" stroke-width="1.2" fill="none" opacity="0.75" />
    <circle cx="35.5" cy="19.5" r="4" fill="#0f172a" />
    <circle cx="37.5" cy="17.5" r="1.6" fill="#ffffff" />
    <circle cx="34" cy="21" r="0.7" fill="#ffffff" />

    <!-- Open Underbite Mouth with Crooked Yellow Teeth -->
    <path d="M 26 30 Q 39 35 50 30 C 51 41 40 44 27 38 Z" fill="#2e1065" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="38" cy="37" rx="6" ry="3" fill="#dc2626" />
    <rect x="29" y="30" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="38" y="31" width="3.8" height="3.8" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="32" y="36.5" width="4.2" height="4.6" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
    <rect x="41" y="35.5" width="3.6" height="4.2" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8" />
  </g>

    <path d="M 24 16 C 24 0 54 0 68 16 Z" fill="#eab308" stroke="#ca8a04" stroke-width="2.5" />
    <line x1="28" y1="18" x2="64" y2="18" stroke="#ca8a04" stroke-width="2" />
  </g>
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
