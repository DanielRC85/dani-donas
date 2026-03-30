const WHATSAPP_PHONE = "573185914450";

export const generateWhatsAppLink = (message: string): string => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
};

export const generateOrderLink = (productName: string): string => {
  const message = `¡Hola Dani! 🍩 Quiero pedir la dona de *${productName}*. ¿Está disponible?`;
  return generateWhatsAppLink(message);
};

export const generatePromoLink = (): string => {
  const message = `¡Hola Dani! 🍩 Vi la promo de inauguración — *caja x4 por $23.000* y quiero armar la mía. ¿Me cuentas los sabores disponibles?`;
  return generateWhatsAppLink(message);
};