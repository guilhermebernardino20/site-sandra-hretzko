"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";

export const sectionIds = ["inicio", "filosofia", "procedimentos", "como-funciona", "experiencia", "resultados", "sobre", "duvidas", "contato"];

const links = [
  { id: "filosofia", label: "Filosofia" },
  { id: "procedimentos", label: "Procedimentos" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "experiencia", label: "Experiência" },
  { id: "resultados", label: "Resultados" },
  { id: "sobre", label: "Sobre" },
  { id: "duvidas", label: "Dúvidas" },
];
// Menu do desktop mais enxuto; o menu mobile mostra todos
const desktopLinks = links.filter((l) => ["filosofia", "procedimentos", "experiencia", "resultados", "sobre"].includes(l.id));

const EASE = [0.76, 0, 0.24, 1] as const;

export function Header() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // O scroll acontece no <main> (scroll-snap), não na janela
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const onScroll = () => {
      setScrolled(main.scrollTop > 40);
      setProgress(main.scrollTop / Math.max(1, main.scrollHeight - main.clientHeight));
    };
    onScroll();
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll da página com o menu aberto; Esc fecha
  useEffect(() => {
    const main = document.querySelector("main") as HTMLElement | null;
    if (main) main.style.overflowY = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-x-0 top-3 z-50 px-4 md:px-8"
      >
        <div
          className={`relative mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-full border border-brown/10 text-brown backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? "bg-white/85 py-1.5 pr-1.5 pl-2.5 shadow-[0_10px_40px_-12px_rgba(54,17,28,0.25)]"
              : "bg-white/60 py-2.5 pr-2 pl-3"
          }`}
        >
          {/* Wordmark */}
          <a href="#inicio" onClick={() => setOpen(false)} className="group flex flex-col pl-3 leading-none" aria-label="Dra. Sandra Hretzko — início">
            <span className="fat-sm text-[0.58rem] tracking-[0.14em] whitespace-nowrap uppercase sm:text-[0.74rem] sm:tracking-[0.2em]">
              Dra. Sandra <span className="text-wine transition-colors duration-500 group-hover:text-olive">Hretzko</span>
            </span>
            <span className="mt-1.5 flex items-center gap-2 text-[0.46rem] tracking-[0.26em] text-olive uppercase sm:text-[0.54rem] sm:tracking-[0.34em]">
              <span className="block h-px w-4 bg-olive/60 transition-all duration-500 group-hover:w-7" />
              Medicina estética
            </span>
          </a>

          <nav aria-label="Principal" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {desktopLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`group relative py-2 text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-wine ${
                  active === l.id ? "text-wine" : ""
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-wine transition-all duration-300 ${
                    active === l.id ? "opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-60"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fat-sm group flex items-center gap-2 rounded-full bg-brown px-3 py-3 text-[0.6rem] tracking-[0.12em] sm:px-4 sm:text-[0.68rem] sm:tracking-[0.18em] text-white uppercase transition-colors duration-500 hover:bg-wine"
            >
              <MessageCircle size={14} strokeWidth={1.75} className="hidden transition-transform duration-500 group-hover:rotate-12 sm:block" />
              Agendar
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brown/15 transition-colors hover:bg-brown hover:text-white lg:hidden"
            >
              {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
            </button>
          </div>

          {/* Progresso de leitura */}
          <span aria-hidden className="absolute inset-x-6 bottom-0 h-px bg-brown/5">
            <span className="block h-full origin-left bg-wine" style={{ transform: `scaleX(${progress})` }} />
          </span>
        </div>
      </motion.header>

      {/* Menu mobile em tela cheia */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-white/90 px-8 pt-28 pb-8 backdrop-blur-2xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } }, hidden: {} }}
            >
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="border-b border-wine/15"
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 py-[1.2vh] text-[clamp(1.4rem,4.4vh,2.2rem)] tracking-tighter uppercase ${
                      active === l.id ? "text-wine" : "text-brown"
                    }`}
                  >
                    <span className="eyebrow !text-[0.6rem] text-olive">0{i + 1}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="fat-sm mt-6 flex items-center justify-center gap-2 rounded-full bg-wine px-6 py-4 text-sm tracking-wide text-white"
            >
              <MessageCircle size={16} strokeWidth={1.75} /> Agendar Avaliação
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pontos laterais (desktop largo) */}
      <nav aria-label="Seções" className="fixed top-1/2 right-4 z-40 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`} aria-label={id} className="group flex h-3 w-3 items-center justify-center">
            <span
              className={`block rounded-full transition-all duration-500 ${
                active === id ? "h-3 w-3 bg-wine" : "h-1.5 w-1.5 bg-brown/40 group-hover:bg-wine"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
