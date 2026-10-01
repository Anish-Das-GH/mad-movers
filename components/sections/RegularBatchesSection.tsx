'use client';

import React, { useState } from 'react';
import { REGULAR_BATCHES, RegularBatch } from '@/data/danceData';
import { User, Calendar, Clock, MapPin, Sparkles, Check, IndianRupee } from 'lucide-react';

interface RegularBatchesSectionProps {
  onEnrollBatch: (batch: RegularBatch) => void;
  onEnquireBatch: (batch: RegularBatch) => void;
}

export function RegularBatchesSection({ onEnrollBatch, onEnquireBatch }: RegularBatchesSectionProps) {
  const [filterStyle, setFilterStyle] = useState('All');

  const filterTags = [
    'All',
    'Hip-Hop',
    'Bolly-Hop',
    'Contemporary',
    'Kathak',
    'Zumba Fitness',
    'Kids Movement',
    'Chess & Mind Strategy',
  ];

  const filteredBatches = filterStyle === 'All'
    ? REGULAR_BATCHES
    : REGULAR_BATCHES.filter((b) => b.styleName.toLowerCase().includes(filterStyle.toLowerCase()) || b.category.toLowerCase().includes(filterStyle.toLowerCase()));

  return (
    <section id="batches" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Long-Term Progression</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          Choreographed for <span className="text-amber-400">Your Journey</span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 font-medium">
          38+ regular batches across 4 Kolkata studios. Progressive syllabus from absolute beginner basics to advanced stage routines and cypher dominance.
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilterStyle(tag)}
              className={`px-3 py-1.5 text-xs rounded-xl font-semibold transition-all cursor-pointer ${
                filterStyle === tag
                  ? 'bg-amber-400 text-purple-950 font-bold shadow-md'
                  : 'bg-purple-950/50 text-purple-300 hover:text-white border border-purple-900/60'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Batches Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredBatches.map((batch) => (
          <div
            key={batch.id}
            className="group relative rounded-3xl bg-[#14051e] border border-purple-900/70 hover:border-amber-400/70 p-6 flex flex-col justify-between transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            {/* Top Info */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                    {batch.category}
                  </span>
                  <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                    {batch.title}
                  </h3>
                </div>

                {batch.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-900/80 text-amber-300 border border-purple-700 shrink-0">
                    {batch.badge}
                  </span>
                )}
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-purple-950/50 border border-purple-900/50">
                <div className="w-8 h-8 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">{batch.instructor}</div>
                  <div className="text-[10px] text-purple-300/70 truncate">{batch.instructorRole}</div>
                </div>
              </div>

              {/* Schedule and Venue Details */}
              <div className="space-y-2 text-xs text-purple-200/85">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{batch.days}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>{batch.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{batch.branchName}</span>
                </div>
              </div>

              {/* Unboxed Metadata (Zero-Pill Discipline) */}
              <div className="flex items-center gap-2 text-[11px] text-purple-300/70 pt-1 border-t border-purple-950">
                <span>{batch.level}</span>
                <span aria-hidden="true">·</span>
                <span>{batch.frequency}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400">{batch.enrolledRatio}</span>
              </div>
            </div>

            {/* Pricing & CTAs */}
            <div className="pt-5 mt-4 border-t border-purple-900/60 space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] uppercase font-bold text-purple-400">Monthly Fee</span>
                <div className="text-lg font-black text-amber-400 font-mono flex items-center">
                  <IndianRupee className="w-3.5 h-3.5 inline" /> {batch.feeMonthly.toLocaleString()}
                  <span className="text-[10px] text-purple-300 font-normal ml-1">/ mo</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => onEnquireBatch(batch)}
                  className="py-2 px-3 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  Enquire
                </button>
                <button
                  type="button"
                  onClick={() => onEnrollBatch(batch)}
                  className="py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 text-xs font-black uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  Book Trial
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
