// tailwind.config.js
module.exports = {
   content: ["./**/*.tsx"],
   theme: {
      backdropFilter: {
         none: "none",
         blur: "blur(20px)",
      },
      colors: {
         brand: "#22C55E",
         dark: "#0F172A",
         mid: "#ABB8C9",
         light: "#FAFAFA",
      },
      fontFamily: {
         sans: "Open Sans, sans-serif",
      },
   },
   plugins: [],
};
