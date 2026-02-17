import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://flywebprotocol.github.io',
  base: '/flyweb.io',
  integrations: [tailwind()],
  output: 'static',
});
