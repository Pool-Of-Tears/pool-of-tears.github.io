import path from "path";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  base: '/',
  plugins: [react(), visualizer()],
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
        secure: false,
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
  build: {
    rollupOptions: {
      // Could potentially mess up CSS for production build
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
