/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cherry: {
          50: '#fff0f3',
          100: '#ffe0e7',
          200: '#ffc0cf',
          300: '#ff91a8',
          400: '#ff5577',
          500: '#ff1744',
          600: '#dc143c',
          700: '#b01030',
          800: '#8b0d27',
          900: '#6b0a1e',
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #dc143c, 0 0 40px #dc143c' },
          '50%': { boxShadow: '0 0 40px #dc143c, 0 0 80px #dc143c, 0 0 120px #dc143c' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
