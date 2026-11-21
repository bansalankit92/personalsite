import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const blogPath = '/blog';
export const postPath = (post: Post) => `${blogPath}/${post.id}`;

// Published posts, newest first. Drafts are visible only in `astro dev`.
export async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

// About 220 words a minute, ignoring code fences.
export function readingMinutes(markdown = '') {
  const words = markdown.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
