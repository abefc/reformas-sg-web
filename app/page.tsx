import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { ProjectsList } from "@/components/sections/projects-list";
import { ProcessTerminal } from "@/components/sections/process-terminal";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <ServicesMarquee />
      <ProjectsList />
      <ProcessTerminal />
      <CTA />
      <Footer />
    </main>
  );
}
