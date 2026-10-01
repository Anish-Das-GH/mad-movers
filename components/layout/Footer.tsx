'use client';

import React from 'react';
import { BRANCHES } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';

interface FooterProps {
  onSelectBranch: (branchId: string) => void;
  onOpenTrialModal: () => void;
}

export function Footer({ onSelectBranch, onOpenTrialModal }: FooterProps) {
  return (
    <footer className="bg-[#08020b] border-t border-purple-900/80 text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-purple-900/60">
          {/* Brand Info & Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <MadMoversLogo variant="crest" size="sm" className="w-10 h-10" />
              <div>
                <span className="text-xl font-black tracking-wider uppercase text-white font-sans">
                  MAD <span className="text-amber-400">MOVERS</span>
                </span>
                <span className="text-[10px] block text-purple-300 font-semibold tracking-wider">
                  ESTD 2022 · DANCE & ACTIVITY CENTRE
                </span>
              </div>
            </div>

            <p className="text-xs text-purple-300/80 max-w-sm leading-relaxed">
              Eastern India’s premier multi-branch dance academy and holistic activity centre.
              Where street swagger, classical elegance, fitness, and tactical mind games converge.
            </p>

            <div className="p-3 rounded-2xl bg-purple-950/40 border border-purple-900/60 inline-block">
              <span className="text-[11px] font-bold tracking-widest uppercase text-amber-300 block font-mono">
                &ldquo;WORK LIKE A MAD TO MAKE YOURSELF GLAD&rdquo;
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-800 flex items-center justify-center text-purple-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Mad Movers Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-800 flex items-center justify-center text-purple-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Mad Movers YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-purple-950/70 border border-purple-800 flex items-center justify-center text-purple-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
                aria-label="Mad Movers Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Disciplines
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Hip-Hop & Urban Street</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Bolly-Hop Commercial</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Contemporary & Lyrical</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Kathak & Classical</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Power Yoga & Breathwork</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Zumba Dance Fitness</a></li>
              <li><a href="#styles" className="hover:text-amber-400 transition-colors">Chess Masters Academy</a></li>
            </ul>
          </div>

          {/* Studios / Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Our 4 Studios
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80">
              {BRANCHES.map((b) => (
                <li key={b.id}>
                  <button
                    onClick={() => {
                      onSelectBranch(b.id);
                      const el = document.getElementById('studios');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors text-left flex items-center gap-1 cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span>{b.name} ({b.area.split(',')[0]})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Support & Trial */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Studio Helpdesk
            </h4>
            <div className="space-y-2 text-xs text-purple-200/85">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+919831044521" className="hover:text-amber-400">
                  +91 98310 44521
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@madmovers.in</span>
              </div>
              <p className="text-[11px] text-purple-300/70 pt-1">
                Mon – Sun: 6:30 AM – 10:00 PM
              </p>
            </div>

            <button
              onClick={onOpenTrialModal}
              className="mt-3 w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow transition-all cursor-pointer"
            >
              Book Complimentary Trial
            </button>
          </div>
        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400/70">
          <div>
            © {new Date().getFullYear()} MAD MOVERS. Established 2022. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Studio Terms</a>
            <span>·</span>
            <a href="#" className="hover:text-amber-400 transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
