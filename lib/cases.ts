/**
 * Casos de antes e depois (quantos quiser: o site mostra uma fileira rolável com todos).
 *
 * COMO ADICIONAR UM CASO NOVO: copie um bloco abaixo e preencha. Se as fotos seguirem o padrão
 * public/casos/caso-N-antes.jpg e caso-N-depois.jpg (N = número do caso), basta usar real(N, {...}).
 * TODO: substituir pelos casos reais da Dra. Sandra, com termo de uso de imagem (TCLE) assinado
 * e conferindo as regras de publicidade do CFO. Ao ter as fotos:
 *  1. coloque os arquivos em public/casos (ex.: caso-1-antes.jpg e caso-1-depois.jpg);
 *  2. preencha `before` e `after` com o caminho e troque `placeholder` para false;
 *  3. troque o depoimento pelo texto real, autorizado pela paciente.
 */
export type Case = {
  id: string;
  patient: string;
  procedure: string;
  time: string;
  quote: string;
  before?: string;
  after?: string;
  placeholder: boolean;
};

/** Caso com fotos reais: usa /casos/caso-N-antes.jpg e /casos/caso-N-depois.jpg. */
export const real = (n: number, c: Omit<Case, "id" | "before" | "after" | "placeholder">): Case => ({
  ...c,
  id: `caso-${n}`,
  before: `/casos/caso-${n}-antes.jpg`,
  after: `/casos/caso-${n}-depois.jpg`,
  placeholder: false,
});

export const cases: Case[] = [
  {
    id: "caso-1",
    patient: "Paciente, 54 anos",
    procedure: "Fios faciais e bioestimulador",
    time: "90 dias depois",
    quote: "Ninguém me perguntou o que eu fiz. Só disseram que eu estava com cara de descansada.",
    placeholder: true,
  },
  {
    id: "caso-2",
    patient: "Paciente, 47 anos",
    procedure: "Preenchimento de olheira",
    time: "30 dias depois",
    quote: "Continuo sendo eu, só que sem aquele cansaço que eu via no espelho todo dia.",
    placeholder: true,
  },
  {
    id: "caso-3",
    patient: "Paciente, 61 anos",
    procedure: "Protocolo Sandra",
    time: "6 meses depois",
    quote: "Eu tinha medo de ficar diferente. Fiquei firme, natural e com a minha cara.",
    placeholder: true,
  },
  {
    id: "caso-4",
    patient: "Paciente, 52 anos",
    procedure: "Botox e bioestimulador",
    time: "60 dias depois",
    quote: "O espelho voltou a me mostrar alguém que eu reconheço, com menos marcas e o mesmo olhar.",
    placeholder: true,
  },
  {
    id: "caso-5",
    patient: "Paciente, 58 anos",
    procedure: "Preenchimento de mandíbula",
    time: "30 dias depois",
    quote: "Meu rosto ficou mais definido sem parecer que mexi. As pessoas só acham que descansei.",
    placeholder: true,
  },
  {
    id: "caso-6",
    patient: "Paciente, 49 anos",
    procedure: "Microagulhamento e plasma",
    time: "90 dias depois",
    quote: "A pele está mais uniforme e luminosa. É a minha pele, só que cuidada.",
    placeholder: true,
  },
];
