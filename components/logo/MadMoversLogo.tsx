'use client';

import React from 'react';
import Image from 'next/image';

export const MAD_MOVERS_LOGO_URL =
  'https://res.cloudinary.com/de4cnpfm1/image/upload/v1790863391/292724801_104820948965098_8561852456659512274_n-removebg-preview_ysygix.png';

interface MadMoversLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'crest';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showMotto?: boolean;
}

export function MadMoversLogo({
  className = '',
  variant = 'compact',
  size = 'md',
  showMotto = false,
}: MadMoversLogoProps) {
  const getDims = () => {
    switch (size) {
      case 'sm':
        return { w: 38, h: 38 };
      case 'md':
        return { w: 56, h: 56 };
      case 'lg':
        return { w: 84, h: 84 };
      case 'xl':
        return { w: 140, h: 140 };
      default:
        return { w: 56, h: 56 };
    }
  };

  const dims = getDims();

  // Crest variant (Pure transparent emblem image)
  if (variant === 'crest') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <Image
          src={MAD_MOVERS_LOGO_URL}
          alt="Mad Movers Official Logo Crest"
          width={dims.w}
          height={dims.h}
          className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(245,158,11,0.25)] select-none pointer-events-none"
          priority
          referrerPolicy="no-referrer"
          unoptimized
        />
      </div>
    );
  }

  // Compact variant (Emblem + Wordmark for navigation & cards)
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 sm:gap-3 group ${className}`}>
        <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
          <Image
            src={MAD_MOVERS_LOGO_URL}
            alt="Mad Movers Crest"
            width={44}
            height={44}
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)] group-hover:scale-105 transition-transform"
            priority
            referrerPolicy="no-referrer"
            unoptimized
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg font-black tracking-tight uppercase text-white font-sans leading-none">
              MAD{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
                MOVERS
              </span>
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-purple-300/80 font-bold leading-tight mt-0.5">
            Dance School & Activity Centre
          </span>
        </div>
      </div>
    );
  }

  // Full variant (Hero, Footer, or Centered Banners)
  return (
    <div className={`flex flex-col items-center text-center space-y-3 ${className}`}>
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36">
        <Image
          src={MAD_MOVERS_LOGO_URL}
          alt="Mad Movers Official Logo"
          width={140}
          height={140}
          className="w-full h-full object-contain filter drop-shadow-[0_4px_20px_rgba(245,158,11,0.35)]"
          priority
          referrerPolicy="no-referrer"
          unoptimized
        />
      </div>
      <div className="space-y-1">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-sans">
          MAD{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
            MOVERS
          </span>
        </h2>
        <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-300/90 font-mono">
          Multi-Branch Dance & Activity Academy · Estd 2022
        </p>
        {showMotto && (
          <p className="text-xs italic text-purple-200/90 font-serif pt-1 max-w-sm">
            &ldquo;Work Like a Mad to Make Yourself Glad&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}
