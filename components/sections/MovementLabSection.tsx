'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DANCE_STYLES, DanceStyle } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import { Sparkles, Flame, Check, ArrowRight, Clock, Users, Play, Activity } from 'lucide-react';

interface MovementLabSectionProps {
  onBookTrial: (styleId: string) => void;
}

export function MovementLabSection({ onBookTrial }: MovementLabSectionProps) {
  const [selectedStyleId, setSelectedStyleId] = useState<string>(DANCE_STYLES[0].id);
  const [selectedLevel, setSelectedLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');

  const activeStyle = DANCE_STYLES.find((s) => s.id === selectedStyleId) || DANCE_STYLES[0];

  const bpmMap: Record<string, number> = {
    'hip-hop': 94,
    bollyhop: 106,
    contemporary: 76,
    kathak: 120,
    'power-yoga': 65,
    zumba: 128,
    'kids-special': 100,
    'chess-mind': 60,
    'music-rhythm': 110,
  };

  const levelSyllabus = {
    beginner: [
      'Foundational posture, body alignment & balance',
      'Basic rhythm isolation & counting time signatures',
      'Low-impact movement drills and core stability',
    ],
    intermediate: [
      'Complex syncopation, speed switches & foot speed',
      'Stage presence, projection & emotion mapping',
      'Transitioning into floorwork & dynamic spins',
    ],
    advanced: [
      'Battle cypher confidence & live improvisation',
      'Camera-ready performance choreography',
      'Professional speed choreography & solo showcase',
    ],
  };

  return (
    <section id="styles" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Activity className="w-4 h-4" />
            <span>Interactive Skill Matrix</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            The Movement <span className="text-amber-400">Laboratory</span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/80 max-w-xl font-medium">
            Explore syllabus milestones, tempo metrics, and choreographic focus.
            Click any discipline to test drive the curriculum before stepping onto our sprung floors.
          </p>
        </div>

        <div className="text-xs font-bold text-amber-300 flex items-center gap-2 self-start md:self-end">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span>Interactive Syllabus Engine</span>
        </div>
      </div>

      {/* Main Interactive Stage & Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Style Navigation Palette */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2 px-1">
            Select Discipline
          </div>

          <div className="space-y-2">
            {DANCE_STYLES.map((style) => {
              const isSelected = selectedStyleId === style.id;
              return (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyleId(style.id)}
                  className={`w-full p-3.5 rounded-2xl text-left transition-all duration-300 flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-900/90 via-purple-950 to-[#1b0526] border-2 border-amber-400 shadow-xl shadow-amber-500/10'
                      : 'bg-purple-950/30 hover:bg-purple-900/40 border border-purple-900/60'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shrink-0 ${
                        isSelected
                          ? 'bg-amber-400 text-purple-950 shadow-md'
                          : 'bg-purple-900/60 text-purple-200 border border-purple-800'
                      }`}
                    >
                      {style.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <div className="font-extrabold text-sm text-white truncate">{style.name}</div>
                      <div className="text-[11px] text-purple-300/70 truncate">{style.tagline}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block font-mono">
                      {bpmMap[style.id] || 100} BPM
                    </span>
                    <span className="text-[10px] text-purple-400 capitalize">{style.intensity}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Dynamic Stage & Syllabus Viewport */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStyle.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#14061f] border border-purple-700/80 shadow-2xl relative overflow-hidden"
            >
              {/* Top Accent Rim & Crest Watermark */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400" />
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                <MadMoversLogo variant="crest" size="xl" className="w-56 h-56" />
              </div>

              {/* Viewport Header */}
              <div className="space-y-3 relative z-10 pb-6 border-b border-purple-900/60">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-400 text-purple-950">
                      {activeStyle.category}
                    </span>
                    <span className="text-xs text-purple-300 font-mono flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-amber-400" /> {activeStyle.intensity} Intensity
                    </span>
                  </div>

                  {/* Dynamic Sound BPM Meter */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-purple-950/80 border border-purple-800 text-xs font-mono text-amber-300">
                    <div className="flex items-center gap-0.5">
                      <span className="w-1 h-3 bg-amber-400 animate-pulse" />
                      <span className="w-1 h-4 bg-amber-300 animate-pulse delay-75" />
                      <span className="w-1 h-2 bg-amber-500 animate-pulse delay-150" />
                    </div>
                    <span>{bpmMap[activeStyle.id] || 100} BPM PULSE</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">{activeStyle.name}</h3>
                <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-medium">
                  {activeStyle.description}
                </p>
              </div>

              {/* Interactive Level Segmented Switcher */}
              <div className="py-6 space-y-3 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                    Curriculum Progression by Tier
                  </span>
                  <span className="text-[11px] text-amber-400 font-medium">
                    Adjusts teaching milestones
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-purple-950/60 border border-purple-900">
                  {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedLevel(lvl)}
                      className={`py-2 px-2 text-xs font-bold rounded-lg capitalize transition-all cursor-pointer ${
                        selectedLevel === lvl
                          ? 'bg-amber-400 text-purple-950 shadow-md font-black'
                          : 'text-purple-300 hover:text-white'
                      }`}
                    >
                      {lvl} Tier
                    </button>
                  ))}
                </div>

                {/* Level Specific Outcomes */}
                <div className="space-y-2 pt-2">
                  {levelSyllabus[selectedLevel].map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/40 border border-purple-900/50 text-xs text-purple-100"
                    >
                      <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructors & Logistics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4 border-t border-purple-900/60 text-xs relative z-10">
                <div className="flex items-center gap-2 text-purple-200">
                  <Users className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">Coaches: {activeStyle.leadInstructors.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-200">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{activeStyle.durationPerSession} / session</span>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-4 border-t border-purple-900/60 flex flex-col sm:flex-row items-center gap-3 relative z-10">
                <button
                  type="button"
                  onClick={() => onBookTrial(activeStyle.id)}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book Free Trial in {activeStyle.name.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
