# Reformas SG · Landing premium

Landing page de alto impacto para **Reformas SG** (Granada), construida con
Next.js 14 (App Router), Tailwind CSS, shadcn/ui y componentes inspirados en
Magic UI (Marquee, Animated List, Aurora Background, Grid Pattern, Number
Ticker). Estética dark, animaciones fluidas con Framer Motion y paleta
"Granada Gold" sobre negro profundo.

## Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS + shadcn/ui (modo oscuro por defecto)
- **Animación**: Framer Motion
- **Magic UI** (custom):
  - `Marquee` infinito con pause-on-hover
  - `AnimatedList` (notificaciones tipo Netrows)
  - `AuroraBackground`
  - `GridPattern`
  - `NumberTicker`
  - `Reveal` para scroll-reveal
- **Iconos**: lucide-react
- **Tipografía**: Inter + Playfair Display (display) + JetBrains Mono (terminal)

## Estructura

```
reformas-sg/
├── app/
│   ├── globals.css       # variables CSS, tokens, utilidades (.glass, grid-bg, gradient-text)
│   ├── layout.tsx        # fuentes + metadata SEO
│   └── page.tsx          # composición de secciones
├── components/
│   ├── ui/               # primitives (button, badge)
│   ├── magicui/          # marquee, animated-list, aurora-background, grid-pattern, number-ticker, reveal
│   └── sections/         # navbar, hero, stats-bar, services-marquee, projects-list, process-terminal, cta, footer
├── lib/utils.ts          # cn() helper
├── tailwind.config.ts    # tokens + keyframes (marquee, aurora, shimmer, fade-in-up)
├── components.json       # config shadcn/ui
└── next.config.mjs
```

## Empezar en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Deploy en Vercel

Esta landing está lista para Vercel sin tocar nada.

### Opción A · CLI (un solo comando)

```bash
npx vercel --prod
```

(La primera vez te pedirá vincular el proyecto a tu cuenta).

### Opción B · GitHub + Vercel

1. `git init && git add . && git commit -m "init: reformas-sg landing"`
2. Sube el repo a GitHub.
3. En <https://vercel.com/new>, importa el repo. Vercel detecta Next.js
   automáticamente — sin variables de entorno necesarias.

## Personalización rápida

| Quiero cambiar... | Edita |
| --- | --- |
| Color de acento (Granada Gold) | `app/globals.css` (variable `--primary`) y `tailwind.config.ts` (`colors.gold`) |
| Servicios del Marquee | `components/sections/services-marquee.tsx` (array `services`) |
| Proyectos animados | `components/sections/projects-list.tsx` (array `items`) |
| Pasos del proceso | `components/sections/process-terminal.tsx` (array `lines`) |
| Datos de contacto | `components/sections/cta.tsx` y `components/sections/footer.tsx` |
| Metadata SEO | `app/layout.tsx` (`metadata`) |

## Notas de diseño

- **Navbar flotante con glassmorphism**: ver `.glass` en `globals.css`. Cambia
  de aspecto al hacer scroll (más opaco + sombra).
- **Scroll reveal**: cualquier sección puede envolverse en
  `<Reveal>...</Reveal>` para animar al entrar en viewport.
- **Gradient text**: clase utilitaria `.gradient-text` (blanco → gold → marrón).
- **Aurora**: sólo se usa en el Hero, animación de 60 s sin distracciones.
