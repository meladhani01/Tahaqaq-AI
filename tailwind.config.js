/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Cairo', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      colors: {
        emerald: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'text-emerald-600',
    'text-green-600',
    'text-red-600',
    'text-blue-600',
    'bg-emerald-100',
    'bg-green-100',
    'bg-red-100',
    'bg-blue-100',
  ]
};