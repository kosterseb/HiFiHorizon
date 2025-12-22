import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/HiFiHorizon/',
  server: {
    proxy: {
      '/api': {
        target: 'https://hifihorizon.onrender.com',
        changeOrigin: true,
        secure: false, 
      },
    },
  },
});