/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2B1B12',
          brown: '#5A3A22',
          rust: '#C1672F',
          cream: '#F8F1E7',
          creamAlt: '#F4EEE3',
          tan: '#C9A66B',
          muted: '#8A6A50',
        },
      },
      // font-sans / font-serif read CSS variables (defined in src/index.css),
      // so switching to Arabic swaps every font in the app to Tajawal at once.
      fontFamily: {
        sans: ['var(--font-sans)'],
        serif: ['var(--font-serif)'],
        arabic: ['Tajawal', 'Segoe UI', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}