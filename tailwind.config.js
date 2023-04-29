/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#F7A278",
        second: "#F4EEE8",
        third: "#ECF4F3",
        fourth: "#DAE1E7",
        fifth: "#D1EECC",
        sixth: "#9CC3D5",
        seventh: "#76DBD1",
        eighth: "#57A99A",
        ninth: "#142850",
        tenth: "#00909E"
      },
      backgroundImage: {
        hero: "url('/src/assets/four.png')"
      }
    }
  },
  plugins: [require("daisyui")]
};
