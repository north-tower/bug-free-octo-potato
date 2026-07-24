# Website Loom

Marketing site for **Websiteloom** — a Nakuru-based web design, SEO, and copywriting agency. Built with **Next.js 16** (App Router) and **Sanity** for content editing, live preview, and Presentation (click-to-edit).

## Stack

- [Next.js](https://nextjs.org) 16 + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [Sanity](https://www.sanity.io) v5 + [next-sanity](https://github.com/sanity-io/next-sanity) (embedded Studio, Live Content API, Visual Editing)
- [Portable Text](https://www.portabletext.org) for rich blog / legal content
- [pnpm](https://pnpm.io) as the package manager

## Pages & content

| Route | Source in Studio |
| --- | --- |
| `/` | Home Page (+ homepage services, projects, case studies, testimonials, blog teaser) |
| `/about` | About Page |
| `/services` | Services Page |
| `/contact` | Contact Page (form submissions → Contact Submissions) |
| `/blog` | Blog Page |
| `/blog/[slug]` | Blog Posts |
| `/legal/[slug]` | Legal Pages |
| `/studio` | Sanity Studio |

Site chrome (nav, footer, logo, social links) lives in **Site Settings**.

## Getting started

### 1. Install

```bash
pnpm install
```

### 2. Environment variables

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-07-23

# Studio / Presentation
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
SANITY_STUDIO_PREVIEW_ORIGIN=http://localhost:3000

# Public site URL (used for canonical / Open Graph absolute URLs)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Viewer token (drafts + Presentation)
SANITY_API_READ_TOKEN=your_viewer_token

# Editor/write token (contact form creates documents)
SANITY_API_WRITE_TOKEN=your_write_token
```

Create tokens:

```bash
npx sanity login
npx sanity tokens add "Loom Viewer" --role viewer
npx sanity tokens add "Loom Form Writer" --role editor
```

### 3. Deploy schemas (first time / after schema changes)

```bash
npx sanity schema deploy
```

### 4. Seed content (optional)

```bash
pnpm seed:home
pnpm seed:about
pnpm seed:services
pnpm seed:contact
pnpm seed:settings
pnpm seed:blog
pnpm seed:home-blog
pnpm seed:legal
```

Seeds use fixed document IDs and `createOrReplace`, so they are safe to re-run.

### 5. Run locally

```bash
pnpm dev
```

- Site: [http://localhost:3000](http://localhost:3000)
- Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

Open **Presentation** in Studio for live preview and click-to-edit overlays.

## Scripts

| Script | Description |
| --- | --- |
| `pnpm dev` | Next.js development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm typegen` | Extract schema + generate `sanity.types.ts` |
| `pnpm fix:blog-links` | Rewrite leftover `/#blog` nav/footer links to `/blog` |
| `pnpm seed:*` | Seed / patch Sanity content (see above) |

## Project structure

```text
app/
  (site)/          # Public pages (home, about, services, contact, blog, legal)
  studio/          # Embedded Sanity Studio
  api/draft-mode/  # Presentation draft-mode enable route
  actions/         # Server actions (contact form, disable draft mode)
components/        # UI sections (hero, navbar, footer, etc.)
sanity/
  schemaTypes/     # Content models
  lib/             # Client, live fetch, queries, image helper
  presentation/    # Presentation document locations
scripts/           # Seed scripts (sanity exec --with-user-token)
```

## CMS notes

- **Singletons:** Home, About, Services, Contact, Blog page, Site Settings
- **Lists:** Homepage services, projects, case studies, testimonials, blog posts, legal pages
- **Contact form:** Creates `contactSubmission` documents (New / In Progress / Archived in Studio)
- **Images:** Served from `cdn.sanity.io` (configured in `next.config.ts`)

## Production checklist

- Set the same env vars on your host (Vercel, etc.)
- Point `NEXT_PUBLIC_SANITY_STUDIO_URL` and `SANITY_STUDIO_PREVIEW_ORIGIN` at the live domain
- Add production CORS origin in Sanity Manage (or `npx sanity cors add https://your-domain --credentials`)
- Review seeded legal copy and replace with final policies before launch
