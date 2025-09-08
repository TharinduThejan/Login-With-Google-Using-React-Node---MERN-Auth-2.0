
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ea2e0e",
        secondary: "#f3f4f6",
        accent: "#1f2937",
        light: "#ffffff",
        dark: "#111827",
      },
    },
  },
  plugins: [
  ],
}