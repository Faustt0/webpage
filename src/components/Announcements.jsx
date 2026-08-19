import React from 'react';
import { Sparkles, Calendar, ArrowRight, ExternalLink } from 'lucide-react';
import { updates } from '../data/updates';

export default function Announcements() {
  return (
    <section className="py-12 border-b border-slate-800/80 bg-[#090a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-2">
          <div>
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Devlogs & Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Latest Project Updates
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Follow the continuous evolution of our games, character rosters, and community guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {updates.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-5 rounded-xl border border-slate-800 bg-[#0f111c]/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    {item.tag}
                  </span>
                  <span className="text-slate-400 flex items-center text-[11px]">
                    <Calendar className="w-3 h-3 mr-1" />
                    {item.date}
                  </span>
                </div>

                <div className="text-xs text-rose-400 font-medium mb-1">{item.game}</div>

                <h3 className="font-display font-bold text-base text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              {item.link && item.link !== '#' && (
                <div className="pt-3 mt-3 border-t border-slate-800/80">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-pink-400 hover:text-pink-300"
                  >
                    <span>Read on itch.io</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
