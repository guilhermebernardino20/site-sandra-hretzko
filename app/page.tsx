import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Procedures } from "@/components/Procedures";
import { Experience } from "@/components/Experience";
import { Results } from "@/components/Results";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Procedures />
        <Experience />
        <Results />
        <About />
      </main>
      <Footer />
    </>
  );
}
