"use client";

import Image from "next/image";
import { generatePromoLink } from "@/utils/whatsapp";
import { trackLead } from "@/utils/tracking_service";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const whatsappLink = generatePromoLink();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const colors = ["#00f5ff", "#ff2d78", "#ffd700", "#ff00ff", "#7fff00"];
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.7 + 0.2,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden px-4"
      style={{
        background: "linear-gradient(135deg, #020b18 0%, #050d1a 40%, #080520 70%, #0a0a1a 100%)",
        // min-height con padding controlado — no min-h-screen para evitar espacio muerto
        minHeight: "92vh",
        paddingTop: "5rem",
        paddingBottom: "4rem",
      }}
    >
      {/* Canvas partículas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Grid HUD */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,245,255,0.08) 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,45,120,0.08) 0%, transparent 70%)" }} />

      {/* Destellos */}
      <span className="absolute top-16 left-12 text-yellow-300 text-2xl animate-pulse pointer-events-none select-none">✦</span>
      <span className="absolute top-32 right-16 text-cyan-400 text-lg pointer-events-none select-none" style={{ animation: "bounce 1s infinite", animationDelay: "0.5s" }}>✦</span>
      <span className="absolute bottom-40 left-20 text-pink-400 text-xl animate-pulse pointer-events-none select-none" style={{ animationDelay: "1s" }}>✦</span>
      <span className="absolute bottom-24 right-24 text-yellow-400 text-sm pointer-events-none select-none opacity-70">◆</span>
      <span className="absolute top-1/2 left-8 text-cyan-300 text-xs pointer-events-none select-none opacity-50">&lt;/&gt;</span>
      <span className="absolute top-1/3 right-12 text-cyan-300 text-xs pointer-events-none select-none opacity-50">&lt;/&gt;</span>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">

        {/* Badge - AMPLIADO Y CENTRADO RESPONSIVO */}
        <div className="mb-6 inline-flex items-center justify-center text-center gap-2 px-6 py-3 w-full sm:w-fit rounded-full text-sm font-bold"
          style={{ background: "rgba(255,45,120,0.1)", border: "1px solid rgba(255,45,120,0.5)", color: "#ff2d78", boxShadow: "0 0 20px rgba(255,45,120,0.2)" }}>
          <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping inline-block shrink-0" />
          <span>🔥 Promo de inauguración · Por tiempo limitado</span>
        </div>

        {/* Logo */}
        <div className="relative mb-6 w-full max-w-lg">
          <div className="absolute inset-0 blur-3xl opacity-25 scale-110 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #00f5ff 0%, #ff2d78 50%, transparent 80%)" }} />
          <Image
            src="/images/logo.png"
            alt="Dani Donas - Programadas para enamorar"
            width={540}
            height={340}
            priority
            className="relative z-10 w-full h-auto"
            style={{ filter: "drop-shadow(0 0 25px rgba(0,245,255,0.25)) drop-shadow(0 0 50px rgba(255,45,120,0.15))" }}
          />
        </div>

        {/* Precio hero */}
        <p className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
          Arma tu caja x4 por{" "}
          <span style={{ color: "#ffd700", textShadow: "0 0 20px rgba(255,215,0,0.8), 0 0 40px rgba(255,215,0,0.4)" }}>
            $23.000
          </span> 🔥
        </p>

        <p className="text-sm md:text-base mb-2 font-semibold" style={{ color: "rgba(255,255,255,0.55)" }}>
          Rellenas · Especiales · Como quieras mezclarlas
        </p>

        <p className="text-base md:text-lg mb-10 font-semibold"
          style={{ color: "#00f5ff", textShadow: "0 0 10px rgba(0,245,255,0.5)" }}>
          Donas · Medellín · A domicilio
        </p>

        {/* CTA - CENTRADO ABSOLUTO Y AMPLITUD */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackLead({ event: "click_whatsapp", value: 23000, currency: "COP" })}
          className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 w-full sm:w-fit min-w-[320px] rounded-2xl font-black text-lg text-white overflow-hidden transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #ff2d78 0%, #ff00ff 50%, #7c3aed 100%)",
            boxShadow: "0 0 30px rgba(255,45,120,0.5), 0 0 60px rgba(255,45,120,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <span className="absolute -left-full top-0 h-full w-1/2 bg-white/10 skew-x-12 group-hover:left-full transition-all duration-700" />
          <svg className="w-6 h-6 relative z-10 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="relative z-10 whitespace-nowrap">Pedir ahora por WhatsApp</span>
        </a>

        <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          Entrega en Medellín y alrededores
        </p>
      </div>

      {/* Línea inferior neon */}
      <div className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #00f5ff, #ff2d78, #ffd700, transparent)" }} />
    </section>
  );
};