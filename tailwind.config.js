/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        colors: {
          primary: "rgb(var(--color-primary) / <alpha-value>)",
          text: "rgb(var(--color-text) / <alpha-value>)",
          success: "rgb(var(--color-success) / <alpha-value>)",
          info: "rgb(var(--color-info) / <alpha-value>)",
          warn: "rgb(var(--color-warn) / <alpha-value>)",
          error: "rgb(var(--color-error) / <alpha-value>)",
          transparent: "transparent",
          current: "currentColor",
        },
      },
    },
  },
  plugins: [],
};
