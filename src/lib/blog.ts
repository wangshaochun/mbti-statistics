import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPostMeta {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string; // ISO date string
  tags: string[];
  readTime: number;
  image?: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

function ensureBlogDirExists() {
  if (!fs.existsSync(BLOG_DIR)) {
    throw new Error(`Blog directory not found: ${BLOG_DIR}`);
  }
}

function normalizeIdFromFilename(filename: string) {
  return filename.replace(/\.md$/i, '');
}

function parseFrontmatter(data: unknown, fallbackId: string): BlogPostMeta {
  if (!data || typeof data !== 'object') {
    throw new Error(`Invalid frontmatter for blog ${fallbackId}`);
  }

  const fm = data as Record<string, unknown>;

  const id = typeof fm.id === 'string' ? fm.id : fallbackId;
  const title = typeof fm.title === 'string' ? fm.title : '';
  const excerpt = typeof fm.excerpt === 'string' ? fm.excerpt : '';
  const author = typeof fm.author === 'string' ? fm.author : '';
  const publishDate = typeof fm.publishDate === 'string' ? fm.publishDate : '';
  const readTime = typeof fm.readTime === 'number' ? fm.readTime : Number(fm.readTime);
  const image = typeof fm.image === 'string' ? fm.image : undefined;

  const tagsRaw = fm.tags;
  const tags = Array.isArray(tagsRaw)
    ? tagsRaw.filter((t): t is string => typeof t === 'string')
    : [];

  if (!id || !title || !excerpt || !author || !publishDate || !Number.isFinite(readTime)) {
    throw new Error(`Missing required frontmatter fields for blog ${fallbackId}`);
  }

  const base: BlogPostMeta = { id, title, excerpt, author, publishDate, tags, readTime };
  return image ? { ...base, image } : base;
}

export function getAllBlogIds(): string[] {
  ensureBlogDirExists();
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.toLowerCase().endsWith('.md'));

  return files
    .map((f) => normalizeIdFromFilename(f))
    .filter(Boolean);
}

export function getAllBlogMetas(): BlogPostMeta[] {
  ensureBlogDirExists();
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.toLowerCase().endsWith('.md'));

  const metas = files.map((filename) => {
    const id = normalizeIdFromFilename(filename);
    const fullPath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(fullPath, 'utf8');
    const parsed = matter(raw);
    return parseFrontmatter(parsed.data, id);
  });

  return metas.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getBlogById(id: string): BlogPost {
  ensureBlogDirExists();
  const fullPath = path.join(BLOG_DIR, `${id}.md`);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(raw);
  const meta = parseFrontmatter(parsed.data, id);

  return {
    ...meta,
    content: parsed.content,
  };
}

export function getPopularTags(limit = 18): string[] {
  const metas = getAllBlogMetas();
  const counts = new Map<string, number>();

  for (const post of metas) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ja'))
    .slice(0, limit)
    .map(([tag]) => tag);
}
