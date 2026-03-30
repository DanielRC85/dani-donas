import { Hero } from "@/components/layout/Hero";
import { ProductCard } from "@/components/product/ProductCard";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { DeliverySection } from "@/components/layout/DeliverySection";
import { Product } from "@/domain/models/product.model";
import { generatePromoLink } from "@/utils/whatsapp";

// ── Rellenas $5.750 ──────────────────────────────────────────────
const rellenas: Product[] = [
  {
    id: "1",
    name: "Dona de Arequipe",
    price: 5750,
    category: "mini",
    type: "RELLENA",
    description: "Rellena de arequipe casero",
    image: "/images/donas/arequipe.jpg",
    emoji: "🍯",
    neonColor: "#ffd700",
    isPromo: false,
  },
  {
    id: "2",
    name: "Dona de Fresa",
    price: 5750,
    category: "mini",
    type: "RELLENA",
    description: "Rellena de fresa natural",
    image: "/images/donas/fresa.jpg",
    emoji: "🍓",
    neonColor: "#ff2d78",
  },
  {
    id: "3",
    name: "Dona de Mora",
    price: 5750,
    category: "mini",
    type: "RELLENA",
    description: "Rellena de mora fresca",
    image: "/images/donas/mora.jpg",
    emoji: "🫐",
    neonColor: "#a855f7",
  },
  {
    id: "4",
    name: "Dona de Chocolate",
    price: 5750,
    category: "mini",
    type: "RELLENA",
    description: "Rellena de crema de chocolate",
    image: "/images/donas/chocolate.jpg",
    emoji: "🍫",
    neonColor: "#f97316",
  },
  {
    id: "5",
    name: "Dona de Chantilly",
    price: 5750,
    category: "mini",
    type: "RELLENA + MANÍ",
    description: "Chantilly con maní tostado",
    image: "/images/donas/chantilly.jpg",
    emoji: "🤍",
    neonColor: "#00f5ff",
  },
];

// ── Especiales $6.500 (en promo igual a $5.750) ──────────────────
const especiales: Product[] = [
  {
    id: "6",
    name: "Dona Combinada",
    price: 6500,
    promoPrice: 5750,
    category: "grande",
    type: "ESPECIAL RELLENA",
    description: "Arequipe y Chantilly juntos",
    image: "/images/donas/combinada.jpg",
    emoji: "🌟",
    neonColor: "#ff2d78",
    isPromo: true,
  },
  {
    id: "7",
    name: "Dona Boston",
    price: 6500,
    promoPrice: 5750,
    category: "grande",
    type: "ESPECIAL CHOCOLATE",
    description: "Cubierta de chocolate oscuro",
    image: "/images/donas/boston.jpg",
    emoji: "🍫",
    neonColor: "#00f5ff",
    isPromo: true,
  },
  {
    id: "8",
    name: "Boston con Chispas",
    price: 6500,
    promoPrice: 5750,
    category: "grande",
    type: "ESPECIAL CHOCOLATE",
    description: "Chocolate oscuro con chispas de colores",
    image: "/images/donas/boston-chispas.jpg",
    emoji: "🎉",
    neonColor: "#ff00ff",
    isPromo: true,
  },
  {
    id: "9",
    name: "Boston con Maní",
    price: 6500,
    promoPrice: 5750,
    category: "grande",
    type: "ESPECIAL CHOCOLATE",
    description: "Chocolate oscuro con maní crocante",
    image: "/images/donas/boston-mani.jpg",
    emoji: "🥜",
    neonColor: "#ffd700",
    isPromo: true,
  },
];

