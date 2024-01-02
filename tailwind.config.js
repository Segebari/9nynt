/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
          xxs: '0.65rem', // Adjust the value as needed
          xxxs: '0.5rem', // Adjust the value as needed
        },
        colors: {
          customStar: '#FBEC45',
        },
        height: {
          'fh': '28rem', // Define your custom value
        },
    },
  },
  plugins: [],
}