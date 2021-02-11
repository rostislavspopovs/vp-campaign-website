module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
      colors: {
        slate: '#09111d',
        blue: '#2a66ff',
        purple: '#303297',
        red: '#ff4d4f',
        yellow: '#fbd500',
        grey: '#2a272b',
        white: '#ffffff',
        black: '#000000',
        white70: 'rgba(255,255,255,0.7)',
        black70: 'rgba(0,0,0,0.7)',
        white15: 'rgba(255,255,255,0.15)',
        black15: 'rgba(0,0,0,0.15)',
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'title': ['Montserrat'],
        'slab': ['Roboto Slab']
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
}
