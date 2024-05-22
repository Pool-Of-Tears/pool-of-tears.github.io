/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

// opacity enabler
function toRgba(variableName) {
  return ({ opacityValue }) => {
    return `color-mix(in srgb, var(${variableName}) calc(${opacityValue} * 100%), transparent)`;
  };
}

module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './app/**/*.{js,jsx}', './src/**/*.{js,jsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: toRgba('--border'),
        input: toRgba('--input'),
        ring: toRgba('--ring'),
        background: toRgba('--background'),
        foreground: toRgba('--foreground'),
        primary: {
          DEFAULT: toRgba('--primary'),
          foreground: toRgba('--primary-foreground'),
        },
        secondary: {
          DEFAULT: toRgba('--secondary'),
          foreground: toRgba('--secondary-foreground'),
        },
        destructive: {
          DEFAULT: toRgba('--destructive'),
          foreground: toRgba('--destructive-foreground'),
        },
        muted: {
          DEFAULT: toRgba('--muted'),
          foreground: toRgba('--muted-foreground'),
        },
        accent: {
          DEFAULT: toRgba('--accent'),
          foreground: toRgba('--accent-foreground'),
        },
        popover: {
          DEFAULT: toRgba('--popover'),
          foreground: toRgba('--popover-foreground'),
        },
        card: {
          DEFAULT: toRgba('--card'),
          foreground: toRgba('--card-foreground'),
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'slidein': {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'slidein': 'slidein 1s ease var(--slidein-delay, 0) forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
