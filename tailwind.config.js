/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Purple700: "hsl(257, 40%, 49%)",
        Magenta400: "hsl(300, 69%, 71%)",
      },
    },
  },
  plugins: [],
};
