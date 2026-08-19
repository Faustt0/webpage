import React, { useState } from 'react';
import { Gamepad2, Heart, Sparkles, CheckCircle2, Monitor, Cpu, ArrowLeft, BookOpen, AlertCircle, Eye, EyeOff, ChevronRight, Download } from 'lucide-react';
import { socials } from '../data/socials';

export default function GamePage({ game, onBackHome, onSelectOtherGame }) {
  const [revealedSpoilers, setRevealedSpoilers] = useState({});

  if (!game) return null;

  const toggleSpoiler = (id) => {
    setRevealedSpoilers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBackHome}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-pink-400 hover:text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 px-4 py-2 rounded-xl border border-pink-500/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
          Official Project Hub
        </span>
      </div>

      {/* Dedicated Themed Game Hero */}
      <section className={`rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br ${game.theme.headerGradient} border border-slate-800/90 relative overflow-hidden shadow-2xl reveal-on-scroll`}>
        {/* Glow */}
        <div 
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-[120px] pointer-events-none opacity-50"
          style={{ background: game.theme.accentColor }}
        />

        <div className="relative z-10 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${game.theme.badgeBg}`}>
              {game.status}
            </span>
            <span className="text-xs font-mono font-semibold text-slate-200 bg-black/60 px-3 py-1 rounded-full border border-white/10">
              {game.releaseStage}
            </span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
              {game.genre}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight">
            {game.title}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-slate-200 font-light leading-relaxed">
            {game.heroQuote}
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl bg-black/40 p-4 rounded-xl border border-white/5">
            {game.tagline}
          </p>

          {/* Action Download / Patreon CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2.5 px-7 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r ${game.theme.btnGradient} shadow-glow-pink hover:scale-[1.02] transition-all`}
            >
              <Gamepad2 className="w-5 h-5" />
              <span>Get on itch.io</span>
            </a>

            <a
              href={game.patreonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-slate-900/90 hover:bg-slate-800 text-pink-300 border border-pink-500/30 hover:border-pink-500/60 transition-all"
            >
              <Heart className="w-4 h-4 text-pink-400 fill-current" />
              <span>Patreon Early Builds</span>
            </a>
          </div>
        </div>
      </section>

      {/* About & Narrative Lore */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-on-scroll">
        <div className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-slate-800 bg-[#0b0d18]/90 space-y-6">
          <div>
            <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">Story & Setting</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
              About the Game
            </h2>
          </div>

          <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            {game.description}
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Key Features & Mechanics</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {game.features.map((feat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                  <div className="flex items-center font-bold text-xs sm:text-sm text-white mb-1">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specs & Status Sidebar */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-[#0b0d18]/90">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-purple-400" />
              <span>Supported Platforms</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((plat, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-semibold text-slate-200 border border-slate-700">
                  {plat}
                </span>
              ))}
            </div>
          </div>

          {game.systemRequirements && (
            <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-[#0b0d18]/90">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>System Requirements</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">OS</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.os}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Processor</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.processor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Memory</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.memory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Storage</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.storage}</span>
                </div>
              </div>
            </div>
          )}

          <div className="glass-panel p-6 rounded-3xl border border-slate-800 bg-[#0b0d18]/90">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Latest Dev Update
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800">
              {game.latestNews}
            </p>
          </div>
        </div>
      </section>

      {/* Growth Transformation Tiers Showcase */}
      {game.growthTiers && (
        <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-[#0c0e1a] reveal-on-scroll">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">FMG Progression Stages</span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1">
              Muscle Growth Tiers
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              As you progress through training, battles, and milestones in {game.title}, character forms advance through defined morphological phases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {game.growthTiers.map((tier, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between hover:border-pink-500/40 transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    {tier.tier}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mt-3">{tier.name}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{tier.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Dedicated Game Guides & Walkthroughs Section */}
      {game.guides && game.guides.length > 0 && (
        <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-[#0c0e1a] space-y-8 reveal-on-scroll">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">
              <BookOpen className="w-4 h-4" />
              <span>Dedicated Walkthroughs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {game.title} Guides & Walkthroughs
            </h2>
          </div>

          <div className="space-y-6">
            {game.guides.map((guide) => (
              <div
                key={guide.id}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <h3 className="font-display font-bold text-xl text-white">
                    {guide.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                      {guide.difficulty}
                    </span>
                    <span className="text-slate-400">{guide.readTime}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {guide.summary}
                </p>

                {/* Sections */}
                {guide.sections && guide.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-1.5 pt-2">
                    <h4 className="font-display font-bold text-sm text-pink-300">
                      {sec.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {sec.text}
                    </p>
                  </div>
                ))}

                {/* Spoilers */}
                {guide.spoilers && guide.spoilers.map((sp, spIdx) => {
                  const key = `${guide.id}-${spIdx}`;
                  const isRevealed = revealedSpoilers[key];
                  return (
                    <div key={spIdx} className="mt-4 rounded-xl border border-amber-500/30 bg-amber-950/20 overflow-hidden">
                      <button
                        onClick={() => toggleSpoiler(key)}
                        className="w-full flex items-center justify-between px-4 py-3 bg-amber-900/30 hover:bg-amber-900/40 text-amber-300 text-xs font-bold transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-amber-400" />
                          <span>Spoiler: {sp.title}</span>
                        </span>
                        <span className="flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
                          {isRevealed ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          {isRevealed ? "Hide" : "Reveal"}
                        </span>
                      </button>
                      {isRevealed && (
                        <div className="p-4 text-xs text-slate-200 border-t border-amber-500/20 bg-black/40 leading-relaxed">
                          {sp.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
