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
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
  </g>

  

</svg>
  `,
  conehead: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 105" width="120" height="126">
<g transform="translate(0, 5)">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
    <!-- Traffic Cone on Head -->
    <polygon points="48,-18 34,8 62,8" fill="#f97316" stroke="#c2410c" stroke-width="2.5" stroke-linejoin="round" />
    <polygon points="46,-6 38,4 58,4 50,-6" fill="#ffffff" stroke="#cbd5e1" stroke-width="1" />
    <ellipse cx="48" cy="8" rx="17" ry="4.5" fill="#ea580c" stroke="#9a3412" stroke-width="2" />

  </g>

  

</g>
</svg>
  `,
  buckethead: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 105" width="120" height="126">
<g transform="translate(0, 5)">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
    <!-- Galvanized Metal Bucket -->
    <polygon points="32,-12 64,-12 60,10 36,10" fill="#94a3b8" stroke="#475569" stroke-width="2.5" stroke-linejoin="round" />
    <ellipse cx="48" cy="-12" rx="16" ry="4" fill="#cbd5e1" stroke="#475569" stroke-width="1.8" />
    <path d="M 36 10 C 36 7 60 7 60 10 C 60 13 36 13 36 10 Z" fill="#64748b" stroke="#334155" stroke-width="1.5" />
    <path d="M 33 10 Q 24 18 36 26" stroke="#475569" stroke-width="2.2" fill="none" stroke-linecap="round" />
    <circle cx="33" cy="10" r="2.2" fill="#334155" />

  </g>

  

</g>
</svg>
  `,
  football: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
    <text x="50" y="64" font-family="Arial, sans-serif" font-weight="900" font-size="12" fill="#ffffff" text-anchor="middle">77</text>

  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
    <!-- Red Football Helmet -->
    <path d="M 28 20 C 26 6 36 -2 48 -2 C 64 -2 70 6 68 20 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
    <path d="M 48 -2 L 48 10" stroke="#ffffff" stroke-width="4" />
    <!-- White Face Bars Grill -->
    <line x1="34" y1="26" x2="62" y2="26" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round" />
    <line x1="38" y1="20" x2="38" y2="28" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />
    <line x1="58" y1="20" x2="58" y2="28" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" />

  </g>

  

</svg>
  `,
  newspaper: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 54 22 50" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <!-- Newspaper -->
    <g transform="rotate(-6 20 54)">
      <rect x="4" y="38" width="28" height="34" rx="2" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
      <rect x="6" y="40" width="24" height="5" fill="#ca8a04" />
      <text x="18" y="44" font-family="Arial, sans-serif" font-weight="900" font-size="3.5" fill="#ffffff" text-anchor="middle">DAILY BRAINZ</text>
      <line x1="8" y1="48" x2="26" y2="48" stroke="#78350f" stroke-width="1" />
      <line x1="8" y1="52" x2="26" y2="52" stroke="#78350f" stroke-width="1" />
      <line x1="8" y1="56" x2="26" y2="56" stroke="#78350f" stroke-width="1" />
    </g>
    <circle cx="18" cy="52" r="5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
    <circle cx="40" cy="20" r="7" fill="none" stroke="#0f172a" stroke-width="2" />
    <circle cx="56" cy="20" r="7" fill="none" stroke="#0f172a" stroke-width="2" />
    <line x1="47" y1="20" x2="49" y2="20" stroke="#0f172a" stroke-width="2" />

  </g>

  

