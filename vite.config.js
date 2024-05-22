import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['src/assets/**'],
  server: {
    proxy: {
      '/fdroid': {
        target: 'https://f-droid.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fdroid/, '/api/v1'),
      },
      '/github': {
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/github/, ''),
      },
    },
    watch: {
      usePolling: true,
    },
  },
});
