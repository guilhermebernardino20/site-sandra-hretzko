import type { ReactNode } from "react";
import { Spotlight } from "./Spotlight";

const aurora = {
  white: ["bg-olive/15", "bg-wine/10"],
  wine: ["bg-[#e6cfa5]/15", "bg-[#c0705f]/25"],
  olive: ["bg-[#e6cfa5]/15", "bg-[#b7a36a]/25"],
  brown: ["bg-[#60211e]/45", "bg-[#e6cfa5]/10"],
} as const;

const themes = {
  white: "bg-white text-brown",
  wine: "bg-wine text-white",
  olive: "bg-olive text-white",
  brown: "bg-brown text-white",
} as const;

export type Theme = keyof typeof themes;

/** Uma "tela": ocupa 100vh, encaixa no snap e centraliza o conteúdo. */
export function Section({
  id,
  children,
  theme = "white",
  className = "",
  footer,
}: {
  id: string;
  children: ReactNode;
  theme?: Theme;
  className?: string;
  footer?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen min-h-dvh w-full snap-start flex-col overflow-hidden ${themes[theme]} ${className}`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className={`aurora-blob aurora-a -top-[18%] -left-[12%] h-[60vmin] w-[60vmin] ${aurora[theme][0]}`} />
        <span className={`aurora-blob aurora-b -right-[14%] -bottom-[20%] h-[70vmin] w-[70vmin] ${aurora[theme][1]}`} />
      </div>
      <Spotlight color={theme === "white" ? "rgba(96,83,49,0.10)" : "rgba(230,207,165,0.13)"} />
      {theme !== "white" && <div aria-hidden className="grain pointer-events-none absolute inset-0" />}
      <div className="relative z-[1] mx-auto my-auto w-full max-w-6xl px-6 pt-[11vh] pb-[6vh] md:px-12">{children}</div>
      {footer}
    </section>
  );
}
