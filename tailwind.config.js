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
        "nav-pattern": "url('./src/assets/images/nav-bg.jpg')",
      },
      backgroundSize: {
        "400%": "400%",
        "300%": "300%",
        "200%": "200%",
        "150%": "150%",
      },
      keyframes: {
        "bg-animation": {
          "0%": { backgroundPosition: "left" },
          "50%": { backgroundPosition: "right" },
          "100%": { backgroundPosition: "left" },
        },
        bgColor: {
          "0%": { background: "white", transform: "scale(1)" },
          "100%": { background: "black", transform: "scale(0.6)" },
        },
      },
      animation: {
        bgAnimation: "bg-animation 5s  infinite alternate",
        bgColor: "bgColor 0.3s linear forwards",
      },
    },
  },
  plugins: [],
};
