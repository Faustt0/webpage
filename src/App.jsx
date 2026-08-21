import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyGamesSection from './components/MyGamesSection';
import GamePage from './pages/GamePage';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';
import InteractiveBackground from './components/InteractiveBackground';

import { games } from './data/games';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [activePage, setActivePage] = useState('home'); // 'home' | 'game-detail' | 'community'
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

  const handleExploreAboutScroll = () => {
    const section = document.getElementById('about-me-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col text-slate-100 font-sans selection:bg-pink-500 selection:text-white relative bg-[#06070d]">
      
      {/* Full-Page Interactive Distorted Grid & Breathing Ambient Dots */}
      {activePage !== 'game-detail' && (
        <InteractiveBackground />
      )}

      {/* Top Navbar */}
      <Navbar
        activePage={activePage}
        selectedGameId={selectedGameId}
        onNavigatePage={handleNavigatePage}
        onSelectGame={handleSelectGame}
      />

      {/* Main Pages */}
      <main className="flex-1 relative z-10">
        {/* ================= HOME PAGE ================= */}
        {activePage === 'home' && (
          <div>
            {/* Hero Section with Opening Title & Intro Animations */}
            <Hero
              onExploreAbout={handleExploreAboutScroll}
              onNavigate={handleNavigatePage}
            />

            {/* Primary Section: About Faustto */}
            <AboutMe />

            {/* My Games Thematic Showcase */}
            <MyGamesSection onSelectGame={handleSelectGame} />

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
