/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'transparent':'#00000000',
      "red":"#FF0000",
      blue: {
        DEFAULT: '#2196f3',
        50: '#e3f2fd',
        100: '#bbdefb',
        200: '#90caf9',
        300: '#64b5f6',
        400: '#42a5f5',
        500: '#2196f3',
        600: '#1e88e5',
        700: '#1976d2',
        800: '#1565c0',
        900: '#0d47a1',
        '100-accent': '#82b1ff',
        '200-accent': '#448aff',
        '400-accent': '#2979ff',
        '700-accent': '#2962ff',
      },
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'weird':'#172033',
        green: {
          DEFAULT: '#4caf50',
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          '100-accent': '#b9f6ca',
          '200-accent': '#69f0ae',
          '400-accent': '#00e676',
          '700-accent': '#00c853',
        },
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white':'#ffffff',
      teal: {
        DEFAULT: '#009688',
        50: '#e0f2f1',
        100: '#b2dfdb',
        200: '#80cbc4',
        300: '#4db6ac',
        400: '#26a69a',
        500: '#009688',
        600: '#00897b',
        700: '#00796b',
        800: '#00695c',
        900: '#004d40',
        '100-accent': '#a7ffeb',
        '200-accent': '#64ffda',
        '400-accent': '#1de9b6',
        '700-accent': '#00bfa5',
      },
      gray: {
        DEFAULT: '#9e9e9e',
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
      indigo: {
        DEFAULT: '#3f51b5',
        50: '#e8eaf6',
        100: '#c5cae9',
        200: '#9fa8da',
        300: '#7986cb',
        400: '#5c6bc0',
        500: '#3f51b5',
        600: '#3949ab',
        700: '#303f9f',
        800: '#283593',
        900: '#1a237e',
        '100-accent': '#8c9eff',
        '200-accent': '#536dfe',
        '400-accent': '#3d5afe',
        '700-accent': '#304ffe',
      },
      'black': '#000000'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend:  {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    
  },
  plugins: [],
}
