import Image from "next/image";
import { Reveal } from "./Reveal";
import { img, images } from "@/lib/site";

export function Philosophy() {
  return (
    <section id="filosofia" className="relative px-5 py-28 md:px-10 md:py-48">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-y-14">
        <Reveal className="col-span-12 md:col-span-5">
          <p className="eyebrow mb-6">A filosofia</p>
          <h2 className="display-lg">
            O medo do <em className="text-terracotta">artificial.</em>
          </h2>
          <div className="relative mt-12 hidden aspect-[3/4] w-3/4 overflow-hidden rounded-[2rem] md:block">
            <Image
              src={img(images.philosophy, 900)}
              alt="Retrato de mulher com pele natural"
              fill
              sizes="30vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-40">
          <Reveal>
            <p className="font-serif text-2xl leading-snug tracking-tight md:text-3xl">
              “Eu não quero ficar com cara de outra pessoa.” É a frase que mais ouço — e é a que
              guia cada decisão no consultório.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-10 space-y-6 text-base leading-relaxed text-coffee-soft md:text-lg">
            <p>
              Para quem já conquistou uma vida, uma história e uma imagem própria, o receio não é
              envelhecer: é perder a própria expressão. Aqui, o objetivo nunca é transformar.
            </p>
            <p>
              É devolver o aspecto descansado, respeitando a anatomia, a identidade e a fé de cada
              paciente — com poucos procedimentos, bem indicados, e a coragem de dizer
              “isso você não precisa”.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <ul className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-coffee/10 sm:grid-cols-3">
              {[
                ["01", "Anatomia primeiro"],
                ["02", "Menos, e melhor"],
                ["03", "Você, descansada"],
              ].map(([n, t]) => (
                <li key={n} className="bg-sand p-6">
                  <span className="text-xs tracking-[0.25em] text-terracotta">{n}</span>
                  <p className="mt-6 font-serif text-xl tracking-tight">{t}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
