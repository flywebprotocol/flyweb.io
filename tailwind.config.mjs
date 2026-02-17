/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        fw: {
          bg: '#08080a',
          surface: '#111113',
          card: '#18182a',
          border: '#1e1e23',
          mint: '#00ffc8',
          indigo: '#818cf8',
          muted: '#6e6e7e',
          text: '#f0f0f3',
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['Figtree', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
