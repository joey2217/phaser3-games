/* eslint-disable */
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alphaAdjust: resolve(__dirname, 'games/alpha-adjust/index.html'),
      },
    },
  },
})
