/**
 * Point any leftover Blog links from /#blog to /blog.
 *
 * Run:
 *   pnpm fix:blog-links
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

function rewriteLinks(links: Array<{href?: string; label?: string}> | undefined) {
  return (links || []).map((link) =>
    link?.href === '/#blog' || link?.label === 'Blog' ? {...link, href: '/blog'} : link,
  )
}

async function run() {
  const settings = await client.fetch(
    `*[_id == "singleton-siteSettings"][0]{_id, navbar, footer}`,
  )

  if (!settings) {
    console.log('No site settings found. Run pnpm seed:settings first.')
    return
  }

  await client
    .patch('singleton-siteSettings')
    .set({
      'navbar.links': rewriteLinks(settings.navbar?.links),
      'footer.quickLinks': rewriteLinks(settings.footer?.quickLinks),
    })
    .commit()

  console.log('Updated Blog links to /blog (navbar + footer).')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
