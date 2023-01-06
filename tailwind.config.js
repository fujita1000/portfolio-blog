module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'lsm': '425px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    mode: 'jit',
    options: {
      safelist: [],
    },
   },
  theme: {
    extend: {
        colors: {
          'main': "#ff4655",
          'sub': "#ece8e1",
          'btext': "#111111",
          'wtext': "#f9f9f9"
      },
    }
 
  },

  darkMode: `class`
};