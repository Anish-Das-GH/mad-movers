'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import {
  Sparkles,
  ArrowRight,
  Layers,
  Award,
  Zap,
} from 'lucide-react';

interface RevampedHeroProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onOpenTrialModal: (branchId?: string, styleId?: string) => void;
  onScrollTo: (sectionId: string) => void;
}

export function RevampedHero({
  selectedBranchId,
  onOpenTrialModal,
  onScrollTo,
}: RevampedHeroProps) {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-between pt-28 pb-6 overflow-hidden">
      {/* Radiant Classical & Lyrical Purple Ambient Spotlight & Laser Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Central Lyrical Purple Radial Spotlight */}
        <div
          className="absolute -top-36 left-1/2 -translate-x-1/2 w-[850px] h-[600px] rounded-full blur-[140px] opacity-45 transition-all duration-700"
          style={{ backgroundColor: 'rgba(217, 70, 239, 0.45)' }}
        />
        {/* Deep Violet & Fuchsia Peripheral Auroras */}
        <div className="absolute top-1/4 -left-28 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 -right-28 w-96 h-96 bg-purple-600/35 rounded-full blur-[130px]" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-500/20 rounded-full blur-[140px]" />

        {/* Studio Floor Perspective Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(217, 70, 239, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 75% 65% at 50% 35%, black 25%, transparent 75%)',
          }}
        />
      </div>

      {/* Main Content Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Main Typographic Billboard with Classical & Lyrical Purple Neon Glow */}
        <div className="text-center max-w-5xl mx-auto space-y-6 pt-4">
          {/* Eyebrow Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-black tracking-widest uppercase text-fuchsia-400">
            <Sparkles className="w-4 h-4 text-fuchsia-400 animate-pulse" />
            <span>INDIAN CLASSICAL, CONTEMPORARY & URBAN SANCTUARY</span>
            <span className="text-purple-400">·</span>
            <span>EASTERN INDIA&apos;S PREMIER DANCE ACADEMY</span>
          </div>

          {/* Massive Typographic Art with Classical & Lyrical Purple-Fuchsia Gradient */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white font-sans leading-[1.05] drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]">
            UNLEASH YOUR{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-300 to-amber-300 drop-shadow-[0_0_35px_rgba(217,70,239,0.55)]">
              POETIC
            </span>{' '}
            MOVES
          </h1>

          {/* Slogan Banner with Mad Movers Vector Crest */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-purple-950/90 border border-fuchsia-400/50 shadow-[0_0_25px_rgba(217,70,239,0.25)] backdrop-blur-md">
              <MadMoversLogo variant="crest" size="sm" className="w-6 h-6 drop-shadow" />
              <span className="text-xs sm:text-sm font-black tracking-widest text-amber-300 uppercase">
                &ldquo;WORK LIKE A MAD TO MAKE YOURSELF GLAD&rdquo;
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-fuchsia-300/90 px-3 py-1.5 rounded-xl bg-purple-900/60 border border-fuchsia-400/30">
              ESTD 2022
            </span>
          </div>

          {/* Classical & Lyrical Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-purple-200/95 font-medium max-w-3xl mx-auto leading-relaxed">
            Intricate Lucknow &amp; Jaipur gharana tatkar, lightning chakkars, and lyrical floorwork fused with explosive street energy. Join 15,000+ dancers on injury-free sprung wooden floors across Salt Lake, Park Street, New Town, and Ballygunge.
          </p>

          {/* Purple Neon Interactive Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={() => onOpenTrialModal(selectedBranchId)}
              className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-purple-600 to-amber-500 hover:from-fuchsia-500 hover:to-amber-400 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(217,70,239,0.5)] active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:shadow-[0_0_40px_rgba(217,70,239,0.7)] hover:scale-105"
            >
              <span>Book Free Trial Class</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onScrollTo('movement-lab')}
              className="py-3.5 px-6 rounded-2xl bg-purple-950/80 hover:bg-purple-900/90 border border-fuchsia-500/60 hover:border-amber-400 text-white font-bold text-xs sm:text-sm uppercase tracking-wider backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.25)] transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-fuchsia-300" />
              <span>Explore Disciplines</span>
            </button>
          </div>
        </div>

        {/* 3 High-Energy Neon Feature Capsules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1d0628] to-[#12031a] border border-fuchsia-700/50 shadow-[0_0_20px_rgba(217,70,239,0.15)] flex items-center gap-3.5 hover:border-fuchsia-400/80 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 group-hover:scale-110 group-hover:bg-fuchsia-500/20 transition-all shrink-0">
              <Layers className="w-5 h-5 text-fuchsia-400" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white tracking-wide">
                Injury-Free Sprung Floors
              </div>
              <div className="text-[11px] text-purple-300/80 font-medium">
                Imported triple-cushioned wooden flooring engineered for safe joints &amp; heavy landings.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1d0628] to-[#12031a] border border-fuchsia-700/50 shadow-[0_0_20px_rgba(217,70,239,0.15)] flex items-center gap-3.5 hover:border-amber-400/80 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all shrink-0">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white tracking-wide">
                Celebrity Choreographers
              </div>
              <div className="text-[11px] text-purple-300/80 font-medium">
                National championship winners, reality TV artists &amp; certified Kathak gharana masters.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1d0628] to-[#12031a] border border-fuchsia-700/50 shadow-[0_0_20px_rgba(217,70,239,0.15)] flex items-center gap-3.5 hover:border-purple-400/80 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all shrink-0">
              <Zap className="w-5 h-5 text-purple-300" />
            </div>
            <div>
              <div className="text-xs font-black uppercase text-white tracking-wide">
                FIDE Chess &amp; Rhythmic Lab
              </div>
              <div className="text-[11px] text-purple-300/80 font-medium">
                Multi-branch activity centre pairing movement agility with strategic cognitive mastery.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Ticker Tape Moving Continuously from Right to Left */}
      <div className="relative mt-12 py-3.5 bg-[#110319] border-y border-purple-900/80 shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden flex items-center">
        <div className="animate-marquee-left flex items-center gap-8 whitespace-nowrap text-xs font-black uppercase tracking-widest text-amber-300/95">
          <span>⚡ 4 KOLKATA STUDIOS</span>
          <span className="text-purple-500">·</span>
          <span>38+ WEEKLY BATCHES</span>
          <span className="text-purple-500">·</span>
          <span>INJURY-FREE SPRUNG WOODEN FLOORS</span>
          <span className="text-purple-500">·</span>
          <span>FIDE CHESS MASTERS ACADEMY</span>
          <span className="text-purple-500">·</span>
          <span>KATHAK GHARANA TATKAR</span>
          <span className="text-purple-500">·</span>
          <span>WORK LIKE A MAD TO MAKE YOURSELF GLAD</span>
          <span className="text-purple-500">·</span>
          <span>ESTD 2022</span>
          <span className="text-purple-500">·</span>
          <span>⚡ 4 KOLKATA STUDIOS</span>
          <span className="text-purple-500">·</span>
          <span>38+ WEEKLY BATCHES</span>
          <span className="text-purple-500">·</span>
          <span>INJURY-FREE SPRUNG WOODEN FLOORS</span>
          <span className="text-purple-500">·</span>
          <span>FIDE CHESS MASTERS ACADEMY</span>
          <span className="text-purple-500">·</span>
          <span>KATHAK GHARANA TATKAR</span>
          <span className="text-purple-500">·</span>
          <span>WORK LIKE A MAD TO MAKE YOURSELF GLAD</span>
          <span className="text-purple-500">·</span>
          <span>ESTD 2022</span>
        </div>
      </div>
    </section>
  );
}
