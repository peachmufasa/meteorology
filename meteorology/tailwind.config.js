/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'roboto': '"Roboto", Arial, sans-serif',
    },
    colors: {
      'main-dark': '#141414',
      'secondary-dark': '#1C1C1C',
      'white': '#FFFFFF',
      'perfect-blue': '#1A96BE',
      'gray': '#A3A3A3',
    },
    extend: {},
  },
  plugins: [],
};
