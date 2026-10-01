'use client';

import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { BRANCHES } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface PreFooterCalloutProps {
  onOpenTrialModal: (branchId?: string) => void;
  onSelectBranch: (branchId: string) => void;
}

export function PreFooterCallout({ onOpenTrialModal, onSelectBranch }: PreFooterCalloutProps) {
  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-[#190526] to-[#100318] border-t border-purple-900/60 overflow-hidden">
      {/* Background Neon Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/70 border border-amber-400/40 text-[11px] font-bold text-amber-300 uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>KOLKATA&apos;S PREMIER MOVEMENT FAMILY</span>
        </div>

        <div className="space-y-3">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase font-sans tracking-tight leading-none">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Move?</span>
          </h2>
          <p className="text-xl sm:text-2xl font-black uppercase text-purple-200 tracking-wider">
            Let&apos;s Dance, Kolkata.
          </p>
          <p className="text-xs sm:text-sm text-purple-200/80 max-w-xl mx-auto font-medium">
            Book a complimentary trial pass at any of our 4 studios across Kolkata. No commitment — just pure energy, music, and joy.
          </p>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={() => onOpenTrialModal('salt-lake')}
            className="py-4 px-10 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-sm uppercase tracking-wider shadow-[0_0_35px_rgba(245,158,11,0.5)] active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <span>Book Your Free Trial Pass</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Studio Branch Chips */}
        <div className="pt-4 border-t border-purple-900/40 flex flex-wrap items-center justify-center gap-3">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => {
                onSelectBranch(b.id);
                onOpenTrialModal(b.id);
              }}
              className="px-3.5 py-1.5 rounded-xl bg-purple-950/70 hover:bg-purple-900 border border-purple-800 hover:border-amber-400 text-xs font-mono font-bold text-purple-200 hover:text-amber-300 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>{b.area.split(',')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
