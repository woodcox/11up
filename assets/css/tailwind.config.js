module.exports = {
  content: ['./**/*.html'],
  safelist: [],
  theme: {
    extend: {
      colors: {
        change: 'green',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
