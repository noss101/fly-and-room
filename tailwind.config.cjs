module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c58bb', // Keeping your blue
        secondary: '#ff5733', // Keeping your orange
        navbg: '#1F2937', // Adding new navbar color
      }
    },
  },
  plugins: [],
}