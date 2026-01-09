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
        primary: "#39E079", 
        "primary-hover": "#2db863", 
        "background-light": "#f6f8f7", 
        "background-dark": "#122017", 
        sage: "#B8D3BB", 
        "text-main": "#171612", 
        "text-muted": "#857c66"
      }, 
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
        body: ["Epilogue", "sans-serif"]
      }, 
      borderRadius: {
        DEFAULT: "0.25rem", 
        lg: "0.5rem", 
        xl: "0.75rem", 
        full: "9999px"
      }, 
      boxShadow: {
        soft: "0 10px 40px -10px rgba(57, 224, 121, 0.15)", 
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)"
      }
    },
  },
  plugins: [],
}