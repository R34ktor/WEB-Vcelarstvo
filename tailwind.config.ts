import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF5',
        ochre: '#D9A036',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        handwriting: ['var(--font-caveat)', 'Caveat', 'cursive'],
      },
      boxShadow: {
        'depth': '0 20px 50px rgba(217, 160, 54, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
