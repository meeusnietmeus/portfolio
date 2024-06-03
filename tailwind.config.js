/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'], 
  theme: {
    extend: {
      colors: {
        'primary': '#421515',
        'primary-muted': '#97897B',
        'background': '#F0E6DC',
        'accent': '#C83C3B'
      }
    },
  },
  plugins: [],
}

