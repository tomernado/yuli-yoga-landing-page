import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Served as a GitHub Pages project site (https://<user>.github.io/yuli-yoga-landing-page/).
  // Change to '/' if deploying to a custom domain or the repo's Pages root.
  base: '/yuli-yoga-landing-page/',
})
