import React, { useState } from 'react';
import { Gamepad2, Heart, Sparkles, CheckCircle2, Monitor, Cpu, HelpCircle, MessageSquare, ChevronDown, Compass, Sword, Shield, Map, Scroll, Award, Trees, Flame } from 'lucide-react';
import { socials } from '../data/socials';

export default function GrowingExplorationsPage({ game }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;

  const faqs = game.faqs || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 font-sans relative">
      {/* Ambient Fantasy Wilderness Glow */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-teal-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* ================= HERO SECTION (Fantasy Pixel RPG Banner) ================= */}
      <section className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#071913]/95 via-[#0b241c]/90 to-[#07111a]/95 border-2 border-emerald-500/40 shadow-[0_0_35px_rgba(16,185,129,0.25)] overflow-hidden reveal-on-scroll">
        
        {/* Pixel Art Corner Ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400 pointer-events-none" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-emerald-400 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-emerald-400 pointer-events-none" />

        {/* Pixel Grid Watermark / Background Texture */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #10b981 1px, transparent 1px)',
            backgroundSize: '16px 16px'
          }}
        />

        {/* Luminous Ancient Rune Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          {/* Fantasy Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              <span>{game.status}</span>
            </span>
            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/50 px-3 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{game.releaseStage}</span>
            </span>
            <span className="text-xs text-emerald-400/90 font-mono font-semibold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-black/40 border border-emerald-500/20">
              ⚔️ {game.genre}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_15px_rgba(16,185,129,0.35)]">
            {game.title}
          </h1>

          {/* Hero Quote in RPG parchment box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0d2e23]/60 border border-emerald-500/30 text-emerald-100 italic text-sm sm:text-lg font-light leading-relaxed flex items-start space-x-3">
            <Scroll className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
            <p>"{game.heroQuote}"</p>
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-emerald-200/80 leading-relaxed max-w-2xl font-mono">
            {game.tagline}
          </p>

          {/* Fantasy Styled Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2.5 px-8 py-3.5 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-700 hover:from-emerald-600 hover:to-teal-700 border border-emerald-400/40 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Gamepad2 className="w-5 h-5 text-emerald-100" />
              <span>Download on itch.io</span>
            </a>

            <a
              href={game.patreonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-[#091a14]/90 hover:bg-[#0d261d] text-emerald-300 border border-emerald-500/40 hover:border-emerald-400 transition-all transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
              <span>Patreon Early Builds</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT & LORE (Quest Manuscript Aesthetic) ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 reveal-on-scroll">
        
        {/* Left 8 Cols: Story & Features */}
        <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-[#091913]/90 border-2 border-emerald-500/30 space-y-8 shadow-xl relative overflow-hidden">
          {/* Subtle Corner Pixels */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-500/40" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-500/40" />

          {/* Story Header */}
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-1.5">
              <Map className="w-4 h-4" />
              <span>Continent Chronicle & Setting</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              About the Game
            </h2>
          </div>

          {/* Lore Manuscript Container */}
          <div className="text-emerald-100/90 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-[#0c241c]/70 p-6 sm:p-7 rounded-2xl border border-emerald-500/25 font-sans">
            {game.description}
          </div>

          {/* Key Features (RPG Attribute Cards) */}
          <div className="space-y-4 pt-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <Sword className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Growth Mechanics</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {game.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#0c231b]/80 p-5 rounded-2xl border border-emerald-500/25 hover:border-emerald-400/50 transition-all hover:bg-[#0f2c22] group"
                >
                  <div className="flex items-center font-display font-bold text-sm sm:text-base text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    <span className="w-2 h-2 bg-emerald-400 rounded-sm mr-2.5 flex-shrink-0 shadow-[0_0_8px_#10b981]" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-emerald-200/70 leading-relaxed font-sans pl-4.5">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Specs & Adventurer Notes */}
        <div className="lg:col-span-4 space-y-6">
          {/* Platforms */}
          <div className="p-6 rounded-3xl bg-[#091913]/90 border-2 border-emerald-500/30 shadow-lg">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span>Supported Platforms</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {game.platforms.map((plat, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-[#0c241c] text-xs font-mono font-semibold text-emerald-200 border border-emerald-500/30">
                  {plat}
                </span>
              ))}
            </div>
          </div>

          {/* System Requirements */}
          {game.systemRequirements && (
            <div className="p-6 rounded-3xl bg-[#091913]/90 border-2 border-emerald-500/30 shadow-lg">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>System Specifications</span>
              </h3>
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between border-b border-emerald-900/60 pb-2">
                  <span className="text-emerald-400/80">OS</span>
                  <span className="text-emerald-100 font-medium text-right">{game.systemRequirements.os}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-900/60 pb-2">
                  <span className="text-emerald-400/80">CPU</span>
                  <span className="text-emerald-100 font-medium text-right">{game.systemRequirements.processor}</span>
                </div>
                <div className="flex justify-between border-b border-emerald-900/60 pb-2">
                  <span className="text-emerald-400/80">RAM</span>
                  <span className="text-emerald-100 font-medium text-right">{game.systemRequirements.memory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-400/80">Storage</span>
                  <span className="text-emerald-100 font-medium text-right">{game.systemRequirements.storage}</span>
                </div>
              </div>
            </div>
          )}

          {/* Latest Dev Update / Guild Notice */}
          <div className="p-6 rounded-3xl bg-[#091913]/90 border-2 border-emerald-500/30 shadow-lg">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Latest Realm Log</span>
            </h3>
            <p className="text-xs text-emerald-200/90 leading-relaxed bg-[#0c241c] p-4 rounded-2xl border border-emerald-500/20 font-sans">
              {game.latestNews}
            </p>
          </div>
        </div>
      </section>

      {/* ================= DEDICATED FAQ SECTION (Guild Notice Board) ================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#081812]/95 border-2 border-emerald-500/30 space-y-6 reveal-on-scroll shadow-2xl relative overflow-hidden">
        {/* Pixel corners */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-emerald-400/60" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-emerald-400/60" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-emerald-900/80 pb-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Guild Archives & Inquiries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              {game.title} — FAQ
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-emerald-300/70 max-w-md font-sans">
            Frequently asked questions about wilderness expeditions, mechanics, updates, and installation.
          </p>
        </div>

        {faqs.length > 0 ? (
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-emerald-500/25 bg-[#0c231b]/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-white font-display font-bold text-sm sm:text-base hover:text-emerald-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-emerald-100/80 leading-relaxed border-t border-emerald-900/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Empty FAQ State (Guild Notice Style) */
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0c241c]/60 border border-emerald-500/25 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Scroll className="w-7 h-7" />
            </div>
            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-display font-bold text-lg text-white">
                Guild Inquiries Coming Soon
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed font-sans">
                We are curating exploration guides, combat FAQs, and gameplay tips for Growing Explorations.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={socials.discord.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold bg-[#091b14] hover:bg-[#0e2a1f] text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/60 transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Ask a Question on Discord</span>
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
