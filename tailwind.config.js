/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#172033",
        accent: "#1f5f68",
        "accent-hover": "#174a52",
        "accent-strong": "#8f2f2f",
        muted: "#5f6b7a",
        "muted-light": "#8792a0",
        border: "#d9e0e6",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        body: ["18px", { lineHeight: "1.7" }],
        "body-mobile": ["16px", { lineHeight: "1.7" }],
        headline: ["40px", { lineHeight: "1.2", fontWeight: "700" }],
        "headline-mobile": ["28px", { lineHeight: "1.2", fontWeight: "700" }],
        subheadline: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
      },
      maxWidth: {
        letter: "680px",
      },
      spacing: {
        section: "60px",
        "section-mobile": "40px",
      },
    },
  },
  plugins: [],
};
