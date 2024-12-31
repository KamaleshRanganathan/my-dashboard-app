/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: '#007bff', // Your desired color
      //   secondary: '#ffc107', // Another color option
      // },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: ["light", "valentine", "aqua", "cyberpunk", "retro", "lemonade"],
  },
};
