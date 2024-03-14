// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/characters': {
        target: 'https://api.marvel.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/characters/, '/v1/public/characters'),
      },
    },
  },
});
