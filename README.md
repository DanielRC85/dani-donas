# 🍩 Dani Donas — High-Conversion E-commerce Landing Page

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Architecture](https://img.shields.io/badge/Clean_Architecture-4CAF50?style=for-the-badge&logo=checkmarx&logoColor=white)

> **"Programadas para enamorar"** — Plataforma web ultrarrápida diseñada para maximizar la conversión de ventas de una marca local de repostería, conectando el escaparate digital directamente con un embudo de atención por WhatsApp.

🔗 **[Ver Demo en Vivo](https://dani-donas.vercel.app/)** 

---

## 🚀 Visión General del Proyecto

Dani Donas es una *Single Page Application* (SPA) construida bajo el principio **KISS (Keep It Simple, Stupid)** y **YAGNI (You Aren't Gonna Need It)**. 

En lugar de sobre-ingeniar un backend completo desde el día uno, el proyecto se enfoca en resolver el problema inmediato del negocio: **Vender**. Se utiliza Next.js para renderizado estático de ultra-alta velocidad y una integración directa con WhatsApp para el cierre de ventas, validando el mercado con cero costos de servidor.

### ✨ Características Principales
* **UI/UX Premium:** Diseño moderno "Dark/Neon" con efectos de partículas en Canvas y sombras múltiples de alto rendimiento.
* **Catálogo Dinámico:** Separación lógica entre productos "Clásicos" y "Especiales" con cálculo de promociones en tiempo real.
* **WhatsApp Checkout:** Generación de enlaces codificados (URL-encoded) con la información del pedido y el producto exacto seleccionado por el usuario.
* **Event Tracking Ready:** Utilidad de analíticas integrada (`trackLead`) preparada para enchufarse a Google Analytics o Meta Pixel.
* **100% Responsivo:** Adaptabilidad perfecta desde dispositivos móviles pequeños hasta pantallas ultrawide.

---

## 🧠 Arquitectura y Buenas Prácticas

El código está estructurado pensando en la futura escalabilidad hacia un ecosistema SaaS (preparado para integrarse con sistemas automatizados como *Synapse*).

* **Domain-Driven Design (DDD) Ligero:** Los modelos de datos (`Product`) están tipados estrictamente en TypeScript en su propia capa de dominio (`src/domain/`).
* **Separación de Responsabilidades (SOLID):** La lógica de negocio (generación de links, tracking) vive en servicios independientes (`src/utils/`), manteniendo los componentes de React puramente visuales y limpios.
* **Optimizaciones de Next.js:** Uso estratégico de `next/image` con priorización de carga (`priority=true` en LCP) para asegurar métricas perfectas en Web Vitals.
* **Clean Code:** Espaciados controlados, nombres de variables semánticos y componentes modulares (`ProductCard`, `PromoBanner`).

---

## 🛠️ Stack Tecnológico

* **Framework:** Next.js 16.2 (App Router)
* **Lenguaje:** TypeScript
* **Estilos:** Tailwind CSS v4 + Inline Styles dinámicos.
* **Despliegue:** Vercel (Recomendado para zero-config estático)

---

## ⚙️ Instalación y Desarrollo Local

Si deseas clonar y correr este proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/DanielRC85/dani-donas.git](https://github.com/DanielRC85/dani-donas.git)

2. Instala las dependencias:
   npm install

3. Inicia el servidor de desarrollo:
   npm run dev

4. Abre http://localhost:3000 en tu navegador.   


Desarrollado con ☕ y buenas prácticas por [Daniel Romero Cortes]
   