'use client';

import React, { useState, useEffect } from 'react';
import { BRANCHES } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import { MapPin, ChevronDown, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  selectedBranchId: string;
  onSelectBranch: (branchId: string) => void;
  onOpenTrialModal: () => void;
}

export function Navbar({ selectedBranchId, onSelectBranch, onOpenTrialModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchDropdownOpen, setBranchDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeBranch = BRANCHES.find((b) => b.id === selectedBranchId) || BRANCHES[0];

  const navLinks = [
    { label: 'Styles', href: '#styles' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Batches', href: '#batches' },
    { label: 'Studios', href: '#studios' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e0414]/95 backdrop-blur-md border-b border-purple-900/60 shadow-xl py-3'
          : 'bg-gradient-to-b from-[#0e0414]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Single text element with logo crest) */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 via-purple-900/50 to-purple-950 border border-amber-400/40 shadow-md group-hover:border-amber-400 transition-colors">
              <MadMoversLogo variant="crest" size="sm" className="w-8 h-8" />
            </div>
            <span className="text-lg md:text-xl font-black tracking-wider text-white uppercase font-sans whitespace-nowrap">
              MAD <span className="text-amber-400">MOVERS</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Clean unboxed text links with hover underline) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold tracking-wide text-purple-200/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Branch Selector & Primary CTA */}
          <div className="flex items-center gap-3">
            {/* Multi-Branch Selector Dropdown */}
            <div className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setBranchDropdownOpen(!branchDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-800/80 text-xs font-semibold text-purple-200 transition-colors"
                aria-expanded={branchDropdownOpen}
                aria-haspopup="true"
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="truncate max-w-[120px]">{activeBranch.area.split(',')[0]}</span>
                <ChevronDown className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              </button>

              {branchDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#160620] border border-purple-600/40 shadow-2xl p-2 z-50 animate-fade-in text-xs">
                  <div className="px-2 py-1 text-[10px] font-bold text-amber-400 uppercase tracking-widest">
                    Switch Active Studio
                  </div>
                  {BRANCHES.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => {
                        onSelectBranch(b.id);
                        setBranchDropdownOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-xl transition-all flex items-center justify-between ${
                        selectedBranchId === b.id
                          ? 'bg-amber-400 text-purple-950 font-bold'
                          : 'text-purple-200 hover:bg-purple-900/50'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{b.name}</div>
                        <div className="text-[10px] opacity-75">{b.area}</div>
                      </div>
                      {selectedBranchId === b.id && <span className="text-xs">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={onOpenTrialModal}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-purple-950 font-extrabold text-xs uppercase tracking-wider shadow-md shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              Book Free Trial
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-purple-950/70 border border-purple-800 text-purple-200 lg:hidden hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#14061d] border border-purple-800/80 shadow-2xl space-y-4 animate-fade-in">
            {/* Mobile Branch Selector */}
            <div className="space-y-1.5 pb-3 border-b border-purple-900/60">
              <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                Select Your Nearest Studio
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onSelectBranch(b.id);
                    }}
                    className={`p-2 text-left rounded-lg text-xs transition-all ${
                      selectedBranchId === b.id
                        ? 'bg-amber-400 text-purple-950 font-bold'
                        : 'bg-purple-950/60 text-purple-200'
                    }`}
                  >
                    <div className="truncate font-semibold">{b.name.replace('Mad Movers ', '')}</div>
                    <div className="text-[9px] opacity-75 truncate">{b.area}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Links */}
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-purple-950/40 text-purple-200 hover:text-amber-400 hover:bg-purple-900/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-purple-300">
              <a
                href="tel:+919831044521"
                className="flex items-center gap-1.5 hover:text-amber-400"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 98310 44521</span>
              </a>
              <span className="text-amber-400/80 font-mono text-[10px]">Open 7 Days</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
