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
    <section className="relative bg-cream-100 py-20">
      <div className="container">
        <Reveal>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-charcoal-700/10 bg-charcoal-700/10 md:grid-cols-3">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="relative bg-white p-8 transition hover:bg-cream-50"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-sage-500 ring-1 ring-sage-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-display text-5xl font-medium tracking-tight text-charcoal-800 md:text-6xl">
                    <NumberTicker
                      value={s.value}
                      decimalPlaces={s.decimals ?? 0}
                    />
                    <span className="text-terracotta-300">{s.suffix}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-charcoal-700">
                    {s.label}
                  </div>
                  <div className="text-xs text-charcoal-500">{s.sub}</div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
