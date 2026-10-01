'use client';

import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';

interface DanceVideoShowcaseProps {
  onOpenTrialModal: () => void;
}

const CLOUDINARY_DANCE_LOOP_VIDEO =
  'https://res.cloudinary.com/de4cnpfm1/video/upload/v1778780450/7672381-hd_1280_720_25fps_1_-_LOOP_-_Videobolt.net_vnmkpc.mp4';

export function DanceVideoShowcase({ onOpenTrialModal }: DanceVideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="dance-video-showcase" className="py-16 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Neon Glow Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>STUDIO IN MOTION · LIVE CYPHER</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Feel the Energy in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Full Motion
            </span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/90 max-w-xl font-medium">
            Watch our dancers in full flight. High-voltage street grooves, explosive popping hits, and fluid stage routines filmed inside our Kolkata studios.
          </p>
        </div>

        <button
          onClick={onOpenTrialModal}
          className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] active:scale-95 transition-all cursor-pointer whitespace-nowrap self-start md:self-end hover:scale-105"
        >
          Join Next Routine
        </button>
      </div>

      {/* Main Cinematic Video Theater Box - Continuous Loop */}
      <div className="relative rounded-3xl bg-[#0f0217] border-2 border-amber-400/60 shadow-[0_0_50px_rgba(168,85,247,0.3)] overflow-hidden group">
        {/* Glowing Theater Ambience */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-amber-500/30 to-purple-600/40 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* 16:9 Video Canvas Frame */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            src={CLOUDINARY_DANCE_LOOP_VIDEO}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          {/* Minimal Floating Sound Toggle */}
          <button
            onClick={toggleSound}
            className="absolute bottom-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-purple-700/80 text-white backdrop-blur-md transition-all cursor-pointer group/btn"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-purple-300 group-hover/btn:text-amber-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-amber-400 group-hover/btn:scale-110 transition-transform" />
            )}
          </button>
        </div>

        {/* Video Stage Control Bar */}
        <div className="p-4 sm:p-5 bg-[#14051e] border-t border-purple-900/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
            <div>
              <span className="text-xs font-bold text-white block">
                Mad Movers Official Movement Reel
              </span>
              <span className="text-[11px] text-purple-300/80">
                Salt Lake · Park Street · New Town · Ballygunge
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTrialModal}
              className="py-2 px-5 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-700 hover:border-amber-400 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              Book Free Trial Pass
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
