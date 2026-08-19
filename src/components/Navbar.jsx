import React, { useState, useRef, useEffect } from 'react';
import { Gamepad2, HelpCircle, Users, Heart, Sparkles, Menu, X, ChevronDown, Flame, Compass, Zap, History } from 'lucide-react';
import { games } from '../data/games';
import { socials } from '../data/socials';

export default function Navbar({ activePage, selectedGameId, onNavigatePage, onSelectGame }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gamesDropdownOpen, setGamesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setGamesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (pageId) => {
    onNavigatePage(pageId);
    setMobileOpen(false);
    setGamesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGameSelect = (gameId) => {
    onSelectGame(gameId);
    setMobileOpen(false);
    setGamesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getGameIcon = (id) => {
    if (id === 'growing-explorations') return Compass;
    if (id === 'beyond-evolution') return Zap;
    return History;
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-pink-900/20 backdrop-blur-xl bg-[#070810]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand / Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-rose-600 via-pink-500 to-purple-600 p-[2px] shadow-glow-pink group-hover:scale-105 transition-all duration-300">
                <div className="w-full h-full bg-[#0d0e17] rounded-[14px] flex items-center justify-center">
                  <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-purple-400 text-xl tracking-tighter">
                    F
                  </span>
                </div>
              </div>
              <Flame className="w-4 h-4 text-pink-400 absolute -top-1.5 -right-1.5 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white group-hover:text-pink-400 transition-colors">
                  FAUSTTO
                </span>
                <span className="px-2 py-0.5 text-[9px] font-extrabold bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30 rounded-full uppercase tracking-widest">
                  FMG Realm
                </span>
              </div>
              <p className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase hidden sm:block">
                Female Muscle Growth RPGs
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {/* Home Tab */}
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activePage === 'home'
                  ? 'text-white bg-pink-500/15 border border-pink-500/30 shadow-glow-pink text-pink-300'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>Home</span>
            </button>

            {/* Games Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setGamesDropdownOpen(!gamesDropdownOpen)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activePage === 'game-detail'
                    ? 'text-pink-300 bg-pink-500/15 border border-pink-500/30 shadow-glow-pink'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Gamepad2 className="w-4 h-4 text-pink-400" />
                <span>Games</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${gamesDropdownOpen ? 'rotate-180 text-pink-400' : 'text-slate-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {gamesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 glass-panel rounded-2xl border border-pink-900/30 bg-[#0c0e1a]/95 backdrop-blur-2xl shadow-2xl p-2 space-y-1 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800/80 mb-1">
                    Select a Game Page
                  </div>
                  {games.map((g) => {
                    const Icon = getGameIcon(g.id);
                    const isSelected = activePage === 'game-detail' && selectedGameId === g.id;
                    return (
                      <button
                        key={g.id}
                        onClick={() => handleGameSelect(g.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                          isSelected 
                            ? 'bg-pink-500/20 text-white border border-pink-500/40'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div className={`p-2 rounded-lg bg-slate-900 border border-slate-800 ${g.theme.iconColor}`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-display font-bold text-xs text-white leading-tight">
                            {g.title}
                          </div>
                          <div className="text-[10px] text-slate-400 mt-0.5">
                            {g.status}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Q&A Tab */}
            <button
              onClick={() => handleNavClick('qna')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activePage === 'qna'
                  ? 'text-white bg-pink-500/15 border border-pink-500/30 shadow-glow-pink text-pink-300'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <HelpCircle className="w-4 h-4 text-pink-400" />
              <span>Q&A</span>
            </button>

            {/* Community Tab */}
            <button
              onClick={() => handleNavClick('community')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activePage === 'community'
                  ? 'text-white bg-pink-500/15 border border-pink-500/30 shadow-glow-pink text-pink-300'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className="w-4 h-4 text-pink-400" />
              <span>Community</span>
            </button>
          </nav>

          {/* Quick Direct Links */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={socials.itch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-pink-500/40 transition-all"
            >
              <Gamepad2 className="w-3.5 h-3.5 text-rose-400" />
              <span>itch.io</span>
            </a>

            <a
              href={socials.patreon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-glow-pink transition-all transform hover:scale-[1.02]"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Patreon</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#070810]/98 px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold ${
              activePage === 'home' ? 'bg-pink-500/20 text-pink-300' : 'text-slate-300'
            }`}
          >
            <Sparkles className="w-5 h-5 text-pink-400" />
            <span>Home</span>
          </button>

          {/* Mobile Game Links */}
          <div className="py-2 px-2 border-y border-slate-800/80 space-y-1">
            <div className="px-2 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Games
            </div>
            {games.map((g) => (
              <button
                key={g.id}
                onClick={() => handleGameSelect(g.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold ${
                  activePage === 'game-detail' && selectedGameId === g.id
                    ? 'bg-pink-500/20 text-pink-300'
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{g.title}</span>
                <span className="text-[10px] text-slate-400 font-normal">{g.shortTitle}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('qna')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold ${
              activePage === 'qna' ? 'bg-pink-500/20 text-pink-300' : 'text-slate-300'
            }`}
          >
            <HelpCircle className="w-5 h-5 text-pink-400" />
            <span>Q&A</span>
          </button>

          <button
            onClick={() => handleNavClick('community')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold ${
              activePage === 'community' ? 'bg-pink-500/20 text-pink-300' : 'text-slate-300'
            }`}
          >
            <Users className="w-5 h-5 text-pink-400" />
            <span>Community</span>
          </button>

          <div className="pt-3 grid grid-cols-2 gap-2">
            <a
              href={socials.itch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-slate-200 border border-slate-800"
            >
              <Gamepad2 className="w-4 h-4 text-rose-400" />
              <span>itch.io</span>
            </a>
            <a
              href={socials.patreon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-glow-pink"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Patreon</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
