import path from 'node:path';
import process from 'node:process';

/**
 * Resolves paths relative to the current working directory
 * @param paths - Path segments to join with current working directory
 * @returns Absolute path resolved from current working directory
 * @example
 * ```typescript
 * import { cwd } from '@dephub/path';
 *
 * cwd(); // -> /Users/user/project
 * cwd('src', 'index.ts'); // -> /Users/user/project/src/index.ts
 * ```
 */
export const cwd = (...paths: string[]): string =>
  path.resolve(process.cwd(), ...paths);