</svg>
  `,
  polevaulter: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
    <path d="M 28 14 Q 48 10 68 14" stroke="#ffffff" stroke-width="5" stroke-linecap="round" fill="none" />
    <path d="M 28 14 Q 48 10 68 14" stroke="#ea580c" stroke-width="2" stroke-linecap="round" fill="none" />

  </g>

  
  <line x1="2" y1="100" x2="84" y2="8" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" />
  <line x1="2" y1="100" x2="84" y2="8" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" />


</svg>
  `,
  screendoor: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
  </g>

  
  <!-- Cute screen door held in front -->
  <g transform="rotate(-4 20 65)">
    <rect x="4" y="28" width="30" height="74" rx="2" fill="#cbd5e1" stroke="#475569" stroke-width="2.5" />
    <rect x="7" y="31" width="24" height="68" fill="#334155" opacity="0.85" />
    <line x1="7" y1="52" x2="31" y2="52" stroke="#94a3b8" stroke-width="1" />
    <line x1="7" y1="72" x2="31" y2="72" stroke="#94a3b8" stroke-width="1" />
    <line x1="19" y1="31" x2="19" y2="99" stroke="#94a3b8" stroke-width="1" />
    <circle cx="28" cy="70" r="2.8" fill="#facc15" stroke="#a16207" stroke-width="1" />
  </g>


</svg>
  `,
  disco: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
    <!-- Cute 70s Afro -->
    <circle cx="48" cy="12" r="18" fill="#18181b" stroke="#09090b" stroke-width="2.5" />
    <circle cx="34" cy="8" r="11" fill="#18181b" />
    <circle cx="62" cy="8" r="11" fill="#18181b" />
    <!-- Yellow Star Sunglasses -->
    <polygon points="40,16 42,20 46,20 43,23 44,27 40,24 36,27 37,23 34,20 38,20" fill="#facc15" stroke="#ca8a04" stroke-width="1" />
    <polygon points="56,16 58,20 62,20 59,23 60,27 56,24 52,27 53,23 50,20 54,20" fill="#facc15" stroke="#ca8a04" stroke-width="1" />

  </g>

  

</svg>
  `,
  gargantuar: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
  </g>

  
  <!-- Telephone Pole -->
  <line x1="6" y1="96" x2="28" y2="12" stroke="#78350f" stroke-width="10" stroke-linecap="round" />
  <line x1="16" y1="24" x2="36" y2="18" stroke="#94a3b8" stroke-width="3.5" stroke-linecap="round" />
  <!-- Cute little imp in basket on back -->
  <rect x="68" y="38" width="20" height="24" rx="2" fill="#b45309" stroke="#78350f" stroke-width="2" />
  <circle cx="78" cy="30" r="8" fill="#86efac" stroke="#16a34a" stroke-width="1.8" />
  <ellipse cx="76" cy="28" rx="2.5" ry="3.5" fill="#0f172a" />
  <circle cx="77" cy="27" r="1" fill="#ffffff" />


</svg>
  `,
  jackinbox: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="jackbox">
    <rect x="8" y="44" width="22" height="22" rx="2" fill="#ec4899" stroke="#be185d" stroke-width="2" />
    <polygon points="10,46 19,55 10,64" fill="#facc15" />
    <polygon points="28,46 19,55 28,64" fill="#3b82f6" />
    <path d="M 8 55 L 2 55 L 2 48" stroke="#ca8a04" stroke-width="2" stroke-linecap="round" fill="none" />
    <circle cx="2" cy="48" r="2" fill="#ef4444" />
  </g>
  <path d="M 46 48 Q 32 54 22 55" stroke="#a16207" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="22" cy="55" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
  </g>

  

</svg>
  `,
  zomboni: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 105" width="120" height="126">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
  </g>

  
  <!-- Mini Red Zomboni Kart -->
  <path d="M 10 76 L 10 96 L 90 96 L 90 70 L 60 70 L 52 76 Z" fill="#dc2626" stroke="#991b1b" stroke-width="2.5" stroke-linejoin="round" />
  <rect x="15" y="80" width="34" height="14" rx="2" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.2" />
  <circle cx="24" cy="96" r="7" fill="#0f172a" stroke="#334155" stroke-width="2" />
  <circle cx="76" cy="96" r="7" fill="#0f172a" stroke="#334155" stroke-width="2" />


