import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://leeza.suhail.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
