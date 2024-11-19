/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./inertia/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["cupcake", "business"],
    darkTheme: "business",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}
