const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class",

  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  purge: {
    enabled: true,
    content: ["./src/**/*.tsx"],
    options: {
      safelist: ["dark"],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        alt: ["Open Sans", "sans-serif"],
        base: ["Cormorant Upright", "serif"],
      },
      typography: (theme) => ({
        dark: {
          style: {
            color: "white",
          },
        },
      }),
       fontSize: {
            sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
            base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
            lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
            xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
            "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
            "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
            "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
            "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
            "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
         },
    },

    colors: {
      ...colors,
      custom: {
        bg: "#1f1f38",
        bg_variant: "#2c2c6c",
        primary: "#4db5ff",
        primary_variant: "rgba(77,181,255,0.4)",
        white: "#ffff",
        light: "rgba(255,255,255,0.6)",
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
