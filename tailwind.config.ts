import type { Config } from "tailwindcss";

const config: Config = {
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
          text: {
            primary: "#F9FAFB",
            secondary: "#D1D5DB",
          },
        },
        light: {
          bg: "#F9FAFB",
          card: "#FFFFFF",
          text: {
            primary: "#111827",
            secondary: "#6B7280",
          },
        },
      },
      boxShadow: {
        card: "0 4px 40px rgba(0,0,0,0.06)",
        "card-dark": "0 4px 40px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
