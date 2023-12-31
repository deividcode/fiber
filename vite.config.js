import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


export default defineConfig({
  base: "https://deividcode.github.io/fiber/",  
  build: {
    minify: false
  },
  plugins: [
    legacy({
      targets: ["defaults"]
    }),
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
})