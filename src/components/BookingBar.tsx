import React, { useState, useMemo } from 'react';
import { CalendarBlank, Users, House, PhoneCall, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { rooms } from '../data/rooms';

interface BookingBarProps {
  lang?: 'pt' | 'en';
  defaultRoomId?: string;
  isDocked?: boolean;
  layout?: 'bar' | 'sidebar';
}

export const BookingBar: React.FC<BookingBarProps> = ({
  lang = 'pt',
  defaultRoomId,
  isDocked = false,
  layout = 'bar',
}) => {
  const isPt = lang === 'pt';
  const isSidebar = layout === 'sidebar';

  // State
  const [selectedRoomId, setSelectedRoomId] = useState<string>(defaultRoomId || '556');
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);

  const selectedRoom = useMemo(() => {
    return rooms.find((r) => r.id === selectedRoomId) || rooms[1];
  }, [selectedRoomId]);

  // Calculate estimated nights and total price
  const estimatedStay = useMemo(() => {
    if (!checkIn || !checkOut) return null;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (nights <= 0) return null;
    const total = nights * selectedRoom.pricePerNight;
    return { nights, total };
  }, [checkIn, checkOut, selectedRoom]);

  // Construct WhatsApp URL
  const whatsAppUrl = useMemo(() => {
    const roomName = isPt ? selectedRoom.titlePt : selectedRoom.titleEn;
    const checkInStr = checkIn || (isPt ? '[Data de Chegada]' : '[Check-in Date]');
    const checkOutStr = checkOut || (isPt ? '[Data de Partida]' : '[Check-out Date]');

    const message = isPt
      ? `Olá Casa Feijão! Gostaria de verificar disponibilidade para o ${roomName} de ${checkInStr} a ${checkOutStr} para ${adults} adulto(s)${
          children > 0 ? ` e ${children} criança(s)` : ''
        }. Podem confirmar disponibilidade e valor? Obrigado!`
      : `Hello Casa Feijão! I would like to check availability for the ${roomName} from ${checkInStr} to ${checkOutStr} for ${adults} adult(s)${
          children > 0 ? ` and ${children} child(ren)` : ''
        }. Could you please confirm? Thank you!`;

    return `https://wa.me/351933176678?text=${encodeURIComponent(message)}`;
  }, [isPt, selectedRoom, checkIn, checkOut, adults, children]);

  // Helper to format date cleanly without browser smushing
  const formatShortDate = (dateStr: string, isPtLang: boolean) => {
    if (!dateStr) return isPtLang ? 'Escolher data' : 'Choose date';
    try {
      const parts = dateStr.split('-');
      if (parts.length !== 3) return dateStr;
      const [y, m, d] = parts.map(Number);
      const monthsPt = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const month = isPtLang ? monthsPt[m - 1] : monthsEn[m - 1];
      return `${d} ${month} ${y}`;
    } catch {
      return dateStr;
    }
  };

  // Official Vector WhatsApp SVG Logo
  const WhatsAppIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8.01 12.27C8.14 12.44 9.76 14.94 12.24 16C12.83 16.27 13.28 16.42 13.64 16.53C14.25 16.73 14.8 16.7 15.24 16.63C15.73 16.56 16.74 16.02 16.95 15.43C17.16 14.84 17.16 14.34 17.1 14.23C17.04 14.12 16.88 14.06 16.64 13.94C16.4 13.82 15.21 13.23 14.99 13.15C14.77 13.07 14.61 13.03 14.45 13.27C14.29 13.51 13.82 14.06 13.68 14.23C13.54 14.39 13.4 14.41 13.16 14.29C12.92 14.17 12.15 13.92 11.24 13.11C10.53 12.48 10.05 11.7 9.91 11.46C9.77 11.22 9.9 11.09 10.02 10.97C10.13 10.86 10.27 10.68 10.39 10.54C10.5 10.4 10.55 10.3 10.63 10.14C10.71 9.97 10.67 9.83 10.61 9.71C10.55 9.59 10.08 8.42 9.88 7.95C9.69 7.49 9.49 7.55 9.34 7.54C9.2 7.54 9.04 7.33 8.53 7.33Z" />
    </svg>
  );

  return (
    <div
      className={
        isDocked
          ? 'w-full bg-white/95 backdrop-blur-md border-t-2 border-cobalt-200 shadow-2xl px-3 sm:px-6 py-2.5 sm:py-3.5 relative z-30'
          : isSidebar
          ? 'w-full bg-white rounded-3xl shadow-tile border border-cobalt-100 p-4 sm:p-6 relative z-20'
          : 'w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-tile border border-cobalt-100 p-3 sm:p-5 lg:p-6 relative z-20 overflow-hidden'
      }
    >
      <div className={isDocked ? 'max-w-7xl mx-auto' : ''}>
        {/* Card Header: Compact title & estimate badge */}
        <div
          className={`flex items-center justify-between gap-2 border-b border-granite-100 ${
            isDocked ? 'pb-2 mb-2 sm:mb-3' : 'pb-2.5 mb-3 sm:mb-4'
          }`}
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-cobalt-50 flex items-center justify-center text-[#0B357B] border border-cobalt-200/80 shrink-0">
              <CalendarBlank size={15} weight="bold" className="text-[#0B357B]" />
            </div>
            <h3 className="text-xs sm:text-base font-serif font-bold text-cobalt-950 truncate">
              {isPt ? 'Verificar Disponibilidade & Reservar' : 'Check Availability & Reserve'}
            </h3>
          </div>

          {estimatedStay && (
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-[11px] font-semibold shrink-0">
              <span>
                {estimatedStay.nights} {isPt ? 'noite(s):' : 'night(s):'}
              </span>
              <span className="font-bold text-xs text-emerald-900 font-sans">{estimatedStay.total}€</span>
            </div>
          )}
        </div>

        {/* 
          MOBILE & TABLET INPUT CAPSULE (< lg:)
          Grouped, elegant, Apple-style segmented inputs:
          - Zero smushing
          - Check-in & Check-out unified in a generous two-sided capsule with hairline divider
          - High-contrast typography and instant native date picker tap trigger
        */}
        <div className="lg:hidden space-y-2">
          {/* Accommodation Selector */}
          <div className="bg-granite-50/90 hover:bg-white border border-cobalt-200/80 rounded-xl px-3 py-2 transition-colors focus-within:bg-white focus-within:ring-2 focus-within:ring-[#0B357B]/30">
            <label className="text-[10px] font-bold uppercase tracking-wider text-[#0B357B] flex items-center gap-1.5 font-sans mb-0.5">
              <House size={12} weight="bold" className="text-[#0B357B]" />
              <span>{isPt ? 'Acomodação' : 'Accommodation'}</span>
            </label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
              className="w-full bg-transparent text-xs font-semibold text-cobalt-950 focus:outline-none cursor-pointer py-0.5"
            >
              {rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {isPt ? room.titlePt : room.titleEn} ({room.pricePerNight}€/noite)
                </option>
              ))}
            </select>
          </div>

          {/* UNIFIED DATE RANGE CAPSULE (Left: Check-In, Right: Check-Out) */}
          <div className="bg-granite-50/90 border border-cobalt-200/80 rounded-xl grid grid-cols-2 divide-x divide-cobalt-200/80 overflow-hidden relative">
            {/* Check-In Half */}
            <div className="relative px-3 py-2 flex flex-col justify-center min-w-0 active:bg-cobalt-50/60 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B357B] flex items-center gap-1 font-sans">
                <CalendarBlank size={12} weight="bold" className="text-[#0B357B]" />
                <span>{isPt ? 'Entrada' : 'Check-In'}</span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cobalt-950 mt-0.5 truncate">
                {formatShortDate(checkIn, isPt)}
              </span>
              {/* Invisible full-bleed native date input overlay */}
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                aria-label={isPt ? 'Data de Entrada' : 'Check-in Date'}
              />
            </div>

            {/* Check-Out Half */}
            <div className="relative px-3 py-2 flex flex-col justify-center min-w-0 active:bg-cobalt-50/60 transition-colors">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B357B] flex items-center gap-1 font-sans">
                <CalendarBlank size={12} weight="bold" className="text-[#0B357B]" />
                <span>{isPt ? 'Saída' : 'Check-Out'}</span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-cobalt-950 mt-0.5 truncate">
                {formatShortDate(checkOut, isPt)}
              </span>
              {/* Invisible full-bleed native date input overlay */}
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                aria-label={isPt ? 'Data de Saída' : 'Check-out Date'}
              />
            </div>
          </div>

          {/* Guests Capsule (Left: Adults, Right: Kids) */}
          <div className="bg-granite-50/90 border border-cobalt-200/80 rounded-xl grid grid-cols-2 divide-x divide-cobalt-200/80 overflow-hidden">
            <div className="px-3 py-2 flex items-center justify-between min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B357B] flex items-center gap-1 font-sans">
                <Users size={12} weight="bold" className="text-[#0B357B]" />
                <span>{isPt ? 'Adultos' : 'Adults'}</span>
              </span>
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="bg-transparent text-xs font-semibold text-cobalt-950 focus:outline-none cursor-pointer pl-2"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div className="px-3 py-2 flex items-center justify-between min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0B357B] flex items-center gap-1 font-sans">
                <Users size={12} weight="bold" className="text-[#0B357B]" />
                <span>{isPt ? 'Crianças' : 'Kids'}</span>
              </span>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="bg-transparent text-xs font-semibold text-cobalt-950 focus:outline-none cursor-pointer pl-2"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 
          DESKTOP INPUTS BAR (lg: and above)
          Original 4-column layout preserving ultrawide & desktop elegance
        */}
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {/* Room Selection */}
          <div className="space-y-1 min-w-0">
            <label className="text-xs font-semibold text-cobalt-900 flex items-center gap-1.5 font-sans">
              <House size={14} weight="bold" className="text-[#0B357B] shrink-0" />
              <span>{isPt ? 'Acomodação' : 'Accommodation'}</span>
            </label>
            <div className="relative min-w-0">
              <select
                value={selectedRoomId}
                onChange={(e) => setSelectedRoomId(e.target.value)}
                className="w-full min-w-0 max-w-full box-border px-3 py-2 rounded-xl border border-granite-200 text-xs sm:text-sm font-medium text-cobalt-950 bg-granite-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B357B]/30 focus:border-[#0B357B] transition-all cursor-pointer font-sans h-10"
              >
                {rooms.map((room) => (
                  <option key={room.id} value={room.id}>
                    {isPt ? room.titlePt : room.titleEn} ({room.pricePerNight}€/noite)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Check-In Date */}
          <div className="space-y-1 min-w-0">
            <label className="text-xs font-semibold text-cobalt-900 flex items-center gap-1.5 font-sans">
              <CalendarBlank size={14} weight="bold" className="text-[#0B357B] shrink-0" />
              <span>{isPt ? 'Data de Chegada' : 'Check-In'}</span>
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full min-w-0 max-w-full box-border px-3 py-2 rounded-xl border border-granite-200 text-xs sm:text-sm font-medium text-cobalt-950 bg-granite-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B357B]/30 focus:border-[#0B357B] transition-all cursor-pointer font-sans h-10"
            />
          </div>

          {/* Check-Out Date */}
          <div className="space-y-1 min-w-0">
            <label className="text-xs font-semibold text-cobalt-900 flex items-center gap-1.5 font-sans">
              <CalendarBlank size={14} weight="bold" className="text-[#0B357B] shrink-0" />
              <span>{isPt ? 'Data de Partida' : 'Check-Out'}</span>
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full min-w-0 max-w-full box-border px-3 py-2 rounded-xl border border-granite-200 text-xs sm:text-sm font-medium text-cobalt-950 bg-granite-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B357B]/30 focus:border-[#0B357B] transition-all cursor-pointer font-sans h-10"
            />
          </div>

          {/* Guests */}
          <div className="space-y-1 min-w-0">
            <label className="text-xs font-semibold text-cobalt-900 flex items-center gap-1.5 font-sans">
              <Users size={14} weight="bold" className="text-[#0B357B] shrink-0" />
              <span>{isPt ? 'Hóspedes' : 'Guests'}</span>
            </label>
            <div className="grid grid-cols-2 gap-2 min-w-0">
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full min-w-0 max-w-full box-border px-2 py-2 rounded-xl border border-granite-200 text-xs font-medium text-cobalt-950 bg-granite-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B357B]/30 focus:border-[#0B357B] font-sans h-10"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {isPt ? 'Adultos' : 'Adults'}
                  </option>
                ))}
              </select>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full min-w-0 max-w-full box-border px-2 py-2 rounded-xl border border-granite-200 text-xs font-medium text-cobalt-950 bg-granite-50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B357B]/30 focus:border-[#0B357B] font-sans h-10"
              >
                {[0, 1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n} {isPt ? 'Crianças' : 'Kids'}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-3.5 pt-3 border-t border-granite-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* Trust points */}
          <div className="flex items-center justify-center sm:justify-start gap-3 text-[11px] text-granite-600 font-sans">
            <span className="flex items-center gap-1">
              <CheckCircle size={13} weight="fill" className="text-emerald-500 shrink-0" />
              <span>{isPt ? 'Cancelamento flexível' : 'Flexible cancellation'}</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle size={13} weight="fill" className="text-[#0B357B] shrink-0" />
              <span>{isPt ? 'Wi-Fi e Parque Grátis' : 'Free Wi-Fi & Parking'}</span>
            </span>
          </div>

          {/* Buttons: Clean phone link + Full Official WhatsApp CTA */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="tel:+351253391971"
              className="px-3 py-2.5 rounded-xl border border-granite-200 hover:border-cobalt-300 text-granite-700 hover:text-cobalt-900 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shrink-0 whitespace-nowrap bg-white hover:bg-cobalt-50/50"
              title="Ligar: 253 391 971"
            >
              <PhoneCall size={14} weight="bold" className="text-[#0B357B]" />
              <span className="font-sans font-medium text-cobalt-950">253 391 971</span>
            </a>

            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-0 px-4 py-2.5 sm:py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 group font-sans truncate"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" />
              <span className="truncate">{isPt ? 'Reservar por WhatsApp' : 'Reserve via WhatsApp'}</span>
              <ArrowRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5 shrink-0 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
