import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        cream: {
          DEFAULT: "#FAF7F2",
          50: "#FFFDFA",
          100: "#FAF7F2",
          200: "#F4EFE6",
          300: "#EDE5D6"
        },
        sand: {
          DEFAULT: "#E6D5C3",
          50: "#FBF6F0",
          100: "#F4E9DC",
          200: "#E6D5C3",
          300: "#D4BB9F",
          400: "#BFA079",
          500: "#A78258",
          600: "#856543"
        },
        sage: {
          DEFAULT: "#A8B5A1",
          50: "#F0F2EE",
          100: "#DDE3D9",
          200: "#C0CAB9",
          300: "#A8B5A1",
          400: "#8B9C82",
          500: "#6F8167",
          600: "#566650"
        },
        terracotta: {
          DEFAULT: "#C97B5F",
          50: "#F8E9E1",
          100: "#F0D2C3",
          200: "#E2A98F",
          300: "#C97B5F",
          400: "#A95C42",
          500: "#864633"
        },
        charcoal: {
          DEFAULT: "#374151",
          800: "#1F2937",
          700: "#374151",
          600: "#4B5563",
          500: "#6B7280"
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)"
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" }
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" }
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" }
        },
        brush: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" }
        }
      },
      animation: {
        marquee: "marquee var(--duration, 40s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 40s) linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        brush: "brush 1.4s cubic-bezier(0.7, 0, 0.3, 1) forwards"
      },
      backgroundImage: {
        "warm-fade":
          "linear-gradient(135deg, #FAF7F2 0%, #F4EFE6 50%, #EDE5D6 100%)",
        "sage-fade":
          "linear-gradient(135deg, #F0F2EE 0%, #DDE3D9 100%)"
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
};

export default config;
