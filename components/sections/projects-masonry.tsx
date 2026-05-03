"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/magicui/reveal";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  area: string;
  tag: "Cocina" | "Baño" | "Salón" | "Local" | "Dormitorio" | "Integral";
  ratio: "tall" | "square" | "wide";
  palette: "sand" | "sage" | "terracotta" | "cream";
}

const projects: Project[] = [
  { title: "Reforma integral · Recogidas", area: "110 m² · Granada centro", tag: "Integral", ratio: "tall", palette: "sand" },
  { title: "Cocina abierta · Albaicín", area: "Vivienda histórica", tag: "Cocina", ratio: "square", palette: "sage" },
  { title: "Baño microcemento · Realejo", area: "Suite principal", tag: "Baño", ratio: "wide", palette: "terracotta" },
  { title: "Salón con chimenea · Chana", area: "Reforma 95 m²", tag: "Salón", ratio: "tall", palette: "cream" },
  { title: "Local boutique · Gran Vía", area: "60 m² comerciales", tag: "Local", ratio: "square", palette: "sand" },
  { title: "Dormitorio principal · Zaidín", area: "Vestidor a medida", tag: "Dormitorio", ratio: "wide", palette: "sage" },
  { title: "Cocina con isla · Cártuja", area: "Encimera Dekton", tag: "Cocina", ratio: "tall", palette: "terracotta" },
  { title: "Baño guest · Plaza Nueva", area: "Microcemento + nicho", tag: "Baño", ratio: "square", palette: "cream" }
];

const palettes: Record<Project["palette"], { bg: string; accent: string; line: string }> = {
  sand:       { bg: "linear-gradient(160deg,#FBF6F0 0%,#E6D5C3 70%,#D4BB9F 100%)", accent: "#C97B5F", line: "#BFA079" },
  sage:       { bg: "linear-gradient(160deg,#F0F2EE 0%,#C0CAB9 70%,#8B9C82 100%)", accent: "#6F8167", line: "#A8B5A1" },
  terracotta: { bg: "linear-gradient(160deg,#F8E9E1 0%,#F0D2C3 60%,#E2A98F 100%)", accent: "#A95C42", line: "#C97B5F" },
  cream:      { bg: "linear-gradient(160deg,#FFFDFA 0%,#F4EFE6 60%,#E6D5C3 100%)", accent: "#A78258", line: "#D4BB9F" }
};

const ratios: Record<Project["ratio"], string> = {
  tall: "aspect-[3/4]",
  square: "aspect-square",
  wide: "aspect-[4/3]"
};

function Plate({ p }: { p: Project }) {
  const pal = palettes[p.palette];
  return (
    <div
      className={cn("relative w-full overflow-hidden", ratios[p.ratio])}
      style={{ background: pal.bg }}
    >
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full opacity-90"
      >
        <rect y="280" width="400" height="120" fill={pal.line} opacity=".25" />
        <rect x="60" y="80" width="280" height="200" fill="white" opacity=".55" />
        <rect x="60" y="80" width="280" height="200" fill="none" stroke={pal.line} strokeWidth="1.5" />
        <circle cx="200" cy="160" r="24" fill={pal.accent} opacity=".25" />
        <line x1="200" y1="80" x2="200" y2="136" stroke={pal.accent} strokeWidth="1.5" opacity=".5" />
        <rect x="100" y="240" width="200" height="40" rx="8" fill={pal.accent} opacity=".35" />
      </svg>
    </div>
  );
}

export function ProjectsMasonry() {
  return (
    <section id="proyectos" className="relative py-28">
      <div className="container">
        <Reveal>
          <div className="mb-14 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-terracotta-300">
                Proyectos recientes
              </span>
              <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-charcoal-800 md:text-5xl">
                Una galería como una{" "}
                <span className="italic text-sage-500">pared bien colocada.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-charcoal-600">
              Selección de obras entregadas en los últimos 18 meses. Cada
              proyecto es único, ninguno se parece a otro.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: (i % 3) * 0.08
              }}
              className="group mb-5 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-2xl border border-charcoal-700/10 bg-white soft-shadow">
                <Plate p={p} />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div>
                    <span className="mb-1 inline-block rounded-full bg-white/85 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-charcoal-700 backdrop-blur">
                      {p.tag}
                    </span>
                    <h3 className="font-display text-lg leading-tight text-charcoal-800">
                      {p.title}
                    </h3>
                    <p className="text-xs text-charcoal-600">{p.area}</p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-charcoal-700/10 bg-white text-terracotta-300 transition group-hover:bg-terracotta-300 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-charcoal-500">
          Sustituye los gráficos por tus fotos reales en{" "}
          <code className="rounded bg-cream-200 px-1 py-0.5 text-charcoal-700">
            components/sections/projects-masonry.tsx
          </code>{" "}
          (componente <code>Plate</code>).
        </p>
      </div>
    </section>
  );
}
