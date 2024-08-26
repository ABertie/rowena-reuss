/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '1.35rem',
      lg: '1.5rem',
      '2xl': '1.65rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: '#333333',
        darkest: '#2f4c51',
        dark: '#89938b',
        mid: '#2f4c51',
        light: '#eae2d9',
        lightest: '#ffffff',
      },
      screens: {
        xs: "470px"
      }
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [function ({ addComponents }) {
    addComponents({
      '.container': {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        '@screen xs': {
          paddingLeft: '10%',
          paddingRight: '10%',
        },
        // '@screen sm': {},
        // '@screen md': {},
        '@screen lg': {
          paddingLeft: '20%',
          paddingRight: '20%',
        },
        // '@screen xl': {},
        // '@screen 2xl': {},
      }
    })
  }],
};
