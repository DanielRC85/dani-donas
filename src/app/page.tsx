import { Hero } from "@/components/layout/Hero";
import { UGCCarousel } from "@/components/layout/UGCCarousel";
import { SocialProof } from "@/components/layout/SocialProof";
import { DeliverySection } from "@/components/layout/DeliverySection";
import { DonaSpotlight } from "@/components/layout/DonaSpotlight";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/domain/models/product.model";
import { generatePromoLink } from "@/utils/whatsapp";

/*
  ESTRUCTURA — patrón AIDA
  ────────────────────────────────────────────────
  A  Hero                   → captura atención (3 seg)
  I  UGC Carousel           → prueba social visual antes del precio
  D  DonaSpotlight          → drama de producto, el más vendido
     Catálogo Rellenas      → el usuario ya tiene antojo, ahora elige
     Catálogo Especiales
     ¿Cómo pedir?           → proceso simple antes del detalle logístico
     DeliverySection        → el detalle del paso 03
     SocialProof (texto)    → refuerzo racional antes de la decisión final
  A  CTA Final + Footer
  ────────────────────────────────────────────────
  Divisores entre secciones:
  - .section-divider (línea neon)  → entre secciones del mismo tono
  - DonaSpotlight lleva los divisores integrados
*/

const rellenas: Product[] = [
  { id: "1", name: "Dona de Arequipe",  price: 5750, category: "mini", type: "RELLENA",       description: "Rellena de arequipe casero",             image: "/images/donas/arequipe.jpg",       emoji: "🍯", neonColor: "#ffd700" },
  { id: "2", name: "Dona de Fresa",     price: 5750, category: "mini", type: "RELLENA",       description: "Rellena de fresa natural",               image: "/images/donas/fresa.jpg",          emoji: "🍓", neonColor: "#ff2d78" },
  { id: "3", name: "Dona de Mora",      price: 5750, category: "mini", type: "RELLENA",       description: "Rellena de mora fresca",                 image: "/images/donas/mora.jpg",           emoji: "🫐", neonColor: "#a855f7" },
  { id: "4", name: "Dona de Chocolate", price: 5750, category: "mini", type: "RELLENA",       description: "Rellena de crema de chocolate",          image: "/images/donas/chocolate.jpg",      emoji: "🍫", neonColor: "#f97316" },
  { id: "5", name: "Dona de Chantilly", price: 5750, category: "mini", type: "RELLENA + MANÍ",description: "Chantilly con maní tostado",             image: "/images/donas/chantilly.jpg",      emoji: "🤍", neonColor: "#00f5ff" },
];

