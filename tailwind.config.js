/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tailwind': '#38BDF8',
        'react': '#61DBFB',
        'firebase': '#FCCA3F',
        'keep': '#F4B400',
        'background': '#F0F0F0',
        'card': '#FFFFFF',
        'addBtn':'#42B883'
      }
    },
  },
  plugins: [],
}
