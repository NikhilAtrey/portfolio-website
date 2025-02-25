import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-website/',  // <-- Add this line (use your repo name)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
