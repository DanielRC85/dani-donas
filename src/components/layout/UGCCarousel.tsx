"use client";

import Image from "next/image";
import { useState } from "react";
import { generatePromoLink } from "@/utils/whatsapp";
import { ugcPhotosData, type UGCPhoto } from "@/data/testimonials";

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400 drop-shadow-[0_0_5px_rgba(255,215,0,0.8)]" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const infinitePhotos: UGCPhoto[] = [
  ...ugcPhotosData, ...ugcPhotosData, ...ugcPhotosData, ...ugcPhotosData,
  ...ugcPhotosData, ...ugcPhotosData, ...ugcPhotosData, ...ugcPhotosData,
];

export const UGCCarousel = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<UGCPhoto | null>(null);
  const link = generatePromoLink();

  return (
    <>
      <section className="py-20 bg-black/40 border-t border-b border-white/5 w-full flex flex-col items-center overflow-hidden">

        {/* Título: Alineado simétricamente con SocialProof */}
        <div className="w-full max-w-6xl px-6 md:px-12 flex flex-col items-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-pink-500 mb-3">
            💖 Lo que dicen nuestros clientes
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-2xl text-center">
            Tus pedidos,{" "}
            <br className="hidden md:block" />
            Nuestra realidad
          </h2>
          <p className="text-base text-gray-400 mt-3 text-center">
            Haz clic en las fotos para verlas de cerca
          </p>
        </div>

        {/* RECTIFICACIÓN: Contenedor Base */}
        <div className="relative w-full overflow-hidden flex justify-center">
          
          {/* Capas de Ilusión Óptica (Smooth Bleed Effect) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#050d1a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#050d1a] to-transparent z-10 pointer-events-none" />

          {/* RECTIFICACIÓN CRÍTICA: Riel Matemáticamente Perfecto
            Se eliminaron los paddings (-mx, px, pr) para evitar glitches en el ciclo infinito.
            Se añadió 'w-max' para asegurar que el flex calcule bien el ancho antes de animar.
          */}
          <div className="flex w-max animate-scroll-infinite gap-6">
            {infinitePhotos.map((photo, index) => (
              <div
                key={`${photo.id}-${index}`}
                onClick={() => setSelectedPhoto(photo)}
                className="w-64 md:w-72 flex-shrink-0 flex flex-col rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-pink-500/30 hover:shadow-[0_15px_40px_rgba(255,45,120,0.15)] group cursor-pointer"
              >
                <div className="relative w-full h-64 overflow-hidden bg-black/50">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 256px, 288px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 flex flex-col gap-3">
                  <div className="text-[10px] text-pink-500 uppercase tracking-widest font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse shrink-0" />
                    Cliente Verificado
                  </div>
                  <p className="text-sm italic text-gray-300 leading-relaxed line-clamp-3">
                    "{photo.comment}"
                  </p>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                    <div className="flex gap-1">
                      {[...Array(photo.rating)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    <p className="text-xs font-black text-white">- {photo.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Lightbox */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
            onClick={() => setSelectedPhoto(null)}
          />
          <div className="relative bg-[#0a1628] border border-white/10 rounded-[2rem] w-full max-w-4xl flex flex-col md:flex-row overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              ✕
            </button>

            <div className="relative w-full md:w-3/5 h-[40vh] md:h-[70vh] bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain md:object-cover"
              />
            </div>

            <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-gradient-to-b from-white/5 to-transparent">
              <div className="flex gap-1 mb-4">
                {[...Array(selectedPhoto.rating)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-lg md:text-xl text-white font-medium italic mb-6 leading-relaxed">
                "{selectedPhoto.comment}"
              </p>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-lg shrink-0">
                  {selectedPhoto.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-black">{selectedPhoto.name}</p>
                  <p className="text-xs text-pink-400 uppercase tracking-widest font-bold">
                    Compra Verificada
                  </p>
                </div>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedPhoto(null)}
                className="w-full py-4 rounded-xl font-black text-center text-white transition-all shadow-[0_0_20px_rgba(255,45,120,0.3)] hover:shadow-[0_0_30px_rgba(255,45,120,0.6)] hover:scale-105"
                style={{ background: "linear-gradient(135deg, #ff2d78 0%, #7c3aed 100%)" }}
              >
                ¡Yo también quiero esta caja! 🔥
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};