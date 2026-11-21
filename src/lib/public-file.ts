import { existsSync } from 'node:fs';
import { join } from 'node:path';

// True if a file exists under public/ at build time (e.g. '/pustak-scan/screens/01.webp').
// Builds run from the project root, so resolve against the working directory.
export const publicFileExists = (path: string) => existsSync(join(process.cwd(), 'public', path));
