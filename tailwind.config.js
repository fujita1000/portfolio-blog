module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
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