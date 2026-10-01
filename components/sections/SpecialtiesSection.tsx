'use client';

import React, { useState } from 'react';
import { Sparkles, Heart, Building2, Music, Check, ArrowRight, Video, Globe2, MapPin } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface SpecialtiesSectionProps {
  onOpenInquiry: (topic: string) => void;
}

export function SpecialtiesSection({ onOpenInquiry }: SpecialtiesSectionProps) {
  const [activeTab, setActiveTab] = useState<'wedding' | 'corporate' | 'rentals'>('wedding');

  return (
    <section className="py-20 bg-gradient-to-b from-[#110419] via-[#160620] to-[#0e0413] border-y border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs for Services */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-purple-950/70 border border-purple-800">
            <button
              onClick={() => setActiveTab('wedding')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'wedding'
                  ? 'bg-amber-400 text-purple-950 shadow-md font-black'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              Wedding & Sangeet
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'corporate'
                  ? 'bg-amber-400 text-purple-950 shadow-md font-black'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              Corporate & Offsites
            </button>
            <button
              onClick={() => setActiveTab('rentals')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'rentals'
                  ? 'bg-amber-400 text-purple-950 shadow-md font-black'
                  : 'text-purple-300 hover:text-white'
              }`}
            >
              Studio Space Rentals
            </button>
          </div>
        </div>

        {/* Tab 1: Wedding & Sangeet Choreography with Sangeet Planner */}
        {activeTab === 'wedding' && (
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1d0628] via-[#240833] to-[#12041a] border border-amber-400/50 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl animate-fade-in space-y-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Heart className="w-4 h-4 fill-amber-400" />
                <span>NEW · SANGEET PRODUCTION PLANNER</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
                Plan Your Entire Sangeet Evening.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                  From Anywhere.
                </span>
              </h2>

              <p className="text-sm md:text-base text-purple-200/90 leading-relaxed font-medium">
                Pick your songs, choose your performers, and set the grand finale. We deliver counted step-by-step practice tutorials, customized audio sound mashups, and live rehearsal coaching — from our Kolkata studios to NRI destination weddings in Dubai, London, and California.
              </p>
            </div>

            {/* Sangeet Delivery Packages (Inspired by Twist N Turns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-purple-950/70 border border-purple-700/80 hover:border-amber-400 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <MapPin className="w-4 h-4 text-amber-400" />
                      <span>Kolkata Studio Package</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400">₹13,500</span>
                  </div>
                  <p className="text-xs text-purple-200/80">
                    In-person rehearsals across our 4 Kolkata studios or at your home. Complete sound edit + on-stage cue coordination.
                  </p>
                  <div className="text-[11px] text-purple-300 space-y-1 pt-1">
                    <div>• 20+ Hours Studio Time</div>
                    <div>• Custom Bollywood/Punjabi Mashup</div>
                    <div>• Formations & Family Entry</div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenInquiry('Kolkata Studio Sangeet Package (₹13,500)')}
                  className="mt-4 py-2 px-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer"
                >
                  Book Kolkata Rehearsals
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-purple-950/70 border border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Video className="w-4 h-4 text-amber-400" />
                      <span>Rest of India (Hybrid)</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400">₹12,500</span>
                  </div>
                  <p className="text-xs text-purple-200/80">
                    Zoom live group sessions + recorded 8-count breakdown videos for outstation family members to practice anytime.
                  </p>
                  <div className="text-[11px] text-purple-300 space-y-1 pt-1">
                    <div>• Zoom Live Master Sessions</div>
                    <div>• Slow-Mo Practice Videos (Front & Back)</div>
                    <div>• Music Track BPM Synchronization</div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenInquiry('Rest of India Hybrid Sangeet Package (₹12,500)')}
                  className="mt-4 py-2 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider text-center cursor-pointer"
                >
                  Choose Hybrid Package
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-purple-950/70 border border-purple-700/80 hover:border-amber-400 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                      <Globe2 className="w-4 h-4 text-cyan-400" />
                      <span>NRI & International</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">$75 / song</span>
                  </div>
                  <p className="text-xs text-purple-200/80">
                    Engineered for USA, UK, UAE & Australia time zones. Seamless remote rehearsals with diaspora-friendly choreography.
                  </p>
                  <div className="text-[11px] text-purple-300 space-y-1 pt-1">
                    <div>• Multi-Timezone Zoom Scheduling</div>
                    <div>• 4K Tutorial Cloud Folder</div>
                    <div>• WhatsApp Dance Mentor On-Call</div>
                  </div>
                </div>
                <button
                  onClick={() => onOpenInquiry('NRI International Sangeet Package ($75/song)')}
                  className="mt-4 py-2 px-3 rounded-xl bg-purple-900 hover:bg-purple-800 text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer"
                >
                  Book International NRI
                </button>
              </div>
            </div>

            {/* Bottom Sangeet CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-800/60">
              <div className="text-xs text-purple-300">
                ⭐ <strong className="text-white">120+ Sangeets Choreographed</strong> across ITC Sonar, Taj Bengal, Hyatt Regency, and destination resorts.
              </div>
              <button
                onClick={() => onOpenInquiry('Custom Wedding Sangeet Proposal')}
                className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
              >
                <span>Request Custom Sangeet Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: Corporate & Offsites */}
        {activeTab === 'corporate' && (
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1a0827] via-[#210931] to-[#12041a] border border-purple-700/60 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl animate-fade-in space-y-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Building2 className="w-4 h-4" />
                <span>Enterprise & Team Dynamics</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
                Energize Your Workplace with <span className="text-amber-400">Mad Movement</span>
              </h2>

              <p className="text-sm md:text-base text-purple-200/90 leading-relaxed font-medium">
                Ditch boring icebreakers. Bring high-octane dance workshops, desktop yoga destress clinics, or team annual-day showcases straight to your offices or inside our 4 private studios in Kolkata.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-purple-800/80">
              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800 space-y-1">
                <div className="text-xs font-bold text-white">Team Flashmobs</div>
                <div className="text-[11px] text-purple-300/80">Surprise performances for corporate retreats and townhalls.</div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800 space-y-1">
                <div className="text-xs font-bold text-white">Destress Clinics</div>
                <div className="text-[11px] text-purple-300/80">Postural alignment and joyful movement sessions for tech teams.</div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800 space-y-1">
                <div className="text-xs font-bold text-white">Annual Day Choreography</div>
                <div className="text-[11px] text-purple-300/80">Full stage directing, track editing, and leadership dance entries.</div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Corporate Dance Workshop / Annual Day')}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Inquire Corporate Workshop
            </button>
          </div>
        )}

        {/* Tab 3: Studio Space Rentals */}
        {activeTab === 'rentals' && (
          <div className="relative rounded-3xl bg-gradient-to-br from-[#190625] via-[#210931] to-[#110318] border border-purple-700/60 p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl animate-fade-in space-y-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400">
                <Music className="w-4 h-4" />
                <span>Professional Floor Space</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
                Rent our <span className="text-amber-400">Sprung Wood Floors</span>
              </h2>

              <p className="text-sm md:text-base text-purple-200/90 leading-relaxed font-medium">
                Need premium space for rehearsals, dance shoots, theater rehearsals, yoga workshops, or casting auditions? Our studios in Salt Lake, Park Street, New Town, and Ballygunge are available on hourly rentals.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-purple-800/80">
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800">
                <div className="text-amber-400 font-bold text-xs">Full Mirrors</div>
                <div className="text-[10px] text-purple-300">Floor-to-ceiling mirror walls</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800">
                <div className="text-amber-400 font-bold text-xs">JBL Concert Audio</div>
                <div className="text-[10px] text-purple-300">High-fidelity Bluetooth rigs</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800">
                <div className="text-amber-400 font-bold text-xs">Sprung Floors</div>
                <div className="text-[10px] text-purple-300">Triple cushioned wood floor</div>
              </div>
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800">
                <div className="text-amber-400 font-bold text-xs">Central AC</div>
                <div className="text-[10px] text-purple-300">Comfortable climate control</div>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry('Studio Space Rental Booking')}
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              Check Studio Rental Availability
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
