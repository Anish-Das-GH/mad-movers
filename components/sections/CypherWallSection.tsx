'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Flame, Sparkles, Send, Heart, Zap, Award } from 'lucide-react';
import { MadMoversLogo } from '../logo/MadMoversLogo';

interface CypherReview {
  id: string;
  name: string;
  batch: string;
  studio: string;
  avatarLetter: string;
  quote: string;
  rating: number;
  highlight: string;
  reactions: { fire: number; energy: number };
}

const INITIAL_REVIEWS: CypherReview[] = [
  {
    id: 'cr-1',
    name: 'Sagnik Bhattacharya',
    batch: 'Urban Hip-Hop Crew',
    studio: 'Salt Lake Sector V',
    avatarLetter: 'S',
    quote:
      'I had zero dance background when I walked into Mad Movers in 2023. The way Rohan Sir breaks down bounce and pocket timing changed everything. The sprung wooden floor also prevents knee burnout after 2 hours of cyphers!',
    rating: 5,
    highlight: 'Went from beginner to performing at Kolkata Cypher Championship',
    reactions: { fire: 42, energy: 28 },
  },
  {
    id: 'cr-2',
    name: 'Pooja Agarwal',
    batch: 'Kathak & Semi-Classical',
    studio: 'Ballygunge Sanctum',
    avatarLetter: 'P',
    quote:
      'Finding a studio that respects pure Gharana tatkar traditions while maintaining such energetic contemporary spirit is rare in Kolkata. Vidushi Ananya Roy is a living treasure.',
    rating: 5,
    highlight: 'Overcame balance fear in 16-count chakkars',
    reactions: { fire: 35, energy: 19 },
  },
  {
    id: 'cr-3',
    name: 'Rahul & Megha Sen (Parents)',
    batch: 'Junior Movers & Chess Hub',
    studio: 'New Town Arena',
    avatarLetter: 'R',
    quote:
      'Our 8-year-old son attends both the Kids Dance Class and the Chess Masters Academy here. Balancing athletic movement with tactical chess calculation has dramatically improved his concentration in school!',
    rating: 5,
    highlight: 'The only academy that fuses physical dance with mind sports',
    reactions: { fire: 64, energy: 51 },
  },
  {
    id: 'cr-4',
    name: 'Deblina Ghosh',
    batch: 'Contemporary Floorwork',
    studio: 'Park Street Loft',
    avatarLetter: 'D',
    quote:
      'The Loft at Park Street has the most magnificent artistic energy. Prerna Ma’am taught me how to glide and release weight into the floor without a single bruise. Truly transformative.',
    rating: 5,
    highlight: 'Fluidity and emotional confidence unlocked',
    reactions: { fire: 29, energy: 24 },
  },
];

