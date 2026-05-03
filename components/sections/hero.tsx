"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { AuroraBackground } from "@/components/magicui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground className="relative min-h-[100svh] w-full px-6 pt-32">
      <GridPattern
        className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        width={56}
        height={56}
        squares={[
          [4, 3],
          [10, 4],
          [12, 8],
          [3, 10],
          [16, 12]
        ]}
      />

      <div className="container relative mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge className="mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold"></span>
            </span>
            <span>Aceptando proyectos · Granada y provincia</span>
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white md:text-7xl lg:text-[88px]"
        >
          La reforma de tus sueños.{" "}
          <span className="gradient-text italic">Ejecución de precisión.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/65 md:text-lg"
        >
          Reformas integrales premium, interiorismo y obra de detalle.{" "}
          <span className="inline-flex items-center gap-1 text-white/80">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            Gran Vía, Granada
          </span>
          . Más de 15 años transformando hogares y locales con plazos cumplidos
          y acabados que duran.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
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
              <Sparkles className="mr-2 h-4 w-4 text-gold" />
              Ver proyectos recientes
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-20 flex items-center gap-3 text-xs text-white/50"
        >
          <div className="flex -space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border border-black bg-gradient-to-br from-zinc-400 to-zinc-700"
              />
            ))}
          </div>
          <span>+200 proyectos entregados desde 2009</span>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}
