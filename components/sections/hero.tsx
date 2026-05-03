"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrushReveal } from "@/components/magicui/brush-reveal";

export function Hero() {
  return (
    <section className="paper-texture wall-wash relative isolate flex min-h-[100svh] w-full items-center overflow-hidden px-6 pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(230,213,195,0.65), transparent 70%)"
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(168,181,161,0.45), transparent 70%)"
        }}
      />

      <div className="container relative mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-400" />
            </span>
            <span>Aceptando proyectos · Granada y provincia</span>
          </Badge>
        </motion.div>

        <h1 className="font-display text-balance text-5xl font-medium leading-[1.05] tracking-tight text-charcoal-800 md:text-7xl lg:text-[88px]">
          <BrushReveal className="block" delay={0.1}>
            La reforma de tus sueños.
          </BrushReveal>
          <BrushReveal
            className="mt-2 block italic text-terracotta-300"
            delay={0.7}
          >
            Ejecución de precisión.
          </BrushReveal>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
          className="mt-7 max-w-2xl text-balance text-base text-charcoal-600 md:text-lg"
        >
          Reformas integrales premium, interiorismo y obra de detalle.{" "}
          <span className="inline-flex items-center gap-1 text-charcoal-800">
            <MapPin className="h-3.5 w-3.5 text-terracotta-300" />
            Gran Vía, Granada
          </span>
          . Más de 15 años transformando hogares y locales con plazos
          cumplidos y acabados que duran.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.85 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#contacto">
            <Button size="lg" className="group">
              Pedir presupuesto gratuito
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </a>
          <a href="#proyectos">
            <Button size="lg" variant="outline">
              <Sparkles className="mr-2 h-4 w-4 text-terracotta-300" />
              Ver proyectos recientes
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2.2 }}
          className="mt-16 flex flex-col items-center gap-3 text-xs text-charcoal-500 sm:flex-row"
        >
          <div className="flex items-center gap-1 text-terracotta-300">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
          <span>4,9 / 5 en Google · más de 200 proyectos entregados desde 2009</span>
        </motion.div>
      </div>
    </section>
  );
}
