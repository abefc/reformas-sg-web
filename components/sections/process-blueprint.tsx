"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { ClipboardList, Hammer, Sparkles, KeyRound } from "lucide-react";
import { Reveal } from "@/components/magicui/reveal";

const steps = [
  {
    n: "01",
    title: "Visita y plano",
    body: "Levantamiento técnico en obra y planos a escala con tus necesidades reales.",
    icon: ClipboardList
  },
  {
    n: "02",
    title: "Presupuesto cerrado",
    body: "Sin partidas abiertas, sin extras inesperados. Lo que firmas, eso pagas.",
    icon: Hammer
  },
  {
    n: "03",
    title: "Ejecución y acabados",
    body: "Jefe de obra dedicado, control de plomos y limpieza diaria.",
    icon: Sparkles
  },
  {
    n: "04",
    title: "Entrega llave en mano",
    body: "Garantía de 2 años. Volvemos si algo no es perfecto.",
    icon: KeyRound
  }
];

function Blueprint() {
  return (
    <svg
      viewBox="0 0 600 480"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="grid-blueprint" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#C97B5F" strokeOpacity=".18" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="600" height="480" fill="#FAF7F2" />
      <rect width="600" height="480" fill="url(#grid-blueprint)" />
      <g stroke="#374151" strokeWidth="2" fill="none" strokeLinecap="square">
        <rect x="60" y="60" width="480" height="360" />
        <line x1="60" y1="240" x2="320" y2="240" />
        <line x1="320" y1="60" x2="320" y2="420" />
        <line x1="320" y1="180" x2="540" y2="180" />
        <rect x="80" y="80" width="220" height="140" />
        <rect x="80" y="260" width="220" height="140" />
        <rect x="340" y="80" width="180" height="80" />
        <rect x="340" y="200" width="180" height="200" />
      </g>
      <g stroke="#C97B5F" strokeWidth="1.5" fill="none">
        <path d="M150 240 L150 220 A20 20 0 0 1 170 200" />
        <path d="M340 280 L360 280 A20 20 0 0 0 380 260" />
        <circle cx="420" cy="320" r="22" />
        <line x1="420" y1="298" x2="420" y2="342" />
        <line x1="398" y1="320" x2="442" y2="320" />
      </g>
      <g fontFamily="serif" fontStyle="italic" fontSize="13" fill="#374151" opacity=".85">
        <text x="100" y="105">salón</text>
        <text x="100" y="285">cocina</text>
        <text x="360" y="105">baño</text>
        <text x="360" y="225">dormitorio</text>
      </g>
      <g stroke="#374151" strokeWidth="1" opacity=".5">
        <line x1="60" y1="40" x2="540" y2="40" />
        <line x1="60" y1="34" x2="60" y2="46" />
        <line x1="540" y1="34" x2="540" y2="46" />
        <text x="288" y="32" fontFamily="serif" fontSize="11" fill="#374151">8.40 m</text>
      </g>
    </svg>
  );
}

function FinishedRoom() {
  return (
    <svg
      viewBox="0 0 600 480"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="room-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFDFA" />
          <stop offset="1" stopColor="#F4EFE6" />
        </linearGradient>
        <linearGradient id="room-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#D4BB9F" />
          <stop offset="1" stopColor="#A78258" />
        </linearGradient>
        <linearGradient id="room-sofa" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#C0CAB9" />
          <stop offset="1" stopColor="#8B9C82" />
        </linearGradient>
      </defs>
      <rect width="600" height="480" fill="url(#room-bg)" />
      <rect y="340" width="600" height="140" fill="url(#room-floor)" />
      <rect x="40" y="60" width="520" height="280" fill="#FFFDFA" />
      <rect x="40" y="60" width="520" height="280" fill="none" stroke="#E6D5C3" strokeWidth="2" />
      <rect x="120" y="290" width="360" height="60" rx="14" fill="url(#room-sofa)" />
      <rect x="140" y="270" width="60" height="40" rx="8" fill="#DDE3D9" />
      <rect x="400" y="270" width="60" height="40" rx="8" fill="#DDE3D9" />
      <circle cx="300" cy="170" r="34" fill="#F0D2C3" stroke="#C97B5F" strokeWidth="2" />
      <line x1="300" y1="60" x2="300" y2="138" stroke="#C97B5F" strokeWidth="2" />
      <rect x="80" y="220" width="100" height="100" rx="6" fill="#DDE3D9" />
      <rect x="450" y="180" width="80" height="140" rx="6" fill="#F4E9DC" />
      <rect x="220" y="370" width="160" height="14" rx="6" fill="#A78258" opacity=".4" />
    </svg>
  );
}

export function ProcessBlueprint() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 30%"]
  });

  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const blueprintBlurPx = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const blueprintFilter = useMotionTemplate`blur(${blueprintBlurPx}px)`;
  const blueprintScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);
  const photoOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);

  return (
    <section id="proceso" className="relative py-28">
      <div className="container grid gap-16 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-terracotta-300">
            Proceso
          </span>
          <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-charcoal-800 md:text-5xl">
            Del plano{" "}
            <span className="italic text-sage-500">a la realidad.</span>
          </h2>
          <p className="mt-5 max-w-md text-charcoal-600">
            Cada obra empieza sobre papel y termina con la llave en tu mano.
            Cuatro pasos, sin sorpresas, con el mismo equipo de principio a
            fin.
          </p>

          <ol className="mt-10 space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <li
                  key={s.n}
                  className="group flex gap-4 rounded-2xl border border-charcoal-700/8 bg-white/70 p-4 backdrop-blur transition hover:bg-white"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand-100 text-terracotta-400 ring-1 ring-sand-300 transition group-hover:bg-terracotta-300 group-hover:text-white group-hover:ring-terracotta-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-xs text-terracotta-300">
                        {s.n}
                      </span>
                      <h3 className="text-sm font-semibold text-charcoal-800">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm text-charcoal-600">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <div ref={ref} className="lg:col-span-7">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-charcoal-700/10 bg-cream-50 soft-shadow">
            <motion.div
              style={{
                opacity: blueprintOpacity,
                filter: blueprintFilter,
                scale: blueprintScale
              }}
              className="absolute inset-0"
            >
              <Blueprint />
            </motion.div>

            <motion.div
              style={{ opacity: photoOpacity, scale: photoScale }}
              className="absolute inset-0"
            >
              <FinishedRoom />
            </motion.div>

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-5 text-[10px] font-medium uppercase tracking-[0.25em]">
              <motion.span
                style={{ opacity: blueprintOpacity }}
                className="rounded-full bg-charcoal-800 px-3 py-1 text-white/95"
              >
                Plano · 1:50
              </motion.span>
              <motion.span
                style={{ opacity: photoOpacity }}
                className="rounded-full bg-terracotta-300 px-3 py-1 text-white"
              >
                Entregado
              </motion.span>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-charcoal-500">
                <span className="h-px w-10 bg-charcoal-700/20" />
                <span>haz scroll</span>
                <span className="h-px w-10 bg-charcoal-700/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
