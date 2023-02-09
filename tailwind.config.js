/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#E9C46A",
        main: "#264653",
        type: "#1A1D16",
      },
      backgroundImage: {
        'header-pattern': `url(/img/blob/blob-1.png), url(/img/blob/blob-2.png)`,
      },
      backgroundPosition: {
        'header-position': `left top, right top`
      }
    },
  },
  plugins: [],
}
