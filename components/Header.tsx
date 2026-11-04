"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "#filosofia", label: "Filosofia" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#resultados", label: "Resultados" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-sand/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <a href="#top" className="font-serif text-lg tracking-tight md:text-xl">
          Sandra Hretzko
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-coffee-soft transition-colors hover:text-terracotta"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-coffee/25 px-5 py-2.5 text-xs font-medium tracking-wide transition-colors duration-500 hover:bg-coffee hover:text-sand"
        >
          Agendar
        </a>
      </div>
    </header>
  );
}
