'use client';

import React, { useRef, useState } from 'react';
import { Sparkles, Volume2, VolumeX, ArrowRight, Play, Radio, Flame, Award, Heart, Zap } from 'lucide-react';

interface VideoCardData {
  id: string;
  videoUrl: string;
  title: string;
  subtitle: string;
  styleId: string;
  branchId: string;
  studioName: string;
  tag: string;
  badge: string;
  accentColor: {
    border: string;
    glow: string;
    badgeBg: string;
    text: string;
    gradient: string;
  };
}

const REEL_CARDS: VideoCardData[] = [
  {
    id: 'reel-1',
    videoUrl:
      'https://res.cloudinary.com/de4cnpfm1/video/upload/v1778780568/143374-782178660_small_online-video-cutter.com_-_LOOP_-_Videobolt.net_nxf1ni_70c212.mp4',
    title: 'Urban Cypher & Freestyle',
    subtitle: 'High-Impact Street Isolation & Raw Bounce',
    styleId: 'hip-hop',
    branchId: 'salt-lake',
    studioName: 'Salt Lake Sanctum',
    tag: 'STREET CYPHER',
    badge: 'RAW HIP-HOP ENERGY',
    accentColor: {
      border: 'border-amber-400/60',
      glow: 'shadow-[0_0_35px_rgba(245,158,11,0.35)]',
      badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
      text: 'text-amber-400',
      gradient: 'from-amber-500 via-orange-500 to-purple-600',
    },
  },
  {
    id: 'reel-2',
    videoUrl:
      'https://res.cloudinary.com/de4cnpfm1/video/upload/v1778779726/7673223-sd_960_540_25fps_online-video-cutter.com_-_LOOP_-_Videobolt.net_bynefp.mp4',
    title: 'Kathak Tatkar & Chakkars',
    subtitle: 'Lightning Footwork & Royal Gharana Poise',
    styleId: 'kathak',
    branchId: 'park-street',
    studioName: 'Park Street Hub',
    tag: 'CLASSICAL POETRY',
    badge: 'LUCKNOW & JAIPUR GHARANA',
    accentColor: {
      border: 'border-fuchsia-400/60',
      glow: 'shadow-[0_0_35px_rgba(217,70,239,0.35)]',
      badgeBg: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/40',
      text: 'text-fuchsia-400',
      gradient: 'from-fuchsia-500 via-purple-500 to-amber-400',
    },
  },
  {
    id: 'reel-3',
    videoUrl:
      'https://res.cloudinary.com/de4cnpfm1/video/upload/v1778778446/7405378-sd_640_360_25fps_pnsvmf.mp4',
    title: 'Lyrical Contemporary & Flow',
    subtitle: 'Fluid Floorwork on Triple-Sprung Wooden Floor',
    styleId: 'contemporary',
    branchId: 'new-town',
    studioName: 'New Town Studio',
    tag: 'FLUID DYNAMICS',
    badge: 'ZERO INJURY FLOOR',
    accentColor: {
      border: 'border-cyan-400/60',
      glow: 'shadow-[0_0_35px_rgba(6,182,212,0.35)]',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
      text: 'text-cyan-400',
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
    },
  },
  {
    id: 'reel-4',
    videoUrl:
      'https://res.cloudinary.com/de4cnpfm1/video/upload/v1778778277/8028138-sd_960_540_25fps_online-video-cutter.com_-_LOOP_-_Videobolt.net_1_fqnmyz.mp4',
    title: 'Commercial Stage Choreography',
    subtitle: 'Synchronized Stage Power & Explosive Formations',
    styleId: 'commercial',
    branchId: 'ballygunge',
    studioName: 'Ballygunge Sanctum',
    tag: 'STAGE INTENSITY',
    badge: 'COMMERCIAL CREW',
    accentColor: {
      border: 'border-rose-400/60',
      glow: 'shadow-[0_0_35px_rgba(244,63,94,0.35)]',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-400/40',
      text: 'text-rose-400',
      gradient: 'from-rose-500 via-purple-600 to-amber-400',
    },
  },
];

interface HeroVideoReelCarouselProps {
  onOpenTrialModal: (branchId?: string, styleId?: string) => void;
}

