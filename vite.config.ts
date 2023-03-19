/// <reference types="vitest" />
/// <reference types="vite/client"/>


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ['preact'],
  //   },
  //   commonjsOptions: {
  //     esmExternals: ['preact'],
  //   },
  //},
  resolve: {
    // alias: [
    //   {
    //     find: /^~(.*)$/,
    //     replacement: '$1',

    //   },
    // ]
    alias: { './runtimeConfig': './runtimeConfig.browser' },
  },
});
