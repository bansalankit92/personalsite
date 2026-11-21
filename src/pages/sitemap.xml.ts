import type { APIRoute } from 'astro';
import { site } from '../data/profile';
import { getPosts, postPath, blogPath, isoDate } from '../lib/blog';

// Built from the pages and blog posts, so new posts are listed automatically.
// lastmod for fixed pages: bump the date when that page's content changes.
const pages = [
  { path: '/', lastmod: '2026-11-21', priority: '1.0' },
  { path: '/pustak-scan', lastmod: '2026-11-21', priority: '0.8' },
  { path: '/pustak-scan/vs-kaagaz-scanner', lastmod: '2026-11-21', priority: '0.6' },
];

export const GET: APIRoute = async () => {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  const urls = [...pages];
  if (posts.length) {
    urls.push({ path: blogPath, lastmod: isoDate(posts[0].data.updatedDate ?? posts[0].data.pubDate), priority: '0.7' });
    for (const p of posts) {
      urls.push({ path: postPath(p), lastmod: isoDate(p.data.updatedDate ?? p.data.pubDate), priority: '0.6' });
    }
  }
  const body = urls
    .map((u) => `  <url>\n    <loc>${site.url}${u.path === '/' ? '/' : u.path}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
