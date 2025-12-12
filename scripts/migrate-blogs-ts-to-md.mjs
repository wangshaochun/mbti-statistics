import fs from 'node:fs';
import path from 'node:path';

const repoRoot = path.resolve(process.cwd());
const blogsTsPath = path.join(repoRoot, 'src', 'data', 'blogs.ts');
const outDir = path.join(repoRoot, 'src', 'content', 'blog');

function extractBlogPostsArrayText(fileText) {
  const anchor = 'export const blogPosts';
  const idx = fileText.indexOf(anchor);
  if (idx === -1) {
    throw new Error(`Could not find '${anchor}' in ${blogsTsPath}`);
  }

  const after = fileText.slice(idx);
  const match = after.match(/export const blogPosts[\s\S]*?=\s*\[(\s*[\s\S]*?)\n\];/m);
  if (!match) {
    throw new Error('Could not extract blogPosts array literal.');
  }

  return `[${match[1]}\n]`;
}

function evalArrayLiteral(arrayText) {
  // Evaluate trusted repo-local literal content. This is a migration helper.
  return new Function(`return (${arrayText});`)();
}

function toFrontmatter(post) {
  const lines = [];
  lines.push('---');
  lines.push(`id: '${post.id}'`);
  lines.push(`title: '${String(post.title).replace(/'/g, "''")}'`);
  lines.push(`excerpt: '${String(post.excerpt).replace(/'/g, "''")}'`);
  lines.push(`author: '${String(post.author).replace(/'/g, "''")}'`);
  lines.push(`publishDate: '${post.publishDate}'`);
  lines.push('tags:');
  for (const tag of post.tags ?? []) {
    lines.push(`  - ${tag}`);
  }
  lines.push(`readTime: ${post.readTime}`);
  if (post.image) {
    lines.push(`image: '${post.image}'`);
  }
  lines.push('---');
  return lines.join('\n');
}

function writePostMd(post) {
  const fm = toFrontmatter(post);
  const body = post.content ?? '';
  const outPath = path.join(outDir, `${post.id}.md`);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outPath, `${fm}${body}\n`, 'utf8');
  return outPath;
}

const fileText = fs.readFileSync(blogsTsPath, 'utf8');
const arrayText = extractBlogPostsArrayText(fileText);
const posts = evalArrayLiteral(arrayText);

const targets = posts.filter((p) => Number(p.id) >= 1 && Number(p.id) <= 8);
if (targets.length !== 8) {
  throw new Error(`Expected 8 posts (id 1-8), got ${targets.length}.`);
}

const written = targets
  .sort((a, b) => Number(a.id) - Number(b.id))
  .map((p) => writePostMd(p));

console.log('Wrote markdown files:');
for (const p of written) {
  console.log(`- ${path.relative(repoRoot, p)}`);
}
