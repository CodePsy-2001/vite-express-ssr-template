import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig, defineConfig } from 'vite';
import path from 'path';

export default defineConfig(({ command, mode, ssrBuild }) => ({
  plugins: [
    react(),
    ssr()
  ],
  define: {
    'process.env.NODE_ENV': `"${mode}"`,
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './components'),
      '!': path.join(__dirname, './@types'),
      "renderer": path.join(__dirname, './renderer'),
    },
  },
}));
