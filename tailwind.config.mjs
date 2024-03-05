import colors from "tailwindcss/colors.js";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        headlines: ["Neue Regrade", "sans-serif"],
      },
      colors: {
        fg: "var(--fg)",
        bg: "var(--bg)",
        bgOverlay: "var(--bgOverlay)",
        alt: "var(--alt)",
        grayDark: "var(--grayDark)",
        grayMed: "var(--grayMed)",
        grayLight: "var(--grayLight)",
        grayUltraLight: "var(--grayUltraLight)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
