/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      perspective: {
        1000: "1000px",
      },
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backfaceVisibility: {
        hidden: "hidden",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shine: "shine linear infinite",
      },
    },
    plugins: [
      function ({ addUtilities }) {
        const newUtilities = {
          ".perspective-1000": {
            perspective: "1000px",
          },
          ".transform-style-preserve-3d": {
            "transform-style": "preserve-3d",
          },
          ".backface-hidden": {
            "backface-visibility": "hidden",
          },
          ".rotate-y-180": {
            transform: "rotateY(180deg)",
          },
        };
        addUtilities(newUtilities);
      },
    ],
  },
};
