/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: [`"Lobster Two"`, "sans-serif"],
        aclonica: ["Aclonica", "sans-serif"],
        exo: [`"Exo 2"`, "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "nav-pattern": "url('./src/assets/nav-bg.jpg')",
        "hero-pattern": "url('./src/assets/hero-bg.jpg')",
      },
      backgroundSize: {
        "400%": "400%",
      },
      keyframes: {
        "bg-animation": {
          "0%": { backgroundPosition: "left" },
          "50%": { backgroundPosition: "right" },
          "100%": { backgroundPosition: "left" },
        },
      },
      animation: {
        "bg-animation": "bg-animation 5s  infinite alternate",
      },
    },
  },
  plugins: [],
};
