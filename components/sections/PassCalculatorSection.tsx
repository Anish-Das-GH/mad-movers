'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Shield, ArrowRight, IndianRupee, Zap, Gift } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface PassCalculatorSectionProps {
  onOpenTrialModal: () => void;
}

export function PassCalculatorSection({ onOpenTrialModal }: PassCalculatorSectionProps) {
  const [sessionsPerWeek, setSessionsPerWeek] = useState<number>(2);
  const [passDuration, setPassDuration] = useState<'monthly' | 'quarterly' | 'annual'>('quarterly');
  const [multiStudio, setMultiStudio] = useState<boolean>(true);

  // Price Calculation
  const baseMonthly = sessionsPerWeek === 1 ? 1600 : sessionsPerWeek === 2 ? 2500 : sessionsPerWeek === 3 ? 3200 : 4500;
  const multiStudioAddon = multiStudio ? 300 : 0;
  const monthlyTotal = baseMonthly + multiStudioAddon;

  let finalPrice = monthlyTotal;
  let savings = 0;

  if (passDuration === 'quarterly') {
    const raw = monthlyTotal * 3;
    finalPrice = Math.round(raw * 0.85);
    savings = raw - finalPrice;
  } else if (passDuration === 'annual') {
    const raw = monthlyTotal * 12;
    finalPrice = Math.round(raw * 0.7);
    savings = raw - finalPrice;
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#0b0310] via-[#160621] to-[#0d0412] border-y border-purple-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Zap className="w-4 h-4" />
            <span>Interactive Customizer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Build Your Custom <span className="text-amber-400">Movement Pass</span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/80 font-medium">
            Transparent pricing with zero hidden admission fees. Customize your weekly rhythm, studio access, and billing cycle.
          </p>
        </div>

        {/* Customizer Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#14061e] border border-purple-800/80 shadow-2xl space-y-6">
            {/* Frequency Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-300 flex items-center justify-between">
                <span>1. Training Frequency</span>
                <span className="text-amber-400 font-mono">
                  {sessionsPerWeek === 4 ? 'Unlimited Access' : `${sessionsPerWeek} Sessions / Week`}
                </span>
              </label>

              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setSessionsPerWeek(count)}
                    className={`py-3 px-2 rounded-xl text-xs font-black uppercase transition-all cursor-pointer ${
                      sessionsPerWeek === count
                        ? 'bg-amber-400 text-purple-950 shadow-md font-black'
                        : 'bg-purple-950/60 text-purple-300 hover:text-white border border-purple-900/80'
                    }`}
                  >
                    {count === 4 ? 'Unlimited' : `${count}x / wk`}
                  </button>
                ))}
              </div>
            </div>

            {/* Studio Passport Toggle */}
            <div className="space-y-2 pt-2 border-t border-purple-900/60">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-300 block">
                2. Studio Access
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setMultiStudio(false)}
                  className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer ${
                    !multiStudio
                      ? 'bg-purple-900/80 text-white border-amber-400/80'
                      : 'bg-purple-950/40 text-purple-300 border-purple-900'
                  }`}
                >
                  <div>Single Studio Hub</div>
                  <div className="text-[10px] text-purple-400/80 font-normal">Choose 1 fixed studio</div>
                </button>

                <button
                  type="button"
                  onClick={() => setMultiStudio(true)}
                  className={`p-3 rounded-xl text-left border text-xs font-bold transition-all cursor-pointer relative overflow-hidden ${
                    multiStudio
                      ? 'bg-gradient-to-r from-purple-900 to-purple-950 text-amber-300 border-amber-400 shadow-md'
                      : 'bg-purple-950/40 text-purple-300 border-purple-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>4-Studio Passport</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-purple-950 font-black">
                      POPULAR
                    </span>
                  </div>
                  <div className="text-[10px] text-purple-300/80 font-normal">Train in all 4 Kolkata hubs</div>
                </button>
              </div>
            </div>

            {/* Billing Cycle */}
            <div className="space-y-2 pt-2 border-t border-purple-900/60">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-300 block">
                3. Commitment Period
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['monthly', 'quarterly', 'annual'] as const).map((cycle) => (
                  <button
                    key={cycle}
                    type="button"
                    onClick={() => setPassDuration(cycle)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-bold capitalize transition-all cursor-pointer ${
                      passDuration === cycle
                        ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-purple-950 font-black shadow-md'
                        : 'bg-purple-950/50 text-purple-300 hover:text-white border border-purple-900/80'
                    }`}
                  >
                    <div>{cycle}</div>
                    <div className="text-[10px] opacity-80">
                      {cycle === 'quarterly' ? 'Save 15%' : cycle === 'annual' ? 'Save 30%' : 'Standard'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Included Value Points */}
            <div className="pt-2 border-t border-purple-900/60 space-y-1.5 text-xs text-purple-200">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Sprung hardwood dance floor access with injury prevention</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Free monthly community battle & cypher jam invitations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero registration or hidden locker maintenance fees</span>
              </div>
            </div>
          </div>

          {/* Real-time Pass Ticket (5 cols) */}
          <div className="lg:col-span-5">
            <motion.div
              layout
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#22072f] via-[#1a0525] to-[#12041b] border-2 border-amber-400 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-purple-800/80 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <MadMoversLogo variant="crest" size="sm" className="w-8 h-8" />
                  <div>
                    <span className="font-black text-sm tracking-wider text-white uppercase block">
                      MAD MOVERS PASS
                    </span>
                    <span className="text-[10px] text-amber-300 font-mono">ALL-DISCIPLINE TIER</span>
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
              </div>

              {/* Price Block */}
              <div className="space-y-1 mb-6">
                <span className="text-xs uppercase font-bold text-purple-300">Total Investment</span>
                <div className="flex items-baseline gap-1 text-3xl sm:text-4xl font-black text-amber-400 font-mono">
                  <IndianRupee className="w-6 h-6 inline" />
                  <span>{finalPrice.toLocaleString()}</span>
                  <span className="text-xs text-purple-300 font-normal ml-1">
                    / {passDuration}
                  </span>
                </div>

                {savings > 0 && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Instant savings of ₹{savings.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="p-3.5 rounded-2xl bg-purple-950/60 border border-purple-900/60 text-xs space-y-2 mb-6 text-purple-200">
                <div className="flex justify-between">
                  <span className="text-purple-400">Weekly Classes</span>
                  <span className="font-bold text-white">
                    {sessionsPerWeek === 4 ? 'Unlimited Sessions' : `${sessionsPerWeek} Sessions / Week`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Studio Reach</span>
                  <span className="font-bold text-amber-300">
                    {multiStudio ? 'All 4 Kolkata Hubs' : 'Single Studio Hub'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-purple-400">Billing Term</span>
                  <span className="font-bold text-white capitalize">{passDuration} Pass</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenTrialModal}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lock In Pass & Book Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
