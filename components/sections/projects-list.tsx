"use client";

import { CheckCircle2, Clock4, Hammer, ChefHat, Store, ShowerHead } from "lucide-react";
import { AnimatedList } from "@/components/magicui/animated-list";
import { Reveal } from "@/components/magicui/reveal";
import { cn } from "@/lib/utils";

interface ProjectItem {
  name: string;
  location: string;
  status: "Finalizada" | "En curso" | "Diseño";
  icon: typeof Hammer;
  color: string;
  time: string;
}

const items: ProjectItem[] = [
  {
    name: "Reforma integral · Calle Recogidas",
    location: "Vivienda 110 m² · Granada centro",
    status: "Finalizada",
    icon: Hammer,
    color: "from-emerald-400/20 to-emerald-400/0 text-emerald-300",
    time: "hace 3 días"
  },
  {
    name: "Local comercial · Calle Elvira",
    location: "Restauración 90 m²",
    status: "En curso",
    icon: Store,
    color: "from-gold/20 to-gold/0 text-gold",
    time: "hace 1 semana"
  },
  {
    name: "Cocina de diseño · Albaicín",
    location: "Vivienda histórica con vistas",
    status: "Finalizada",
    icon: ChefHat,
    color: "from-emerald-400/20 to-emerald-400/0 text-emerald-300",
    time: "hace 2 semanas"
  },
  {
    name: "Baño premium · Realejo",
    location: "Microcemento + iluminación led",
    status: "Finalizada",
    icon: ShowerHead,
    color: "from-emerald-400/20 to-emerald-400/0 text-emerald-300",
    time: "hace 3 semanas"
  },
  {
    name: "Reforma integral · Zaidín",
    location: "Vivienda 95 m² · 3 dormitorios",
    status: "En curso",
    icon: Hammer,
    color: "from-gold/20 to-gold/0 text-gold",
    time: "hoy"
  },
  {
    name: "Diseño · Local Gran Vía",
    location: "Boutique 60 m² · proyecto inicial",
    status: "Diseño",
    icon: Store,
    color: "from-sky-400/20 to-sky-400/0 text-sky-300",
    time: "ayer"
  }
];

function Notification({ p }: { p: ProjectItem }) {
  const Icon = p.icon;
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[440px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "border border-white/10 bg-white/[0.03] backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,.04),0_24px_60px_-30px_rgba(212,175,55,.25)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-full bg-gradient-to-br",
            p.color
          )}
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-sm font-medium text-white">
            <span>{p.name}</span>
          </figcaption>
          <p className="text-xs font-normal text-white/55">{p.location}</p>
        </div>
        <div className="ml-auto flex flex-col items-end gap-1">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium",
              p.status === "Finalizada" &&
                "bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/20",
              p.status === "En curso" &&
                "bg-gold/10 text-gold ring-1 ring-gold/30",
              p.status === "Diseño" &&
                "bg-sky-400/10 text-sky-300 ring-1 ring-sky-400/20"
            )}
          >
            {p.status === "Finalizada" ? (
              <CheckCircle2 className="h-3 w-3" />
            ) : (
              <Clock4 className="h-3 w-3" />
            )}
            {p.status}
          </span>
          <span className="text-[10px] text-white/35">{p.time}</span>
        </div>
      </div>
    </figure>
  );
}

export function ProjectsList() {
  return (
    <section id="proyectos" className="relative py-28">
      <div className="container grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="max-w-xl">
            <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-gold">
              Proyectos recientes
            </span>
            <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
              Obras{" "}
              <span className="gradient-text">entregadas y en marcha.</span>
            </h2>
            <p className="mt-5 max-w-md text-white/55">
              Trabajamos en simultáneo en varios proyectos, pero cada uno tiene
              jefe de obra dedicado. Esto es lo que está pasando ahora mismo en
              nuestras obras de Granada.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-xs text-white/45">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Finalizada
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold" />
                En curso
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                En diseño
              </span>
            </div>
          </div>
        </Reveal>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-background to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-background to-transparent" />
          <div className="relative h-[480px] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent p-4">
            <AnimatedList delay={1800}>
              {items.map((item, idx) => (
                <Notification p={item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  );
}
