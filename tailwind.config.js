module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#ff8500',
      'secondary': '#ff5500',
      'danger': '#ff0000',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#ff8500',
      'secondary': '#ff5500',
      'danger': '#ff0000',
    }),
    extend: {
      backgroundImage: theme => ({
        'orange': "url(/src/assets/images/bg-hero.png)",
        'pattern': "url(/src/assets/logo/vector.png"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
