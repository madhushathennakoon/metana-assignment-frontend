/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        btnColor: "#CF9FFF",
        btnHoverColor: "#DCB9FF",
      },
    },
  },
  plugins: [],
};
