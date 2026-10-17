import React, { useState, useEffect, useCallback } from 'react';
import { CaretLeft, CaretRight, X, MagnifyingGlassPlus } from '@phosphor-icons/react';

interface Props {
  images: string[];
  roomTitle: string;
  lang?: 'pt' | 'en';
}

export function RoomGalleryLightbox({ images, roomTitle, lang = 'pt' }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isPt = lang === 'pt';

  const isOpen = activeIndex !== null;

  const handleOpen = (index: number) => {
    setActiveIndex(index);
  };

  const handleClose = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  }, [activeIndex, images.length]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  }, [activeIndex, images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleClose, handlePrev, handleNext]);

  return (
    <>
      {/* 5-Photo Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rounded-3xl overflow-hidden">
        {/* Main Photo (Takes 2 cols, 2 rows) */}
        <div
          onClick={() => handleOpen(0)}
          className="md:col-span-2 md:row-span-2 h-[340px] md:h-[480px] rounded-2xl overflow-hidden shadow-tile border-2 border-white relative group cursor-pointer"
        >
          <img
            src={images[0]}
            alt={`${roomTitle} - ${isPt ? 'Foto Principal' : 'Main Photo'}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="eager"
          />
          <div className="absolute inset-0 bg-cobalt-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-3.5 py-2 rounded-full bg-white/95 text-cobalt-950 font-sans text-xs font-semibold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <MagnifyingGlassPlus size={16} weight="bold" className="text-[#0B357B]" />
              {isPt ? 'Ampliar Fotografia' : 'Expand Photo'}
            </span>
          </div>
        </div>

        {/* 4 Supporting Photos */}
        {images.slice(1, 5).map((img, i) => (
          <div
            key={i}
            onClick={() => handleOpen(i + 1)}
            className="h-[160px] md:h-[232px] rounded-2xl overflow-hidden shadow-tile border-2 border-white relative group cursor-pointer"
          >
            <img
              src={img}
              alt={`${roomTitle} - ${isPt ? 'Foto' : 'Photo'} ${i + 2}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cobalt-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="w-9 h-9 rounded-full bg-white/95 text-cobalt-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                <MagnifyingGlassPlus size={16} weight="bold" className="text-[#0B357B]" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Lightbox Modal */}
      {isOpen && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none animate-fadeIn"
          onClick={handleClose}
        >
          {/* Header Bar */}
          <div
            className="flex items-center justify-between text-white z-10 max-w-7xl mx-auto w-full px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="font-serif font-bold text-base sm:text-lg text-white">
                {roomTitle}
              </span>
              <span className="text-xs text-white/70 font-sans px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
                {activeIndex + 1} / {images.length}
              </span>
            </div>

            <button
              onClick={handleClose}
              type="button"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
              title={isPt ? 'Fechar (Esc)' : 'Close (Esc)'}
            >
              <X size={20} weight="bold" />
            </button>
          </div>

          {/* Main Photo Viewport with Prev / Next */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              type="button"
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-105 cursor-pointer shadow-xl"
              title={isPt ? 'Foto Anterior' : 'Previous Photo'}
            >
              <CaretLeft size={24} weight="bold" />
            </button>

            {/* Current Image */}
            <div className="max-h-[75vh] max-w-full flex items-center justify-center p-2">
              <img
                src={images[activeIndex]}
                alt={`${roomTitle} - ${activeIndex + 1}`}
                className="max-h-[72vh] max-w-full w-auto object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-200"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              type="button"
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-105 cursor-pointer shadow-xl"
              title={isPt ? 'Foto Seguinte' : 'Next Photo'}
            >
              <CaretRight size={24} weight="bold" />
            </button>
          </div>

          {/* Bottom Thumbnails Strip */}
          <div
            className="max-w-xl mx-auto w-full flex items-center justify-center gap-2.5 overflow-x-auto py-2 z-10 px-2"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  i === activeIndex
                    ? 'border-white scale-105 shadow-md'
                    : 'border-white/30 opacity-60 hover:opacity-100 hover:border-white/60'
                }`}
              >
                <img src={img} alt={`Miniatura ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
