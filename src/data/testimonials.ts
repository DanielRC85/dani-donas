// src/data/testimonials.ts

// 1. Tipado y Datos para las Fotos (Carrusel)
export interface UGCPhoto {
  id: number;
  name: string;
  src: string;
  alt: string;
  rating: number;
  comment: string;
}

// 🍩 SÓLO COMENTARIOS 100% REALES (Distribuidos en las 5 fotos)
export const ugcPhotosData: UGCPhoto[] = [
  { 
    id: 1, 
    name: "Sebas",   
    src: "/images/ugc/choco_chispas_chocolate.jpeg", 
    alt: "Caja de donas de chocolate",  
    rating: 5, 
    comment: "Muy chimbas, deseo volver a pedir." 
  },
  { 
    id: 2, 
    name: "Jeison",  
    src: "/images/ugc/choco_rellena.jpeg",           
    alt: "Dona de chocolate rellena",   
    rating: 5, 
    comment: "Muy ricas y rellenitas." 
  },
  { 
    id: 3, 
    name: "Adriana", 
    src: "/images/ugc/arequipe.jpeg",                
    alt: "Dona de arequipe mordida",    
    rating: 5, 
    comment: "La de arequipe me encanta." 
  },
  { 
    id: 4, 
    name: "Augusto", 
    src: "/images/ugc/Bosto_clasicas.jpeg",          
    alt: "Caja de donas Boston",        
    rating: 5, 
    comment: "La dona Boston con maní y relleno de arequipe es deliciosa." 
  },
  { 
    id: 5, 
    name: "Camilo Sánchez",   
    src: "/images/ugc/Boston_chispas.jpeg",          
    alt: "Dona Boston con chispas",     
    rating: 5, 
    comment: "Muy buenas las donas, más rellenos me gustaron, gracias." 
  },
];


// 2. Tipado y Datos para las Tarjetas de Texto (Prueba Social Abajo)
export interface TextReview {
  id: number;
  name: string;
  location: string;
  text: string;
  avatarGradient: string;
  initials: string;
}

// 🚀 AQUI VA MAURICIO Y LOS COMENTARIOS COMPLEMENTARIOS
export const textReviewsData: TextReview[] = [
  {
    id: 1,
    name: "Mauricio",
    location: "Cliente Dani Donas",
    text: "Qué ricas con un café.",
    avatarGradient: "from-pink-500 to-rose-400",
    initials: "M",
  },
  {
    id: 2,
    name: "Santi",
    location: "Medellín",
    text: "Llegaron súper rápido y muy frescas. Súper recomendadas para calmar el antojo.",
    avatarGradient: "from-cyan-400 to-blue-500",
    initials: "S",
  },
  {
    id: 3,
    name: "Valentina",
    location: "Envigado",
    text: "Las pedí para compartir y quedamos encantados. Se nota que las hacen con dedicación.",
    avatarGradient: "from-yellow-400 to-orange-500",
    initials: "V",
  },
];