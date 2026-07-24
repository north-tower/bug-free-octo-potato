/**
 * Seed About page content from the current hardcoded page copy.
 *
 * Run:
 *   pnpm seed:about
 *   # or
 *   npx sanity exec scripts/seedAboutContent.ts --with-user-token
 */
import {createReadStream, existsSync} from 'node:fs'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

function key(prefix: string, index: number) {
  return `${prefix}${index}`
}

async function uploadImage(relativePath: string, filename: string) {
  const absolutePath = path.join(process.cwd(), relativePath)
  if (!existsSync(absolutePath)) {
    throw new Error(`Missing image: ${absolutePath}`)
  }

  return client.assets.upload('image', createReadStream(absolutePath), {
    filename,
  })
}

async function seed() {
  console.log('Seeding loom about page content…')

  const [officeImage, peterImage] = await Promise.all([
    uploadImage('public/images/about-office.jpg', 'about-office.jpg'),
    uploadImage('public/images/team-peter.jpg', 'team-peter.jpg'),
  ])

  await client.createOrReplace({
    _id: 'singleton-aboutPage',
    _type: 'aboutPage',
    title: 'About',
    seoDescription:
      'Websiteloom is a Nakuru-based web design and digital marketing agency helping businesses across Kenya build powerful online presences.',
    hero: {
      eyebrow: 'Nakuru-Based - Kenya-Focused',
      headline: 'We Craft Digital Experiences That Convert',
      body: 'Websiteloom is a web design and digital marketing agency helping businesses across Kenya build powerful, profitable online presences.',
      ctaLabel: 'Start your project',
      ctaHref: '/contact',
    },
    stats: [
      {_key: key('st', 0), number: '100+', label: 'Websites Built', sublabel: 'and counting'},
      {_key: key('st', 1), number: '50+', label: 'Happy Clients', sublabel: 'across Kenya'},
      {_key: key('st', 2), number: '3+', label: 'Years Experience', sublabel: 'in the industry'},
      {_key: key('st', 3), number: '24/7', label: 'Online Support', sublabel: 'always here'},
    ],
    story: {
      eyebrow: 'Our Story',
      title: 'Built for Kenya, built to last.',
      paragraphs: [
        'Websiteloom was founded with a simple mission: to make professional, high-performing websites accessible to businesses of all sizes across Kenya.',
        'From our office on Kenyatta Avenue in Nakuru City, we have grown into a trusted team of web designers, SEO specialists, and copywriters who deliver real results.',
        'Today, we serve clients across Kenya, from e-commerce startups to established corporate firms, building websites that are fast, beautiful, and built to grow your business.',
      ],
      image: {
        _type: 'image',
        alt: 'Websiteloom office',
        asset: {_type: 'reference', _ref: officeImage._id},
      },
    },
    purpose: {
      eyebrow: 'Purpose',
      title: 'Mission & Vision',
      items: [
        {
          _key: key('mv', 0),
          icon: 'target',
          label: 'Mission',
          title: 'Drive growth, build credibility.',
          body: 'To empower Kenyan businesses with world-class websites and digital marketing strategies that drive growth, build credibility, and turn visitors into loyal customers and supporters.',
        },
        {
          _key: key('mv', 1),
          icon: 'eye',
          label: 'Vision',
          title: "East Africa's most trusted agency.",
          body: "To be East Africa's most trusted web design agency known for delivering beautiful, fast, and results-driven digital experiences that help businesses thrive online.",
        },
      ],
    },
    values: {
      eyebrow: 'What drives us',
      title: 'Our Values',
      items: [
        {
          _key: key('vl', 0),
          icon: 'award',
          title: 'Quality First',
          description:
            'Every website we build is crafted with precision, tested rigorously, and optimized for performance.',
        },
        {
          _key: key('vl', 1),
          icon: 'zap',
          title: 'Speed & Efficiency',
          description: 'We deliver fast-loading websites on tight timelines without cutting corners.',
        },
        {
          _key: key('vl', 2),
          icon: 'heart',
          title: 'Client-Centered',
          description:
            'Your success is our success. We listen, adapt, and go above and beyond for every project.',
        },
        {
          _key: key('vl', 3),
          icon: 'users',
          title: 'Collaboration',
          description:
            'We work closely with you throughout the process so the final product is exactly what you envisioned.',
        },
      ],
    },
    team: {
      eyebrow: 'The people',
      title: 'Faces behind your next great website.',
      body: 'We are a small, dedicated team passionate about the web. Every project gets our full attention, creativity, and technical expertise with no outsourcing and no shortcuts.',
      members: [
        {
          _key: key('tm', 0),
          name: 'Peter',
          role: 'Founder & Lead Developer',
          tags: ['Design', 'Dev', 'SEO'],
          image: {
            _type: 'image',
            alt: 'Peter',
            asset: {_type: 'reference', _ref: peterImage._id},
          },
        },
      ],
    },
    cta: {
      eyebrow: "Let's work together",
      title: 'Ready to build something remarkable?',
      body: 'Tell us about your project. We will get back to you within 24 hours with a practical plan.',
      ctaLabel: 'Get started today',
      ctaHref: '/contact',
    },
  })

  console.log('Seeded About Page (singleton-aboutPage).')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
