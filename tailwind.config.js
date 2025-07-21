/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 30px #00f7ff',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.9)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        twinkle: 'twinkle 2s infinite ease-in-out',
      },
      backgroundImage: {
        'space': "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
      }
    },
  },
  plugins: [],
};