export function CypherWallSection() {
  const [reviews, setReviews] = useState<CypherReview[]>(INITIAL_REVIEWS);
  const [showAddForm, setShowAddForm] = useState(false);
  const [name, setName] = useState('');
  const [batch, setBatch] = useState('Urban Hip-Hop');
  const [studio, setStudio] = useState('Salt Lake');
  const [quote, setQuote] = useState('');
  const [highlight, setHighlight] = useState('');

  const handleReaction = (id: string, type: 'fire' | 'energy') => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            reactions: {
              ...r.reactions,
              [type]: r.reactions[type] + 1,
            },
          };
        }
        return r;
      })
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    const newRev: CypherReview = {
      id: `cr-${Date.now()}`,
      name: name.trim(),
      batch,
      studio,
      avatarLetter: name.trim().charAt(0).toUpperCase(),
      quote: quote.trim(),
      rating: 5,
      highlight: highlight.trim() || 'New Mad Mover Breakthrough',
      reactions: { fire: 1, energy: 1 },
    };

    setReviews([newRev, ...reviews]);
    setName('');
    setQuote('');
    setHighlight('');
    setShowAddForm(false);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
            <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Real Movers · Real Transformation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            The Cypher <span className="text-amber-400">Wall of Fame</span>
          </h2>
          <p className="text-sm md:text-base text-purple-200/80 max-w-xl font-medium">
            Read unfiltered stories from working professionals, classical artists, teenagers, and parents who found their groove at Mad Movers.
          </p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="py-3 px-5 rounded-xl bg-purple-900/80 hover:bg-purple-800 border border-purple-700 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all self-start md:self-end flex items-center gap-2 cursor-pointer shadow-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{showAddForm ? 'Close Feedback Box' : 'Drop Your Studio Story'}</span>
        </button>
      </div>

      {/* Drop Story Form */}
      {showAddForm && (
        <form
          onSubmit={handleAddReview}
          className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#160621] border border-amber-400/40 shadow-2xl space-y-4 animate-fade-in"
        >
          <div className="flex items-center justify-between pb-2 border-b border-purple-900">
            <h3 className="text-base font-bold text-white">Share Your Mad Movement Experience</h3>
            <span className="text-xs text-amber-400">Live on the studio wall</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-[11px] font-semibold text-purple-300 block mb-1">Your Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sagnik B."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="text-[11px] font-semibold text-purple-300 block mb-1">Enrolled Batch</label>
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs focus:outline-none focus:border-amber-400"
              >
                <option>Urban Hip-Hop Crew</option>
                <option>Bolly-Hop Commercial</option>
                <option>Contemporary Floorwork</option>
                <option>Kathak Classical</option>
                <option>Power Yoga & Flow</option>
                <option>Zumba Fitness</option>
                <option>Kids Movement & Chess</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-semibold text-purple-300 block mb-1">Primary Studio</label>
              <select
                value={studio}
                onChange={(e) => setStudio(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs focus:outline-none focus:border-amber-400"
              >
                <option>Salt Lake Sector V</option>
                <option>Park Street Loft</option>
                <option>New Town Arena</option>
                <option>Ballygunge Sanctum</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-purple-300 block mb-1">Single Breakthrough / Key Highlight</label>
            <input
              type="text"
              placeholder="e.g. Lost 5 kgs and learned stage choreography in 8 weeks!"
              value={highlight}
              onChange={(e) => setHighlight(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-purple-300 block mb-1">Your Story</label>
            <textarea
              required
              rows={3}
              placeholder="How has moving at Mad Movers helped your body, mind, or confidence?"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 rounded-xl bg-purple-950 text-purple-300 text-xs font-semibold hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post on Wall</span>
            </button>
          </div>
        </form>
      )}

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((rev) => (
          <motion.div
            key={rev.id}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="p-6 sm:p-8 rounded-3xl bg-[#14061e] border border-purple-800/80 hover:border-amber-400/70 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="space-y-4">
              {/* Top Row: Author lockup & batch */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-purple-600 text-purple-950 font-black text-sm flex items-center justify-center shrink-0 shadow-md">
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-white">{rev.name}</h3>
                    <div className="text-[11px] text-purple-300/80">
                      {rev.batch} · <span className="text-amber-400 font-medium">{rev.studio}</span>
                    </div>
                  </div>
                </div>

                <div className="flex text-amber-400 text-xs tracking-wider">
                  {'★'.repeat(rev.rating)}
                </div>
              </div>

              {/* Highlight pill */}
              <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-900/60 text-xs text-amber-300 font-medium">
                🎯 {rev.highlight}
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed font-normal">
                &ldquo;{rev.quote}&rdquo;
              </p>
            </div>

            {/* Reactions bottom */}
            <div className="pt-4 mt-4 border-t border-purple-900/60 flex items-center justify-between text-xs">
              <span className="text-[11px] text-purple-400 font-mono">VERIFIED MAD MOVER</span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleReaction(rev.id, 'fire')}
                  className="px-2.5 py-1 rounded-lg bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-200 hover:text-amber-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono text-[11px] font-bold">{rev.reactions.fire}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleReaction(rev.id, 'energy')}
                  className="px-2.5 py-1 rounded-lg bg-purple-950 hover:bg-purple-900 border border-purple-800 text-purple-200 hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="font-mono text-[11px] font-bold">{rev.reactions.energy}</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
