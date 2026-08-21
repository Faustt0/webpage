import React, { useState } from 'react';
import { Gamepad2, Heart, Sparkles, CheckCircle2, Monitor, Cpu, HelpCircle, MessageSquare, ChevronDown, ExternalLink } from 'lucide-react';
import { socials } from '../data/socials';
import GrowingExplorationsPage from './games/GrowingExplorationsPage';
import BeyondEvolutionPage from './games/BeyondEvolutionPage';
import ExpandingHorizonsPage from './games/ExpandingHorizonsPage';
import PerfectSpecimenPage from './games/PerfectSpecimenPage';

export default function GamePage({ game, onBackHome, onSelectOtherGame }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;

  // Custom post-apocalyptic light-blue tactical theme for Beyond Evolution
  if (game.id === 'beyond-evolution') {
    return <BeyondEvolutionPage game={game} onBackHome={onBackHome} onSelectOtherGame={onSelectOtherGame} />;
  }

  // Custom medieval fantasy pixel theme for Growing Explorations
  if (game.id === 'growing-explorations') {
    return <GrowingExplorationsPage game={game} onBackHome={onBackHome} onSelectOtherGame={onSelectOtherGame} />;
  }

  // Custom sci-fi pixel simulation white/red theme for Expanding Horizons
  if (game.id === 'expanding-horizons') {
    return <ExpandingHorizonsPage game={game} onBackHome={onBackHome} onSelectOtherGame={onSelectOtherGame} />;
  }

  // Custom bio-factory incubation chamber theme for Perfect Specimen (Specifen Permect)
  if (game.id === 'perfect-specimen') {
    return <PerfectSpecimenPage game={game} onBackHome={onBackHome} onSelectOtherGame={onSelectOtherGame} />;
  }

  const faqs = game.faqs || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
                  <span className="text-slate-400">Processor</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.processor}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1.5">
                  <span className="text-slate-400">Memory</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.memory}</span>
                </div>
                {game.systemRequirements.graphics && (
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">Graphics</span>
                    <span className="text-slate-200 font-medium text-right max-w-[60%]">{game.systemRequirements.graphics}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-400">Storage</span>
                  <span className="text-slate-200 font-medium">{game.systemRequirements.storage}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Dedicated Project FAQ Section */}
      <section className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-800 bg-[#0c0e1a] space-y-6 reveal-on-scroll">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-pink-400 uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Project Knowledge Base</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {game.title} — FAQ
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Common questions and answers regarding {game.title} mechanics, updates, and installation.
          </p>
        </div>

        {faqs.length > 0 ? (
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white font-display font-bold text-sm sm:text-base hover:text-pink-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-pink-400 transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Empty FAQ State Placeholder */
          <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/40 border border-slate-800/80 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto text-pink-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-display font-bold text-lg text-white">
                Frequently Asked Questions Coming Soon
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                We are currently curating gameplay FAQs, troubleshooting steps, and tips for {game.title}.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={socials.discord.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-500/20 hover:border-pink-500/40 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ask a Question on Discord</span>
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
