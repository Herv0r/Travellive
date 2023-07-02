import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      plugins: [
        copy({
          targets: [
            { src: 'src/Images', dest: 'dist/src/Images' },
            { src: 'src/Pages', dest: 'dist/src/Pages' },
          ],
        }),
      ],
    },
  },
});
