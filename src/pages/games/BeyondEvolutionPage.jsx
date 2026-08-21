import React, { useState, useEffect, useRef } from 'react';
import { 
  Gamepad2, Heart, Crosshair, Dna, ShieldAlert, Cpu, 
  Terminal, Monitor, HelpCircle, MessageSquare, ChevronDown, 
  Radio, Zap, Layers, Activity, AlertTriangle, Users, ExternalLink, Sparkles
} from 'lucide-react';
import { socials } from '../../data/socials';

// ============================================================================
// Post-Apocalyptic Tactical HUD Background Canvas with Earth Map Outline
// ============================================================================
function PostApocalypticCanvas() {
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
      pulseRadius: 0,
      reticleAngle: 0,
    };

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
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

    // Simplified Tactical Vector Polygon Outlines for Earth Continents (Normalized 0..1000 x 0..500)
    const earthContinents = [
      // North America
      [
        [80, 100], [140, 70], [210, 60], [260, 80], [240, 120], 
        [280, 150], [250, 190], [210, 190], [190, 240], [160, 260], 
        [140, 240], [120, 220], [90, 190], [60, 140], [80, 100]
      ],
      // Greenland
      [
        [320, 40], [380, 30], [400, 70], [350, 100], [310, 70], [320, 40]
      ],
      // South America
      [
        [220, 270], [270, 260], [320, 290], [340, 340], [300, 410], 
        [270, 470], [250, 450], [240, 380], [210, 310], [220, 270]
      ],
      // Europe & British Isles
      [
        [460, 80], [520, 60], [560, 90], [530, 130], [500, 150], 
        [470, 150], [440, 130], [460, 80]
      ],
      // Africa
      [
        [440, 170], [520, 160], [560, 200], [550, 260], [520, 340], 
        [490, 380], [450, 330], [420, 250], [410, 200], [440, 170]
      ],
      // Madagascar
      [
        [560, 330], [580, 340], [570, 380], [550, 360], [560, 330]
      ],
      // Asia / Russia / Middle East
      [
        [540, 70], [620, 50], [740, 50], [840, 70], [890, 110], 
        [860, 160], [800, 170], [740, 210], [710, 270], [660, 250], 
        [630, 190], [580, 180], [550, 140], [540, 70]
      ],
      // Japan
      [
        [870, 140], [890, 150], [880, 180], [860, 170], [870, 140]
      ],
      // Southeast Asia / Indonesia
      [
        [750, 250], [790, 270], [830, 290], [790, 320], [740, 290], [750, 250]
      ],
      // Australia
      [
        [790, 340], [870, 340], [890, 380], [880, 440], [820, 440], 
        [780, 400], [790, 340]
      ],
      // New Zealand
      [
        [910, 420], [930, 430], [920, 460], [900, 450], [910, 420]
      ]
    ];

    // Tactical Outpost Pulse Points on Earth Map
    const tacticalOutposts = [
      { x: 190, y: 160, label: "SEC-01 NA" },
      { x: 480, y: 110, label: "SEC-02 EU" },
      { x: 700, y: 150, label: "SEC-03 ASIA" },
      { x: 880, y: 160, label: "SEC-04 PACIFIC" },
      { x: 480, y: 260, label: "SEC-05 AFR" },
      { x: 830, y: 390, label: "SEC-06 OCEANIA" },
    ];

    // Light Blue Bio-Luminescent Fallout Motes & Data Particles
    const PARTICLE_COUNT = 45;
    const particleColors = [
      { r: 56,  g: 189, b: 248 }, // sky-400
      { r: 14,  g: 165, b: 233 }, // sky-500
      { r: 125, g: 211, b: 252 }, // sky-300
      { r: 6,   g: 182, b: 212 }, // cyan-500
      { r: 224, g: 242, b: 254 }, // sky-100
    ];

    const createParticle = (randomAge = false) => {
      const maxLife = 160 + Math.random() * 240;
      return {
        x: Math.random() * width,
        y: randomAge ? Math.random() * height : height + 15,
        size: 1.2 + Math.random() * 2.2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        life: randomAge ? Math.random() * maxLife : maxLife,
        maxLife,
        speedY: -(0.4 + Math.random() * 0.6),
        speedX: (Math.random() - 0.5) * 0.35,
        pulseOffset: Math.random() * Math.PI * 2,
      };
    };

    const particles = Array.from({ length: PARTICLE_COUNT }, () => createParticle(true));
    let scanlineY = 0;
    let time = 0;

    const render = () => {
      time++;
      // Mouse coordinate easing & reticle spin
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;
      mouse.reticleAngle += 0.02;

      // 1. Deep Post-Apocalyptic Tactical Dark Navy Background
      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      bgGrad.addColorStop(0, '#030812');
      bgGrad.addColorStop(0.5, '#061020');
      bgGrad.addColorStop(1, '#02060e');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Tactical Coordinate Grid & Angular HUD Lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 64;

      ctx.beginPath();
      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Tactical Crosshair Intersections
      ctx.fillStyle = 'rgba(56, 189, 248, 0.18)';
      for (let x = 0; x <= width; x += gridSize * 2) {
        for (let y = 0; y <= height; y += gridSize * 2) {
          ctx.fillRect(x - 3, y, 7, 1);
          ctx.fillRect(x, y - 3, 1, 7);
        }
      }

      // 3. Holographic Earth Map Outline (Thematic to Beyond Evolution)
      const mapWidth = Math.min(width * 0.85, 1200);
      const mapHeight = mapWidth * 0.5;
      const mapOffsetX = (width - mapWidth) / 2;
      const mapOffsetY = Math.max(80, (height - mapHeight) / 2 - 30);

      // Earth Continent Outlines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.09)';
      ctx.fillStyle = 'rgba(14, 165, 233, 0.015)';
      ctx.lineWidth = 1.5;

      for (const continent of earthContinents) {
        ctx.beginPath();
        for (let i = 0; i < continent.length; i++) {
          const px = mapOffsetX + (continent[i][0] / 1000) * mapWidth;
          const py = mapOffsetY + (continent[i][1] / 500) * mapHeight;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }

      // Tactical Earth Map Latitude/Longitude Guide Lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.035)';
      ctx.lineWidth = 1;
      // Equator
      ctx.beginPath();
      ctx.moveTo(mapOffsetX, mapOffsetY + mapHeight * 0.5);
      ctx.lineTo(mapOffsetX + mapWidth, mapOffsetY + mapHeight * 0.5);
      ctx.stroke();

      // Prime Meridian
      ctx.beginPath();
      ctx.moveTo(mapOffsetX + mapWidth * 0.48, mapOffsetY);
      ctx.lineTo(mapOffsetX + mapWidth * 0.48, mapOffsetY + mapHeight);
      ctx.stroke();

      // Tactical Sector Beacon Nodes on Earth Map
      for (const beacon of tacticalOutposts) {
        const bx = mapOffsetX + (beacon.x / 1000) * mapWidth;
        const by = mapOffsetY + (beacon.y / 500) * mapHeight;

        // Faint pulsing beacon ring
        const beaconPulse = (time * 0.04) % (Math.PI * 2);
        const beaconRadius = 4 + Math.sin(beaconPulse) * 3;
        
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, beaconRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = 'rgba(125, 211, 252, 0.6)';
        ctx.beginPath();
        ctx.arc(bx, by, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Faint Scanning Radar Wave with Static Stereo Shift
      scanlineY = (scanlineY + 1.2) % (height + 100);
      const scanGrad = ctx.createLinearGradient(0, scanlineY - 70, 0, scanlineY);
      scanGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
      scanGrad.addColorStop(0.9, 'rgba(14, 165, 233, 0.05)');
      scanGrad.addColorStop(1, 'rgba(56, 189, 248, 0.08)');
      ctx.fillStyle = scanGrad;
      ctx.fillRect(0, Math.max(0, scanlineY - 70), width, 70);

      // 5. Interactive Tactical Combat Reticle & Sonar Waves on Cursor
      if (mouse.active) {
        // Subtle light blue radial glow
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
        glow.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        glow.addColorStop(0.5, 'rgba(14, 165, 233, 0.04)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - 140, mouse.y - 140, 280, 280);

        // Expanding circular tactical sonar ring
        mouse.pulseRadius = (mouse.pulseRadius + 1) % 70;
        const pulseAlpha = (1 - mouse.pulseRadius / 70) * 0.4;
        ctx.strokeStyle = `rgba(56, 189, 248, ${pulseAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.pulseRadius, 0, Math.PI * 2);
        ctx.stroke();

        // Rotating targeting reticle ring
        ctx.save();
        ctx.translate(mouse.x, mouse.y);
        ctx.rotate(mouse.reticleAngle);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.65)';
        ctx.lineWidth = 1.5;

        // 4 arc segments
        for (let a = 0; a < 4; a++) {
          ctx.beginPath();
          ctx.arc(0, 0, 16, a * Math.PI * 0.5 + 0.2, (a + 1) * Math.PI * 0.5 - 0.2);
          ctx.stroke();
        }
        ctx.restore();

        // Center crosshair & dot
        ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
        ctx.fill();

        // Monospace tactical HUD labels
        ctx.fillStyle = 'rgba(125, 211, 252, 0.6)';
        ctx.font = '8px monospace';
        ctx.fillText(`[TGT_LOCK: ACTIVE]`, mouse.x + 22, mouse.y - 6);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.fillText(`[BIO_SCAN: 98.4%]`, mouse.x + 22, mouse.y + 6);
      }

      // 6. Bio-Luminescent Light Blue Fallout Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life -= 1;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(Date.now() * 0.002 + p.pulseOffset) * 0.25;

        const lifeFrac = p.life / p.maxLife;
        let alpha = 1;
        if (lifeFrac > 0.8) alpha = (1 - lifeFrac) / 0.2;
        else if (lifeFrac < 0.25) alpha = lifeFrac / 0.25;

        const pulse = 0.65 + 0.35 * Math.sin(Date.now() * 0.005 + p.pulseOffset);
        const finalAlpha = Math.max(0, alpha * pulse * 0.8);

        if (finalAlpha > 0.01) {
          const { r, g, b } = p.color;

          // Static stereo split glow
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.x - 1, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(14, 165, 233, ${finalAlpha * 0.25})`;
          ctx.beginPath();
          ctx.arc(p.x + 1, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fill();

          // Bright center core
          ctx.fillStyle = `rgba(255, 255, 255, ${finalAlpha * 0.95})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        if (p.life <= 0 || p.y < -15 || p.x < -15 || p.x > width + 15) {
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
// Main Beyond Evolution Page Component (Post-Apocalyptic Angular Sci-Fi Theme)
// ============================================================================
export default function BeyondEvolutionPage({ game }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;
  const faqs = game.faqs || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans pb-24 select-none">
      {/* Post-Apocalyptic Tactical Navy/Sky-Blue Background */}
      <PostApocalypticCanvas />

      <div className="relative z-10 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ================= HERO SECTION (Angular Sci-Fi Terminal with Continuous Chamfer Border) ================= */}
        <div className="tactical-frame">
          <div className="tactical-frame-inner p-6 sm:p-10 lg:p-12">
            
            {/* Ambient Light Blue Terminal Aura */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Top-Right AI Art Tag */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
              <div 
                className="p-[2px] bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)] animate-pulse"
                style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
              >
                <div 
                  className="px-3.5 py-1.5 bg-[#031526] text-cyan-300 font-scifi text-xs font-black uppercase tracking-widest flex items-center space-x-2 border border-cyan-400/40"
                  style={{ clipPath: 'polygon(0 3px, 3px 0, 100% 0, 100% calc(100% - 3px), calc(100% - 3px) 100%, 0 100%)' }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-cyan-300 fill-cyan-400/30" />
                  <span className="drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">AI Art</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              
              {/* Status Badges with Continuous Chamfer Borders */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="p-[1.5px] bg-gradient-to-r from-sky-400 to-cyan-400"
                  style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
                >
                  <div className="px-3.5 py-1 bg-[#040f1f] text-sky-300 font-scifi text-[10px] font-bold uppercase tracking-wider flex items-center space-x-1.5"
                    style={{ clipPath: 'polygon(0 3.5px, 3.5px 0, 100% 0, 100% calc(100% - 3.5px), calc(100% - 3.5px) 100%, 0 100%)' }}
                  >
                    <Radio className="w-3 h-3 text-sky-400 animate-pulse" />
                    <span>{game.status}</span>
                  </div>
                </div>

                {/* Version Box */}
                <div className="p-[1.5px] bg-gradient-to-r from-sky-500/60 to-blue-500/40"
                  style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
                >
                  <div className="px-3.5 py-1 bg-[#071324] text-slate-200 font-scifi text-[10px] font-semibold"
                    style={{ clipPath: 'polygon(0 3.5px, 3.5px 0, 100% 0, 100% calc(100% - 3.5px), calc(100% - 3.5px) 100%, 0 100%)' }}
                  >
                    {game.releaseStage}
                  </div>
                </div>

                {/* Genre Box (Next to Version) */}
                <div className="p-[1.5px] bg-gradient-to-r from-sky-500/60 to-cyan-500/40"
                  style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
                >
                  <div className="px-3.5 py-1 bg-[#061222] text-sky-300 font-scifi text-[10px] font-semibold"
                    style={{ clipPath: 'polygon(0 3.5px, 3.5px 0, 100% 0, 100% calc(100% - 3.5px), calc(100% - 3.5px) 100%, 0 100%)' }}
                  >
                    {game.genre}
                  </div>
                </div>

                {/* Contrasting Futanari Content Warning Badge */}
                <div className="p-[1.5px] bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.35)]"
                  style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
                >
                  <div className="px-3 py-1 bg-[#1a0f0a] text-amber-300 font-scifi text-[10px] font-bold flex items-center gap-1.5"
                    style={{ clipPath: 'polygon(0 3.5px, 3.5px 0, 100% 0, 100% calc(100% - 3.5px), calc(100% - 3.5px) 100%, 0 100%)' }}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    <span>CONTAINS FUTANARI CONTENT</span>
                  </div>
                </div>
              </div>

              {/* Main Title with Sci-Fi Font & Static Stereo Glow */}
              <h1 className="font-scifi text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight stereo-text-glow">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-sky-300 to-cyan-200">
                  {game.title}
                </span>
              </h1>

              {/* Hero Quote */}
              <p className="font-tech text-base sm:text-xl text-sky-100 font-normal leading-relaxed border-l-4 border-sky-400 pl-4 py-1 stereo-text-subtle">
                "{game.heroQuote}"
              </p>

              {/* Tagline Box with Continuous Chamfered Border */}
              <div className="p-[1.5px] bg-gradient-to-r from-sky-600/50 via-sky-500/30 to-blue-600/40 max-w-2xl"
                style={{ clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
              >
                <div 
                  className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#040e1c]/95 p-4 font-mono"
                  style={{ clipPath: 'polygon(0 7.5px, 7.5px 0, 100% 0, 100% calc(100% - 7.5px), calc(100% - 7.5px) 100%, 0 100%)' }}
                >
                  {game.tagline}
                </div>
              </div>

              {/* Tactical Angular Light Blue Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href={game.itchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactical-btn-frame"
                >
                  <div className="tactical-btn-inner flex items-center space-x-2.5 px-7 py-3.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-300 hover:from-sky-300 hover:to-cyan-200 text-slate-950 font-scifi font-bold text-xs uppercase tracking-wider cursor-pointer">
                    <Gamepad2 className="w-4 h-4 text-slate-950" />
                    <span>Play on itch.io</span>
                  </div>
                </a>

                <a
                  href={game.patreonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tactical-btn-frame"
                  style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.7), rgba(14, 165, 233, 0.4), rgba(56, 189, 248, 0.7))' }}
                >
                  <div className="tactical-btn-inner flex items-center space-x-2 px-6 py-3.5 bg-[#07172b] hover:bg-[#0c2442] text-sky-300 font-scifi font-bold text-xs uppercase tracking-wider">
                    <Heart className="w-4 h-4 text-sky-400 fill-sky-400/20" />
                    <span>Patreon In-Game Rewards</span>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* ================= STORY & SETTING + STATS SIDEBAR ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Story & Setting Angular Panel */}
          <div className="lg:col-span-2 tactical-frame">
            <div className="tactical-frame-inner p-7 sm:p-9 space-y-6">
              <div className="border-b border-sky-900/60 pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-scifi font-bold text-sky-400 uppercase tracking-widest flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span>Story & Setting</span>
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-scifi font-bold text-white mt-1 stereo-text-subtle">
                    About the Game
                  </h2>
                </div>
              </div>

              {/* Contrasting Futanari Content Advisory Banner */}
              <div className="p-[1.5px] bg-gradient-to-r from-amber-500/70 via-rose-500/60 to-amber-500/70 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                style={{ clipPath: 'polygon(0 6px, 6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
              >
                <div 
                  className="p-4 bg-[#140b08] border border-amber-500/40 flex items-center gap-3.5 text-xs font-mono text-amber-200"
                  style={{ clipPath: 'polygon(0 5.5px, 5.5px 0, 100% 0, 100% calc(100% - 5.5px), calc(100% - 5.5px) 100%, 0 100%)' }}
                >
                  <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="font-bold text-amber-300 uppercase tracking-wider">Content Advisory:</span>
                    <span className="ml-1 text-amber-200/90">This game contains futanari content. Note: There is only a partial toggle available for this content in the settings.</span>
                  </div>
                </div>
              </div>

              {/* Story Narrative Box */}
              <div className="p-[1.5px] bg-gradient-to-r from-sky-800/40 via-sky-600/30 to-blue-800/40"
                style={{ clipPath: 'polygon(0 8px, 8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)' }}
              >
                <div 
                  className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line bg-[#040c17]/95 p-6 font-sans"
                  style={{ clipPath: 'polygon(0 7.5px, 7.5px 0, 100% 0, 100% calc(100% - 7.5px), calc(100% - 7.5px) 100%, 0 100%)' }}
                >
                  {game.description}
                </div>
              </div>

              {/* Key Mechanics & Tactical Features */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-2 border-b border-sky-950 pb-2">
                  <Dna className="w-4 h-4 text-sky-400" />
                  <h3 className="text-xs font-scifi font-bold uppercase tracking-wider text-sky-300">
                    Key Features & Mechanics
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {game.features.map((feat, idx) => (
                    <div 
                      key={idx}
                      className="p-[1.5px] bg-gradient-to-r from-sky-600/40 to-sky-900/40 hover:from-sky-400/80 hover:to-cyan-400/60 transition-all"
                      style={{ clipPath: 'polygon(0 6px, 6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
                    >
                      <div
                        className="bg-[#050f1d]/95 p-4 h-full"
                        style={{ clipPath: 'polygon(0 5.5px, 5.5px 0, 100% 0, 100% calc(100% - 5.5px), calc(100% - 5.5px) 100%, 0 100%)' }}
                      >
                        <div className="flex items-center font-scifi font-bold text-xs sm:text-sm text-sky-200 mb-1.5">
                          <Crosshair className="w-3.5 h-3.5 text-sky-400 mr-2 flex-shrink-0" />
                          <span>{feat.title}</span>
                        </div>
                        <p className="text-xs text-slate-400 pl-5.5 leading-relaxed font-sans">
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Terminal Specs & Dev Update */}
          <div className="space-y-6">
            
            {/* Platforms Slate */}
            <div className="tactical-frame">
              <div className="tactical-frame-inner p-6 space-y-4">
                <h3 className="text-xs font-scifi font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-sky-400" />
                  <span>Supported Platforms</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {game.platforms.map((plat, idx) => (
                    <div
                      key={idx}
                      className="p-[1.5px] bg-gradient-to-r from-sky-500/50 to-blue-500/50"
                      style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
                    >
                      <div
                        className="px-3.5 py-1.5 bg-[#040c17] text-xs font-scifi font-semibold text-sky-300"
                        style={{ clipPath: 'polygon(0 3.5px, 3.5px 0, 100% 0, 100% calc(100% - 3.5px), calc(100% - 3.5px) 100%, 0 100%)' }}
                      >
                        {plat}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System Requirements */}
            {game.systemRequirements && (
              <div className="tactical-frame">
                <div className="tactical-frame-inner p-6 space-y-4">
                  <h3 className="text-xs font-scifi font-bold uppercase tracking-wider text-sky-400 mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-sky-400" />
                    <span>System Requirements</span>
                  </h3>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex justify-between border-b border-sky-950 pb-1.5">
                      <span className="text-slate-400">Processor:</span>
                      <span className="text-slate-200">{game.systemRequirements.processor}</span>
                    </div>
                    <div className="flex justify-between border-b border-sky-950 pb-1.5">
                      <span className="text-slate-400">Memory:</span>
                      <span className="text-slate-200">{game.systemRequirements.memory}</span>
                    </div>
                    <div className="flex justify-between border-b border-sky-950 pb-1.5">
                      <span className="text-slate-400">GPU:</span>
                      <span className="text-slate-200 text-right max-w-[65%]">{game.systemRequirements.graphics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Storage:</span>
                      <span className="text-slate-200">{game.systemRequirements.storage}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

        {/* ================= CREDITS SECTION ================= */}
        {game.contributors && game.contributors.length > 0 && (
          <div className="tactical-frame">
            <div className="tactical-frame-inner p-7 sm:p-10 space-y-6">
              <div className="flex items-center space-x-3 border-b border-sky-900/60 pb-4">
                <Users className="w-5 h-5 text-sky-400" />
                <h2 className="text-2xl sm:text-3xl font-scifi font-extrabold text-white stereo-text-subtle">
                  Credits
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {game.contributors.map((c, i) => {
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
                      key={i}
                      {...wrapperProps}
                      className={`block p-[1.5px] transition-all duration-300 ${
                        hasLink
                          ? 'bg-gradient-to-r from-sky-400/60 via-cyan-400/50 to-blue-500/60 hover:from-sky-300 hover:via-cyan-300 hover:to-blue-400 group cursor-pointer shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:-translate-y-0.5'
                          : 'bg-gradient-to-r from-slate-800/80 via-sky-950/40 to-slate-800/80 cursor-default'
                      }`}
                      style={{ clipPath: 'polygon(0 6px, 6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
                    >
                      <div 
                        className={`p-5 h-full flex flex-col justify-between space-y-2 transition-colors ${
                          hasLink
                            ? 'bg-[#061426] group-hover:bg-[#091e38]'
                            : 'bg-[#030913]'
                        }`}
                        style={{ clipPath: 'polygon(0 5px, 5px 0, 100% 0, 100% calc(100% - 5.5px), calc(100% - 5.5px) 100%, 0 100%)' }}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className={`font-scifi font-bold text-base ${hasLink ? 'text-white group-hover:text-cyan-200 transition-colors' : 'text-slate-200'}`}>
                            {c.name}
                          </h3>
                          {hasLink && (
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover:text-cyan-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          )}
                        </div>
                        <p className={`text-xs font-mono ${hasLink ? 'text-sky-300' : 'text-slate-400'}`}>
                          {c.role}
                        </p>
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ================= GUIDES & FAQ ================= */}
        <div className="tactical-frame">
          <div className="tactical-frame-inner p-7 sm:p-10 space-y-6">
            <div className="flex items-center space-x-3 border-b border-sky-900/60 pb-4">
              <HelpCircle className="w-5 h-5 text-sky-400" />
              <h2 className="text-2xl sm:text-3xl font-scifi font-extrabold text-white stereo-text-subtle">
                Guides & FAQ
              </h2>
            </div>

            {faqs.length > 0 ? (
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-[1.5px] bg-gradient-to-r from-sky-800/50 to-blue-800/50"
                    style={{ clipPath: 'polygon(0 6px, 6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
                  >
                    <div
                      className="bg-[#040c17]/95 overflow-hidden"
                      style={{ clipPath: 'polygon(0 5.5px, 5.5px 0, 100% 0, 100% calc(100% - 5.5px), calc(100% - 5.5px) 100%, 0 100%)' }}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between text-sky-200 font-scifi font-bold text-xs sm:text-sm hover:text-sky-100 transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-sky-400 transition-transform duration-200 ${openFaqIndex === idx ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaqIndex === idx && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-sky-950 pt-3 font-sans">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty FAQ State */
              <div 
                className="p-8 sm:p-12 bg-[#040c17]/95 border border-sky-500/30 text-center space-y-4"
                style={{ clipPath: 'polygon(0 10px, 10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
              >
                <div className="w-14 h-14 bg-sky-950/80 border border-sky-400/50 flex items-center justify-center mx-auto text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.25)]"
                  style={{ clipPath: 'polygon(0 4px, 4px 0, 100% 0, 100% calc(100% - 4px), calc(100% - 4px) 100%, 0 100%)' }}
                >
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1 max-w-md mx-auto">
                  <h3 className="font-scifi font-bold text-base sm:text-lg text-white stereo-text-subtle">
                    Frequently Asked Questions Coming Soon
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    We are currently curating tactical guides, combat troubleshooting steps, and FAQs for {game.title}.
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href={socials.discord.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tactical-btn-frame"
                    style={{ background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.8), rgba(14, 165, 233, 0.5), rgba(56, 189, 248, 0.8))' }}
                  >
                    <div className="tactical-btn-inner inline-flex items-center space-x-2 px-5 py-2.5 text-xs font-scifi font-bold bg-[#071c36] hover:bg-[#0b2950] text-sky-300 cursor-pointer">
                      <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                      <span>Ask on Discord</span>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}