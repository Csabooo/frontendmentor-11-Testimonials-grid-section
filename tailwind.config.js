/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* ### Primary*/
        "moderate-violet": "hsl(263, 55%, 52%)",
        "very-dark-grayish-blue": "hsl(217, 19%, 35% )",
        "very-dark-blackish-blue": "hsl(219, 29% , 14% )",
        "white": "hsl(0, 0%, 100%)",

        /* ### Neutral*/
        "light-gray": "hsl(0, 0%, 81%)",
        "light-grayish-blue": "hsl(210, 46%, 95%)"

        /*  Note for text colors: */

        /* 1. "Verified Graduate" has the same color as the person's name with 50% opacity
        2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity */
      },
      fontWeight:{
        400: "400",
        500: "500",
        600: "600"
      },
      lineHeight: {
        '2': '0.5rem',
      }
    },
    fontFamily: {
      sans: "Barlow Semi Condensed, sans-serif;"
    },
   /*  fontSize: {
      base: "0.8rem"
    }, */
    plugins: [],
  }
}