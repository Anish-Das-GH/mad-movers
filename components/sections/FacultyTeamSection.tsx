'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, Instagram, User, Flame, Heart, Music, Brain } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface Choreographer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  branches: string[];
  signatureMoves: string[];
  badgeColor: string;
}

const CHOREOGRAPHERS: Choreographer[] = [
  {
    id: 'c-1',
    name: 'Mad Movers Creative Board',
    role: 'Artistic Direction & Faculty Board',
    specialty: 'Urban Street Choreography & Contemporary',
    experience: '12+ Years Industry Experience',
    bio: 'Pioneered the Mad Movers philosophy in Kolkata with the belief that dance is a catalyst for joy and emotional release. Bringing together national champions, certified Kathak scholars, and contemporary artists.',
    branches: ['Salt Lake', 'Park Street', 'New Town', 'Ballygunge'],
    signatureMoves: ['Isolations', 'Liquid Waving', 'Pocket Control'],
    badgeColor: 'border-amber-400 text-amber-300 bg-amber-400/10',
  },
  {
    id: 'c-2',
    name: 'Rohan Roy',
    role: 'Head of Urban & Hip-Hop',
    specialty: 'Old School Hip-Hop & Litefeet',
    experience: '8 Years Choreography',
    bio: 'Former East India Cypher champion. Known for intricate musicality breakdown, crowd hype, and high-energy foundation training for all age groups.',
    branches: ['Salt Lake Sector V', 'Park Street'],
    signatureMoves: ['Harlem Shake', 'Tone Wop', 'Glides'],
    badgeColor: 'border-fuchsia-400 text-fuchsia-300 bg-fuchsia-400/10',
  },
  {
    id: 'c-3',
    name: 'Vidushi Ananya Sen',
    role: 'Lead Classical & Gharana Exponent',
    specialty: 'Lucknow Gharana Kathak & Semi-Classical',
    experience: '14 Years Classical Training',
    bio: 'Gold medalist from Rabindra Bharati University. Blends rigorous tatkar footwork with graceful abhinaya storytelling and contemporary stage staging.',
    branches: ['Ballygunge Sanctum', 'Salt Lake'],
    signatureMoves: ['16-count Chakkars', 'Teentaal Tatkar', 'Abhinaya'],
    badgeColor: 'border-purple-400 text-purple-300 bg-purple-400/10',
  },
  {
    id: 'c-4',
    name: 'Prerna Mukherjee',
    role: 'Contemporary & Ballet Director',
    specialty: 'Lyrical Contemporary & Floorwork Flow',
    experience: '9 Years Performance',
    bio: 'Trained at Terence Lewis Dance Academy and certified in release technique. Teaches dancers how to use gravity and momentum for injury-free soaring leaps.',
    branches: ['The Loft (Park Street)', 'New Town Arena'],
    signatureMoves: ['Shoulder Rolls', 'Suspension Jumps', 'Floor Sweeps'],
    badgeColor: 'border-cyan-400 text-cyan-300 bg-cyan-400/10',
  },
  {
    id: 'c-5',
    name: 'Vikramaditya Das',
    role: 'Activity Wing & FIDE Chess Lead',
    specialty: 'FIDE-Rated Chess & Mind Conditioning',
    experience: 'FIDE 2050+ Peak Elo',
    bio: 'International rated chess player and cognitive strategist. Directs our unique movement-chess hybrid curriculum to boost strategic vision in young movers.',
    branches: ['New Town Arena', 'Salt Lake'],
    signatureMoves: ['Positional Strategy', 'Endgame Tactics', 'Cajon Time'],
    badgeColor: 'border-emerald-400 text-emerald-300 bg-emerald-400/10',
  },
  {
    id: 'c-6',
    name: 'Sneha Ghosh',
    role: 'Commercial & Sangeet Director',
    specialty: 'Bolly-Hop & Wedding Extravaganzas',
    experience: '7 Years Film & Stage Choreography',
    bio: 'Has choreographed over 120 luxury weddings and college fests across Eastern India. Specializes in making non-dancers look confident and camera-ready in hours.',
    branches: ['All 4 Studios', 'Destination Weddings'],
    signatureMoves: ['Sangeet Formations', 'Signature Hooksteps', 'Expressions'],
    badgeColor: 'border-amber-400 text-amber-300 bg-amber-400/10',
  },
];

