"use client";

import { textReviewsData } from "@/data/testimonials";

const StarIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="#ffd700"
    viewBox="0 0 20 20"
    aria-hidden
    style={{ filter: "drop-shadow(0 0 4px rgba(255,215,0,0.7))" }}
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const SocialProof = () => {
  return (
    <section
      className="relative overflow-hidden flex justify-center w-full"
      style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      {/* Glow de fondo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,45,120,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-6xl w-full px-5 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-black uppercase tracking-[0.14em] mb-3 text-pink-500">
            💖 Lo que dicen
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
            Hechas con amor,{" "}
            <span style={{ color: "#ff2d78" }}>probadas con gusto</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            <p className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.38)" }}>
              Clientes en Medellín y alrededores
            </p>
          </div>
        </div>

        {/* Grid de reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {textReviewsData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col transition-all duration-400 hover:-translate-y-1 group"
              style={{
                padding: "1.75rem",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,45,120,0.25)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(255,45,120,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>

              {/* Texto */}
              <p
                className="italic flex-grow mb-6 text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Footer */}
              <div
                className="flex items-center gap-3 pt-5"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 bg-gradient-to-br ${item.avatarGradient}`}
                >
                  {item.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-black text-white leading-tight group-hover:text-pink-400 transition-colors"
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-wider mt-0.5"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
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