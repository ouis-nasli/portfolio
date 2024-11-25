/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3CCF91",
        grayText: "#8F9094",
      },
      fontSize: {
        display: "calc(5rem + ((1vw - 7.68px) * 5.555555555555555))",
        display2: "calc(1.5rem + ((1vw - 7.68px) * 1.0416666666666667))",
        display3: "calc(1rem + ((1vw - 7.68px) * 0.6944444444444444))",
      },
    },
  },
  plugins: [],
};
