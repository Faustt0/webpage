import React from 'react';
import { Gamepad2, Heart, BookOpen, CheckCircle, ExternalLink, Sparkles, ChevronRight } from 'lucide-react';

export default function GameCard({ game, onOpenModal, onSelectGameGuides }) {
  const isEmerald = game.statusColor === 'emerald';
  const isAmber = game.statusColor === 'amber';

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-slate-800 bg-[#0f111c]/80 group">
      {/* Card Header & Visual Banner */}
      <div className={`relative p-6 bg-gradient-to-br ${game.gradient} border-b border-slate-800/80`}>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${
            isEmerald 
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
              : isAmber
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              : 'bg-slate-500/20 text-slate-300 border border-slate-500/30'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${isEmerald ? 'bg-emerald-400 animate-pulse' : isAmber ? 'bg-amber-400' : 'bg-slate-400'}`} />
            {game.status}
          </span>
          <span className="text-xs font-medium text-slate-300 bg-black/40 px-2 py-0.5 rounded border border-white/10">
            {game.releaseStage}
          </span>
        </div>

        <h3 className="text-2xl font-display font-bold text-white group-hover:text-pink-300 transition-colors">
          {game.title}
        </h3>
        <p className="text-xs font-medium text-slate-300 tracking-wide uppercase mt-1">
          {game.genre}
        </p>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-slate-300 text-sm leading-relaxed mb-5">
            {game.tagline}
          </p>

          {/* Key Feature Highlights */}
          <div className="space-y-2 mb-6">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Highlights</div>
            {game.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start text-xs text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-pink-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-500/30 hover:border-rose-500/50 transition-all text-center"
            >
              <Gamepad2 className="w-4 h-4 text-rose-400" />
              <span>itch.io Page</span>
              <ExternalLink className="w-3 h-3 text-rose-400" />
            </a>

            <a
              href={game.patreonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg text-xs font-bold bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-all text-center"
            >
              <Heart className="w-4 h-4 text-purple-400 fill-purple-400/30" />
              <span>Early Builds</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenModal(game)}
              className="w-full flex items-center justify-center space-x-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <span>Full Details & Specs</span>
            </button>

            <button
              onClick={() => onSelectGameGuides(game.id)}
              className="w-full flex items-center justify-center space-x-1 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-pink-300 border border-pink-500/20 hover:border-pink-500/40 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Game Guides</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
