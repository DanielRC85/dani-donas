"use client";

import { generatePromoLink } from "@/utils/whatsapp";
import { trackLead } from "@/utils/tracking_service";

export const PromoBanner = () => {
  const link = generatePromoLink();

  return (
    <section
      className="relative overflow-hidden w-full flex justify-center"
      style={{ background: "linear-gradient(135deg, rgba(255,45,120,0.12) 0%, rgba(124,58,237,0.12) 50%, rgba(0,245,255,0.08) 100%)" }}
    >
      {/* Top border neon */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #ff2d78, #ff00ff, #00f5ff, transparent)" }} />
      {/* Bottom border neon */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00f5ff, #ff2d78, transparent)" }} />

      <div className="max-w-4xl w-full mx-auto px-4 py-6 flex flex-col items-center justify-center text-center">
        
        {/* Pill tag - ESTRUCTURA RECTIFICADA PARA CENTRADO ABSOLUTO */}
        <div className="flex w-fit max-w-[95%] mx-auto items-center justify-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-4"
          style={{ background: "rgba(255,45,120,0.15)", border: "1px solid rgba(255,45,120,0.4)", color: "#ff2d78" }}>
          <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping" />
          <p className="text-[10px] sm:text-xs font-black leading-tight text-center m-0">
            PROMO DE INAUGURACIÓN · POR TIEMPO LIMITADO
          </p>
        </div>

        <h3 className="text-xl md:text-2xl font-black text-white mb-2 text-center w-full">
          Arma tu caja x4 como quieras 🎉
        </h3>

        {/* Textos de apoyo estructurados para no romperse en móvil */}
        <p className="text-sm md:text-base mb-5 max-w-xl mx-auto text-center w-full" style={{ color: "rgba(255,255,255,0.6)" }}>
          Mezcla rellenas con especiales, o elige las 4 especiales.{" "}
          <span className="font-bold text-white block sm:inline mt-1 sm:mt-0">Todo a $23.000 por inauguración.</span>{" "}
          <span className="block mt-1" style={{ color: "#ffd700" }}>Las especiales normalmente valen $26.000 la caja — ese es el ahorro real. 🔥</span>
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead({ event: "view_promo", value: 23000, currency: "COP" })}
          className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-black text-sm text-white transition-all duration-300 hover:scale-105 mx-auto"
          style={{
            background: "linear-gradient(135deg, #ff2d78 0%, #ff00ff 50%, #7c3aed 100%)",
            boxShadow: "0 0 20px rgba(255,45,120,0.4)",
          }}
        >
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Quiero armar mi caja
        </a>
      </div>
    </section>
  );
};