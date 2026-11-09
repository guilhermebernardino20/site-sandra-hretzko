// Edite aqui os dados reais da Dra. Sandra antes de publicar.
export const site = {
  name: "Dra. Sandra Hretzko",
  fullName: "Sandra Mara Hretzko",
  profession: "Cirurgiã-dentista",
  field: "Harmonização orofacial",
  // Fonte: checklist de início respondido em 06/11/2026
  whatsappNumber: "5541995055924", // TODO: confirmar — no formulário o telefone veio como 4199055924 (um dígito a menos)
  whatsappMessage: "Olá, Dra. Sandra! Gostaria de agendar uma avaliação.",
  instagram: "drasandrahretzko",
  cro: "", // TODO: número e UF do CRO (ex.: "CRO-PR 00000") — não foi informado no formulário
  cnpj: "34.296.794/0001-02",
  address: ["Rua João Leopoldo Jacomel, 12066", "Pinhais, PR"], // TODO: CEP, bairro, sala e ponto de referência
  hours: "Terças e quintas, das 8h às 18h",
  parking: "Estacionamento na frente",
  email: "ssandrahretzko@gmail.com", // TODO: trocar pelo e-mail do consultório quando for criado
  founded: "Odontologia pela PUC-PR, 1998",
} as const;

const mapsQuery = "Rua João Leopoldo Jacomel, 12066, Pinhais, PR, Brasil"; // TODO: incluir CEP quando disponível
export const maps = {
  query: mapsQuery,
  embed: `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`,
  open: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  route: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`,
  waze: `https://waze.com/ul?q=${encodeURIComponent(mapsQuery)}&navigate=yes`,
  uber: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff%5Bnickname%5D=${encodeURIComponent("Dra. Sandra Hretzko")}&dropoff%5Bformatted_address%5D=${encodeURIComponent(mapsQuery)}`,
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

/** Fotos reais da Dra. Sandra (public/images). */
export const photos = {
  mirror: "/images/dra-sandra-espelho.jpg", // jaleco branco, olhando o espelho
  desk: "/images/dra-sandra-mesa.jpg", // à mesa do consultório
} as const;
