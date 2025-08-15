/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
