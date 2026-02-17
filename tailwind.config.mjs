/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fw: {
          bg: '#0a0a0f',
          surface: '#111119',
          card: '#18182a',
          border: '#252540',
          mint: '#00ffc8',
          indigo: '#818cf8',
          muted: '#6b6b8d',
          text: '#e8e8f0',
        },
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
