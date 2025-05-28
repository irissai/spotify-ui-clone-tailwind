/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spotify: ['SpotifyMixUITitle', 'sans-serif'],
      },
      css: {
        overflowWrap: 'anywhere',
      },
       screens: {
      xs: '480px',
       }
    },
  },
  plugins: [],
};
