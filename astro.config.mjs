import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zang.dev',
  redirects: {
    '/s': 'https://rotatingsandwiches.com',
    '/sand': 'https://rotatingsandwiches.com',
    '/sandwich': 'https://rotatingsandwiches.com',
    '/sandwiches': 'https://rotatingsandwiches.com',
  },
});
