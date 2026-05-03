import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ServicesMarquee } from "@/components/sections/services-marquee";
import { BeforeAfter } from "@/components/sections/before-after";
import { ProjectsMasonry } from "@/components/sections/projects-masonry";
import { ProcessBlueprint } from "@/components/sections/process-blueprint";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <StatsBar />
      <ServicesMarquee />
      <BeforeAfter />
      <ProjectsMasonry />
      <ProcessBlueprint />
      <CTA />
      <Footer />
    </main>
  );
}
