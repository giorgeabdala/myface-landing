/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      colors: {
        'rose-gold' : '#C58587', // #CDA0A3 ou #C58587
        'rose-gold-bold': "#C8868A",
        'container-gray': '#2C2C2C',
        'text-normal': '#B3B3B3', //text-zinc-300 ou B3B3B3
        'icons-rose': '#FBBDA2',
      },

      height: {
        'container': '600px',
        'container-g': '900px',
      }
      ,
      fontFamily: {
        'menu': ['Dancing Script', 'cursive'],
        'title': ['Lato', 'sans-serif'],

      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require("daisyui")],
}
