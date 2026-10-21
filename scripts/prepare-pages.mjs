import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
// Keep a ready-to-serve copy for Pages installations using main / (root).
// GitHub Actions continues publishing dist directly.
mkdirSync(new URL('assets/', root), { recursive: true });
cpSync(new URL('dist/assets/', root), new URL('assets/', root), { recursive: true });
cpSync(new URL('dist/index.html', root), new URL('index.html', root));
writeFileSync(fileURLToPath(new URL('.nojekyll', root)), '');
