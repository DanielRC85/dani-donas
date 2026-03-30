"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/domain/models/product.model";
import { generateOrderLink } from "@/utils/whatsapp";
import { trackLead } from "@/utils/tracking_service";

interface Props {
  product: Product;
  showSaving?: boolean; // muestra tachado precio original en especiales
  priority?: boolean;   // NUEVO: Le dice a Next.js que cargue esta imagen rápido
}

export const ProductCard = ({ product, showSaving = false, priority = false }: Props) => {
  const link = generateOrderLink(product.name);
  const neonColor = product.neonColor ?? "#00f5ff";
  const [imgError, setImgError] = useState(false);

  const showImage = product.image && !imgError;
  const displayPrice = product.promoPrice ?? product.price;
  const originalPrice = showSaving && product.promoPrice ? product.price : null;

  return (
    <div
      className="relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer group"
      style={{
        background: "linear-gradient(145deg, #0d1b2a 0%, #0a1628 100%)",
        border: `1px solid ${neonColor}30`,
        boxShadow: `0 0 0 1px ${neonColor}10`,
      }}
    >
      {/* Glow top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${neonColor}, transparent)` }} />

      {/* Glow hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ boxShadow: `inset 0 0 30px ${neonColor}15`, background: `radial-gradient(ellipse at top, ${neonColor}08 0%, transparent 70%)` }} />

      {/* Badge PROMO */}
      {product.isPromo && (
        <div className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-xs font-black text-white"
          style={{ background: "linear-gradient(135deg, #ff2d78, #ff00ff)", boxShadow: "0 0 10px rgba(255,45,120,0.6)" }}>
          PROMO
        </div>
      )}

      {/* Imagen dona */}
      <div className="relative w-full overflow-hidden" style={{ height: "180px" }}>
        {showImage ? (
          <Image
            src={product.image!}
            alt={product.name}
            fill
            priority={priority} // AQUÍ APLICAMOS LA SOLUCIÓN
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-6xl select-none"
            style={{ background: `radial-gradient(circle, ${neonColor}15 0%, transparent 70%)` }}
          >
            {product.emoji ?? "🍩"}
          </div>
        )}
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0d1b2a] to-transparent" />
      </div>

      {/* Info */}
      <div className="p-4 pt-3">
        {product.type && (
          <p className="text-[10px] font-bold uppercase tracking-widest mb-1"
            style={{ color: neonColor, textShadow: `0 0 8px ${neonColor}80` }}>
            {product.type}
          </p>
        )}

        <h3 className="text-sm font-black text-white leading-tight">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-xs mt-1 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
            {product.description}
          </p>
        )}

        {/* Precio */}
        <div className="mt-2 flex items-baseline gap-2 flex-wrap">
          {originalPrice && (
            <span className="text-xs font-semibold line-through" style={{ color: "rgba(255,255,255,0.3)" }}>
              ${originalPrice.toLocaleString("es-CO")}
            </span>
          )}
          {displayPrice > 0 && (
            <p className="text-sm font-bold" style={{ color: "#ffd700", textShadow: "0 0 8px rgba(255,215,0,0.5)" }}>
              ${displayPrice.toLocaleString("es-CO")} c/u
            </p>
          )}
        </div>

        {/* CTA */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackLead({
              event: "click_whatsapp",
              productName: product.name,
              value: displayPrice,
              currency: "COP",
            })
          }
          className="mt-3 w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold transition-all duration-200"
          style={{
            background: `linear-gradient(135deg, ${neonColor}20, ${neonColor}10)`,
            border: `1px solid ${neonColor}50`,
            color: neonColor,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = neonColor;
            (e.currentTarget as HTMLAnchorElement).style.color = "#000";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = `linear-gradient(135deg, ${neonColor}20, ${neonColor}10)`;
            (e.currentTarget as HTMLAnchorElement).style.color = neonColor;
          }}
        >
          Pedir este sabor →
        </a>
      </div>
    </div>
  );
};