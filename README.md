# @dephub/path 🗺️

> Path resolution utilities for Node.js with ESM support - cwd and dirname helpers.

[![NPM version](https://img.shields.io/npm/v/@dephub/path.svg?style=flat)](https://npmjs.org/package/@dephub/path)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- 📁 **Current Working Directory** - Resolve paths relative to current working directory
- 📄 **Module Directory** - ESM-friendly replacement for `__dirname`
- 🎯 **TypeScript Ready** - Full type safety with zero configuration
- ⚡ **Lightweight** - Minimal utilities focused on path resolution

---

## Installation 📦

```bash
npm install @dephub/path
# or
pnpm add @dephub/path
# or
yarn add @dephub/path
```

---

## Usage 🎯

### Resolve Paths from Current Directory

```typescript
import { cwd } from '@dephub/path';

// Get current working directory
console.log(cwd()); // /Users/user/project

// Resolve relative paths
const configPath = cwd('config', 'app.json');
// -> /Users/user/project/config/app.json
```

### Resolve Paths from Module Directory

```typescript
import { dirname } from '@dephub/path';

// In file: /project/src/utils/helpers.ts
const utilsDir = dirname(import.meta);
// -> /project/src/utils

const dataPath = dirname(import.meta, 'data.json');
// -> /project/src/utils/data.json
```

### Real-world Example

```typescript
import { cwd, dirname } from '@dephub/path';
import { readFile } from '@dephub/read';
import { writeFile } from '@dephub/write';

// Read config from project root
const config = await readFile(cwd('config.json'));

// Write output relative to current module
await writeFile(
  dirname(import.meta, 'output', 'result.json'),
  JSON.stringify(result, null, 2),
);
```

---

## API Reference 📚

### `cwd(...paths)`

Resolves paths relative to current working directory.

**Parameters:**

- `...paths` (string[]) - Path segments to join

**Returns:** `string` - Absolute path

### `dirname(meta, ...paths)`

ESM replacement for `__dirname` - resolves paths relative to module.

**Parameters:**

- `meta` (ImportMeta) - `import.meta` from calling module
- `...paths` (string[]) - Path segments to join

**Returns:** `string` - Absolute path

**Throws:** `Error` - If `import.meta` is not provided

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
