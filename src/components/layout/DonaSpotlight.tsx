"use client";

import Image from "next/image";
import { generatePromoLink } from "@/utils/whatsapp";
import { trackLead } from "@/utils/tracking_service";

interface Props {
  name?: string;
  imageSrc?: string;
  accentColor?: string;
}

// FIX HYDRATION: posiciones pre-calculadas como constantes estáticas.
// Math.sin/cos dentro del render produce decimales distintos en SSR vs cliente.
// Al sacarlos aquí, servidor y cliente leen el mismo array — mismatch resuelto.
const ORBITAL_PARTICLES = [
  { top: "calc(50% + 0px)",      left: "calc(50% + 130px)",   isAccent: true,  opacity: 0.60 },
  { top: "calc(50% + 113px)",    left: "calc(50% + 65px)",    isAccent: false, opacity: 0.73 },
  { top: "calc(50% + 113px)",    left: "calc(50% - 65px)",    isAccent: true,  opacity: 0.86 },
  { top: "calc(50% + 0px)",      left: "calc(50% - 130px)",   isAccent: false, opacity: 0.60 },
  { top: "calc(50% - 113px)",    left: "calc(50% - 65px)",    isAccent: true,  opacity: 0.73 },
  { top: "calc(50% - 113px)",    left: "calc(50% + 65px)",    isAccent: false, opacity: 0.86 },
];

export const DonaSpotlight = ({
  name = "Dona de Arequipe",
  imageSrc = "/images/donas/arequipe.jpg",
  accentColor = "#ff2d78",
}: Props) => {
  const link = generatePromoLink();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const img = e.currentTarget.querySelector<HTMLDivElement>(".dona-img-wrapper");
    if (img) {
      img.style.transform = `perspective(700px) rotateY(${dx * 14}deg) rotateX(${-dy * 8}deg) scale3d(1.04,1.04,1)`;
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector<HTMLDivElement>(".dona-img-wrapper");
    if (img) img.style.transform = "";
  };

  return (
    <section className="spotlight-section w-full flex justify-center relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div
        className="max-w-6xl w-full px-5 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        style={{ paddingTop: "5rem", paddingBottom: "6rem" }}
      >

        {/* ── Texto ── */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black mb-6"
            style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}40`, color: accentColor }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
            ⭐ La favorita de la semana
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            {name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="block" style={{ color: accentColor, textShadow: `0 0 30px ${accentColor}60` }}>
              {name.split(" ").slice(-1)[0]}
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed mb-3 max-w-md mx-auto lg:mx-0"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            Rellena con arequipe casero preparado en casa. Masa suave, esponjosa, bañada en azúcar.
          </p>

          <p className="text-2xl font-black mb-8"
            style={{ color: "#ffd700", textShadow: "0 0 16px rgba(255,215,0,0.5)" }}>
            $5.750 c/u · caja x4 = $23.000
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead({ event: "click_whatsapp", productName: name, value: 5750, currency: "COP" })}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-base text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${accentColor} 0%, #c026d3 100%)`, boxShadow: `0 0 24px ${accentColor}50` }}
            >
              <span className="absolute -left-full top-0 h-full w-1/2 bg-white/15 skew-x-12 group-hover:left-full transition-all duration-600" />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 flex-shrink-0" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="relative z-10">Pedir ahora</span>
            </a>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              También en combinada, mora, fresa y más →
            </p>
          </div>
        </div>

        {/* ── Dona 3D ── */}
        <div
          className="relative flex-shrink-0 order-1 lg:order-2 flex items-center justify-center"
          style={{ width: "320px", height: "320px" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glow */}
          <div className="absolute animate-glow-breathe pointer-events-none" style={{
            width: "280px", height: "280px", borderRadius: "50%",
            background: `radial-gradient(circle, ${accentColor}30 0%, transparent 70%)`,
            top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          }} />

          {/* Anillo externo */}
          <div className="absolute animate-ring-spin pointer-events-none" style={{
            width: "300px", height: "140px", borderRadius: "50%",
            border: `1px solid ${accentColor}30`,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%) rotateX(72deg)",
            transformStyle: "preserve-3d",
          }} />

          {/* Anillo interno */}
          <div className="absolute animate-ring-reverse pointer-events-none" style={{
            width: "220px", height: "100px", borderRadius: "50%",
            border: `1px dashed ${accentColor}20`,
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%) rotateX(72deg)",
            transformStyle: "preserve-3d",
          }} />

          {/* Partículas — posiciones estáticas, sin Math.sin/cos en render */}
          {ORBITAL_PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute pointer-events-none"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: p.isAccent ? accentColor : "#ffd700",
                boxShadow: `0 0 8px ${p.isAccent ? accentColor : "#ffd700"}`,
                top: p.top,
                left: p.left,
                opacity: p.opacity,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}

          {/* Imagen dona */}
          <div
            className="dona-img-wrapper relative"
            style={{
              width: "240px", height: "240px", borderRadius: "50%", overflow: "hidden",
              animation: "dona-3d 7s ease-in-out infinite",
              transition: "transform 0.15s ease-out",
              boxShadow: `0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${accentColor}30`,
              willChange: "transform",
            }}
          >
            <Image src={imageSrc} alt={name} fill sizes="240px" priority className="object-cover object-center" />
          </div>

          {/* Etiqueta precio */}
          <div className="absolute bottom-4 right-0 px-4 py-2 rounded-2xl" style={{
            background: "rgba(5,13,26,0.85)",
            border: "1px solid rgba(255,215,0,0.3)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}>
            <p className="text-xs text-gray-400 leading-none mb-0.5">desde</p>
            <p className="text-xl font-black leading-none" style={{ color: "#ffd700" }}>$5.750</p>
          </div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
};