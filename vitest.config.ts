import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // To avoid import it, describe... from vitest
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'tests/vitest.config.ts')],
    include: ['tests/**/*.[jt]s?(x)'],
    env: {
      IS_REACT_ACT_ENVIRONMENT: 'true',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
