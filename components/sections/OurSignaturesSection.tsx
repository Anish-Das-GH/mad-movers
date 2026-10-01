'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Flame, Users, Zap, Disc3 } from 'lucide-react';

interface OurSignaturesSectionProps {
  onOpenTrialModal: () => void;
  onExploreEvents: () => void;
}

export function OurSignaturesSection({
  onOpenTrialModal,
  onExploreEvents,
}: OurSignaturesSectionProps) {
  const signatures = [
    {
      kicker: 'ANNUAL PARTY · MAIN STAGE',
      title: 'Get On The Dance Floor',
      desc: 'Eat, Perform, Play. Senior crew dancers, junior batches, instructors, and a live DJ — Kolkata’s wildest studio cypher celebration on concert stage lighting.',
      buttonText: 'See The Gala Legacy →',
      action: onExploreEvents,
      cardBg: 'from-[#ff416c] to-[#ff4b2b]',
      textColor: 'text-white',
      badgeBg: 'bg-black/30 text-white border-white/20',
      icon: Flame,
    },
    {
      kicker: 'JUNIOR STAGE · AGES 4–15',
      title: 'Junior Dancing Wonder',
      desc: 'Not an exam. Not an audition. A non-competitive red-carpet stage at EZCC Kolkata where every child performs, gains confidence, and shines under stage spotlights.',
      buttonText: 'Register Your Child →',
      action: onOpenTrialModal,
      cardBg: 'from-[#4776e6] to-[#8e54e9]',
      textColor: 'text-white',
      badgeBg: 'bg-black/30 text-white border-white/20',
      icon: Users,
    },
    {
      kicker: 'WALK-IN · POP-UP CYPHER',
      title: 'Choreo Shots (Walk-In)',
      desc: 'Walk in any Saturday or Sunday. Learn a complete, viral choreography routine in 90 minutes. Shoot a 4K studio reel with the choreographer. No annual lock-in.',
      buttonText: 'Find Next Choreo Shot →',
      action: onOpenTrialModal,
      cardBg: 'from-[#141416] via-[#1f1a24] to-[#12081a]',
      border: 'border border-purple-700/60 hover:border-amber-400',
      textColor: 'text-white',
      badgeBg: 'bg-amber-400/20 text-amber-300 border-amber-400/30',
      icon: Zap,
    },
    {
      kicker: 'MASTERCLASSES · GUEST FACULTY',
      title: 'Celebrity Drop Workshops',
      desc: 'Learn directly from India’s top battle judges, Bollywood choreographers, and reality show mentors who fly in exclusively to Mad Movers Kolkata studios.',
      buttonText: 'Browse Upcoming Drops →',
      action: onExploreEvents,
      cardBg: 'from-[#f7971e] to-[#ffd200]',
      textColor: 'text-purple-950',
      badgeBg: 'bg-purple-950/20 text-purple-950 border-purple-950/20 font-black',
      icon: Disc3,
    },
  ];

  return (
    <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>OUR SIGNATURES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
          Four Ways to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            Take The Floor.
          </span>
        </h2>
        <p className="text-sm sm:text-base text-purple-200/90 font-medium">
          4 studios across Kolkata. Over 15,000 movers trained. Four movement traditions only Mad Movers runs.
        </p>
      </div>

      {/* 4 Colored Signature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {signatures.map((sig, idx) => {
          const Icon = sig.icon;
          return (
            <motion.div
              key={sig.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`p-6 sm:p-7 rounded-3xl bg-gradient-to-b ${sig.cardBg} ${
                sig.border || ''
              } shadow-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] min-h-[380px]`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${sig.badgeBg}`}
                  >
                    {sig.kicker}
                  </span>
                  <Icon className={`w-5 h-5 ${sig.textColor} opacity-90`} />
                </div>

                <h3 className={`text-2xl font-black uppercase tracking-tight ${sig.textColor} leading-tight`}>
                  {sig.title}
                </h3>

                <p className={`text-xs ${sig.textColor} opacity-90 leading-relaxed font-medium`}>
                  {sig.desc}
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={sig.action}
                  className={`w-full py-3 px-4 rounded-2xl bg-black/30 hover:bg-black/50 backdrop-blur-md border border-white/20 ${sig.textColor} font-black text-xs uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer group-hover:scale-102`}
                >
                  <span>{sig.buttonText}</span>
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
