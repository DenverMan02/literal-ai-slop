/**
 * High-fidelity SVG vector definitions for all game entities in Pixi.js.
 * Preserves 100% of the rich cartoon PvZ artwork.
 */

export const SVG_PLANTS: Record<string, string> = {
  sunflower: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Stem -->
  <path d="M 50 62 Q 47 78 50 92" stroke="#15803d" stroke-width="6" fill="none" stroke-linecap="round" />
  <!-- Leaves -->
  <path d="M 49 76 C 30 76 22 84 18 78 C 22 68 36 68 48 74 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 24 74 Q 36 73 48 74" stroke="#15803d" stroke-width="1.5" fill="none" />
  <path d="M 51 80 C 70 80 78 88 82 82 C 78 72 64 72 52 78 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 76 78 Q 64 77 52 78" stroke="#15803d" stroke-width="1.5" fill="none" />
  <!-- Leafy collar under head -->
  <path d="M 44 64 Q 50 68 56 64 Q 50 61 44 64 Z" fill="#16a34a" stroke="#15803d" stroke-width="1.5" />

  <!-- 10 distinct petals -->
  <g transform="translate(50, 44)">
    <ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(0.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(45.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(90.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(135.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(180.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(225.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(270.0)" /><ellipse cx="0" cy="-25" rx="10" ry="15" fill="#f59e0b" stroke="#b45309" stroke-width="2.5" transform="rotate(315.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(0.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(45.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(90.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(135.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(180.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(225.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(270.0)" /><ellipse cx="0" cy="-25" rx="8.5" ry="13.5" fill="#facc15" transform="rotate(315.0)" />
  </g>

  <!-- Large Brown Seed Face -->
  <circle cx="50" cy="44" r="21" fill="#5c2d11" stroke="#361805" stroke-width="3" />
  <circle cx="50" cy="44" r="19" fill="#78350f" />
  <!-- Seed texture highlight rim -->
  <path d="M 34 35 C 40 28 60 28 66 35 C 61 30 39 30 34 35 Z" fill="#92400e" opacity="0.7" />

  <!-- Happy Eyes -->
  <ellipse cx="43" cy="41" rx="4" ry="6.5" fill="#0f172a" />
  <ellipse cx="57" cy="41" rx="4" ry="6.5" fill="#0f172a" />
  <!-- Big specular dots -->
  <circle cx="44.5" cy="39" r="1.8" fill="#ffffff" />
  <circle cx="58.5" cy="39" r="1.8" fill="#ffffff" />
  <!-- Small secondary highlight -->
  <circle cx="41.8" cy="43.5" r="0.8" fill="#ffffff" />
  <circle cx="55.8" cy="43.5" r="0.8" fill="#ffffff" />

  <!-- Cheerful open mouth with tongue -->
  <path d="M 43 49 C 43 56 57 56 57 49 Z" fill="#240c02" stroke="#361805" stroke-width="1.8" stroke-linejoin="round" />
  <path d="M 46 51 C 48 54 52 54 54 51 C 52 53.5 48 53.5 46 51 Z" fill="#ef4444" />
</svg>
  `,

  peashooter: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <path d="M 46 60 Q 40 76 46 90" stroke="#15803d" stroke-width="6.5" fill="none" stroke-linecap="round" />
  <path d="M 46 86 C 30 84 20 90 14 84 C 20 76 34 78 44 84 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 46 88 C 62 86 72 92 78 86 C 72 78 58 80 48 86 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 42 88 C 34 94 28 98 22 96 C 24 90 34 88 42 88 Z" fill="#16a34a" stroke="#15803d" stroke-width="2" />
  <path d="M 50 88 C 58 94 64 98 70 96 C 68 90 58 88 50 88 Z" fill="#16a34a" stroke="#15803d" stroke-width="2" />
  <path d="M 30 38 C 12 28 14 16 22 14 C 32 18 36 28 34 38 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.8" stroke-linejoin="round" />
  <path d="M 18 16 Q 26 24 32 34" stroke="#15803d" stroke-width="1.5" fill="none" />
  <circle cx="44" cy="42" r="22" fill="#4ade80" stroke="#15803d" stroke-width="3" />
  <path d="M 28 32 C 34 24 48 24 54 30 C 46 25 32 26 28 32 Z" fill="#86efac" opacity="0.6" />
  <path d="M 58 35 L 70 33 L 70 51 L 58 49 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" />
  <ellipse cx="70" cy="42" rx="6" ry="10" fill="#22c55e" stroke="#15803d" stroke-width="3" />
  <ellipse cx="72" cy="42" rx="3.5" ry="7.5" fill="#14532d" />
  <circle cx="44" cy="34" r="6.5" fill="#ffffff" stroke="#15803d" stroke-width="1.8" />
  <circle cx="46" cy="34" r="3.4" fill="#0f172a" />
  <circle cx="47.5" cy="32.5" r="1.3" fill="#ffffff" />
  <circle cx="44.5" cy="35.5" r="0.6" fill="#ffffff" />
  <ellipse cx="34" cy="31" rx="3" ry="4" fill="#ffffff" stroke="#15803d" stroke-width="1.5" />
  <circle cx="34.5" cy="31" r="1.8" fill="#0f172a" />
  <circle cx="35" cy="30" r="0.7" fill="#ffffff" />
</svg>
  `,
  wallnut: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <ellipse cx="50" cy="94" rx="28" ry="6" fill="#1e293b" opacity="0.4" />
  <path d="M 50 10 C 72 10 82 35 80 68 C 78 88 66 94 50 94 C 34 94 22 88 20 68 C 18 35 28 10 50 10 Z" fill="#a16207" stroke="#5c2d11" stroke-width="3.5" stroke-linejoin="round" />
  <path d="M 50 13 C 68 13 76 36 74 66 C 72 84 62 90 50 90 C 38 90 28 84 26 66 C 24 36 32 13 50 13 Z" fill="#b45309" />
  <path d="M 48 15 C 62 15 70 34 68 56 C 62 30 40 20 30 38 C 30 22 38 15 48 15 Z" fill="#d97706" opacity="0.45" />
  <path d="M 28 50 Q 24 64 28 74" stroke="#5c2d11" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5" />
  <path d="M 72 48 Q 76 62 72 72" stroke="#5c2d11" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.5" />
  <path d="M 50 12 Q 49 22 51 28" stroke="#5c2d11" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.4" />
  <path d="M 33 34 Q 42 30 48 35" stroke="#5c2d11" stroke-width="2.2" fill="none" stroke-linecap="round" />
  <path d="M 54 35 Q 60 30 69 34" stroke="#5c2d11" stroke-width="2.2" fill="none" stroke-linecap="round" />
  <ellipse cx="40" cy="44" rx="7" ry="9" fill="#ffffff" stroke="#5c2d11" stroke-width="2" />
  <ellipse cx="43" cy="44" rx="4" ry="4.5" fill="#0f172a" />
  <circle cx="44.5" cy="42" r="1.5" fill="#ffffff" />
  <circle cx="41.5" cy="46" r="0.7" fill="#ffffff" />
  <ellipse cx="61" cy="44" rx="7" ry="9" fill="#ffffff" stroke="#5c2d11" stroke-width="2" />
  <ellipse cx="64" cy="44" rx="4" ry="4.5" fill="#0f172a" />
  <circle cx="65.5" cy="42" r="1.5" fill="#ffffff" />
  <circle cx="62.5" cy="46" r="0.7" fill="#ffffff" />
  <path d="M 44 65 Q 50 70 57 65" stroke="#5c2d11" stroke-width="2.8" fill="none" stroke-linecap="round" />
</svg>
  `,
  snowpea: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <path d="M 46 60 Q 40 76 46 90" stroke="#0369a1" stroke-width="6.5" fill="none" stroke-linecap="round" />
  <path d="M 46 86 C 30 84 20 90 14 84 C 20 76 34 78 44 84 Z" fill="#38bdf8" stroke="#0369a1" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 46 88 C 62 86 72 92 78 86 C 72 78 58 80 48 86 Z" fill="#38bdf8" stroke="#0369a1" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 42 88 C 34 94 28 98 22 96 C 24 90 34 88 42 88 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2" />
  <path d="M 50 88 C 58 94 64 98 70 96 C 68 90 58 88 50 88 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2" />
  <polygon points="28,34 8,24 24,18" fill="#7dd3fc" stroke="#0284c7" stroke-width="2" stroke-linejoin="round" />
  <polygon points="34,26 18,10 32,8" fill="#bae6fd" stroke="#0284c7" stroke-width="2" stroke-linejoin="round" />
  <polygon points="40,20 28,-2 42,-4" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" stroke-linejoin="round" />
  <polygon points="26,42 10,40 24,48" fill="#38bdf8" stroke="#0284c7" stroke-width="2" stroke-linejoin="round" />
  <polygon points="32,48 18,52 30,56" fill="#0284c7" stroke="#0369a1" stroke-width="1.8" stroke-linejoin="round" />
  <circle cx="44" cy="42" r="22" fill="#38bdf8" stroke="#0284c7" stroke-width="3" />
  <path d="M 28 32 C 34 24 48 24 54 30 C 46 25 32 26 28 32 Z" fill="#bae6fd" opacity="0.6" />
  <path d="M 58 35 L 70 33 L 70 51 L 58 49 Z" fill="#0284c7" stroke="#0369a1" stroke-width="2.5" />
  <ellipse cx="70" cy="42" rx="6" ry="10" fill="#0284c7" stroke="#0369a1" stroke-width="3" />
  <ellipse cx="72" cy="42" rx="3.5" ry="7.5" fill="#082f49" />
  <circle cx="44" cy="34" r="6.5" fill="#ffffff" stroke="#0369a1" stroke-width="1.8" />
  <circle cx="46" cy="34" r="3.4" fill="#082f49" />
  <circle cx="47.5" cy="32.5" r="1.3" fill="#ffffff" />
  <circle cx="44.5" cy="35.5" r="0.6" fill="#ffffff" />
  <ellipse cx="34" cy="31" rx="3" ry="4" fill="#ffffff" stroke="#0369a1" stroke-width="1.5" />
  <circle cx="34.5" cy="31" r="1.8" fill="#082f49" />
  <circle cx="35" cy="30" r="0.7" fill="#ffffff" />
</svg>
  `,
  repeater: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <path d="M 46 60 Q 40 76 46 90" stroke="#14532d" stroke-width="6.5" fill="none" stroke-linecap="round" />
  <path d="M 46 86 C 30 84 20 90 14 84 C 20 76 34 78 44 84 Z" fill="#15803d" stroke="#14532d" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 46 88 C 62 86 72 92 78 86 C 72 78 58 80 48 86 Z" fill="#15803d" stroke="#14532d" stroke-width="2.5" stroke-linejoin="round" />
  <!-- Two swept back leaves -->
  <path d="M 28 34 C 10 24 12 12 20 10 C 28 14 34 24 32 34 Z" fill="#16a34a" stroke="#14532d" stroke-width="2.5" stroke-linejoin="round" />
  <path d="M 32 44 C 12 36 10 24 18 20 C 28 24 36 34 34 44 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" stroke-linejoin="round" />
  <circle cx="44" cy="42" r="22" fill="#16a34a" stroke="#14532d" stroke-width="3" />
  <path d="M 28 32 C 34 24 48 24 54 30 C 46 25 32 26 28 32 Z" fill="#4ade80" opacity="0.5" />
  <path d="M 58 34 L 72 32 L 72 52 L 58 50 Z" fill="#15803d" stroke="#14532d" stroke-width="2.5" />
  <ellipse cx="72" cy="42" rx="6.5" ry="11" fill="#15803d" stroke="#14532d" stroke-width="3" />
  <ellipse cx="74" cy="42" rx="4" ry="8" fill="#052e16" />
  <!-- Determined Eyebrow -->
  <path d="M 36 27 L 52 32" stroke="#14532d" stroke-width="3" stroke-linecap="round" />
  <circle cx="44" cy="35" r="6.5" fill="#ffffff" stroke="#14532d" stroke-width="1.8" />
  <circle cx="46" cy="35" r="3.4" fill="#0f172a" />
  <circle cx="47.5" cy="33.5" r="1.3" fill="#ffffff" />
</svg>
  `,
  cherrybomb: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Green Y-stem -->
  <path d="M 34 48 C 36 28 48 18 50 16 C 52 18 64 28 66 48" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round" />
  <!-- Burning Sputtering Fuse -->
  <path d="M 50 16 Q 48 8 50 4" stroke="#ca8a04" stroke-width="3" stroke-dasharray="2 1" fill="none" />
  <circle cx="50" cy="3" r="5" fill="#facc15" />
  <circle cx="50" cy="3" r="3" fill="#ef4444" />
  <path d="M 44 1 L 46 3 M 54 1 L 52 3 M 50 -2 L 50 1" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" />

  <!-- Left Cherry (slightly back) -->
  <g>
    <circle cx="34" cy="58" r="19" fill="#dc2626" stroke="#7f1d1d" stroke-width="3" />
    <circle cx="28" cy="50" r="4" fill="#ffffff" opacity="0.4" />
    <!-- Angry Eyes & Brow -->
    <path d="M 24 50 L 36 55" stroke="#450a0a" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="30" cy="57" r="3" fill="#0f172a" />
    <circle cx="31" cy="56" r="1" fill="#ffffff" />
    <!-- Gritting Teeth / Grimace -->
    <path d="M 26 66 Q 34 62 40 67" stroke="#450a0a" stroke-width="2.5" fill="none" stroke-linecap="round" />
  </g>

  <!-- Right Cherry (front & furious) -->
  <g>
    <circle cx="64" cy="60" r="20" fill="#ef4444" stroke="#7f1d1d" stroke-width="3" />
    <circle cx="58" cy="51" r="4.5" fill="#ffffff" opacity="0.45" />
    <!-- Furrowed Angry Brow -->
    <path d="M 74 51 L 60 56" stroke="#450a0a" stroke-width="3" stroke-linecap="round" />
    <circle cx="65" cy="58" r="3.5" fill="#0f172a" />
    <circle cx="66" cy="57" r="1.2" fill="#ffffff" />
    <!-- Gritted Teeth -->
    <rect x="56" y="67" width="14" height="6" rx="2" fill="#ffffff" stroke="#450a0a" stroke-width="1.5" />
    <line x1="60" y1="67" x2="60" y2="73" stroke="#450a0a" stroke-width="1" />
    <line x1="65" y1="67" x2="65" y2="73" stroke="#450a0a" stroke-width="1" />
  </g>
</svg>
  `,
  potatomine: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Dirt Mound Base with clods -->
  <ellipse cx="50" cy="85" rx="36" ry="12" fill="#78350f" stroke="#451a03" stroke-width="3" />
  <polygon points="18,85 24,78 30,86" fill="#92400e" stroke="#451a03" stroke-width="1.5" />
  <polygon points="70,86 76,78 82,85" fill="#92400e" stroke="#451a03" stroke-width="1.5" />
  <polygon points="42,88 48,82 54,88" fill="#b45309" />

  <!-- Chunky Potato Body -->
  <path d="M 50 38 C 68 38 74 52 72 74 C 70 86 62 88 50 88 C 38 88 30 86 28 74 C 26 52 32 38 50 38 Z" fill="#b45309" stroke="#78350f" stroke-width="3" />
  <path d="M 48 40 C 62 40 68 52 66 70 C 62 50 40 45 32 58 C 30 48 36 40 48 40 Z" fill="#d97706" opacity="0.45" />

  <!-- Antenna Rod & Bright Blinking Red Bulb -->
  <line x1="50" y1="38" x2="50" y2="18" stroke="#475569" stroke-width="4" stroke-linecap="round" />
  <circle cx="50" cy="14" r="8" fill="#ef4444" stroke="#991b1b" stroke-width="2.5" />
  <circle cx="53" cy="12" r="2.5" fill="#ffffff" />
  <!-- Yellow glow aura -->
  <circle cx="50" cy="14" r="12" fill="none" stroke="#facc15" stroke-width="1.5" stroke-dasharray="3 2" opacity="0.75" />

  <!-- Cute Big Eyes looking up eagerly -->
  <ellipse cx="40" cy="62" rx="5" ry="6.5" fill="#ffffff" stroke="#78350f" stroke-width="1.8" />
  <circle cx="41" cy="61" r="3" fill="#0f172a" />
  <circle cx="42.5" cy="59.5" r="1.2" fill="#ffffff" />
  <ellipse cx="60" cy="62" rx="5" ry="6.5" fill="#ffffff" stroke="#78350f" stroke-width="1.8" />
  <circle cx="61" cy="61" r="3" fill="#0f172a" />
  <circle cx="62.5" cy="59.5" r="1.2" fill="#ffffff" />

  <!-- Cute little mouth -->
  <path d="M 46 74 Q 50 78 54 74" stroke="#78350f" stroke-width="2.2" fill="none" stroke-linecap="round" />
</svg>
  `,
  chomper: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Thick green stem with spikes -->
  <path d="M 44 60 Q 38 78 44 92" stroke="#15803d" stroke-width="7" fill="none" stroke-linecap="round" />
  <path d="M 38 88 C 22 86 16 92 12 86 C 18 78 30 80 40 86 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" />
  <path d="M 48 88 C 64 86 70 92 76 86 C 70 78 58 80 48 86 Z" fill="#22c55e" stroke="#15803d" stroke-width="2.5" />

  <!-- Big Purple Flytrap Head: Upper & Lower Jaws -->
  <g>
    <!-- Upper Cranium & Jaw -->
    <path d="M 26 30 C 30 10 70 8 78 28 C 80 38 68 44 48 44 C 30 44 24 38 26 30 Z" fill="#7e22ce" stroke="#4c1d95" stroke-width="3" stroke-linejoin="round" />
    <!-- Lower Jaw Drooping Down -->
    <path d="M 32 44 C 36 64 68 64 74 48 C 60 52 46 52 32 44 Z" fill="#6b21a8" stroke="#4c1d95" stroke-width="3" stroke-linejoin="round" />
    
    <!-- Fleshy Green Lips -->
    <path d="M 28 42 Q 54 48 76 38" stroke="#22c55e" stroke-width="3.5" fill="none" stroke-linecap="round" />
    <path d="M 32 46 Q 52 56 74 46" stroke="#22c55e" stroke-width="3.5" fill="none" stroke-linecap="round" />

    <!-- Dark Red/Burgundy Mouth Interior with Sharp White Teeth -->
    <polygon points="36,43 40,36 44,43" fill="#ffffff" />
    <polygon points="46,43 50,35 54,43" fill="#ffffff" />
    <polygon points="56,43 60,36 64,43" fill="#ffffff" />
    <polygon points="66,41 70,35 74,40" fill="#ffffff" />
    
    <polygon points="38,47 42,53 46,47" fill="#ffffff" />
    <polygon points="48,48 52,55 56,48" fill="#ffffff" />
    <polygon points="58,47 62,54 66,47" fill="#ffffff" />

    <!-- Cute little yellow eyes on top -->
    <circle cx="44" cy="20" r="4.5" fill="#facc15" stroke="#a16207" stroke-width="1.8" />
    <circle cx="45" cy="20" r="2.2" fill="#0f172a" />
    <circle cx="46" cy="19" r="0.8" fill="#ffffff" />
  </g>
</svg>
  `,
  squash: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <ellipse cx="50" cy="94" rx="30" ry="5.5" fill="#1e293b" opacity="0.4" />
  <!-- Twisted Stem on top -->
  <path d="M 48 18 Q 50 6 58 4 Q 56 12 52 18 Z" fill="#15803d" stroke="#14532d" stroke-width="2" />
  
  <!-- Plump Bell Squash Body -->
  <path d="M 42 18 C 34 26 28 46 22 70 C 18 86 32 94 50 94 C 68 94 82 86 78 70 C 72 46 66 26 58 18 C 52 14 48 14 42 18 Z" fill="#22c55e" stroke="#15803d" stroke-width="3.5" stroke-linejoin="round" />
  <path d="M 44 20 C 38 28 32 48 26 70 C 24 82 34 88 50 88 C 40 86 32 76 34 60 C 36 44 42 26 44 20 Z" fill="#4ade80" opacity="0.4" />

  <!-- Iconic Heavy Furrowed Eyebrow Ridges -->
  <path d="M 32 44 Q 44 49 48 46" stroke="#14532d" stroke-width="4.5" fill="none" stroke-linecap="round" />
  <path d="M 68 44 Q 56 49 52 46" stroke="#14532d" stroke-width="4.5" fill="none" stroke-linecap="round" />

  <!-- Two small glaring eyes staring down angrily -->
  <ellipse cx="40" cy="54" rx="5.5" ry="6.5" fill="#ffffff" stroke="#14532d" stroke-width="2" />
  <circle cx="42" cy="55" r="3" fill="#0f172a" />
  <circle cx="43.2" cy="54" r="1.1" fill="#ffffff" />

  <ellipse cx="60" cy="54" rx="5.5" ry="6.5" fill="#ffffff" stroke="#14532d" stroke-width="2" />
  <circle cx="58" cy="55" r="3" fill="#0f172a" />
  <circle cx="59.2" cy="54" r="1.1" fill="#ffffff" />

  <!-- Deep grumpy scowl mouth -->
  <path d="M 40 76 Q 50 68 60 76" stroke="#14532d" stroke-width="3.5" fill="none" stroke-linecap="round" />
  <!-- Under-chin crease -->
  <path d="M 44 82 Q 50 85 56 82" stroke="#14532d" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6" />
</svg>
  `,
  jalapeno: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Heat aura / sparks -->
  <path d="M 30 30 Q 24 16 34 8" stroke="#f97316" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6" />
  <path d="M 70 30 Q 76 16 66 8" stroke="#f97316" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.6" />

  <!-- Green Stem & Calyx Cap -->
  <path d="M 50 20 Q 52 8 60 6" stroke="#15803d" stroke-width="5" fill="none" stroke-linecap="round" />
  <polygon points="36,22 44,26 50,20 56,26 64,22 50,18" fill="#22c55e" stroke="#15803d" stroke-width="2" />

  <!-- Tapering Curved Chili Body -->
  <path d="M 40 22 C 34 38 32 64 38 84 C 42 94 48 96 52 90 C 62 76 68 48 60 22 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" stroke-linejoin="round" />
  <path d="M 42 24 C 36 38 36 64 42 82 C 40 64 42 42 48 24 Z" fill="#ef4444" />

  <!-- Furrowed Fiery Eyebrows -->
  <path d="M 36 40 L 46 46" stroke="#450a0a" stroke-width="3.5" stroke-linecap="round" />
  <path d="M 64 40 L 54 46" stroke="#450a0a" stroke-width="3.5" stroke-linecap="round" />

  <!-- Glowing Fiery Eyes -->
  <ellipse cx="42" cy="48" rx="4.5" ry="5.5" fill="#fef08a" stroke="#450a0a" stroke-width="1.8" />
  <circle cx="43" cy="49" r="2.5" fill="#450a0a" />
  <ellipse cx="58" cy="48" rx="4.5" ry="5.5" fill="#fef08a" stroke="#450a0a" stroke-width="1.8" />
  <circle cx="57" cy="49" r="2.5" fill="#450a0a" />

  <!-- Gritted Teeth in Rage -->
  <rect x="42" y="62" width="16" height="6" rx="2" fill="#ffffff" stroke="#450a0a" stroke-width="1.8" />
  <line x1="47" y1="62" x2="47" y2="68" stroke="#450a0a" stroke-width="1.2" />
  <line x1="53" y1="62" x2="53" y2="68" stroke="#450a0a" stroke-width="1.2" />
</svg>
  `,
  spikeweed: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <ellipse cx="50" cy="80" rx="44" ry="14" fill="#14532d" stroke="#052e16" stroke-width="2.5" />
  <!-- Spiky bramble leaves around rim -->
  <polygon points="12,80 6,70 18,74" fill="#15803d" />
  <polygon points="88,80 94,70 82,74" fill="#15803d" />
  <polygon points="30,86 24,94 36,90" fill="#16a34a" />
  <polygon points="70,86 76,94 64,90" fill="#16a34a" />

  <!-- Sharp Wooden Spikes jutting straight up -->
  <polygon points="18,80 26,38 34,80" fill="#854d0e" stroke="#451a03" stroke-width="2.5" stroke-linejoin="round" />
  <polygon points="26,38 29,80 34,80" fill="#a16207" />

  <polygon points="34,80 44,28 52,80" fill="#a16207" stroke="#451a03" stroke-width="2.8" stroke-linejoin="round" />
  <polygon points="44,28 48,80 52,80" fill="#ca8a04" />

  <polygon points="50,80 60,30 68,80" fill="#854d0e" stroke="#451a03" stroke-width="2.8" stroke-linejoin="round" />
  <polygon points="60,30 64,80 68,80" fill="#a16207" />

  <polygon points="68,80 76,42 84,80" fill="#713f12" stroke="#451a03" stroke-width="2.5" stroke-linejoin="round" />
  <polygon points="76,42 80,80 84,80" fill="#854d0e" />

  <!-- Mischievous Glowing Yellow Eyes peeking from the bramble -->
  <ellipse cx="44" cy="74" rx="4.5" ry="3.5" fill="#facc15" stroke="#451a03" stroke-width="1.5" />
  <circle cx="45" cy="74" r="2" fill="#0f172a" />
  <ellipse cx="58" cy="74" rx="4.5" ry="3.5" fill="#facc15" stroke="#451a03" stroke-width="1.5" />
  <circle cx="59" cy="74" r="2" fill="#0f172a" />
</svg>
  `,
  torchwood: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <ellipse cx="50" cy="88" rx="32" ry="7" fill="#1e293b" opacity="0.4" />

  <!-- Tree Stump Body (bark texture) -->
  <path d="M 28 46 L 24 88 L 76 88 L 72 46 Z" fill="#78350f" stroke="#451a03" stroke-width="3" stroke-linejoin="round" />
  <!-- Hollow top rim & cut wood core -->
  <ellipse cx="50" cy="46" rx="22" ry="9" fill="#92400e" stroke="#451a03" stroke-width="2.5" />
  <ellipse cx="50" cy="46" rx="16" ry="6" fill="#451a03" />

  <!-- Bark Ridges & Knot -->
  <path d="M 32 54 Q 30 70 34 82" stroke="#451a03" stroke-width="2" fill="none" opacity="0.5" />
  <path d="M 68 54 Q 70 70 66 82" stroke="#451a03" stroke-width="2" fill="none" opacity="0.5" />

  <!-- Cheerful Carved Face on Front of Trunk -->
  <ellipse cx="40" cy="66" rx="4" ry="5.5" fill="#facc15" stroke="#451a03" stroke-width="1.5" />
  <circle cx="41" cy="66" r="2.2" fill="#451a03" />
  <ellipse cx="60" cy="66" rx="4" ry="5.5" fill="#facc15" stroke="#451a03" stroke-width="1.5" />
  <circle cx="61" cy="66" r="2.2" fill="#451a03" />
  <!-- Smiling mouth -->
  <path d="M 42 76 Q 50 82 58 76" stroke="#451a03" stroke-width="2.8" fill="none" stroke-linecap="round" />

  <!-- Roaring Multi-Layer Cartoon Fire Bursting Out of Stump -->
  <!-- Outer Orange Flame -->
  <path d="M 32 44 C 30 22 42 10 50 2 C 58 10 70 22 68 44 C 62 34 56 46 50 36 C 44 46 38 34 32 44 Z" fill="#f97316" stroke="#c2410c" stroke-width="2.5" stroke-linejoin="round" />
  <!-- Inner Golden Core Flame -->
  <path d="M 38 42 C 38 26 46 16 50 8 C 54 16 62 26 62 42 C 58 36 54 42 50 34 C 46 42 42 36 38 42 Z" fill="#facc15" />
  <!-- White-hot center -->
  <ellipse cx="50" cy="38" rx="6" ry="10" fill="#ffffff" opacity="0.8" />
</svg>
  `,
  tallnut: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <ellipse cx="50" cy="95" rx="26" ry="5" fill="#1e293b" opacity="0.4" />
  <!-- Towering Walnut Body (twice as tall as regular Wall-nut) -->
  <path d="M 50 5 C 72 5 78 30 76 65 C 74 92 64 95 50 95 C 36 95 26 92 24 65 C 22 30 28 5 50 5 Z" fill="#92400e" stroke="#451a03" stroke-width="3.5" stroke-linejoin="round" />
  <path d="M 50 8 C 68 8 74 32 72 65 C 70 88 60 91 50 91 C 40 91 30 88 28 65 C 26 32 32 8 50 8 Z" fill="#b45309" />
  
  <!-- Bark fissures -->
  <path d="M 30 40 Q 26 55 30 70" stroke="#451a03" stroke-width="2" fill="none" opacity="0.45" />
  <path d="M 70 40 Q 74 55 70 70" stroke="#451a03" stroke-width="2" fill="none" opacity="0.45" />

  <!-- Stoic, Heavy-Lidded Eyes -->
  <path d="M 34 32 L 48 35" stroke="#451a03" stroke-width="2.5" stroke-linecap="round" />
  <path d="M 66 32 L 52 35" stroke="#451a03" stroke-width="2.5" stroke-linecap="round" />
  
  <ellipse cx="40" cy="40" rx="5.5" ry="7.5" fill="#ffffff" stroke="#451a03" stroke-width="1.8" />
  <circle cx="42" cy="40" r="3.2" fill="#0f172a" />
  <circle cx="43.5" cy="38.5" r="1.2" fill="#ffffff" />

  <ellipse cx="60" cy="40" rx="5.5" ry="7.5" fill="#ffffff" stroke="#451a03" stroke-width="1.8" />
  <circle cx="62" cy="40" r="3.2" fill="#0f172a" />
  <circle cx="63.5" cy="38.5" r="1.2" fill="#ffffff" />

  <!-- Flat, Immovable Determined Mouth -->
  <line x1="42" y1="58" x2="58" y2="58" stroke="#451a03" stroke-width="3" stroke-linecap="round" />
  <!-- Heavy Chin Jowl -->
  <path d="M 44 68 Q 50 72 56 68" stroke="#451a03" stroke-width="2.2" fill="none" stroke-linecap="round" opacity="0.6" />
</svg>
  `,
  fumeshroom: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Pale Lavender Stem Base -->
  <path d="M 42 56 L 40 88 L 60 88 L 58 56 Z" fill="#e9d5ff" stroke="#7e22ce" stroke-width="2.5" stroke-linejoin="round" />
  <ellipse cx="50" cy="88" rx="14" ry="4" fill="#d8b4fe" />

  <!-- Big Purple Cap -->
  <ellipse cx="50" cy="40" rx="30" ry="24" fill="#9333ea" stroke="#581c87" stroke-width="3" />
  <!-- Dark Purple Mushroom Spots -->
  <ellipse cx="36" cy="28" rx="6" ry="4" fill="#6b21a8" />
  <ellipse cx="56" cy="24" rx="7" ry="5" fill="#6b21a8" />
  <ellipse cx="68" cy="36" rx="5" ry="4" fill="#6b21a8" />

  <!-- Flared Snout Nozzle extending right -->
  <path d="M 64 36 L 78 32 L 78 52 L 64 48 Z" fill="#7e22ce" stroke="#581c87" stroke-width="2.5" />
  <ellipse cx="78" cy="42" rx="5" ry="10" fill="#7e22ce" stroke="#581c87" stroke-width="2.8" />
  <ellipse cx="80" cy="42" rx="3" ry="7.5" fill="#3b0764" />

  <!-- Sleepy Eyes -->
  <ellipse cx="44" cy="38" rx="5" ry="6.5" fill="#fef08a" stroke="#581c87" stroke-width="1.8" />
  <circle cx="45" cy="39" r="2.8" fill="#0f172a" />
  <circle cx="46" cy="37.5" r="1" fill="#ffffff" />
  <!-- Droopy lid -->
  <path d="M 39 36 Q 44 39 49 36" stroke="#581c87" stroke-width="2" fill="none" />
</svg>
  `,
  melonpult: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Wooden/Leafy Catapult Frame on Lawn -->
  <ellipse cx="50" cy="92" rx="32" ry="6" fill="#1e293b" opacity="0.35" />
  <path d="M 24 66 L 20 88 L 80 88 L 76 66 Z" fill="#15803d" stroke="#14532d" stroke-width="3" stroke-linejoin="round" />
  <!-- Wheels -->
  <circle cx="30" cy="86" r="8" fill="#78350f" stroke="#451a03" stroke-width="2" />
  <circle cx="30" cy="86" r="3" fill="#ca8a04" />
  <circle cx="70" cy="86" r="8" fill="#78350f" stroke="#451a03" stroke-width="2" />
  <circle cx="70" cy="86" r="3" fill="#ca8a04" />

  <!-- Catapult Arm reaching up & back -->
  <line x1="38" y1="72" x2="62" y2="30" stroke="#78350f" stroke-width="7" stroke-linecap="round" />
  <ellipse cx="64" cy="28" rx="12" ry="8" fill="#92400e" stroke="#451a03" stroke-width="2" />

  <!-- Big Striped Green Watermelon Loaded in Basket -->
  <ellipse cx="64" cy="22" rx="18" ry="14" fill="#22c55e" stroke="#14532d" stroke-width="2.8" transform="rotate(-15 64 22)" />
  <!-- Dark green watermelon stripes -->
  <path d="M 50 18 Q 64 22 78 26" stroke="#15803d" stroke-width="3" fill="none" />
  <path d="M 52 14 Q 64 16 76 20" stroke="#15803d" stroke-width="2.5" fill="none" />
  <path d="M 52 24 Q 64 28 76 32" stroke="#15803d" stroke-width="2.5" fill="none" />

  <!-- Front face on the catapult body -->
  <ellipse cx="44" cy="74" rx="4" ry="5.5" fill="#facc15" stroke="#14532d" stroke-width="1.5" />
  <circle cx="45" cy="74" r="2.2" fill="#0f172a" />
  <ellipse cx="60" cy="74" rx="4" ry="5.5" fill="#facc15" stroke="#14532d" stroke-width="1.5" />
  <circle cx="61" cy="74" r="2.2" fill="#0f172a" />
</svg>
  `,
  hypnoshroom: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120">
  <!-- Pale Violet Stem -->
  <path d="M 44 56 L 42 88 L 58 88 L 56 56 Z" fill="#fdf4ff" stroke="#c026d3" stroke-width="2.5" stroke-linejoin="round" />

  <!-- Psychedelic Rainbow Swirling Mushroom Cap -->
  <ellipse cx="50" cy="40" rx="30" ry="24" fill="#d946ef" stroke="#86198f" stroke-width="3" />
  <!-- Swirling Psychedelic Color Bands -->
  <ellipse cx="50" cy="40" rx="23" ry="18" fill="#06b6d4" />
  <ellipse cx="50" cy="40" rx="16" ry="12" fill="#facc15" />
  <ellipse cx="50" cy="40" rx="9" ry="6" fill="#ec4899" />

  <!-- Hypnotic Spiral Eyes -->
  <circle cx="42" cy="40" r="6" fill="#ffffff" stroke="#86198f" stroke-width="1.5" />
  <path d="M 42 36 A 4 4 0 1 0 44 41 A 2 2 0 1 0 42 39" stroke="#7e22ce" stroke-width="2" fill="none" />

  <circle cx="58" cy="40" r="6" fill="#ffffff" stroke="#86198f" stroke-width="1.5" />
  <path d="M 58 36 A 4 4 0 1 0 60 41 A 2 2 0 1 0 58 39" stroke="#7e22ce" stroke-width="2" fill="none" />
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
