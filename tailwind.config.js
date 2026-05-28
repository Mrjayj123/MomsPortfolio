/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 35px 120px rgba(11, 18, 32, 0.52)',
      },
    },
  },
  plugins: [],
}