</svg>
  `,
  pogo: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">

  <!-- Ground shadow -->
  <ellipse cx="50" cy="94" rx="26" ry="5.5" fill="#1e293b" opacity="0.35" />

  <!-- Trailing Leg (Right) -->
  <g id="back-leg">
    <rect x="52" y="70" width="12" height="18" rx="5" fill="#2563eb" stroke="#1e40af" stroke-width="2.5" />
    <ellipse cx="60" cy="92" rx="9" ry="5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Far Arm -->
  
  <path d="M 50 48 Q 36 50 24 46" stroke="#78350f" stroke-width="7" stroke-linecap="round" fill="none" />
  <circle cx="20" cy="46" r="4.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />


  <!-- Torso: Brown Coat & Red Tie -->
  <g id="torso">
    <path d="M 35 42 C 28 50 28 62 33 72 C 43 75 57 75 67 72 C 72 62 72 50 65 42 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
    <polygon points="44,42 50,54 56,42" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
    <polygon points="47,44 53,44 55,62 50,68 45,62" fill="#ef4444" stroke="#991b1b" stroke-width="1.8" />
    
  </g>

  <!-- Forward Leg (with torn green knee) -->
  <g id="front-leg">
    <rect x="34" y="70" width="12" height="14" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
    <rect x="36" y="82" width="8" height="9" rx="2.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <ellipse cx="38" cy="94" rx="9.5" ry="5.5" fill="#451a03" stroke="#290e02" stroke-width="2" />
  </g>

  <!-- Near Arm -->
  
  <g id="front-arm">
    <path d="M 46 48 Q 32 58 18 52" stroke="#a16207" stroke-width="8" stroke-linecap="round" fill="none" />
    <circle cx="14" cy="52" r="5.5" fill="#86efac" stroke="#16a34a" stroke-width="2" />
    <circle cx="10" cy="49" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
    <circle cx="9" cy="54" r="2.2" fill="#86efac" stroke="#16a34a" stroke-width="1.5" />
  </g>


  <!-- Head: Cute Round Plant-Style Head -->
  <g id="head">
    <rect x="45" y="36" width="10" height="8" rx="3" fill="#4ade80" stroke="#16a34a" stroke-width="2" />
    <circle cx="48" cy="22" r="21" fill="#86efac" stroke="#16a34a" stroke-width="3" />

    <!-- Cute Sprout / Leaf on Top -->
    <path d="M 48 2 Q 43 -8 36 -5 Q 43 -2 48 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />
    <path d="M 49 2 Q 56 -9 63 -5 Q 56 -2 49 2" fill="#22c55e" stroke="#15803d" stroke-width="1.8" />

    <!-- Cute Bead Eyes (Sunflower style) -->
    <ellipse cx="40" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="41.5" cy="18" r="1.6" fill="#ffffff" />
    <ellipse cx="56" cy="20" rx="3.8" ry="6" fill="#0f172a" />
    <circle cx="57.5" cy="18" r="1.6" fill="#ffffff" />

    <!-- Cute Soft Blush -->
    <circle cx="34" cy="25" r="3.2" fill="#f87171" opacity="0.6" />
    <circle cx="62" cy="25" r="3.2" fill="#f87171" opacity="0.6" />

    <!-- Cute Wobbly Underbite Smile -->
    <path d="M 42 27 Q 48 33 54 27" stroke="#166534" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <rect x="45" y="27" width="3" height="3.5" rx="0.8" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7" />

    
  </g>

  
  <!-- Pogo Stick -->
  <line x1="48" y1="36" x2="48" y2="98" stroke="#cbd5e1" stroke-width="3.5" stroke-linecap="round" />
  <line x1="36" y1="42" x2="60" y2="42" stroke="#475569" stroke-width="3" stroke-linecap="round" />
  <rect x="40" y="90" width="16" height="3" rx="1" fill="#ef4444" />


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
