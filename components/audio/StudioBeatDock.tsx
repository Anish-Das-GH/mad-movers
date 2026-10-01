'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Square, Disc } from 'lucide-react';

const HIPHOP_GROOVE = {
  id: 'hiphop',
  name: 'Street Cypher Bounce',
  bpm: 94,
  pattern: {
    kick:  [1, 0, 0, 0,  0, 0, 1, 0,  0, 1, 0, 0,  0, 0, 0, 0],
    snare: [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0],
    hihat: [1, 1, 1, 1,  1, 1, 1, 1,  1, 1, 1, 1,  1, 1, 1, 1],
  },
};

export function StudioBeatDock() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const stepRef = useRef(0);
  const isPlayingRef = useRef(true);

  // Sync ref with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
    return audioCtxRef.current;
  };

  const playKick = (ctx: AudioContext, time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.28);
    gain.gain.setValueAtTime(0.65, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.28);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(time);
    osc.stop(time + 0.28);
  };

  const playSnare = (ctx: AudioContext, time: number) => {
    const bufferSize = ctx.sampleRate * 0.15;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.16);
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noise.start(time);
    noise.stop(time + 0.16);
  };

  const playHiHat = (ctx: AudioContext, time: number) => {
    const bufferSize = ctx.sampleRate * 0.04;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7500;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.12, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(time);
    noise.stop(time + 0.04);
  };

  // Start beat loop
  const startLoop = React.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    const intervalMs = (60 / HIPHOP_GROOVE.bpm / 4) * 1000;

    timerRef.current = setInterval(() => {
      if (!isPlayingRef.current) return;

      const step = stepRef.current;
      setCurrentStep(step);

      try {
        const ctx = getAudioContext();
        if (ctx && ctx.state === 'running') {
          const now = ctx.currentTime;
          if (HIPHOP_GROOVE.pattern.kick[step]) playKick(ctx, now);
          if (HIPHOP_GROOVE.pattern.snare[step]) playSnare(ctx, now);
          if (HIPHOP_GROOVE.pattern.hihat[step]) playHiHat(ctx, now);
        }
      } catch {
        // Handled
      }

      stepRef.current = (step + 1) % 16;
    }, intervalMs);
  }, []);

  // Auto-play on mount + unlock on first gesture if browser blocks initial sound
  useEffect(() => {
    startLoop();

    const handleFirstUserInteraction = () => {
      if (isPlayingRef.current) {
        try {
          const ctx = getAudioContext();
          if (ctx.state === 'suspended') {
            ctx.resume().catch(() => {});
          }
        } catch {
          // Handled
        }
      }
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };

    window.addEventListener('pointerdown', handleFirstUserInteraction);
    window.addEventListener('scroll', handleFirstUserInteraction);
    window.addEventListener('keydown', handleFirstUserInteraction);
    window.addEventListener('touchstart', handleFirstUserInteraction);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener('pointerdown', handleFirstUserInteraction);
      window.removeEventListener('scroll', handleFirstUserInteraction);
      window.removeEventListener('keydown', handleFirstUserInteraction);
      window.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, [startLoop]);

  const handleToggleBeat = () => {
    if (isPlaying) {
      // User clicked "Stop the Beat": completely stops the music
      setIsPlaying(false);
      isPlayingRef.current = false;
      if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
        audioCtxRef.current.suspend().catch(() => {});
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    } else {
      // User clicked "Feel the Beat": immediately resumes the music
      setIsPlaying(true);
      isPlayingRef.current = true;
      try {
        const ctx = getAudioContext();
        if (ctx.state === 'suspended') {
          ctx.resume().catch(() => {});
        }
      } catch {
        // Handled
      }
      stepRef.current = 0;
      startLoop();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleToggleBeat}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 group cursor-pointer ${
          isPlaying
            ? 'bg-gradient-to-r from-[#20052b] via-amber-950/90 to-[#20052b] border-amber-400 text-amber-300 ring-2 ring-amber-400/40 shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-105'
            : 'bg-[#15061e]/90 hover:bg-[#220830] border-purple-600/60 text-purple-200 hover:border-amber-400 hover:text-amber-300 shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-105'
        }`}
        aria-label={isPlaying ? 'Stop the Beat' : 'Feel the Beat'}
      >
        {isPlaying ? (
          <>
            <Square className="w-3.5 h-3.5 fill-amber-400 text-amber-400 group-hover:scale-90 transition-transform" />
            <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap text-amber-300">
              Stop the Beat
            </span>
            <div className="flex items-center gap-0.5 ml-1">
              <span className="w-1 h-3.5 bg-amber-400 animate-pulse" />
              <span className="w-1 h-5 bg-amber-300 animate-pulse delay-75" />
              <span className="w-1 h-2.5 bg-amber-500 animate-pulse delay-150" />
            </div>
          </>
        ) : (
          <>
            <Disc className="w-4 h-4 text-purple-400 group-hover:text-amber-400 group-hover:rotate-45 transition-all" />
            <span className="text-xs font-black uppercase tracking-wider whitespace-nowrap">
              Feel the Beat
            </span>
          </>
        )}
      </button>
    </div>
  );
}
