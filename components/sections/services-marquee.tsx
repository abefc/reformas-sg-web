"use client";

import {
  Hammer,
  Paintbrush,
  ChefHat,
  ShowerHead,
  Store,
  Lightbulb,
  Sparkles,
  Wrench
} from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Reveal } from "@/components/magicui/reveal";
import { cn } from "@/lib/utils";

const services = [
  { label: "Reformas integrales", icon: Hammer },
  { label: "Interiorismo", icon: Paintbrush },
  { label: "Cocinas de diseño", icon: ChefHat },
  { label: "Baños modernos", icon: ShowerHead },
  { label: "Locales comerciales", icon: Store },
  { label: "Iluminación arquitectónica", icon: Lightbulb },
  { label: "Acabados premium", icon: Sparkles },
  { label: "Instalaciones técnicas", icon: Wrench }
];

function Pill({ label, Icon }: { label: string; Icon: typeof Hammer }) {
  return (
    <div
      className={cn(
        "mx-2 flex shrink-0 items-center gap-3 rounded-full border border-charcoal-700/10 bg-white px-6 py-3 text-sm text-charcoal-700",
        "transition hover:border-terracotta-300/40 hover:text-charcoal-800 hover:shadow-[0_8px_24px_-12px_rgba(31,41,55,0.12)]"
      )}
    >
      <Icon className="h-4 w-4 text-terracotta-300" />
      <span className="whitespace-nowrap tracking-tight">{label}</span>
    </div>
  );
}

export function ServicesMarquee() {
  return (
    <section id="servicios" className="relative py-24">
      <div className="container">
        <Reveal>
          <div className="mb-14 flex flex-col items-center text-center">
            <span className="mb-3 text-xs uppercase tracking-[0.3em] text-terracotta-300">
              Servicios
            </span>
            <h2 className="font-display max-w-3xl text-balance text-4xl font-medium leading-tight tracking-tight text-charcoal-800 md:text-5xl">
              Un único contacto para{" "}
              <span className="italic text-sage-500">toda tu reforma</span>
            </h2>
            <p className="mt-4 max-w-xl text-charcoal-600">
              Coordinamos todos los gremios para que tú no tengas que pensar
              en nada. Diseño, ejecución, acabados y entrega — siempre con
              dirección de obra propia.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <Marquee pauseOnHover className="[--duration:50s]">
          {services.map((s) => (
            <Pill key={s.label} label={s.label} Icon={s.icon} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {services
            .slice()
            .reverse()
            .map((s) => (
              <Pill key={`r-${s.label}`} label={s.label} Icon={s.icon} />
            ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}
