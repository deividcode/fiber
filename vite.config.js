import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  base: "https://deividcode.github.io/fiber/",
  build: {
    minify: false
  },
  plugins: [
    legacy({
      targets: ["> 1%"],
    }),
  ],
})