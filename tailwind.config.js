/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lens': {
          'bg': {
            'primary': 'var(--lens-bg-primary)',
            'secondary': 'var(--lens-bg-secondary)',
            'tertiary': 'var(--lens-bg-tertiary)',
          },
          'surface': 'var(--lens-surface)',
          'surface-hover': 'var(--lens-surface-hover)',
          'border': 'var(--lens-border)',
          'text': {
            'primary': 'var(--lens-text-primary)',
            'secondary': 'var(--lens-text-secondary)',
            'muted': 'var(--lens-text-muted)',
          },
          'accent': {
            'primary': 'var(--lens-accent-primary)',
            'secondary': 'var(--lens-accent-secondary)',
            'light': 'var(--lens-accent-light)',
          },
          'status': {
            'success': 'var(--lens-status-success)',
            'warning': 'var(--lens-status-warning)',
            'error': 'var(--lens-status-error)',
            'info': 'var(--lens-status-info)',
          },
        },
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '3rem',
      },
    },
  },
  plugins: [],
};
