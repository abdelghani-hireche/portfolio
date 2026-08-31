/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Claude AI inspired palette
        cream: {
          50: "#faf9f5",
          100: "#f5f4ee",
          200: "#eeece3",
          300: "#e3e0d3",
        },
        clay: {
          // Claude signature terracotta / rust accent
          50: "#fbf1ec",
          100: "#f6e0d6",
          200: "#efc9b6",
          400: "#e6a988",
          500: "#d97757",
          600: "#c15f3c",
          700: "#a34a2c",
        },
        ink: {
          500: "#6b6a63",
          700: "#3d3d3a",
          900: "#1f1e1d",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(31,30,29,0.04), 0 8px 24px rgba(31,30,29,0.06)",
        lift: "0 4px 12px rgba(31,30,29,0.08), 0 16px 40px rgba(31,30,29,0.10)",
      },
      borderRadius: {
        xl2: "1.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "spin-slow": "spin-slow 18s linear infinite",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};
