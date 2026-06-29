import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://zang.dev',
  redirects: {
    // The Timeline now lives as a view inside /experience; keep the old URL alive.
    '/timeline': '/experience',
    '/s': 'https://rotatingsandwiches.com',
    '/sand': 'https://rotatingsandwiches.com',
    '/sandwich': 'https://rotatingsandwiches.com',
    '/sandwiches': 'https://rotatingsandwiches.com',
  },
});
