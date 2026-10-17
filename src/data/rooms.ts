export interface Room {
  id: string;
  slug: string;
  titlePt: string;
  titleEn: string;
  subtitlePt: string;
  subtitleEn: string;
  pricePerNight: number;
  area?: string;
  capacity: {
    adults: number;
    children: number;
    bedsPt: string;
    bedsEn: string;
  };
  featuredImage: string;
  galleryImages: string[];
  descriptionPt: string;
  descriptionEn: string;
  highlightsPt: string[];
  highlightsEn: string[];
  amenitiesPt: string[];
  amenitiesEn: string[];
  viewsPt: string;
  viewsEn: string;
}

export const rooms: Room[] = [
  {
    id: "555",
    slug: "estudio",
    titlePt: "Estúdio de Montanha",
    titleEn: "Mountain Studio",
    subtitlePt: "Aconchegante e luminoso, ideal para casais ou pequena família",
    subtitleEn: "Cozy and bright, ideal for couples or a small family",
    pricePerNight: 70,
    capacity: {
      adults: 2,
      children: 2,
      bedsPt: "1 Cama de Casal + 1 Sofá-Cama",
      bedsEn: "1 Double Bed + 1 Sofa Bed",
    },
    featuredImage: "/images/_casa_feijao_geres_estudio_alojamento_local_1_fotos 143.JPG",
    galleryImages: [
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_fotos 143.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_fotos 148.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_CIMG4896.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_fotos 144.JPG",
      "/images/_fotos 185.JPG",
    ],
    descriptionPt:
      "O Estúdio da Casa Feijão oferece uma atmosfera acolhedora com vista panorâmica para as montanhas e lago da Caniçada. Dispõe de cozinha equipada, casa de banho privativa, aquecimento central para os dias de inverno e acesso direto à área de churrasco ao ar livre.",
    descriptionEn:
      "The Studio at Casa Feijão offers a welcoming atmosphere with scenic mountain and Caniçada lake views. Features an equipped kitchenette, private bathroom, central heating for cozy winter days, and direct access to the outdoor BBQ area.",
    highlightsPt: [
      "Wi-Fi de Alta Velocidade Grátis",
      "Aquecimento Central",
      "Estacionamento Privado Grátis",
      "Churrasqueira ao Ar Livre",
      "A 6 min a pé da praia fluvial",
    ],
    highlightsEn: [
      "Free High-Speed Wi-Fi",
      "Central Heating",
      "Free Private Parking",
      "Outdoor BBQ Facilities",
      "6 min walk to the river beach",
    ],
    amenitiesPt: [
      "Casa de banho privativa",
      "Frigorífico",
      "Placa de fogão e Micro-ondas",
      "Torradeira e Máquina de café",
      "Utensílios de cozinha completos",
      "Televisão de ecrã plano com canais por satélite",
      "Roupa de cama e toalhas fornecidas",
      "Secador de cabelo",
      "Área de estar e refeições",
      "Ventoinha",
    ],
    amenitiesEn: [
      "Private bathroom",
      "Refrigerator",
      "Stovetop & Microwave",
      "Toaster & Coffee maker",
      "Complete kitchenware",
      "Flat-screen satellite TV",
      "Bed linen and towels included",
      "Hairdryer",
      "Living and dining area",
      "Fan",
    ],
    viewsPt: "Montanha, Jardim e Lago da Caniçada",
    viewsEn: "Mountain, Garden, and Caniçada Lake",
  },
  {
    id: "556",
    slug: "apartamento-t1",
    titlePt: "Apartamento T1 com Varanda",
    titleEn: "One-Bedroom Apartment with Balcony",
    subtitlePt: "Espaço independente de 40m² com varanda panorâmica e lareira",
    subtitleEn: "Spacious 40m² retreat with panoramic balcony and fireplace",
    pricePerNight: 80,
    area: "40 m²",
    capacity: {
      adults: 2,
      children: 2,
      bedsPt: "1 Cama de Casal + 1 Sofá-Cama",
      bedsEn: "1 Double Bed + 1 Sofa Bed",
    },
    featuredImage: "/images/_casa_feijao_geres_estudio_alojamento_local_1_.jpg",
    galleryImages: [
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_.jpg",
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_eca[1].jpg",
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_CIMG5900.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_1_CIMG4917.JPG",
      "/images/_fotos 186.JPG",
    ],
    descriptionPt:
      "Apartamento completo com quarto de casal independente, sala ampla equipada com lareira para noites aconchegantes, cozinha integral com forno e varanda privada com vista inspiradora sobre a albufeira e o vale de Vilar da Veiga.",
    descriptionEn:
      "Full one-bedroom apartment with a separate double bedroom, spacious living area with a traditional fireplace for cozy mountain evenings, full kitchen with oven, and a private balcony overlooking the valley and Caniçada reservoir.",
    highlightsPt: [
      "Varanda Privada com Vistas",
      "Lareira Tradicional",
      "Cozinha Completa com Forno",
      "Aquecimento Central",
      "Área ampla de 40 m²",
    ],
    highlightsEn: [
      "Private Scenic Balcony",
      "Traditional Fireplace",
      "Full Kitchen with Oven",
      "Central Heating",
      "Spacious 40 m² area",
    ],
    amenitiesPt: [
      "Quarto independente com cama de casal",
      "Sala de estar com sofá-cama e lareira",
      "Varanda privativa com mobiliário",
      "Cozinha com forno, placa e frigorífico",
      "Micro-ondas, torradeira e cafeteira",
      "Casa de banho completa com secador",
      "TV satélite de ecrã plano",
      "Toalhas e roupa de cama de qualidade",
      "Wi-Fi gratuito por toda a casa",
      "Acesso ao barbecue exterior",
    ],
    amenitiesEn: [
      "Separate double bedroom",
      "Living room with sofa bed & fireplace",
      "Private furnished balcony",
      "Kitchen with oven, hob & fridge",
      "Microwave, toaster & coffee maker",
      "Full bathroom with hairdryer",
      "Flat-screen satellite TV",
      "Premium linen & towels provided",
      "Free high-speed Wi-Fi throughout",
      "Access to outdoor BBQ",
    ],
    viewsPt: "Vale de Vilar da Veiga, Montanha e Rio",
    viewsEn: "Vilar da Veiga Valley, Mountains, and River",
  },
  {
    id: "558",
    slug: "apartamento-t3",
    titlePt: "Apartamento T3 Familiar",
    titleEn: "Three-Bedroom Family Apartment",
    subtitlePt: "70m² com 3 quartos independentes, ideal para famílias e grupos até 8 pessoas",
    subtitleEn: "70m² residence with 3 private bedrooms, perfect for families up to 8 guests",
    pricePerNight: 180,
    area: "70 m²",
    capacity: {
      adults: 6,
      children: 2,
      bedsPt: "3 Camas de Casal + 1 Sofá-Cama",
      bedsEn: "3 Double Beds + 1 Sofa Bed",
    },
    featuredImage: "/images/_sala T3.jpg",
    galleryImages: [
      "/images/_sala T3.jpg",
      "/images/_casa_feijao_geres_estudio_alojamento_local_fotos 173.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_fotos 176.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_fotos 181.JPG",
      "/images/_casa_feijao_geres_estudio_alojamento_local_CIMG4888.JPG",
      "/images/_fotos 185.JPG",
    ],
    descriptionPt:
      "A joia familiar da Casa Feijão: 70 m² com 3 quartos de casal independentes, grande salão de convívio com lareira em granito, cozinha totalmente equipada e varanda corrida com vistas deslumbrantes para o Parque Nacional da Peneda-Gerês.",
    descriptionEn:
      "The premier family retreat at Casa Feijão: 70 m² featuring 3 separate double bedrooms, large dining and living salon with stone fireplace, fully equipped kitchen, and a wide balcony opening to unforgettable Peneda-Gerês vistas.",
    highlightsPt: [
      "3 Quartos de Casal Independentes",
      "Capacidade até 8 Hóspedes",
      "Grande Salão com Lareira",
      "Varanda Panorâmica Corrida",
      "Cozinha de Grande Porte",
    ],
    highlightsEn: [
      "3 Private Double Bedrooms",
      "Accommodates up to 8 Guests",
      "Grand Living Salon with Fireplace",
      "Wide Panoramic Balcony",
      "Large Family Kitchen",
    ],
    amenitiesPt: [
      "3 quartos independentes com roupeiros",
      "Ampla sala de estar e jantar com lareira",
      "Varanda corrida com mesa e vista serra",
      "Cozinha completa com fogão, forno e loiças",
      "Frigorífico grande e micro-ondas",
      "Casa de banho espaçosa com duche e bidé",
      "TV de ecrã plano de grande dimensão",
      "Aquecimento central em todas as divisões",
      "Estacionamento gratuito para vários carros",
      "Roupa de cama e toalhas para todos os hóspedes",
    ],
    amenitiesEn: [
      "3 separate bedrooms with wardrobes",
      "Generous living & dining room with fireplace",
      "Wide balcony with table & mountain views",
      "Complete kitchen with stove, oven & tableware",
      "Large refrigerator & microwave",
      "Spacious bathroom with shower & bidet",
      "Large flat-screen satellite TV",
      "Central heating in all rooms",
      "Free parking for multiple vehicles",
      "Linens and fresh towels for all guests",
    ],
    viewsPt: "Serras de Vilar da Veiga, Rio Cávado e Albufeira",
    viewsEn: "Vilar da Veiga Mountains, Cávado River, and Lake",
  },
];
