"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "@/components/magicui/reveal";
import { cn } from "@/lib/utils";

function BeforePlate() {
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 800 600"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ba-bef-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#9ca3af" />
            <stop offset="1" stopColor="#6b7280" />
          </linearGradient>
          <linearGradient id="ba-bef-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7c736a" />
            <stop offset="1" stopColor="#5b544c" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#ba-bef-bg)" />
        <rect y="430" width="800" height="170" fill="url(#ba-bef-floor)" />
        <rect x="60" y="120" width="200" height="280" fill="#a8a39a" opacity=".5" />
        <rect x="540" y="160" width="180" height="260" fill="#a8a39a" opacity=".4" />
        <line x1="0" y1="430" x2="800" y2="430" stroke="#3f3a35" strokeWidth="2" />
        <g opacity=".5">
          <circle cx="400" cy="220" r="34" fill="#d6d3d1" />
          <line x1="400" y1="0" x2="400" y2="186" stroke="#9ca3af" strokeWidth="1" />
        </g>
        <text
          x="40"
          y="560"
          fill="#1f2937"
          fontFamily="serif"
          fontStyle="italic"
          fontSize="22"
          opacity=".75"
        >
          antes
        </text>
      </svg>
      <div className="absolute inset-0 bg-charcoal-700/10 mix-blend-multiply" />
    </div>
  );
}

function AfterPlate() {
  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 800 600"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="ba-aft-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FAF7F2" />
            <stop offset="1" stopColor="#EDE5D6" />
          </linearGradient>
          <linearGradient id="ba-aft-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#D4BB9F" />
            <stop offset="1" stopColor="#A78258" />
          </linearGradient>
          <linearGradient id="ba-aft-sofa" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#C0CAB9" />
            <stop offset="1" stopColor="#8B9C82" />
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#ba-aft-bg)" />
        <rect y="430" width="800" height="170" fill="url(#ba-aft-floor)" />
        <rect x="80" y="100" width="640" height="320" fill="#FAF7F2" />
        <rect x="80" y="100" width="640" height="320" fill="none" stroke="#E6D5C3" strokeWidth="2" />
        <rect x="180" y="370" width="440" height="80" rx="14" fill="url(#ba-aft-sofa)" />
        <rect x="200" y="350" width="80" height="50" rx="10" fill="#DDE3D9" />
        <rect x="520" y="350" width="80" height="50" rx="10" fill="#DDE3D9" />
        <circle cx="400" cy="220" r="36" fill="#F0D2C3" stroke="#C97B5F" strokeWidth="2" />
        <line x1="400" y1="100" x2="400" y2="184" stroke="#C97B5F" strokeWidth="2" />
        <rect x="120" y="280" width="120" height="120" rx="6" fill="#DDE3D9" />
        <rect x="600" y="240" width="100" height="160" rx="6" fill="#F4E9DC" />
        <text
          x="40"
          y="560"
          fill="#1f2937"
          fontFamily="serif"
          fontStyle="italic"
          fontSize="22"
        >
          después
        </text>
      </svg>
    </div>
  );
}

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [setFromClientX]);

  return (
    <section id="antes-despues" className="relative bg-cream-100 py-28">
      <div className="container">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-terracotta-300">
              Transformaciones
            </span>
            <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-charcoal-800 md:text-5xl">
              Arrastra para ver el{" "}
              <span className="italic text-sage-500">antes y después.</span>
            </h2>
            <p className="mt-4 text-charcoal-600">
              Cada proyecto empieza con una visita técnica y termina con una
              entrega llave en mano. Mueve el control para ver una de nuestras
              reformas integrales en Granada centro.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={ref}
            onPointerDown={(e) => {
              dragging.current = true;
              document.body.style.userSelect = "none";
              setFromClientX(e.clientX);
            }}
            className={cn(
              "relative mx-auto aspect-[4/3] w-full max-w-5xl select-none overflow-hidden rounded-3xl border border-charcoal-700/10 bg-white",
              "soft-shadow cursor-ew-resize touch-none"
            )}
          >
            <BeforePlate />

            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
            >
              <AfterPlate />
            </div>

            <div
              className="absolute inset-y-0 z-10 flex items-center"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="h-full w-px bg-white shadow-[0_0_0_1px_rgba(31,41,55,0.15)]" />
              <button
                type="button"
                aria-label="Mover divisor"
                className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-charcoal-700/10 bg-white text-terracotta-400 shadow-[0_8px_24px_-8px_rgba(31,41,55,0.25)] transition hover:scale-105"
                onPointerDown={(e) => e.stopPropagation()}
              >
                <MoveHorizontal className="h-5 w-5" />
              </button>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute left-4 top-4 rounded-full bg-charcoal-800/85 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur"
            >
              Antes
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute right-4 top-4 rounded-full bg-terracotta-300/95 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-white backdrop-blur"
            >
              Después
            </motion.span>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-charcoal-500">
          Sustituye los gráficos por tus fotos reales en{" "}
          <code className="rounded bg-cream-200 px-1 py-0.5 text-charcoal-700">
            components/sections/before-after.tsx
          </code>
        </p>
      </div>
    </section>
  );
}
