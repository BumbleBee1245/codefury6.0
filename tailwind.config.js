/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      'satoshi' : ['Satoshi-Variable', ...defaultTheme.fontFamily.sans]
    },

    fontSize: {
      title : '48px',
      sub: '22px',
      body : '14px'
    },

    colors : {
      lake: '#79BEEE',
      indigo: '##8A84E2',
      breeze: '#B7D3F2',
      light: '#FAFAFA',
      dark: "#222222",
    }
  },
  plugins: [],
}

