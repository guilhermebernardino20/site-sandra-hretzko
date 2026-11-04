import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

// Substituta visual da Nexa até os arquivos licenciados entrarem em /public/fonts
const fallback = Outfit({ subsets: ["latin"], variable: "--font-fallback", display: "swap" });

export const metadata: Metadata = {
  title: "Dra. Sandra Hretzko — Realçar o que já é seu",
  description: "Medicina estética natural: fios faciais e preenchimentos com indicação precisa.",
  openGraph: {
    title: "Dra. Sandra Hretzko — Realçar o que já é seu",
    description: "Estética unida à naturalidade e ao propósito. Agende sua avaliação.",
    locale: "pt_BR",
    type: "website",
  },
};
export const viewport: Viewport = { themeColor: "#FFFFFF", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fallback.variable}>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Pular para o conteúdo
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
