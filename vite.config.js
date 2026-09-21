import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',

  // GitHub Pages deployment
  base: './Hospital-AI-Landing-Page',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'pages/services.html'),
        about: resolve(__dirname, 'pages/about.html'),
        technology: resolve(__dirname, 'pages/technology.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      },
    },
  },
})
