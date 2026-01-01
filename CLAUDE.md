# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Japanese MBTI (Myers-Briggs Type Indicator) information site built with Next.js, featuring:
- 16 personality type detailed descriptions
- Compatibility analysis between types
- Statistics on type distribution in Japan
- Blog system with Markdown support
- Free MBTI diagnostic test
- Character analysis (anime/manga characters)

**Tech Stack:** Next.js 14, TypeScript, Tailwind CSS, MDX/Markdown support

## Development Commands

```bash
# Development server (runs on port 3001)
npm run dev

# Production build
npm run build

# Start production server (port 3001)
npm start

# Lint code
npm run lint
```

## Architecture

### Content Management

The project uses a **hybrid content approach**:

1. **Blog Posts** (`src/content/blog/*.md`):
   - Markdown files with frontmatter
   - Required fields: `title`, `excerpt`, `author`, `publishDate`, `tags`, `readTime`
   - Optional: `image`
   - Parsed by `src/lib/blog.ts` using gray-matter
   - Rendered via `MarkdownRenderer.tsx` component

2. **MBTI Type Data** (`src/data/types.ts`):
   - Comprehensive TypeScript data for all 16 MBTI types
   - Contains: traits, strengths, weaknesses, cognitive functions, careers, compatibility, love tendencies, stress response, communication style, team roles, famous people
   - Japanese and global percentage statistics

3. **Diagnostic Questions** (`src/data/diagnostics.ts`):
   - Type descriptions for the free MBTI test

### Key Directories

- `src/pages/`: Next.js pages router structure
  - `index.tsx`: Homepage with features preview
  - `type/[type].tsx`: Dynamic individual type pages
  - `blog/[id].tsx`: Dynamic blog post pages
  - `blog/index.tsx`: Blog listing page
  - `compatibility.tsx`: Compatibility matrix
  - `statistics.tsx`: Type statistics
  - `characters.tsx`: Character analysis
  - `diagnostics.tsx`: Free MBTI test
- `src/components/`: Reusable components
- `src/lib/blog.ts`: Blog content utilities
- `src/data/`: Static data files
- `src/content/blog/`: Markdown blog posts
- `src/config/`: Configuration (SEO, etc.)

### Routing Patterns

- Individual types: `/type/{lowercase-type}` (e.g., `/type/infp`)
- Blog posts: `/blog/{id}` where id is the filename number
- Sitemap is generated dynamically at `/api/sitemap.xml`

## Content Guidelines

### Adding New Blog Posts

Create a new markdown file in `src/content/blog/` with this structure:

```markdown
---
title: '記事タイトル'
excerpt: '記事の要約'
author: '著者名'
publishDate: '2025-01-01'
image: '/images/blog-{id}.svg'
tags:
  - tag1
  - tag2
readTime: 5
---

記事の本文...
```

The filename should be `{id}.md` (e.g., `813.md`).

### Blog Content Images

Blog header images follow the pattern: `public/images/blog-{id}.svg`

### Markdown Support

The blog system supports:
- GitHub Flavored Markdown (GFM)
- Tables, code blocks, lists, quotes
- Styled through `MarkdownRenderer.tsx` with Tailwind classes
- See `MARKDOWN_GUIDE.md` for full syntax reference

## Important Notes

### Static Generation

The project uses Next.js static generation with `getStaticProps()`. Blog posts and pages are pre-rendered at build time for optimal performance.

### SEO

- SEO configuration in `src/config/seo.config.ts`
- Dynamic sitemap generation via `src/pages/api/sitemap.xml.ts`
- Each page has an `Seo` component for meta tags

### Data Structure

MBTI types in `types.ts` are uppercase keys (e.g., `ENFJ`, `INFP`) but routes use lowercase (e.g., `/type/infp`). The `allTypes` export provides lowercase array for routing.

### Japanese Content

All user-facing content is in Japanese. When adding new content, ensure proper Japanese text and cultural context.

## Common Tasks

### Add a new MBTI type detail
- Data is already comprehensive in `src/data/types.ts`
- Route: `/type/{lowercase-type}` works automatically
- No additional files needed

### Add a new blog post
1. Create markdown file in `src/content/blog/{id}.md`
2. Optionally create header image at `public/images/blog-{id}.svg`
3. Blog will automatically appear in listing

### Modify MBTI diagnostic test
- Edit questions in `src/data/diagnostics.ts`
- Diagnostic page is at `/diagnostics`

### Add compatibility data
- Already in `src/data/types.ts` under `compatibility` field for each type
- Format: `{ excellent: [], good: [], challenging: [] }`
