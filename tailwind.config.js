/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}", // important so Tailwind scans React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
