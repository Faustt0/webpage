import React from 'react';
import { Sparkles, Flame, Dumbbell, ArrowDown, ChevronRight, Shield, Zap } from 'lucide-react';
import { socials } from '../data/socials';

export default function Hero({ onExploreGames, onNavigate }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32 border-b border-pink-950/30">
      {/* Dynamic FMG Power Glowing Auras */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-pink-600/20 via-rose-600/20 to-purple-600/20 blur-[140px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-rose-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-purple-600/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* FMG Genre Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-glow-pink reveal-on-scroll">
            <Flame className="w-4 h-4 text-pink-400 animate-pulse" />
            <span>The Female Muscle Growth Gaming Genre</span>
          </div>

          {/* Main Genre Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight text-white leading-[1.08] reveal-on-scroll">
            The Power of <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 drop-shadow-[0_0_35px_rgba(244,63,94,0.4)]">
              Physical Transformation
            </span> & Growth
          </h1>

          {/* Broader Genre Intro Paragraph */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light reveal-on-scroll">
            <strong className="text-white font-semibold">Female Muscle Growth (FMG)</strong> games celebrate the art of escalating strength, physical empowerment, and visible character evolution. In this genre, heroines do not just level up in abstract numbers—their discipline, training, and conquests sculpt their bodies into unstoppable, muscular powerhouses.
          </p>

          <p className="mt-4 text-xs sm:text-sm text-pink-300/80 max-w-2xl mx-auto font-medium reveal-on-scroll">
            Explore interactive open worlds, tactical gacha squad builders, and progression systems crafted by <strong className="text-pink-200">Faustto</strong>.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 reveal-on-scroll">
            <button
              onClick={onExploreGames}
              className="flex items-center space-x-2.5 px-8 py-4 rounded-2xl text-base font-extrabold bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-glow-pink transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore My Games</span>
              <ChevronRight className="w-5 h-5" />
            </button>

            <a
              href={socials.patreon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-7 py-4 rounded-2xl text-base font-bold bg-slate-900/80 hover:bg-slate-800 text-pink-300 border border-pink-500/30 hover:border-pink-500/60 transition-all duration-300"
            >
              <Flame className="w-4 h-4 text-pink-400" />
              <span>Patreon Early Access</span>
            </a>
          </div>

          {/* FMG Core Pillars Bar */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto reveal-on-scroll">
            <div className="glass-panel p-5 rounded-2xl border-pink-900/20 bg-[#0d0f1c]/70 text-left flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Visible Progression</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Sprite and portrait models dynamically evolve as strength and mass increase.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-purple-900/20 bg-[#0d0f1c]/70 text-left flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Empowerment RPGs</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Earn heavier equipment, wield titan weaponry, and conquer massive realm bosses.
                </p>
              </div>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-rose-900/20 bg-[#0d0f1c]/70 text-left flex items-start space-x-3.5">
              <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">Rich Story & Art</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Expansive dialogue, bond events, character backstories, and interactive worlds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
