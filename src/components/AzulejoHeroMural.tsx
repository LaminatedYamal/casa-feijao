import React, { useState, useEffect } from 'react';
import { mural15Tiles } from '../data/mural15Data';
import { CenterLogoAzulejoTile } from './CenterLogoAzulejoTile';
import { CasaFeijaoLogoLockup } from './CasaFeijaoLogoLockup';
import { ActualWeatherWidget } from './ActualWeatherWidget';
import { MobileHeaderMenu } from './MobileHeaderMenu';
import { url } from '../utils/paths';

interface AzulejoHeroMuralProps {
  lang?: 'pt' | 'en';
}

export const AzulejoHeroMural: React.FC<AzulejoHeroMuralProps> = ({ lang = 'pt' }) => {
  const [flippedTileId, setFlippedTileId] = useState<string | null>(null);
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [isEntered, setIsEntered] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [headerCenterY, setHeaderCenterY] = useState<string>('calc(37px + env(safe-area-inset-top, 0px))');
  const isPt = lang === 'pt';

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setIsDesktop(w >= 768);
      if (w >= 1024) {
        setHeaderCenterY('62px');
      } else if (w >= 768) {
        setHeaderCenterY('58px');
      } else if (w >= 640) {
        setHeaderCenterY('44px');
      } else {
        setHeaderCenterY('calc(37px + env(safe-area-inset-top, 0px))');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleTile = (id: string) => {
    setFlippedTileId((prev) => (prev === id ? null : id));
  };

  const handleEnter = () => {
    if (isOpening || isEntered) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsEntered(true);
      window.scrollTo({ top: 0 });
      // Reveal the website body content below the new header
      const bodyEl = document.getElementById('website-body');
      if (bodyEl) {
        bodyEl.style.display = 'block';
        setTimeout(() => {
          bodyEl.style.opacity = '1';
        }, 50);
      }
    }, 1500);
  };

  const handleBackToMural = () => {
    setIsEntered(false);
    setIsOpening(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const bodyEl = document.getElementById('website-body');
    if (bodyEl) {
      bodyEl.style.opacity = '0';
      setTimeout(() => {
        bodyEl.style.display = 'none';
      }, 500);
    }
  };

  useEffect(() => {
    const bodyEl = document.getElementById('website-body');
    if (bodyEl) {
      if (!isEntered) {
        bodyEl.style.display = 'none';
        bodyEl.style.opacity = '0';
      }
    }
  }, []);

  return (
    <>
      {/* 
        PERSISTENT TOP HEADER BAR
        Fades in smoothly as the logo glides to the top, and stays fixed throughout the site
      */}
      <header
        className={`fixed top-0 left-0 right-0 pt-[env(safe-area-inset-top,0px)] h-[calc(74px+env(safe-area-inset-top,0px))] sm:h-[88px] md:h-[116px] lg:h-[124px] z-50 transition-all duration-700 ${
          isOpening
            ? 'bg-[#FAFBFD] border-b border-cobalt-100 shadow-sm opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          transitionDelay: isOpening ? '800ms' : '0ms',
        }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
          {/* Left: Accommodations (with rooms dropdown), Gerês Guide, Facilities, Contacts */}
          <div className="hidden md:flex flex-1 items-center justify-start gap-3.5 lg:gap-6 xl:gap-7">
            <div className="relative group py-2">
              <a
                href={url(isPt ? '/acomodacoes' : '/en/accommodations')}
                className="text-xs sm:text-sm font-semibold text-granite-700 hover:text-[#0B357B] transition-colors flex items-center gap-1"
              >
                <span>{isPt ? 'Acomodações' : 'Accommodations'}</span>
                <svg className="w-3 h-3 text-granite-400 group-hover:text-[#0B357B] group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              {/* Flyout for individual rooms */}
              <div className="absolute top-full left-0 pt-1.5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-cobalt-100 py-2 px-1 min-w-[210px]">
                  <a
                    href={url(isPt ? '/acomodacoes/estudio' : '/en/accommodations/estudio')}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-granite-700 hover:text-[#0B357B] hover:bg-cobalt-50/70 transition-colors"
                  >
                    <span>{isPt ? 'Estúdio' : 'Studio'}</span>
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">70€</span>
                  </a>
                  <a
                    href={url(isPt ? '/acomodacoes/apartamento-t1' : '/en/accommodations/apartamento-t1')}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-granite-700 hover:text-[#0B357B] hover:bg-cobalt-50/70 transition-colors"
                  >
                    <span>{isPt ? 'Apartamento T1' : 'Apartment T1'}</span>
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">95€</span>
                  </a>
                  <a
                    href={url(isPt ? '/acomodacoes/apartamento-t3' : '/en/accommodations/apartamento-t3')}
                    className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-granite-700 hover:text-[#0B357B] hover:bg-cobalt-50/70 transition-colors"
                  >
                    <span>{isPt ? 'Apartamento T3' : 'Apartment T3'}</span>
                    <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">150€</span>
                  </a>
                  <div className="my-1 border-t border-cobalt-50"></div>
                  <a
                    href={url(isPt ? '/acomodacoes' : '/en/accommodations')}
                    className="block px-3 py-1.5 text-[11px] font-bold text-[#0B357B] hover:underline"
                  >
                    {isPt ? 'Ver Todas as Acomodações →' : 'View All Accommodations →'}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={url(isPt ? '/geres' : '/en/geres')}
              className="text-xs sm:text-sm font-semibold text-granite-700 hover:text-[#0B357B] transition-colors"
            >
              {isPt ? 'Guia do Gerês' : 'Gerês Guide'}
            </a>
            <a
              href={url(isPt ? '/facilidades' : '/en/facilities')}
              className="text-xs sm:text-sm font-semibold text-granite-700 hover:text-[#0B357B] transition-colors"
            >
              {isPt ? 'Facilidades' : 'Facilities'}
            </a>
            <a
              href={url(isPt ? '/contactos' : '/en/contact')}
              className="text-xs sm:text-sm font-semibold text-granite-700 hover:text-[#0B357B] transition-colors"
            >
              {isPt ? 'Contactos' : 'Contacts'}
            </a>
          </div>

          {/* Mobile left spacer: matches right w-10 exactly for true optical centering */}
          <div className="w-10 shrink-0 md:hidden" aria-hidden="true"></div>

          {/* Center spacer: Logo sits at z-50 directly in this spot */}
          <div className="flex-shrink-0 w-[240px] hidden md:block"></div>

          {/* Right: Weather Widget & Direct WhatsApp Quick Action + Mobile Menu Drawer */}
          <div className="w-10 shrink-0 md:flex-1 flex items-center justify-end gap-2.5 sm:gap-3">
            <ActualWeatherWidget lang={lang} className="hidden lg:flex w-[170px] lg:w-[190px] h-[46px]" />

            <a
              href="https://wa.me/351933176678"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
              title={isPt ? 'Falar no WhatsApp' : 'Chat on WhatsApp'}
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.24 16C12.83 16.27 13.28 16.42 13.64 16.53C14.25 16.73 14.8 16.7 15.24 16.63C15.73 16.56 16.74 16.02 16.95 15.43C17.16 14.84 17.16 14.34 17.1 14.23C17.04 14.12 16.88 14.06 16.64 13.94C16.4 13.82 15.21 13.23 14.99 13.15C14.77 13.07 14.61 13.03 14.45 13.27C14.29 13.51 13.82 14.06 13.68 14.23C13.54 14.39 13.4 14.41 13.16 14.29C12.92 14.17 12.15 13.92 11.24 13.11C10.53 12.48 10.05 11.7 9.91 11.46C9.77 11.22 9.9 11.09 10.02 10.97C10.13 10.86 10.27 10.68 10.39 10.54C10.5 10.4 10.55 10.3 10.63 10.14C10.71 9.97 10.67 9.83 10.61 9.71C10.55 9.59 10.08 8.42 9.88 7.95C9.69 7.49 9.49 7.55 9.34 7.54C9.2 7.54 9.04 7.33 8.53 7.33Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Mobile Drawer Hamburger Menu */}
            <div className="md:hidden">
              <MobileHeaderMenu lang={lang} currentPath={url(isPt ? '/' : '/en')} />
            </div>
          </div>
        </div>
      </header>

      {/* 
        SINGLE UNIFIED GLIDING LOGO
        Fades in upon click and glides smoothly to the center of the header with zero jerk
      */}
      <div
        onClick={isEntered ? handleBackToMural : undefined}
        className={`fixed left-1/2 select-none z-50 flex flex-col items-center justify-center text-center ${
          isEntered
            ? 'pointer-events-auto cursor-pointer group hover:scale-105 active:scale-95 transition-transform duration-200'
            : 'pointer-events-none'
        }`}
        style={{
          top: isOpening ? headerCenterY : '50%',
          transform: isOpening
            ? 'translate3d(-50%, -50%, 0)'
            : 'translate3d(-50%, -50%, 0)',
          opacity: isOpening ? 1 : 0,
          transition: 'top 1500ms cubic-bezier(0.16, 1, 0.3, 1), transform 1500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 300ms ease',
          willChange: 'top, transform',
        }}
        title={isEntered ? (isPt ? 'Casa Feijão • Voltar ao Painel de Azulejos' : 'Casa Feijão • Back to Azulejo Mural') : undefined}
      >
        <div className="md:hidden">
          <CasaFeijaoLogoLockup lang={lang} size="sm" />
        </div>
        <div className="hidden md:block">
          <CasaFeijaoLogoLockup lang={lang} size="md" />
        </div>
      </div>

      {/* 
        EXPANDING WHITE PORCELAIN CANVAS
        Fills the viewport with pure white as the tiles disperse (slow, graceful half-speed bloom)
      */}
      <div
        className={`fixed inset-0 bg-[#FAFBFD] pointer-events-none transition-opacity ease-out ${
          isEntered ? 'opacity-0 -z-10' : isOpening ? 'opacity-100 z-20' : 'opacity-0 -z-10'
        }`}
        style={{
          transitionDuration: '1500ms',
        }}
      />

      {/* 
        PORTUGUESE AZULEJO WALL
        - Mobile (< md:): SHOW MASTER CENTER TILE WITH AUTHENTIC AZULEJO AMBIANCE
        - Desktop (md: and above): Full 3-row x 5-column (15 tiles) interactive mural
      */}
      <div
        className={`w-full flex items-center justify-center bg-[#091B3A] select-none overflow-hidden p-0 m-0 ${
          isEntered ? 'hidden' : 'relative h-screen min-h-[560px]'
        }`}
      >
        {/* MOBILE VIEW (< md:): FULL-SCREEN AZULEJO TILE (fills the entire screen edge-to-edge) */}
        <div
          className="md:hidden w-full h-full relative cursor-pointer overflow-hidden"
          style={{
            opacity: isOpening ? 0 : 1,
            transition: 'opacity 600ms ease',
          }}
        >
          <CenterLogoAzulejoTile
            lang={lang}
            isInteractive={true}
            onClick={handleEnter}
          />
        </div>

        {/* DESKTOP & TABLET VIEW (md: and above): FULL 15-TILE AZULEJO WALL (Only mounted on desktop for lightning speed on mobile) */}
        {isDesktop && (
          <div className="hidden md:grid w-full h-full grid-cols-5 grid-rows-3 gap-[2px] sm:gap-[3px] md:gap-[3.5px] bg-[#2E3642]">
          {mural15Tiles.map((tile) => {
            // Dead-center tile: Interactive portal with official Anchor Logo
            if (tile.isCenterLogo) {
              return (
                <div
                  key={tile.id}
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    opacity: isOpening ? 0 : 1,
                    transition: 'opacity 600ms ease',
                  }}
                >
                  <CenterLogoAzulejoTile
                    lang={lang}
                    isInteractive={true}
                    onClick={handleEnter}
                  />
                </div>
              );
            }

            const isFlipped = flippedTileId === tile.id;

            // Directional scatter for the 14 outer tiles at half speed
            const colDelta = tile.col - 2; // -2, -1, 0, 1, 2
            const rowDelta = tile.row - 1; // -1, 0, 1
            const translateX = isOpening ? colDelta * 140 : 0;
            const translateY = isOpening ? rowDelta * 160 : 0;
            const scale = isOpening ? 0.55 : 1;
            const opacity = isOpening ? 0 : 1;

            return (
              <div
                key={tile.id}
                onClick={() => {
                  // Mobile tap flip
                  if (window.innerWidth < 768) {
                    toggleTile(tile.id);
                  }
                }}
                onMouseEnter={() => setFlippedTileId(tile.id)}
                onMouseLeave={() => setFlippedTileId(null)}
                className="perspective-1000 relative w-full h-full cursor-pointer group block overflow-hidden"
                style={{
                  transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                  opacity: opacity,
                  transition: 'transform 1500ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1200ms ease',
                }}
              >
                <div
                  className={`w-full h-full duration-500 transform-style-3d transition-transform ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT: Pure Authentic Painted Azulejo Tile (3174.jpg) - ZERO text overlay! */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),inset_0_-1px_2px_rgba(0,30,80,0.18)] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:brightness-105 group-hover:scale-[1.01] group-hover:z-10 group-hover:shadow-2xl">
                    {/* Repeated Authentic Tile Ceramic Image */}
                    <img
                      src="/images/azulejo-tile.jpg"
                      alt={isPt ? tile.titlePt : tile.titleEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Ceramic Glaze Specular Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/[0.04] pointer-events-none"></div>

                    {/* Micro Bevel Edge */}
                    <div className="absolute inset-0 border border-white/85 pointer-events-none"></div>
                  </div>

                  {/* BACK: Apple HIG Frosted Glass Sheet over Full-Bleed Photograph - NO BUTTONS! */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-cobalt-950 text-white overflow-hidden shadow-2xl border border-white/20 z-20">
                    {/* Real Full-Bleed Authentic Photograph with Smooth Hover Zoom */}
                    {tile.image && (
                      <img
                        src={tile.image}
                        alt={isPt ? tile.titlePt : tile.titleEn}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    )}

                    {/* Deep Scrim Gradient for Crisp Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 pointer-events-none"></div>

                    {/* Ceramic Micro Bevel Edge */}
                    <div className="absolute inset-0 border border-white/30 pointer-events-none z-20"></div>

                    {/* Content Container Anchored Consistently to Bottom */}
                    <div className="relative z-10 w-full h-full p-2.5 sm:p-3.5 md:p-4.5 flex flex-col justify-end">
                      {/* Unified Apple Frosted Glass Sheet (Clean Preview Card with ZERO buttons) */}
                      <div className="backdrop-blur-xl bg-cobalt-950/85 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20 shadow-2xl flex flex-col gap-1.5 transition-transform duration-300">
                        {/* Quiet Eyebrow: Category & Fact */}
                        <div className="flex items-center justify-between text-[10px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase">
                          <span className="truncate">{isPt ? tile.badgePt : tile.badgeEn}</span>
                          <span className="font-mono text-slate-300 truncate">{isPt ? tile.factPt : tile.factEn}</span>
                        </div>

                        {/* Title & Subtitle */}
                        <div>
                          <h4 className="text-base sm:text-lg md:text-xl font-serif font-bold text-white tracking-tight leading-tight line-clamp-1 drop-shadow-md">
                            {isPt ? tile.titlePt : tile.titleEn}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium line-clamp-1 mt-0.5">
                            {isPt ? tile.subtitlePt : tile.subtitleEn}
                          </p>
                          <p className="text-[11px] sm:text-xs text-slate-300/90 leading-relaxed line-clamp-2 mt-1">
                            {isPt ? tile.descPt : tile.descEn}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        )}
      </div>
    </>
  );
};
