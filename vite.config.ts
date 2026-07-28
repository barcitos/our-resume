import { defineConfig } from 'vite'
import { analyzer } from 'vite-bundle-analyzer'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [analyzer(), react()],
})
