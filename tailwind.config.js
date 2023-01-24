/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        sm: '360px',
        md: '550px',
      },
      extend: {
        colors: {
          'light-gray': '#EEEBDD',
          'background-color': '#1B1717',
          'accent-color': '#CE1212',
          'accent-hover': '#8E0D0D'
        },
        fontSize: {
          xxl:['96px', '113px'],
          xl: ['48px', {
            lineHeight: '56px',
          }],
          lg: ['21px', '25px'],
          sm: ['16px', '20px']
        },
        
      },
    },
    plugins: [], 
  }