import React, { useState, useEffect, useRef } from 'react';
import { 
  FlaskConical, Dna, Activity, Cpu, HelpCircle, 
  MessageSquare, ChevronDown, Radio, Play, Heart, 
  Pipette, ShieldAlert, Zap, Layers, RefreshCw, Gauge, Sliders, Users
} from 'lucide-react';
import { socials } from '../../data/socials';

// ============================================================================
// Interactive Incubation Chamber Fluid & Bubbles Background Canvas
// ============================================================================
function IncubationChamberCanvas() {
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
      speed: 0,
      lastX: 0,
      lastY: 0
    };

    const mouseBubbles = [];

    const handlePointerMove = (e) => {
      const dx = e.clientX - mouse.lastX;
      const dy = e.clientY - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy);
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;

      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;

      // Spawn effervescent micro-bubbles along cursor path
      if (mouseBubbles.length < 50 && (mouse.speed > 2 || Math.random() > 0.4)) {
        mouseBubbles.push({
          x: e.clientX + (Math.random() - 0.5) * 16,
          y: e.clientY + (Math.random() - 0.5) * 16,
          radius: 1.5 + Math.random() * 3,
          speedY: -(1.2 + Math.random() * 1.8),
          speedX: (Math.random() - 0.5) * 0.8,
          wobbleSpeed: 0.05 + Math.random() * 0.05,
          wobbleOffset: Math.random() * Math.PI * 2,
          life: 60 + Math.random() * 50,
          maxLife: 110,
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

    // Natural Suspension Chamber Bubbles
    const BUBBLE_COUNT = 45;
    const createBubble = (randomAge = false) => {
      const radius = 2.5 + Math.random() * 7;
      return {
        x: Math.random() * width,
        y: randomAge ? Math.random() * height : height + 20,
        radius,
        speedY: -(0.5 + (10 - radius) * 0.15 + Math.random() * 0.4),
        wobbleSpeed: 0.02 + Math.random() * 0.03,
        wobbleAmp: 0.8 + Math.random() * 1.5,
        wobbleOffset: Math.random() * Math.PI * 2,
        opacity: 0.25 + Math.random() * 0.45,
      };
    };

    const chamberBubbles = Array.from({ length: BUBBLE_COUNT }, () => createBubble(true));

    let time = 0;

    const render = () => {
      time++;
      // Easing mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.2;
      mouse.y += (mouse.targetY - mouse.y) * 0.2;

      // 1. Murky Translucent Incubation Fluid Gradient
      const fluidGrad = ctx.createLinearGradient(0, 0, 0, height);
      fluidGrad.addColorStop(0, '#010c08');
      fluidGrad.addColorStop(0.3, '#031710');
      fluidGrad.addColorStop(0.7, '#02130e');
      fluidGrad.addColorStop(1, '#010805');
      ctx.fillStyle = fluidGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Liquid Caustic Ripple Waves (Faint floating light patterns)
      ctx.save();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.035)';
      ctx.lineWidth = 2;
      for (let w = 0; w < 4; w++) {
        ctx.beginPath();
        const waveBaseY = (height * (w + 1)) / 5;
        for (let x = 0; x <= width; x += 15) {
          const y = waveBaseY + Math.sin(x * 0.008 + time * 0.015 + w) * 18 + Math.cos(x * 0.012 - time * 0.01) * 12;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // 3. Cylinder Glass Curvature Reflection Edges (Left & Right)
      const glassLeft = ctx.createLinearGradient(0, 0, 80, 0);
      glassLeft.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
      glassLeft.addColorStop(0.4, 'rgba(16, 185, 129, 0.03)');
      glassLeft.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glassLeft;
      ctx.fillRect(0, 0, 80, height);

      const glassRight = ctx.createLinearGradient(width, 0, width - 80, 0);
      glassRight.addColorStop(0, 'rgba(16, 185, 129, 0.12)');
      glassRight.addColorStop(0.4, 'rgba(16, 185, 129, 0.03)');
      glassRight.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glassRight;
      ctx.fillRect(width - 80, 0, 80, height);

      // 4. Render Natural Rising Chamber Bubbles
      for (let i = 0; i < chamberBubbles.length; i++) {
        const b = chamberBubbles[i];
        b.y += b.speedY;
        const currentX = b.x + Math.sin(time * b.wobbleSpeed + b.wobbleOffset) * b.wobbleAmp;

        // Interaction with mouse: push away slightly if near cursor
        if (mouse.active) {
          const mdx = currentX - mouse.x;
          const mdy = b.y - mouse.y;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (dist < 90 && dist > 0) {
            const push = (90 - dist) / 90;
            b.x += (mdx / dist) * push * 2;
          }
        }

        // Outer bubble ring
        ctx.strokeStyle = `rgba(52, 211, 153, ${b.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner glowing liquid volume
        ctx.fillStyle = `rgba(16, 185, 129, ${b.opacity * 0.2})`;
        ctx.beginPath();
        ctx.arc(currentX, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();

        // Highlight glint (upper left)
        ctx.fillStyle = `rgba(255, 255, 255, ${b.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(currentX - b.radius * 0.35, b.y - b.radius * 0.35, Math.max(0.8, b.radius * 0.25), 0, Math.PI * 2);
        ctx.fill();

        if (b.y < -20) {
          chamberBubbles[i] = createBubble(false);
        }
      }

      // 5. Render Trailing Interactive Mouse Bubbles
      for (let i = mouseBubbles.length - 1; i >= 0; i--) {
        const mb = mouseBubbles[i];
        mb.life -= 1;
        mb.y += mb.speedY;
        mb.x += mb.speedX + Math.sin(time * mb.wobbleSpeed + mb.wobbleOffset) * 0.6;

        const alpha = (mb.life / mb.maxLife);
        if (alpha > 0) {
          ctx.strokeStyle = `rgba(110, 231, 183, ${alpha * 0.7})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(mb.x, mb.y, mb.radius, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.beginPath();
          ctx.arc(mb.x - mb.radius * 0.3, mb.y - mb.radius * 0.3, mb.radius * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }

        if (mb.life <= 0 || mb.y < -10) {
          mouseBubbles.splice(i, 1);
        }
      }

      // 6. Interactive Bio-Injector / Fluid Pressure Transducer Reticle
      if (mouse.active) {
        // Fluid ripple ring
        const rippleRad = (time * 1.5) % 45;
        const ripAlpha = (1 - rippleRad / 45) * 0.35;
        ctx.strokeStyle = `rgba(52, 211, 153, ${ripAlpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, rippleRad, 0, Math.PI * 2);
        ctx.stroke();

        // Bio-transducer targeting reticle
        ctx.strokeStyle = 'rgba(16, 185, 129, 0.75)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 14, 0, Math.PI * 2);
        ctx.stroke();

        // 4 cross tick marks
        ctx.fillStyle = 'rgba(52, 211, 153, 0.9)';
        ctx.fillRect(mouse.x - 7, mouse.y, 15, 1);
        ctx.fillRect(mouse.x, mouse.y - 7, 1, 15);

        // Fluid pressure telemetry readout
        ctx.fillStyle = 'rgba(110, 231, 183, 0.7)';
        ctx.font = '8px monospace';
        ctx.fillText(`[PSI: 34.2 kPa]`, mouse.x + 18, mouse.y - 6);
        ctx.fillStyle = 'rgba(52, 211, 153, 0.5)';
        ctx.fillText(`[SERUM_FLOW: ACTIVE]`, mouse.x + 18, mouse.y + 6);
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
// Main Perfect Specimen Page Component (Industrial Bio-Factory High-Contrast)
// ============================================================================
export default function PerfectSpecimenPage({ game }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  if (!game) return null;
  const faqs = game.faqs || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-slate-100 font-sans pb-24 select-none">
      {/* Incubation Chamber Liquid & Rising Bubbles Background Canvas */}
      <IncubationChamberCanvas />

      <div className="relative z-10 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* ================= HERO SECTION (Heavy Industrial Steel Refinement Unit) ================= */}
        <section className="relative bg-gradient-to-br from-[#121c24] via-[#0f1720] to-[#0a1118] border-2 border-emerald-400/90 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.25)] p-6 sm:p-10 lg:p-12 overflow-hidden">
          
          {/* Top Industrial Serum Pipe Conduit Header Bar */}
          <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-r from-slate-800 via-emerald-600 to-slate-800 border-b border-emerald-300/40 flex items-center justify-between px-6">
            <div className="h-1 w-24 bg-emerald-300 rounded-full animate-pulse" />
            <div className="h-1 w-24 bg-emerald-300 rounded-full animate-pulse" />
          </div>

          {/* Left Fluid Feed Tube Bar */}
          <div className="absolute left-0 top-3 bottom-0 w-2.5 bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 border-r border-slate-900 opacity-90" />

          {/* Industrial Corner Steel Fasteners / Bolt Rivets */}
          <div className="absolute top-4 left-4 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-[inset_0_0_4px_#34d399]" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-[inset_0_0_4px_#34d399]" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-[inset_0_0_4px_#34d399]" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-emerald-400 shadow-[inset_0_0_4px_#34d399]" />

          {/* Glowing Serum Chamber Aura */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6 pl-2">
            
            {/* Status Badges in Purple Classified & Strikethrough Demo Frame */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1 text-xs font-mono font-black uppercase tracking-wider bg-[#1e0a2d] text-purple-300 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.45)]">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
                <span>{game.status}</span>
              </span>

              <span className="text-xs font-mono font-bold text-slate-300 bg-[#162533] px-3.5 py-1 border border-slate-600 line-through">
                {game.releaseStage}
              </span>

              <span className="text-xs text-emerald-400 font-mono uppercase tracking-wider font-bold bg-[#0c1822] px-3 py-1 border border-emerald-900">
                {game.genre}
              </span>
            </div>

            {/* Main Title: PERFECT SPECIMEN */}
            <div>
              <div className="text-[11px] font-mono font-bold text-emerald-400 tracking-widest uppercase mb-1.5 flex items-center gap-2">
                <Pipette className="w-4 h-4 text-emerald-400" />
                <span>INCUBATION PROTOCOL // HIGH-PRIORITY PROJECT</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-scifi tracking-tight leading-tight text-white drop-shadow-[0_0_30px_rgba(52,211,153,0.5)]">
                {game.title}
              </h1>
            </div>

            {/* Mysterious Hero Quote with Encrypted Cipher Elements */}
            <div className="bg-[#09121a] p-4 sm:p-5 border-l-4 border-emerald-400 border-y border-r border-slate-700 shadow-inner">
              <p className="font-mono text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed">
                "{game.heroQuote}"
              </p>
            </div>

            {/* Tagline Box with High Contrast Steel Inset */}
            <div className="bg-[#070f16] p-4 sm:p-5 border border-slate-700 text-emerald-300 font-mono text-xs sm:text-sm leading-relaxed">
              {game.tagline}
            </div>

            {/* Factory Bio-Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div
                className="inline-flex items-center space-x-2.5 px-8 py-4 bg-[#141e28] text-slate-500 font-mono font-bold text-xs uppercase tracking-wider border-2 border-slate-700/80 cursor-not-allowed select-none opacity-60 shadow-none"
              >
                <FlaskConical className="w-4 h-4 text-slate-500" />
                <span>ACCESS RESTRICTED</span>
              </div>

              <a
                href={game.patreonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-7 py-4 bg-[#142330] hover:bg-[#1a2f42] text-emerald-300 border-2 border-emerald-400/80 font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                <span>INFO ON PATREON</span>
              </a>
            </div>

          </div>
        </section>

        {/* ================= STORY & SETTING + STATS SIDEBAR ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Main Story & Setting Column */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-[#121c24] via-[#0f1720] to-[#0a1118] border-2 border-slate-700/90 p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Embedded Left Pipe Tube Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-emerald-500 via-teal-400 to-emerald-600 opacity-80" />

            <div className="flex items-center justify-between border-b-2 border-slate-700 pb-4 pl-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">
                  PROJECT ARCHIVE
                </h2>
              </div>
            </div>

            {/* Description Text */}
            <div className="bg-[#081018] p-5 sm:p-6 border border-slate-700/80 text-slate-200 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-line ml-2">
              {game.description}
            </div>

            {/* System Modules */}
            <div className="space-y-4 pt-2 ml-2">
              <div className="flex items-center space-x-2 border-b border-slate-700 pb-2">
                <Dna className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-xs sm:text-sm text-emerald-300 uppercase font-bold tracking-wider">
                  SYSTEM MODULES
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0a141d] p-4 border-2 border-slate-700/90 hover:border-emerald-400 transition-colors shadow-lg"
                  >
                    <div className="flex items-center font-mono font-bold text-xs sm:text-sm text-emerald-300 mb-2">
                      <span className="text-emerald-400 mr-2">⌁</span>
                      <span>{feat.title}</span>
                    </div>
                    <p className="font-mono text-xs text-slate-400 leading-relaxed pl-3.5">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Factory Specs */}
          <div className="space-y-6">
            
            {/* Platforms Slate */}
            <div className="relative bg-gradient-to-br from-[#121c24] via-[#0f1720] to-[#0a1118] border-2 border-slate-700/90 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 opacity-80" />
              <div className="flex items-center space-x-2 border-b border-slate-700 pb-2 pl-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  TARGET PLATFORMS
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-2">
                {game.platforms.map((plat, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-[#09121a] font-mono text-xs font-semibold text-emerald-300 border border-slate-700"
                  >
                    {plat}
                  </span>
                ))}
              </div>
            </div>

            {/* System Requirements Spec */}
            <div className="relative bg-gradient-to-br from-[#121c24] via-[#0f1720] to-[#0a1118] border-2 border-slate-700/90 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 opacity-80" />
              <div className="flex items-center space-x-2 border-b border-slate-700 pb-2 pl-2">
                <Pipette className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-wider">
                  SIMULATION HARDWARE
                </h3>
              </div>
              {game.systemRequirements && (
                <div className="space-y-2 font-mono text-xs pl-2">
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">CPU:</span>
                    <span className="text-slate-200">{game.systemRequirements.processor}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">RAM:</span>
                    <span className="text-slate-200">{game.systemRequirements.memory}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-1.5">
                    <span className="text-slate-400">GPU:</span>
                    <span className="text-slate-200 text-right max-w-[65%]">{game.systemRequirements.graphics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">STORAGE:</span>
                    <span className="text-slate-200">{game.systemRequirements.storage}</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ================= CREDITS SECTION ================= */}
        {game.contributors && game.contributors.length > 0 && (
          <div className="relative bg-gradient-to-br from-[#121c24] via-[#0f1720] to-[#0a1118] border-2 border-slate-700/90 p-7 sm:p-10 space-y-6 shadow-2xl overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-emerald-500 opacity-80" />
            
            <div className="flex items-center space-x-3 border-b border-slate-700 pb-4 pl-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <h2 className="font-mono text-xl sm:text-2xl font-black text-white tracking-wider">
                PROJECT CREDITS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-2">
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
                    className={`p-5 space-y-2 transition-all duration-200 block border ${
                      hasLink
                        ? 'bg-[#081f18] border-emerald-500/80 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:border-emerald-300 hover:bg-[#0c2b22] group cursor-pointer hover:-translate-y-0.5'
                        : c.isClassified
                          ? 'bg-[#0e0714]/80 border-purple-900/60 cursor-default'
                          : 'bg-[#060e14] border-slate-800 cursor-default'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`font-mono text-sm font-bold ${
                        hasLink
                          ? 'text-emerald-200 group-hover:text-emerald-100 transition-colors'
                          : c.isClassified
                            ? 'text-purple-300 tracking-widest'
                            : 'text-slate-300'
                      }`}>
                        {c.isClassified ? '§ [CLASSIFIED]' : c.name}
                      </h3>
                      {hasLink && (
                        <span className="text-emerald-400 group-hover:text-emerald-200 font-mono text-xs transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                          ↗
                        </span>
                      )}
                    </div>
                    <p className={`font-mono text-xs ${
                      hasLink
                        ? 'text-emerald-400'
                        : c.isClassified
                          ? 'text-purple-400/70'
                          : 'text-slate-500'
                    }`}>
                      {c.isClassified ? '░░░ [RESTRICTED ROLE] ░░░' : c.role}
                    </p>
                  </CardWrapper>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}