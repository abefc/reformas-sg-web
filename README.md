# Reformas SG · Landing premium (light mode)

Landing page para **Reformas SG** (Granada), construida con Next.js 14 (App
Router), Tailwind CSS y Framer Motion. Estética cálida y luminosa pensada
para una empresa de reformas e interiorismo: blancos rotos, paleta
arena / salvia / terracota, tipografía Playfair Display + Inter,
animaciones con sentido (brocha, antes/después, plano→realidad, masonry).

## Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: Tailwind CSS · variables CSS · light mode por defecto
- **Animación**: Framer Motion
- **Componentes propios** (en `components/magicui/`):
  - `Marquee` infinito con pause-on-hover (servicios)
  - `BrushReveal` (reveal tipo brocha para titulares)
  - `NumberTicker` (estadísticas)
  - `Reveal` (scroll-reveal genérico)
- **Iconos**: lucide-react
- **Tipografía**: Playfair Display (display, italic) + Inter (body)

## Secciones

1. **Hero** — fondo "wall wash" con textura de papel, titular en dos líneas
   con efecto brocha (clip-path + blur leading edge).
2. **StatsBar** — 15+ años, 4.9/5 Google, garantía 2 años (NumberTicker).
3. **ServicesMarquee** — dos filas infinitas con pause-on-hover.
4. **BeforeAfter** — slider arrastrable con la barra al centro y
   placeholders SVG (sustituibles por fotos reales).
5. **ProjectsMasonry** — galería asimétrica tipo "muro de azulejos" con
   slide-up al entrar en viewport. CSS columns, sin librerías extra.
6. **ProcessBlueprint** — al hacer scroll, un plano arquitectónico
   se difumina y aparece la foto de un salón terminado (`useScroll` +
   `useTransform` + `useMotionTemplate` para `blur()`).
7. **CTA** — bloque cálido con dirección, teléfono y email.
8. **Footer**.

## Empezar en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>.

## Deploy en Vercel

### CLI (un solo comando)

```bash
npx vercel --prod
```

### Git + Vercel

```bash
git init
git add .
git commit -m "Rediseño luminoso y animaciones de reformas"
git remote add origin git@github.com:tu-usuario/reformas-sg.git
git push -u origin main
```

Luego en <https://vercel.com/new> importas el repo (Vercel detecta Next.js
automáticamente, sin variables de entorno).

## Personalización rápida

| Quiero cambiar... | Edita |
| --- | --- |
| Paleta | `tailwind.config.ts` (`sand`, `sage`, `terracotta`, `cream`) y `app/globals.css` (variables CSS) |
| Servicios del marquee | `components/sections/services-marquee.tsx` (`services`) |
| Proyectos del masonry | `components/sections/projects-masonry.tsx` (`projects` y componente `Plate`) |
| Antes / después | `components/sections/before-after.tsx` (`BeforePlate`, `AfterPlate`) |
| Plano → realidad | `components/sections/process-blueprint.tsx` (`Blueprint`, `FinishedRoom`) |
| Pasos del proceso | `components/sections/process-blueprint.tsx` (`steps`) |
| Datos de contacto | `components/sections/cta.tsx` y `components/sections/footer.tsx` |
| Metadata SEO | `app/layout.tsx` (`metadata`) |

## Sustituir los placeholders SVG por fotos reales

Tres secciones traen ilustraciones SVG editoriales como placeholder. Cuando
tengas las fotos:

1. Coloca las imágenes en `public/projects/`.
2. En cada uno de estos archivos, sustituye los componentes `Plate`,
   `BeforePlate`, `AfterPlate`, `Blueprint`, `FinishedRoom` por
   `<Image src="/projects/xxx.jpg" .../>` (Next/Image).
3. `next.config.mjs` ya permite imágenes externas de `images.unsplash.com`
   por si quieres tirar de Unsplash.
