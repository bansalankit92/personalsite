// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ankitbansal.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
  markdown: {
    // Blog code blocks: dark colours inline, light ones as CSS variables (switched in blog/[...slug].astro).
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: 'dark' },
  },
});
