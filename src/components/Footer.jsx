import React from 'react';
import { Gamepad2, Heart, MessageSquare, Palette, Github, Flame } from 'lucide-react';
import { socials } from '../data/socials';
import { games } from '../data/games';

export default function Footer({ onNavigatePage, onSelectGame }) {
  return (
    <footer className="border-t border-slate-800/80 bg-[#040509] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-600 to-purple-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0d0e17] rounded-[10px] flex items-center justify-center font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-400 text-sm">
                  F
                </div>
              </div>
              <span className="font-display font-black text-xl text-white tracking-wider">FAUSTTO</span>
            </div>
            
            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              Dedicated to crafting Female Muscle Growth (FMG) RPGs, progression mechanics, tactical battles, and community adventures.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href={socials.itch.url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" title="itch.io">
                <Gamepad2 className="w-4 h-4 text-rose-400" />
              </a>
              <a href={socials.patreon.url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" title="Patreon">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400/20" />
              </a>
              <a href={socials.discord.url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" title="Discord">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
              </a>
              <a href={socials.deviantart.url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" title="DeviantArt">
                <Palette className="w-4 h-4 text-emerald-400" />
              </a>
              <a href={socials.github.url} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors" title="GitHub Repository">
                <Github className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3.5">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => onNavigatePage('home')} className="hover:text-pink-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('qna')} className="hover:text-pink-400 transition-colors">
                  Q&A
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage('community')} className="hover:text-pink-400 transition-colors">
                  Community & Socials
                </button>
              </li>
            </ul>
          </div>

          {/* Games Direct */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-3.5">
              Game Pages
            </h4>
            <ul className="space-y-2.5">
              {games.map((g) => (
                <li key={g.id}>
                  <button onClick={() => onSelectGame(g.id)} className="hover:text-pink-400 transition-colors text-left">
                    {g.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Faustto. All rights reserved.</p>
          <div className="flex items-center space-x-3 text-[11px] text-slate-500">
            <span>Deployed on GitHub Pages</span>
            <span>•</span>
            <a href="https://github.com/Faustt0/webpage" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
