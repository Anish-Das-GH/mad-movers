'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BRANCHES, DANCE_STYLES } from '@/data/danceData';
import { CheckCircle2, Calendar, MapPin, Sparkles, X, User, Phone, Mail } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface BookTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranchId?: string;
  defaultStyleId?: string;
}

export function BookTrialModal({
  isOpen,
  onClose,
  defaultBranchId = 'salt-lake',
  defaultStyleId = 'hip-hop',
}: BookTrialModalProps) {
  const [selectedBranch, setSelectedBranch] = useState(defaultBranchId);
  const [selectedStyle, setSelectedStyle] = useState(defaultStyleId);
  const [selectedSlot, setSelectedSlot] = useState('Evening (6:00 PM – 8:00 PM)');
  const [experienceLevel, setExperienceLevel] = useState<'beginner' | 'some' | 'advanced'>('beginner');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;

    const code = `MM-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassCode(code);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#7e22ce', '#ffffff', '#fbbf24'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const branchObj = BRANCHES.find((b) => b.id === selectedBranch) || BRANCHES[0];
  const styleObj = DANCE_STYLES.find((s) => s.id === selectedStyle) || DANCE_STYLES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-[#12051a] border border-purple-500/30 rounded-3xl shadow-2xl overflow-hidden text-white animate-fade-in">
        {/* Modal Glow Accent */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-purple-950/60 hover:bg-purple-900 border border-purple-800 text-purple-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 bg-amber-500/30 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-purple-950 shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Trial Pass Confirmed
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                You’re Ready to Move, {fullName.split(' ')[0]}!
              </h3>
              <p className="text-sm text-purple-200/80 max-w-md mx-auto">
                Your complimentary trial session at <strong className="text-amber-300">{branchObj.name}</strong> is reserved.
              </p>
            </div>

            {/* Pass Ticket Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-purple-950/80 to-[#1e072a] border border-amber-400/40 text-left space-y-3 shadow-inner">
              <div className="flex items-center justify-between border-b border-purple-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <MadMoversLogo variant="crest" size="sm" className="w-7 h-7" />
                  <span className="font-black text-sm tracking-wider text-white">MAD MOVERS PASS</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-purple-950 text-xs font-mono font-bold">
                  {passCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-purple-300/70 block">Discipline</span>
                  <span className="font-semibold text-white">{styleObj.name}</span>
                </div>
                <div>
                  <span className="text-purple-300/70 block">Studio Location</span>
                  <span className="font-semibold text-white">{branchObj.area}</span>
                </div>
                <div>
                  <span className="text-purple-300/70 block">Preferred Slot</span>
                  <span className="font-semibold text-white">{selectedSlot}</span>
                </div>
                <div>
                  <span className="text-purple-300/70 block">What to Bring</span>
                  <span className="font-semibold text-amber-300">Clean Shoes & Water</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-purple-300/70 border-t border-purple-900/50">
                📍 {branchObj.address}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/919831044521?text=${encodeURIComponent(
                  `Hi Mad Movers! I just booked a trial pass (${passCode}) for ${styleObj.name} at ${branchObj.name}. Can you confirm my slot details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                Confirm on WhatsApp
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-700 font-bold text-xs uppercase tracking-wider text-purple-200 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            {/* Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commitment · 100% Energetic</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Book Your Complimentary Trial Class
              </h2>
              <p className="text-xs text-purple-200/70">
                Experience our high-energy teachers, sprung dance floors, and infectious studio vibe.
              </p>
            </div>

            {/* Branch Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-purple-200 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Select Studio Branch
              </label>
              <div className="grid grid-cols-2 gap-2">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelectedBranch(b.id)}
                    className={`p-2.5 text-left rounded-xl border text-xs transition-all ${
                      selectedBranch === b.id
                        ? 'bg-amber-500/15 border-amber-400 text-white font-semibold'
                        : 'bg-purple-950/40 border-purple-900/60 text-purple-300 hover:border-purple-700'
                    }`}
                  >
                    <div className="truncate font-bold">{b.name}</div>
                    <div className="text-[10px] text-purple-300/70 truncate">{b.area}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Style Selection */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-purple-200">
                Choose Discipline / Dance Style
              </label>
              <select
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800 text-white text-xs font-medium focus:outline-none focus:border-amber-400"
              >
                {DANCE_STYLES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#190623] text-white">
                    {s.name} ({s.suitability})
                  </option>
                ))}
              </select>
            </div>

            {/* Slot & Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-purple-200 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" /> Preferred Slot
                </label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-purple-950/60 border border-purple-800 text-white text-xs focus:outline-none focus:border-amber-400"
                >
                  <option>Morning (7:00 AM – 9:00 AM)</option>
                  <option>Afternoon (4:00 PM – 6:00 PM)</option>
                  <option>Evening (6:00 PM – 8:00 PM)</option>
                  <option>Weekend Special (Sat / Sun)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-purple-200">Experience Level</label>
                <div className="grid grid-cols-3 gap-1">
                  {(['beginner', 'some', 'advanced'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setExperienceLevel(lvl)}
                      className={`py-2 px-1 text-[11px] text-center rounded-lg border capitalize transition-all ${
                        experienceLevel === lvl
                          ? 'bg-amber-400 text-purple-950 font-bold border-amber-300'
                          : 'bg-purple-950/40 border-purple-900 text-purple-300 hover:text-white'
                      }`}
                    >
                      {lvl === 'beginner' ? 'First Timer' : lvl === 'some' ? 'Intermediate' : 'Pro'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2 pt-1 border-t border-purple-900/50">
              <div className="relative">
                <User className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800 text-white placeholder-purple-400/50 text-xs focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="relative">
                  <Phone className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800 text-white placeholder-purple-400/50 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-purple-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="Email Address (Optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800 text-white placeholder-purple-400/50 text-xs focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-[0.99] transition-all cursor-pointer"
            >
              Confirm Free Trial Class
            </button>
            <p className="text-[11px] text-center text-purple-300/60">
              No credit card required. Free cancellation or rescheduling anytime.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
