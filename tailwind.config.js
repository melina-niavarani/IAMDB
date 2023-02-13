/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
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
          h2: ['28px','50px'],
          h2sm: ['24px', '50px'],
          lg: ['21px', '25px'],
          md: ['18px', '21px'],
          sm: ['16px', '20px'],
          xs: ['14px', '16px']
        },
        
      },
    },
    plugins: [], 
  }