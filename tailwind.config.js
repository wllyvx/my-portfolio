/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#F4F2E6',
        'main': '#3C541B',
        'type': '#1A1D16'
      },
      fontFamily: {
        'dm': ['DM Serif Display', 'Sans Serif'],
        'poppins': ['Poppins', 'Sans Serif'],
      },
      borderRadius: {
        'handdrawn': '255px 15px 225px 15px/15px 225px 15px 255px',
        'handdrawn-inv': '15px 225px 15px 255px/255px 15px 225px 15px'
      },
      boxShadow: {
        'bold': '4px 3px 0px 4px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}