export function HeroVideoReelCarousel({ onOpenTrialModal }: HeroVideoReelCarouselProps) {
  // Track which card is currently unmuted (if any)
  const [unmutedCardId, setUnmutedCardId] = useState<string | null>(null);

  // Duplicate for seamless 0% -> -50% continuous right-to-left loop
  const duplicatedCards = [...REEL_CARDS, ...REEL_CARDS];

  const handleToggleSound = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUnmutedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-10 sm:py-14 bg-gradient-to-b from-[#09020d] via-[#100319] to-[#0d0213] overflow-hidden border-t border-purple-900/40">
      {/* Ambient background glow accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header bar above the moving reels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 sm:mb-9">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-fuchsia-500/40 text-fuchsia-300 text-xs font-bold uppercase tracking-wider mb-2.5 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
              <Radio className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
              <span>LIVE STUDIO CYPHER REELS</span>
              <span className="text-purple-500">·</span>
              <span className="text-amber-300">4 KOLKATA HUBS IN MOTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              Watch The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-amber-300 to-purple-300">
                Movement In Action
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs text-purple-300/80 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Continuous loop reels · Hover any card to pause &amp; listen</span>
          </div>
        </div>
      </div>

      {/* Infinite Moving Video Cards Container - Moving Right to Left */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Cinematic Vignette Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#09020d] via-[#09020d]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#09020d] via-[#09020d]/80 to-transparent z-20 pointer-events-none" />

        {/* The Smooth Marquee Ribbon */}
        <div className="animate-video-reel flex items-center gap-5 sm:gap-7 py-3">
          {duplicatedCards.map((card, idx) => {
            const isUnmuted = unmutedCardId === `${card.id}-${idx}`;
            const uniqueKey = `${card.id}-${idx}`;

            return (
              <div
                key={uniqueKey}
                onClick={() => onOpenTrialModal(card.branchId, card.styleId)}
                className={`relative w-[280px] sm:w-[330px] md:w-[360px] h-[450px] sm:h-[490px] rounded-3xl overflow-hidden shrink-0 border ${card.accentColor.border} ${card.accentColor.glow} bg-[#14041e] transition-all duration-300 hover:scale-[1.03] hover:z-30 cursor-pointer group/card`}
              >
                {/* Looping Video Stream */}
                <video
                  src={card.videoUrl}
                  autoPlay
                  loop
                  muted={!isUnmuted}
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Dark Cinematic Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

                {/* Subtle Neon Scanline Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none group-hover/card:via-purple-500/10 transition-colors" />

                {/* Top Card Header Strip: Live Badge & Equalizer */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-wider text-white">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                      <span>LIVE</span>
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full border text-[10px] font-black tracking-wider uppercase backdrop-blur-md ${card.accentColor.badgeBg}`}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Sound Toggle Button */}
                  <button
                    onClick={(e) => handleToggleSound(uniqueKey, e)}
                    aria-label={isUnmuted ? 'Mute video' : 'Unmute video'}
                    className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 hover:border-amber-400 flex items-center justify-center text-white hover:text-amber-300 transition-all hover:scale-110 active:scale-95 shadow-lg"
                  >
                    {isUnmuted ? (
                      <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                    ) : (
                      <VolumeX className="w-4 h-4 text-purple-200/80" />
                    )}
                  </button>
                </div>

                {/* Sound wave equalizer indicator (bottom right or top) */}
                <div className="absolute top-16 right-4 flex items-end gap-0.5 h-4 z-10 pointer-events-none">
                  <span className="w-1 bg-amber-400 rounded-full animate-[bounce_1s_infinite_100ms] h-3" />
                  <span className="w-1 bg-fuchsia-400 rounded-full animate-[bounce_1s_infinite_300ms] h-4" />
                  <span className="w-1 bg-cyan-400 rounded-full animate-[bounce_1s_infinite_200ms] h-2" />
                  <span className="w-1 bg-amber-300 rounded-full animate-[bounce_1s_infinite_400ms] h-3.5" />
                </div>

                {/* Bottom Card Content Box */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 space-y-2.5">
                  {/* Studio hub chip */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wide flex items-center gap-1 font-mono">
                      <span>📍</span> {card.studioName}
                    </span>
                    <span className="text-purple-400">·</span>
                    <span className="text-[10px] text-purple-200/70 font-mono uppercase">
                      {card.badge}
                    </span>
                  </div>

                  {/* Main Title */}
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover/card:text-amber-300 transition-colors leading-tight">
                    {card.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-purple-200/85 line-clamp-2 leading-relaxed">
                    {card.subtitle}
                  </p>

                  {/* Action CTA Button on Card */}
                  <div className="pt-1.5 flex items-center justify-between">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${card.accentColor.gradient} text-white text-xs font-black uppercase tracking-wider shadow-lg group-hover/card:scale-105 transition-all`}
                    >
                      <span>Join This Batch</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/card:translate-x-1 transition-transform" />
                    </div>

                    <span className="text-[11px] font-mono text-purple-300/80 font-semibold">
                      Free Trial Class →
                    </span>
                  </div>
                </div>

                {/* Glossy top edge highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
