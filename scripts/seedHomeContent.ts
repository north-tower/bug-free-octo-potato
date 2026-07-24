/**
 * Seed homepage content from the current hardcoded site copy.
 *
 * Run:
 *   npx sanity exec scripts/seedHomeContent.ts --with-user-token
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
  console.log('Seeding loom homepage content…')

  const [
    ecommerceImage,
    corporateImage,
    restaurantImage,
    ngoImage,
  ] = await Promise.all([
    uploadImage('public/images/portfolio-ecommerce.jpg', 'portfolio-ecommerce.jpg'),
    uploadImage('public/images/portfolio-corporate.jpg', 'portfolio-corporate.jpg'),
    uploadImage('public/images/portfolio-restaurant.jpg', 'portfolio-restaurant.jpg'),
    uploadImage('public/images/portfolio-ngo.jpg', 'portfolio-ngo.jpg'),
  ])

  const docs = [
    {
      _id: 'singleton-homePage',
      _type: 'homePage',
      title: 'Home',
      hero: {
        eyebrow: 'Website Loom • Fast, modern websites for Kenya',
        headline: 'Websites that look premium and convert.',
        headlineAccent: 'convert',
        body: 'Website Loom builds custom e-commerce stores, lead-generating business sites, and organizational websites for schools, hospitals, NGOs, and growing teams across Kenya — fast, beautiful, and built to get results.',
        primaryCtaLabel: 'Get a FREE Quote',
        primaryCtaHref: '/contact',
        secondaryCtaLabel: 'View Portfolio',
        secondaryCtaHref: '#portfolio',
        highlights: [
          'Mobile-first + SEO-ready',
          'Fast load times (Core Web Vitals)',
          'WhatsApp + forms + analytics',
          'Launch in days, not months',
        ],
        stats: [
          {_key: key('hs', 0), value: '2–4 wks', label: 'Typical launch'},
          {_key: key('hs', 1), value: '+30%', label: 'Avg. conversion lift*'},
          {_key: key('hs', 2), value: '24/7', label: 'Monitoring options'},
        ],
        statsDisclaimer: '*Varies by industry and offer.',
        previewCaption: 'Modern UI, responsive layout, and clean components.',
      },
      servicesSection: {
        eyebrow: 'What we do',
        title: 'Digital solutions',
        titleAccent: 'built to perform',
        description:
          'Comprehensive digital services tailored to help your business grow, scale, and stand out.',
      },
      processSection: {
        eyebrow: 'Our process',
        title: 'See how we',
        titleAccent: 'transform businesses',
        description:
          'From first brief to final launch - a proven process that delivers results, every time.',
        badge: 'Coming soon',
        durationLabel: '4 min 32 sec',
        steps: [
          {_key: key('ps', 0), number: '01', label: 'Discovery'},
          {_key: key('ps', 1), number: '02', label: 'Strategy'},
          {_key: key('ps', 2), number: '03', label: 'Build'},
          {_key: key('ps', 3), number: '04', label: 'Launch'},
        ],
        stats: [
          {_key: key('pst', 0), value: '2 wks', label: 'avg. discovery to kickoff'},
          {_key: key('pst', 1), value: '94%', label: 'on-time delivery rate'},
          {_key: key('pst', 2), value: '40+', label: 'industries served'},
        ],
      },
      portfolioSection: {
        eyebrow: 'Selected work',
        title: 'Projects that',
        titleAccent: 'speak for themselves',
        description: 'From e-commerce to nonprofits - real work, real results.',
        totalCountLabel: 24,
        ctaLabel: 'View all work',
        ctaHref: '/contact',
      },
      caseStudiesSection: {
        eyebrow: 'Case studies',
        title: 'Real problems.',
        titleAccent: 'Real results.',
        description: 'A look inside how we think, build, and deliver for our clients.',
      },
      testimonialsSection: {
        eyebrow: 'Client stories',
        title: 'Trusted by businesses',
        titleAccent: 'across Nakuru',
        description:
          'Real feedback from founders and professionals we have helped grow online.',
        ratingValue: '5.0',
        ratingSummary: '2 verified reviews',
        recommendLabel: '100% recommend',
        sourceNote: 'Reviews collected from Google and direct client feedback',
        ctaLabel: 'Work with us',
        ctaHref: '/contact',
      },
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
    },
    {
      _id: 'seed-service-web-design',
      _type: 'service',
      title: 'Web Design',
      number: '01',
      tag: 'Development',
      icon: 'globe',
      description:
        'We build websites that help you sell, get inquiries, and look credible online. From online stores to business websites for real estate companies, doctors, engineers, and logistics firms.',
      items: [
        'E-commerce Websites (Sell Products & Digital Goods)',
        'Business Websites (Lead Generation)',
        'Personal Blogs (Authentic Connection)',
        'Mobile-Responsive & Fast-Loading',
      ],
      stat: '120+',
      statLabel: 'projects shipped',
      ctaLabel: 'Learn more',
      ctaHref: '/contact',
      order: 0,
    },
    {
      _id: 'seed-service-seo',
      _type: 'service',
      title: 'SEO Services',
      number: '02',
      tag: 'Strategy',
      icon: 'search',
      description:
        'Our SEO services go beyond Google Business Profiles. We help you build high-quality backlinks, get mentions on reputable websites, and refresh content that ranks.',
      items: [
        'Local SEO (GBP Setup & Optimization)',
        'GBP Consultation',
        'AI-Powered SEO',
        'Technical SEO (Speed Optimization)',
        'Google Search Console Error Removal',
      ],
      stat: '3.4x',
      statLabel: 'avg. ROAS improvement',
      ctaLabel: 'Learn more',
      ctaHref: '/contact',
      order: 1,
    },
    {
      _id: 'seed-service-copywriting',
      _type: 'service',
      title: 'Copywriting',
      number: '03',
      tag: 'Content',
      icon: 'pen',
      description:
        'We specialize in SEO copywriting that turns visitors into leads, buyers, or meaningful actions, while positioning your business as a thought leader in your field.',
      items: [
        'SEO-Optimized Content Writing',
        'Content Refresh & Updates',
        'Website Copy That Converts',
        'Blog Posts & Articles',
      ],
      stat: '98%',
      statLabel: 'client satisfaction',
      ctaLabel: 'Learn more',
      ctaHref: '/contact',
      order: 2,
    },
    {
      _id: 'seed-project-ecommerce',
      _type: 'project',
      title: 'E-commerce Store Redesign',
      tag: 'E-commerce · Redesign',
      category: 'E-commerce',
      featured: true,
      order: 0,
      image: {
        _type: 'image',
        alt: 'E-commerce Store Redesign',
        asset: {_type: 'reference', _ref: ecommerceImage._id},
      },
    },
    {
      _id: 'seed-project-corporate',
      _type: 'project',
      title: 'Corporate Website Development',
      tag: 'Corporate · Development',
      category: 'Corporate',
      featured: false,
      order: 1,
      image: {
        _type: 'image',
        alt: 'Corporate Website Development',
        asset: {_type: 'reference', _ref: corporateImage._id},
      },
    },
    {
      _id: 'seed-project-restaurant',
      _type: 'project',
      title: 'Restaurant Website & SEO',
      tag: 'Hospitality · SEO',
      category: 'Hospitality',
      featured: false,
      order: 2,
      image: {
        _type: 'image',
        alt: 'Restaurant Website & SEO',
        asset: {_type: 'reference', _ref: restaurantImage._id},
      },
    },
    {
      _id: 'seed-project-ngo',
      _type: 'project',
      title: 'NGO Platform Launch',
      tag: 'Nonprofit · Platform',
      category: 'Nonprofit',
      featured: true,
      order: 3,
      image: {
        _type: 'image',
        alt: 'NGO Platform Launch',
        asset: {_type: 'reference', _ref: ngoImage._id},
      },
    },
    {
      _id: 'seed-case-study-author-blog',
      _type: 'caseStudy',
      title: 'Building a Personal Blog for an Author',
      industry: 'Publishing · WordPress',
      featured: true,
      order: 0,
      metrics: [
        {_key: key('cm', 0), value: '300%', label: 'book sales increase', tone: 'success'},
        {_key: key('cm', 1), value: '<2s', label: 'page load time', tone: 'primary'},
      ],
      phases: [
        {
          _key: key('ph', 0),
          number: '01',
          label: 'The Problem',
          tone: 'problem',
          body: 'An author needed a place to share stories and sell books, but her old WordPress site was a mess, loading in 12 seconds. She wanted a minimalist redesign built from scratch.',
        },
        {
          _key: key('ph', 1),
          number: '02',
          label: 'Our Solution',
          tone: 'solution',
          body: 'We turned her sketch into a live site in one week, replaced the bloated theme with GeneratePress, integrated Paystack, and custom-coded every key detail.',
        },
        {
          _key: key('ph', 2),
          number: '03',
          label: 'The Results',
          tone: 'results',
          body: 'Load time dropped from 12s to under 2 seconds. The author loved the experience, and book sales increased by 300% within months.',
        },
      ],
      resultPills: [
        'Delivered in 1 week',
        'Load time: 12s -> <2s',
        'Book sales up 300%',
        'Custom WordPress + Paystack',
      ],
    },
    {
      _id: 'seed-testimonial-expert-writer',
      _type: 'testimonial',
      name: 'Expert Writer',
      role: 'Content Professional',
      quote:
        'I can authoritatively say Websiteloom is the best web designer agency in Nakuru. The team went above and beyond to advise me on a feasible SEO strategy. I was highly impressed by their dual knowledge in web design and SEO, a rare combination.',
      initials: 'EW',
      avatarTone: 'blue',
      rating: 5,
      verified: true,
      featured: true,
      order: 0,
    },
    {
      _id: 'seed-testimonial-paul',
      _type: 'testimonial',
      name: 'Paul Gachibu',
      role: 'Business Owner',
      quote:
        'Peter explained everything clearly and patiently. I asked a lot of questions and never once felt like a bother. Then the website came out perfectly. These guys genuinely deserve every star.',
      initials: 'PG',
      avatarTone: 'green',
      rating: 5,
      verified: true,
      featured: true,
      order: 1,
    },
  ]

  const transaction = client.transaction()
  for (const doc of docs) {
    transaction.createOrReplace(doc)
  }
  await transaction.commit()

  console.log(`Seeded ${docs.length} documents (home + lists + images).`)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
