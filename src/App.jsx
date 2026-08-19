import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomGameCard from './components/CustomGameCard';
import GamePage from './pages/GamePage';
import QnAPage from './pages/QnAPage';
import CommunitySection from './components/CommunitySection';
import Announcements from './components/Announcements';
import Footer from './components/Footer';

import { games } from './data/games';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Gamepad2, Flame, ArrowRight } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'game-detail' | 'qna' | 'community'
  const [selectedGameId, setSelectedGameId] = useState('growing-explorations');

  // Trigger scroll-reveal effect for elements on viewport entry
  useScrollReveal();

  const handleNavigatePage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (gameId) => {
    setSelectedGameId(gameId);
    setActivePage('game-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentGame = games.find((g) => g.id === selectedGameId) || games[0];

  const handleExploreGamesScroll = () => {
    const section = document.getElementById('featured-games-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#06070d] text-slate-100 font-sans selection:bg-pink-500 selection:text-white bg-grid-pattern relative">
      
      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        selectedGameId={selectedGameId}
        onNavigatePage={handleNavigatePage}
        onSelectGame={handleSelectGame}
      />

      {/* Main Pages */}
      <main className="flex-1">
        {/* ================= HOME PAGE ================= */}
        {activePage === 'home' && (
          <div>
            {/* Hero Section */}
            <Hero
              onExploreGames={handleExploreGamesScroll}
              onNavigate={handleNavigatePage}
            />

            {/* Personally Stylized Game Cards Showcase */}
            <section id="featured-games-section" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-glow-pink">
                  <Gamepad2 className="w-4 h-4 text-pink-400" />
                  <span>Interactive Game Portals</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-black text-white">
                  Featured Projects
                </h2>
                <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  Select a game below to enter its dedicated hub—featuring in-depth lore, download links, transformation tiers, and comprehensive walkthroughs.
                </p>
              </div>

              {/* Grid of individually stylized game cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {games.map((game) => (
                  <CustomGameCard
                    key={game.id}
                    game={game}
                    onSelectGame={handleSelectGame}
                  />
                ))}
              </div>
            </section>

            {/* Dev Announcements / Milestones */}
            <div className="reveal-on-scroll">
              <Announcements />
            </div>

            {/* Community Spotlight */}
            <CommunitySection />
          </div>
        )}

        {/* ================= DEDICATED GAME PAGE ================= */}
        {activePage === 'game-detail' && (
          <GamePage
            game={currentGame}
            onBackHome={() => handleNavigatePage('home')}
            onSelectOtherGame={handleSelectGame}
          />
        )}

        {/* ================= Q&A PAGE ================= */}
        {activePage === 'qna' && (
          <div className="reveal-on-scroll">
            <QnAPage />
          </div>
        )}

        {/* ================= COMMUNITY PAGE ================= */}
        {activePage === 'community' && (
          <div className="pt-4 reveal-on-scroll">
            <CommunitySection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigatePage={handleNavigatePage}
        onSelectGame={handleSelectGame}
      />
    </div>
  );
}
