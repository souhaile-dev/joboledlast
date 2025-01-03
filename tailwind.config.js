/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

   content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                black: "var(--black)",
                green: "var(--green)",
                "light-blue": "var(--light-blue)",
                "main-color": "var(--main-color)",
                orange: "var(--orange)",
                red: "var(--red)",
                white: "var(--white)",
                "white-grey": "var(--white-grey)",
                primary: 'var(--white-grey)',
        secondary: 'your-secondary-color',
            },
            fontFamily: {
                "body-text": "var(--body-text-font-family)",
                "buttons-and-calls-to-action": "var(--buttons-and-calls-to-action-font-family)",
                captions: "var(--captions-font-family)",
                "form-inputs-and-labels": "var(--form-inputs-and-labels-font-family)",
                headings: "var(--headings-font-family)",
                "navigation-and-menu-items": "var(--navigation-and-menu-items-font-family)",
                "styled-headlines": "var(--styled-headlines-font-family)",
                subheadings: "var(--subheadings-font-family)",
            },
        },
    },
 

  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              black: "var(--black)",
              green: "var(--green)",
              "light-blue": "var(--light-blue)",
              "main-color": "var(--main-color)",
              orange: "var(--orange)",
              red: "var(--red)",
              white: "var(--white)",
              "white-grey": "var(--white-grey)",
          },
          fontFamily: {
              "body-text": "var(--body-text-font-family)",
              "buttons-and-calls-to-action": "var(--buttons-and-calls-to-action-font-family)",
              captions: "var(--captions-font-family)",
              "form-inputs-and-labels": "var(--form-inputs-and-labels-font-family)",
              headings: "var(--headings-font-family)",
              "navigation-and-menu-items": "var(--navigation-and-menu-items-font-family)",
              "styled-headlines": "var(--styled-headlines-font-family)",
              subheadings: "var(--subheadings-font-family)",
          },
      },
  },


  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
      extend: {
          colors: {
              black: "var(--black)",
              green: "var(--green)",
              "light-blue": "var(--light-blue)",
              "main-color": "var(--main-color)",
              orange: "var(--orange)",
              red: "var(--red)",
              white: "var(--white)",
              "white-grey": "var(--white-grey)",
          },
          fontFamily: {
              "body-text": "var(--body-text-font-family)",
              "buttons-and-calls-to-action": "var(--buttons-and-calls-to-action-font-family)",
              captions: "var(--captions-font-family)",
              "form-inputs-and-labels": "var(--form-inputs-and-labels-font-family)",
              headings: "var(--headings-font-family)",
              "navigation-and-menu-items": "var(--navigation-and-menu-items-font-family)",
              "styled-headlines": "var(--styled-headlines-font-family)",
              subheadings: "var(--subheadings-font-family)",
          },
      },
  },



  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "601px",
      laptop: "1024px",
    },
    extend: {
      backgroundImage: {
        "footer-bg": "url('/src/assets/png/Rectangle25.png')",
        "voice-creation": "url('/src/assets/jpg/voice-creation.jpg')",
        "convert-resume": "url('/src/assets/img/Rectangle3.png')",
      },
      listStyleImage: {
        listcircle: 'url("./src/assets/svg/Ellipse12.svg")',
        listcircle2: 'url("./src/assets/png/Ellipse12.png")',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        "8": "repeat(8, minmax(0, 1fr))",
      },
      gridRow: {
        "span-8": "span 8 / span 8",
        "span-7": "span 7 / span 7",
      },
      textUnderlineOffset: {
        20: "20px",
      },
    },
    fontFamily: {
      goretzk: ["Space Grotesk", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      spacegrotesk: ["Space Grotesk", "sans-serif"],
      darkergrotesque: ["Darker Grotesque", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
});
