import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // مسار نسبي حتى يعمل الموقع من أي مجلد فرعي (مثل GitHub Pages: username.github.io/repo/)
  base: './',
  server: {
    port: 5173,
    open: false,
  },
  build: {
    // Split vendor libraries into their own chunk for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})
