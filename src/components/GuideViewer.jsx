import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Clock, Tag, Eye, EyeOff, CheckCircle2, AlertCircle, ArrowLeft, Share2, Sparkles, Filter } from 'lucide-react';
import { guides, guideCategories } from '../data/guides';

export default function GuideViewer({ selectedGuideId, onSelectGuide, initialCategory = 'all' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [revealedSpoilers, setRevealedSpoilers] = useState({});

  // Filter guides based on search term and active category
  const filteredGuides = useMemo(() => {
    return guides.filter((g) => {
      const matchesCategory = selectedCategory === 'all' || g.category === selectedCategory || g.gameId === selectedCategory;
      const matchesSearch = 
        g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        g.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const activeGuide = useMemo(() => {
    if (!selectedGuideId) return null;
    return guides.find((g) => g.id === selectedGuideId) || null;
  }, [selectedGuideId]);

  const toggleSpoiler = (index) => {
    setRevealedSpoilers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // If a guide is actively selected for reading:
  if (activeGuide) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
        {/* Navigation back */}
        <button
          onClick={() => onSelectGuide(null)}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-pink-400 hover:text-pink-300 mb-6 bg-pink-500/10 hover:bg-pink-500/20 px-3.5 py-1.5 rounded-lg border border-pink-500/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Guides</span>
        </button>

        {/* Guide Article Container */}
        <article className="glass-panel p-6 sm:p-10 rounded-2xl border border-slate-800 bg-[#0c0e17]">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                {activeGuide.category.replace('-', ' ')}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">
                Difficulty: {activeGuide.difficulty}
              </span>
              <span className="flex items-center text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {activeGuide.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              {activeGuide.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              {activeGuide.summary}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 mt-6 text-xs text-slate-400 pt-4 border-t border-slate-800/60">
              <div>Author: <span className="text-slate-200 font-medium">{activeGuide.author}</span> • Updated: <span className="text-slate-200">{activeGuide.lastUpdated}</span></div>
              <div className="flex flex-wrap gap-1.5">
                {activeGuide.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-900 text-slate-400 px-2 py-0.5 rounded text-[11px] border border-slate-800">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Guide Content Blocks */}
          <div className="space-y-8 text-slate-200">
            {activeGuide.content.map((block, idx) => {
              if (block.type === 'section') {
                return (
                  <div key={idx} className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide text-rose-300">
                      {block.heading}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                );
              }

              if (block.type === 'tips') {
                return (
                  <div key={idx} className="bg-rose-950/20 border border-rose-800/40 rounded-xl p-5 sm:p-6 my-4 shadow-sm">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-rose-300 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-rose-400" />
                      {block.title || "Essential Tips"}
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <CheckCircle2 className="w-4 h-4 text-rose-400 mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              if (block.type === 'steps') {
                return (
                  <div key={idx} className="bg-purple-950/20 border border-purple-800/40 rounded-xl p-5 sm:p-6 my-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-purple-300 mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-purple-400" />
                      {block.title || "Step-by-Step Instructions"}
                    </h4>
                    <ol className="space-y-3 text-xs sm:text-sm text-slate-200">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <span className="w-5 h-5 rounded-full bg-purple-600/30 text-purple-300 font-mono text-xs font-bold flex items-center justify-center mr-3 flex-shrink-0 border border-purple-500/40">
                            {itemIdx + 1}
                          </span>
                          <span className="pt-0.5">{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              }

              if (block.type === 'table') {
                return (
                  <div key={idx} className="my-6">
                    {block.title && (
                      <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
                        {block.title}
                      </h4>
                    )}
                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50">
                      <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                        <thead className="bg-slate-800/80 text-xs font-bold uppercase text-slate-200 tracking-wider border-b border-slate-700">
                          <tr>
                            {block.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-4 py-3 font-semibold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/80 font-normal">
                          {block.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? 'font-semibold text-white' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              }

              if (block.type === 'spoiler') {
                const isRevealed = revealedSpoilers[idx];
                return (
                  <div key={idx} className="my-5 rounded-xl border border-amber-500/30 bg-amber-950/20 overflow-hidden">
                    <button
                      onClick={() => toggleSpoiler(idx)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-amber-900/30 hover:bg-amber-900/40 text-amber-300 text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-400" />
                        <span>{block.summary || "Spoiler Alert: Click to toggle secret content"}</span>
                      </span>
                      <span className="flex items-center gap-1 text-xs text-amber-400 font-normal bg-amber-500/20 px-2 py-0.5 rounded">
                        {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        {isRevealed ? "Hide Spoiler" : "Reveal"}
                      </span>
                    </button>
                    {isRevealed && (
                      <div className="p-4 text-xs sm:text-sm text-slate-200 border-t border-amber-500/20 bg-black/40 leading-relaxed">
                        {block.content}
                      </div>
                    )}
                  </div>
                );
              }

              return null;
            })}
          </div>

          {/* Guide Bottom CTA */}
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => onSelectGuide(null)}
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              ← Back to Directory
            </button>
            <div className="text-xs text-slate-400">
              Have a guide correction or tip? Share it on the <a href="https://discord.gg/faustto" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:underline">Discord</a>!
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Otherwise, render Directory / Search / List View
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
          <BookOpen className="w-3.5 h-3.5 text-purple-400" />
          <span>Faustto Knowledge Base & Walkthroughs</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
          Game Guides & Wiki
        </h2>
        <p className="mt-3 text-slate-300 text-base">
          Detailed walkthroughs, character growth systems, gacha tier builds, and secret locations for all of Faustto's games.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800 mb-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search quests, stats, items, bosses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {guideCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      {filteredGuides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => onSelectGuide(guide.id)}
              className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 bg-[#0f111c]/90 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    {guide.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {guide.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white group-hover:text-pink-400 transition-colors leading-snug mb-2">
                  {guide.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {guide.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="text-[10px] bg-slate-800/80 text-slate-400 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-pink-400 group-hover:text-pink-300">
                  <span>Read Full Guide</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-panel rounded-2xl max-w-xl mx-auto border border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h4 className="text-lg font-bold text-white">No guides found</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            Try adjusting your search query or switching to another category.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 hover:bg-slate-700"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}
