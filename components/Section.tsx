import type { ReactNode } from "react";
import { Spotlight } from "./Spotlight";

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
      <Spotlight color={theme === "white" ? "rgba(96,83,49,0.10)" : "rgba(230,207,165,0.13)"} />
      {theme !== "white" && <div aria-hidden className="grain pointer-events-none absolute inset-0" />}
      <div className="relative z-[1] mx-auto my-auto w-full max-w-6xl px-6 pt-[11vh] pb-[6vh] md:px-12">{children}</div>
      {footer}
    </section>
  );
}
