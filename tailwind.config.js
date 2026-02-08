/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/react-app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        background: "var(--page-bg)",
        card: "var(--card-bg)",
        accent: "var(--accent)",
        "accent-dim": "var(--accent-dim)",
      },
    },
  },
  plugins: [],
};
