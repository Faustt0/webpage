import React, { useState, useEffect, useRef } from 'react';
import { socials } from '../../data/socials';

// ============================================================================
// Authentic 16-Bit Pixel Art SVG Icons (Medieval Fantasy Set)
// ============================================================================
const PixelSword = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="13" y="1" width="2" height="2" fill="#fde047" />
    <rect x="11" y="3" width="2" height="2" fill="#ffffff" />
    <rect x="9" y="5" width="2" height="2" fill="#cbd5e1" />
    <rect x="7" y="7" width="2" height="2" fill="#94a3b8" />
    <rect x="5" y="9" width="2" height="2" fill="#64748b" />
    <rect x="3" y="11" width="2" height="2" fill="#b45309" />
    <rect x="5" y="11" width="2" height="2" fill="#b45309" />
    <rect x="3" y="9" width="2" height="2" fill="#b45309" />
    <rect x="2" y="12" width="2" height="2" fill="#78350f" />
    <rect x="1" y="13" width="2" height="2" fill="#451a03" />
    <rect x="0" y="14" width="2" height="2" fill="#1c0f02" />
  </svg>
);

const PixelShield = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="3" y="1" width="10" height="2" fill="#854d0e" />
    <rect x="2" y="3" width="12" height="3" fill="#a16207" />
    <rect x="2" y="6" width="12" height="4" fill="#713f12" />
    <rect x="3" y="10" width="10" height="3" fill="#854d0e" />
    <rect x="5" y="13" width="6" height="2" fill="#713f12" />
    <rect x="7" y="15" width="2" height="1" fill="#451a03" />
    {/* Golden Cross */}
    <rect x="7" y="3" width="2" height="8" fill="#fde047" />
    <rect x="4" y="5" width="8" height="2" fill="#fde047" />
  </svg>
);

const PixelPotion = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="6" y="1" width="4" height="2" fill="#e2e8f0" />
    <rect x="7" y="3" width="2" height="2" fill="#94a3b8" />
    <rect x="5" y="5" width="6" height="2" fill="#22c55e" />
    <rect x="4" y="7" width="8" height="7" fill="#16a34a" />
    <rect x="5" y="14" width="6" height="1" fill="#15803d" />
    <rect x="6" y="8" width="2" height="2" fill="#86efac" />
    <rect x="9" y="11" width="2" height="2" fill="#bbf7d0" />
  </svg>
);

const PixelScroll = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="2" y="1" width="12" height="2" fill="#b45309" />
    <rect x="3" y="3" width="10" height="10" fill="#fef3c7" />
    <rect x="5" y="5" width="6" height="1" fill="#78350f" />
    <rect x="5" y="7" width="6" height="1" fill="#78350f" />
    <rect x="5" y="9" width="4" height="1" fill="#78350f" />
    <rect x="5" y="11" width="5" height="1" fill="#78350f" />
    <rect x="2" y="13" width="12" height="2" fill="#b45309" />
  </svg>
);

const PixelChest = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="2" y="3" width="12" height="3" fill="#92400e" />
    <rect x="1" y="6" width="14" height="7" fill="#78350f" />
    <rect x="1" y="6" width="14" height="2" fill="#b45309" />
    <rect x="2" y="13" width="12" height="1" fill="#451a03" />
    {/* Gold bands & lock */}
    <rect x="3" y="3" width="2" height="10" fill="#fde047" />
    <rect x="11" y="3" width="2" height="10" fill="#fde047" />
    <rect x="7" y="7" width="2" height="3" fill="#f59e0b" />
    <rect x="7" y="8" width="2" height="1" fill="#1c1917" />
  </svg>
);

const PixelCoin = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="5" y="2" width="6" height="2" fill="#fde047" />
    <rect x="3" y="4" width="10" height="8" fill="#facc15" />
    <rect x="5" y="12" width="6" height="2" fill="#ca8a04" />
    <rect x="6" y="5" width="4" height="6" fill="#fef08a" />
    <rect x="7" y="6" width="2" height="4" fill="#a16207" />
  </svg>
);

