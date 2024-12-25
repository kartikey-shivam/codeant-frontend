/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        32: "32px",
      },
      colors: {
        success: "#16B364",
        dark: {
          bg: "#111827",
          card: "#1F2937",
          border: "#374151",
          text: {
            primary: "#F9FAFB",
            secondary: "#D1D5DB",
          },
        },
      },
      boxShadow: {
        card: "0 4px 40px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
