"use client";

import { Star, ShieldCheck, Award } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Reveal } from "@/components/magicui/reveal";

const stats = [
  {
    value: 15,
    suffix: "+",
    label: "Años de experiencia",
    sub: "Desde 2009 en Granada",
    icon: Award
  },
  {
    value: 4.9,
    decimals: 1,
    suffix: "/5",
    label: "Valoración Google Maps",
    sub: "Más de 80 reseñas reales",
    icon: Star
  },
  {
    value: 2,
    suffix: " años",
    label: "Garantía total",
    sub: "Mano de obra y acabados",
    icon: ShieldCheck
  }
];

export function StatsBar() {
  return (
    <section className="relative border-y border-white/5 bg-black/40 py-16">
      <div className="container">
        <Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="relative bg-black/60 p-8 transition hover:bg-white/[0.03]"
                >
                  <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-display text-5xl font-medium tracking-tight text-white md:text-6xl">
                    <NumberTicker
                      value={s.value}
                      decimalPlaces={s.decimals ?? 0}
                    />
                    <span className="text-gold">{s.suffix}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-white/85">
                    {s.label}
                  </div>
                  <div className="text-xs text-white/45">{s.sub}</div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
