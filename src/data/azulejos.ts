export interface AzulejoTile {
  id: string;
  titlePt: string;
  titleEn: string;
  subtitlePt: string;
  subtitleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  distanceOrFactPt: string;
  distanceOrFactEn: string;
  tagPt: string;
  tagEn: string;
  pricePt?: string;
  priceEn?: string;
  link: string;
  ctaPt: string;
  ctaEn: string;
  svgPath: string;
}

export const azulejoTiles: AzulejoTile[] = [
  // 1. ESTÚDIO DE MONTANHA (Accomodation)
  {
    id: 'estudio',
    titlePt: 'Estúdio de Montanha',
    titleEn: 'Mountain Studio',
    subtitlePt: 'Aconchego para Casais',
    subtitleEn: 'Cozy Mountain Hideaway',
    descriptionPt: 'Estúdio acolhedor com vista panorâmica para o lago e montanhas. Cozinha equipada, WC privativo e churrasqueira ao ar livre.',
    descriptionEn: 'Welcoming studio with panoramic lake & mountain vistas. Equipped kitchenette, private bath, and outdoor BBQ.',
    distanceOrFactPt: 'Desde 70€ / noite',
    distanceOrFactEn: 'From 70€ / night',
    tagPt: 'Acomodação',
    tagEn: 'Accommodation',
    pricePt: '70€',
    priceEn: '70€',
    link: '/acomodacoes/estudio',
    ctaPt: 'Ver Estúdio',
    ctaEn: 'View Studio',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <!-- Ornate Ceramic Border Frame -->
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Corner Filigree -->
      <path d="M14 26 C20 20 20 20 26 14" stroke="#0047AB" stroke-width="1.5" fill="none" />
      <path d="M106 26 C100 20 100 20 94 14" stroke="#0047AB" stroke-width="1.5" fill="none" />
      <path d="M14 94 C20 100 20 100 26 106" stroke="#0047AB" stroke-width="1.5" fill="none" />
      <path d="M106 94 C100 100 100 100 94 106" stroke="#0047AB" stroke-width="1.5" fill="none" />
      <!-- Studio Cottage & Mountain Backdrop -->
      <path d="M22 62 L42 42 L62 58 L82 38 L98 58" fill="none" stroke="#003366" stroke-width="2" stroke-linecap="round" />
      <!-- Sun Rays -->
      <circle cx="60" cy="36" r="8" fill="#D9EBFF" stroke="#0047AB" stroke-width="1.5" />
      <path d="M60 22 L60 26 M60 46 L60 50 M46 36 L50 36 M70 36 L74 36" stroke="#0047AB" stroke-width="1.5" stroke-linecap="round" />
      <!-- Cottage House -->
      <path d="M38 68 L60 50 L82 68 L82 96 L38 96 Z" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <!-- Chimney with smoke -->
      <rect x="68" y="52" width="6" height="12" fill="#D9EBFF" stroke="#003366" stroke-width="1.5" />
      <path d="M71 48 Q74 44 71 40 Q68 36 72 32" fill="none" stroke="#0047AB" stroke-width="1.2" stroke-linecap="round" />
      <!-- Door with arched stone -->
      <path d="M54 96 L54 78 Q60 72 66 78 L66 96 Z" fill="#0047AB" stroke="#003366" stroke-width="1.5" />
      <!-- Window with cross panes -->
      <rect x="42" y="74" width="8" height="8" fill="#FFFFFF" stroke="#003366" stroke-width="1.2" />
      <line x1="46" y1="74" x2="46" y2="82" stroke="#003366" stroke-width="1" />
      <line x1="42" y1="78" x2="50" y2="78" stroke="#003366" stroke-width="1" />
    </svg>`
  },

  // 2. APARTAMENTO T1 (Accomodation)
  {
    id: 't1',
    titlePt: 'Apartamento T1 com Lareira',
    titleEn: 'T1 with Hearth & Balcony',
    subtitlePt: '40 m² com Varanda Panorâmica',
    subtitleEn: '40 m² with Balcony & Fireplace',
    descriptionPt: 'Espaçoso refúgio com quarto de casal independente, sala com lareira para noites de inverno, cozinha com forno e varanda sobre o vale.',
    descriptionEn: 'Separate bedroom, living room with cozy stone fireplace, full kitchen with oven, and scenic balcony over the valley.',
    distanceOrFactPt: 'Desde 80€ / noite',
    distanceOrFactEn: 'From 80€ / night',
    tagPt: 'Acomodação',
    tagEn: 'Accommodation',
    pricePt: '80€',
    priceEn: '80€',
    link: '/acomodacoes/apartamento-t1',
    ctaPt: 'Ver Apartamento T1',
    ctaEn: 'View Apartment T1',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Fireplace & Hearth Motifs -->
      <!-- Stone Arch Mantel -->
      <path d="M30 96 L30 50 Q60 38 90 50 L90 96 Z" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <!-- Hearth Fire Box -->
      <path d="M42 96 L42 66 Q60 56 78 66 L78 96 Z" fill="#003366" stroke="#003366" stroke-width="1.5" />
      <!-- Flame in Hearth -->
      <path d="M60 92 C52 86 52 74 60 64 C68 74 68 86 60 92 Z" fill="#0047AB" stroke="#5899FF" stroke-width="1.5" />
      <path d="M60 92 C56 88 56 80 60 74 C64 80 64 88 60 92 Z" fill="#FFFFFF" />
      <!-- Balcony Railing Details on top -->
      <path d="M26 36 L94 36 M26 44 L94 44" stroke="#0047AB" stroke-width="1.5" />
      <line x1="36" y1="36" x2="36" y2="44" stroke="#0047AB" stroke-width="1.2" />
      <line x1="48" y1="36" x2="48" y2="44" stroke="#0047AB" stroke-width="1.2" />
      <line x1="60" y1="36" x2="60" y2="44" stroke="#0047AB" stroke-width="1.2" />
      <line x1="72" y1="36" x2="72" y2="44" stroke="#0047AB" stroke-width="1.2" />
      <line x1="84" y1="36" x2="84" y2="44" stroke="#0047AB" stroke-width="1.2" />
    </svg>`
  },

  // 3. APARTAMENTO T3 (Accomodation)
  {
    id: 't3',
    titlePt: 'Apartamento T3 Familiar',
    titleEn: 'T3 Family Sanctuary',
    subtitlePt: '70 m² para até 8 Hóspedes',
    subtitleEn: '70 m² for up to 8 Guests',
    descriptionPt: 'Ideal para famílias grandes ou grupos: 3 quartos de casal, grande salão de convívio com lareira, cozinha espaçosa e varanda corrida.',
    descriptionEn: 'Premier family residence: 3 double bedrooms, expansive salon with granite hearth, full kitchen, and wide balcony.',
    distanceOrFactPt: 'Desde 180€ / noite',
    distanceOrFactEn: 'From 180€ / night',
    tagPt: 'Acomodação',
    tagEn: 'Accommodation',
    pricePt: '180€',
    priceEn: '180€',
    link: '/acomodacoes/apartamento-t3',
    ctaPt: 'Ver Apartamento T3',
    ctaEn: 'View Apartment T3',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Three Gables / 3 Bedrooms House Motif -->
      <path d="M20 62 L36 46 L52 62" fill="none" stroke="#003366" stroke-width="2" />
      <path d="M44 54 L60 38 L76 54" fill="none" stroke="#003366" stroke-width="2.5" />
      <path d="M68 62 L84 46 L100 62" fill="none" stroke="#003366" stroke-width="2" />
      <!-- House base -->
      <rect x="22" y="62" width="76" height="34" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <!-- 3 Windows for 3 Bedrooms -->
      <rect x="30" y="68" width="10" height="12" fill="#FFFFFF" stroke="#0047AB" stroke-width="1.2" />
      <line x1="35" y1="68" x2="35" y2="80" stroke="#0047AB" stroke-width="1" />
      <rect x="55" y="68" width="10" height="12" fill="#FFFFFF" stroke="#0047AB" stroke-width="1.2" />
      <line x1="60" y1="68" x2="60" y2="80" stroke="#0047AB" stroke-width="1" />
      <rect x="80" y="68" width="10" height="12" fill="#FFFFFF" stroke="#0047AB" stroke-width="1.2" />
      <line x1="85" y1="68" x2="85" y2="80" stroke="#0047AB" stroke-width="1" />
      <!-- Family Key / Crest at Top -->
      <circle cx="60" cy="26" r="6" fill="#D9EBFF" stroke="#0047AB" stroke-width="1.5" />
      <path d="M60 20 L60 32 M54 26 L66 26" stroke="#003366" stroke-width="1.2" />
    </svg>`
  },

  // 4. CASCATA DO ARADO & 7 LAGOAS (Nature Wonder)
  {
    id: 'cascata-arado',
    titlePt: 'Cascata do Arado & 7 Lagoas',
    titleEn: 'Arado Waterfall & Lagoons',
    subtitlePt: 'Quedas d’Água a 900m',
    subtitleEn: 'Spectacular 900m Cascades',
    descriptionPt: 'Sucessão de quedas e piscinas de águas puras no Rio Arado. Acesso rápido via Ermida com escadaria cénica para o miradouro.',
    descriptionEn: 'Roaring granite falls and emerald pools on the Arado River. Easy access via Ermida with scenic stairs to the viewpoint.',
    distanceOrFactPt: 'Apenas a 3,7 km',
    distanceOrFactEn: 'Just 3.7 km away',
    tagPt: 'Cascata',
    tagEn: 'Waterfall',
    link: '/geres#cascatas',
    ctaPt: 'Ver Rota no Guia',
    ctaEn: 'View Route in Guide',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Granite Rock Walls -->
      <path d="M18 30 L42 36 L40 96 L18 96 Z" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <path d="M102 24 L78 32 L80 96 L102 96 Z" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <!-- Rushing Waterfall Columns -->
      <path d="M44 34 L76 34 L74 88 L46 88 Z" fill="#D9EBFF" stroke="#0047AB" stroke-width="1.5" />
      <path d="M52 34 L52 86 M60 34 L60 88 M68 34 L68 86" stroke="#003366" stroke-width="1.5" stroke-dasharray="6 4" />
      <!-- Crystal Pool Foam & Waves -->
      <path d="M30 92 Q60 84 90 92 Q60 100 30 92" fill="#0047AB" stroke="#003366" stroke-width="1.5" />
      <path d="M38 96 Q60 90 82 96" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
      <!-- Spray droplets -->
      <circle cx="50" cy="78" r="1.5" fill="#0047AB" />
      <circle cx="70" cy="80" r="1.5" fill="#0047AB" />
      <circle cx="60" cy="74" r="2" fill="#003366" />
    </svg>`
  },

  // 5. POÇO AZUL (Lagoon Secret)
  {
    id: 'poco-azul',
    titlePt: 'O Mítico Poço Azul',
    titleEn: 'The Mythic Poço Azul',
    subtitlePt: 'Lagoa Turquesa Selvagem',
    subtitleEn: 'Deep Turquoise Mountain Pool',
    descriptionPt: 'Um dos locais mais fascinantes de Portugal. Acesso pedonal de 16 km ida e volta pelo trilho PR14 até à lagoa de águas azuis cristalinas.',
    descriptionEn: 'A magical natural sanctuary in the highlands. A 16 km round-trip trek rewarded with pristine turquoise waters.',
    distanceOrFactPt: 'GPS: 41°44\'00.6"N',
    distanceOrFactEn: 'GPS: 41°44\'00.6"N',
    tagPt: 'Lagoa Secreta',
    tagEn: 'Wild Lagoon',
    link: '/geres#poco-azul',
    ctaPt: 'Coordenadas & Trilho',
    ctaEn: 'GPS & Trek Details',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Concentric Turquoise Water Rings -->
      <ellipse cx="60" cy="64" rx="42" ry="26" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <ellipse cx="60" cy="64" rx="30" ry="18" fill="#BCD9FF" stroke="#0047AB" stroke-width="1.8" />
      <ellipse cx="60" cy="64" rx="18" ry="10" fill="#0047AB" stroke="#003366" stroke-width="1.5" />
      <ellipse cx="60" cy="64" rx="8" ry="4" fill="#002B5C" />
      <!-- Ripples & Light Sparkles -->
      <path d="M42 56 Q60 50 78 56" stroke="#FFFFFF" stroke-width="1.5" fill="none" />
      <path d="M60 22 L60 34 M54 28 L66 28" stroke="#0047AB" stroke-width="1.5" stroke-linecap="round" />
      <circle cx="36" cy="38" r="2" fill="#0047AB" />
      <circle cx="84" cy="38" r="2" fill="#0047AB" />
    </svg>`
  },

  // 6. PRAIA DA CANIÇADA & BOCO (River Beaches)
  {
    id: 'praia-canicada',
    titlePt: 'Praia Fluvial da Caniçada',
    titleEn: 'Caniçada River Beach',
    subtitlePt: 'A 6 min a pé da Casa Feijão',
    subtitleEn: '6-minute stroll from Casa',
    descriptionPt: 'Águas mansas e quentes no verão. A Praia do Boco fica a passos da casa, ideal para nadar, canoagem e passeios na albufeira.',
    descriptionEn: 'Calm, refreshing summer waters. Boco river beach is just steps away, perfect for swimming, paddleboarding, and boat trips.',
    distanceOrFactPt: '6 min a pé',
    distanceOrFactEn: '6 min walk',
    tagPt: 'Praia Fluvial',
    tagEn: 'River Beach',
    link: '/geres#praias',
    ctaPt: 'Ver Praias no Guia',
    ctaEn: 'Explore Beaches',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Water Waves -->
      <path d="M18 56 Q38 48 60 56 T102 56" stroke="#003366" stroke-width="2" fill="none" />
      <path d="M18 68 Q38 60 60 68 T102 68" stroke="#0047AB" stroke-width="2" fill="none" />
      <path d="M18 80 Q38 72 60 80 T102 80" stroke="#2B70C9" stroke-width="2" fill="none" />
      <path d="M18 92 Q38 84 60 92 T102 92" stroke="#003366" stroke-width="2" fill="none" />
      <!-- Traditional Sailboat / Gaivota -->
      <path d="M44 48 L76 48 L70 54 L50 54 Z" fill="#EEF6FF" stroke="#003366" stroke-width="1.8" />
      <path d="M60 48 L60 22 L76 44 Z" fill="#D9EBFF" stroke="#0047AB" stroke-width="1.5" />
      <path d="M58 48 L58 28 L46 44 Z" fill="#0047AB" stroke="#003366" stroke-width="1.5" />
    </svg>`
  },

  // 7. TERMAS DE TORNEROS & CALDAS (Hot Springs)
  {
    id: 'termas-torneros',
    titlePt: 'Termas & Banhos Quentes',
    titleEn: 'Thermal Springs & Baths',
    subtitlePt: 'Torneros & Caldas do Gerês',
    subtitleEn: 'Free Open-Air Hot Springs',
    descriptionPt: 'Piscinas termais públicas e gratuitas de água quente a céu aberto em Torneros, e termalismo medicinal histórico nas Caldas do Gerês.',
    descriptionEn: 'Naturally steaming open-air thermal pools at Torneros (free access) and historic medicinal mineral spas in Gerês.',
    distanceOrFactPt: 'Água a 38°C',
    distanceOrFactEn: 'Waters at 38°C',
    tagPt: 'Bem-Estar',
    tagEn: 'Wellness',
    link: '/geres#termas',
    ctaPt: 'Ver Coordenadas GPS',
    ctaEn: 'View GPS & Tips',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Thermal Pool Basin -->
      <path d="M24 72 Q60 62 96 72 L90 96 Q60 102 30 96 Z" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <ellipse cx="60" cy="74" rx="34" ry="10" fill="#0047AB" stroke="#003366" stroke-width="1.5" />
      <!-- Steaming Vapor Curves -->
      <path d="M42 66 Q48 54 42 42 Q36 30 44 20" stroke="#0047AB" stroke-width="2" fill="none" stroke-linecap="round" />
      <path d="M60 62 Q66 48 60 36 Q54 24 62 14" stroke="#2B70C9" stroke-width="2.5" fill="none" stroke-linecap="round" />
      <path d="M78 66 Q84 54 78 42 Q72 30 80 20" stroke="#0047AB" stroke-width="2" fill="none" stroke-linecap="round" />
    </svg>`
  },

  // 8. MATA DE ALBERGARIA & GEIRA ROMANA (Heritage & Trails)
  {
    id: 'geira-albergaria',
    titlePt: 'Mata da Albergaria & Geira',
    titleEn: 'Albergaria & Roman Way',
    subtitlePt: 'Via Romana XVIII & Carvalhal',
    subtitleEn: 'Roman Milestone & Ancient Oaks',
    descriptionPt: 'A floresta sagrada do Gerês: carvalhal secular preservado e 30 km da antiga Via Romana XVIII com marcos miliários milenares intactos.',
    descriptionEn: 'The sacred heart of the park: centuries-old oak woods and 30 km of intact Roman Via XVIII with ancient milestones.',
    distanceOrFactPt: 'Via Romana XVIII',
    distanceOrFactEn: 'Roman Way XVIII',
    tagPt: 'História & Trilhos',
    tagEn: 'History & Trails',
    link: '/geres#trilhos',
    ctaPt: 'Ver Trilhos no Guia',
    ctaEn: 'View Trail Details',
    svgPath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-cobalt-800">
      <rect x="8" y="8" width="104" height="104" rx="6" fill="none" stroke="#003366" stroke-width="2" />
      <rect x="14" y="14" width="92" height="92" rx="4" fill="none" stroke="#0047AB" stroke-width="1" stroke-dasharray="3 3" />
      <!-- Roman Milestone Column -->
      <path d="M46 36 L74 36 L70 94 L50 94 Z" fill="#EEF6FF" stroke="#003366" stroke-width="2" />
      <rect x="42" y="30" width="36" height="8" rx="2" fill="#D9EBFF" stroke="#003366" stroke-width="1.8" />
      <rect x="46" y="94" width="28" height="6" rx="1" fill="#D9EBFF" stroke="#003366" stroke-width="1.8" />
      <!-- Inscription Lines on Milestone -->
      <line x1="54" y1="48" x2="66" y2="48" stroke="#0047AB" stroke-width="1.5" stroke-linecap="round" />
      <line x1="52" y1="56" x2="68" y2="56" stroke="#0047AB" stroke-width="1.5" stroke-linecap="round" />
      <line x1="55" y1="64" x2="65" y2="64" stroke="#0047AB" stroke-width="1.5" stroke-linecap="round" />
      <!-- Oak Leaves Flourishes flanking the column -->
      <path d="M36 74 C26 70 24 58 34 54 C30 50 34 40 42 46" stroke="#0047AB" stroke-width="1.5" fill="none" />
      <path d="M84 74 C94 70 96 58 86 54 C90 50 86 40 78 46" stroke="#0047AB" stroke-width="1.5" fill="none" />
    </svg>`
  }
];