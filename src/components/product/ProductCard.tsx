"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/domain/models/product.model";
import { generateOrderLink } from "@/utils/whatsapp";
import { trackLead } from "@/utils/tracking_service";

interface Props {
  product: Product;
  showSaving?: boolean;
  priority?: boolean;
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
      className="relative overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer group flex flex-col"
      style={{
        background: "linear-gradient(160deg, #0e1e30 0%, #081523 100%)",
        borderRadius: "16px",
        /*
          FIX BORDE DOBLE:
          Solo 1 borde externo con color neon + opacidad moderada.
          El botón interior NO tiene border propio — usa border-top
          como separador, evitando el efecto "caja dentro de caja".
        */
        border: `1px solid ${neonColor}38`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.35)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          `0 8px 32px rgba(0,0,0,0.5), 0 0 18px ${neonColor}20`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.35)";
      }}
    >
      {/* Línea superior neon — 1px, no borde completo */}
      <div
        className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "1px",
          background: `linear-gradient(90deg, transparent, ${neonColor}cc 50%, transparent)`,
        }}
      />

      {/* Glow hover sutil */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% -10%, ${neonColor}0d 0%, transparent 65%)`,
        }}
      />

      {/* Badge PROMO */}
      {product.isPromo && (
        <div
          className="absolute top-2.5 right-2.5 z-20 px-2 py-[3px] rounded-full text-[10px] font-black text-white leading-tight"
          style={{
            background: "linear-gradient(135deg, #ff2d78, #c026d3)",
            boxShadow: "0 0 8px rgba(255,45,120,0.5)",
          }}
        >
          PROMO
        </div>
      )}

      {/* Imagen */}
      <div
        className="relative w-full flex-shrink-0 overflow-hidden"
        style={{ height: "168px" }}
      >
        {showImage ? (
          <Image
            src={product.image!}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center text-5xl select-none"
            style={{
              background: `radial-gradient(circle, ${neonColor}12 0%, transparent 70%)`,
            }}
          >
            {product.emoji ?? "🍩"}
          </div>
        )}
        {/* Fade imagen→cuerpo: suaviza la transición sin corte */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: "48px",
            background: "linear-gradient(to top, #081523 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Cuerpo de la card — flex-grow empuja el CTA al fondo */}
      <div className="flex flex-col flex-grow px-4 pt-3 pb-4">

        {/* Etiqueta de tipo */}
        {product.type && (
          <p
            className="text-[10px] font-black uppercase tracking-[0.11em] mb-1.5 leading-none"
            style={{ color: neonColor }}
          >
            {product.type}
          </p>
        )}

        {/* Nombre */}
        <h3 className="text-sm font-black text-white leading-snug mb-1">
          {product.name}
        </h3>

        {/* Descripción */}
        {product.description && (
          <p
            className="text-[11px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            {product.description}
          </p>
        )}

        {/* Flex spacer — empuja precio+CTA al fondo */}
        <div className="flex-grow min-h-[8px]" />

        {/* Precio */}
        <div className="flex items-baseline gap-2 flex-wrap mb-0">
          {originalPrice && (
            <span
              className="text-[11px] line-through leading-none"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              ${originalPrice.toLocaleString("es-CO")}
            </span>
          )}
          {displayPrice > 0 && (
            <span
              className="text-sm font-black leading-none"
              style={{
                color: "#ffd700",
                textShadow: "0 0 10px rgba(255,215,0,0.35)",
              }}
            >
              ${displayPrice.toLocaleString("es-CO")} c/u
            </span>
          )}
        </div>

        {/*
          ──────────────────────────────────────────────────
          FIX BOTÓN CTA — el problema real era este:

          ANTES:  div.card (border: 1px solid color, radius: 16px)
                    └─ a.cta  (border: 1px solid color, radius: 12px)
                  → Dos bordes redondeados anidados = "rectángulo dentro
                    de rectángulo" con colores similares = recargado.

          AHORA:  div.card (border: 1px solid color, radius: 16px)
                    └─ div (border-top: 1px rgba blanco 8%)  ← separador neutro
                         └─ a.cta  (SIN border, radius: 8px)
                              background: neonColor con 12% opacidad
                  → Un solo borde externo. El separador es casi invisible.
                    El botón "flota" sobre el fondo sin duplicar el marco.

          PADDING: mínimo 44px de altura total para touch target (Apple HIG).
          Calculado: padding-y 10px × 2 + font 12px × 1.4 ≈ 37px → usamos 11px.
          ──────────────────────────────────────────────────
        */}
        <div
          className="mt-3 pt-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
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
            className="w-full flex items-center justify-center gap-2 font-bold text-xs transition-all duration-200 select-none"
            style={{
              padding: "11px 12px",
              borderRadius: "8px",
              background: `${neonColor}12`,
              color: neonColor,
              /* Sin border — el separador de arriba hace el trabajo */
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = neonColor;
              el.style.color = "#000";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = `${neonColor}12`;
              el.style.color = neonColor;
              el.style.transform = "translateY(0)";
            }}
          >
            {/* Ícono WA */}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Añadir a tu caja
          </a>
        </div>
      </div>
    </div>
  );
};