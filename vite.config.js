import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  define: {
    'window.jQuery': 'jquery',
    'window.$': 'jquery',
    global: 'window', // Polyfill the global variable
  }
})
