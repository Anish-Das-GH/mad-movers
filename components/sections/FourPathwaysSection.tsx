'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, GraduationCap, Flame, Award, Brain, Check } from 'lucide-react';

interface FourPathwaysSectionProps {
  onOpenTrialModal: () => void;
  onExploreStyles: () => void;
}

export function FourPathwaysSection({ onOpenTrialModal, onExploreStyles }: FourPathwaysSectionProps) {
  const pathways = [
    {
      badge: 'AGES 4 – 18',
      badgeColor: 'bg-purple-900/90 text-purple-200 border-purple-700/80',
      title: 'Movement Academy',
      subtitle: 'Structured curriculum with 6 progressive grade levels.',
      desc: 'Annual certifications, stage recitals at EZCC Kolkata, and technical foundation in Hip-Hop, Contemporary, and Kathak Gharana.',
      features: ['Progressive Syllabus', 'Annual Stage Recitals', 'Zero-Injury Sprung Floor'],
      cta: 'Explore Academy Syllabus',
      action: onExploreStyles,
      glow: 'group-hover:border-purple-500/80',
      icon: GraduationCap,
      accent: 'text-purple-300',
    },
    {
      badge: '18+ ALL WELCOME',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      title: 'Open Dance Studios',
      subtitle: 'Drop-in classes, open cyphers, and high-energy dance fitness.',
      desc: 'No annual lock-in commitment. Book drop-in passes for Bolly-Hop, Popping, House, Zumba, and power conditioning whenever you want to move.',
      features: ['Drop-in Flexibility', 'Evening & Weekend Batches', 'Beginner to Advanced'],
      cta: 'View Drop-In Batches',
      action: onOpenTrialModal,
      glow: 'group-hover:border-amber-400',
      icon: Flame,
      accent: 'text-amber-400',
    },
    {
      badge: 'CERTIFIED DIPLOMA',
      badgeColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/40',
      title: 'Teacher Apprenticeship',
      subtitle: 'Professional choreographer & instructor training program.',
      desc: 'Master the pedagogy of movement, anatomy, musicality, and stage direction under national champions and seasoned studio directors.',
      features: ['Teaching Practicum', 'Studio Placement Assistance', 'Choreography Portfolio'],
      cta: 'Apply for Apprenticeship',
      action: onOpenTrialModal,
      glow: 'group-hover:border-fuchsia-400',
      icon: Award,
      accent: 'text-fuchsia-400',
    },
    {
      badge: 'MIND & BODY WING',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      title: 'FIDE Chess & Rhythmic Lab',
      subtitle: 'Tactical brain sport combined with physical rhythm agility.',
      desc: 'Train with official FIDE-rated chess masters while exploring percussion, cajon, and mind-body coordination for laser-sharp focus.',
      features: ['FIDE Rated Mentors', 'Cognitive Agility Drills', 'Cajon Rhythm Percussion'],
      cta: 'Explore Activity Wing',
      action: onOpenTrialModal,
      glow: 'group-hover:border-cyan-400',
      icon: Brain,
      accent: 'text-cyan-400',
    },
  ];

  return (
    <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>FIND YOUR MOVEMENT PATHWAY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          One Brand.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            Four Ways to Move.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-purple-200/90 font-medium">
          Whether you are a parent enrolling your child, an adult finding joy in fitness, an aspiring stage dancer, or a chess enthusiast — there is a dedicated track at Mad Movers for you.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pathways.map((p, idx) => {
          const Icon = p.icon;
          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`p-6 rounded-3xl bg-gradient-to-b from-[#180524] to-[#0f0217] border border-purple-800/60 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${p.glow}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                  <Icon className={`w-5 h-5 ${p.accent}`} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-amber-300/90 font-bold">{p.subtitle}</p>
                </div>

                <p className="text-xs text-purple-200/80 leading-relaxed font-medium">
                  {p.desc}
                </p>

                <div className="pt-2 space-y-1.5 border-t border-purple-900/60">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-[11px] text-purple-300/90">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-purple-900/40">
                <button
                  onClick={p.action}
                  className="w-full py-2.5 px-4 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/80 hover:border-amber-400 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer group-hover:text-amber-300"
                >
                  <span>{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
