import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cesta Života - purple theme
        'cz-primary': '#3B0A60',
        'cz-dark': '#1a0530',
        'cz-light': '#eefefe',
        // Svedkovia - brown theme
        'sv-primary': '#5C3A1E',
        'sv-dark': '#3A2410',
        'sv-light': '#F5E6D3',
        // Duhovyrod - gradient/rainbow
        'dr-primary': '#4A1A6B',
        'dr-dark': '#2D1040',
        // Katolickaviera - gold/brown
        'kv-primary': '#8B6914',
        'kv-dark': '#3A2A0A',
        'kv-light': '#FDF6E3',
        // Shared
        'success': '#039f2f',
        'error': '#EE4B2B',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
        baloo: ['Baloo 2', 'cursive'],
      },
    },
  },
  plugins: [],
};

export default config;
