/**
 * Seed Services page content from the current hardcoded page copy.
 *
 * Run:
 *   pnpm seed:services
 */
import {getCliClient} from 'sanity/cli'

const client = getCliClient({apiVersion: '2025-01-01'})

function key(prefix: string, index: number) {
  return `${prefix}${index}`
}

async function seed() {
  console.log('Seeding loom services page content…')

  await client.createOrReplace({
    _id: 'singleton-servicesPage',
    _type: 'servicesPage',
    title: 'Services',
    seoDescription:
      'Web design, SEO, and copywriting packages for businesses across Kenya — Starter, Business, and E-Commerce.',
    hero: {
      headline: 'Our Services',
      body: 'Comprehensive web design, SEO, and copywriting solutions to help your business grow online.',
      ctaLabel: 'Get FREE Quote',
      ctaHref: '/contact',
    },
    offerings: {
      title: 'What We Do',
      subtitle: 'End-to-end digital solutions tailored to your business',
      items: [
        {
          _key: key('of', 0),
          icon: 'globe',
          title: 'Web Design & Development',
          description:
            'We build websites that help you sell, get inquiries, and look credible online. From online stores to business websites for real estate companies, doctors, engineers, and logistics firms.',
          features: [
            'E-commerce Websites (Sell Products & Digital Goods)',
            'Business Websites (Lead Generation)',
            'Personal Blogs (Authentic Connection)',
            'Mobile-Responsive & Fast-Loading',
            'Custom CMS Integration',
            'Website Redesign & Revamp',
          ],
        },
        {
          _key: key('of', 1),
          icon: 'search',
          title: 'SEO Services',
          description:
            'Our SEO services go beyond Google Business Profiles. We help you build high-quality backlinks, get mentions on reputable websites, and refresh content that ranks.',
          features: [
            'Local SEO (GBP Setup & Optimization)',
            'GBP Consultation',
            'AI-Powered SEO',
            'Technical SEO (Speed Optimization)',
            'Google Search Console Error Removal',
            'Keyword Research & Strategy',
          ],
        },
        {
          _key: key('of', 2),
          icon: 'pen',
          title: 'Copywriting & Content',
          description:
            'We specialize in SEO copywriting that turns visitors into leads, buyers, or meaningful actions, while positioning your business as a thought leader in your field.',
          features: [
            'SEO-Optimized Content Writing',
            'Content Refresh & Updates',
            'Website Copy That Converts',
            'Blog Posts & Articles',
            'Product Descriptions',
            'Email Marketing Copy',
          ],
        },
      ],
    },
    industries: {
      title: 'Industries We Serve',
      subtitle: 'Specialized solutions for diverse business sectors',
      items: [
        {
          _key: key('in', 0),
          icon: 'shopping-cart',
          name: 'E-Commerce',
          description: 'Online stores that drive sales with seamless checkout experiences',
        },
        {
          _key: key('in', 1),
          icon: 'building',
          name: 'Real Estate',
          description: 'Property listing sites with lead capture and virtual tours',
        },
        {
          _key: key('in', 2),
          icon: 'stethoscope',
          name: 'Healthcare',
          description: 'Professional websites for hospitals, clinics, and private practices',
        },
        {
          _key: key('in', 3),
          icon: 'graduation',
          name: 'Education',
          description: 'School and university websites with portals and enrollment systems',
        },
        {
          _key: key('in', 4),
          icon: 'landmark',
          name: 'NGOs & Non-Profits',
          description: 'Donation-ready websites that tell your story and inspire action',
        },
        {
          _key: key('in', 5),
          icon: 'bar-chart',
          name: 'Corporate & Finance',
          description: 'Polished, trust-building websites for established businesses',
        },
      ],
    },
    process: {
      title: 'Our Process',
      subtitle: 'How we bring your website to life',
      steps: [
        {
          _key: key('pr', 0),
          step: '01',
          title: 'Discovery & Strategy',
          description:
            'We learn about your business goals, target audience, and competitors to craft a tailored plan.',
        },
        {
          _key: key('pr', 1),
          step: '02',
          title: 'Design & Wireframing',
          description:
            'We create mockups and wireframes so you can visualize your website before development begins.',
        },
        {
          _key: key('pr', 2),
          step: '03',
          title: 'Development & Testing',
          description:
            'Our developers bring the design to life with clean code, then rigorously test across devices.',
        },
        {
          _key: key('pr', 3),
          step: '04',
          title: 'Launch & Support',
          description:
            'We launch your website and provide ongoing support, updates, and performance monitoring.',
        },
      ],
    },
    packages: {
      title: 'Our Packages',
      subtitle: 'Transparent pricing for every budget',
      items: [
        {
          _key: key('pk', 0),
          name: 'Starter',
          price: 'KSh 15,000',
          description: 'Perfect for personal blogs and simple landing pages',
          features: [
            'Up to 5 Pages',
            'Mobile-Responsive Design',
            'Basic SEO Setup',
            'Contact Form',
            '1 Month Support',
          ],
          highlighted: false,
          ctaLabel: 'Get Started',
          ctaHref: '/contact',
        },
        {
          _key: key('pk', 1),
          name: 'Business',
          price: 'KSh 35,000',
          description: 'Ideal for growing businesses that need lead generation',
          features: [
            'Up to 15 Pages',
            'Custom Design',
            'Advanced SEO',
            'Google Analytics',
            'Blog Integration',
            '3 Months Support',
            'Social Media Integration',
          ],
          highlighted: true,
          ctaLabel: 'Get Started',
          ctaHref: '/contact',
        },
        {
          _key: key('pk', 2),
          name: 'E-Commerce',
          price: 'KSh 60,000',
          description: 'Full online store with payment processing and inventory',
          features: [
            'Unlimited Products',
            'Payment Gateway (M-Pesa & Card)',
            'Inventory Management',
            'Order Tracking',
            'Advanced SEO',
            '6 Months Support',
            'Email Marketing Setup',
          ],
          highlighted: false,
          ctaLabel: 'Get Started',
          ctaHref: '/contact',
        },
      ],
    },
    cta: {
      title: 'Not Sure Which Package Is Right for You?',
      body: "Contact us for a free consultation and we'll recommend the best solution for your business.",
      ctaLabel: 'Get FREE Consultation',
      ctaHref: '/contact',
    },
  })

  console.log('Seeded Services Page (singleton-servicesPage).')
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
