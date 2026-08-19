import React from 'react';
import { HelpCircle, MessageSquare, Sparkles } from 'lucide-react';
import { socials } from '../data/socials';

export default function QnAPage() {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-pink">
          <HelpCircle className="w-3.5 h-3.5 text-pink-400" />
          <span>Knowledge & Questions</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-display font-black text-white">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-slate-400 text-sm sm:text-base">
          Got questions about our games, development roadmaps, or mechanics? Check back here soon as we curate our community Q&A.
        </p>
      </div>

      {/* Empty State / Placeholder Container */}
      <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-slate-800 bg-[#0c0e18] text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mx-auto text-pink-400">
          <MessageSquare className="w-8 h-8" />
        </div>

        <div className="space-y-2 max-w-md mx-auto">
          <h3 className="font-display font-bold text-xl text-white">
            Q&A Section Coming Soon
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Community answers, gameplay tips, and lore explanations will be listed here.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800/80">
          <a
            href={socials.discord.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-extrabold bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-glow-pink hover:scale-[1.02] transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask a Question on Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
}
