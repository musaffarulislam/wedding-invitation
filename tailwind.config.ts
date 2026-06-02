import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        white: "var(--white)",
        black: "var(--black)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gold: "#D4AF37",
        "gold-light": "#F4E4BA",
        "cream": "#FFF8E7",
        "deep-burgundy": "#722F37",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        serif: ["var(--font-playfair)"],
        arabic: ["var(--font-amiri)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;