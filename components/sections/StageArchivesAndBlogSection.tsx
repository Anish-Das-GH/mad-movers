'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Film, Calendar, Clock } from 'lucide-react';

interface StageArchivesAndBlogSectionProps {
  onOpenTrialModal: () => void;
}

export function StageArchivesAndBlogSection({
  onOpenTrialModal,
}: StageArchivesAndBlogSectionProps) {
  const archives = [
    {
      tag: 'TRAINING PRACTICUM',
      title: 'Professional Teacher Apprenticeship & Pedagogy',
      desc: 'Inside our Salt Lake flagship studio — certified educators mastering kinesiology, count timing, and stage direction.',
      year: 'Season 2025–2026',
      color: 'border-purple-600/70',
    },
    {
      tag: 'CELEBRITY MASTERCLASS',
      title: 'All-India Guest Choreographer Drop & Cypher Jam',
      desc: '120 dancers packed onto our sprung wooden floor for an explosive 3-hour urban intensive and battle cypher.',
      year: 'Winter Intensive',
      color: 'border-amber-400/70',
    },
    {
      tag: 'SUMMER CAMP',
      title: 'Junior Movement & Chess Bootcamp (Ages 4–14)',
      desc: 'Combining morning popping isolations with afternoon FIDE tactical puzzle drills at New Town Arena.',
      year: 'Summer Academy',
      color: 'border-cyan-400/70',
    },
    {
      tag: 'STAGE GALA EZCC',
      title: 'Get On The Dance Floor · 4K Concert Showcase',
      desc: '450+ students performing before a packed 900-seat auditorium with intelligent stage beam lighting.',
      year: 'Annual Spectacle',
      color: 'border-fuchsia-400/70',
    },
  ];

  const blogPosts = [
    {
      category: 'SANGEET & WEDDINGS',
      title: 'Annual Day & Sangeet Choreography: 30 Top Songs for 2026',
      summary:
        'Plan your school annual day or wedding sangeet with songs mapped by difficulty, tempo, and family group formations.',
      date: 'Jan 2026',
      readTime: '4 min read',
    },
    {
      category: 'FITNESS & HEALTH',
      title: 'Why Sprung Wooden Floors are Essential for Dancers’ Joints & Stamina',
      summary:
        'Dancing on concrete causes micro-fractures in knees. Discover how triple-cushioned sprung floors protect your longevity.',
      date: 'Feb 2026',
      readTime: '5 min read',
    },
    {
      category: 'MIND & MOVEMENT',
      title: 'How Chess Strategy & Dance Rhythm Synchronize Cognitive Brain Stamina',
      summary:
        'Why world-class dancers and chess masters share heightened spatial awareness and split-second calculation speed.',
      date: 'Mar 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* 1. Stage Moments: From Our Archives */}
      <div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
              <Film className="w-4 h-4 text-amber-400" />
              <span>STAGE MOMENTS · HISTORIC REELS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
              From Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Archives.
              </span>
            </h2>
            <p className="text-sm md:text-base text-purple-200/90 max-w-xl font-medium">
              Over 3 years of unforgettable stage debuts, high-voltage celebrity masterclasses, and community cyphers across Kolkata.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="py-2.5 px-5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/80 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all self-start md:self-end flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore The Movement Lineage →</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {archives.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-3xl bg-gradient-to-b from-[#180524] to-[#0f0217] border ${item.color} shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-amber-300 font-bold">
                  <span>{item.tag}</span>
                  <span className="text-purple-400">{item.year}</span>
                </div>
                <h4 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-purple-200/80 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-purple-900/50">
                <span className="text-[11px] font-mono text-amber-400 font-semibold group-hover:underline cursor-pointer">
                  View Cypher Gallery →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Latest From the Studio Blog / Guides */}
      <div className="pt-10 border-t border-purple-900/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>FROM THE STUDIO · MOVEMENT GUIDES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
              Latest On The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Movement Blog.
              </span>
            </h2>
            <p className="text-sm md:text-base text-purple-200/90 max-w-xl font-medium">
              Choreography breakdowns, health tips for dancers, sangeet planning playbooks, and chess rhythm insights.
            </p>
          </div>

          <button
            onClick={onOpenTrialModal}
            className="py-2.5 px-5 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-700/80 text-amber-300 font-bold text-xs uppercase tracking-wider transition-all self-start md:self-end flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>View All Editorial Guides →</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#1c0628] to-[#12031a] border border-purple-800/70 hover:border-amber-400/80 shadow-xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-amber-400 font-bold">{post.category}</span>
                  <span className="text-purple-400">{post.readTime}</span>
                </div>
                <h4 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {post.title}
                </h4>
                <p className="text-xs text-purple-200/80 leading-relaxed font-medium">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-purple-900/50 flex items-center justify-between text-xs">
                <span className="text-purple-400 font-mono text-[11px]">{post.date}</span>
                <span className="text-amber-400 font-bold group-hover:underline cursor-pointer">
                  Read Full Guide →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
