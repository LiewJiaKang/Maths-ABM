/** @type {import('tailwindcss').Config} */
function generateRange(a, b) {
  let range = [];
  for (let i = a; i <= b; i++) {
    range.push(i);
  }
  return range;
}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: ['"Chakra Petch"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  safelist: generateRange(-180, 180)
    .map((deg) => `rotate-[${deg}deg]`)
    .concat(generateRange(0, 20).map((vmin) => `h-[${vmin}vmin]`))
    .concat(generateRange(0, 20).map((vmin) => `w-[${vmin}vmin]`)),
};
