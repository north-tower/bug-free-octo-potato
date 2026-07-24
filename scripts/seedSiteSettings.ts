/**
 * Seed site settings (navbar + footer) from current hardcoded chrome.
 *
 * Run:
 *   pnpm seed:settings
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
  console.log('Seeding loom site settings…')

  const logo = await uploadImage('public/images/websiteloom-logo.png', 'websiteloom-logo.png')

  await client.createOrReplace({
    _id: 'singleton-siteSettings',
    _type: 'siteSettings',
    title: 'Site Settings',
    siteName: 'Websiteloom',
    logo: {
      _type: 'image',
      alt: 'Websiteloom',
      asset: {_type: 'reference', _ref: logo._id},
    },
    navbar: {
      links: [
        {_key: key('nl', 0), label: 'Home', href: '/'},
        {_key: key('nl', 1), label: 'About Websiteloom', href: '/about'},
        {_key: key('nl', 2), label: 'Our Services', href: '/services'},
        {_key: key('nl', 3), label: 'Contact', href: '/contact'},
        {_key: key('nl', 4), label: 'Blog', href: '/#blog'},
      ],
      phone: '+254 707 803 637',
      phoneHref: 'tel:+254707803637',
      ctaLabel: 'Get Website Now',
      ctaHref: '/contact',
    },
    footer: {
      tagline:
        'We build fast, beautiful websites for businesses, creatives, and nonprofits across Kenya.',
      ctaLabel: 'Start a project',
      ctaHref: '/contact',
      quickLinksTitle: 'Quick links',
      quickLinks: [
        {_key: key('ql', 0), label: 'Home', href: '/'},
        {_key: key('ql', 1), label: 'About Websiteloom', href: '/about'},
        {_key: key('ql', 2), label: 'Contact us', href: '/contact'},
        {_key: key('ql', 3), label: 'Blog', href: '/#blog'},
      ],
      findUsTitle: 'Find us',
      addressLines: [
        'Nakuru City',
        'Kenyatta Avenue',
        'Kimotho House',
        'Ground Floor, Office 28',
      ],
      mapLabel: 'View on map',
      mapHref: 'https://www.google.com/maps?q=Kenyatta%20Avenue%20Nakuru%20Kimotho%20House',
      phone: '+254 707 803 637',
      phoneHref: 'tel:+254707803637',
      hoursTitle: 'Hours',
      walkInLabel: 'Walk-in',
      walkInHours: 'Monday - Friday\n9:00 AM - 6:00 PM',
      onlineLabel: 'Online',
      onlineBadge: '24 / 7 available',
      careersTitle: 'Careers',
      careersBody:
        'We are always looking for talented people who love web design and digital marketing. Come build with us.',
      careersCtaLabel: 'View open positions',
      careersCtaHref: '#',
      socialTitle: 'Follow us',
      socialLinks: [
        {_key: key('sc', 0), label: 'Facebook', href: 'https://facebook.com', color: 'bg-[#1877F2]'},
        {_key: key('sc', 1), label: 'LinkedIn', href: 'https://linkedin.com', color: 'bg-[#0A66C2]'},
        {_key: key('sc', 2), label: 'YouTube', href: 'https://youtube.com', color: 'bg-[#FF0000]'},
        {_key: key('sc', 3), label: 'TikTok', href: 'https://tiktok.com', color: 'bg-foreground'},
        {_key: key('sc', 4), label: 'Reddit', href: 'https://reddit.com', color: 'bg-[#FF4500]'},
      ],
      copyright: '© 2026 Websiteloom. All rights reserved.',
      legalLinks: [
        {_key: key('lg', 0), label: 'Privacy Policy', href: '#'},
        {_key: key('lg', 1), label: 'Terms & Conditions', href: '#'},
        {_key: key('lg', 2), label: 'Refund Policy', href: '#'},
        {_key: key('lg', 3), label: 'GDPR Compliance', href: '#'},
        {_key: key('lg', 4), label: 'Affiliates Disclosure', href: '#'},
      ],
    },
  })

  console.log('Seeded Site Settings (singleton-siteSettings).')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
