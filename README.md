# @dephub/path 🗺️

> Path resolution utilities for Node.js with ESM support - cwd, dirname helpers, and built-in path utilities.

[![NPM version](https://img.shields.io/npm/v/@dephub/path.svg?style=flat)](https://npmjs.org/package/@dephub/path)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 📁 **Current Working Directory** – Resolve paths relative to current working directory
- 📄 **Module Directory** – ESM-friendly replacement for `__dirname`
- 🛠️ **Native Path Re-exported** – Direct access to all standard Node.js `path` utilities (`path.join`, `path.resolve`, etc.)
- 🎯 **TypeScript Ready** – Full type safety with zero configuration
- ⚡ **Lightweight** – Minimal utilities focused on path resolution

---

## Installation 📦

- npm: `npm install @dephub/path`
- pnpm: `pnpm add @dephub/path`
- yarn: `yarn add @dephub/path`
- bun: `bun add @dephub/path`

---

## Usage 🎯

### Resolve Paths from Current Directory

```typescript
import { useCwd } from '@dephub/path';

// Get current working directory
console.log(useCwd()); // /Users/user/project

// Resolve relative paths
const configPath = useCwd('config', 'app.json');
// -> /Users/user/project/config/app.json
```

### Resolve Paths from Module Directory

```typescript
import { useDirname } from '@dephub/path';

// In file: /project/src/utils/helpers.ts
const utilsDir = useDirname(import.meta);
// -> /project/src/utils

const dataPath = useDirname(import.meta, 'data.json');
// -> /project/src/utils/data.json
```

### Using Native Path Utilities

```typescript
import { path } from '@dephub/path';

const ext = path.extname('file.txt'); // -> .txt
const joined = path.join('foo', 'bar'); // -> foo/bar
```

### Real-world Example

```typescript
import { useCwd, useDirname, path } from '@dephub/path';
import { readFile } from '@dephub/read';
import { writeFile } from '@dephub/write';

// Read config from project root
const config = await readFile(useCwd('config.json'));

// Write output relative to current module
await writeFile(
  useDirname(import.meta, 'output', 'result.json'),
  JSON.stringify(result, null, 2),
);

// Normalize path using native path module
const cleanPath = path.normalize('/foo/bar//baz/asdf/quux/..');
```

---

## API Reference 📚

### `useCwd(...paths)`

Resolves paths relative to current working directory.

**Parameters:**

- `...paths` (string[]) - Path segments to join

**Returns:** `string` - Absolute path

### `useDirname(meta, ...paths)`

ESM replacement for `__dirname` - resolves paths relative to module.

**Parameters:**

- `meta` (ImportMeta) - `import.meta` from calling module
- `...paths` (string[]) - Path segments to join

**Returns:** `string` - Absolute path

**Throws:** `Error` - If `import.meta` is not provided

### `path`

Re-export of the native Node.js `node:path` module (namespace object providing access to
`join`, `resolve`, `extname`, `basename`, etc.).

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
