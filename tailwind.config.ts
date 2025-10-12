import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1120',
        sakura: '#FF85B3',
        azure: '#5E9BFF',
        mint: '#7CF4C6',
        sunshine: '#FFC75F'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(124, 244, 198, 0.35), transparent 45%), radial-gradient(circle at bottom right, rgba(94, 155, 255, 0.4), transparent 55%)'
      }
    }
  },
  plugins: []
};

export default config;
