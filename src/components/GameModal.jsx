import React from 'react';
import { X, Gamepad2, Heart, CheckCircle2, Monitor, HardDrive, Cpu, Sparkles, ExternalLink, BookOpen } from 'lucide-react';

export default function GameModal({ game, onClose, onNavigateToGuides }) {
  if (!game) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-3xl glass-panel rounded-2xl border border-slate-700 bg-[#0d0f1a] shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-br ${game.gradient} border-b border-slate-800 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-3">
            <span>{game.genre}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            {game.title}
          </h2>
          <p className="text-sm text-slate-200 mt-2 font-medium">
            {game.releaseStage} • Status: <span className="text-pink-300">{game.status}</span>
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">About The Game</h4>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              {game.description}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Features & Growth Mechanics</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {game.features.map((feat, idx) => (
                <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-200 bg-slate-900/40 p-3 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 mr-2.5 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supported Platforms & Latest News */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Monitor className="w-4 h-4 text-purple-400" /> Supported Platforms
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {game.platforms.map((plat, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-slate-800 text-xs font-medium text-slate-300 border border-slate-700">
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-rose-400" /> Latest Status & News
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {game.latestNews}
              </p>
            </div>
          </div>

          {/* System Requirements */}
          {game.systemRequirements && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-amber-400" /> System Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-slate-400 block font-semibold">OS:</span>
                  <span className="text-slate-200">{game.systemRequirements.os}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">RAM:</span>
                  <span className="text-slate-200">{game.systemRequirements.memory}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Storage:</span>
                  <span className="text-slate-200">{game.systemRequirements.storage}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-slate-900/80 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onNavigateToGuides(game.id);
            }}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-pink-300 border border-pink-500/20"
          >
            <BookOpen className="w-4 h-4" />
            <span>Read {game.title} Guides</span>
          </button>

          <div className="flex items-center space-x-3">
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-all shadow-glow-pink"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Get on itch.io</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={game.patreonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-glow-purple"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Support on Patreon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
