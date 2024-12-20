import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://event-frontend-gold.vercel.app',
  define: {
    global: 'window', // Polyfill the global variable
  }
})