const especiales: Product[] = [
  { id: "6", name: "Dona Combinada",     price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL RELLENA",   description: "Arequipe y Chantilly juntos",             image: "/images/donas/combinada.jpg",      emoji: "🌟", neonColor: "#ff2d78", isPromo: true },
  { id: "7", name: "Dona Boston",        price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL CHOCOLATE", description: "Cubierta de chocolate oscuro",            image: "/images/donas/boston.jpg",         emoji: "🍫", neonColor: "#00f5ff", isPromo: true },
  { id: "8", name: "Boston con Chispas", price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL CHOCOLATE", description: "Chocolate con chispas de colores",        image: "/images/donas/boston-chispas.jpg", emoji: "🎉", neonColor: "#ff00ff", isPromo: true },
  { id: "9", name: "Boston con Maní",    price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL CHOCOLATE", description: "Chocolate oscuro con maní crocante",      image: "/images/donas/boston-mani.jpg",    emoji: "🥜", neonColor: "#ffd700", isPromo: true },
];

export default function Home() {
  const promoLink = generatePromoLink();

  return (
    <main className="bg-[#050d1a] min-h-screen text-white overflow-x-hidden flex flex-col items-center">

      {/* ── 1. ATTENTION ── */}
      <Hero />

      {/* ── 2. INTEREST — fotos reales de clientes ── */}
      {/*
        UGC va ANTES del catálogo: activa FOMO antes de mostrar precios.
        La imagen de pares convence antes de que el precio importe.
      */}
      <UGCCarousel />

      {/* Divisor entre UGC y spotlight */}
      <div className="section-divider w-full" />

      {/* ── 3. DESIRE — spotlight del producto estrella ── */}
      {/*
        La dona de arequipe es la más pedida según tus reviews.
        Un "hero de producto" con efecto 3D CSS aumenta el deseo
        específico antes de que el usuario entre al catálogo completo.
        Úsala como "recomendación editorial" de la marca.
        Para cambiar el sabor destacado: edita name, imageSrc y accentColor.
      */}
      <DonaSpotlight
        name="Dona de Arequipe"
        imageSrc="/images/donas/arequipe.jpg"
        accentColor="#ff2d78"
      />

      {/* ── 4. DESIRE — catálogo completo ── */}
      <section className="w-full flex justify-center" style={{ paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="max-w-6xl w-full px-5">

          {/* Header rellenas */}
          <div className="mb-8">
            <p className="text-xs font-black uppercase tracking-[0.14em] mb-2 text-cyan-400">
              &lt;/&gt; Las clásicas
            </p>
            <div className="flex items-end gap-4 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Rellenas 🍩
              </h2>
              <span
                className="text-sm font-bold px-4 py-1.5 rounded-full mb-1.5"
                style={{
                  background: "rgba(255,215,0,0.1)",
                  border: "1px solid rgba(255,215,0,0.35)",
                  color: "#ffd700",
                }}
              >
                $5.750 c/u · caja x4 = $23.000
              </span>
            </div>
            <p className="mt-1.5 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
              Hechas frescas · También disponibles sin relleno
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {rellenas.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        </div>
      </section>

      {/* Divisor entre rellenas y especiales */}
      <div className="section-divider w-full opacity-60" />

      <section className="w-full flex justify-center" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="max-w-6xl w-full px-5">

          {/* Header especiales */}
          <div className="mb-10 flex flex-col items-center text-center">
            <p className="text-xs font-black uppercase tracking-[0.14em] mb-3 text-pink-500">
              🔥 Promo inauguración
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 flex-wrap">
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Especiales ✨
              </h2>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className="text-base font-semibold line-through"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                >
                  $6.500 c/u
                </span>
                <span
                  className="text-sm font-black px-4 py-1.5 rounded-full"
                  style={{
                    background: "rgba(255,45,120,0.12)",
                    border: "1px solid rgba(255,45,120,0.45)",
                    color: "#ff2d78",
                    boxShadow: "0 0 16px rgba(255,45,120,0.15)",
                  }}
                >
                  HOY $5.750 c/u 🔥
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {especiales.map((product) => (
              <ProductCard key={product.id} product={product} showSaving priority />
            ))}
          </div>

          {/* Nota "arma tu caja" */}
          <div
            className="mt-10 p-6 md:p-8 rounded-2xl text-center"
            style={{
              background: "rgba(255,45,120,0.05)",
              border: "1px solid rgba(255,45,120,0.18)",
            }}
          >
            <p className="text-sm md:text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
              💡{" "}
              <strong className="text-white">Arma tu caja como quieras:</strong>{" "}
              mezcla rellenas + especiales.{" "}
              <span className="font-bold" style={{ color: "#ff2d78" }}>
                Todo a $23.000 por inauguración.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. DESIRE — ¿Cómo pedir? ── */}
      {/*
        Proceso ANTES de logística:
        El usuario entiende el flujo general (3 pasos)
        y DeliverySection es el detalle del paso 03.
      */}
      <div className="section-divider w-full" />

      <section className="w-full flex justify-center" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="max-w-3xl w-full px-5 text-center">
          <p className="text-xs font-black uppercase tracking-[0.14em] mb-4 text-yellow-400">
            El Proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-14">
            ¿Cómo pedir? 📲
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {[
              { step: "01", text: "Escríbenos a WhatsApp con tu pedido",        color: "#00f5ff" },
              { step: "02", text: "Elige tus sabores y arma tu caja x4",        color: "#ff2d78" },
              { step: "03", text: "Recibe en punto de encuentro o a domicilio", color: "#ffd700" },
            ].map(({ step, text, color }) => (
              <div key={step} className="flex flex-col items-center gap-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center font-black text-xl"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}35`,
                    color,
                  }}
                >
                  {step}
                </div>
                <p className="text-base leading-relaxed max-w-[180px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. DESIRE — Logística (detalle paso 03) ── */}
      <DeliverySection />

      {/* ── 7. DESIRE LATE — Testimonios texto ── */}
      {/*
        Reviews de texto van al final: refuerzo racional
        justo antes de la decisión de compra.
      */}
      <SocialProof />

      {/* ── 8. ACTION — CTA final ── */}
      <div className="section-divider w-full" />

      <section
        className="w-full flex flex-col items-center text-center relative overflow-hidden"
        style={{ paddingTop: "6rem", paddingBottom: "4rem" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,45,120,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-2xl w-full px-5 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            No te quedes sin probarlas 😏
          </h2>
          <p className="mb-10 text-base md:text-lg" style={{ color: "rgba(255,255,255,0.4)" }}>
            Promo de inauguración · Unidades limitadas todos los días
          </p>
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-black text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ff2d78 0%, #ff00ff 50%, #7c3aed 100%)",
              boxShadow: "0 0 32px rgba(255,45,120,0.45)",
            }}
          >
            <span className="absolute -left-[150%] top-0 h-full w-[150%] bg-white/20 skew-x-12 group-hover:left-[150%] transition-all duration-700" />
            <span className="relative z-10">Pedir mi caja ahora 🔥</span>
          </a>
        </div>

        <footer
          className="text-center py-10 text-sm border-t w-full flex flex-col items-center"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.28)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <p className="mb-2">© {new Date().getFullYear()} Dani Donas · Medellín, Colombia</p>
          <p
            className="tracking-widest uppercase font-black text-xs"
            style={{ color: "rgba(255,45,120,0.55)" }}
          >
            Programadas para enamorar 🍩
          </p>
        </footer>
      </section>

    </main>
  );
}