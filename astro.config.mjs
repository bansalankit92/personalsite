// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ankitbansal.co.in',
  output: 'static',
  build: {
    inlineStylesheets: 'always',
  },
});
