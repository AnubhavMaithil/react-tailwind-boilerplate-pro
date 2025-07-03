/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color1": "#0F2520",
        "bg-color": "#3FB649",
        "text-white": "#FFF",
        "text-black": "#000",
        "dark_green": "#4FE117",
        "gray": "#FFFFFF80"
      },
      keyframes: {
        'up-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' }, // You can tweak this
        },
      },
      animation: {
        'bounce-up-down': 'up-down 3.3s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}