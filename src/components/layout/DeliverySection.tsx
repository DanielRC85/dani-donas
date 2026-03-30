"use client";

import { generatePromoLink } from "@/utils/whatsapp";

const stations = [
  { name: "Estadio", metro: "🚇 Metro", color: "#00f5ff" },
  { name: "San Antonio", metro: "🚇 Metro", color: "#ff2d78" },
  { name: "El Poblado", metro: "🚇 Metro", color: "#ffd700" },
  { name: "Envigado", metro: "🚇 Metro", color: "#a855f7" },
];

export const DeliverySection = () => {
  const link = generatePromoLink();

  return (
    <section style={{ padding: "3rem 0", background: "rgba(0,0,0,0.3)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1.25rem" }}>

        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#ffd700" }}>
            📍 Cobertura
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            Entregas en Medellín
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
            Nos adaptamos a ti — coordina tu entrega por WhatsApp
          </p>
        </div>

        {/* Estaciones - CÓDIGO LIMPIO CON TAILWIND */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 md:mb-20">
          {stations.map(({ name, metro, color }) => (
            <div key={name} className="flex flex-col items-center gap-2 p-4 rounded-xl text-center"
              style={{ background: `${color}08`, border: `1px solid ${color}25` }}>
              <span className="text-xl">{metro.split(" ")[0]}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color }}>
                  {metro.split(" ").slice(1).join(" ")}
                </p>
                <p className="text-sm font-black text-white">{name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Domicilio + punto de encuentro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl"
            style={{ background: "rgba(0,245,255,0.06)", border: "1px solid rgba(0,245,255,0.2)" }}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🛵</span>
              <div>
                <p className="text-sm font-black text-white mb-1">Domicilio a tu puerta</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Costo de domicilio desde <strong className="text-white">$12.000</strong> según la zona.
                  Lo coordinamos directamente por WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl"
            style={{ background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.2)" }}>
            <div className="flex items-start gap-3">
              <span className="text-2xl">📦</span>
              <div>
                <p className="text-sm font-black text-white mb-1">Punto de encuentro</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                  ¿Prefieres recoger? Podemos <strong className="text-white">acordar un punto</strong> cerca
                  de las estaciones de metro. Sin costo adicional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA WhatsApp */}
        <div className="mt-6 text-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-200 hover:opacity-80"
            style={{ color: "#00f5ff" }}
          >
            Coordinar mi entrega por WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};