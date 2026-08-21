import React, { useState, useEffect, useRef } from 'react';
import { socials } from '../../data/socials';

// ============================================================================
// Custom 16-Bit Sci-Fi Pixel Art SVG Icons (White & Red Theme)
// ============================================================================
const PixelMicrochip = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="3" y="3" width="10" height="10" fill="#ffffff" />
    <rect x="5" y="5" width="6" height="6" fill="#ef4444" />
    <rect x="7" y="7" width="2" height="2" fill="#ffffff" />
    {/* Pins */}
    <rect x="5" y="1" width="2" height="2" fill="#f87171" />
    <rect x="9" y="1" width="2" height="2" fill="#f87171" />
    <rect x="5" y="13" width="2" height="2" fill="#f87171" />
    <rect x="9" y="13" width="2" height="2" fill="#f87171" />
    <rect x="1" y="5" width="2" height="2" fill="#f87171" />
    <rect x="1" y="9" width="2" height="2" fill="#f87171" />
    <rect x="13" y="5" width="2" height="2" fill="#f87171" />
    <rect x="13" y="9" width="2" height="2" fill="#f87171" />
  </svg>
);

const PixelDnaRed = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="3" y="1" width="3" height="2" fill="#ef4444" />
    <rect x="10" y="1" width="3" height="2" fill="#ffffff" />
    <rect x="5" y="3" width="6" height="2" fill="#fca5a5" />
    <rect x="6" y="5" width="4" height="2" fill="#ffffff" />
    <rect x="4" y="7" width="8" height="2" fill="#ef4444" />
    <rect x="3" y="9" width="3" height="2" fill="#ffffff" />
    <rect x="10" y="9" width="3" height="2" fill="#ef4444" />
    <rect x="5" y="11" width="6" height="2" fill="#fca5a5" />
    <rect x="6" y="13" width="4" height="2" fill="#ffffff" />
  </svg>
);

const PixelLabFlask = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="6" y="1" width="4" height="2" fill="#ffffff" />
    <rect x="7" y="3" width="2" height="3" fill="#cbd5e1" />
    <rect x="5" y="6" width="6" height="2" fill="#ffffff" />
    <rect x="3" y="8" width="10" height="6" fill="#ef4444" />
    <rect x="4" y="14" width="8" height="1" fill="#b91c1c" />
    <rect x="5" y="9" width="2" height="2" fill="#ffffff" />
    <rect x="9" y="11" width="2" height="2" fill="#fca5a5" />
  </svg>
);

const PixelDisc = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="3" y="1" width="10" height="14" fill="#ffffff" />
    <rect x="5" y="2" width="6" height="4" fill="#ef4444" />
    <rect x="4" y="8" width="8" height="5" fill="#f1f5f9" />
    <rect x="5" y="9" width="6" height="1" fill="#ef4444" />
    <rect x="5" y="11" width="4" height="1" fill="#ef4444" />
  </svg>
);

const PixelHeartRed = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className} shapeRendering="crispEdges">
    <rect x="2" y="3" width="4" height="3" fill="#ef4444" />
    <rect x="10" y="3" width="4" height="3" fill="#ef4444" />
    <rect x="1" y="6" width="14" height="4" fill="#dc2626" />
    <rect x="3" y="10" width="10" height="2" fill="#dc2626" />
    <rect x="5" y="12" width="6" height="2" fill="#b91c1c" />
    <rect x="7" y="14" width="2" height="1" fill="#991b1b" />
    <rect x="3" y="4" width="2" height="2" fill="#ffffff" />
  </svg>
);

