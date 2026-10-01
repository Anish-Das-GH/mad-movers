'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export function PressAndTrustBar() {
  return (
    <section className="border-b border-purple-900/60 bg-[#0d0213]/90 relative z-20">
      {/* Editorial Press Recognition Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-2 text-purple-300 font-bold uppercase tracking-wider text-[11px]">
          <span className="text-amber-400">AS FEATURED IN</span>
          <span className="text-purple-600">/</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-black tracking-wider uppercase text-purple-200/90 font-serif">
          <span className="hover:text-amber-300 transition-colors">The Telegraph</span>
          <span className="text-purple-700">·</span>
          <span className="hover:text-amber-300 transition-colors">Times of India</span>
          <span className="text-purple-700">·</span>
          <span className="hover:text-amber-300 transition-colors">India Today</span>
          <span className="text-purple-700">·</span>
          <span className="hover:text-amber-300 transition-colors">Sanmarg</span>
          <span className="text-purple-700">·</span>
          <span className="hover:text-amber-300 transition-colors">TTIS Kolkata</span>
        </div>
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-amber-400 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>ESTD 2022 · KOLKATA CYPHER HUB</span>
        </div>
      </div>

      {/* Google Reviews Trust Strip with Verified Student Quotes */}
      <div className="bg-[#12031a]/80 border-t border-purple-900/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Google Rating Badge */}
            <div className="flex items-center gap-3.5 pr-4 md:border-r border-purple-800/60">
              <div className="text-3xl font-black text-amber-400 font-mono tracking-tight">
                4.9<span className="text-lg text-purple-400">/5</span>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                  Google Verified Rating
                </div>
                <div className="text-[10px] text-purple-300/80">
                  1,480+ Reviews across 4 Studios
                </div>
              </div>
            </div>

            {/* Testimonial Quote 1 */}
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-xs relative">
              <Quote className="w-3 h-3 text-amber-400/40 absolute top-2 right-2" />
              <p className="text-purple-200/90 italic line-clamp-2 text-[11px] mb-1">
                &ldquo;The sprung wooden floor at Salt Lake is incredible for knees. Rohan Sir&apos;s hip-hop groove breakdown is unmatched in Eastern India.&rdquo;
              </p>
              <div className="text-[10px] font-bold text-amber-300">
                — Sagnik B. <span className="text-purple-400 font-normal">· Salt Lake Sector V</span>
              </div>
            </div>

            {/* Testimonial Quote 2 */}
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-xs relative">
              <Quote className="w-3 h-3 text-amber-400/40 absolute top-2 right-2" />
              <p className="text-purple-200/90 italic line-clamp-2 text-[11px] mb-1">
                &ldquo;The Loft at Park Street has a truly international dance studio vibe. Great contemporary floorwork and warm welcoming energy!&rdquo;
              </p>
              <div className="text-[10px] font-bold text-amber-300">
                — Deblina G. <span className="text-purple-400 font-normal">· Park Street Loft</span>
              </div>
            </div>

            {/* Testimonial Quote 3 */}
            <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 text-xs relative">
              <Quote className="w-3 h-3 text-amber-400/40 absolute top-2 right-2" />
              <p className="text-purple-200/90 italic line-clamp-2 text-[11px] mb-1">
                &ldquo;My 9yo son learns both Junior Hip-Hop and Chess here. His stamina and strategic focus have grown tremendously.&rdquo;
              </p>
              <div className="text-[10px] font-bold text-amber-300">
                — Megha Sen <span className="text-purple-400 font-normal">· New Town Arena</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
