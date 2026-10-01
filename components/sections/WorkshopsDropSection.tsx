'use client';

import React from 'react';
import { motion } from 'motion/react';
import { WORKSHOPS, Workshop } from '@/data/danceData';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Flame, Ticket, Award } from 'lucide-react';

interface WorkshopsDropSectionProps {
  onBookWorkshop: (workshop: Workshop) => void;
}

export function WorkshopsDropSection({ onBookWorkshop }: WorkshopsDropSectionProps) {
  return (
    <section id="workshops" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Limited Studio Drops</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Guest Choreographer <span className="text-amber-400">Masterclasses</span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/80 max-w-xl font-medium">
            Intensive 3-hour master sessions with India’s foremost street choreographers and classical maestros.
            Includes 4K stage routine videography for every participant.
          </p>
        </div>

        <div className="text-xs font-mono font-bold text-amber-300 flex items-center gap-2 self-start md:self-end">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
          <span>Strict Capacity Limit: Max 45 Dancers</span>
        </div>
      </div>

      {/* Drops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORKSHOPS.map((ws, index) => {
          const filledPercentage = Math.round(
            ((ws.totalSeats - ws.remainingSeats) / ws.totalSeats) * 100
          );

          return (
            <motion.div
              key={ws.id}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl bg-[#14061e] border border-purple-800/80 hover:border-amber-400 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-2xl overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/10 transition-colors" />

              <div className="space-y-5 relative z-10">
                {/* Header Tag Strip */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-900/80 text-amber-300 border border-purple-700">
                    {ws.style} · {ws.level}
                  </span>

                  {ws.isSellingFast && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-rose-400">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      Only {ws.remainingSeats} Spots Left
                    </span>
                  )}
                </div>

                {/* Title & Artist */}
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {ws.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-purple-300 font-semibold mt-1">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Master: <strong className="text-white">{ws.artist}</strong> ({ws.artistBio})</span>
                  </div>
                </div>

                {/* Capacity Progress Bar */}
                <div className="space-y-1.5 p-3 rounded-2xl bg-purple-950/50 border border-purple-900/60">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-purple-300">Studio Capacity</span>
                    <span className="font-bold text-amber-400">{filledPercentage}% Booked</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-purple-900/60 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-700"
                      style={{ width: `${filledPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Logistics */}
                <div className="grid grid-cols-2 gap-2 text-xs text-purple-200">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{ws.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{ws.time}</span>
                  </div>
                  <div className="col-span-2 flex items-center gap-1.5 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{ws.branchName}</span>
                  </div>
                </div>

                <div className="text-[11px] text-amber-300/90 font-medium italic">
                  ✨ {ws.highlight}
                </div>
              </div>

              {/* Price & Booking Button */}
              <div className="pt-6 mt-6 border-t border-purple-900/60 flex items-center justify-between gap-4 relative z-10">
                <div>
                  <span className="text-[10px] text-purple-400 uppercase tracking-wider block">Pass Price</span>
                  <div className="text-2xl font-black text-amber-400 font-mono">
                    ₹{ws.fee}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onBookWorkshop(ws)}
                  className="py-3 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Reserve Seat</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
