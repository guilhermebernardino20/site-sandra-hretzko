import type { ReactNode } from "react";

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
}: {
  id: string;
  children: ReactNode;
  theme?: Theme;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen min-h-dvh w-full snap-start flex-col justify-center overflow-hidden ${themes[theme]} ${className}`}
    >
      {theme !== "white" && <div aria-hidden className="grain pointer-events-none absolute inset-0" />}
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-[11vh] pb-[6vh] md:px-12">{children}</div>
    </section>
  );
}
