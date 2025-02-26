

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards"
      },
      keyframes: {
        fadeIn: {
          "from": {
            opacity: "0",
            transform: "translateX(-100px)"
          },
          "to":{ opacity: "1", 
                transform: "translateX(0)" }
        },  
      },
      minHeight: {
        'content': 'calc(100vh - 4rem)', // Define a reusable class
      },
      
    },
  },
  plugins: [],
};
