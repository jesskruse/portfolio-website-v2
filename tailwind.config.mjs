/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: "selector",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
