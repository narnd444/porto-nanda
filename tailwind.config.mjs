/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontSize: {
        'xxs': '0.65rem',  // Menambahkan ukuran font ekstra kecil
        'multixl': '10rem',  // Menambahkan ukuran font ekstra besar
        'huge': '4rem',    // Menambahkan ukuran font sangat besar
      },

      fontFamily: {
        'Gotham' : ['Gotham', 'sans-serif'], 
        'Pinyon' : ['Pinyon'], 
      },
      colors: {
        
        'primary': '#E2AA5F', 
        'secondary': '#A95C25', 
        'accent': '#000000', 
        'custom-old-grey': '#647D70', 
        'custom-grey' : '#F3F4F6',
      },
      backgroundImage: {
        'hero': "url('/assets/background/hero-bg.png')",
        'contour-patern' : "url('/assets/background/contour-patern.png')",
      }
      
    },
  },
  plugins: [],
};