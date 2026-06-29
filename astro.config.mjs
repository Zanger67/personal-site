import { defineConfig } from 'astro/config';
import rehypeBaseLinks from './src/utils/rehype-base-links.mjs';

const base = '';

export default defineConfig({
  site: 'https://zang.dev',
  // Prefix BASE_URL onto root-relative links inside rendered markdown — no-op at
  // this root deploy, but keeps the markdown pipeline identical to the template.
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, { base }]],
  },
  redirects: {
    // The Timeline now lives as a view inside /experience; keep the old URL alive.
    '/timeline': '/experience',
    '/s': 'https://rotatingsandwiches.com',
    '/sand': 'https://rotatingsandwiches.com',
    '/sandwich': 'https://rotatingsandwiches.com',
    '/sandwiches': 'https://rotatingsandwiches.com',
  },
});
