/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'toggle-gradient': 'linear-gradient(90deg, rgba(55,143,230,1) 0%, rgba(62,218,130,1) 100%);',
        'instagram-gradient': 'linear-gradient(87deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 100%);'
      },
      colors: {
        'dark-blue': '#1e202a', // bg
        'dark-blue-head': '#1f212e', // top bg pattern
        'pale-blue': '	#f5f7ff', // top bg pattern
        'light-card': '	#f0f2fa',
        'dark-card': '#252a41',
        'lime-green': 'hsl(163, 72%, 41%)',
        'bright-red': '#dc414c',
        'desaturated-blue': 'hsl(228, 34%, 66%)',
        'grayish-blue': 'hsl(228, 12%, 44%)',
        'very-dark-blue': 'hsl(230, 17%, 14%)',
        'toggle': 'hsl(230, 22%, 74%)'
      },
      screens:{
        '2xl': '1469px'
      }
    },
  },
  plugins: [],
}

