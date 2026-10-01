'use client';

import React from 'react';
import { WORKSHOPS, Workshop } from '@/data/danceData';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Flame } from 'lucide-react';

interface WorkshopsSectionProps {
  onBookWorkshop: (workshop: Workshop) => void;
}

export function WorkshopsSection({ onBookWorkshop }: WorkshopsSectionProps) {
  return (
    <section id="workshops" className="py-20 bg-gradient-to-b from-transparent via-[#110418] to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Intensive Masterclasses</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
              Guest Choreographer <span className="text-amber-400">Workshops</span>
            </h2>
            <p className="text-sm text-purple-200/80 max-w-xl">
              Learn straight from India’s top battle winners, reality show finalists, and classical exponents.
              Limited spots per studio to ensure personalized feedback.
            </p>
          </div>

          <div className="text-xs text-purple-300 flex items-center gap-1.5 self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Registration active for this weekend & next</span>
          </div>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {WORKSHOPS.map((ws) => (
            <div
              key={ws.id}
              className="group relative rounded-3xl bg-[#160621] border border-purple-800/80 hover:border-amber-400/70 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
            >
              {/* Card Top Strip */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                      {ws.style} · {ws.level}
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {ws.title}
                    </h3>
                  </div>

                  {ws.isSellingFast && (
                    <span className="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[11px] font-bold">
                      <Flame className="w-3.5 h-3.5 text-rose-400 fill-current" />
                      Only {ws.remainingSeats} Left
                    </span>
                  )}
                </div>

                {/* Artist Bio Lockup */}
                <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-900/60 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-purple-300/70 uppercase tracking-wider block font-semibold">
                      Master Choreographer
                    </span>
                    <span className="text-sm font-bold text-white">{ws.artist}</span>
                    <span className="text-xs text-purple-200/80 block">{ws.artistBio}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-purple-600 flex items-center justify-center font-black text-white text-sm shadow-md shrink-0">
                    {ws.artist.charAt(0)}
                  </div>
                </div>

                {/* Workshop Logistics Unboxed List */}
                <div className="grid grid-cols-2 gap-3 text-xs text-purple-200/80 pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{ws.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{ws.time}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{ws.branchName}</span>
                  </div>
                </div>

                {/* Highlight */}
                <p className="text-xs text-amber-300/90 font-medium italic pt-1">
                  ⭐ {ws.highlight}
                </p>
              </div>

              {/* Bottom Action Strip */}
              <div className="pt-6 mt-6 border-t border-purple-900/60 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-purple-300/70 uppercase block">Workshop Pass</span>
                  <span className="text-xl md:text-2xl font-black text-amber-400 font-mono">
                    ₹{ws.fee}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onBookWorkshop(ws)}
                  className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Reserve Spot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
