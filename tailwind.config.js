/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lufga', 'sans-serif'],
        // light: ['Lufga Thin', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

