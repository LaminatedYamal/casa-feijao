import React, { useState } from 'react';
import { azulejoTiles } from '../data/azulejos';

interface AzulejoWallProps {
  lang?: 'pt' | 'en';
}

export const AzulejoWall: React.FC<AzulejoWallProps> = ({ lang = 'pt' }) => {
  const [flippedTiles, setFlippedTiles] = useState<Record<string, boolean>>({});

  const toggleTile = (id: string) => {
    setFlippedTiles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isPt = lang === 'pt';

  return (
    <div className="w-full">
      {/* Title & Cultural Cue */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cobalt-50 border border-cobalt-200 text-cobalt-800 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-cobalt-600 animate-pulse"></span>
          <span>{isPt ? 'Mural de Boas-Vindas em Azulejo' : 'Azulejo Welcome Mosaic'}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-cobalt-950 font-bold tracking-tight">
          {isPt ? 'Toque nos Azulejos para Descobrir' : 'Touch Any Tile to Unveil'}
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-granite-600 font-sans max-w-xl mx-auto">
          {isPt
            ? 'Cada azulejo guarda um refúgio da Casa Feijão ou um segredo milenar do Gerês. Passe o cursor ou clique para desvendar preços, rotas e caminhos.'
            : 'Each tile holds a Casa Feijão retreat or a legendary secret of Gerês. Hover or tap to reveal accommodations, rates, and wild trails.'}
        </p>
      </div>

      {/* 4x2 Grid of Portuguese Azulejos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
        {azulejoTiles.map((tile) => {
          const isFlipped = !!flippedTiles[tile.id];

          return (
            <div
              key={tile.id}
              onClick={() => toggleTile(tile.id)}
              onMouseEnter={() => setFlippedTiles((prev) => ({ ...prev, [tile.id]: true }))}
              onMouseLeave={() => setFlippedTiles((prev) => ({ ...prev, [tile.id]: false }))}
              className="perspective-1000 h-64 sm:h-72 lg:h-80 cursor-pointer select-none group"
            >
              <div
                className={`w-full h-full duration-700 transform-style-3d transition-transform ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT: Authentic Wordless Ceramic Tile */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white border-2 border-cobalt-200 shadow-tile group-hover:shadow-tile-hover transition-all duration-300 p-4 sm:p-5 flex flex-col items-center justify-between overflow-hidden">
                  {/* Ceramic Gloss Sheen Effect */}
                  <div className="absolute -top-12 -left-12 w-28 h-28 bg-white/60 blur-xl rounded-full pointer-events-none"></div>

                  {/* Corner Portuguese Ceramic Flourishes */}
                  <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-cobalt-400 opacity-60"></div>
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-cobalt-400 opacity-60"></div>
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-cobalt-400 opacity-60"></div>
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-cobalt-400 opacity-60"></div>

                  {/* Top Minimal Number & Micro Action */}
                  <div className="w-full flex justify-between items-center z-10">
                    <span className="text-[9px] font-mono tracking-widest text-cobalt-400 uppercase font-semibold">
                      № {tile.id.toUpperCase().slice(0, 5)}
                    </span>
                    <span className="text-[9px] font-sans font-semibold px-2 py-0.5 rounded-full bg-cobalt-50 text-cobalt-700 border border-cobalt-100">
                      {isPt ? 'Virar' : 'Flip'}
                    </span>
                  </div>

                  {/* Handcrafted Vector SVG Illustration */}
                  <div
                    className="w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center my-auto transition-transform duration-500 group-hover:scale-105 z-10"
                    dangerouslySetInnerHTML={{ __html: tile.svgPath }}
                  />

                  {/* Bottom Discrete Title */}
                  <div className="z-10 text-center w-full">
                    <span className="text-[11px] sm:text-xs font-serif text-cobalt-950 font-bold tracking-wide block truncate">
                      {isPt ? tile.titlePt : tile.titleEn}
                    </span>
                  </div>
                </div>

                {/* BACK: Rich Story & Instant Action Link */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-cobalt-900 to-cobalt-950 text-white p-4 sm:p-5 flex flex-col justify-between shadow-tile-hover border-2 border-cobalt-600">
                  <div>
                    {/* Top Tag & Fact */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-cobalt-800 text-cobalt-200 border border-cobalt-700">
                        {isPt ? tile.tagPt : tile.tagEn}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-300 font-bold">
                        {isPt ? tile.distanceOrFactPt : tile.distanceOrFactEn}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-tight leading-snug">
                      {isPt ? tile.titlePt : tile.titleEn}
                    </h3>
                    <p className="text-[10px] text-cobalt-300 font-medium mb-2">
                      {isPt ? tile.subtitlePt : tile.subtitleEn}
                    </p>

                    <p className="text-[10px] sm:text-[11px] text-slate-200 leading-relaxed line-clamp-4">
                      {isPt ? tile.descriptionPt : tile.descriptionEn}
                    </p>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 border-t border-cobalt-800/80">
                    <a
                      href={tile.link}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-full py-2 rounded-lg bg-white hover:bg-cobalt-50 text-cobalt-950 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      <span>{isPt ? tile.ctaPt : tile.ctaEn} →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
