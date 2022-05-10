module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spinSlow: "spin 5s ease-in-out infinite",
        spinXXSlow: "spin 120s linear infinite",
        pingSlow: "status_ping 3s cubic-bezier(0.2, 0.2, 0.9, 1) infinite",
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        status_ping: {
          '0%': { opacity: '0.2'},
          '50%': { opacity: '0.9'},
          '75%, 100%': { transform: 'scale(2.5)', opacity: '0.2'},
        }
      }
    },
  },
  plugins: [],
}
