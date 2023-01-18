/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },
    extend: {
      colors:{
        darkPurple:"#7000F6"
      },

      padding:{
        "96":"10rem"
      },

      width:{
        "128":"50vw"
      },

      height:{
        "128":"60vh"
      },
    },
  },
  plugins: [],
}
