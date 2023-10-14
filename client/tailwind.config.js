/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: [`"Lobster Two"`, "sans-serif"],
        aclonica: ["Aclonica", "sans-serif"],
        exo: [`"Exo 2"`, "sans-serif"],
      },
      backgroundImage: {
        "nav-pattern": "url('./src/assets/nav-bg.jpg')",
        "hero-pattern": "url('./src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
