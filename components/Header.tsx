"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";

export const sectionIds = ["inicio", "filosofia", "procedimentos", "como-funciona", "experiencia", "resultados", "sobre", "blog", "duvidas", "contato"];

const links = [
  { id: "filosofia", label: "Filosofia" },
  { id: "procedimentos", label: "Procedimentos" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "experiencia", label: "Experiência" },
  { id: "resultados", label: "Resultados" },
  { id: "sobre", label: "Sobre" },
  { id: "blog", label: "Blog" },
  { id: "duvidas", label: "Dúvidas" },
];
// Menu do desktop mais enxuto; o menu mobile mostra todos
const desktopLinks = links.filter((l) => ["filosofia", "procedimentos", "experiencia", "resultados", "sobre", "blog"].includes(l.id));

const EASE = [0.76, 0, 0.24, 1] as const;
// Seções de fundo escuro: a barra troca para vidro escuro e texto claro
const darkSections = new Set(["filosofia", "como-funciona", "resultados", "blog", "duvidas", "contato"]);

export function Header() {
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const dark = darkSections.has(active) && !open;

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
          className={`relative mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-full border backdrop-blur-xl transition-all duration-700 ${
            dark ? "border-white/20 bg-brown/55 text-white" : "border-brown/10 bg-white/70 text-brown"
          } ${
            scrolled
              ? "py-1.5 pr-1.5 pl-2.5 shadow-[0_14px_44px_-14px_rgba(54,17,28,0.35)]"
              : "py-2.5 pr-2 pl-3 shadow-[0_6px_24px_-12px_rgba(54,17,28,0.18)]"
          }`}
        >
          {/* Wordmark */}
          <a href="#inicio" onClick={() => setOpen(false)} className="group flex flex-col pl-3 leading-none" aria-label="Dra. Sandra Hretzko — início">
            <span className="fat-sm text-[0.58rem] tracking-[0.14em] whitespace-nowrap uppercase sm:text-[0.74rem] sm:tracking-[0.2em]">
              Dra. Sandra <span className={`transition-colors duration-500 ${dark ? "text-[#E6CFA5]" : "text-wine group-hover:text-olive"}`}>Hretzko</span>
            </span>
            <span className={`mt-1.5 flex items-center gap-2 text-[0.46rem] tracking-[0.26em] uppercase transition-colors duration-700 ${dark ? "text-white/70" : "text-olive"} sm:text-[0.54rem] sm:tracking-[0.34em]`}>
              <span className={`block h-px w-4 transition-all duration-500 group-hover:w-7 ${dark ? "bg-white/60" : "bg-olive/60"}`} />
              Medicina estética
            </span>
          </a>

          <nav aria-label="Principal" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {desktopLinks.map((l) => {
              const on = active === l.id;
              return (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className={`relative rounded-full px-4 py-2 text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-500 ${
                    dark ? (on ? "text-white" : "text-white/70 hover:text-white") : on ? "text-wine" : "text-brown/75 hover:text-wine"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className={`absolute inset-0 rounded-full ${dark ? "bg-white/15" : "bg-wine/10"}`}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`fat-sm group flex items-center gap-2 rounded-full py-2 pr-2 pl-3.5 text-[0.6rem] tracking-[0.12em] uppercase transition-colors duration-500 sm:pl-5 sm:text-[0.68rem] sm:tracking-[0.18em] ${
                dark ? "bg-white text-brown hover:bg-[#E6CFA5]" : "bg-brown text-white hover:bg-wine"
              }`}
            >
              Agendar
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${
                  dark ? "bg-brown text-white" : "bg-white/15 text-white"
                }`}
              >
                <ArrowUpRight size={14} strokeWidth={1.75} />
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors lg:hidden ${
                dark ? "border-white/30 hover:bg-white/15" : "border-brown/15 hover:bg-brown/5"
              }`}
            >
              <motion.span
                aria-hidden
                className="absolute block h-px w-4 bg-current"
                animate={{ y: open ? 0 : -3, rotate: open ? 45 : 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
              <motion.span
                aria-hidden
                className="absolute block h-px w-4 bg-current"
                animate={{ y: open ? 0 : 3, rotate: open ? -45 : 0 }}
                transition={{ duration: 0.4, ease: EASE }}
              />
            </button>
          </div>

          {/* Progresso de leitura */}
          <span aria-hidden className={`absolute inset-x-6 bottom-0 h-px ${dark ? "bg-white/10" : "bg-brown/5"}`}>
            <span className={`block h-full origin-left ${dark ? "bg-[#E6CFA5]" : "bg-wine"}`} style={{ transform: `scaleX(${progress})` }} />
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
