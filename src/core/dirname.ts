import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * ESM-friendly replacement for __dirname - resolves paths relative to current module
 * @param meta - import.meta object from calling module
 * @param paths - Path segments to join with module directory
 * @returns Absolute path resolved from module directory
 * @throws {Error} When import.meta is not provided or invalid
 * @example
 * ```typescript
 * import { dirname } from '@dephub/path';
 *
 * // In file: /project/src/utils/helpers.ts
 * dirname(import.meta); // -> /project/src/utils
 * dirname(import.meta, 'data.json'); // -> /project/src/utils/data.json
 * ```
 */
export const dirname = (meta: ImportMeta, ...paths: string[]): string => {
  if (!meta?.url) {
    throw new Error('dirname() requires import.meta as first argument');
  }

  const filePath = fileURLToPath(meta.url);

  return path.resolve(path.dirname(filePath), ...paths);
};
