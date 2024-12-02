/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {          
      ...defaultTheme.screens,  
      xs: '475px', // Tamanho pequeno para dispositivos móveis
      sm: '640px', // Dispositivos móveis (padrão de "sm" do Tailwind)
      md: '768px', // Tablets (padrão de "md" do Tailwind)
      lg: '1024px', // Telas maiores como laptops (padrão de "lg" do Tailwind)
      xl: '1280px', // Telas grandes como desktops (padrão de "xl" do Tailwind)
      '2xl': '1536px' // Telas muito grandes, como monitores widescreen (padrão de "2xl")
    },
    colors: {
      black:{
        500: '#000000',
        400: '#0d0d0d',
        300: '#191919',
        200: '#262626',
        100: '#303030'
      },
      gray: {
        100: '#dfdfdf',
        200: '#dcdcde',
        300: '#4C594F',
        400: '#535353',    
        
      },
      white: {
        500: '#ffffff',
      },
      blue: {
        100: '#6274e5',
        200: '#4a64d2',
        300: '#3155c0',
        400: '#1945ad',
        500: '#00359a',
      },
      yellow: { 
        500: '#ffff00', 
      },
    
    },
    extend: {
     
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
