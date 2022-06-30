const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["DMSans", "sans-serif"],
        secondary: ["Quicksand", "sans-serif"]
      },
      colors: {
        blue: {
          light: "#54A0FF",
          darker: "#0065E2",
          darkest: "#205FD8"
        },
        purple: "#7F75F0",
        cobalt: "#141829",
        yellow: "#FECB39"
      },
      textColor: {
        fill: {
          base: "#2A2F3F",
          muted: "#454956"
        }
      },
      fill: {
        muted: "#70747D"
      },
      backgroundColor: {
        fill: {
          base: "#FCFCFC",
          accent: "#FFFFFF"
        }
      }
    }
  },
  plugins: [
    plugin(({ addVariant, addUtilities, addComponents }) => {
      // addVariant("dark-m", ".theme-dark &");
      addVariant("not-last", "&:not(:last-child)");
    })
  ],
  corePlugins: {
    preflight: false
  }
};
