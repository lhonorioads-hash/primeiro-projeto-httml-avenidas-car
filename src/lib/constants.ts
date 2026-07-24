export const BRAND_NAME = "Avenidas Car";

export const ADDRESS = {
  street: "Avenida Carlos Veiga, 741",
  neighborhood: "Eloy Chaves",
  city: "Jundiaí",
  state: "SP",
  full: "Avenida Carlos Veiga, 741 - Eloy Chaves, Jundiaí - SP",
};

export const INSTAGRAM_HANDLE = "@avenidascar";
export const INSTAGRAM_URL = "https://instagram.com/avenidascar";

// TODO: substituir pelo número real do WhatsApp da concessionária (formato: 55DDDNUMERO)
export const WHATSAPP_NUMBER = "5511999999999";

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Avenidas Car e gostaria de falar com um consultor.";

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS.full
)}&output=embed`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS.full
)}`;
