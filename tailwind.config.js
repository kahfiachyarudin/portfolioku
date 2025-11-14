/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#7B2CBF',
        secondary: '#FFB347',  
        accent: '#F76D71',     
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #7B2CBF 0%, #F76D71 50%, #FFB347 100%)',
        'brand-gradientaaa': 'linear-gradient(180deg, #7B2CBF 0%, #F76D71 50%, #FFB347 100%)',
      },
       fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
         inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
