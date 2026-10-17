import React from 'react';
import { CasaFeijaoLogoLockup } from './CasaFeijaoLogoLockup';

interface CenterLogoAzulejoTileProps {
  lang?: 'pt' | 'en';
  isInteractive?: boolean;
  onClick?: () => void;
}

export const CenterLogoAzulejoTile: React.FC<CenterLogoAzulejoTileProps> = ({
  lang = 'pt',
  isInteractive = false,
  onClick,
}) => {
  const isPt = lang === 'pt';

  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full bg-[#FAFBFD] shadow-[inset_0_1px_3px_rgba(255,255,255,0.95),inset_0_-1px_3px_rgba(0,30,80,0.18)] flex items-center justify-center overflow-hidden border-0 md:border-2 md:border-cobalt-700/50 select-none ${
        isInteractive ? 'cursor-pointer group' : ''
      }`}
    >
      {/* Authentic Base Azulejo Tile Image with WebP acceleration */}
      <picture className="w-full h-full block">
        <source srcSet="/images/azulejo-tile.webp" type="image/webp" />
        <img
          src="/images/azulejo-tile.jpg"
          alt="Casa Feijão - Azulejo Tradicional"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* 
        MASTER PORTUGUESE PORCELAIN CIRCULAR MEDALLION
        Strict aspect-square ensures it is ALWAYS a perfect circle, never an oblong capsule
        Pure opaque porcelain white background so text has 100% crystal contrast
      */}
      <div className="absolute inset-0 flex items-center justify-center p-3 pointer-events-none">
        <div className="relative w-[82vw] max-w-[340px] max-h-[82vw] sm:w-auto sm:h-[88%] aspect-square rounded-full bg-[#FAFBFD] shadow-[0_12px_40px_rgba(11,53,123,0.35),inset_0_0_0_2.5px_#0B357B,inset_0_0_0_5px_#FAFBFD,inset_0_0_0_7.5px_#2563EB] flex flex-col items-center justify-center p-4 sm:p-5 text-center transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_16px_50px_rgba(11,53,123,0.5)]">
          {/* Subtle inner dashed ceramic ring */}
          <div className="absolute inset-2 sm:inset-3 rounded-full border border-dashed border-cobalt-400/50 pointer-events-none"></div>

          {/* UNIFIED HARMONIOUS VERTICAL STACK */}
          <div className="flex flex-col items-center justify-center text-center z-10 w-full px-2">
            {/* EXACT OFFICIAL LOGO LOCKUP */}
            <CasaFeijaoLogoLockup lang={lang} size="md" />

            {/* HARMONIOUS PROPORTIONAL ENTRANCE BUTTON */}
            {isInteractive && (
              <div className="mt-3 sm:mt-4 md:mt-4.5 px-5 sm:px-6 md:px-7 py-1.5 sm:py-2 rounded-full bg-[#0B357B] text-white border-2 border-white/90 shadow-[0_4px_16px_rgba(11,53,123,0.35)] text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] transition-all duration-300 group-hover:scale-105 group-hover:bg-cobalt-900 group-hover:shadow-[0_6px_22px_rgba(11,53,123,0.5)] active:scale-95 flex items-center justify-center gap-1.5 pointer-events-auto cursor-pointer whitespace-nowrap">
                <span className="text-[8px] sm:text-[9px] leading-none">✦</span>
                <span>{isPt ? 'Entrar' : 'Enter'}</span>
                <span className="text-[8px] sm:text-[9px] leading-none">✦</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ceramic Glaze Specular Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/[0.04] pointer-events-none"></div>

      {/* Micro Bevel Edge */}
      <div className="absolute inset-0 border border-white/85 pointer-events-none"></div>
    </div>
  );
};
