/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        32: "32px",
      },
      colors: {
        success: "#16B364",
      },
      boxShadow: {
        card: "0 4px 40px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
