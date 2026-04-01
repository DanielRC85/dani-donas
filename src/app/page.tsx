import { Hero } from "@/components/layout/Hero";
import { PromoBanner } from "@/components/layout/PromoBanner";
import { SocialProof } from "@/components/layout/SocialProof";
import { UGCCarousel } from "@/components/layout/UGCCarousel";
import { DeliverySection } from "@/components/layout/DeliverySection";
import { ProductCard } from "@/components/product/ProductCard";
import { Product } from "@/domain/models/product.model";
import { generatePromoLink } from "@/utils/whatsapp";

const rellenas: Product[] = [
  { id: "1", name: "Dona de Arequipe",  price: 5750, category: "mini", type: "RELLENA",          description: "Rellena de arequipe casero",        image: "/images/donas/arequipe.jpg",   emoji: "🍯", neonColor: "#ffd700", isPromo: false },
  { id: "2", name: "Dona de Fresa",     price: 5750, category: "mini", type: "RELLENA",          description: "Rellena de fresa natural",           image: "/images/donas/fresa.jpg",      emoji: "🍓", neonColor: "#ff2d78" },
  { id: "3", name: "Dona de Mora",      price: 5750, category: "mini", type: "RELLENA",          description: "Rellena de mora fresca",             image: "/images/donas/mora.jpg",       emoji: "🫐", neonColor: "#a855f7" },
  { id: "4", name: "Dona de Chocolate", price: 5750, category: "mini", type: "RELLENA",          description: "Rellena de crema de chocolate",      image: "/images/donas/chocolate.jpg",  emoji: "🍫", neonColor: "#f97316" },
  { id: "5", name: "Dona de Chantilly", price: 5750, category: "mini", type: "RELLENA + MANÍ",   description: "Chantilly con maní tostado",         image: "/images/donas/chantilly.jpg",  emoji: "🤍", neonColor: "#00f5ff" },
];

