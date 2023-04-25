/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "ui-system"],
      fredoka: ["Fredoka", "ui-sans-serif"],
      rubik: ["Rubik", "ui-sans-serif"],
    },
    extend: {
      fontSize: {
        28: ["28px", "34px"],
      },
      colors: {
        primary: "#070148",
      },
    },
  },
  plugins: [],
};
