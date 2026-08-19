/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        dark: {
          bg: '#0a0a0f',
          card: '#12131c',
          border: '#232538',
          muted: '#8e93a6',
        },
        accent: {
          purple: '#8b5cf6',
          pink: '#f43f5e',
          amber: '#f59e0b',
          emerald: '#10b981',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-pink': '0 0 25px -5px rgba(244, 63, 94, 0.35)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
