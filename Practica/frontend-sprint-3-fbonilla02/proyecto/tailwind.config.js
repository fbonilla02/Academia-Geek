/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {colors: {
      'blue-back':'#1f233e',
      'blue-button':'#2be7e8',
      'back-color':'#2e3562'
    }},
  },
  plugins: [
    require('flowbite/plugin')
      ],
}
