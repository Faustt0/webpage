import React from 'react';
import { Sparkles, ArrowRight, ExternalLink, Gamepad2, Heart, Shield, Zap, Compass, History } from 'lucide-react';

export default function CustomGameCard({ game, onSelectGame }) {
  const isGE = game.id === 'growing-explorations';
  const isBE = game.id === 'beyond-evolution';
  const isEH = game.id === 'expanding-horizons';

  const GameIcon = isGE ? Compass : isBE ? Zap : History;

  return (
    <div
      onClick={() => onSelectGame(game.id)}
      className={`fmg-power-card glass-panel rounded-3xl overflow-hidden border border-slate-800/80 bg-[#0a0c16]/90 cursor-pointer group flex flex-col justify-between ${game.theme.cardBorder} reveal-on-scroll`}
    >
      {/* Visual Themed Header */}
      <div className={`p-8 bg-gradient-to-br ${game.theme.headerGradient} border-b border-slate-800/80 relative overflow-hidden`}>
        {/* Ambient Glow */}
        <div 
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity"
          style={{ background: game.theme.accentColor }}
        />

        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${game.theme.badgeBg}`}>
            <GameIcon className="w-3.5 h-3.5 mr-1.5" />
            {game.status}
          </span>
          <span className="text-[11px] font-mono font-medium text-slate-300 bg-black/50 px-2.5 py-1 rounded-lg border border-white/10">
            {game.releaseStage}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-display font-black text-white group-hover:text-pink-300 transition-colors tracking-tight">
          {game.title}
        </h3>
        <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-1">
          {game.genre}
        </p>

        {/* Quote / Subhead */}
        <p className="text-xs text-slate-300 mt-4 italic leading-relaxed border-l-2 border-pink-500/40 pl-3">
          "{game.heroQuote}"
        </p>
      </div>

      {/* Body Content */}
      <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
        {/* Tagline */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {game.tagline}
        </p>

        {/* Key Features Preview */}
        {game.features && (
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Key Features Highlights</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {game.features.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 text-[11px]">
                  <span className="font-bold text-pink-300 block truncate">{feat.title}</span>
                  <span className="text-slate-400 line-clamp-1">{feat.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Enter Game Page Button */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className={`w-full py-3.5 px-4 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r ${game.theme.btnGradient} flex items-center justify-center space-x-2 shadow-lg group-hover:shadow-glow-pink transition-all`}>
            <span>Enter {game.title} Page</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
