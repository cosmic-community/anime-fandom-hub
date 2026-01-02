/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B9D',
          dark: '#FF4081',
          light: '#FFB3D4',
        },
        secondary: {
          DEFAULT: '#4A90E2',
          dark: '#2E5C8A',
          light: '#87CEEB',
        },
        accent: {
          DEFAULT: '#FFD700',
          dark: '#FFA500',
        },
        dark: {
          DEFAULT: '#1A1A2E',
          lighter: '#16213E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}