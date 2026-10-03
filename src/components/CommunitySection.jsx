import React from 'react';
import { Heart, MessageSquare, Palette, Gamepad2, ExternalLink, Sparkles, Flame } from 'lucide-react';
import { socials } from '../data/socials';
import { XIcon, BlueskyIcon, DiscordIcon, PatreonIcon, ItchIcon, DeviantArtIcon } from './SocialIcons';

export default function CommunitySection() {
  return (
    <section className="py-16 lg:py-24 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-on-scroll">
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
            Community & Channels
          </h2>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">
          {/* Patreon Card */}
          <a
            href={socials.patreon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fmg-power-card glass-panel p-7 rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-950/40 via-[#10121e] to-[#0c0e18] flex flex-col justify-between group shadow-lg hover:border-rose-500/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mb-5 text-rose-400 group-hover:scale-110 transition-transform">
                <PatreonIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-rose-300 transition-colors">Patreon</h3>
                <span className="text-[10px] uppercase font-black bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-500/30">Early Builds</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {socials.patreon.description}
              </p>
            </div>
            <div className="pt-3 border-t border-rose-950/40 text-xs font-bold text-rose-400 flex items-center justify-between group-hover:translate-x-1 transition-transform">
              <span>Support on Patreon</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Discord Card */}
          <a
            href={socials.discord.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fmg-power-card glass-panel p-7 rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 via-[#10121e] to-[#0c0e18] flex flex-col justify-between group shadow-lg hover:border-indigo-500/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mb-5 text-indigo-400 group-hover:scale-110 transition-transform">
                <DiscordIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-indigo-300 transition-colors">Discord</h3>
                <span className="text-[10px] uppercase font-black bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30">Community</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {socials.discord.description}
              </p>
            </div>
            <div className="pt-3 border-t border-indigo-950/40 text-xs font-bold text-indigo-400 flex items-center justify-between group-hover:translate-x-1 transition-transform">
              <span>Join Server</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* itch.io Card */}
          <a
            href={socials.itch.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fmg-power-card glass-panel p-7 rounded-3xl border border-rose-500/30 bg-gradient-to-b from-red-950/40 via-[#10121e] to-[#0c0e18] flex flex-col justify-between group shadow-lg hover:border-rose-500/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center mb-5 text-rose-400 group-hover:scale-110 transition-transform">
                <ItchIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-rose-300 transition-colors">itch.io</h3>
                <span className="text-[10px] uppercase font-black bg-rose-500/20 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-500/30">Public Hub</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {socials.itch.description}
              </p>
            </div>
            <div className="pt-3 border-t border-red-950/40 text-xs font-bold text-rose-400 flex items-center justify-between group-hover:translate-x-1 transition-transform">
              <span>Browse Games</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* DeviantArt Card */}
          <a
            href={socials.deviantart.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fmg-power-card glass-panel p-7 rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 via-[#10121e] to-[#0c0e18] flex flex-col justify-between group shadow-lg hover:border-emerald-500/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-110 transition-transform">
                <DeviantArtIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-emerald-300 transition-colors">DeviantArt</h3>
                <span className="text-[10px] uppercase font-black bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">Art Logs</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {socials.deviantart.description}
              </p>
            </div>
            <div className="pt-3 border-t border-emerald-950/40 text-xs font-bold text-emerald-400 flex items-center justify-between group-hover:translate-x-1 transition-transform">
              <span>View Gallery</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* X Card */}
          <a
            href={socials.x.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fmg-power-card glass-panel p-7 rounded-3xl border border-slate-500/30 bg-gradient-to-b from-slate-800/40 via-[#10121e] to-[#0c0e18] flex flex-col justify-between group shadow-lg hover:border-slate-400/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-500/20 border border-slate-500/30 flex items-center justify-center mb-5 text-slate-200 group-hover:scale-110 transition-transform">
                <XIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-slate-300 transition-colors">X</h3>
                <span className="text-[10px] uppercase font-black bg-slate-500/20 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-500/30">{socials.x.badge}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {socials.x.description}
              </p>
            </div>
            <div className="pt-3 border-t border-slate-800/60 text-xs font-bold text-slate-300 flex items-center justify-between group-hover:translate-x-1 transition-transform">
              <span>Follow on X</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Bluesky Card */}
          <a
            href={socials.bluesky.url}
            target="_blank"
            rel="noopener noreferrer"
            className="fmg-power-card glass-panel p-7 rounded-3xl border border-sky-500/30 bg-gradient-to-b from-sky-950/40 via-[#10121e] to-[#0c0e18] flex flex-col justify-between group shadow-lg hover:border-sky-500/60"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center mb-5 text-sky-400 group-hover:scale-110 transition-transform">
                <BlueskyIcon className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="font-display font-extrabold text-xl text-white group-hover:text-sky-300 transition-colors">Bluesky</h3>
                <span className="text-[10px] uppercase font-black bg-sky-500/20 text-sky-300 px-2.5 py-0.5 rounded-full border border-sky-500/30">{socials.bluesky.badge}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                {socials.bluesky.description}
              </p>
            </div>
            <div className="pt-3 border-t border-sky-950/40 text-xs font-bold text-sky-400 flex items-center justify-between group-hover:translate-x-1 transition-transform">
              <span>Follow on Bluesky</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
