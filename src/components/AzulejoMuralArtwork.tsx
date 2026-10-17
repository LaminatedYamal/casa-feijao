import React from 'react';

export const MasterMuralSVG: React.FC<{
  viewBox?: string;
  className?: string;
  preserveAspectRatio?: string;
}> = ({
  viewBox = '0 0 600 400',
  className = 'w-full h-full',
  preserveAspectRatio = 'none',
}) => {
  return (
    <svg
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio={preserveAspectRatio}
    >
      <defs>
        {/* Soft Ceramic Glaze Shading */}
        <radialGradient id="sunGlow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#EEF6FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lakeWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D9EBFF" />
          <stop offset="100%" stopColor="#BCD9FF" />
        </linearGradient>
      </defs>

      {/* 1. BASE CERAMIC BACKGROUND */}
      <rect width="600" height="400" fill="#FAFBFD" />
      <rect width="600" height="400" fill="url(#sunGlow)" />

      {/* 2. SKY & CLOUDS (Top Rows 0-1) */}
      <g stroke="#2B70C9" strokeWidth="1" fill="none" opacity="0.6">
        {/* Fluffy clouds with traditional hatching */}
        <path d="M120 45 Q135 35 155 40 Q175 35 190 45 Q205 45 215 55 L110 55 Q115 48 120 45 Z" fill="#EEF6FF" stroke="#1A54A6" strokeWidth="1.2" />
        <path d="M125 48 Q150 42 175 48 M135 52 Q160 46 185 52" stroke="#2B70C9" strokeWidth="0.8" />
        
        <path d="M380 40 Q400 28 425 35 Q445 28 465 40 Q480 40 490 50 L370 50 Q375 44 380 40 Z" fill="#EEF6FF" stroke="#1A54A6" strokeWidth="1.2" />
        <path d="M390 44 Q420 38 450 44 M400 48 Q430 42 460 48" stroke="#2B70C9" strokeWidth="0.8" />

        {/* Birds soaring */}
        <path d="M260 42 Q265 38 270 42 Q275 38 280 42" stroke="#003366" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M285 36 Q289 33 293 36 Q297 33 301 36" stroke="#003366" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M310 46 Q313 43 317 46 Q321 43 325 46" stroke="#003366" strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* 3. DISTANT MOUNTAIN CRESTS (Serra do Gerês - y: 40-160) */}
      <g stroke="#003366" strokeWidth="1.8" fill="#E8F1FF" strokeLinejoin="round">
        {/* Far background mountain ridges */}
        <path d="M30 140 L90 100 L160 125 L240 85 L320 120 L400 75 L470 110 L540 85 L570 115 L570 200 L30 200 Z" fill="#EEF6FF" opacity="0.7" stroke="#1A54A6" strokeWidth="1.2" />
        
        {/* Mid-range Granite Peaks with cross-hatching */}
        <path d="M30 180 L110 130 L180 155 L270 115 L350 145 L430 105 L510 140 L570 125 L570 240 L30 240 Z" fill="#D9EBFF" opacity="0.8" stroke="#0047AB" strokeWidth="1.6" />
        
        {/* Peak shading lines (traditional azulejo hatching) */}
        <path d="M270 115 L260 150 M270 115 L280 145 M265 125 L255 145 M275 125 L285 140" stroke="#003366" strokeWidth="1" />
        <path d="M430 105 L420 140 M430 105 L440 135 M425 115 L415 135 M435 115 L445 130" stroke="#003366" strokeWidth="1" />
      </g>

      {/* 4. PROMINENT ROCK CRAGS & PEDRA BELA (y: 130-220) */}
      <g stroke="#003366" strokeWidth="2" fill="#BCD9FF">
        <path d="M330 155 L380 135 L420 160 L450 145 L480 175 L420 220 L330 210 Z" fill="#BCD9FF" opacity="0.6" />
        <path d="M340 170 L370 150 L395 180 M375 160 L400 190" stroke="#003366" strokeWidth="1.2" />
      </g>

      {/* 5. CASCATA DO ARADO & WATERFALL FOAM (Cols 3 & 4, y: 125-240) */}
      <g>
        {/* Granite canyon gorge */}
        <path d="M365 135 L385 140 L380 230 L360 225 Z" fill="#003366" opacity="0.85" />
        {/* Waterfall cascading streams */}
        <path d="M370 135 L372 225 M376 137 L378 228 M382 139 L380 226" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="8 3" />
        <path d="M368 150 L375 220 M374 160 L381 224" stroke="#D9EBFF" strokeWidth="1.5" />
        {/* Waterfall foam pool */}
        <ellipse cx="375" cy="232" rx="22" ry="8" fill="#FFFFFF" stroke="#0047AB" strokeWidth="1.5" />
        <ellipse cx="375" cy="232" rx="14" ry="4" fill="#EEF6FF" stroke="#003366" strokeWidth="1" />
        {/* Stream continuing down */}
        <path d="M375 238 Q360 260 380 280 Q400 300 390 320" stroke="#0047AB" strokeWidth="3" fill="none" />
      </g>

      {/* 6. POÇO AZUL LAGOON (Col 4, Row 2, x: 420-490, y: 210-270) */}
      <g>
        {/* Natural granite basin */}
        <path d="M415 235 C410 215 485 210 490 230 C495 255 420 260 415 235 Z" fill="#003366" stroke="#002B5C" strokeWidth="2" />
        {/* Turquoise crystalline water rings */}
        <ellipse cx="452" cy="235" rx="30" ry="16" fill="#0047AB" stroke="#5899FF" strokeWidth="1.5" />
        <ellipse cx="452" cy="235" rx="20" ry="10" fill="#2B70C9" stroke="#FFFFFF" strokeWidth="1.2" />
        <ellipse cx="452" cy="235" rx="10" ry="5" fill="#EEF6FF" />
        <path d="M435 232 Q452 228 469 232" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
        {/* Steaming Thermal Pool next to it (Torneros) */}
        <ellipse cx="465" cy="175" rx="18" ry="7" fill="#EEF6FF" stroke="#0047AB" strokeWidth="1.5" />
        <path d="M458 170 Q462 160 458 150 M466 168 Q470 156 465 146 M472 170 Q476 160 472 152" stroke="#0047AB" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      </g>

      {/* 7. THE GREAT OAK OF MATA DE ALBERGARIA (Cols 0 & 1, y: 70-290) */}
      <g>
        {/* Oak Trunk */}
        <path d="M95 170 Q110 220 100 290 L80 290 Q85 220 75 180 Z" fill="#003366" stroke="#002B5C" strokeWidth="2" />
        <path d="M85 210 Q98 215 105 200 M80 240 Q95 245 98 230 M88 260 Q96 265 102 255" stroke="#1A54A6" strokeWidth="1.5" />
        {/* Roots */}
        <path d="M80 290 Q65 295 55 295 M100 290 Q115 295 125 295" stroke="#003366" strokeWidth="2.5" strokeLinecap="round" />
        {/* Sprawling Leaf Canopy with traditional stippling & foliage lobes */}
        <path d="M50 140 Q30 110 60 90 Q80 70 110 80 Q140 65 160 90 Q190 100 180 130 Q200 160 170 180 Q140 195 110 185 Q80 200 60 175 Q35 170 50 140 Z" fill="#0047AB" stroke="#003366" strokeWidth="2" />
        <path d="M65 125 Q50 100 75 85 Q95 75 120 85 Q145 75 160 95 Q175 120 155 145 Q130 160 100 150 Q75 160 65 125 Z" fill="#2B70C9" stroke="#003366" strokeWidth="1.5" />
        <path d="M80 115 Q95 100 115 105 Q135 100 145 115 Q150 130 135 140 Q115 145 95 140 Q80 135 80 115 Z" fill="#D9EBFF" stroke="#0047AB" strokeWidth="1.2" />
      </g>

      {/* 8. ROMAN MILESTONE & GARRANO PONY (Col 0 & 1, Row 2, y: 220-290) */}
      <g>
        {/* Roman Milestone Column (Geira Via XVIII) */}
        <path d="M38 230 L54 230 L52 285 L40 285 Z" fill="#EEF6FF" stroke="#003366" strokeWidth="2" />
        <rect x="35" y="225" width="22" height="6" rx="1" fill="#D9EBFF" stroke="#003366" strokeWidth="1.5" />
        <rect x="38" y="285" width="16" height="5" rx="1" fill="#D9EBFF" stroke="#003366" strokeWidth="1.5" />
        {/* Inscription XVIII */}
        <text x="46" y="255" fontFamily="serif" fontSize="8" fontWeight="bold" fill="#003366" textAnchor="middle">XVIII</text>
        <line x1="41" y1="262" x2="51" y2="262" stroke="#0047AB" strokeWidth="1" />
        <line x1="42" y1="268" x2="50" y2="268" stroke="#0047AB" strokeWidth="1" />

        {/* Garrano Mountain Pony at (155, 255) */}
        <g stroke="#003366" strokeWidth="1.8" fill="#0047AB">
          {/* Body */}
          <ellipse cx="155" cy="255" rx="18" ry="11" />
          {/* Neck & Head grazing downwards */}
          <path d="M142 250 L130 262 L124 260 L126 270 L134 272 L144 258 Z" />
          {/* Ears */}
          <path d="M132 258 L130 252 L134 255 Z" fill="#003366" />
          {/* Mane */}
          <path d="M138 250 Q132 254 130 264" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
          {/* Legs */}
          <line x1="142" y1="264" x2="140" y2="285" />
          <line x1="147" y1="265" x2="146" y2="284" />
          <line x1="165" y1="264" x2="164" y2="285" />
          <line x1="170" y1="263" x2="171" y2="284" />
          {/* Tail */}
          <path d="M172 252 Q180 262 176 276" stroke="#003366" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* 9. CASA FEIJÃO & COTTAGES (Cols 2 & 3, Rows 2 & 3, x: 210-350, y: 190-300) */}
      <g>
        {/* Valley Ground Terraces with granite stone walls */}
        <path d="M190 260 Q270 240 370 265 L370 300 L190 300 Z" fill="#EEF6FF" stroke="#0047AB" strokeWidth="1.5" />
        <path d="M190 280 Q280 265 370 285" stroke="#003366" strokeWidth="1.5" strokeDasharray="5 3" />

        {/* Main Casa Feijão Cottage */}
        {/* Granite Stone Base */}
        <rect x="235" y="215" width="85" height="48" rx="2" fill="#FAFBFD" stroke="#003366" strokeWidth="2.2" />
        {/* Tiled Gable Roof */}
        <path d="M225 218 L277 185 L330 218 Z" fill="#0047AB" stroke="#003366" strokeWidth="2.2" />
        {/* Tile Roof Lines */}
        <path d="M240 212 L277 189 L315 212 M252 205 L277 193 L302 205" stroke="#FFFFFF" strokeWidth="1.2" />
        
        {/* Stone Chimney with Hearth Smoke */}
        <rect x="300" y="188" width="10" height="18" fill="#D9EBFF" stroke="#003366" strokeWidth="1.6" />
        <path d="M305 184 Q312 172 306 160 Q300 148 308 136" stroke="#0047AB" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M308 180 Q315 168 310 156" stroke="#2B70C9" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Wooden Balcony (Apartamento T1 & T3) */}
        <rect x="245" y="232" width="65" height="14" fill="#EEF6FF" stroke="#003366" strokeWidth="1.5" />
        <line x1="245" y1="237" x2="310" y2="237" stroke="#0047AB" strokeWidth="1" />
        <line x1="255" y1="232" x2="255" y2="246" stroke="#0047AB" strokeWidth="1" />
        <line x1="268" y1="232" x2="268" y2="246" stroke="#0047AB" strokeWidth="1" />
        <line x1="281" y1="232" x2="281" y2="246" stroke="#0047AB" strokeWidth="1" />
        <line x1="294" y1="232" x2="294" y2="246" stroke="#0047AB" strokeWidth="1" />
        <line x1="304" y1="232" x2="304" y2="246" stroke="#0047AB" strokeWidth="1" />

        {/* Arched Stone Door */}
        <path d="M270 263 L270 248 Q277 243 284 248 L284 263 Z" fill="#003366" />
        
        {/* Windows */}
        <rect x="250" y="248" width="10" height="10" fill="#FFFFFF" stroke="#003366" strokeWidth="1.2" />
        <line x1="255" y1="248" x2="255" y2="258" stroke="#003366" strokeWidth="1" />
        <line x1="250" y1="253" x2="260" y2="253" stroke="#003366" strokeWidth="1" />

        <rect x="295" y="248" width="10" height="10" fill="#FFFFFF" stroke="#003366" strokeWidth="1.2" />
        <line x1="300" y1="248" x2="300" y2="258" stroke="#003366" strokeWidth="1" />
        <line x1="295" y1="253" x2="305" y2="253" stroke="#003366" strokeWidth="1" />

        {/* Flower trellis & Pergola on side */}
        <path d="M215 235 L235 235 L235 263 L215 263 Z" fill="#D9EBFF" stroke="#0047AB" strokeWidth="1.2" strokeDasharray="3 3" />
        <circle cx="225" cy="245" r="3" fill="#0047AB" />
        <circle cx="220" cy="255" r="2.5" fill="#0047AB" />
        <circle cx="230" cy="252" r="2.5" fill="#0047AB" />
      </g>

      {/* 10. ALBUFEIRA DA CANIÇADA & BOCO RIVER BEACH (Rows 2 & 3, y: 280-370) */}
      <g>
        {/* Vast Lake Water Body */}
        <path d="M120 300 Q260 285 410 295 Q510 290 570 305 L570 375 L30 375 L30 305 Q70 310 120 300 Z" fill="url(#lakeWater)" stroke="#0047AB" strokeWidth="1.5" />

        {/* Gentle Rolling Water Waves */}
        <path d="M50 325 Q120 315 190 325 T330 325 T470 325 T560 325" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        <path d="M70 340 Q150 330 230 340 T390 340 T540 340" stroke="#003366" strokeWidth="1.6" fill="none" />
        <path d="M40 355 Q130 345 220 355 T400 355 T550 355" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        <path d="M80 368 Q170 358 260 368 T440 368" stroke="#003366" strokeWidth="1.4" fill="none" />

        {/* Sandy Shore of Praia do Boco with pier at (210, 310) */}
        <path d="M170 300 Q220 318 250 305 L260 315 Q220 325 160 305 Z" fill="#FAFBFD" stroke="#003366" strokeWidth="1.5" />
        {/* Wooden Jetty */}
        <rect x="235" y="305" width="22" height="5" fill="#003366" stroke="#002B5C" strokeWidth="1" />
        <line x1="240" y1="310" x2="240" y2="318" stroke="#003366" strokeWidth="1.5" />
        <line x1="250" y1="310" x2="250" y2="318" stroke="#003366" strokeWidth="1.5" />

        {/* Traditional Wooden Sailing Boat at (355, 330) */}
        <g stroke="#003366" strokeWidth="1.8">
          {/* Hull */}
          <path d="M335 342 L380 342 L372 352 L343 352 Z" fill="#003366" />
          {/* Mast */}
          <line x1="358" y1="342" x2="358" y2="314" strokeWidth="2" />
          {/* White Canvas Sail */}
          <path d="M358 316 L378 338 L358 338 Z" fill="#FFFFFF" stroke="#0047AB" strokeWidth="1.5" />
          <path d="M356 322 L342 338 L356 338 Z" fill="#D9EBFF" stroke="#0047AB" strokeWidth="1.5" />
          {/* Water reflection */}
          <path d="M340 355 Q360 352 375 355" stroke="#FFFFFF" strokeWidth="1.5" fill="none" />
        </g>
      </g>

      {/* 11. AUTHENTIC BAROQUE ROCOCO CERAMIC BORDER (Moldura de Cercadura e Volutas) */}
      {/* Outer border lines */}
      <rect x="4" y="4" width="592" height="392" rx="4" fill="none" stroke="#002B5C" strokeWidth="3" />
      <rect x="10" y="10" width="580" height="380" rx="2" fill="none" stroke="#0047AB" strokeWidth="1.5" />
      <rect x="14" y="14" width="572" height="372" fill="none" stroke="#002B5C" strokeWidth="0.8" strokeDasharray="4 2" />

      {/* Top Border Scrollwork & Central Cartouche at (300, 20) */}
      <g stroke="#003366" strokeWidth="1.8" fill="#EEF6FF">
        {/* Top-Center Cartouche Banner */}
        <path d="M220 12 Q300 2 380 12 Q390 26 360 28 Q300 24 240 28 Q210 26 220 12 Z" fill="#FAFBFD" stroke="#003366" strokeWidth="2" />
        <text x="300" y="22" fontFamily="serif" fontSize="11" fontWeight="bold" letterSpacing="3" fill="#003366" textAnchor="middle">
          CASA FEIJÃO • GERÊS
        </text>
        {/* Top acanthus volutes spreading left and right */}
        <path d="M218 16 C170 8 130 22 90 14 C60 8 40 22 18 16" fill="none" stroke="#0047AB" strokeWidth="2" />
        <path d="M382 16 C430 8 470 22 510 14 C540 8 560 22 582 16" fill="none" stroke="#0047AB" strokeWidth="2" />
      </g>

      {/* Bottom Border Scrollwork & Central Shell Cartouche at (300, 385) */}
      <g stroke="#003366" strokeWidth="1.8" fill="#EEF6FF">
        {/* Rococo Shell at Bottom Center */}
        <path d="M250 382 C280 370 320 370 350 382 C340 395 260 395 250 382 Z" fill="#FAFBFD" stroke="#003366" strokeWidth="2" />
        <path d="M275 392 L300 375 L325 392 M285 392 L300 378 L315 392" stroke="#0047AB" strokeWidth="1.2" />
        <text x="300" y="386" fontFamily="serif" fontSize="7.5" fontStyle="italic" letterSpacing="2" fill="#003366" textAnchor="middle">
          PARQUE NACIONAL DA PENEDA-GERÊS
        </text>
        {/* Bottom acanthus volutes spreading left and right */}
        <path d="M248 384 C190 392 140 378 90 386 C60 392 40 378 18 384" fill="none" stroke="#0047AB" strokeWidth="2" />
        <path d="M352 384 C410 392 460 378 510 386 C540 392 560 378 582 384" fill="none" stroke="#0047AB" strokeWidth="2" />
      </g>

      {/* Left Border Baroque Vine (x: 10-25) */}
      <path d="M16 25 C24 80 10 140 20 200 C10 260 24 320 16 375" stroke="#0047AB" strokeWidth="2" fill="none" />
      <circle cx="18" cy="100" r="3" fill="#003366" />
      <circle cx="18" cy="200" r="3.5" fill="#003366" />
      <circle cx="18" cy="300" r="3" fill="#003366" />

      {/* Right Border Baroque Vine (x: 575-590) */}
      <path d="M584 25 C576 80 590 140 580 200 C590 260 576 320 584 375" stroke="#0047AB" strokeWidth="2" fill="none" />
      <circle cx="582" cy="100" r="3" fill="#003366" />
      <circle cx="582" cy="200" r="3.5" fill="#003366" />
      <circle cx="582" cy="300" r="3" fill="#003366" />

      {/* Four Corner Volutes */}
      <g stroke="#003366" strokeWidth="2" fill="#EEF6FF">
        {/* Top-Left */}
        <path d="M15 15 C30 15 35 30 25 35 C15 40 15 25 25 20" />
        {/* Top-Right */}
        <path d="M585 15 C570 15 565 30 575 35 C585 40 585 25 575 20" />
        {/* Bottom-Left */}
        <path d="M15 385 C30 385 35 370 25 365 C15 360 15 375 25 380" />
        {/* Bottom-Right */}
        <path d="M585 385 C570 385 565 370 575 365 C585 360 585 375 575 380" />
      </g>
    </svg>
  );
};
