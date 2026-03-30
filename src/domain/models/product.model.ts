export interface Product {
  id: string;
  name: string;
  price: number;
  promoPrice?: number;      // precio real en promo (ej: especial $6.500 → promo $5.750)
  category: "mini" | "grande";
  type?: string;            // "RELLENA" | "ESPECIAL CHOCOLATE" etc.
  description?: string;
  image?: string;           // ruta: "/images/donas/arequipe.jpg"
  emoji?: string;           // fallback si no hay imagen
  neonColor?: string;       // color neon de la card: "#00f5ff" | "#ff2d78" etc.
  isPromo?: boolean;
}