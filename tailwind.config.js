// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greyish': '#f0f0f0',
        'brownish': '#c7a86f',
      }
    },
  },
  plugins: [],
}