import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        "primary-text": "#0d1b2a",
        "primary-bg": "#e0e1dd",
        "primary-text-dark": "#e0e1dd",
        "primary-bg-dark": "#0d1b2a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
