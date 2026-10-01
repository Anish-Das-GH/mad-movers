'use client';

import React, { useState } from 'react';
import { DANCE_STYLES, DanceStyle } from '@/data/danceData';
import { ArrowUpRight, Flame, Sparkles } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface StylesSectionProps {
  onSelectStyle: (style: DanceStyle) => void;
  onBookTrial: (styleId: string) => void;
}

export function StylesSection({ onSelectStyle, onBookTrial }: StylesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'street' | 'contemporary' | 'classical' | 'fitness' | 'activity' | 'kids'>('all');

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'street', label: 'Street & Urban' },
    { id: 'contemporary', label: 'Contemporary' },
    { id: 'classical', label: 'Classical & Kathak' },
    { id: 'fitness', label: 'Fitness & Yoga' },
    { id: 'activity', label: 'Activity Hub (Chess & Music)' },
    { id: 'kids', label: 'Kids Special' },
  ] as const;

  const filteredStyles = activeFilter === 'all'
    ? DANCE_STYLES
    : DANCE_STYLES.filter((s) => s.category === activeFilter);

  return (
    <section id="styles" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Curriculum</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          Master a Universe of <span className="text-amber-400">Movement Styles</span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 font-medium leading-relaxed">
          From street cyphers and classical gharanas to yogic flow, chess calculation, and rhythm percussion.
          Designed by certified masters to build lifelong artistry.
        </p>

        {/* Interactive Segmented Filter Control (Allowed functional buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-purple-950/40 border border-purple-900/60 max-w-2xl mx-auto mt-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-amber-400 text-purple-950 shadow-md font-bold'
                  : 'text-purple-300 hover:text-white hover:bg-purple-900/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Styles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStyles.map((style) => (
          <div
            key={style.id}
            onClick={() => onSelectStyle(style)}
            className="group relative rounded-3xl bg-[#13051d] border border-purple-900/60 hover:border-amber-400/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 cursor-pointer"
          >
            {/* Visual Header with stylized dynamic gradient backdrop */}
            <div className={`h-44 relative p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${style.gradient}`}>
              {/* Subtle background crest / icon pattern */}
              <div className="absolute right-2 -bottom-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none">
                <MadMoversLogo variant="crest" size="lg" className="w-32 h-32" />
              </div>

              {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
              <div className="relative z-10 flex items-center justify-between text-xs">
                <span className="text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                  {style.category}
                </span>
                <span className="flex items-center gap-1 text-purple-200/80 font-medium text-[11px]">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  {style.intensity}
                </span>
              </div>

              {/* Card Title inside banner */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {style.name}
                </h3>
                <p className="text-xs text-purple-200/90 font-medium line-clamp-1 mt-0.5">
                  {style.tagline}
                </p>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs text-purple-200/75 leading-relaxed line-clamp-2">
                {style.description}
              </p>

              {/* Curriculum Sneak Peek */}
              <div className="space-y-1.5 pt-2 border-t border-purple-950">
                <div className="text-[10px] uppercase font-bold tracking-wider text-purple-400">
                  Focus Areas
                </div>
                <div className="text-xs text-purple-200/90 space-y-0.5">
                  {style.curriculum.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 truncate">
                      <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-purple-900/50 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStyle(style);
                  }}
                  className="text-xs font-semibold text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Explore Syllabus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onBookTrial(style.id);
                  }}
                  className="py-1.5 px-3 rounded-lg bg-amber-400/15 hover:bg-amber-400 hover:text-purple-950 text-amber-300 text-xs font-bold border border-amber-400/30 transition-all cursor-pointer"
                >
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
