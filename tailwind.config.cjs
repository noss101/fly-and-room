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
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-left': 'slide-left 1s ease-in-out',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}