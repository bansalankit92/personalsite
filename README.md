# ankitbansal.co.in

Personal portfolio of **Ankit Bansal**, Senior Software Engineer. It's a terminal-themed, single-page static site built with [Astro](https://astro.build) and deployed on Vercel.

Live: https://ankitbansal.co.in

## Features

- Terminal-style hero that types itself out (shows instantly with reduced motion)
- Featured work: founder products and products built as an employee, with live screenshots
- GitHub contribution graph, fetched at build time from GitHub's public calendar
- Git-log style experience timeline, `package.json`-style skill cards, project archive with detail dialogs
- Services with "Book a call" (cal.com) and a contact dialog (copy email, Gmail, mail app, LinkedIn)
- Dark and light themes, mobile-first layout with a menu button on small screens
- SEO: JSON-LD (Person, ProfilePage, WebSite, Organization/MobileApplication), Open Graph/Twitter tags, `sitemap.xml`, `robots.txt`
- `llms.txt` and `llms-full.txt` for AI assistants ([llmstxt.org](https://llmstxt.org))
- Almost no client JS: no frameworks, only small inline scripts. Lighthouse (mobile) scores 99-100.

## Updating content

All text, links and numbers live in **one file**: [`src/data/profile.ts`](src/data/profile.ts).

| To change | Edit in `profile.ts` |
|---|---|
| Name, role, email, resume, booking link | `profile` |
| About text | `about` |
| Hero stats | `stats` |
| Featured products (founder / employee) | `featured`; card images go in `src/assets/featured/` |
| Jobs | `experience` |
| Education, achievements | `education`, `achievements` |
| Skills and ratings (0-100) | `skills`; 75+ = expert, 60+ = advanced, 45+ = intermediate |
| Project archive | `projects`; images go in `src/assets/projects/` |
| Services and prices | `services` |
| Site URL, title, meta description | `site` |

The page, JSON-LD and `llms.txt` files are all generated from this data, so they stay in sync. To publish a new resume, put the PDF in `public/docs/` and update `profile.resume`.

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev       # dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Project structure

```
src/
  data/
    profile.ts        all site content
    github.ts         build-time fetch of the GitHub contribution graph
    llms.ts           generates llms.txt / llms-full.txt
  components/         one .astro file per section (Terminal, About, Featured, GitHub, ...)
  layouts/Base.astro  <head>: meta tags, JSON-LD, theme script, analytics
  pages/
    index.astro       the page; composes the sections
    llms.txt.ts       /llms.txt
    llms-full.txt.ts  /llms-full.txt
  styles/global.css   design tokens (colors, fonts) and shared styles
  assets/             images optimized at build time (WebP, responsive sizes)
public/               files served as-is: resumes, favicons, robots.txt, sitemap.xml
```

## Deployment (Vercel)

Vercel detects Astro automatically, so no `vercel.json` is needed.

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Production branch:** `master`

Every push to `master` deploys to production, and other branches get preview URLs. The GitHub graph refreshes on each deploy.

## Credits

Service icons by [Flaticon](https://www.flaticon.com/). Fonts: Inter and JetBrains Mono, via Fontsource.
