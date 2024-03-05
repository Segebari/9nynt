import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://9nynt.netlify.app/', // Add your base URL here
  plugins: [react()],
})
