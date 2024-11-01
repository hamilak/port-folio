/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        "head-font":["Kode Mono", "monospace"],
        "logo-font": ["Style Script", "cursive"]
      }
    },
  },
  plugins: [],
}

