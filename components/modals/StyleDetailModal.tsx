'use client';

import React from 'react';
import { DanceStyle } from '@/data/danceData';
import { X, Check, Flame, Clock, Users, Sparkles, ArrowRight } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface StyleDetailModalProps {
  style: DanceStyle | null;
  isOpen: boolean;
  onClose: () => void;
  onBookTrial: (styleId: string) => void;
}

export function StyleDetailModal({ style, isOpen, onClose, onBookTrial }: StyleDetailModalProps) {
  if (!isOpen || !style) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-[#14061e] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden text-white animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-purple-950/70 hover:bg-purple-900 border border-purple-800 text-purple-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Banner */}
        <div className="relative p-6 md:p-8 bg-gradient-to-r from-purple-950 via-[#360942] to-black border-b border-purple-900/60 overflow-hidden">
          <div className="absolute right-0 top-0 opacity-15 translate-x-6 -translate-y-6 pointer-events-none">
            <MadMoversLogo variant="crest" size="xl" className="w-48 h-48" />
          </div>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {style.category.toUpperCase()} DISCIPLINE
              </span>
              <span className="text-xs text-purple-300">·</span>
              <span className="text-xs text-purple-300 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-amber-400" /> {style.intensity} Energy
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-white">{style.name}</h2>
            <p className="text-xs md:text-sm text-purple-200/90 font-medium max-w-lg">
              {style.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Discipline Overview
            </h4>
            <p className="text-xs md:text-sm text-purple-200/80 leading-relaxed">
              {style.description}
            </p>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-purple-950/40 border border-purple-900/60">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-purple-300/70 block uppercase font-medium">Session Duration</span>
                <span className="text-xs font-bold text-white">{style.durationPerSession}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-purple-400/10 text-purple-400">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-purple-300/70 block uppercase font-medium">Suitable For</span>
                <span className="text-xs font-bold text-white truncate block">{style.suitability}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-purple-300/70 block uppercase font-medium">Lead Coaches</span>
                <span className="text-xs font-bold text-white truncate block">{style.leadInstructors.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Curriculum */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Key Syllabus & Techniques Covered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {style.curriculum.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-purple-950/30 border border-purple-900/40 text-xs text-purple-100"
                >
                  <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-purple-900/60">
            <button
              onClick={() => {
                onClose();
                onBookTrial(style.id);
              }}
              className="flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer transition-all"
            >
              <span>Book Complimentary Trial in {style.name.split(' ')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="py-3.5 px-6 rounded-xl bg-purple-950/60 hover:bg-purple-900 border border-purple-800 font-bold text-xs uppercase tracking-wider text-purple-200 transition-colors"
            >
              Back to Styles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
