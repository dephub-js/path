import path from 'node:path';
import process from 'node:process';

/**
 * Resolves paths relative to the current working directory
 * @param paths - Path segments to join with current working directory
 * @returns Absolute path resolved from current working directory
 * @example
 * ```typescript
 * import { useCwd } from '@dephub/path';
 *
 * useCwd(); // -> /Users/user/project
 * useCwd('src', 'index.ts'); // -> /Users/user/project/src/index.ts
 * ```
 */
export function useCwd(...paths: string[]): string {
  return path.resolve(process.cwd(), ...paths);
}
