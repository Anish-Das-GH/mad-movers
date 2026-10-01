'use client';

import React, { useState } from 'react';
import { BRANCHES } from '@/data/danceData';
import { MadMoversLogo } from '../logo/MadMoversLogo';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

export function AboutStorySection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: 'salt-lake',
    interest: 'Regular Dance Classes',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d0413] via-[#14061d] to-[#0a030f] border-t border-purple-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center mb-2">
            <MadMoversLogo variant="crest" size="md" className="w-14 h-14" />
          </div>

          <div className="text-xs font-bold uppercase tracking-widest text-amber-400">
            About Mad Movers · ESTD 2022
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-sans tracking-tight">
            Work Like a Mad to <span className="text-amber-400">Make Yourself Glad</span>
          </h2>

          <p className="text-sm md:text-base text-purple-200/85 leading-relaxed font-medium">
            Founded with a singular mission: to make world-class movement training accessible, infectious, and transformative.
            Unlike conventional dance academies, Mad Movers was created as an integrated activity sanctuary — where explosive street dance, soulful Indian classical roots, restorative yoga, and tactical chess mastery coexist under one roof across Kolkata.
          </p>
        </div>

        {/* 4 Brand Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-20">
          <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-900/50 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">01. SpringFlex Floors</div>
            <h3 className="text-base font-bold text-white">Injury-Free Dancing</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Every Mad Movers studio is fitted with multi-layer sprung wooden floors that absorb 65% of foot impact, protecting joints and knees.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-900/50 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">02. Mind & Body Synthesis</div>
            <h3 className="text-base font-bold text-white">Dance Meets Chess</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Reflected in our crest: we cultivate both explosive physical agility and razor-sharp mental calm through dedicated yoga and chess modules.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-900/50 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">03. Certified Faculty</div>
            <h3 className="text-base font-bold text-white">National Choreographers</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              Every mentor undergoes rigorous background vetting and pedagogical training to instruct beginners with patience and pros with rigor.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-purple-950/30 border border-purple-900/50 space-y-2">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">04. Multi-Hub Access</div>
            <h3 className="text-base font-bold text-white">Seamless Studio Passes</h3>
            <p className="text-xs text-purple-200/75 leading-relaxed">
              One membership allows flexibility across Salt Lake, Park Street, New Town, and South City hubs for select batch packages.
            </p>
          </div>
        </div>

        {/* Lead Capture Inquiries Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#14061e] border border-purple-800/80 p-8 md:p-12 shadow-2xl">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Direct Studio Inquiries
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white">
              Get in Motion with Us Today
            </h3>
            <p className="text-xs md:text-sm text-purple-200/80 leading-relaxed font-medium">
              Have questions about batch levels, custom sangeet choreography, or enrolling your child? Send our senior counseling team a message.
            </p>

            <div className="space-y-3 pt-3 text-xs text-purple-200">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Salt Lake · Park Street · New Town · Ballygunge</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919831044521" className="hover:text-amber-400 font-semibold">
                  +91 98310 44521 / +91 98310 44522
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>hello@madmoversdance.com</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl bg-purple-950/60 border border-emerald-500/40 text-center space-y-4 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-purple-200/80 max-w-sm mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. A studio coordinator from our <strong className="text-amber-300">{BRANCHES.find(b => b.id === formData.branch)?.name}</strong> team will call or WhatsApp you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="py-2 px-4 rounded-xl bg-purple-900 hover:bg-purple-800 text-xs font-bold text-purple-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-purple-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Debabrata Roy"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-purple-300 block mb-1">WhatsApp Phone</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-purple-300 block mb-1">Preferred Studio</label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    >
                      {BRANCHES.map((b) => (
                        <option key={b.id} value={b.id} className="bg-[#180522]">
                          {b.name} ({b.area.split(',')[0]})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-purple-300 block mb-1">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs focus:outline-none focus:border-amber-400"
                    >
                      <option>Regular Dance Batches</option>
                      <option>Intensive Weekend Workshops</option>
                      <option>Wedding / Sangeet Choreography</option>
                      <option>Kids Creative Activity Club</option>
                      <option>Chess Academy & Mind Sports</option>
                      <option>Studio Space Hourly Rental</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-purple-300 block mb-1">Message or Specific Goals</label>
                  <textarea
                    rows={2}
                    placeholder="Tell us what you'd like to achieve or any batch timings you prefer..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-purple-950/70 border border-purple-800 text-white text-xs placeholder-purple-400/50 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 text-purple-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Studio Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
