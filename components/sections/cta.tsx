"use client";

import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/magicui/reveal";

export function CTA() {
  return (
    <section id="contacto" className="relative bg-cream-100 py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-charcoal-700/10 bg-white p-10 soft-shadow md:p-16">
            <div
              className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full opacity-70 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(230,213,195,0.7), transparent)"
              }}
            />
            <div
              className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(168,181,161,0.55), transparent)"
              }}
            />

            <div className="relative grid gap-10 md:grid-cols-2 md:items-end">
              <div>
                <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-terracotta-300">
                  Hablemos
                </span>
                <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-charcoal-800 md:text-6xl">
                  Tu reforma,{" "}
                  <span className="italic text-sage-500">sin sorpresas.</span>
                </h2>
                <p className="mt-5 max-w-md text-charcoal-600">
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
                <li className="flex items-center gap-3 rounded-2xl border border-charcoal-700/10 bg-cream-50 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sand-100 text-terracotta-400 ring-1 ring-sand-300">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium text-charcoal-800">
                      Oficina central
                    </div>
                    <div className="text-charcoal-500">
                      Gran Vía de Colón, Granada
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-charcoal-700/10 bg-cream-50 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-50 text-sage-500 ring-1 ring-sage-200">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium text-charcoal-800">
                      +34 958 00 00 00
                    </div>
                    <div className="text-charcoal-500">
                      Lun – Vie · 9:00 – 19:00
                    </div>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-2xl border border-charcoal-700/10 bg-cream-50 p-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sand-100 text-terracotta-400 ring-1 ring-sand-300">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-medium text-charcoal-800">
                      hola@reformas-sg.com
                    </div>
                    <div className="text-charcoal-500">
                      Respuesta en menos de 24 h
                    </div>
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
