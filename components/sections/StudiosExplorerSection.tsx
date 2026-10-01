'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BRANCHES, Branch } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import { MapPin, Navigation, Phone, Clock, Sparkles, Check, ArrowRight, ShieldCheck, Locate } from 'lucide-react';

interface StudiosExplorerSectionProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onOpenTrialModal: (branchId: string) => void;
}

export function StudiosExplorerSection({
  selectedBranchId,
  onSelectBranch,
  onOpenTrialModal,
}: StudiosExplorerSectionProps) {
  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];
  const [locationDetected, setLocationDetected] = useState<string | null>(null);

  const handleUseMyLocation = () => {
    // Default to Salt Lake or detected closest
    onSelectBranch('salt-lake');
    setLocationDetected('Located closest to Salt Lake Sector V Hub');
    setTimeout(() => setLocationDetected(null), 4000);
  };

  return (
    <section id="studios" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>FIND YOUR STUDIO</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          Which Mad Movers is <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">Nearest to You?</span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/90 font-medium">
          4 flagship studios across Kolkata. Tell us roughly where you are — we&apos;ll show the closest and what they teach.
        </p>

        {/* Quick Neighborhood Picker Buttons (Inspired by Twist N Turns) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleUseMyLocation}
            className="py-2.5 px-4 rounded-xl bg-purple-950/90 hover:bg-purple-900 border border-purple-700 hover:border-amber-400 text-xs font-bold text-white flex items-center gap-2 transition-all cursor-pointer shadow-md"
          >
            <Locate className="w-3.5 h-3.5 text-amber-400" />
            <span>Use my location</span>
          </button>

          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-purple-950/60 border border-purple-800 text-xs">
            <span className="text-purple-300 px-2 py-1 font-semibold text-[11px]">I&apos;m near:</span>
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedBranchId === b.id
                    ? 'bg-amber-400 text-purple-950 shadow font-black'
                    : 'text-purple-200 hover:text-white hover:bg-purple-900/50'
                }`}
              >
                {b.area.split(',')[0]}
              </button>
            ))}
          </div>
        </div>

        {locationDetected && (
          <p className="text-xs text-emerald-400 font-mono font-bold animate-fade-in pt-1">
            ✓ {locationDetected}
          </p>
        )}
      </div>

      {/* 4 Studio Cards Grid (Direct Clean View) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {BRANCHES.map((b) => {
          const isSelected = selectedBranchId === b.id;
          return (
            <div
              key={b.id}
              onClick={() => onSelectBranch(b.id)}
              className={`p-6 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between border relative overflow-hidden ${
                isSelected
                  ? 'bg-gradient-to-b from-[#240833] via-[#1a0525] to-[#12031a] border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.25)] scale-[1.02]'
                  : 'bg-[#150420]/80 hover:bg-[#1f062e] border-purple-800/70 hover:border-purple-600'
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500" />
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[10px] font-mono font-black uppercase text-amber-400 tracking-wider">
                    DANCE CLASSES AT
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-purple-500'
                    }`}
                  />
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {b.name.replace('Mad Movers ', '')}
                </h3>
                <p className="text-xs text-amber-300 font-bold">{b.area}</p>

                <p className="text-xs text-purple-200/80 leading-relaxed line-clamp-3">
                  {b.address}
                </p>

                <div className="pt-2 border-t border-purple-900/60 space-y-1 text-[11px] text-purple-300/90 font-mono">
                  <div>• {b.specs.flooring}</div>
                  <div>• {b.specs.sqft} · {b.specs.studios} Studios</div>
                  <div className="text-emerald-400 font-bold">• {b.timings}</div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-purple-900/60 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenTrialModal(b.id);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-purple-950 hover:bg-amber-400 hover:text-purple-950 border border-purple-700 text-amber-300 font-black text-xs uppercase tracking-wider transition-all text-center cursor-pointer"
                >
                  Book Free Pass Here
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Studio Feature Detail Drawer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBranch.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl bg-gradient-to-r from-[#1f062c] via-[#260836] to-[#14031d] border-2 border-amber-400/60 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider">
                  Active Selected Studio
                </span>
                <span className="text-xs font-mono text-purple-300">
                  Landmark: {activeBranch.landmark}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {activeBranch.name} · {activeBranch.area}
              </h3>

              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-medium">
                {activeBranch.address}. Equipped with {activeBranch.specs.flooring}, professional sound systems, full-length mirror walls, climate control, and separate changing lounges.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeBranch.specs.features.map((amenity) => (
                  <span
                    key={amenity}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-700/80 text-[11px] text-purple-200 font-semibold"
                  >
                    <Check className="w-3 h-3 text-amber-400" />
                    <span>{amenity}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenTrialModal(activeBranch.id)}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95 transition-all text-center cursor-pointer hover:scale-105"
              >
                Claim Free Trial at {activeBranch.area.split(',')[0]}
              </button>

              <a
                href={activeBranch.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-2xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-400" />
                <span>Get Google Maps Directions</span>
              </a>

              <a
                href={`tel:${activeBranch.phone}`}
                className="w-full py-3 px-6 rounded-2xl bg-purple-950/40 hover:bg-purple-950 border border-purple-800 text-purple-300 hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Studio Desk: {activeBranch.phone}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
