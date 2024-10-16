/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          450: 'var(--gray-450)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        'link-blue': {
          normal: 'var(--link-blue)',
          hover: 'var(--link-blue-hover)',
          active: 'var(--link-blue-active)',
        },
        blue: {
          normal: 'var(--blue)',
          hover: 'var(--blue-hover)',
          active: 'var(--blue-active)',
          light: 'var(--blue-light)',
        },
        purple: {
          normal: 'var(--purple)',
          hover: 'var(--purple-hover)',
          active: 'var(--purple-active)',
        },
        turquoise: {
          normal: 'var(--turquoise)',
          hover: 'var(--turquoise-hover)',
          active: 'var(--turquoise-active)',
        },
        dark: {
          normal: 'var(--dark)',
          hover: 'var(--dark-hover)',
          active: 'var(--dark-active)',
        },
      },
    },
  },
  plugins: [],
};
