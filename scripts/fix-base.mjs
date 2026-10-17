import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('dist');
const base = '/casa-feijao';

function processDir(currentDir) {
  if (!fs.existsSync(currentDir)) return;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      const original = content;

      // 1. Fix images paths: replace any /images/ that is NOT preceded by /casa-feijao
      // Using negative lookbehind (?<!/casa-feijao)
      content = content.replace(/(?<!\/casa-feijao)\/images\//g, `${base}/images/`);

      // 2. Fix favicon
      content = content.replace(/(?<!\/casa-feijao)\/favicon\.ico/g, `${base}/favicon.ico`);

      // 3. Fix HTML specific links
      if (entry.name.endsWith('.html')) {
        // Fix root internal links that lack base
        content = content.replace(/href="\/(acomodacoes|geres|facilidades|contactos|en)(\b|[\/#?"])/g, `href="${base}/$1$2`);
        // Fix home links href="/"
        content = content.replace(/href="\/"/g, `href="${base}/"`);
        // Fix home anchor links href="/#
        content = content.replace(/href="\/#/g, `href="${base}/#`);
      }

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf-8');
        console.log(`Updated paths in: ${path.relative(outDir, fullPath)}`);
      }
    }
  }
}

console.log('Running GitHub Pages path fixer for base:', base);
processDir(outDir);
console.log('Path fixer completed successfully.');
