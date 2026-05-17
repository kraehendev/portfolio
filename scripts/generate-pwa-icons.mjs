import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const iconsDir = path.join(root, 'public', 'icons');

const variants = [
  { input: 'icon.svg', output: 'icon-192x192.png', size: 192 },
  { input: 'icon.svg', output: 'icon-512x512.png', size: 512 },
  { input: 'icon.svg', output: 'apple-touch-icon.png', size: 180 },
  { input: 'icon.svg', output: 'favicon-32x32.png', size: 32 },
  { input: 'icon.svg', output: '../favicon.ico', size: 32 },
  { input: 'maskable-icon.svg', output: 'maskable-icon-512x512.png', size: 512 },
];

await mkdir(iconsDir, { recursive: true });

for (const { input, output, size } of variants) {
  await sharp(path.join(iconsDir, input))
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, output));
  console.log(`Wrote ${output}`);
}
