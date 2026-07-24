/**
 * Seed Contact page content from the current hardcoded page copy.
 *
 * Run:
 *   pnpm seed:contact
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

async function seed() {
  console.log('Seeding loom contact page content…')

  await client.createOrReplace({
    _id: 'singleton-contactPage',
    _type: 'contactPage',
    title: 'Contact',
    seoDescription:
      'Get in touch with Websiteloom in Nakuru. Free consultation for web design, SEO, and copywriting projects.',
    formSection: {
      eyebrow: 'Get in touch',
      title: "Let's build something",
      titleAccent: 'worth talking about',
      body: 'Tell us what you need - an e-commerce store, a corporate site, a personal blog, or an NGO platform. We are ready to listen.',
      trustBadges: ['Reply within 24 hrs', 'Free consultation', 'No commitment required'],
      serviceOptions: [
        'E-commerce store',
        'Business website',
        'Personal blog',
        'NGO / Gov platform',
        'SEO & marketing',
        'Something else',
      ],
      privacyNote: "We'll never share your details. No spam, ever.",
      submitLabel: 'Talk to us now',
      successTitle: 'Message sent!',
      successBody: "Thanks for reaching out. We'll get back to you within 24 hours.",
      email: 'hello@websiteloom.com',
      phone: '+254 707 803 637',
      phoneHref: 'tel:+254707803637',
    },
    visitSection: {
      eyebrow: 'Visit us',
      title: 'Find our',
      titleAccent: 'Nakuru office',
      body: 'Prefer meeting in person? We are located along Kenyatta Avenue, Nakuru.',
      locationLabel: 'Location',
      location: 'Kimotho House, Kenyatta Avenue, Nakuru City',
      phoneLabel: 'Phone',
      phone: '+254 707 803 637',
      phoneHref: 'tel:+254707803637',
      hoursLabel: 'Hours',
      hours: 'Mon - Fri, 9:00 AM - 6:00 PM',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Kenyatta%20Avenue%20Nakuru%20Kimotho%20House&output=embed',
      mapLinkUrl: 'https://www.google.com/maps?q=Kenyatta%20Avenue%20Nakuru%20Kimotho%20House',
      mapLinkLabel: 'Open in Google Maps',
    },
  })

  console.log('Seeded Contact Page (singleton-contactPage).')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
