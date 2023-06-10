import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "sakura-component",
      filename: (format) => `${format}.js`,
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
        }
      }
    },
  },
  plugins: [vue()],
});