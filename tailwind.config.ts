import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  extend: {
  colors: {
    peach: '#FAD6C4',
    softOrange: '#F4A261',
    softPurple: '#9F86C0',
    beige: '#F6F1EB',
    fadedGray: '#A8A8A8',
    softBrown: '#A2845E',
    charcoal: '#2D2D2D',
  },
},

},
  plugins: [],
};
export default config;



