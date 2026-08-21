import React from 'react';

export default function AboutMe() {
  return (
    <section id="about-me-section" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative ambient background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 reveal-on-scroll">
        <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
          About Me
        </h2>
      </div>

      {/* Main Expanded Bio Card */}
      <div className="max-w-4xl mx-auto w-full reveal-on-scroll">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-pink-900/30 bg-[#0c0e1a]/85 shadow-2xl relative overflow-hidden space-y-6">
          {/* Subtle Corner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-purple-500/5 to-transparent rounded-full pointer-events-none" />

          <div className="border-b border-slate-800/80 pb-5">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">Faustto</h3>
            <p className="text-xs font-semibold text-pink-400 uppercase tracking-widest mt-0.5">
              Independent Game Developer
            </p>
          </div>

          <div className="text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 pt-1">
            <p>
              Hello and welcome to the <strong className="text-pink-300 font-bold">FMG Cavern</strong>! I am <strong className="text-white font-bold">Faustto</strong>, an independent game developer passionate about creating Female Muscle Growth (FMG) games of all kinds.
            </p>
            <p>
              I love experimenting with new ideas and diverse mechanics within the genre—from tactical turn-based combat and open-world exploration to deep simulation management. My aim is to craft rich, engaging experiences where tangible physical growth and story go hand in hand. I hope you find each of my projects unique, fun, and memorable!
            </p>
            <p>
              I am always looking to hone my skills, explore fresh concepts, and continually better my games with every release. Thank you for visiting the Cavern and being a part of this journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
