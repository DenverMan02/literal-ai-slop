import React, { useState } from 'react';
import { PlantId, ZombieId } from '../../types/game';
import { PLANT_DEFINITIONS } from '../../constants/plants';
import { ZOMBIE_DEFINITIONS } from '../../constants/zombies';
import { PlantArtwork } from '../artwork/PlantArtwork';
import { ZombieArtwork } from '../artwork/ZombieArtwork';
import { BookOpen, Shield, Zap, Heart, Sun } from 'lucide-react';

export const AlmanacView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'PLANTS' | 'ZOMBIES'>('PLANTS');
  const [selectedPlantId, setSelectedPlantId] = useState<PlantId>('peashooter');
  const [selectedZombieId, setSelectedZombieId] = useState<ZombieId>('basic');

  const plantList = Object.values(PLANT_DEFINITIONS);
  const zombieList = Object.values(ZOMBIE_DEFINITIONS);

  const selectedPlant = PLANT_DEFINITIONS[selectedPlantId];
  const selectedZombie = ZOMBIE_DEFINITIONS[selectedZombieId];

  return (
    <div className="w-full max-w-4xl mx-auto py-8 px-4 flex flex-col gap-6 select-none">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-emerald-400" />
            <span>Suburban Tactical Almanac</span>
          </h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Comprehensive field dossier on all known domestic defenders and undead intruders
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('PLANTS')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'PLANTS'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Plants Roster
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('ZOMBIES')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${
              activeTab === 'ZOMBIES'
                ? 'bg-stone-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Zombies Dossier
          </button>
        </div>
      </div>

      {/* Main Grid: Selection List (Left) + Detail Dossier (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Thumbnail Roster */}
        <div className="md:col-span-5 flex flex-col gap-2">
          {activeTab === 'PLANTS' ? (
            <div className="grid grid-cols-2 gap-2">
              {plantList.map((plant) => (
                <button
                  key={plant.id}
                  type="button"
                  onClick={() => setSelectedPlantId(plant.id)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    selectedPlantId === plant.id
                      ? 'bg-emerald-950/60 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                      : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="w-10 h-10 shrink-0">
                    <PlantArtwork plantId={plant.id} className="w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-slate-100 truncate">
                      {plant.name}
                    </span>
                    <span className="text-[11px] font-mono text-amber-300">
                      {plant.cost} Sun
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {zombieList.map((zombie) => (
                <button
                  key={zombie.id}
                  type="button"
                  onClick={() => setSelectedZombieId(zombie.id)}
                  className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                    selectedZombieId === zombie.id
                      ? 'bg-stone-900 border-red-500 shadow-md ring-2 ring-red-500/20'
                      : 'bg-slate-900/80 border-slate-800 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="w-10 h-12 shrink-0">
                    <ZombieArtwork zombieId={zombie.id} className="w-full h-full" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-slate-100 truncate">
                      {zombie.name}
                    </span>
                    <span className="text-[11px] font-mono text-red-400">
                      {zombie.maxHp} HP
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Detail Dossier */}
        <div className="md:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          {activeTab === 'PLANTS' && selectedPlant ? (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-3 shrink-0 shadow-inner">
                  <PlantArtwork plantId={selectedPlant.id} className="w-full h-full" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                    {selectedPlant.category} Flora
                  </span>
                  <h2 className="text-2xl font-extrabold text-white">
                    {selectedPlant.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {selectedPlant.description}
                  </p>
                </div>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block font-sans">Sun Cost</span>
                  <span className="text-amber-300 font-bold text-base flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 fill-amber-300" />
                    {selectedPlant.cost}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block font-sans">Cooldown</span>
                  <span className="text-slate-200 font-bold text-base">
                    {selectedPlant.cooldownTurns} {selectedPlant.cooldownTurns === 1 ? 'Turn' : 'Turns'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block font-sans">Health</span>
                  <span className="text-emerald-400 font-bold text-base flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5" />
                    {selectedPlant.maxHp} HP
                  </span>
                </div>
              </div>

              {/* Action Description */}
              <div className="p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl">
                <span className="text-xs font-bold text-emerald-400 block mb-1">
                  Turn Resolution Action:
                </span>
                <p className="text-xs text-slate-300">
                  {selectedPlant.turnActionDescription}
                </p>
              </div>
            </div>
          ) : activeTab === 'ZOMBIES' && selectedZombie ? (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-28 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center p-3 shrink-0 shadow-inner">
                  <ZombieArtwork zombieId={selectedZombie.id} className="w-full h-full" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-red-400">
                    {selectedZombie.armorType || 'Standard'} Reanimated
                  </span>
                  <h2 className="text-2xl font-extrabold text-white">
                    {selectedZombie.name}
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {selectedZombie.description}
                  </p>
                </div>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/80 rounded-xl border border-slate-800 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block font-sans">Toughness</span>
                  <span className="text-red-400 font-bold text-base flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5" />
                    {selectedZombie.maxHp} HP
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block font-sans">Speed</span>
                  <span className="text-slate-200 font-bold text-base flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    {selectedZombie.speedTilesPerTurn === 1 ? '1 Tile/Turn' : '1 Tile/2 Turns'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block font-sans">Bite Attack</span>
                  <span className="text-orange-400 font-bold text-base">
                    {selectedZombie.damagePerTurn} DMG/Turn
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
