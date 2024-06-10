/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-card" :"#367BFF",
        "background-card-green" :"#01CF9A",
        "custom-black": "#20243A", // Define your custom color here
        "custom-gray": "#575B6D", // Define your custom color here
        "Body-color": "#F4F9FF", // Define your body color here
        "heading-blue": "#0057FF", // Define your body color here
        "green-bg": "#01C895", // Define your body color here
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #0057FF, #357AFF)",
        "blue-gradient-sec": "linear-gradient(to right, #021E49, #0A0A0A)",
        "btn-gradient":
          "radial-gradient(circle, rgba(28,133,255,1) 47%, rgba(0,56,255,1) 77%);",
        "banner-pattern": "url('assets/first_sec_backgrd.png')",
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
