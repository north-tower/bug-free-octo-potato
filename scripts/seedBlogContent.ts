/**
 * Seed blog page + sample posts.
 *
 * Run:
 *   pnpm seed:blog
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

function block(text: string, style = 'normal') {
  return {
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style,
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).slice(2, 10),
        text,
        marks: [],
      },
    ],
  }
}

async function seed() {
  console.log('Seeding loom blog content…')

  const docs = [
    {
      _id: 'singleton-blogPage',
      _type: 'blogPage',
      title: 'Blog',
      seoDescription:
        'Tips on web design, SEO, and growing your business online from the Websiteloom team in Nakuru.',
      hero: {
        eyebrow: 'Insights',
        headline: 'Ideas that help your website work harder',
        body: 'Practical guides on design, SEO, and digital growth for Kenyan businesses.',
      },
    },
    {
      _id: 'seed-post-website-converts',
      _type: 'post',
      title: 'What Makes a Website Convert in Kenya',
      slug: {_type: 'slug', current: 'what-makes-a-website-convert-in-kenya'},
      excerpt:
        'Fast load times, clear CTAs, and mobile-first design are the difference between traffic and paying customers.',
      category: 'web-design',
      publishedAt: '2026-06-01T09:00:00.000Z',
      readTime: 6,
      featured: true,
      body: [
        block('What Makes a Website Convert in Kenya', 'h2'),
        block(
          'A beautiful website is not enough. Visitors need a clear path from landing to inquiry, especially on mobile networks across Kenya.',
        ),
        block(
          'Focus on speed, WhatsApp-ready contact points, and offers that speak to local buying behavior. Pair that with simple navigation and you will see more quotes and sales.',
        ),
      ],
    },
    {
      _id: 'seed-post-local-seo-nakuru',
      _type: 'post',
      title: 'Local SEO Basics for Nakuru Businesses',
      slug: {_type: 'slug', current: 'local-seo-basics-for-nakuru-businesses'},
      excerpt:
        'Google Business Profile, reviews, and location pages still win most local searches. Here is where to start.',
      category: 'seo',
      publishedAt: '2026-05-18T09:00:00.000Z',
      readTime: 5,
      featured: false,
      body: [
        block('Local SEO Basics for Nakuru Businesses', 'h2'),
        block(
          'Claim and complete your Google Business Profile, collect real reviews, and make sure your NAP details match everywhere online.',
        ),
        block(
          'Then publish helpful local pages that answer customer questions. Consistency beats fancy tricks for most local searches.',
        ),
      ],
    },
    {
      _id: 'seed-post-starter-vs-business',
      _type: 'post',
      title: 'Starter vs Business Package: Which Do You Need?',
      slug: {_type: 'slug', current: 'starter-vs-business-package'},
      excerpt:
        'Choosing the right website package depends on goals, pages, and how soon you need leads.',
      category: 'business',
      publishedAt: '2026-04-30T09:00:00.000Z',
      readTime: 4,
      featured: false,
      body: [
        block('Starter vs Business Package: Which Do You Need?', 'h2'),
        block(
          'Starter works well for personal brands and simple landing pages. Business is better when you need more pages, SEO depth, and lead capture.',
        ),
        block(
          'If you sell products online, skip both and go straight to an e-commerce build with payments and inventory.',
        ),
      ],
    },
  ]

  const transaction = client.transaction()
  for (const doc of docs) {
    transaction.createOrReplace(doc)
  }

  // Point nav/footer Blog links to /blog if site settings already exist
  const settings = await client.fetch(`*[_id == "singleton-siteSettings"][0]{_id, navbar, footer}`)
  if (settings) {
    const patchNavbarLinks = (settings.navbar?.links || []).map((link: {href?: string; label?: string}) =>
      link?.href === '/#blog' || link?.label === 'Blog' ? {...link, href: '/blog'} : link,
    )
    const patchFooterLinks = (settings.footer?.quickLinks || []).map(
      (link: {href?: string; label?: string}) =>
        link?.href === '/#blog' || link?.label === 'Blog' ? {...link, href: '/blog'} : link,
    )

    transaction.patch('singleton-siteSettings', (p) =>
      p.set({
        'navbar.links': patchNavbarLinks,
        'footer.quickLinks': patchFooterLinks,
      }),
    )
  }

  await transaction.commit()
  console.log(`Seeded blog page + ${docs.length - 1} posts (and updated Blog links to /blog if settings exist).`)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
