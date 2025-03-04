/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all component files
  theme: {
    extend: {
      colors: {
        gray: {
          900: "#1f2937",
          700: "#374151",
          500: "#6b7280",
        },
        red: {
          900: "#7f1d1d",
          700: "#b91c1c",
          500: "#ef4444",
        },
        blue: {
          900: "#1e3a8a",
          700: "#2563eb",
          500: "#3b82f6",
        },
        green: {
          900: "#064e3b",
          700: "#047857",
          500: "#10b981",
        },
        purple: {
          900: "#4c1d95",
          700: "#7c3aed",
          500: "#a78bfa",
        },
        orange: {
          900: "#7c2d12",
          700: "#ea580c",
          500: "#f97316",
        },
      },
      backgroundImage: {
        "gradient-gray": "linear-gradient(to right, #1f2937, #374151, #6b7280)",
        "gradient-red": "linear-gradient(to right, #7f1d1d, #b91c1c, #ef4444)",
        "gradient-blue": "linear-gradient(to right, #1e3a8a, #2563eb, #3b82f6)",
        "gradient-green": "linear-gradient(to right, #064e3b, #047857, #10b981)",
        "gradient-purple": "linear-gradient(to right, #4c1d95, #7c3aed, #a78bfa)",
        "gradient-orange": "linear-gradient(to right, #7c2d12, #ea580c, #f97316)",
      },
    },
  },
  plugins: [],
};
