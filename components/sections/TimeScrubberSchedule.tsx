'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SCHEDULE, BRANCHES } from '@/data/danceData';
import { Clock, MapPin, User, ChevronRight, Sparkles, Sun, Sunset, Moon, Flame } from 'lucide-react';

interface TimeScrubberScheduleProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onBookClass: (styleId: string, branchId: string) => void;
}

export function TimeScrubberSchedule({
  selectedBranchId,
  onSelectBranch,
  onBookClass,
}: TimeScrubberScheduleProps) {
  const [activeDay, setActiveDay] = useState<'All' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'>('Mon');
  const [timeBand, setTimeBand] = useState<'all' | 'morning' | 'afternoon' | 'evening'>('all');

  const daysList = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

  const timeBands = [
    { id: 'all', label: 'All Slots', icon: Sparkles },
    { id: 'morning', label: 'Morning (6 - 11 AM)', icon: Sun },
    { id: 'afternoon', label: 'Afternoon (3 - 6 PM)', icon: Sunset },
    { id: 'evening', label: 'Evening Cypher (6 - 9 PM)', icon: Moon },
  ] as const;

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  // Filtering logic
  const filteredSchedule = SCHEDULE.filter((item) => {
    const matchesBranch = selectedBranchId === 'all' || item.branchId === selectedBranchId;
    const matchesDay = activeDay === 'All' || item.day === activeDay;

    let matchesTime = true;
    if (timeBand === 'morning') {
      matchesTime = item.startTime.includes('AM');
    } else if (timeBand === 'afternoon') {
      const hour = parseInt(item.startTime.split(':')[0], 10);
      matchesTime = item.startTime.includes('PM') && (hour === 12 || (hour >= 1 && hour < 6));
    } else if (timeBand === 'evening') {
      const hour = parseInt(item.startTime.split(':')[0], 10);
      matchesTime = item.startTime.includes('PM') && hour >= 6 && hour < 10;
    }

    return matchesBranch && matchesDay && matchesTime;
  });

  return (
    <section id="schedule" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Clock className="w-4 h-4" />
            <span>Interactive Timetable</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Live Weekly <span className="text-amber-400">Class Grid</span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/80 max-w-xl font-medium">
            Filter by studio hub, day, and time-of-day. Real-time capacity monitoring ensures no overcrowded sessions.
          </p>
        </div>

        {/* Branch Pills in Header */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 self-start md:self-end">
          {BRANCHES.map((b) => (
            <button
              key={b.id}
              onClick={() => onSelectBranch(b.id)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                selectedBranchId === b.id
                  ? 'bg-amber-400 text-purple-950 shadow-md font-black'
                  : 'bg-purple-950/60 text-purple-300 hover:text-white border border-purple-900/60'
              }`}
            >
              {b.area.split(',')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Cockpit Control Bar */}
      <div className="p-4 md:p-6 rounded-3xl bg-[#13051d] border border-purple-800/80 shadow-2xl mb-8 space-y-4">
        {/* Day Selector Ribbon */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5">
          {daysList.map((day) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`py-2 px-1 text-xs font-black uppercase rounded-xl transition-all cursor-pointer ${
                activeDay === day
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 shadow-md'
                  : 'bg-purple-950/40 text-purple-300 hover:bg-purple-900/40 border border-purple-900/40'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Time Band Scrubber */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-purple-900/60">
          {timeBands.map((band) => {
            const Icon = band.icon;
            const isSelected = timeBand === band.id;
            return (
              <button
                key={band.id}
                onClick={() => setTimeBand(band.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-purple-800 text-amber-300 border border-amber-400/50'
                    : 'bg-purple-950/40 text-purple-300 hover:text-white border border-purple-900/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-amber-400" />
                <span>{band.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Scheduled Classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSchedule.length === 0 ? (
          <div className="col-span-full p-12 text-center rounded-3xl bg-[#14061d]/50 border border-purple-900 text-purple-300 space-y-3">
            <Clock className="w-8 h-8 mx-auto text-amber-400 animate-pulse" />
            <h4 className="text-lg font-bold text-white">No sessions in this exact time band</h4>
            <p className="text-xs text-purple-300/80 max-w-sm mx-auto">
              Try switching to &quot;All Slots&quot; or select another day of the week.
            </p>
            <button
              onClick={() => {
                setActiveDay('All');
                setTimeBand('all');
              }}
              className="py-2 px-4 rounded-xl bg-purple-900 hover:bg-purple-800 text-amber-300 text-xs font-bold"
            >
              View All Days & Times
            </button>
          </div>
        ) : (
          filteredSchedule.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-5 rounded-3xl bg-[#14051e] border border-purple-900/70 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between gap-4 shadow-xl"
            >
              <div className="space-y-3">
                {/* Header: Timing & Remaining spots */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-lg bg-amber-400 text-purple-950 text-xs font-black uppercase font-mono">
                      {item.day}
                    </span>
                    <span className="text-xs font-mono font-bold text-white">
                      {item.startTime} – {item.endTime}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {item.spotsAvailable} Spots Available
                  </span>
                </div>

                {/* Class Title & Details */}
                <div>
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-purple-300/80 mt-1">
                    <span className="text-amber-400 font-semibold">{item.styleName}</span>
                    <span>·</span>
                    <span className="uppercase text-[10px] px-1.5 py-0.2 rounded bg-purple-900/60 text-purple-200">
                      {item.level}
                    </span>
                  </div>
                </div>

                {/* Instructor & Room */}
                <div className="flex items-center justify-between text-xs text-purple-200 pt-2 border-t border-purple-950">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-semibold text-white">{item.instructor}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-purple-300/70">
                    <MapPin className="w-3 h-3 text-purple-400" />
                    <span>{item.studioRoom}</span>
                  </div>
                </div>
              </div>

              {/* Instant Book CTA */}
              <div className="pt-2 border-t border-purple-900/60 flex items-center justify-between">
                <span className="text-[11px] text-purple-300/70">{item.branchName} Studio</span>
                <button
                  onClick={() => onBookClass(item.styleId, item.branchId)}
                  className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Book Free Trial</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </section>
  );
}
