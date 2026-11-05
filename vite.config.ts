import { glob } from '@dephub/glob';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import { useCwd } from './src/core/cwd.js';

const entry = await glob(['src/**/*.ts', '!src/**/*.test.ts'], {
  absolute: true,
});

const dtsPlugin = dts({
  entryRoot: 'src',
  exclude: ['vite.config.ts', 'src/cli.ts', 'src/**/*.test.ts'],
  outDirs: 'dist',
  tsconfigPath: './tsconfig.json',
});

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry,
    },

    reportCompressedSize: true,
    rollupOptions: {
      external: ['*'],
      output: [
        {
          dir: 'dist',
          entryFileNames: '[name].js',
          format: 'esm',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    ssr: true,

    target: 'esnext',
  },
  plugins: [dtsPlugin],
  resolve: {
    alias: {
      '@': useCwd('src'),
    },
  },
});
