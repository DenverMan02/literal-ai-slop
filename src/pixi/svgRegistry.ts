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
      <!-- Shadow -->
      <ellipse cx="50" cy="95" rx="24" ry="4.5" fill="#090d16" opacity="0.4" />

      <!-- Legs & Blue Slacks -->
      <path d="M 38 68 L 32 92 L 42 92 L 48 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <path d="M 48 68 L 54 92 L 64 92 L 58 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <polygon points="32,88 35,92 38,88 41,92 42,88" fill="#172554" />
      <ellipse cx="34" cy="93" rx="8" ry="3.5" fill="#18181b" stroke="#09090b" stroke-width="1" />
      <ellipse cx="60" cy="93" rx="8" ry="3.5" fill="#18181b" stroke="#09090b" stroke-width="1" />

      <!-- Back Reaching Arm -->
      <path d="M 42 45 L 26 49 L 14 47" stroke="#4a3220" stroke-width="6" stroke-linecap="round" />
      <circle cx="12" cy="47" r="3.5" fill="#6f9342" stroke="#384f1e" stroke-width="1" />
      <path d="M 10 45 L 6 44 M 10 47 L 5 48 M 10 49 L 7 51" stroke="#6f9342" stroke-width="1.8" stroke-linecap="round" />

      <!-- Tattered Brown Business Blazer -->
      <path d="M 34 38 L 24 68 L 68 68 L 60 38 Z" fill="#5c4028" stroke="#382416" stroke-width="2" />
      <polygon points="24,68 30,64 36,68 42,63 48,68 54,64 60,68 68,68" fill="#422c19" />

      <!-- Front Reaching Arm -->
      <path d="M 36 48 L 18 53 L 8 50" stroke="#5c4028" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="6" cy="50" r="4" fill="#7ea54b" stroke="#3f5923" stroke-width="1.2" />
      <path d="M 4 48 L 0 46 M 4 50 L -1 51 M 4 52 L 1 54" stroke="#7ea54b" stroke-width="2" stroke-linecap="round" />

      <!-- White Shirt Collar & Crooked Red Tie -->
      <polygon points="45,38 48,54 46,56 43,38" fill="#f8fafc" />
      <polygon points="42,38 45,44 48,38" fill="#e2e8f0" />
      <polygon points="46,40 49,56 46,64 43,56" fill="#dc2626" stroke="#991b1b" stroke-width="1" />

      <!-- Decayed Zombie Head -->
      <path d="M 34 26 C 30 12 60 8 66 22 C 70 34 62 46 48 46 C 36 46 34 34 34 26 Z" fill="#7ea54b" stroke="#3f5923" stroke-width="2.5" />

      <!-- Stray Wispy Hairs -->
      <path d="M 45 10 Q 42 2 36 4" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />
      <path d="M 51 9 Q 55 1 60 5" stroke="#18181b" stroke-width="1.5" fill="none" stroke-linecap="round" />

      <!-- Brow Wrinkle -->
      <path d="M 38 16 Q 48 19 58 15" stroke="#3f5923" stroke-width="1.8" fill="none" />

      <!-- Mismatched Googly Bloodshot Eyes -->
      <ellipse cx="40" cy="22" rx="6.5" ry="7" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="41" cy="22" r="3" fill="#09090b" />
      <circle cx="42" cy="20.5" r="1" fill="#ffffff" />
      <path d="M 36 19 Q 38 21 37 24" stroke="#ef4444" stroke-width="0.8" fill="none" opacity="0.75" />

      <ellipse cx="55" cy="24" rx="4.5" ry="5" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="55" cy="24" r="2.2" fill="#09090b" />
      <circle cx="56" cy="23" r="0.8" fill="#ffffff" />

      <!-- Slack Jaw with Crooked Rotten Teeth -->
      <path d="M 35 32 Q 46 35 57 30 C 58 43 48 45 46 45 C 36 45 34 40 35 32 Z" fill="#1c280f" stroke="#3f5923" stroke-width="1.5" />
      <polygon points="38,32 40,37 42,32" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" />
      <polygon points="44,33 46,38 48,33" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" />
      <polygon points="51,32 53,36 55,32" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" />
      <polygon points="41,43 43,38 45,43" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" />
      <polygon points="48,43 50,38 52,43" fill="#fef9c3" stroke="#854d0e" stroke-width="0.5" />
    </svg>
  `,

  conehead: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <!-- Shadow -->
      <ellipse cx="50" cy="95" rx="24" ry="4.5" fill="#090d16" opacity="0.4" />

      <!-- Legs -->
      <path d="M 38 68 L 32 92 L 42 92 L 48 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <path d="M 48 68 L 54 92 L 64 92 L 58 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <ellipse cx="34" cy="93" rx="8" ry="3.5" fill="#18181b" stroke="#09090b" stroke-width="1" />
      <ellipse cx="60" cy="93" rx="8" ry="3.5" fill="#18181b" stroke="#09090b" stroke-width="1" />

      <!-- Reaching Arms -->
      <path d="M 42 45 L 26 49 L 14 47" stroke="#4a3220" stroke-width="6" stroke-linecap="round" />
      <circle cx="12" cy="47" r="3.5" fill="#6f9342" stroke="#384f1e" stroke-width="1" />
      <path d="M 34 38 L 24 68 L 68 68 L 60 38 Z" fill="#5c4028" stroke="#382416" stroke-width="2" />
      <polygon points="24,68 30,64 36,68 42,63 48,68 54,64 60,68 68,68" fill="#422c19" />
      <path d="M 36 48 L 18 53 L 8 50" stroke="#5c4028" stroke-width="7" stroke-linecap="round" />
      <circle cx="6" cy="50" r="4" fill="#7ea54b" stroke="#3f5923" stroke-width="1.2" />

      <!-- Shirt & Tie -->
      <polygon points="45,38 48,54 46,56 43,38" fill="#f8fafc" />
      <polygon points="46,40 49,56 46,64 43,56" fill="#dc2626" stroke="#991b1b" stroke-width="1" />

      <!-- Head Base -->
      <path d="M 34 26 C 30 12 60 8 66 22 C 70 34 62 46 48 46 C 36 46 34 34 34 26 Z" fill="#7ea54b" stroke="#3f5923" stroke-width="2.5" />

      <!-- Eyes & Slack Jaw -->
      <ellipse cx="40" cy="22" rx="6.5" ry="7" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="41" cy="22" r="3" fill="#09090b" />
      <ellipse cx="55" cy="24" rx="4.5" ry="5" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="55" cy="24" r="2.2" fill="#09090b" />
      <path d="M 35 32 Q 46 35 57 30 C 58 43 48 45 46 45 C 36 45 34 40 35 32 Z" fill="#1c280f" stroke="#3f5923" stroke-width="1.5" />
      <polygon points="38,32 40,37 42,32" fill="#fef9c3" />
      <polygon points="46,33 48,38 50,33" fill="#fef9c3" />
      <polygon points="43,43 45,38 47,43" fill="#fef9c3" />

      <!-- Traffic Cone on Head -->
      <polygon points="48,-4 30,18 66,18" fill="#f97316" stroke="#c2410c" stroke-width="2" />
      <ellipse cx="48" cy="18" rx="19" ry="4" fill="#ea580c" stroke="#9a3412" stroke-width="1.5" />
      <rect x="35" y="7" width="26" height="5" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.8" transform="rotate(-1 48 9)" />
    </svg>
  `,

  buckethead: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <!-- Shadow -->
      <ellipse cx="50" cy="95" rx="24" ry="4.5" fill="#090d16" opacity="0.4" />

      <!-- Legs -->
      <path d="M 38 68 L 32 92 L 42 92 L 48 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <path d="M 48 68 L 54 92 L 64 92 L 58 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <ellipse cx="34" cy="93" rx="8" ry="3.5" fill="#18181b" stroke="#09090b" stroke-width="1" />
      <ellipse cx="60" cy="93" rx="8" ry="3.5" fill="#18181b" stroke="#09090b" stroke-width="1" />

      <!-- Reaching Arms -->
      <path d="M 42 45 L 26 49 L 14 47" stroke="#4a3220" stroke-width="6" stroke-linecap="round" />
      <circle cx="12" cy="47" r="3.5" fill="#6f9342" stroke="#384f1e" stroke-width="1" />
      <path d="M 34 38 L 24 68 L 68 68 L 60 38 Z" fill="#5c4028" stroke="#382416" stroke-width="2" />
      <polygon points="24,68 30,64 36,68 42,63 48,68 54,64 60,68 68,68" fill="#422c19" />
      <path d="M 36 48 L 18 53 L 8 50" stroke="#5c4028" stroke-width="7" stroke-linecap="round" />
      <circle cx="6" cy="50" r="4" fill="#7ea54b" stroke="#3f5923" stroke-width="1.2" />

      <!-- Shirt & Tie -->
      <polygon points="45,38 48,54 46,56 43,38" fill="#f8fafc" />
      <polygon points="46,40 49,56 46,64 43,56" fill="#dc2626" stroke="#991b1b" stroke-width="1" />

      <!-- Head Base -->
      <path d="M 34 26 C 30 12 60 8 66 22 C 70 34 62 46 48 46 C 36 46 34 34 34 26 Z" fill="#7ea54b" stroke="#3f5923" stroke-width="2.5" />

      <!-- Eyes & Slack Jaw -->
      <ellipse cx="40" cy="22" rx="6.5" ry="7" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="41" cy="22" r="3" fill="#09090b" />
      <ellipse cx="55" cy="24" rx="4.5" ry="5" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="55" cy="24" r="2.2" fill="#09090b" />
      <path d="M 35 32 Q 46 35 57 30 C 58 43 48 45 46 45 C 36 45 34 40 35 32 Z" fill="#1c280f" stroke="#3f5923" stroke-width="1.5" />
      <polygon points="38,32 40,37 42,32" fill="#fef9c3" />
      <polygon points="46,33 48,38 50,33" fill="#fef9c3" />
      <polygon points="43,43 45,38 47,43" fill="#fef9c3" />

      <!-- Galvanized Steel Bucket on Head -->
      <path d="M 28 6 L 68 6 L 64 24 L 32 24 Z" fill="#94a3b8" stroke="#475569" stroke-width="2.5" />
      <ellipse cx="48" cy="6" rx="20" ry="3.5" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
      <ellipse cx="48" cy="24" rx="16" ry="3" fill="#64748b" />
      <!-- Dents & Bucket Handle -->
      <circle cx="36" cy="14" r="2" fill="#334155" />
      <circle cx="58" cy="16" r="2.5" fill="#334155" />
      <path d="M 28 12 Q 48 0 68 12" stroke="#475569" stroke-width="2" fill="none" />
    </svg>
  `,

  football: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="95" rx="26" ry="4.5" fill="#090d16" opacity="0.4" />
      <path d="M 36 68 L 30 92 L 42 92 L 48 68 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
      <path d="M 48 68 L 54 92 L 66 92 L 60 68 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
      <ellipse cx="33" cy="93" rx="8" ry="3.5" fill="#09090b" />
      <ellipse cx="62" cy="93" rx="8" ry="3.5" fill="#09090b" />
      <!-- Heavy Red Shoulder Pads & Jersey -->
      <path d="M 20 40 L 14 70 L 76 70 L 70 40 Z" fill="#b91c1c" stroke="#7f1d1d" stroke-width="3" />
      <text x="45" y="60" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="900" font-family="sans-serif">77</text>
      <!-- Thick Red Football Helmet -->
      <ellipse cx="45" cy="24" rx="21" ry="19" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
      <path d="M 45 5 L 45 30" stroke="#ffffff" stroke-width="3.5" />
      <!-- Dark Face Grill -->
      <path d="M 32 26 L 58 26 M 34 30 L 56 30 M 36 34 L 54 34" stroke="#475569" stroke-width="2.5" stroke-linecap="round" />
      <!-- Eyes inside helmet -->
      <circle cx="39" cy="24" r="3" fill="#fef08a" />
      <circle cx="39" cy="24" r="1.5" fill="#09090b" />
      <circle cx="51" cy="24" r="3" fill="#fef08a" />
      <circle cx="51" cy="24" r="1.5" fill="#09090b" />
    </svg>
  `,

  newspaper: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="95" rx="24" ry="4.5" fill="#090d16" opacity="0.4" />
      <path d="M 38 68 L 32 92 L 42 92 L 48 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <path d="M 48 68 L 54 92 L 64 92 L 58 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <ellipse cx="34" cy="93" rx="8" ry="3.5" fill="#18181b" />
      <ellipse cx="60" cy="93" rx="8" ry="3.5" fill="#18181b" />
      <path d="M 34 38 L 24 68 L 68 68 L 60 38 Z" fill="#5c4028" stroke="#382416" stroke-width="2" />
      <polygon points="46,40 49,56 46,64 43,56" fill="#dc2626" />
      <path d="M 34 26 C 30 12 60 8 66 22 C 70 34 62 46 48 46 C 36 46 34 34 34 26 Z" fill="#7ea54b" stroke="#3f5923" stroke-width="2.5" />
      <!-- Reading Spectacles -->
      <circle cx="40" cy="22" r="7" stroke="#18181b" stroke-width="2" fill="#fef08a" />
      <circle cx="40" cy="22" r="2.5" fill="#09090b" />
      <circle cx="55" cy="23" r="6" stroke="#18181b" stroke-width="2" fill="#fef08a" />
      <circle cx="55" cy="23" r="2.2" fill="#09090b" />
      <path d="M 47 22 L 49 22" stroke="#18181b" stroke-width="2.5" />
      <!-- Open Broadsheet Newspaper in front -->
      <rect x="4" y="44" width="34" height="32" fill="#f1f5f9" stroke="#475569" stroke-width="2" rx="2" />
      <line x1="8" y1="50" x2="34" y2="50" stroke="#0f172a" stroke-width="3" />
      <line x1="8" y1="56" x2="34" y2="56" stroke="#64748b" stroke-width="1.5" />
      <line x1="8" y1="62" x2="34" y2="62" stroke="#64748b" stroke-width="1.5" />
      <line x1="8" y1="68" x2="28" y2="68" stroke="#64748b" stroke-width="1.5" />
    </svg>
  `,

  polevaulter: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="95" rx="24" ry="4.5" fill="#090d16" opacity="0.4" />
      <!-- Athletic orange singlet & running shorts -->
      <path d="M 32 40 L 26 68 L 66 68 L 60 40 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2" />
      <path d="M 34 68 L 30 92 L 42 92 L 46 68 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
      <path d="M 48 68 L 52 92 L 64 92 L 60 68 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
      <ellipse cx="32" cy="93" rx="8" ry="3.5" fill="#dc2626" />
      <ellipse cx="60" cy="93" rx="8" ry="3.5" fill="#dc2626" />
      <!-- Head with Sweatband -->
      <path d="M 34 26 C 30 12 60 8 66 22 C 70 34 62 46 48 46 C 36 46 34 34 34 26 Z" fill="#7ea54b" stroke="#3f5923" stroke-width="2.5" />
      <rect x="30" y="14" width="38" height="5" fill="#ffffff" stroke="#94a3b8" stroke-width="1" rx="1" />
      <!-- Eyes & Slack Jaw -->
      <ellipse cx="40" cy="24" rx="6" ry="6" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="41" cy="24" r="2.8" fill="#09090b" />
      <ellipse cx="55" cy="25" rx="4.5" ry="4.5" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="55" cy="25" r="2" fill="#09090b" />
      <path d="M 36 34 Q 46 37 56 32 C 57 44 47 46 45 46 C 36 46 35 41 36 34 Z" fill="#1c280f" />
      <polygon points="40,34 42,39 44,34" fill="#fef9c3" />
      <polygon points="48,35 50,40 52,35" fill="#fef9c3" />
      <!-- Long Vaulting Pole -->
      <line x1="6" y1="6" x2="20" y2="92" stroke="#d97706" stroke-width="5" stroke-linecap="round" />
      <rect x="11" y="42" width="6" height="12" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
    </svg>
  `,

  screendoor: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="95" rx="24" ry="4.5" fill="#090d16" opacity="0.4" />
      <path d="M 38 68 L 32 92 L 42 92 L 48 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <path d="M 48 68 L 54 92 L 64 92 L 58 68 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="2" />
      <ellipse cx="34" cy="93" rx="8" ry="3.5" fill="#18181b" />
      <ellipse cx="60" cy="93" rx="8" ry="3.5" fill="#18181b" />
      <path d="M 34 38 L 24 68 L 68 68 L 60 38 Z" fill="#5c4028" stroke="#382416" stroke-width="2" />
      <polygon points="46,40 49,56 46,64 43,56" fill="#dc2626" />
      <path d="M 34 26 C 30 12 60 8 66 22 C 70 34 62 46 48 46 C 36 46 34 34 34 26 Z" fill="#7ea54b" stroke="#3f5923" stroke-width="2.5" />
      <ellipse cx="40" cy="22" rx="6.5" ry="7" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="41" cy="22" r="3" fill="#09090b" />
      <ellipse cx="55" cy="24" rx="4.5" ry="5" fill="#fef08a" stroke="#3f5923" stroke-width="1.5" />
      <circle cx="55" cy="24" r="2.2" fill="#09090b" />
      <!-- Screen Door Shield -->
      <rect x="2" y="20" width="26" height="74" fill="#334155" stroke="#0f172a" stroke-width="3" rx="2" />
      <rect x="5" y="23" width="20" height="32" fill="#475569" stroke="#64748b" stroke-width="1" />
      <rect x="5" y="58" width="20" height="32" fill="#475569" stroke="#64748b" stroke-width="1" />
      <line x1="5" y1="23" x2="25" y2="55" stroke="#94a3b8" stroke-width="1" />
      <line x1="25" y1="23" x2="5" y2="55" stroke="#94a3b8" stroke-width="1" />
    </svg>
  `,

  gargantuar: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
      <ellipse cx="50" cy="96" rx="34" ry="5" fill="#090d16" opacity="0.45" />
      <!-- Giant Ripped Body -->
      <path d="M 18 36 L 12 76 L 80 76 L 74 36 Z" fill="#27272a" stroke="#18181b" stroke-width="3" />
      <path d="M 22 76 L 16 96 L 38 96 L 46 76 Z" fill="#18181b" stroke="#09090b" stroke-width="2.5" />
      <path d="M 48 76 L 56 96 L 76 96 L 70 76 Z" fill="#18181b" stroke="#09090b" stroke-width="2.5" />
      <!-- Massive Muscular Gray Skull -->
      <ellipse cx="45" cy="22" rx="24" ry="22" fill="#52525b" stroke="#27272a" stroke-width="3" />
      <path d="M 32 14 L 40 20 L 36 28" stroke="#ef4444" stroke-width="2" fill="none" />
      <!-- Glowing Red Eyes -->
      <circle cx="36" cy="20" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5" />
      <circle cx="36" cy="20" r="2" fill="#ffffff" />
      <circle cx="52" cy="20" r="5" fill="#ef4444" stroke="#7f1d1d" stroke-width="1.5" />
      <circle cx="52" cy="20" r="2" fill="#ffffff" />
      <!-- Giant Telephone Pole Club -->
      <rect x="0" y="6" width="16" height="86" fill="#78350f" stroke="#451a03" stroke-width="3" rx="2" />
      <rect x="-2" y="4" width="20" height="12" fill="#a1a1aa" stroke="#52525b" stroke-width="1" />
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
