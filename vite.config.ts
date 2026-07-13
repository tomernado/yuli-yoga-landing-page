import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this as a project site (https://<user>.github.io/yuli-yoga-landing-page/),
  // so assets need that path prefix there. Vercel serves the app from the domain root, so it
  // needs base '/' — Vercel sets the VERCEL env var during its builds, which we use to tell them apart.
  base: process.env.VERCEL ? '/' : '/yuli-yoga-landing-page/',
})
