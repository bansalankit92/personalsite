import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: one Markdown file per post in src/content/blog/. The file name is the URL slug
// (src/content/blog/kafka-retries.md -> /blog/kafka-retries). Files starting with _ are ignored,
// so src/content/blog/_template.md is a copy-me starting point and never published.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(), // shown in the list, meta description and link previews (aim for 120-160 chars)
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      tags: z.array(z.string()).default([]),
      // Optional cover, stored next to the post (e.g. ./images/kafka.png); Astro converts it to WebP.
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false), // drafts show in `npm run dev` but are never built
    }),
});

export const collections = { blog };
