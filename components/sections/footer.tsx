export function Footer() {
  return (
    <footer className="border-t border-charcoal-700/10 bg-white py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-charcoal-700">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-sand-200 to-terracotta-300 text-white">
            <span className="font-display text-sm leading-none">SG</span>
          </span>
          <span>
            Reformas <span className="text-terracotta-300">SG</span> · Granada
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-charcoal-500">
          <a href="#servicios" className="hover:text-charcoal-800">
            Servicios
          </a>
          <a href="#proyectos" className="hover:text-charcoal-800">
            Proyectos
          </a>
          <a href="#antes-despues" className="hover:text-charcoal-800">
            Antes / Después
          </a>
          <a href="#proceso" className="hover:text-charcoal-800">
            Proceso
          </a>
          <a href="#contacto" className="hover:text-charcoal-800">
            Contacto
          </a>
          <a href="#" className="hover:text-charcoal-800">
            Aviso legal
          </a>
          <a href="#" className="hover:text-charcoal-800">
            Privacidad
          </a>
        </nav>

        <div className="text-xs text-charcoal-500">
          © {new Date().getFullYear()} Reformas SG · Hecho con detalle en Granada
        </div>
      </div>
    </footer>
  );
}
