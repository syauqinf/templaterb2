/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warna Akurat dari Logo Kira Kira Michi
        primary: "#ED2024", 
        "primary-hover": "#C81A1E", 
        kkm: {
          red: "#ED2024",
          yellow: "#FFCC00",
          dark: "#2B2728",
          maroon: "#5C1A1B",
          light: "#FDF2F2"
        },
        "text-main": "#2B2728", 
        "text-muted": "#6B6667"
      }, 
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
        body: ["Epilogue", "sans-serif"]
      }, 
      boxShadow: {
        soft: "0 10px 40px -10px rgba(237, 32, 36, 0.15)", 
        card: "0 4px 20px -5px rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [],
}