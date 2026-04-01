"use client";

import { generatePromoLink } from "@/utils/whatsapp";
import { trackLead } from "@/utils/tracking_service";

export const PromoBanner = () => {
  const link = generatePromoLink();

  return (
    <section className="glass-banner py-10 md:py-14 my-8 md:my-12">
      {/* FIX: neon-border-top y neon-border-bottom ahora están definidos en globals.css */}
      <div className="neon-border-top" />
      <div className="neon-border-bottom" />

      <div className="max-w-4xl w-full mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">

        {/* Urgencia honesta — sin contadores falsos */}
        <div className="flex w-fit max-w-full mx-auto items-center justify-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-pink-500/10 border border-pink-500/30 text-pink-500">
          <span className="shrink-0 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          <p className="text-[10px] sm:text-xs font-black tracking-widest uppercase m-0">
            Promo de Inauguración · Cantidad Limitada
          </p>
        </div>

        <h3 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
          Arma tu caja x4 como{" "}
          <span className="text-pink-500 drop-shadow-[0_0_15px_rgba(255,45,120,0.5)]">
            quieras
          </span>{" "}
          🍩
        </h3>

        <p className="text-sm md:text-lg mb-8 max-w-xl mx-auto text-gray-300 leading-relaxed">
          Mezcla rellenas y especiales. Todo al precio de inauguración:{" "}
          <strong className="text-white">$23.000</strong>.{" "}
          <span className="text-yellow-400 block sm:inline mt-1 sm:mt-0">
            El ahorro es real. 🔥
          </span>
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead({ event: "view_promo", value: 23000, currency: "COP" })}
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-sm md:text-base text-white transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #ff2d78 0%, #ff00ff 50%, #7c3aed 100%)",
            boxShadow: "0 0 25px rgba(255,45,120,0.5)",
          }}
        >
          <span className="absolute inset-0 w-full h-full bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <svg className="w-5 h-5 shrink-0 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="relative z-10">Reservar mi caja YA</span>
        </a>
      </div>
    </section>
  );
};