/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Le dice a Tailwind que escanee todos tus archivos de React
  ],
  theme: {
    extend: {
      fontFamily: {
        // Añadimos 'Inter' como la fuente por defecto
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        // Animación simple de fadeIn para las páginas
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}