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
        "eye-background": "url('./src/assets/eye-bg.jpg')",
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
        eyeClick: {
          "0%": { height: "18rem" },
          "10%": { height: "16rem" },
          "20%": { height: "8rem" },
          "30%": { height: "4rem" },
          "40%": { height: "2rem" },
          "50%": { height: "0" },
          "60%": { height: "2rem" },
          "70%": { height: "4rem" },
          "80%": { height: "8rem" },
          "90%": { height: "16rem" },
          "100%": { height: "18rem" },
        },
      },
      animation: {
        bgAnimation: "bg-animation 5s  infinite alternate",
        bgColor: "bgColor 0.3s linear forwards",
        eyeClick: "eyeClick 1s linear",
      },
    },
  },
  plugins: [],
};
