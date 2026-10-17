/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#70ffc3',
          400: '#70ffc3',
          500: '#70ffc3',
          '50-alpha': 'rgba(112,255,195,0.5)',
          '30-alpha': 'rgba(112,255,195,0.3)',
          '10-alpha': 'rgba(112,255,195,0.1)',
        },
        surface: {
          DEFAULT: '#111111',
          raised: '#151515',
        },
        line: {
          DEFAULT: '#222222',
          strong: '#343434',
        },
      },
      fontFamily: {
        heading: ['Rethink Sans', 'Inter', 'Noto Sans SC', 'sans-serif'],
        sans: [
          'Inter',
          'Noto Sans SC',
          'PingFang SC',
          'Microsoft YaHei',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
