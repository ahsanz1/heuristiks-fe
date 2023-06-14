/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-lSpartan)"],
      },
      fontSize: {
        "4.5xl": "40px",
      },
      height: {
        17: "72px",
        "1px": "1px",
      },
      backgroundColor: {
        layout: "#e9ecef",
      },
      lineHeight: {
        "48px": "48px",
      },
    },
  },
  plugins: [],
};
