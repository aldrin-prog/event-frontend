import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/',
  optimizeDeps: {
    include: ['jquery'], // Ensure jQuery is included in dependencies optimization
  },
  define: {
    'window.jQuery': 'jquery',  // Define jQuery globally
    'window.$': 'jquery',       // Define $ globally
  },
})
