"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#antes-despues", label: "Antes / Después" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" }
];

function Logo() {
  return (
    <a
      href="#"
      className="flex items-center gap-2 pl-2 text-sm font-semibold tracking-tight text-charcoal-800"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-sand-200 to-terracotta-300 text-white shadow-sm">
        <span className="font-display text-base leading-none">SG</span>
      </span>
      <span>
        Reformas <span className="text-terracotta-300">SG</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300",
          scrolled
            ? "glass-light soft-shadow"
            : "border border-charcoal-700/5 bg-white/50 backdrop-blur"
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-charcoal-600 transition hover:bg-charcoal-700/5 hover:text-charcoal-800"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contacto" className="hidden md:block">
          <Button size="sm">Pedir presupuesto</Button>
        </a>

        <button
          className="rounded-full p-2 text-charcoal-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute top-16 mx-4 w-[calc(100%-2rem)] max-w-5xl md:hidden">
          <div className="glass-light soft-shadow rounded-2xl p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm text-charcoal-700 hover:bg-charcoal-700/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-terracotta-300 px-4 py-3 text-center text-sm font-medium text-white"
            >
              Pedir presupuesto
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
