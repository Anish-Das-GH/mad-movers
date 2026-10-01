'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Workshop } from '@/data/danceData';
import { CheckCircle2, Ticket, X, Calendar, Clock, MapPin, IndianRupee } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface WorkshopBookingModalProps {
  workshop: Workshop | null;
  isOpen: boolean;
  onClose: () => void;
}

export function WorkshopBookingModal({ workshop, isOpen, onClose }: WorkshopBookingModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [ticketsCount, setTicketsCount] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen || !workshop) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const ref = `WS-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(ref);
    setIsSuccess(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#ec4899', '#7e22ce', '#38bdf8'],
      });
    } catch {
      // Confetti fallback
    }
  };

  const totalAmount = workshop.fee * ticketsCount;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg my-8 bg-[#13051d] border border-amber-400/40 rounded-3xl shadow-2xl overflow-hidden text-white animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-purple-950/70 hover:bg-purple-900 border border-purple-800 text-purple-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-amber-400 text-purple-950 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <CheckCircle2 className="w-10 h-10" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400">
                Masterclass Pass Reserved
              </span>
              <h3 className="text-2xl font-black text-white">You’re On the Guestlist!</h3>
              <p className="text-xs text-purple-200/80">
                {name}, your workshop spot for <strong className="text-amber-300">{workshop.title}</strong> by <strong className="text-white">{workshop.artist}</strong> has been provisionally reserved.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-800/80 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-purple-800">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Ticket className="w-3.5 h-3.5 text-amber-400" /> PASS REF
                </span>
                <span className="font-mono font-bold text-amber-400">{bookingRef}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300/70">Seats</span>
                <span className="font-semibold text-white">{ticketsCount} Pass{ticketsCount > 1 ? 'es' : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300/70">Total Fee</span>
                <span className="font-semibold text-amber-300">₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300/70">Venue</span>
                <span className="font-semibold text-white">{workshop.branchName}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/919831044521?text=${encodeURIComponent(
                  `Hi Mad Movers Team! I have reserved a spot for the ${workshop.title} with Ref ${bookingRef}. Please share UPI / payment link for ₹${totalAmount}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-bold text-xs uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                Complete Payment via WhatsApp
              </a>
              <button
                onClick={onClose}
                className="py-3 px-6 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-700 font-bold text-xs uppercase tracking-wider text-purple-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
            <div className="flex items-center gap-2.5 pb-2 border-b border-purple-900/50">
              <MadMoversLogo variant="crest" size="sm" className="w-7 h-7" />
              <div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber-400 block">
                  Intensive Masterclass
                </span>
                <h3 className="text-lg font-black text-white">{workshop.title}</h3>
              </div>
            </div>

            {/* Quick Meta */}
            <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-purple-950/40 border border-purple-900/50 text-xs">
              <div className="flex items-center gap-1.5 text-purple-200">
                <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{workshop.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-purple-200">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{workshop.time}</span>
              </div>
              <div className="col-span-2 flex items-center gap-1.5 text-purple-200">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate">{workshop.branchName}</span>
              </div>
            </div>

            {/* Ticket Counter */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-purple-950/40 border border-purple-900/50">
              <div>
                <div className="text-xs font-semibold text-white">Tickets</div>
                <div className="text-[11px] text-amber-400 font-bold">₹{workshop.fee} per dancer</div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setTicketsCount(Math.max(1, ticketsCount - 1))}
                  className="w-8 h-8 rounded-lg bg-purple-900 hover:bg-purple-800 text-white font-bold flex items-center justify-center transition-colors"
                >
                  -
                </button>
                <span className="font-mono font-bold text-sm w-4 text-center">{ticketsCount}</span>
                <button
                  type="button"
                  onClick={() => setTicketsCount(Math.min(workshop.remainingSeats, ticketsCount + 1))}
                  className="w-8 h-8 rounded-lg bg-purple-900 hover:bg-purple-800 text-white font-bold flex items-center justify-center transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* User Form */}
            <div className="space-y-3">
              <div>
                <label className="text-[11px] font-semibold text-purple-300 block mb-1">
                  Full Name of Participant
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter dancer's name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-purple-300 block mb-1">
                  WhatsApp Contact Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-purple-950/60 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            {/* Total and CTA */}
            <div className="pt-2 border-t border-purple-900/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-purple-300">Total Payable:</span>
                <span className="text-lg font-black text-amber-400 flex items-center">
                  <IndianRupee className="w-4 h-4 inline" /> {totalAmount.toLocaleString()}
                </span>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-[0.99] transition-all cursor-pointer"
              >
                Reserve {ticketsCount} Spot{ticketsCount > 1 ? 's' : ''} Now
              </button>
              <p className="text-[10px] text-center text-purple-300/60 mt-2">
                ⚡ Only {workshop.remainingSeats} slots left in this masterclass.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
