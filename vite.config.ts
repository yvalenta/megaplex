import { defineConfig } from 'vite'
import { resolve } from 'path'
import ViteRails from 'vite-plugin-rails'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    ViteRails(),
    tailwindcss({
      config: './tailwind.config.js'
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './app/frontend/src')
    }
  },
  root: './app/frontend',
  publicDir: 'public',
  build: {
    outDir: '../../public/vite',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: 'app/frontend/entrypoints/application.tsx'
    }
  }
})
