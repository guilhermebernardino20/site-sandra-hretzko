// Edite aqui os dados reais da Dra. Sandra antes de publicar.
export const site = {
  name: "Dra. Sandra Hretzko",
  whatsappNumber: "5500000000000", // TODO: DDI + DDD + número, só dígitos
  whatsappMessage: "Olá, Dra. Sandra! Gostaria de agendar uma avaliação.",
  instagram: "sandrahretzko", // TODO: confirmar @ real
  crm: "CRM-XX 000000", // TODO
  address: ["Endereço do consultório", "Cidade — UF"], // TODO
  email: "contato@exemplo.com.br", // TODO
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=${w}`;

export const images = {
  hero: "1618220179428-22790b461013",
  philosophy: "1580489944761-15a19d654956",
  doctor: "1573496359142-b8d87734a5a2",
  fios: "1570172619644-dfd03ed5d881",
  preench: "1544161515-4ab6ce6db874",
  experience: "1616594039964-ae9021a400a0",
  detail: "1515377905703-c4788e51af15",
  r2: "1594744803329-e58b31de8bf5",
  r3: "1531123897727-8f129e1688ce",
} as const;

/** Link do WhatsApp com mensagem específica (ex.: por procedimento). */
export const waLink = (message: string) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
