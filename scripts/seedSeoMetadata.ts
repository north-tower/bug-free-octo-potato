/**
 * Patch SEO fields on Site Settings + Home Page.
 *
 * Run:
 *   pnpm seed:seo
 */
import {createReadStream, existsSync} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

async function uploadOgImage() {
  const absolutePath = path.join(process.cwd(), 'public/og-image.png')
  if (!existsSync(absolutePath)) return null

  return client.assets.upload('image', createReadStream(absolutePath), {
    filename: 'og-image.png',
  })
}

async function seed() {
  console.log('Patching SEO metadata…')

  const ogAsset = await uploadOgImage()

  await client
    .patch('singleton-siteSettings')
    .set({
      seo: {
        title: 'Website Loom',
        titleTemplate: '%s | Website Loom',
        description:
          'Website Loom builds custom e-commerce stores, lead-generating business sites, and organizational websites across Kenya.',
        keywords: [
          'web design Kenya',
          'Nakuru web design',
          'SEO Kenya',
          'e-commerce websites',
          'Websiteloom',
        ],
        twitterHandle: '',
        ...(ogAsset
          ? {
              ogImage: {
                _type: 'image',
                alt: 'Website Loom',
                asset: {_type: 'reference', _ref: ogAsset._id},
              },
            }
          : {}),
      },
    })
    .commit()

  await client
    .patch('singleton-homePage')
    .set({
      seoTitle: 'Website Loom',
      seoDescription:
        'Website Loom builds custom e-commerce stores, lead-generating business sites, and organizational websites across Kenya.',
    })
    .commit()

  console.log('Updated Site Settings SEO + Home Page SEO.')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
