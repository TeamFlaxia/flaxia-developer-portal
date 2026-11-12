import { copyFileSync, cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { DOCS, REPOS } from '../docs.config.mjs';

/**
 * Assembles dist/ for Cloudflare Pages:
 *   dist/index.html      — the two-pane docs site
 *   dist/vendor/         — markdown-it + DOMPurify
 *   dist/docs/<path>     — referenced docs copied from the submodules
 *   dist/docs/index.json — navigation manifest
 *
 * Run from the dev/ directory: node scripts/build.mjs
 */

const root = process.cwd();
const distDir = join(root, 'dist');

rmSync(distDir, { recursive: true, force: true });
mkdirSync(join(distDir, 'docs'), { recursive: true });

copyFileSync(join(root, 'index.html'), join(distDir, 'index.html'));
cpSync(join(root, 'vendor'), join(distDir, 'vendor'), { recursive: true });

function extractTitle(file) {
  const content = readFileSync(file, 'utf8');
  const match = content.match(/^#{1,3}\s+(.+)$/m);
  return match ? match[1].trim() : file;
}

function slug(relPath) {
  return relPath
    .replace(/\.md$/, '')
    .replace(/[\s/]+/g, '-')
    .toLowerCase();
}

const docs = [];
for (const [repo, source, dest, section, group] of DOCS) {
  const sourcePath = join(root, repo, source);
  const destPath = join(distDir, 'docs', dest);
  mkdirSync(dirname(destPath), { recursive: true });
  copyFileSync(sourcePath, destPath);
  docs.push({
    id: slug(dest),
    section,
    group,
    title: extractTitle(sourcePath),
    file: dest,
    repo: REPOS[repo],
    source,
  });
}

writeFileSync(join(distDir, 'docs', 'index.json'), `${JSON.stringify({ docs }, null, 2)}\n`, 'utf8');
console.log(`Built dist/ (${docs.length} docs)`);
