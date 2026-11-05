import { Header } from "@/components/Header";
import { Cursor } from "@/components/Cursor";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Procedures } from "@/components/Procedures";
import { Steps } from "@/components/Steps";
import { Experience } from "@/components/Experience";
import { Results } from "@/components/Results";
import { AboutFooter } from "@/components/AboutFooter";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <Cursor />
      <main id="conteudo" className="h-screen h-dvh snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <Hero />
        <Philosophy />
        <Procedures />
        <Steps />
        <Experience />
        <Results />
        <AboutFooter />
      </main>
    </>
  );
}
