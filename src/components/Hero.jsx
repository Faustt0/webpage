import React, { useState, useRef } from 'react';

export default function Hero({ onExploreAbout }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const glowX = mousePos.x * 40;
  const glowY = mousePos.y * 35;
  const gradientAngle = 90 + mousePos.x * 20;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center border-b border-pink-950/20 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Soft Ambient Cavern Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[550px] h-[300px] sm:w-[750px] sm:h-[420px] bg-gradient-to-r from-pink-600/12 via-rose-600/10 to-purple-600/12 blur-[120px] rounded-full pointer-events-none -z-10 animate-cavern-glow cavern-interactive-glow"
        style={{
          transform: `translate(calc(-50% + ${glowX}px), calc(-50% + ${glowY}px))`,
          opacity: isHovered ? 0.55 : 0.35,
        }}
      />

      {/* Ambient Side Lights */}
      <div className="absolute top-16 left-12 w-[240px] h-[240px] bg-rose-600/8 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-16 right-12 w-[260px] h-[260px] bg-purple-600/8 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center space-y-10 my-auto z-10">
        {/* Interactive Title with Smooth Hover */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cavern-title-interactive cursor-pointer group py-4 px-6 inline-block"
        >
          {/* Top Subhead */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-semibold text-slate-400 tracking-tight transition-colors duration-300 group-hover:text-slate-200">
            Welcome to the
          </h2>

          {/* Main Glowing Title */}
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-display font-black tracking-tight text-white mt-2 leading-[1.05]">
            <span
              className="text-transparent bg-clip-text gradient-title-animated cavern-text-glow inline-block transition-all duration-300"
              style={{
                backgroundImage: `linear-gradient(${gradientAngle}deg, #fb7185, #f472b6, #c084fc, #fb7185)`,
              }}
            >
              FMG Cavern
            </span>
          </h1>
        </div>
      </div>

      {/* Bottom Scroll Hint Indicator */}
      <div 
        onClick={onExploreAbout}
        className="pb-6 pt-4 text-xs font-medium text-slate-500 hover:text-pink-400 cursor-pointer transition-colors flex flex-col items-center gap-1 opacity-70 hover:opacity-100 animate-bounce z-10"
      >
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
}
