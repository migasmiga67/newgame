import { defineConfig } from 'vite';

export default defineConfig({
  root: 'app',
  base: '/newgame/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
