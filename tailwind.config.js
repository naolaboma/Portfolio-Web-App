module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5A4',
        accent: '#7C3AED',
        background: '#0F172A',
        textDark: '#0F172A',
        textLight: '#E6EEF8',
      },
      fontFamily: {
        // Map to CSS variables set by next/font in _app or _document
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}