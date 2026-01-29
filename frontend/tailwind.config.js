/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kairos: "#04bf7b",
        prometeo: "#ecccfe",
        hefesteo: "#9d05f2",
        pegasus: "#ff964f",
        fenix: "#f7fd8f",
        unicornio: "#fd8f8f",
      },
    },
  },
  plugins: [],
};