export default function Home() {
  const promoLink = generatePromoLink();

  return (
    <main style={{ background: "#050d1a", minHeight: "100vh", color: "#fff" }}>
      <Hero />

      {/* ── Banner Promo ── */}
      <PromoBanner />

      {/* ══════════════════════════════════════════
          RELLENAS — $5.750 c/u
      ══════════════════════════════════════════ */}
      <section style={{ padding: "3rem 0 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}>

          {/* Header sección rellenas */}
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#00f5ff" }}>
              &lt;/&gt; Las clásicas
            </p>
            <div className="flex items-end gap-4 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Rellenas 🍩
              </h2>
              <span className="text-sm font-bold px-3 py-1 rounded-full mb-1"
                style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.4)", color: "#ffd700" }}>
                $5.750 c/u · caja x4 = $23.000
              </span>
            </div>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Hechas frescas · También disponibles sin relleno
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {rellenas.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ESPECIALES — $6.500 c/u · HOY EN PROMO
      ══════════════════════════════════════════ */}
      <section style={{ padding: "2rem 0 3rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.25rem" }}>

          {/* Header sección especiales */}
          <div className="mb-8 flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#ff2d78" }}>
              🔥 Promo inauguración
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 flex-wrap">
              <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Especiales ✨
              </h2>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-bold line-through" style={{ color: "rgba(255,255,255,0.3)" }}>
                  $6.500 c/u
                </span>
                <span className="text-sm font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(255,45,120,0.15)", border: "1px solid rgba(255,45,120,0.5)", color: "#ff2d78" }}>
                  HOY $5.750 c/u 🔥
                </span>
              </div>
            </div>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Hasta las especiales por el mismo precio · Por tiempo limitado
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {especiales.map((product) => (
              <ProductCard key={product.id} product={product} showSaving priority={true} />
            ))}
          </div>

          {/* Info combina tu caja - CÓDIGO LIMPIO CON TAILWIND */}
          <div className="mt-16 md:mt-20 p-5 rounded-2xl"
            style={{ background: "rgba(255,45,120,0.06)", border: "1px solid rgba(255,45,120,0.2)" }}>
            <p className="text-center text-sm font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
              💡 <strong className="text-white">Arma tu caja como quieras:</strong> mezcla rellenas + especiales, o elige las 4 especiales.{" "}
              <span style={{ color: "#ff2d78" }}>Todo a $23.000 por inauguración.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Entregas ── */}
      <DeliverySection />

      {/* ── Cómo pedir ── */}
      <section style={{ padding: "3rem 0" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 1rem" }} className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#ffd700" }}>
            proceso
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10">¿Cómo pedir? 📲</h2>
          <div className="grid grid-cols-3 gap-6">
            {[
              { step: "01", text: "Escríbenos por WhatsApp", color: "#00f5ff" },
              { step: "02", text: "Elige tus sabores favoritos y arma tu caja", color: "#ff2d78" },
              { step: "03", text: "Recibe en la puerta de tu casa", color: "#ffd700" },
            ].map(({ step, text, color }) => (
              <div key={step} className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
                  style={{ background: `${color}15`, border: `1px solid ${color}50`, color, boxShadow: `0 0 15px ${color}20` }}>
                  {step}
                </div>
                <p className="text-sm text-gray-400 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ padding: "4rem 1rem" }} className="text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #ff2d78 0%, #00f5ff 50%, transparent 80%)" }} />
          <div className="relative">
            <p className="text-2xl md:text-3xl font-black text-white mb-2">
              No te quedes sin probarlas 😏
            </p>
            <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Promo de inauguración · Cantidad limitada
            </p>
            <a
              href={promoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ff2d78 0%, #ff00ff 50%, #7c3aed 100%)",
                boxShadow: "0 0 30px rgba(255,45,120,0.5), 0 0 60px rgba(255,45,120,0.2)",
              }}
            >
              <span className="absolute -left-full top-0 h-full w-1/2 bg-white/10 skew-x-12 group-hover:left-full transition-all duration-700" />
              <span className="relative z-10">Pedir mi caja ahora 🔥</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="text-center py-6 text-xs"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.25)" }}>
        © {new Date().getFullYear()} Dani Donas · Medellín, Colombia · Programadas para enamorar 🍩
      </footer>
    </main>
  );
}