/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        desktop: "1024px",
      },
      colors: {
        primary: {
          50: "hsl(25, 47%, 95%)",
          100: "hsl(25, 47%, 90%)",
          200: "hsl(25, 47%, 80%)",
          300: "hsl(25, 47%, 70%)",
          400: "hsl(25, 47%, 60%)",
          500: "hsl(25, 47%, 43%)",
          600: "hsl(25, 47%, 35%)",
          700: "hsl(25, 47%, 30%)",
          800: "hsl(25, 47%, 20%)",
          900: "hsl(25, 47%, 10%)",
        },
      },
    },
  },
  plugins: [],
};
