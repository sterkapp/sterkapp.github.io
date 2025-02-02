/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        blue: "#007AFF",
        "blue-200": "#B2D7FF",
        "blue-100": "#E5F1FF",
        "off-white": "#EBEBEB",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
