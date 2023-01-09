module.exports = {
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
theme: {
    screens: {
      "sm":	"640px",
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
          'main': "#fa4147",
          'sub': "#fdf3ec",
          'btext': "#000000",
          'wtext': "#f4f9fb"
      },
    }
 
  },

  darkMode: `class`
};