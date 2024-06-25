/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-card" :"#367BFF",
        "navbtn" :"#0057FF",
        "background-card-green" :"#01CF9A",
        "custom-black": "#20243A", // Define your custom color here
        "custom-gray": "#575B6D", // Define your custom color here
        "Body-color": "#F4F9FF", // Define your body color here
        "heading-blue": "#0057FF", // Define your body color here
        "green-bg": "#01C895", // Define your body color here
        "meet-Our": "#6F7387",
        "border-color": "#AAADBF",
        "hover-card": "#84B2FE",
        "footer": "#02193B",
        "Footer-head-color" : "#D6D9E6",
        "Footer-copy-footer" : "#02193B"
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #0057FF, #357AFF)",
        "blue-new-gradient": "linear-gradient(180deg, rgba(2,30,73,1) 0%, rgba(0,0,0,1) 53%, rgba(10,10,10,1) 100%)",
        "blue-gradient-sec": "linear-gradient(to right, #021E49, #0A0A0A)",
        "blue-connect-bg": "linear-gradient(to top, #E6F6FF, #FFFFFF)",
        "btn-gradient":
          "radial-gradient(circle, rgba(28,133,255,1) 47%, rgba(0,56,255,1) 77%);",
        "banner-pattern": "url('assets/first_sec_backgrd.png')",
        "banner-pattern-mobile": "url('assets/mobile_first_bck.png')",
        "scroll-bg": "url('assets/card_bck.jpg')",
      },
      transitionProperty: {
        all: "all",
      },
      scale: {
        0: "0",
        100: "1",
      },
      opacity: {
        0: "0",
        100: "1",
      },
    },
  },
  plugins: [],
};