const especiales: Product[] = [
  { id: "6", name: "Dona Combinada",    price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL RELLENA",    description: "Arequipe y Chantilly juntos",           image: "/images/donas/combinada.jpg",      emoji: "🌟", neonColor: "#ff2d78", isPromo: true },
  { id: "7", name: "Dona Boston",       price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL CHOCOLATE",  description: "Cubierta de chocolate oscuro",          image: "/images/donas/boston.jpg",         emoji: "🍫", neonColor: "#00f5ff", isPromo: true },
  { id: "8", name: "Boston con Chispas",price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL CHOCOLATE",  description: "Chocolate oscuro con chispas de colores",image: "/images/donas/boston-chispas.jpg", emoji: "🎉", neonColor: "#ff00ff", isPromo: true },
  { id: "9", name: "Boston con Maní",   price: 6500, promoPrice: 5750, category: "grande", type: "ESPECIAL CHOCOLATE",  description: "Chocolate oscuro con maní crocante",   image: "/images/donas/boston-mani.jpg",    emoji: "🥜", neonColor: "#ffd700", isPromo: true },
];

export default function Home() {
  const promoLink = generatePromoLink();

  return (
    <main className="bg-[#050d1a] min-h-screen text-white overflow-hidden flex flex-col items-center">
      
      {/* ── 1. BLOQUE HERO & PROMO ── */}
      <div className="w-full flex flex-col items-center">
        <Hero />
        <PromoBanner />
      </div>

      <div className="h-16 md:h-24 w-full shrink-0" aria-hidden="true" />

      {/* ── 2. BLOQUE CATÁLOGO ── */}
      <section className="w-full flex justify-center pb-12 md:pb-16">
        <div className="max-w-6xl w-full px-5">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest mb-2 text-cyan-400">
              &lt;/&gt; Las clásicas
            </p>
            <div className="flex items-end gap-4 flex-wrap">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Rellenas 🍩
              </h2>
              <span className="text-sm font-bold px-4 py-1.5 rounded-full mb-1.5 bg-yellow-400/10 border border-yellow-400/40 text-yellow-400">
                $5.750 c/u · caja x4 = $23.000
              </span>
            </div>
            <p className="mt-2 text-sm md:text-base text-gray-400">
              Hechas frescas · También disponibles sin relleno
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
            {rellenas.map((product, index) => (
              <ProductCard key={product.id} product={product} priority={index < 4} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-12 md:h-16 w-full shrink-0" aria-hidden="true" />

      <section className="w-full flex justify-center pb-8">
        <div className="max-w-6xl w-full px-5">
          <div className="mb-12 flex flex-col items-center text-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-3 text-pink-500">
              🔥 Promo inauguración
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 flex-wrap">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Especiales ✨
              </h2>
              <div className="flex items-center gap-4 mb-1">
                <span className="text-lg font-bold line-through text-gray-500">$6.500 c/u</span>
                <span className="text-base font-black px-5 py-2 rounded-full bg-pink-500/15 border border-pink-500/50 text-pink-500 shadow-[0_0_20px_rgba(255,45,120,0.2)]">
                  HOY $5.750 c/u 🔥
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {especiales.map((product) => (
              <ProductCard key={product.id} product={product} showSaving priority />
            ))}
          </div>
          
          <div className="mt-16 p-8 md:p-10 rounded-3xl bg-pink-500/5 border border-pink-500/20 text-center shadow-lg">
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              💡 <strong className="text-white font-black">Arma tu caja como quieras:</strong> mezcla rellenas + especiales.{" "}
              <span className="text-pink-400 font-black block mt-3 md:inline md:mt-0">
                Todo a $23.000 por inauguración.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="h-20 md:h-28 w-full shrink-0" aria-hidden="true" />

      {/* ── 3. BLOQUE PRUEBA SOCIAL E INTERACTIVIDAD ── */}
      {/* 🚀 SIMULACIÓN SUPERADA: Eliminamos los títulos duplicados aquí para no romper el DOM */}
      <section className="w-full flex flex-col items-center">
        <UGCCarousel />

        <div className="w-full flex justify-center px-5 mt-16 md:mt-24">
          <div className="max-w-6xl w-full flex flex-col items-center">
             <SocialProof />
          </div>
        </div>
      </section>

      <div className="h-24 md:h-32 w-full shrink-0" aria-hidden="true" />

      {/* ── 4. BLOQUE LOGÍSTICA ── */}
      <DeliverySection />

      <div className="h-20 md:h-28 w-full shrink-0" aria-hidden="true" />

      {/* ── 5. BLOQUE PROCESO DE COMPRA ── */}
      <section className="w-full flex justify-center pb-24 md:pb-32">
        <div className="max-w-4xl w-full px-5 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-yellow-400">
            El Proceso
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">
            ¿Cómo pedir? 📲
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { step: "01", text: "Escríbenos a WhatsApp con tu pedido",            color: "text-cyan-400",   bg: "bg-cyan-400/10",   border: "border-cyan-400/30" },
              { step: "02", text: "Elige tus sabores y arma tu caja x4",            color: "text-pink-500",   bg: "bg-pink-500/10",   border: "border-pink-500/30" },
              { step: "03", text: "Recibe en punto de encuentro o a domicilio",     color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
            ].map(({ step, text, color, bg, border }) => (
              <div key={step} className="flex flex-col items-center gap-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl ${bg} ${border} border ${color}`}>
                  {step}
                </div>
                <p className="text-lg text-gray-300 font-medium leading-relaxed max-w-[200px]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA FINAL Y FOOTER ── */}
      <section className="py-24 md:py-32 px-5 text-center relative overflow-hidden w-full flex flex-col items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-[#050d1a] to-[#050d1a] pointer-events-none" />
        <div className="relative z-10 max-w-3xl w-full mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            No te quedes sin <br className="md:hidden" /> probarlas 😏
          </h2>
          <p className="mb-12 text-lg md:text-xl text-gray-400">
            Promo de inauguración · Unidades limitadas todos los días
          </p>
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-4 px-14 py-6 rounded-2xl font-black text-xl text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ff2d78 0%, #ff00ff 50%, #7c3aed 100%)",
              boxShadow: "0 0 40px rgba(255,45,120,0.5)",
            }}
          >
            <span className="absolute -left-[150%] top-0 h-full w-[150%] bg-white/20 skew-x-12 group-hover:left-[150%] transition-all duration-700" />
            <span className="relative z-10">Pedir mi caja ahora 🔥</span>
          </a>
        </div>

        <footer className="text-center py-12 text-sm text-gray-500 border-t border-white/5 bg-black/40 w-full flex flex-col items-center">
          <p className="mb-3">© {new Date().getFullYear()} Dani Donas · Medellín, Colombia</p>
          <p className="tracking-widest uppercase font-bold text-pink-500/70">
            Programadas para enamorar 🍩
          </p>
        </footer>
      </section>

    </main>
  );
}