import { images } from "./site";

// TODO: textos de exemplo — a Dra. Sandra deve revisar/substituir cada artigo antes de publicar.
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readTime: string;
  image: string; // id Unsplash
  body: { type: "p" | "h2" | "quote"; text: string }[];
};

export const posts: Post[] = [
  {
    slug: "naturalidade-na-medicina-estetica",
    title: "Como saber se um procedimento vai ficar natural?",
    excerpt: "O resultado natural não é sorte: nasce de avaliação, proporção e de saber a hora de parar.",
    category: "Filosofia",
    date: "2026-10-20",
    readTime: "4 min",
    image: images.philosophy,
    body: [
      { type: "p", text: "Quando alguém diz que quer um resultado natural, quase sempre quer dizer: 'não quero que percebam que fiz algo'. E isso é totalmente possível — desde que o plano seja pensado para o seu rosto, e não para uma tendência." },
      { type: "h2", text: "1. Começa na conversa, não na agulha" },
      { type: "p", text: "Uma boa avaliação ouve primeiro o que incomoda e o que você gosta em si. A indicação nasce daí, e nem sempre o que você pediu é o que o seu rosto precisa." },
      { type: "quote", text: "O melhor resultado é aquele em que ninguém percebe o procedimento — só percebem que você está bem." },
      { type: "h2", text: "2. Proporção vale mais que volume" },
      { type: "p", text: "Rostos harmoniosos são feitos de relações entre as partes. Corrigir um ponto isolado sem olhar o conjunto é o caminho mais curto para o aspecto artificial." },
      { type: "h2", text: "3. Saber a hora de parar" },
      { type: "p", text: "Muitas vezes, menos é mais. Fazer o necessário, no tempo certo, e reavaliar depois preserva a sua expressão e a sua identidade." },
    ],
  },
  {
    slug: "fios-faciais-o-que-sao",
    title: "Fios faciais: o que são e para quem são indicados",
    excerpt: "Entenda como funcionam, o que esperar e por que a indicação precisa é tudo.",
    category: "Procedimentos",
    date: "2026-09-28",
    readTime: "5 min",
    image: images.fios,
    body: [
      { type: "p", text: "Os fios faciais são utilizados para sustentar tecidos e estimular a produção de colágeno, ajudando a melhorar a firmeza e o contorno do rosto." },
      { type: "h2", text: "Para quem são indicados?" },
      { type: "p", text: "Costumam ser avaliados em casos de flacidez leve a moderada. Só em consulta é possível dizer se esse é o melhor caminho para você ou se outra abordagem faz mais sentido." },
      { type: "h2", text: "O que esperar" },
      { type: "p", text: "O procedimento é feito em consultório, com cuidados de segurança e orientações de pós. A duração e a evolução do resultado variam de pessoa para pessoa." },
    ],
  },
  {
    slug: "preenchimento-cuidados-e-expectativas",
    title: "Preenchimentos: cuidados antes e depois",
    excerpt: "O que fazer antes, o que evitar depois e como alinhar expectativas desde a primeira consulta.",
    category: "Cuidados",
    date: "2026-09-05",
    readTime: "4 min",
    image: images.preench,
    body: [
      { type: "p", text: "O preenchimento é uma ferramenta de harmonização e hidratação. Para que a experiência seja segura e confortável, alguns cuidados ajudam muito." },
      { type: "h2", text: "Antes" },
      { type: "p", text: "Conte sobre medicamentos, alergias e procedimentos anteriores. Evite decidir por impulso: uma boa consulta inclui tempo para dúvidas." },
      { type: "h2", text: "Depois" },
      { type: "p", text: "Siga as orientações recebidas, evite manipular a região e retorne para a avaliação quando combinado. Em caso de qualquer dúvida, entre em contato com a clínica." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
