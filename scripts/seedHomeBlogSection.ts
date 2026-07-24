/**
 * Patch only the homepage blog teaser section (without re-seeding everything).
 *
 * Run:
 *   pnpm seed:home-blog
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

async function seed() {
  console.log('Patching homepage blog teaser…')

  await client
    .patch('singleton-homePage')
    .set({
      blogSection: {
        eyebrow: 'From the blog',
        title: 'Ideas that help your',
        titleAccent: 'website work harder',
        description:
          'Practical guides on design, SEO, and digital growth for Kenyan businesses.',
        postCount: 3,
        ctaLabel: 'View all articles',
        ctaHref: '/blog',
      },
    })
    .commit()

  console.log('Updated singleton-homePage.blogSection')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
