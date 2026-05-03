"use client";

import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magicui/reveal";
import { GridPattern } from "@/components/magicui/grid-pattern";

export function CTA() {
  return (
    <section id="contacto" className="relative py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A0A0B] via-[#111] to-[#0A0A0B] p-10 md:p-16">
            <GridPattern
              className="absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_right,black_20%,transparent_70%)]"
              width={48}
              height={48}
            />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(closest-side, #d4af37, transparent)" }}
            />

            <div className="relative grid gap-10 md:grid-cols-2 md:items-end">
              <div>
                <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-gold">
                  Hablemos
                </span>
                <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-white md:text-6xl">
                  Tu reforma,{" "}
                  <span className="gradient-text">sin sorpresas.</span>
                </h2>
                <p className="mt-5 max-w-md text-white/60">
                  Cuéntanos tu proyecto y te visitamos en menos de 48 h.
                  Presupuesto cerrado, transparente y sin compromiso.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="tel:+34958000000">
                    <Button size="lg">
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar ahora
                    </Button>
                  </a>
                  <a href="mailto:hola@reformas-sg.com">
                    <Button size="lg" variant="outline">
                      Enviar email
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>

              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium text-white">Oficina central</div>
                    <div className="text-white/55">Gran Vía de Colón, Granada</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium text-white">+34 958 00 00 00</div>
                    <div className="text-white/55">Lun – Vie · 9:00 – 19:00</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/30">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium text-white">hola@reformas-sg.com</div>
                    <div className="text-white/55">Respuesta en menos de 24 h</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
