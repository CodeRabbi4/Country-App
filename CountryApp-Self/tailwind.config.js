/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens:{
      xs:"440px",
      sm:"576px",
      md:'768px',
      lg:"992px",
      xl:"1200px",
      "2xl":"1400px"

    },
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      }
    },



    extend: {},
  },
  plugins: [],
}

