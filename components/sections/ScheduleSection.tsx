'use client';

import React, { useState } from 'react';
import { SCHEDULE, BRANCHES } from '@/data/danceData';
import { Clock, User, MapPin, Sparkles, Calendar, ChevronRight } from 'lucide-react';

interface ScheduleSectionProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onBookClass: (styleId: string, branchId: string) => void;
}

export function ScheduleSection({
  selectedBranchId,
  onSelectBranch,
  onBookClass,
}: ScheduleSectionProps) {
  const [selectedDay, setSelectedDay] = useState<'All' | 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'>('Mon');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'dance' | 'fitness' | 'kids' | 'mind'>('all');

  const daysList = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'dance', label: 'Dance' },
    { id: 'fitness', label: 'Fitness & Yoga' },
    { id: 'kids', label: 'Kids Academy' },
    { id: 'mind', label: 'Chess & Rhythm' },
  ] as const;

  // Filter schedule items
  const filteredSchedule = SCHEDULE.filter((item) => {
    const matchesBranch = selectedBranchId === 'all' || item.branchId === selectedBranchId;
    const matchesDay = selectedDay === 'All' || item.day === selectedDay;
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesBranch && matchesDay && matchesCategory;
  });

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  return (
    <section id="schedule" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>Weekly Time Table</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          Live Studio <span className="text-amber-400">Class Schedule</span>
        </h2>
        <p className="text-sm md:text-base text-purple-200/80 font-medium">
          Choose your studio, select your preferred day, and drop into an energetic session.
          Every class is monitored for capacity.
        </p>
      </div>

      {/* Control Filters Block */}
      <div className="p-4 md:p-6 rounded-3xl bg-[#14061d] border border-purple-800/80 shadow-2xl mb-8 space-y-4">
        {/* Branch Quick Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-purple-900/60">
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Studio:</span>
            <span className="text-amber-300">{activeBranch.name}</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => onSelectBranch(b.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedBranchId === b.id
                    ? 'bg-amber-400 text-purple-950 font-bold shadow'
                    : 'bg-purple-950/60 text-purple-200 hover:text-white'
                }`}
              >
                {b.area.split(',')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-purple-800 text-amber-300 border border-amber-400/50'
                  : 'bg-purple-950/50 text-purple-300 hover:bg-purple-900/40 border border-purple-900/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Day of Week Tabs */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 pt-1">
          {daysList.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`py-2 text-xs font-bold rounded-xl transition-all uppercase tracking-wider cursor-pointer ${
                selectedDay === day
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 shadow-md font-black'
                  : 'bg-purple-950/30 text-purple-300 hover:bg-purple-900/50 border border-purple-900/40'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Items List */}
      <div className="space-y-3">
        {filteredSchedule.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-[#14061d]/60 border border-purple-900/60 text-purple-300 space-y-3">
            <Sparkles className="w-8 h-8 mx-auto text-amber-400" />
            <h4 className="text-lg font-bold text-white">No classes match this exact filter</h4>
            <p className="text-xs text-purple-300/80 max-w-sm mx-auto">
              Try switching the day or checking our other branches. Weekend masterclasses are also available!
            </p>
            <button
              onClick={() => {
                setSelectedDay('All');
                setSelectedCategory('all');
              }}
              className="py-2 px-4 rounded-xl bg-purple-900 hover:bg-purple-800 text-amber-300 text-xs font-bold"
            >
              Show All Weekly Classes
            </button>
          </div>
        ) : (
          filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="group p-4 md:p-5 rounded-2xl bg-[#13051d] hover:bg-[#1a0827] border border-purple-900/60 hover:border-amber-400/60 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg"
            >
              {/* Left Column: Timing & Day */}
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="px-3 py-1.5 rounded-xl bg-purple-950/80 border border-purple-800 text-center shrink-0">
                  <span className="text-[10px] font-bold text-amber-400 block uppercase tracking-wider">
                    {item.day}
                  </span>
                  <span className="text-xs font-mono font-bold text-white">
                    {item.startTime.split(' ')[0]}
                  </span>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-xs text-purple-200">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="font-semibold text-white">
                      {item.startTime} – {item.endTime}
                    </span>
                  </div>
                  <span className="text-[11px] text-purple-300/70 block mt-0.5">
                    {item.studioRoom} · {item.branchName}
                  </span>
                </div>
              </div>

              {/* Center Column: Class Title, Style & Instructor */}
              <div className="flex-1 md:px-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-purple-900/60 text-purple-200 border border-purple-800">
                    {item.level}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-purple-300/80">
                  <span className="flex items-center gap-1 text-purple-200">
                    <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{item.instructor}</span>
                  </span>
                  <span>·</span>
                  <span className="text-amber-400/90 font-medium">{item.styleName}</span>
                </div>
              </div>

              {/* Right Column: Spots & Instant Book Trial */}
              <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-purple-900/50">
                <div className="text-left md:text-right">
                  <span className="text-[10px] uppercase tracking-wider text-purple-400 block">
                    Availability
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {item.spotsAvailable} Spots Left
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onBookClass(item.styleId, item.branchId)}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-purple-950 font-black text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
                >
                  <span>Book Trial</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
