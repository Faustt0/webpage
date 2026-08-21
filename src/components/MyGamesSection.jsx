import React from 'react';
import { Zap } from 'lucide-react';
import { games } from '../data/games';

// ============================================================================
// 1. Beyond Evolution Thematic Card (Tactical Post-Apocalyptic HUD)
// ============================================================================
function BeyondEvolutionCard({ game, onSelectGame }) {
  return (
    <div
      onClick={() => onSelectGame(game.id)}
      className="cursor-pointer group relative h-full transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Outer Chamfered Gradient Frame */}
      <div 
        className="p-[2px] h-full bg-gradient-to-br from-sky-400 via-sky-600/40 to-blue-900 transition-all duration-500 group-hover:from-sky-300 group-hover:via-cyan-400 group-hover:to-blue-600 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
        style={{ clipPath: 'polygon(0 12px, 12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
      >
        <div 
          className="bg-[#050e1b] p-5 sm:p-6 h-full flex flex-col justify-between relative overflow-hidden space-y-3"
          style={{ clipPath: 'polygon(0 11px, 11px 0, 100% 0, 100% calc(100% - 11px), calc(100% - 11px) 100%, 0 100%)' }}
        >
          {/* Tactical Background Grid */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(56, 189, 248, 0.4) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative z-10 space-y-2.5">
            {/* Top Row: Status & Abbreviation */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-sky-950/90 border border-sky-400/50 text-sky-300 font-scifi text-[11px] font-bold tracking-wider uppercase shadow-[0_0_10px_rgba(56,189,248,0.2)]">
                {game.status}
              </span>
              <span className="text-xs font-scifi text-sky-400 font-bold uppercase tracking-widest flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-sky-400 group-hover:animate-pulse" />
                <span>{game.shortTitle}</span>
              </span>
            </div>

            {/* Name & Genre */}
            <div>
              <h3 className="font-scifi text-2xl sm:text-3xl font-black text-white group-hover:text-sky-300 transition-colors tracking-tight leading-tight">
                {game.title}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-sky-400/90 tracking-wider mt-1">
                {game.genre}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. Growing Explorations Thematic Card (16-Bit Medieval Fantasy RPG)
// ============================================================================
function GrowingExplorationsCard({ game, onSelectGame }) {
  return (
    <div
      onClick={() => onSelectGame(game.id)}
      className="cursor-pointer group relative h-full transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* 16-Bit Pixel Wooden Box Frame */}
      <div className="p-1 h-full bg-[#2b170a] border-4 border-[#523318] shadow-[0_5px_0_#1c0f05] group-hover:shadow-[0_6px_0_#1c0f05,0_0_25px_rgba(245,158,11,0.3)] group-hover:border-[#854d0e] transition-all">
        <div className="bg-[#120c06] p-4 sm:p-5 h-full flex flex-col justify-between space-y-3 relative overflow-hidden">
          
          {/* Torchlight Ambient Glow */}
          <div 
            className="absolute top-0 right-0 w-48 h-48 bg-amber-600/15 blur-3xl pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity"
          />

          <div className="relative z-10 space-y-2.5">
            {/* Top Row: Status & Abbreviation */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-[#2b1408] border-2 border-[#ea580c] text-amber-300 font-pixel text-[9px]">
                {game.status}
              </span>
              <span className="font-pixel text-xs text-amber-400">
                {game.shortTitle}
              </span>
            </div>

            {/* Name & Genre */}
            <div>
              <h3 className="font-pixel text-xl sm:text-2xl text-amber-200 group-hover:text-amber-100 transition-colors drop-shadow-[0_2px_0_#451a03] leading-tight">
                {game.title}
              </h3>
              <p className="font-medieval text-sm sm:text-base text-amber-400 mt-1 font-semibold">
                {game.genre}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. Expanding Horizons Thematic Card (High-Contrast White & Red Sci-Fi Pixel)
// ============================================================================
function ExpandingHorizonsCard({ game, onSelectGame }) {
  return (
    <div
      onClick={() => onSelectGame(game.id)}
      className="cursor-pointer group relative h-full transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* High-Contrast Sci-Fi Pixel Box Frame */}
      <div className="bg-[#0b0c12] border-2 border-white/80 p-1 h-full relative shadow-[0_0_15px_rgba(239,68,68,0.2)] group-hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] group-hover:border-white transition-all">
        {/* Red Pixel Corner Squares */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-red-500" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-red-500" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-red-500" />

        <div className="bg-[#0f111a] p-4 sm:p-5 h-full flex flex-col justify-between space-y-3 relative overflow-hidden">
          
          <div className="relative z-10 space-y-2.5">
            {/* Top Row: Status & Abbreviation */}
            <div className="flex items-center justify-between">
              <span className="px-2.5 py-0.5 bg-[#18080a] border-2 border-red-500 text-white font-pixel text-[9px]">
                {game.status}
              </span>
              <span className="font-pixel text-xs text-red-400">
                {game.shortTitle}
              </span>
            </div>

            {/* Name & Genre */}
            <div>
              <h3 className="font-pixel text-xl sm:text-2xl text-white group-hover:text-red-300 transition-colors drop-shadow-[0_2px_0_#ef4444] leading-tight">
                {game.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-red-400 mt-1 font-semibold">
                {game.genre}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. Perfect Specimen Thematic Card (Classified Industrial Bio-Factory)
// ============================================================================
function PerfectSpecimenCard({ game, onSelectGame }) {
  return (
    <div
      onClick={() => onSelectGame(game.id)}
      className="cursor-pointer group relative h-full transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Industrial Brushed Steel & Slate Frame with Glowing Serum Tube */}
      <div className="relative bg-gradient-to-br from-[#121c24] via-[#0f1720] to-[#0a1118] border-2 border-slate-700 p-5 sm:p-6 pl-6 sm:pl-7 h-full flex flex-col justify-between space-y-3 shadow-xl group-hover:border-emerald-500/80 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all overflow-hidden">
        
        {/* Left Embedded Glowing Serum Tube */}
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_15px_#34d399] transition-all" />

        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 blur-3xl pointer-events-none group-hover:opacity-100 opacity-40 transition-opacity" />

        <div className="relative z-10 space-y-2.5">
          {/* Top Row: Status & Abbreviation */}
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 bg-[#1e0a2d] border-2 border-purple-500 text-purple-300 font-mono text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              {game.status}
            </span>
            <span className="font-mono text-xs text-emerald-400 font-bold">
              {game.shortTitle}
            </span>
          </div>

          {/* Name & Genre */}
          <div>
            <h3 className="font-mono text-2xl sm:text-3xl font-black text-white group-hover:text-emerald-300 transition-colors tracking-tight leading-tight">
              {game.title}
            </h3>
            <p className="font-mono text-xs sm:text-sm text-emerald-400/90 mt-1 font-semibold">
              {game.genre}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT: MyGamesSection
// ============================================================================
export default function MyGamesSection({ onSelectGame }) {
  const beGame = games.find((g) => g.id === 'beyond-evolution') || games[0];
  const geGame = games.find((g) => g.id === 'growing-explorations') || games[1];
  const ehGame = games.find((g) => g.id === 'expanding-horizons') || games[2];
  const psGame = games.find((g) => g.id === 'perfect-specimen') || games[3];

  return (
    <section id="my-games-section" className="py-14 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-pink-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          My Games
        </h2>
      </div>

      {/* Responsive 2x2 Grid of Balanced Thematic Game Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch reveal-on-scroll">
        <BeyondEvolutionCard game={beGame} onSelectGame={onSelectGame} />
        <GrowingExplorationsCard game={geGame} onSelectGame={onSelectGame} />
        <ExpandingHorizonsCard game={ehGame} onSelectGame={onSelectGame} />
        <PerfectSpecimenCard game={psGame} onSelectGame={onSelectGame} />
      </div>
    </section>
  );
}
