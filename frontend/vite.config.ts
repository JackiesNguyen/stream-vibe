/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import { defineConfig, splitVendorChunkPlugin } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths(), splitVendorChunkPlugin()],
  test: {
    setupFiles: ['./vitest-setup.ts'],
    environment: 'jsdom',
  },
})