// ============================================================================
// Sci-Fi Simulation Interactive Background Canvas (White/Red Telemetry Theme)
// ============================================================================
function SciFiSimulationCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Mouse tracking for interactive simulation scanner
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
      pulseRadius: 0
    };

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
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

    // Vertical Digital Telemetry Streams
    const COLUMN_COUNT = 18;
    const dataColumns = Array.from({ length: COLUMN_COUNT }, (_, i) => ({
      x: (width / (COLUMN_COUNT + 1)) * (i + 1) + (Math.random() - 0.5) * 40,
      y: Math.random() * height,
      speed: 0.8 + Math.random() * 1.6,
      length: 4 + Math.floor(Math.random() * 8),
      isRed: Math.random() > 0.6,
    }));

    // Floating White and Red Pixel Particles
    const PARTICLE_COUNT = 35;
    const particleColors = [
      { r: 255, g: 255, b: 255 }, // pure white
      { r: 239, g: 68,  b: 68  }, // red-500
      { r: 248, g: 113, b: 113 }, // red-400
    ];

    const createParticle = (randomAge = false) => {
      const maxLife = 140 + Math.random() * 200;
      return {
        x: Math.random() * width,
        y: randomAge ? Math.random() * height : height + 10,
        size: Math.random() > 0.5 ? 3 : 2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        life: randomAge ? Math.random() * maxLife : maxLife,
        maxLife,
        speedY: -(0.5 + Math.random() * 0.7),
        speedX: (Math.random() - 0.5) * 0.3,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    };

    const particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(true));

    let time = 0;

    const render = () => {
      time++;
      // Mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      // 1. Deep Monochrome Obsidian Laboratory Background
      ctx.fillStyle = '#06070a';
      ctx.fillRect(0, 0, width, height);

      // 2. High-Contrast Sci-Fi Micro-Pixel Grid
      const step = 44;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;

      ctx.beginPath();
      for (let x = 0; x <= width; x += step) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += step) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Red Pixel Telemetry Intersection Dots
      ctx.fillStyle = 'rgba(239, 68, 68, 0.22)';
      for (let x = 0; x <= width; x += step * 2) {
        for (let y = 0; y <= height; y += step * 2) {
          ctx.fillRect(x - 1, y - 1, 2, 2);
        }
      }

      // 3. Vertical Falling/Rising Digital Data Streams (Unique to Expanding Horizons)
      for (let col of dataColumns) {
        col.y += col.speed;
        if (col.y > height + 80) col.y = -80;

        for (let j = 0; j < col.length; j++) {
          const bitY = col.y - j * 10;
          if (bitY >= 0 && bitY <= height) {
            const alpha = ((col.length - j) / col.length) * 0.25;
            ctx.fillStyle = col.isRed 
              ? `rgba(239, 68, 68, ${alpha})` 
              : `rgba(255, 255, 255, ${alpha * 0.9})`;
            ctx.fillRect(Math.floor(col.x), Math.floor(bitY), 2, 4);
          }
        }
      }

      // 4. Vital Signs / Heartbeat ECG Telemetry Pulse Wave along bottom
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.18)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const waveY = height - 120;
      const waveSpeed = time * 2.5;

      for (let x = 0; x <= width; x += 4) {
        const offset = (x + waveSpeed) % 400;
        let dy = 0;
        if (offset > 180 && offset < 195) dy = -16;
        else if (offset >= 195 && offset < 210) dy = 24;
        else if (offset >= 210 && offset < 225) dy = -8;
        
        const y = waveY + dy + Math.sin((x + time) * 0.02) * 2;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // 5. Interactive Mouse Telemetry Scanner Ping
      if (mouse.active) {
        mouse.pulseRadius = (mouse.pulseRadius + 1.2) % 90;
        const pingAlpha = (1 - mouse.pulseRadius / 90) * 0.45;

        // Concentric expanding square radar ping
        ctx.strokeStyle = `rgba(239, 68, 68, ${pingAlpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(
          Math.floor(mouse.x - mouse.pulseRadius), 
          Math.floor(mouse.y - mouse.pulseRadius), 
          mouse.pulseRadius * 2, 
          mouse.pulseRadius * 2
        );

        ctx.strokeStyle = `rgba(255, 255, 255, ${pingAlpha * 0.7})`;
        ctx.strokeRect(
          Math.floor(mouse.x - mouse.pulseRadius * 0.5), 
          Math.floor(mouse.y - mouse.pulseRadius * 0.5), 
          mouse.pulseRadius, 
          mouse.pulseRadius
        );

        // Crosshair at cursor
        ctx.fillStyle = 'rgba(239, 68, 68, 0.6)';
        ctx.fillRect(Math.floor(mouse.x - 8), Math.floor(mouse.y), 17, 1);
        ctx.fillRect(Math.floor(mouse.x), Math.floor(mouse.y - 8), 1, 17);

        // Digital coordinates tag
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '8px monospace';
        ctx.fillText(`SIM_NODE: [${Math.floor(mouse.x)}, ${Math.floor(mouse.y)}]`, mouse.x + 12, mouse.y - 6);
      }

      // 6. Floating White & Red Pixel Data Motes
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life -= 1;
        p.y += p.speedY;
        p.x += p.speedX;

        const lifeFrac = p.life / p.maxLife;
        let alpha = 1;
        if (lifeFrac > 0.8) alpha = (1 - lifeFrac) / 0.2;
        else if (lifeFrac < 0.25) alpha = lifeFrac / 0.25;

        const pulse = 0.7 + 0.3 * Math.sin(time * 0.01 + p.pulseOffset);
        const finalAlpha = Math.max(0, alpha * pulse * 0.85);

        if (finalAlpha > 0.01) {
          const { r, g, b } = p.color;

          // Square pixel block
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
          ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);

          // Subtle square halo
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.25})`;
          ctx.fillRect(Math.floor(p.x - 1), Math.floor(p.y - 1), p.size + 2, p.size + 2);
        }

        if (p.life <= 0 || p.y < -10 || p.x < -10 || p.x > width + 10) {
          particles[i] = createParticle(false);
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
// Main Expanding Horizons Page (Sci-Fi Pixel Art Simulation - White & Red Theme)
// ============================================================================
export default function ExpandingHorizonsPage({ game }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;
  const faqs = game.faqs || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans pb-24 select-none">
      {/* Sci-Fi Simulation Canvas Background */}
      <SciFiSimulationCanvas />

      <div className="relative z-10 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ================= HERO SECTION (White & Red Sci-Fi Pixel Box) ================= */}
        <section className="bg-[#0b0c12]/95 border-2 border-white/80 p-6 sm:p-10 lg:p-12 shadow-[0_0_30px_rgba(239,68,68,0.25)] relative">
          
          {/* Red Pixel Corner Squares */}
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-red-500" />
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-red-500" />
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-red-500" />

          <div className="space-y-6 max-w-4xl">
            
            {/* Status Badges in White & Red Pixel Frame */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#18080a] border-2 border-red-500 text-white font-pixel text-[10px] shadow-[0_0_12px_rgba(239,68,68,0.4)]">
                <PixelHeartRed className="w-3.5 h-3.5" />
                <span>{game.status}</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 bg-[#10121a] border-2 border-white/60 text-white font-pixel text-[10px]">
                <PixelMicrochip className="w-3.5 h-3.5" />
                <span>{game.releaseStage}</span>
              </div>

              <span className="font-pixel text-[10px] text-red-400 bg-[#12080a] px-3 py-1.5 border border-red-500/40">
                {game.genre}
              </span>
            </div>

            {/* Main Pixel Title (High Contrast White with Red Drop Shadow) */}
            <h1 className="font-pixel text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight drop-shadow-[0_4px_0_#ef4444]">
              {game.title}
            </h1>

            {/* Hero Quote in Crisp White */}
            <div className="bg-[#12131c] p-4 sm:p-5 border-l-4 border-red-500 border-y border-r border-white/20">
              <p className="font-mono text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                "{game.heroQuote}"
              </p>
            </div>

            {/* Tagline Box */}
            <div className="bg-[#0f1017] p-4 sm:p-5 border-2 border-white/20 text-slate-200 font-mono text-xs sm:text-sm leading-relaxed">
              {game.tagline}
            </div>

            {/* High-Contrast Action Buttons (White & Red) */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={game.itchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-950 border-2 border-red-500 font-pixel text-xs font-bold uppercase tracking-wider shadow-[0_4px_0_#b91c1c] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all cursor-pointer"
              >
                <PixelMicrochip className="w-4 h-4 text-red-600" />
                <span>Play on itch.io</span>
              </a>

              <a
                href={game.patreonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#14080a] hover:bg-[#1f0c0f] text-white border-2 border-red-500/80 font-pixel text-xs font-bold uppercase tracking-wider shadow-[0_4px_0_#7f1d1d] hover:translate-y-[-2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                <PixelHeartRed className="w-4 h-4" />
                <span>Support on Patreon</span>
              </a>
            </div>

          </div>
        </section>

        {/* ================= STORY & SETTING + STATS SIDEBAR ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Story & Setting Column */}
          <div className="lg:col-span-2 bg-[#0b0c12]/95 border-2 border-white/80 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center space-x-2 border-b-2 border-red-500/60 pb-3">
              <PixelDisc className="w-5 h-5 text-red-500" />
              <h2 className="font-pixel text-sm sm:text-base text-white">
                SETTING
              </h2>
            </div>

            {/* Description Text */}
            <div className="bg-[#12141e] p-5 sm:p-6 border-2 border-white/20 text-slate-100 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-line">
              {game.description}
            </div>

            {/* Key Mechanics & Features */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center space-x-2 border-b border-red-500/40 pb-2">
                <PixelDnaRed className="w-4 h-4 text-red-400" />
                <h3 className="font-pixel text-xs sm:text-sm text-red-400">
                  KEY FEATURES & MECHANICS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#12131d] p-4 border-2 border-white/20 hover:border-red-500/80 transition-colors"
                  >
                    <div className="flex items-center font-pixel text-[10px] sm:text-xs text-white mb-2">
                      <span className="text-red-500 mr-2">■</span>
                      <span>{feat.title}</span>
                    </div>
                    <p className="font-mono text-xs text-slate-300 leading-relaxed pl-3.5">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: System Specs & Dev Notice */}
          <div className="space-y-6">
            
            {/* Platforms Slate */}
            <div className="bg-[#0b0c12]/95 border-2 border-white/80 p-5 sm:p-6 space-y-4 shadow-lg">
              <div className="flex items-center space-x-2 border-b-2 border-red-500/60 pb-2">
                <PixelMicrochip className="w-4 h-4 text-red-400" />
                <h3 className="font-pixel text-[11px] text-white">
                  SUPPORTED PLATFORMS
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {game.platforms.map((plat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#12141e] font-pixel text-[10px] text-white border-2 border-white/30"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            {/* System Requirements Spec */}
            {game.systemRequirements && (
              <div className="bg-[#0b0c12]/95 border-2 border-white/80 p-5 sm:p-6 space-y-4 shadow-lg">
                <div className="flex items-center space-x-2 border-b-2 border-red-500/60 pb-2">
                  <PixelLabFlask className="w-4 h-4 text-red-400" />
                  <h3 className="font-pixel text-[11px] text-white">
                    SYSTEM REQUIREMENTS
                  </h3>
                </div>
                <div className="space-y-2 font-pixel text-[9px] sm:text-[10px]">
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-400">CPU:</span>
                    <span className="text-white">{game.systemRequirements.processor}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-1.5">
                    <span className="text-slate-400">RAM:</span>
                    <span className="text-white">{game.systemRequirements.memory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">STORAGE:</span>
                    <span className="text-white">{game.systemRequirements.storage}</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ================= CREDITS SECTION ================= */}
        {game.contributors && game.contributors.length > 0 && (
          <section className="bg-[#0b0c12]/95 border-2 border-white/80 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center space-x-3 border-b-2 border-red-500/60 pb-4">
              <PixelMicrochip className="w-6 h-6 text-red-500" />
              <h2 className="font-pixel text-sm sm:text-base text-white">
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
                        ? 'bg-[#1c0d10] border-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.25)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)] hover:border-white hover:bg-[#2b1216] group cursor-pointer hover:-translate-y-0.5'
                        : 'bg-[#0b0c12] border-white/20 cursor-default'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`font-pixel text-xs ${hasLink ? 'text-white group-hover:text-red-200 transition-colors' : 'text-slate-300'}`}>
                        {c.name}
                      </h3>
                      {hasLink && (
                        <span className="text-red-400 group-hover:text-white font-pixel text-[9px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ■↗
                        </span>
                      )}
                    </div>
                    <p className={`font-mono text-xs ${hasLink ? 'text-red-300' : 'text-slate-500'}`}>
                      {c.role}
                    </p>
                  </CardWrapper>
                );
              })}
            </div>
          </section>
        )}

        {/* ================= GUIDES & FAQ ================= */}
        <section className="bg-[#0b0c12]/95 border-2 border-white/80 p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center space-x-3 border-b-2 border-red-500/60 pb-4">
            <PixelDisc className="w-6 h-6 text-red-500" />
            <h2 className="font-pixel text-sm sm:text-base text-white">
              GUIDES & FAQ
            </h2>
          </div>

          {faqs.length > 0 ? (
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#12141e] border-2 border-white/30"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between font-pixel text-xs sm:text-sm text-white hover:text-red-400 transition-colors"
                  >
                    <span>■ {faq.question}</span>
                    <span className="text-red-500 font-pixel text-[10px]">{openFaqIndex === idx ? '▲' : '▼'}</span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Empty FAQ State */
            <div className="bg-[#12141e] p-8 sm:p-12 border-2 border-white/20 text-center space-y-4">
              <div className="w-14 h-14 bg-[#1c0a0e] border-2 border-red-500 flex items-center justify-center mx-auto text-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                <PixelDisc className="w-7 h-7" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-pixel text-xs sm:text-sm text-white">
                  FREQUENTLY ASKED QUESTIONS COMING SOON
                </h3>
                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  We are currently curating gameplay FAQs, stat management tips, and guides for {game.title}.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={socials.discord.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-pixel text-[10px] uppercase tracking-wider border-2 border-white shadow-[0_3px_0_#991b1b] cursor-pointer transition-all"
                >
                  <PixelLabFlask className="w-3.5 h-3.5" />
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