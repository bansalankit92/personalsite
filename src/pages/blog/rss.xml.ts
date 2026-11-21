import type { APIRoute } from 'astro';
import { site, profile } from '../../data/profile';
import { getPosts, postPath, blogPath } from '../../lib/blog';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// RSS 2.0 feed of published posts (title, link, date and description).
export const GET: APIRoute = async () => {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  const items = posts
    .map((p) => {
      const url = `${site.url}${postPath(p)}`;
      return [
        '    <item>',
        `      <title>${esc(p.data.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${p.data.pubDate.toUTCString()}</pubDate>`,
        `      <description>${esc(p.data.description)}</description>`,
        ...p.data.tags.map((t) => `      <category>${esc(t)}</category>`),
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${profile.name}'s blog`)}</title>
    <link>${site.url}${blogPath}</link>
    <description>Notes on Java, Spring Boot, Kafka, Node.js, Next.js and building products.</description>
    <language>en-in</language>
    <atom:link href="${site.url}${blogPath}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
