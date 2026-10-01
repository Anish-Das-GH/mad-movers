'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Ticket, Sparkles, ArrowRight, Flame } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface UpcomingGalaSectionProps {
  onOpenInquiry: (topic: string) => void;
}

export function UpcomingGalaSection({ onOpenInquiry }: UpcomingGalaSectionProps) {
  return (
    <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>ANNUAL STAGE SPECTACLE · MAIN EVENT</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Don&apos;t Miss{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              What&apos;s Next
            </span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/90 max-w-xl font-medium">
            Live dance battles, grand classical choreography, and student debuts across Kolkata. Book early — passes fill up rapidly.
          </p>
        </div>

        <button
          onClick={() => onOpenInquiry('Annual Gala 2026 Passes')}
          className="py-2.5 px-5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/80 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all self-start md:self-end flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Ticket className="w-4 h-4 text-amber-400" />
          <span>Audience Passes & RSVP</span>
        </button>
      </div>

      {/* Main Concert Poster Banner Box */}
      <div className="relative rounded-3xl bg-gradient-to-br from-[#1b0526] via-[#2a073b] to-[#0f0217] border-2 border-amber-400/60 shadow-[0_0_45px_rgba(245,158,11,0.25)] overflow-hidden">
        {/* Stage Lighting Beams Ambience */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-24 left-1/4 w-80 h-96 bg-amber-400/25 rotate-12 blur-3xl" />
          <div className="absolute -top-24 right-1/4 w-80 h-96 bg-purple-500/35 -rotate-12 blur-3xl" />
        </div>

        {/* Poster Content */}
        <div className="relative p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[380px]">
          {/* Top Bar with Date & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow">
              <Calendar className="w-4 h-4" />
              <span>DECEMBER 19–20, 2026</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-purple-700/70 text-xs text-amber-300 font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>REGISTRATIONS OPEN FOR BATCH STUDENTS</span>
            </div>
          </div>

          {/* Central Title */}
          <div className="my-8 space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-purple-300">
              <MadMoversLogo variant="crest" size="sm" className="w-5 h-5" />
              <span>KOLKATA&apos;S BIGGEST MOVEMENT GALA</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight font-sans">
              MAD CYPHER & DANCE WONDER 2026
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-medium">
              Not a dry test — an electrifying non-competitive red-carpet stage where 450+ students from our 4 Kolkata studios perform alongside live DJs, celebrity guest choreographers, and full concert intelligent lighting.
            </p>
          </div>

          {/* Bottom Bar: Venue, Ticket Info & CTA */}
          <div className="pt-6 border-t border-purple-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-purple-200">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="font-bold text-white">
                Eastern Zonal Cultural Centre (EZCC)
              </span>
              <span className="text-purple-400">·</span>
              <span>Salt Lake City, Kolkata</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenInquiry('Student Participation for Annual Gala 2026')}
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.5)] active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <span>Register as Student Performer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
