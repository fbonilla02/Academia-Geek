/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { colors: {
      'amarillito':'#f8f3e9',
      'footerColor':'#3d3d3f',
      'blanco': 'color: rgb(255 255 255)',
    }, },
   
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

