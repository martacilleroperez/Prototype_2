import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Prototype_2/',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        informational: resolve(__dirname, 'information_web/index.html'),
        experiential: resolve(__dirname, 'experiential_web/index.html'),
        infoPull: resolve(__dirname, 'information_web/characters/Pull.html'),
        infoSold: resolve(__dirname, 'information_web/characters/Sold.html'),
        expPull: resolve(__dirname, 'experiential_web/characters/Pull.html'),
        expSold: resolve(__dirname, 'experiential_web/characters/Sold.html'),
      }
    }
  }
})