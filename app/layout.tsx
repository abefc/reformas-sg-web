import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reformas-sg.vercel.app"),
  title: {
    default: "Reformas SG · Reformas de lujo en Granada",
    template: "%s · Reformas SG"
  },
  description:
    "Reformas integrales, interiorismo y obra premium en Granada. Más de 15 años transformando hogares y locales con ejecución de precisión. Gran Vía, Granada.",
  keywords: [
    "reformas Granada",
    "reformas integrales",
    "interiorismo Granada",
    "reformas de lujo",
    "cocinas de diseño",
    "baños modernos",
    "Reformas SG"
  ],
  authors: [{ name: "Reformas SG" }],
  openGraph: {
    title: "Reformas SG · La reforma de tus sueños. Ejecución de precisión.",
    description:
      "Empresa de reformas premium en Granada. Calidad, diseño y plazos cumplidos.",
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformas SG · Reformas premium en Granada"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background font-sans text-charcoal-700 antialiased">
        {children}
      </body>
    </html>
  );
}
