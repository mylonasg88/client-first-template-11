import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--tw-color-primary-950) / <alpha-value>)',
        },
        dark: '#222222',
        'theme-primary': 'rgb(var(--color-theme-primary) / <alpha-value>)',
        'theme-violet': 'rgb(var(--color-theme-violet) / <alpha-value>)',
        'theme-violet-light':
          'rgb(var(--color-theme-violet-light) / <alpha-value>)',
        'theme-white': 'rgb(var(--color-theme-white) / <alpha-value>)',
        'theme-primary-gradient-start':
          'rgb(var(--color-theme-primary-gradient-start) / <alpha-value>)',
        'theme-primary-gradient-end':
          'rgb(var(--color-theme-primary-gradient-end) / <alpha-value>)',
        'theme-secondary-gradient-start':
          'rgb(var(--color-theme-secondary-gradient-start) / <alpha-value>)',
        'theme-secondary-gradient-end':
          'rgb(var(--color-theme-secondary-gradient-end) / <alpha-value>)',
        // gradient background //
        'gradient-1': 'rgba(215, 152, 225, 1)',
        'gradient-2': 'rgba(155, 255, 165, 1)',
        'gradient-3': 'rgba(174, 211, 255, 1)',
        'gradient-4': 'rgba(201, 212, 239, 1)',
        'gradient-5': 'rgba(202, 207, 250, 1)',
      },
      backgroundImage: {
        'theme-gradient-5': `linear-gradient(
          to right,
          rgba(215, 152, 225, 1) 0%,
          rgba(155, 255, 165, 1) 25%,
          rgba(174, 211, 255, 1) 50%,
          rgba(201, 212, 239, 1) 75%,
          rgba(202, 207, 250, 1) 100%
        )`,
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    backdropFilter: true,
  },
} satisfies Config;
