"use client";

import { useState } from "react";
import { generateWhatsAppLink, generatePromoLink } from "@/utils/whatsapp";

type Station = { name: string; icon: string; zone: string; color: string };

const stations: Station[] = [
  { name: "Acevedo",  icon: "🚇", zone: "Norte",         color: "#7fff00" },
  { name: "Caribe",   icon: "🚇", zone: "Terminal",       color: "#00f5ff" },
  { name: "Estadio",  icon: "🚇", zone: "Centro",         color: "#ff2d78" },
  { name: "Poblado",  icon: "🚇", zone: "Milla de Oro",   color: "#ffd700" },
  { name: "Envigado", icon: "🚇", zone: "Viva",           color: "#a855f7" },
  { name: "Itagüí",   icon: "🚇", zone: "Mayorca",        color: "#ff8c00" },
];

export const DeliverySection = () => {
  const promoLink = generatePromoLink();
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  // FIX: genera el link usando la función centralizada, no hardcodeado
  const getStationLink = (station: Station) =>
    generateWhatsAppLink(
      `¡Hola Dani! 🍩 Quiero pedir mi caja x4 en promo ($23.000). Me gustaría acordar la entrega en el punto de encuentro: Estación ${station.name}.`
    );

  return (
    <section className="py-24 md:py-32 w-full flex justify-center overflow-hidden relative">
      <div className="max-w-6xl w-full px-5 flex flex-col items-center relative z-10">

        <div className="w-full flex flex-col items-center text-center mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3 text-yellow-400">
            📍 Cobertura Logística
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight">
            Entregas de Norte a Sur
          </h2>
          <div className="h-1 w-20 bg-cyan-500 my-6 rounded-full" />
          <p className="text-base md:text-lg text-gray-400 max-w-xl">
            Haz clic en tu estación para agendar tu entrega sin sobrecostos.
          </p>
        </div>

        <div className="w-full flex flex-col items-center gap-16 md:gap-24">
          <div className="relative w-full flex flex-wrap justify-center gap-6 md:gap-14 pt-4">
            <div className="absolute top-[35%] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />

            {stations.map((station, index) => (
              <button
                key={station.name}
                onClick={() => setSelectedStation(station)}
                className="group relative flex flex-col items-center w-20 md:w-28 cursor-pointer z-20 outline-none"
              >
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl bg-black/50 backdrop-blur-md border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 ${index % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 35px ${station.color}50`;
                    e.currentTarget.style.borderColor = `${station.color}90`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  {station.icon}
                </div>
                <div className="text-center mt-6 transition-all duration-300 opacity-100 md:opacity-40 md:group-hover:opacity-100 md:group-hover:-translate-y-2">
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1" style={{ color: station.color }}>
                    {station.zone}
                  </p>
                  <p className="text-sm md:text-base font-black text-white">{station.name}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-4xl">
            <div className="p-8 md:p-10 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 transition-all hover:bg-cyan-500/10 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <span className="text-4xl animate-float">🛵</span>
                <div>
                  <p className="text-lg font-black text-white mb-2">Domicilio a tu puerta</p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-400">
                    Costo desde <strong className="text-white">$15.000</strong> según zona.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-10 rounded-3xl bg-yellow-400/5 border border-yellow-400/20 transition-all hover:bg-yellow-400/10 hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <span className="text-4xl animate-float-delayed">📦</span>
                <div>
                  <p className="text-lg font-black text-white mb-2">Punto de Encuentro</p>
                  <p className="text-sm md:text-base leading-relaxed text-gray-400">
                    Acuerda entrega en <strong className="text-white">los puntos flotantes</strong> gratis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 md:mt-32">
          <a
            href={promoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-center gap-3 px-12 py-5 w-full sm:w-fit min-w-[280px] rounded-full text-base font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
          >
            Coordinar mi entrega ahora
          </a>
        </div>
      </div>

      {/* Modal estación — FIX: usa getStationLink() con número real */}
      {selectedStation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedStation(null)}
          />
          <div className="relative bg-[#0a1628] border border-pink-500/30 rounded-3xl p-8 max-w-sm w-full text-center shadow-[0_0_50px_rgba(255,45,120,0.2)]">
            <button
              onClick={() => setSelectedStation(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
            <div className="text-6xl mb-4 animate-bounce">{selectedStation.icon}</div>
            <h3 className="text-2xl font-black text-white mb-2">¡Excelente elección!</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              En la estación{" "}
              <strong className="text-pink-400">{selectedStation.name}</strong> recibirás el
              gustito del día.
              <span className="text-sm italic text-gray-400 mt-3 block px-4">
                "Tus donas programadas con deleite puro" 🍩✨
              </span>
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={getStationLink(selectedStation)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedStation(null)}
                className="w-full py-4 rounded-xl font-black text-white transition-all shadow-[0_0_20px_rgba(255,45,120,0.4)] hover:scale-105"
                style={{ background: "linear-gradient(135deg, #ff2d78 0%, #7c3aed 100%)" }}
              >
                Confirmar en WhatsApp
              </a>
              <button
                onClick={() => setSelectedStation(null)}
                className="w-full py-3 rounded-xl font-bold text-gray-400 hover:text-white transition-all"
              >
                Elegir otra estación
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};