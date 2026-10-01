'use client';

import React from 'react';
import { BRANCHES } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import { ArrowRight, Calendar, Sparkles, MapPin } from 'lucide-react';

interface HeroSectionProps {
  activeBranchId: string;
  onOpenTrialModal: () => void;
  onScrollTo: (id: string) => void;
}

export function HeroSection({ activeBranchId, onOpenTrialModal, onScrollTo }: HeroSectionProps) {
  const activeBranch = BRANCHES.find((b) => b.id === activeBranchId) || BRANCHES[0];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Stage Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Plum & Saffron Radial Spotlights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-800/35 via-fuchsia-900/20 to-amber-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-900/25 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-10 w-80 h-80 bg-amber-500/15 rounded-full blur-[90px]" />

        {/* Studio Floor Perspective Hairline Grid */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(168, 85, 247, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, black 30%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Pill Alternative: Clean unboxed editorial kicker */}
        <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold tracking-widest uppercase text-amber-400">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>MULTI-BRANCH DANCE & ACTIVITY CENTRE</span>
          <span className="text-purple-400">·</span>
          <span>ESTD 2022</span>
        </div>

        {/* Central Logo Crest Emblem Showcase */}
        <div className="mb-6 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 via-amber-500/30 to-purple-600/40 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative p-3 rounded-3xl bg-[#14051c] border border-amber-400/40 shadow-2xl backdrop-blur-xl">
              <MadMoversLogo variant="crest" size="lg" className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28" />
            </div>
          </div>
        </div>

        {/* Main Brand Headline with Anti-Orphan Balance */}
        <div className="max-w-4xl mx-auto space-y-3 mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase font-sans">
            WORK LIKE A <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">MAD.</span>
            <br />
            MAKE YOURSELF <span className="underline decoration-amber-400/80 decoration-wavy decoration-2">GLAD.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-purple-200/85 font-medium max-w-2xl mx-auto leading-relaxed" style={{ textWrap: 'balance' }}>
            Eastern India’s high-energy sanctuary for dance, yoga, chess & creative movement.
            Train with elite choreographers across 4 state-of-the-art studios.
          </p>
        </div>

        {/* Active Branch Callout */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-800 text-xs text-purple-200 mb-8 backdrop-blur-sm">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Active Studio:</span>
          <strong className="text-amber-300">{activeBranch.name}</strong>
          <span className="text-purple-400">({activeBranch.area})</span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-14">
          <button
            onClick={onOpenTrialModal}
            className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-purple-950 font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Claim Free Trial Class</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onScrollTo('schedule')}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-purple-700/80 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-sm transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-amber-400" />
            <span>Weekly Schedule</span>
          </button>
        </div>

        {/* Quantitative Proof Metrics Strip (Adjacent to Value Claim) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-purple-900/60 text-left">
          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-900/40 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">4</div>
            <div className="text-xs font-semibold text-white">Studios in Kolkata</div>
            <div className="text-[11px] text-purple-300/70">Salt Lake, Park St, New Town, South</div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-900/40 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">38+</div>
            <div className="text-xs font-semibold text-white">Weekly Batches</div>
            <div className="text-[11px] text-purple-300/70">Street, Classical, Fitness & Chess</div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-900/40 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">15,000+</div>
            <div className="text-xs font-semibold text-white">Dancers & Movers</div>
            <div className="text-[11px] text-purple-300/70">Trained since 2022</div>
          </div>

          <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-900/40 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">Ages 4–70</div>
            <div className="text-xs font-semibold text-white">Inclusive Movement</div>
            <div className="text-[11px] text-purple-300/70">Kids, Teens, Adults & Seniors</div>
          </div>
        </div>
      </div>
    </section>
  );
}
