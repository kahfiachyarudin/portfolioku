/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b86adf',
        secondary: '#ffb347',
        accent: '#f76d71',
      },
    },
  },
  plugins: [],
}