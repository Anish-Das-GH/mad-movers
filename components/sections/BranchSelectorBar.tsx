'use client';

import React from 'react';
import { BRANCHES } from '@/data/danceData';
import { MapPin, Navigation, Sparkles } from 'lucide-react';

interface BranchSelectorBarProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
}

export function BranchSelectorBar({ selectedBranchId, onSelectBranch }: BranchSelectorBarProps) {
  return (
    <section className="relative z-20 -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="p-3 md:p-4 rounded-3xl bg-[#13051d]/90 border border-purple-800/80 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3 pb-3 border-b border-purple-900/60">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-black uppercase tracking-wider text-white">
              Choose Your Studio Location
            </span>
            <span className="text-xs text-purple-300/70 hidden sm:inline">
              (All 4 hubs feature sprung wooden dance floors & pro acoustic sound)
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-amber-300 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Switching updates schedule & batch rosters automatically</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {BRANCHES.map((branch) => {
            const isSelected = selectedBranchId === branch.id;
            return (
              <button
                key={branch.id}
                onClick={() => onSelectBranch(branch.id)}
                className={`p-3.5 rounded-2xl text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-amber-500/20 via-purple-900/50 to-purple-950 border-2 border-amber-400 shadow-lg shadow-amber-500/10'
                    : 'bg-purple-950/30 hover:bg-purple-900/40 border border-purple-900/60 hover:border-purple-700'
                }`}
              >
                <div className="flex items-start justify-between gap-1 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <MapPin className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-amber-400' : 'text-purple-400'}`} />
                    <span className="text-xs font-bold text-white truncate">{branch.name.replace('Mad Movers ', '')}</span>
                  </div>
                  {isSelected && (
                    <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-400 text-purple-950">
                      Active
                    </span>
                  )}
                </div>

                <div className="text-[11px] font-medium text-amber-300/90 truncate mb-1">
                  {branch.area}
                </div>

                <div className="text-[10px] text-purple-200/70 truncate flex items-center gap-2">
                  <span>{branch.specs.sqft}</span>
                  <span>·</span>
                  <span>{branch.specs.studios} Studios</span>
                  <span>·</span>
                  <span className="text-emerald-400">Open Today</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
