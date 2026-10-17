import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

function githubPagesBaseIntegration() {
  return {
    name: 'github-pages-base-rewrite',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        const base = '/casa-feijao';

        function processDir(currentDir) {
          if (!fs.existsSync(currentDir)) return;
          const entries = fs.readdirSync(currentDir, { withFileTypes: true });
          for (const entry of entries) {
            const fullPath = path.join(currentDir, entry.name);
            if (entry.isDirectory()) {
              processDir(fullPath);
            } else if (
              entry.isFile() &&
              (entry.name.endsWith('.html') || entry.name.endsWith('.js') || entry.name.endsWith('.css'))
            ) {
              let content = fs.readFileSync(fullPath, 'utf-8');
              const original = content;

              // 1. Fix static images: prefix /images/ with /casa-feijao if not already prefixed
              content = content.replace(/(?<!\/casa-feijao)\/images\//g, `${base}/images/`);

              // 2. Fix favicon
              content = content.replace(/(?<!\/casa-feijao)\/favicon\.ico/g, `${base}/favicon.ico`);

              // 3. Fix HTML specific route links
              if (entry.name.endsWith('.html')) {
                // Fix internal routes lacking base
                content = content.replace(
                  /href="\/(acomodacoes|geres|facilidades|contactos|en)(\b|[\/#?"])/g,
                  `href="${base}/$1$2`
                );
                // Fix root href="/"
                content = content.replace(/href="\/"/g, `href="${base}/"`);
                // Fix root anchor href="/#
                content = content.replace(/href="\/#/g, `href="${base}/#`);
              }

              // 4. Fix JS bundle strings for routes
              if (entry.name.endsWith('.js')) {
                content = content.replace(
                  /["']\/(acomodacoes|geres|facilidades|contactos)(\/|["'])/g,
                  (match, p1, p2) => {
                    const quote = match[0];
                    return `${quote}${base}/${p1}${p2}`;
                  }
                );
              }

              if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf-8');
              }
            }
          }
        }

        processDir(outDir);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://LaminatedYamal.github.io',
  base: '/casa-feijao',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    githubPagesBaseIntegration(),
  ],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
