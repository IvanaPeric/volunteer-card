module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        sobYellow: {
          DEFAULT: '#FDD835',
          light: '#FFF9E3',
        },
        sobGreen: {
          DEFAULT: '#073f2e',
          dark: '#03291F',
        },
        sobGray: {
          DEFAULT: '#F5F5F5',
          dark: '#212121',
        },
      },
    },
  },
  plugins: [],
}