export function FacultyTeamSection({ onOpenTrialModal }: { onOpenTrialModal: () => void }) {
  const [selectedFaculty, setSelectedFaculty] = useState<Choreographer>(CHOREOGRAPHERS[0]);

  return (
    <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Award className="w-4 h-4 text-amber-400" />
            <span>THE CREATIVE FACULTY · MASTER CHOREOGRAPHERS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Meet the Masters Behind the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
              Movement
            </span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/90 max-w-2xl font-medium">
            From national battle champions to classical gharana scholars and FIDE chess mentors — our faculty is passionate about transforming raw enthusiasm into stage-ready artistry.
          </p>
        </div>

        <button
          onClick={onOpenTrialModal}
          className="py-3 px-6 rounded-2xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700 hover:border-amber-400 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all self-start md:self-end cursor-pointer shadow-lg hover:scale-105"
        >
          Book Trial with Faculty
        </button>
      </div>

      {/* Featured Spotlight Card (Founder & Artistic Director) */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1d0628] via-[#240833] to-[#14041d] border-2 border-amber-400/60 shadow-[0_0_35px_rgba(245,158,11,0.2)]">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Avatar Graphic Crest */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-purple-950 border-2 border-amber-400 flex items-center justify-center p-3 shadow-2xl relative overflow-hidden group">
              <MadMoversLogo variant="crest" size="lg" className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent pointer-events-none" />
            </div>
            <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-purple-950 text-[10px] font-black uppercase tracking-wider whitespace-nowrap shadow">
              ESTD 2022
            </span>
          </div>

          {/* Info */}
          <div className="space-y-3 flex-1 text-center lg:text-left">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400 text-amber-300">
                Artistic Direction & Faculty Board
              </span>
              <span className="text-xs font-mono text-purple-300">
                Eastern India Movement Movement
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              &ldquo;Work Like a Mad to Make Yourself Glad&rdquo;
            </h3>

            <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-medium max-w-3xl">
              Mad Movers was founded to create an energetic, non-judgmental sanctuary where kids, teens, and adults can find their rhythm. With 4 state-of-the-art Kolkata studios, injury-free sprung wooden floors, and over 15,000 movers trained, our mission remains simple: unconditional joy on the dance floor.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-bold text-amber-300">
              <span>⚡ 4 Studios Across Kolkata</span>
              <span className="text-purple-600">·</span>
              <span>🔥 38+ Weekly Batches</span>
              <span className="text-purple-600">·</span>
              <span>🏆 FIDE Chess & Movement Wing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Instructors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CHOREOGRAPHERS.slice(1).map((faculty) => (
          <div
            key={faculty.id}
            className="p-5 rounded-2xl bg-gradient-to-b from-[#180524] to-[#100318] border border-purple-800/60 hover:border-amber-400/80 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${faculty.badgeColor}`}
                >
                  {faculty.role}
                </span>
                <span className="text-[10px] font-mono text-purple-400">{faculty.experience}</span>
              </div>

              <div>
                <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors">
                  {faculty.name}
                </h4>
                <p className="text-xs font-bold text-purple-300/90">{faculty.specialty}</p>
              </div>

              <p className="text-xs text-purple-200/80 leading-relaxed line-clamp-3">
                {faculty.bio}
              </p>

              {/* Signature Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {faculty.signatureMoves.map((m) => (
                  <span
                    key={m}
                    className="text-[10px] px-2 py-0.5 rounded bg-purple-950/70 border border-purple-800/80 text-purple-300 font-mono"
                  >
                    #{m}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-purple-900/50 flex items-center justify-between text-[11px]">
              <span className="text-purple-400 truncate max-w-[170px]">
                📍 {faculty.branches.join(', ')}
              </span>
              <button
                onClick={onOpenTrialModal}
                className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider text-[11px] cursor-pointer"
              >
                Join Class →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
