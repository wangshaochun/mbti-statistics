import { NextApiRequest, NextApiResponse } from 'next';
import { blogPosts } from '../../data/blogs';

const SITE_URL = 'https://mbti-aisho.com'; // 请替换为实际域名

function generateSiteMap() {
  const staticPages = [
    '',
    '/blog',
    '/types',
    '/diagnostics',
    '/compatibility',
    '/statistics',
    '/characters'
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map((page) => {
      return `
    <url>
      <loc>${SITE_URL}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `;
    })
    .join('')}
  ${blogPosts
    .map((post) => {
      return `
    <url>
      <loc>${SITE_URL}/blog/${post.id}</loc>
      <lastmod>${new Date(post.publishDate).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `;
    })
    .join('')}
</urlset>
`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const sitemap = generateSiteMap();
    
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ message: 'Error generating sitemap' });
  }
}