const PixelCastle = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="1" y="4" width="3" height="3" fill="#64748b" />
    <rect x="6" y="2" width="4" height="5" fill="#64748b" />
    <rect x="12" y="4" width="3" height="3" fill="#64748b" />
    <rect x="1" y="7" width="14" height="8" fill="#475569" />
    <rect x="6" y="10" width="4" height="5" fill="#1e293b" />
    <rect x="7" y="3" width="2" height="2" fill="#94a3b8" />
  </svg>
);

// ============================================================================
// Medieval Torchlight & Cobblestone Canvas Background
// ============================================================================
function MedievalDungeonCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    };

    const trailingEmbers = [];

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Spawn trailing torch embers on movement
      if (trailingEmbers.length < 35 && Math.random() > 0.3) {
        trailingEmbers.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          size: Math.random() > 0.5 ? 3 : 2,
          color: Math.random() > 0.4 ? { r: 251, g: 191, b: 36 } : { r: 239, g: 68, b: 68 },
          life: 40 + Math.random() * 40,
          maxLife: 80,
          speedY: -(0.6 + Math.random() * 0.8),
          speedX: (Math.random() - 0.5) * 0.8,
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget && !e.toElement) mouse.active = false;
    });

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Warm Torchlight Pixel Embers
    const EMBER_COUNT = 45;
    const emberColors = [
      { r: 245, g: 158, b: 11  }, // amber
      { r: 234, g: 88,  b: 12  }, // orange-600
      { r: 251, g: 191, b: 36  }, // amber-300
      { r: 239, g: 68,  b: 68  }, // red-500
    ];

    const createEmber = (randomAge = false) => {
      const maxLife = 140 + Math.random() * 200;
      return {
        x: Math.random() * width,
        y: randomAge ? Math.random() * height : height + 10,
        size: Math.random() > 0.5 ? 3 : 2,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
        life: randomAge ? Math.random() * maxLife : maxLife,
        maxLife,
        speedY: -(0.5 + Math.random() * 0.7),
        speedX: (Math.random() - 0.5) * 0.5,
        flicker: Math.random() * Math.PI * 2,
      };
    };

    const embers = Array.from({ length: EMBER_COUNT }, () => createEmber(true));

    const render = () => {
      // Mouse coordinate easing
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;

      // 1. Deep Castle Dungeon Stone Background Fill
      ctx.fillStyle = '#0e0b08';
      ctx.fillRect(0, 0, width, height);

      // 2. Pixel Stone Brick Pattern
      const brickW = 48;
      const brickH = 24;

      ctx.strokeStyle = '#1a130c';
      ctx.lineWidth = 2;

      let row = 0;
      for (let y = 0; y <= height + brickH; y += brickH) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();

        const offset = (row % 2 === 0) ? 0 : brickW / 2;
        for (let x = offset; x <= width + brickW; x += brickW) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + brickH);
          ctx.stroke();
        }
        row++;
      }

      // Stone texture specks
      ctx.fillStyle = '#17120c';
      for (let y = 12; y <= height; y += brickH * 3) {
        for (let x = 16; x <= width; x += brickW * 2) {
          ctx.fillRect(x, y, 3, 3);
          ctx.fillRect(x + 18, y + 8, 2, 2);
        }
      }

      // 3. Interactive Torchlight Radial Illumination on cursor
      if (mouse.active) {
        const torchGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 160);
        torchGlow.addColorStop(0, 'rgba(251, 191, 36, 0.16)');
        torchGlow.addColorStop(0.4, 'rgba(245, 158, 11, 0.08)');
        torchGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = torchGlow;
        ctx.fillRect(mouse.x - 160, mouse.y - 160, 320, 320);

        // Pixel torch spark cross
        ctx.fillStyle = 'rgba(253, 224, 71, 0.7)';
        ctx.fillRect(Math.floor(mouse.x - 4), Math.floor(mouse.y), 9, 1);
        ctx.fillRect(Math.floor(mouse.x), Math.floor(mouse.y - 4), 1, 9);
      }

      // 4. Trailing Torch Embers
      for (let i = trailingEmbers.length - 1; i >= 0; i--) {
        const te = trailingEmbers[i];
        te.life -= 1;
        te.y += te.speedY;
        te.x += te.speedX;

        const teAlpha = te.life / te.maxLife;
        if (teAlpha > 0) {
          const { r, g, b } = te.color;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${teAlpha * 0.9})`;
          ctx.fillRect(Math.floor(te.x), Math.floor(te.y), te.size, te.size);
        }
        if (te.life <= 0) {
          trailingEmbers.splice(i, 1);
        }
      }

      // 5. Rising Background Torchlight Pixel Embers
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.life -= 1;
        e.y += e.speedY;
        e.x += e.speedX + Math.sin(Date.now() * 0.003 + e.flicker) * 0.4;

        const lifeFrac = e.life / e.maxLife;
        let alpha = 1;
        if (lifeFrac > 0.8) alpha = (1 - lifeFrac) / 0.2;
        else if (lifeFrac < 0.2) alpha = lifeFrac / 0.2;

        const pulse = 0.7 + 0.3 * Math.sin(Date.now() * 0.01 + e.flicker);
        const finalAlpha = Math.max(0, alpha * pulse * 0.85);

        if (finalAlpha > 0.01) {
          const { r, g, b } = e.color;

          // Pixel block
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
          ctx.fillRect(Math.floor(e.x), Math.floor(e.y), e.size, e.size);

          // Subtle pixel halo
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.3})`;
          ctx.fillRect(Math.floor(e.x - 1), Math.floor(e.y - 1), e.size + 2, e.size + 2);
        }

        if (e.life <= 0 || e.y < -10 || e.x < -10 || e.x > width + 10) {
          embers[i] = createEmber(false);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// ============================================================================
// Main Growing Explorations Page Component (Medieval Pixel RPG Theme)
// ============================================================================
export default function GrowingExplorationsPage({ game }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;
  const faqs = game.faqs || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-amber-100 font-sans pb-24 select-none">
      {/* Medieval Castle Dungeon Canvas Background */}
      <MedievalDungeonCanvas />

      <div className="relative z-10 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ================= HERO SECTION ================= */}
        <section className="pixel-box-wood p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Top-Right AI Art Tag */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-[#3d2008] border-2 border-[#f59e0b] shadow-[0_4px_0_#1c0f02,0_0_20px_rgba(245,158,11,0.6)] text-amber-200 font-pixel text-[10px] uppercase tracking-wider animate-pulse">
              <span className="text-yellow-300">✦</span>
              <span className="drop-shadow-[0_1px_0_#451a03]">AI Art</span>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#2b1408] border-2 border-[#ea580c] text-amber-300 font-pixel text-[10px]">
                <PixelShield className="w-3.5 h-3.5 text-amber-400" />
                <span>{game.status}</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-[#261608] border-2 border-[#d97706] text-amber-300 font-pixel text-[10px]">
                <PixelPotion className="w-3.5 h-3.5" />
                <span>{game.releaseStage}</span>
              </div>

              <span className="font-pixel text-[10px] text-amber-400/90 bg-[#140e06] px-3 py-1 border border-[#523318]">
                {game.genre}
              </span>
            </div>

            {/* Main Pixel Title */}
            <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-amber-200 tracking-tight leading-tight drop-shadow-[0_4px_0_#451a03]">
              {game.title}
            </h1>

            {/* Hero Quote */}
            <div className="bg-[#0f0b07] p-4 sm:p-5 border-l-4 border-amber-500 border-y border-r border-[#4a2e14]">
              <p className="font-medieval text-lg sm:text-2xl text-amber-100 italic leading-relaxed">
                "{game.heroQuote}"
              </p>
            </div>

            {/* Description Box */}
            <div className="bg-[#120d08] p-4 sm:p-5 border-2 border-[#5c3a19] text-amber-200/90 font-medieval text-base sm:text-lg leading-relaxed">
              {game.tagline}
            </div>

            {/* 16-Bit RPG Action Menu Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={game.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-emerald inline-flex items-center space-x-3 px-6 py-3.5 font-pixel text-xs text-white uppercase tracking-wider cursor-pointer"
              >
                <PixelSword className="w-4 h-4 text-amber-300" />
                <span>▶ Play On Itch.io</span>
              </a>

              <a
                href={game.patreonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-amber inline-flex items-center space-x-3 px-6 py-3.5 font-pixel text-xs text-amber-100 uppercase tracking-wider cursor-pointer"
              >
                <PixelChest className="w-4 h-4 text-amber-300" />
                <span>★ Patreon Early Builds</span>
              </a>
            </div>

          </div>
        </section>

        {/* ================= STORY & SETTING + STATS SIDEBAR ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Story & Setting Column */}
          <div className="lg:col-span-2 pixel-box-wood p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-2 border-b-2 border-[#8b5a2b] pb-3">
              <PixelScroll className="w-5 h-5 text-amber-400" />
              <h2 className="font-pixel text-sm sm:text-base text-amber-200">
                STORY & SETTING
              </h2>
            </div>

            {/* Lore Text in Medieval Font */}
            <div className="bg-[#0e0a06] p-5 sm:p-6 border-2 border-[#4a2e14] text-amber-100 font-medieval text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {game.description}
            </div>

            {/* Key Mechanics & Features */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-2 border-b border-[#5c3a19] pb-2">
                <PixelShield className="w-4 h-4 text-emerald-400" />
                <h3 className="font-pixel text-xs sm:text-sm text-emerald-300">
                  KEY FEATURES & MECHANICS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#120d07] p-4 border-2 border-[#4a2e14] hover:border-amber-600 transition-colors"
                  >
                    <div className="flex items-center font-pixel text-[10px] sm:text-xs text-amber-300 mb-2">
                      <span className="text-emerald-400 mr-2">▶</span>
                      <span>{feat.title}</span>
                    </div>
                    <p className="font-medieval text-sm sm:text-base text-amber-200/80 leading-snug pl-4">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            
            {/* Platforms Slate */}
            <div className="pixel-box-stone p-5 sm:p-6 space-y-4">
              <div className="flex items-center space-x-2 border-b-2 border-[#545b63] pb-2">
                <PixelCastle className="w-4 h-4 text-slate-300" />
                <h3 className="font-pixel text-[11px] text-slate-200">
                  SUPPORTED PLATFORMS
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {game.platforms.map((plat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#0a0b0d] font-pixel text-[10px] text-amber-300 border-2 border-[#33383e]"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            {/* System Requirements Spec Scroll */}
            {game.systemRequirements && (
              <div className="pixel-box-stone p-5 sm:p-6 space-y-4">
                <div className="flex items-center space-x-2 border-b-2 border-[#545b63] pb-2">
                  <PixelPotion className="w-4 h-4 text-emerald-400" />
                  <h3 className="font-pixel text-[11px] text-slate-200">
                    SYSTEM REQUIREMENTS
                  </h3>
                </div>
                <div className="space-y-2 font-pixel text-[9px] sm:text-[10px]">
                  <div className="flex justify-between border-b border-[#23272c] pb-1.5">
                    <span className="text-slate-400">CPU:</span>
                    <span className="text-amber-200">{game.systemRequirements.processor}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#23272c] pb-1.5">
                    <span className="text-slate-400">RAM:</span>
                    <span className="text-amber-200">{game.systemRequirements.memory}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#23272c] pb-1.5">
                    <span className="text-slate-400">GPU:</span>
                    <span className="text-amber-200">{game.systemRequirements.graphics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">STORAGE:</span>
                    <span className="text-amber-200">{game.systemRequirements.storage}</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ================= CREDITS SECTION ================= */}
        {game.contributors && game.contributors.length > 0 && (
          <section className="pixel-box-wood p-6 sm:p-8 space-y-6">
            <div className="flex items-center space-x-3 border-b-2 border-[#8b5a2b] pb-4">
              <PixelSword className="w-6 h-6 text-amber-400" />
              <h2 className="font-pixel text-sm sm:text-base text-amber-200">
                CREDITS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {game.contributors.map((c, idx) => {
                const hasLink = Boolean(c.url);
                const CardWrapper = hasLink ? 'a' : 'div';
                const wrapperProps = hasLink ? {
                  href: c.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  title: `Visit ${c.name}'s page`
                } : {};

                return (
                  <CardWrapper
                    key={idx}
                    {...wrapperProps}
                    className={`p-4 sm:p-5 border-2 flex flex-col justify-between space-y-2 transition-all duration-200 block ${
                      hasLink
                        ? 'bg-[#241509] border-[#d97706] shadow-[0_4px_0_#1c0f05,0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_4px_0_#1c0f05,0_0_25px_rgba(245,158,11,0.45)] hover:border-yellow-400 hover:bg-[#331c0b] group cursor-pointer hover:-translate-y-0.5'
                        : 'bg-[#0e0a06] border-[#3d2410] shadow-[0_3px_0_#1c0f05] cursor-default'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`font-pixel text-xs ${hasLink ? 'text-amber-100 group-hover:text-yellow-200 transition-colors' : 'text-stone-300'}`}>
                        {c.name}
                      </h3>
                      {hasLink && (
                        <span className="text-amber-400 group-hover:text-yellow-300 font-pixel text-[10px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      )}
                    </div>
                    <p className={`font-medieval text-sm ${hasLink ? 'text-amber-300' : 'text-stone-400'}`}>
                      {c.role}
                    </p>
                  </CardWrapper>
                );
              })}
            </div>
          </section>
        )}

        {/* ================= GUIDES & FAQ ================= */}
        <section className="pixel-box-wood p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-3 border-b-2 border-[#8b5a2b] pb-4">
            <PixelScroll className="w-6 h-6 text-amber-400" />
            <h2 className="font-pixel text-sm sm:text-base text-amber-200">
              GUIDES & FAQ
            </h2>
          </div>

          {faqs.length > 0 ? (
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#0e0a06] border-2 border-[#4a2e14]"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between font-pixel text-xs sm:text-sm text-amber-200 hover:text-amber-100 transition-colors"
                  >
                    <span>▶ {faq.question}</span>
                    <span className="text-amber-400 font-pixel text-[10px]">{openFaqIndex === idx ? '▲' : '▼'}</span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 font-medieval text-base text-amber-100/90 leading-relaxed border-t border-[#4a2e14] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Empty FAQ State */
            <div className="bg-[#0e0a06] p-8 sm:p-12 border-2 border-[#5c3a19] text-center space-y-4">
              <div className="w-14 h-14 bg-[#1f140a] border-2 border-[#8b5a2b] flex items-center justify-center mx-auto text-amber-400">
                <PixelScroll className="w-7 h-7" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-pixel text-xs sm:text-sm text-amber-200">
                  FREQUENTLY ASKED QUESTIONS COMING SOON
                </h3>
                <p className="font-medieval text-base text-amber-300/80 leading-relaxed">
                  We are currently curating gameplay FAQs, troubleshooting steps, and guides for {game.title}.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={socials.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-amber inline-flex items-center space-x-2 px-5 py-2.5 font-pixel text-[10px] text-amber-100 uppercase tracking-wider cursor-pointer"
                >
                  <PixelPotion className="w-3.5 h-3.5" />
                  <span>Ask on Discord</span>
                </a>
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
