export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideInFade: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        slideInFade: 'slideInFade 1s ease-in-out forwards',
        slideInFromRight: 'slideInFromRight 1s ease-in-out forwards',
      },
      colors: {
        blue3: 'var(--b3-color)',
        lighte3: 'var(--le3-color)',
        dark17: 'var(--d17-color)',
        dark24: 'var(--d24-color)',
        yellow3: 'var(--y3-color)',
        darkop20: 'var(--darkop20-color)',
        darkop40: 'var(--darkop40-color)',
        darkop60: 'var(--darkop60-color)',
        darkop80: 'var(--darkop80-color)',
        lightop20: 'var(--lightop20-color)',
        lightop40: 'var(--lightop40-color)',
        lightop60: 'var(--lightop60-color)',
        lightop80: 'var(--lightop80-color)',

      },
    },
  },
  plugins: [],
}