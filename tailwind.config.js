/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      "sm":"480px",
      md:"768px",
      lg:"976px",
      xl:"1440px"
    },

    fontSize:{
      base:"12px",
      xl:"1.5rem"
    },

    extend: {
      colors:{
        darkPurple:"#7000F6",
        deepPurple:"#6001D2",
        whiteGrey:"#E5E5E5",
        grey:"#777F8C",
        red:"#FF3E3E",
        green:"#02C963",
        yellow:"#FF9E00",
        lightBlue:"#15B2E1",
        lightGreen:"#02C963",
        lightYellow:"#FFB947",
        whiteYellow:"#FFD899",
        imitate:"#F1F5FB",
        bColor:"#F4F4F5",
        boxColor:"#F3F1FA",
        deepGreen:"#0E939B",  
        borderColor:"#D2D4D9",  
      },

      padding:{
        "96":"10rem",
        "80":"16rem",
      },

      spacing:{
        "52":"14rem",
        "8/12":"60vw",
       "11/12": "80vw",
        "90":"90vw",
        "w-fit": "100vw"
      },

      width:{
        "52":"14rem",
        "55":"17.6rem",
        "40":"40vw",
        "72":"18.5rem",
        "75":"30vw",
        "128":"50vw",
        "8/12":"60vw",
        "11/12": "80vw",
        "90":"90vw",
        "w-fit": "100vw"
      },

      margin:{
        "52":"14rem",
         "8/12":"60vw",
        "11/12": "80vw",
        // "w-fit": "100vw"
      },

      height:{
        "52":"50vh",
        "128":"60vh",
        "11/12":"80vh",
        "90":"90vh",
       " h-fit": "100vh"
      },
    },
  },
  plugins: [],
}
