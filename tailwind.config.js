module.exports = {   
 content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  plugins: [
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
  theme: {
    extend: {
        colors: {
          'main': "#fa4147",
          'sub': "#fdf3ec",
          'btext': "#000000",
          'wtext': "#ffffff"
      },
    }
 
  },

  darkMode: `class`
};