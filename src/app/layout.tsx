import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dani Donas 🍩 | Donas artesanales en Medellín",
  description:
    "Las donas más irresistibles de Medellín. Caja x4 desde $23.000. Pide por WhatsApp y recibe en casa. ¡Promo de inauguración por tiempo limitado!",
  keywords: ["donas", "donas Medellín", "donas artesanales", "Dani Donas", "donas a domicilio"],
  openGraph: {
    title: "Dani Donas 🍩",
    description: "Caja x4 desde $23.000 🔥 Promo de inauguración",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}