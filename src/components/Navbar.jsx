import React, { useState, useRef, useEffect } from 'react';
import { Gamepad2, Users, Heart, Sparkles, Menu, X, ChevronDown, Compass, Zap, Activity, FlaskConical } from 'lucide-react';
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
    if (id === 'beyond-evolution') return Zap;
    if (id === 'growing-explorations') return Compass;
    if (id === 'perfect-specimen') return FlaskConical;
    return Activity;
  };

  // Synchronized color scheme per game page
  const isGameDetail = activePage === 'game-detail';
  
  const navTheme = {
    'beyond-evolution': {
      headerBorder: 'border-sky-900/40',
      headerBg: 'bg-[#050e1b]/92',
      brandHover: 'group-hover:text-sky-300',
      activeTab: 'text-sky-300 bg-sky-500/15 border-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.25)]',
      iconColor: 'text-sky-400',
      dropdownBorder: 'border-sky-900/50',
      dropdownBg: 'bg-[#050e1b]/98',
      dropdownActiveItem: 'bg-sky-500/20 text-white border-sky-500/40',
      patreonBtn: 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-[0_0_20px_rgba(56,189,248,0.35)]',
      mobileBorder: 'border-sky-900/60',
    },
    'growing-explorations': {
      headerBorder: 'border-amber-900/40',
      headerBg: 'bg-[#120c06]/92',
      brandHover: 'group-hover:text-amber-300',
      activeTab: 'text-amber-300 bg-amber-500/15 border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.25)]',
      iconColor: 'text-amber-400',
      dropdownBorder: 'border-amber-900/50',
      dropdownBg: 'bg-[#140e07]/98',
      dropdownActiveItem: 'bg-amber-500/20 text-white border-amber-500/40',
      patreonBtn: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.35)]',
      mobileBorder: 'border-amber-900/60',
    },
    'expanding-horizons': {
      headerBorder: 'border-red-900/40',
      headerBg: 'bg-[#0f111a]/92',
      brandHover: 'group-hover:text-red-300',
      activeTab: 'text-red-300 bg-red-500/15 border-red-500/40 shadow-[0_0_20px_rgba(239,68,68,0.25)]',
      iconColor: 'text-red-400',
      dropdownBorder: 'border-red-900/50',
      dropdownBg: 'bg-[#0f111a]/98',
      dropdownActiveItem: 'bg-red-500/20 text-white border-red-500/40',
      patreonBtn: 'bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)]',
      mobileBorder: 'border-red-900/60',
    },
    'perfect-specimen': {
      headerBorder: 'border-emerald-900/40',
      headerBg: 'bg-[#09121a]/92',
      brandHover: 'group-hover:text-emerald-300',
      activeTab: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)]',
      iconColor: 'text-emerald-400',
      dropdownBorder: 'border-emerald-900/50',
      dropdownBg: 'bg-[#09121a]/98',
      dropdownActiveItem: 'bg-emerald-500/20 text-white border-emerald-500/40',
      patreonBtn: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.35)]',
      mobileBorder: 'border-emerald-900/60',
    },
    'default': {
      headerBorder: 'border-pink-900/20',
      headerBg: 'bg-[#070810]/90',
      brandHover: 'group-hover:text-pink-300',
      activeTab: 'text-pink-300 bg-pink-500/15 border-pink-500/30 shadow-glow-pink',
      iconColor: 'text-pink-400',
      dropdownBorder: 'border-pink-900/30',
      dropdownBg: 'bg-[#0c0e1a]/95',
      dropdownActiveItem: 'bg-pink-500/20 text-white border-pink-500/40',
      patreonBtn: 'bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-glow-pink',
      mobileBorder: 'border-slate-800',
    }
  };

  const currentTheme = (isGameDetail && navTheme[selectedGameId]) ? navTheme[selectedGameId] : navTheme['default'];

  return (
    <header className={`sticky top-0 z-50 glass-panel border-b ${currentTheme.headerBorder} backdrop-blur-xl ${currentTheme.headerBg} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand: FMG Cavern */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group select-none py-1"
          >
            <div className="flex items-center space-x-2">
              <span className={`font-display font-black text-xl sm:text-2xl tracking-wider text-white ${currentTheme.brandHover} transition-colors`}>
                FMG CAVERN
              </span>
            </div>
            <p className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase hidden sm:block">
              Faustto's Games
            </p>
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
              <Sparkles className={`w-4 h-4 ${isGameDetail ? currentTheme.iconColor : 'text-pink-400'}`} />
              <span>Home</span>
            </button>

            {/* Games Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setGamesDropdownOpen(!gamesDropdownOpen)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activePage === 'game-detail'
                    ? currentTheme.activeTab
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Gamepad2 className={`w-4 h-4 ${isGameDetail ? currentTheme.iconColor : 'text-pink-400'}`} />
                <span>Games</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${gamesDropdownOpen ? `rotate-180 ${currentTheme.iconColor}` : 'text-slate-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {gamesDropdownOpen && (
                <div className={`absolute top-full left-0 mt-2 w-72 glass-panel rounded-2xl border ${currentTheme.dropdownBorder} ${currentTheme.dropdownBg} backdrop-blur-2xl shadow-2xl p-2 space-y-1 animate-fadeIn`}>
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
                            ? `${currentTheme.dropdownActiveItem} border`
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
                          <div className="text-[10px] mt-0.5">
                            <span className={
                              g.id === 'perfect-specimen' ? 'text-emerald-400 font-medium' :
                              g.statusColor === 'sky' ? 'text-sky-400 font-medium' :
                              g.statusColor === 'amber' ? 'text-amber-400 font-medium' :
                              'text-red-400 font-medium'
                            }>
                              {g.status}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Community Tab */}
            <button
              onClick={() => handleNavClick('community')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activePage === 'community'
                  ? 'text-white bg-pink-500/15 border border-pink-500/30 shadow-glow-pink text-pink-300'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <Users className={`w-4 h-4 ${isGameDetail ? currentTheme.iconColor : 'text-pink-400'}`} />
              <span>Community</span>
            </button>
          </nav>

          {/* Quick Direct Links */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={socials.patreon.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-extrabold ${currentTheme.patreonBtn} transition-all transform hover:scale-[1.02]`}
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
        <div className={`md:hidden border-t ${currentTheme.mobileBorder} ${currentTheme.dropdownBg} px-4 pt-3 pb-6 space-y-2`}>
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold ${
              activePage === 'home' ? 'bg-pink-500/20 text-pink-300' : 'text-slate-300'
            }`}
          >
            <Sparkles className={`w-5 h-5 ${isGameDetail ? currentTheme.iconColor : 'text-pink-400'}`} />
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
                    ? `${currentTheme.dropdownActiveItem} border`
                    : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                <span>{g.title}</span>
                <span className="text-[10px] text-slate-400 font-normal">{g.shortTitle}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNavClick('community')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-semibold ${
              activePage === 'community' ? 'bg-pink-500/20 text-pink-300' : 'text-slate-300'
            }`}
          >
            <Users className={`w-5 h-5 ${isGameDetail ? currentTheme.iconColor : 'text-pink-400'}`} />
            <span>Community</span>
          </button>

          <div className="pt-3">
            <a
              href={socials.patreon.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold ${currentTheme.patreonBtn}`}
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

