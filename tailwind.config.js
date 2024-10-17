/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': "#243c5a"
      },
      
    },
    screens: {
      'laptop': '1400px'
    }
  },
  plugins: [],
}