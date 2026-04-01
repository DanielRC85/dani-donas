"use client";

// 🚀 Importamos tus reseñas de texto reales
import { textReviewsData } from "@/data/testimonials";

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const SocialProof = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden flex justify-center w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-pink-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full px-5 relative z-10">

        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-pink-500">
            💖 Lo que dicen nuestros clientes
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            Hechas con amor,{" "}
            <span className="text-pink-400">probadas con gusto</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <p className="text-sm text-gray-400 font-medium ml-2">
              Clientes satisfechos en Medellín y alrededores
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Mapeamos tu base de datos local en lugar del texto quemado */}
          {textReviewsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/30 hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(255,45,120,0.15)] group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>

              <p className="text-gray-300 leading-relaxed italic mb-8 flex-grow font-medium">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-black shadow-lg bg-gradient-to-br ${item.avatarGradient}`}>
                  {item.initials}
                </div>
                <div>
                  <p className="text-white font-black text-base group-hover:text-pink-400 transition-colors">
                    {item.name}
                  </p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">
                    Cliente · {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};