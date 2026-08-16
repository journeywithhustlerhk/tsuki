import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base must match your GitHub repository name, e.g. https://username.github.io/tsuki/
// If you name your GitHub repo something other than "tsuki", change the line below to match.
export default defineConfig({
  base: '/tsuki/',
  plugins: [react(), tailwindcss()],
})
