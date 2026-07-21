import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

async function reoptimize() {
  const files = await fs.readdir(ASSETS_DIR);
  
  for (const file of files) {
    if (file.endsWith('.webp')) {
      const filePath = path.join(ASSETS_DIR, file);
      const tempFilePath = path.join(ASSETS_DIR, `temp_${file}`);
      
      try {
        const inputBuffer = await fs.readFile(filePath);
        const metadata = await sharp(inputBuffer).metadata();
        
        let s = sharp(inputBuffer);
        if (metadata.width > 800) {
          s = s.resize(800, null, { withoutEnlargement: true });
        }
        
        const buffer = await s.webp({ quality: 65, effort: 6 }).toBuffer();
        
        // Write to temp file then rename to avoid lock issues
        await fs.writeFile(tempFilePath, buffer);
        await fs.rename(tempFilePath, filePath);
        
        console.log(`Optimized ${file} - New size: ${(buffer.length / 1024).toFixed(2)} KB`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err.message);
      }
    }
  }
}

reoptimize();
