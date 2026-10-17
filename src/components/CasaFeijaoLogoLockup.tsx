import React from 'react';

interface CasaFeijaoLogoLockupProps {
  lang?: 'pt' | 'en';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const CasaFeijaoLogoLockup: React.FC<CasaFeijaoLogoLockupProps> = ({
  lang = 'pt',
  size = 'md',
  className = '',
}) => {
  const isPt = lang === 'pt';

  // Sizing variants
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const anchorSize = isSm
    ? 'w-6 h-6 sm:w-7 sm:h-7'
    : isLg
    ? 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16'
    : 'w-7 h-7 sm:w-7.5 sm:h-7.5 md:w-8 md:h-8 lg:w-9 lg:h-9';

  const titleSize = isSm
    ? 'text-xs sm:text-base'
    : isLg
    ? 'text-base sm:text-xl md:text-2xl lg:text-3xl'
    : 'text-sm sm:text-base md:text-lg lg:text-xl';

  const regionSize = isSm
    ? 'text-[8.5px] sm:text-[10px]'
    : isLg
    ? 'text-[11px] sm:text-xs md:text-sm lg:text-base'
    : 'text-[8px] sm:text-[9px] md:text-[9.5px]';

  const subtitleSize = isSm
    ? 'text-[7px] sm:text-[8px]'
    : isLg
    ? 'text-[9px] sm:text-[10px] md:text-xs'
    : 'text-[7px] sm:text-[7.5px] md:text-[8px]';

  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* OFFICIAL CASA FEIJÃO NAUTICAL ANCHOR LOGO */}
      <div className={`${anchorSize} text-[#0B357B] mb-0.5 sm:mb-1 drop-shadow-[0_1px_1px_rgba(255,255,255,0.9)]`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Top Ring / Shackle */}
          <circle cx="50" cy="18" r="8.5" stroke="#0B357B" strokeWidth="4.5" fill="none" />
          {/* Horizontal Stock (Crossbar with rounded ends, no balls) */}
          <line x1="27" y1="36" x2="73" y2="36" stroke="#0B357B" strokeWidth="5.5" strokeLinecap="round" />
          {/* Vertical Shank */}
          <line x1="50" y1="26" x2="50" y2="82" stroke="#0B357B" strokeWidth="5.5" strokeLinecap="round" />
          {/* Smooth U-Arms */}
          <path d="M22 60 C23 83 77 83 78 60" stroke="#0B357B" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          {/* Left Fluke (Sharp upward triangle) */}
          <polygon points="22,47 15,61 29,61" fill="#0B357B" />
          {/* Right Fluke (Sharp upward triangle) */}
          <polygon points="78,47 71,61 85,61" fill="#0B357B" />
        </svg>
      </div>

      {/* Brand Name: Classical Portuguese Roman Azulejo Serif Typography */}
      <h2
        className={`${titleSize} font-serif font-black tracking-[0.16em] text-[#0B357B] uppercase leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.9)]`}
      >
        CASA FEIJÃO
      </h2>

      {/* Hand-Painted Cobalt Ornamental Divider */}
      <div className="flex items-center gap-1.5 sm:gap-2 my-0.5 sm:my-1 w-full max-w-[75%] justify-center">
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#1E5EB8]"></div>
        <div className="w-1.5 h-1.5 rotate-45 bg-[#0B357B]"></div>
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#1E5EB8]"></div>
      </div>

      {/* Region Tag */}
      <span className={`${regionSize} font-serif font-bold uppercase tracking-[0.3em] text-[#1A54A6] leading-none`}>
        GERÊS
      </span>

      {/* Heritage Subtitle */}
      <span
        className={`${subtitleSize} font-sans font-bold tracking-widest text-[#0B357B]/90 uppercase mt-0.5 leading-none`}
      >
        {isPt ? 'ALOJAMENTO LOCAL' : 'GUEST SANCTUARY'}
      </span>
    </div>
  );
};
