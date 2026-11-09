/**
 * Casos de antes e depois.
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
];
