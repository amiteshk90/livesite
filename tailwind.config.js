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
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(to right, #0057FF, #357AFF)',
      },
    },
  },
  plugins: [],
}