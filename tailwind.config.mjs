/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        porcelain: '#F8FAFC',
        cobalt: {
          DEFAULT: '#003366',
          50: '#EEF6FF',
          100: '#D9EBFF',
          200: '#BCD9FF',
          300: '#8EBEFF',
          400: '#5899FF',
          500: '#2B70C9',
          600: '#1A54A6',
          700: '#0047AB',
          800: '#003366',
          900: '#0B2545',
          950: '#06162B',
        },
        azulejo: {
          light: '#3B82F6',
          DEFAULT: '#0047AB',
          deep: '#002B5C',
          navy: '#0A192F',
        },
        granite: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'tile': '0 4px 20px -2px rgba(0, 51, 102, 0.08), 0 2px 6px -1px rgba(0, 51, 102, 0.04)',
        'tile-hover': '0 20px 35px -5px rgba(0, 51, 102, 0.16), 0 10px 15px -3px rgba(0, 51, 102, 0.08)',
        'ceramic': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), 0 4px 12px rgba(11, 37, 69, 0.08)',
      },
    },
  },
  plugins: [],
};
