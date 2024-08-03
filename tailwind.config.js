/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/banner.png')",
      },
      colors: {
        black: "#393939",
        blue: "#2962FF",
        green: "#4CAF50",
        gray: "#616161",
        bgGray: "#F5F5F5",
        borderColor: "#DCDCDC",
        bannerGray:"#F4F3F0"
      },
    },
  },
  plugins: [],
};
