/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#20243A', // Define your custom color here
        'custom-gray': '#575B6D', // Define your custom color here
        'Body-color' : "#F4F9FF", // Define your body color here
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #0057FF, #357AFF)',
        'btn-gradient': 'radial-gradient(circle, rgba(28,133,255,1) 47%, rgba(0,56,255,1) 77%);',
        'banner-pattern': "url('assets/first_sec_backgrd.png')",
      },
    },
  },
  plugins: [],
}