// Converts PNG/JPEG images dropped into public/pustak-scan to WebP, then deletes the original
// so only the small files are committed:
//   01.png -> 01.webp (full width) + 01-540.webp (half width, for phones and grids)
// Shot.astro serves both through srcset. Run after adding or replacing a screenshot: npm run images
import { readdir, unlink } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const dirs = ['public/pustak-scan', 'public/pustak-scan/screens'];

for (const dir of dirs) {
  for (const file of await readdir(dir)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const src = join(dir, file);
    const base = src.replace(/\.(png|jpe?g)$/i, '');
    const { width } = await sharp(src).metadata();
    const half = Math.round(width / 2);
    await sharp(src).webp({ quality: 80 }).toFile(`${base}.webp`);
    await sharp(src).resize({ width: half }).webp({ quality: 80 }).toFile(`${base}-${half}.webp`);
    await unlink(src);
    console.log(`${src} -> ${base}.webp + ${base}-${half}.webp (original removed)`);
  }
}
