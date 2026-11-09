import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/site";
import "./globals.css";

// Substituta visual da Nexa até os arquivos licenciados entrarem em /public/fonts
const fallback = Outfit({ subsets: ["latin"], variable: "--font-fallback", display: "swap" });

// TODO: definir NEXT_PUBLIC_SITE_URL com o domínio real quando o site for publicado
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dra. Sandra Hretzko | Realçar o que já é seu",
    template: "%s",
  },
  description: "Harmonização orofacial natural em Pinhais: botox, preenchimentos, fios faciais e bioestimuladores com indicação precisa.",
  keywords: ["harmonização orofacial", "harmonização facial", "botox", "preenchimento labial", "fios faciais", "bioestimuladores", "Pinhais", "Curitiba", "dentista"],
  openGraph: {
    title: "Dra. Sandra Hretzko | Realçar o que já é seu",
    description: "Estética unida à naturalidade e ao propósito. Agende sua avaliação.",
    locale: "pt_BR",
    type: "website",
    siteName: "Dra. Sandra Hretzko",
  },
  twitter: { card: "summary_large_image" },
};

// Dados estruturados para o Google (consultório odontológico)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: "Harmonização orofacial natural: botox, preenchimentos, fios faciais e bioestimuladores.",
  telephone: `+${site.whatsappNumber}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua João Leopoldo Jacomel, 12066",
    addressLocality: "Pinhais",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Thursday"], opens: "08:00", closes: "18:00" },
  ],
  sameAs: [`https://instagram.com/${site.instagram}`],
};

export const viewport: Viewport = { themeColor: "#FFFFFF", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={fallback.variable}>
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Pular para o conteúdo
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
