import { Hammer } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-white/70">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-700 text-black">
            <Hammer className="h-3.5 w-3.5" />
          </span>
          <span>
            Reformas <span className="text-gold">SG</span> · Granada
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50">
          <a href="#servicios" className="hover:text-white">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-white">
            Proyectos
          </a>
          <a href="#proceso" className="hover:text-white">
            Proceso
          </a>
          <a href="#contacto" className="hover:text-white">
            Contacto
          </a>
          <a href="#" className="hover:text-white">
            Aviso legal
          </a>
          <a href="#" className="hover:text-white">
            Privacidad
          </a>
        </nav>

        <div className="text-xs text-white/40">
          © {new Date().getFullYear()} Reformas SG · Hecho con detalle en Granada
        </div>
      </div>
    </footer>
  );
}
