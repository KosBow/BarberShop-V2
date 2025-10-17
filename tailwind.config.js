/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
        extend: {
            animation: {
                'rotate-once': 'rotateOnce 0.6s ease-in-out',
            },
            keyframes: {
                rotateOnce: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },

            },
        },
  },
  plugins: [],
}