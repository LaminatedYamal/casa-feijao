import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  List,
  X,
  House,
  Bed,
  Compass,
  Sparkle,
  PhoneCall,
  CaretRight,
} from '@phosphor-icons/react';
import { ActualWeatherWidget } from './ActualWeatherWidget';

interface MobileHeaderMenuProps {
  lang?: 'pt' | 'en';
  currentPath?: string;
}

export const MobileHeaderMenu: React.FC<MobileHeaderMenuProps> = ({
  lang = 'pt',
  currentPath = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isPt = lang === 'pt';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const homeHref = isPt ? '/' : '/en';
  const accommodationsHref = isPt ? '/acomodacoes' : '/en/accommodations';
  const geresHref = isPt ? '/geres' : '/en/geres';
  const facilitiesHref = isPt ? '/facilidades' : '/en/facilities';
  const contactsHref = isPt ? '/contactos' : '/en/contact';

  const rooms = [
    {
      title: isPt ? 'Estúdio de Montanha' : 'Mountain Studio',
      price: '70€',
      href: isPt ? '/acomodacoes/estudio' : '/en/accommodations/estudio',
    },
    {
      title: isPt ? 'Apartamento T1' : 'Apartment T1',
      price: '80€',
      href: isPt ? '/acomodacoes/apartamento-t1' : '/en/accommodations/apartamento-t1',
    },
    {
      title: isPt ? 'Apartamento T3' : 'Apartment T3',
      price: '180€',
      href: isPt ? '/acomodacoes/apartamento-t3' : '/en/accommodations/apartamento-t3',
    },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        aria-label={isPt ? 'Abrir menu de navegação' : 'Open navigation menu'}
        className="flex items-center justify-center w-10 h-10 rounded-xl bg-cobalt-50 hover:bg-cobalt-100 text-[#0B357B] border border-cobalt-200 shadow-2xs transition-all active:scale-95"
      >
        <List size={22} weight="bold" />
      </button>

      {/* 
        Slide-out Backdrop & Drawer
        Rendered directly at document.body via createPortal to break out of any ancestor
        backdrop-blur-md or fixed height clipping
      */}
      {isOpen && mounted && typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex justify-end">
            {/* Dimmed Backdrop */}
            <div
              className="fixed inset-0 bg-cobalt-950/70 backdrop-blur-xs transition-opacity duration-300"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer Content */}
            <aside
              role="dialog"
              aria-modal="true"
              aria-label={isPt ? 'Menu de navegação' : 'Navigation menu'}
              className="relative w-[86vw] max-w-[340px] h-full bg-[#FAFBFD] shadow-2xl flex flex-col z-10 border-l border-cobalt-100 animate-in slide-in-from-right duration-300"
            >
              {/* Header: Title & Close Button */}
              <div className="shrink-0 bg-[#FAFBFD] px-5 py-4 border-b border-cobalt-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0B357B]" />
                  <span className="text-xs font-serif font-bold tracking-widest uppercase text-[#0B357B]">
                    Casa Feijão • Gerês
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  type="button"
                  aria-label={isPt ? 'Fechar menu' : 'Close menu'}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-granite-600 hover:text-cobalt-900 hover:bg-cobalt-50 transition-colors"
                >
                  <X size={20} weight="bold" />
                </button>
              </div>

              {/* Scrollable Body: Links & Weather */}
              <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
                {/* Main Navigation */}
                <nav className="space-y-1">
                  <a
                    href={homeHref}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      currentPath === '/' || currentPath === '/en' || currentPath === ''
                        ? 'bg-cobalt-50 text-[#0B357B] font-bold'
                        : 'text-granite-700 hover:bg-cobalt-50/50 hover:text-[#0B357B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <House size={18} weight="bold" className="text-[#0B357B]" />
                      <span>{isPt ? 'Início' : 'Home'}</span>
                    </div>
                    <CaretRight size={14} weight="bold" className="text-granite-400" />
                  </a>

                  {/* Accommodations with Sub-options */}
                  <div className="pt-1">
                    <a
                      href={accommodationsHref}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        currentPath.includes('/acomodacoes') || currentPath.includes('/accommodations')
                          ? 'bg-cobalt-50 text-[#0B357B] font-bold'
                          : 'text-granite-700 hover:bg-cobalt-50/50 hover:text-[#0B357B]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Bed size={18} weight="bold" className="text-[#0B357B]" />
                        <span>{isPt ? 'Acomodações' : 'Accommodations'}</span>
                      </div>
                      <CaretRight size={14} weight="bold" className="text-granite-400" />
                    </a>

                    {/* Individual Room Links */}
                    <div className="ml-7 pl-3 border-l-2 border-cobalt-100 my-1.5 space-y-1">
                      {rooms.map((room) => (
                        <a
                          key={room.href}
                          href={room.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-medium text-granite-600 hover:text-[#0B357B] hover:bg-cobalt-50/50 transition-colors"
                        >
                          <span>{room.title}</span>
                          <span className="font-semibold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded text-[10px]">
                            {room.price}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <a
                    href={geresHref}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      currentPath.includes('/geres')
                        ? 'bg-cobalt-50 text-[#0B357B] font-bold'
                        : 'text-granite-700 hover:bg-cobalt-50/50 hover:text-[#0B357B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Compass size={18} weight="bold" className="text-[#0B357B]" />
                      <span>{isPt ? 'Guia do Gerês' : 'Gerês Guide'}</span>
                    </div>
                    <CaretRight size={14} weight="bold" className="text-granite-400" />
                  </a>

                  <a
                    href={facilitiesHref}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      currentPath.includes('/facilidades') || currentPath.includes('/facilities')
                        ? 'bg-cobalt-50 text-[#0B357B] font-bold'
                        : 'text-granite-700 hover:bg-cobalt-50/50 hover:text-[#0B357B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Sparkle size={18} weight="bold" className="text-[#0B357B]" />
                      <span>{isPt ? 'Facilidades' : 'Facilities'}</span>
                    </div>
                    <CaretRight size={14} weight="bold" className="text-granite-400" />
                  </a>

                  <a
                    href={contactsHref}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                      currentPath.includes('/contactos') || currentPath.includes('/contact')
                        ? 'bg-cobalt-50 text-[#0B357B] font-bold'
                        : 'text-granite-700 hover:bg-cobalt-50/50 hover:text-[#0B357B]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <PhoneCall size={18} weight="bold" className="text-[#0B357B]" />
                      <span>{isPt ? 'Contactos' : 'Contacts'}</span>
                    </div>
                    <CaretRight size={14} weight="bold" className="text-granite-400" />
                  </a>
                </nav>

                {/* Weather Widget */}
                <div className="pt-2 border-t border-cobalt-100">
                  <div className="text-[11px] font-semibold text-granite-500 uppercase tracking-wider mb-2">
                    {isPt ? 'Meteorologia em Direto • Gerês' : 'Live Weather • Gerês'}
                  </div>
                  <ActualWeatherWidget lang={lang} className="w-full h-[46px]" />
                </div>
              </div>

              {/* Bottom Actions: WhatsApp & Direct Phone Call */}
              <div className="shrink-0 bg-[#FAFBFD] p-4 border-t border-cobalt-100 space-y-2">
                <a
                  href="https://wa.me/351933176678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.24 16C12.83 16.27 13.28 16.42 13.64 16.53C14.25 16.73 14.8 16.7 15.24 16.63C15.73 16.56 16.74 16.02 16.95 15.43C17.16 14.84 17.16 14.34 17.1 14.23C17.04 14.12 16.88 14.06 16.64 13.94C16.4 13.82 15.21 13.23 14.99 13.15C14.77 13.07 14.61 13.03 14.45 13.27C14.29 13.51 13.82 14.06 13.68 14.23C13.54 14.39 13.4 14.41 13.16 14.29C12.92 14.17 12.15 13.92 11.24 13.11C10.53 12.48 10.05 11.7 9.91 11.46C9.77 11.22 9.9 11.09 10.02 10.97C10.13 10.86 10.27 10.68 10.39 10.54C10.5 10.4 10.55 10.3 10.63 10.14C10.71 9.97 10.67 9.83 10.61 9.71C10.55 9.59 10.08 8.42 9.88 7.95C9.69 7.49 9.49 7.55 9.34 7.54C9.2 7.54 9.04 7.33 8.53 7.33Z" />
                  </svg>
                  <span>{isPt ? 'Conversar no WhatsApp' : 'Chat on WhatsApp'}</span>
                </a>

                <a
                  href="tel:+351253391971"
                  className="w-full py-2.5 px-4 rounded-xl border border-cobalt-200 text-cobalt-900 bg-white hover:bg-cobalt-50 text-xs font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneCall size={15} weight="bold" className="text-[#0B357B]" />
                  <span>+351 253 391 971</span>
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )
      }
    </>
  );
};
