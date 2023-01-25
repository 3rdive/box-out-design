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
        darkPurple:"#7000F6",
        whiteGrey:"#E5E5E5",
        grey:"#777F8C",
        green:"#02C963",
      },

      padding:{
        "96":"10rem",
        "80":"16rem",
      },

      width:{
        "52":"14rem",
        "128":"50vw",
        "8/12":"60vw",
        "11/12": "80vw",
        "w-fit": "100vw"
      },

      height:{
        "128":"60vh",
        "11/12":"80vh",
       " h-fit": "100vh"
      },
    },
  },
  plugins: [],
}
