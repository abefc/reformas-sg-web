"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/magicui/reveal";

const lines: Array<{ prompt: string; comment?: string; tone?: "ok" | "run" | "next" }> = [
  { prompt: "// reformas_sg.process()", comment: "Workflow auditado · ISO 9001" },
  { prompt: "step1: visita_y_medicion()", comment: "→ levantamiento técnico", tone: "ok" },
  { prompt: "step2: presupuesto_cerrado()", comment: "→ sin sorpresas, sin extras", tone: "ok" },
  { prompt: "step3: demolicion()", comment: "→ retirada y limpieza diaria", tone: "ok" },
  { prompt: "step4: fontaneria_electricidad()", comment: "→ instalaciones certificadas", tone: "run" },
  { prompt: "step5: albanileria_y_alicatado()", comment: "→ control de plomos", tone: "run" },
  { prompt: "step6: acabados_premium()", comment: "→ pintura, microcemento, carpintería", tone: "next" },
  { prompt: "step7: entrega_llave_en_mano()", comment: "→ con garantía de 2 años", tone: "next" }
];

export function ProcessTerminal() {
  return (
    <section id="proceso" className="relative py-28">
      <div className="container grid gap-16 lg:grid-cols-12 lg:items-center">
        <Reveal className="lg:col-span-5">
          <span className="mb-3 inline-block text-xs uppercase tracking-[0.3em] text-gold">
            Proceso
          </span>
          <h2 className="font-display text-balance text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            Reformar como un{" "}
            <span className="gradient-text">producto bien diseñado.</span>
          </h2>
          <p className="mt-5 max-w-md text-white/55">
            Cada obra sigue el mismo protocolo. Sin improvisar, sin retrasos
            sorpresa. Tú firmas un presupuesto cerrado y nosotros nos
            encargamos de orquestar a los gremios paso a paso.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-2xl font-medium text-white">100%</div>
              <div className="text-xs text-white/55">Presupuesto cerrado</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-2xl font-medium text-white">0</div>
              <div className="text-xs text-white/55">Sorpresas finales</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B] shadow-2xl ring-1 ring-white/5">
            <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="font-mono text-[11px] text-white/45">
                ~/reformas-sg/process.ts
              </div>
              <div className="font-mono text-[11px] text-gold">v2.4 · live</div>
            </div>

            <div className="font-mono text-[13px] leading-7 p-6">
              {lines.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <span className="select-none text-white/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span
                      className={
                        l.tone === "ok"
                          ? "text-emerald-300"
                          : l.tone === "run"
                            ? "text-gold"
                            : l.tone === "next"
                              ? "text-sky-300"
                              : "text-white/40"
                      }
                    >
                      {l.prompt}
                    </span>
                    {l.comment && (
                      <span className="ml-3 text-white/35">{l.comment}</span>
                    )}
                  </span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: lines.length * 0.08 + 0.1 }}
                className="mt-4 flex items-center gap-2 text-emerald-300"
              >
                <span className="text-white/40">$</span>
                <span>build successful · entregada en plazo</span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-gold" />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
