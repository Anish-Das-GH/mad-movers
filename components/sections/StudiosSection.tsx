'use client';

import React from 'react';
import { BRANCHES, Branch } from '@/data/danceData';
import { MapPin, Navigation, Phone, Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface StudiosSectionProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onOpenTrialModal: (branchId: string) => void;
}

export function StudiosSection({
  selectedBranchId,
  onSelectBranch,
  onOpenTrialModal,
}: StudiosSectionProps) {
  return (
    <section id="studios" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <MapPin className="w-3.5 h-3.5" />
          <span>Strategic Locations</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          Find Your Nearest <span className="text-amber-400">Mad Movers Studio</span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 font-medium">
          4 architect-designed dance & activity campuses located at premier transit hubs across Kolkata.
          All hubs feature sprung wooden dance floors, high-end acoustics, and air conditioning.
        </p>
      </div>

      {/* Studios Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BRANCHES.map((b) => {
          const isActive = selectedBranchId === b.id;
          return (
            <div
              key={b.id}
              onClick={() => onSelectBranch(b.id)}
              className={`group relative rounded-3xl bg-[#14061e] p-6 md:p-8 border transition-all duration-300 flex flex-col justify-between shadow-2xl cursor-pointer ${
                isActive
                  ? 'border-2 border-amber-400 ring-2 ring-amber-400/20 shadow-purple-950/60'
                  : 'border-purple-800/80 hover:border-purple-600'
              }`}
            >
              {/* Studio Map Silhouette / Blueprint Header */}
              <div className="relative h-44 rounded-2xl bg-gradient-to-br from-purple-950/90 via-[#270835] to-black border border-purple-800/70 p-5 overflow-hidden flex flex-col justify-between mb-6">
                {/* Styled Map Grid Texture */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, #f59e0b 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '24px 24px, 48px 48px',
                  }}
                />

                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                      {b.tagline}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {b.name}
                    </h3>
                  </div>

                  {isActive ? (
                    <span className="px-2.5 py-1 rounded-full bg-amber-400 text-purple-950 text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Active Hub
                    </span>
                  ) : (
                    <span className="text-xs text-purple-300 group-hover:text-white font-semibold">
                      Click to View
                    </span>
                  )}
                </div>

                <div className="relative z-10 flex items-center justify-between text-xs text-purple-200">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold text-white">{b.area}</span>
                  </div>
                  <span className="font-mono text-amber-400/90 font-bold">{b.specs.sqft}</span>
                </div>
              </div>

              {/* Address & Logistics Details */}
              <div className="space-y-4 flex-1">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-purple-400 tracking-wider">
                    Full Studio Address
                  </span>
                  <p className="text-xs text-purple-200/90 leading-relaxed font-medium">
                    {b.address}
                  </p>
                  <p className="text-[11px] text-amber-300/80">
                    📍 Landmark: {b.landmark}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-purple-900/60 text-xs">
                  <div className="flex items-center gap-2 text-purple-200">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{b.timings}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-200">
                    <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <a href={`tel:${b.phone}`} className="hover:text-amber-400">
                      {b.phone}
                    </a>
                  </div>
                </div>

                {/* Facility Features */}
                <div className="pt-2 border-t border-purple-900/60">
                  <div className="text-[10px] uppercase font-bold text-purple-400 mb-1.5">
                    Studio Infrastructure
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {b.specs.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-lg bg-purple-950/60 border border-purple-900 text-purple-200"
                      >
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-purple-900/60 flex items-center gap-3">
                <a
                  href={b.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-200 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Get Directions</span>
                </a>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenTrialModal(b.id);
                  }}
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                >
                  Book Here
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
