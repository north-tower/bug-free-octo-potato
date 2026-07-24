/**
 * Seed legal pages and point footer legal links to real routes.
 *
 * Run:
 *   pnpm seed:legal
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

const pages = [
  {
    _id: 'seed-legal-privacy-policy',
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    seoDescription: 'How Websiteloom collects, uses, and protects your personal information.',
    intro:
      'This Privacy Policy explains how Websiteloom collects, uses, and protects information when you use our website or contact us.',
    sections: [
      [
        'Information we collect',
        'We may collect your name, email address, phone number, and project details when you submit a contact form or otherwise reach out to us.',
      ],
      [
        'How we use information',
        'We use your information to respond to inquiries, provide quotes, deliver services, and improve our website experience.',
      ],
      [
        'Sharing',
        'We do not sell your personal information. We may share data with trusted providers who help us operate our business, only as needed.',
      ],
      [
        'Contact',
        'For privacy questions, email hello@websiteloom.com or call +254 707 803 637.',
      ],
    ],
  },
  {
    _id: 'seed-legal-terms',
    title: 'Terms & Conditions',
    slug: 'terms-and-conditions',
    seoDescription: 'Terms that govern use of the Websiteloom website and services.',
    intro:
      'By using the Websiteloom website or engaging our services, you agree to these Terms & Conditions.',
    sections: [
      [
        'Services',
        'Project scope, timelines, and fees are confirmed in a proposal or agreement before work begins.',
      ],
      [
        'Client responsibilities',
        'You agree to provide accurate content, timely feedback, and any materials needed to complete the project.',
      ],
      [
        'Intellectual property',
        'Unless otherwise agreed in writing, final deliverables transfer to you after full payment. We may showcase completed work in our portfolio.',
      ],
      [
        'Limitation of liability',
        'Websiteloom is not liable for indirect or consequential damages arising from use of our website or services.',
      ],
    ],
  },
  {
    _id: 'seed-legal-refund',
    title: 'Refund Policy',
    slug: 'refund-policy',
    seoDescription: 'Websiteloom refund and cancellation policy for website and digital projects.',
    intro:
      'This Refund Policy outlines when refunds may apply for Websiteloom projects and packages.',
    sections: [
      [
        'Deposits',
        'Project deposits are generally non-refundable once work has started, unless otherwise stated in your agreement.',
      ],
      [
        'Cancellations',
        'If you cancel before work begins, we may refund unused prepaid amounts minus any administrative fees.',
      ],
      [
        'Completed work',
        'Fees for completed milestones or delivered assets are not refundable.',
      ],
      [
        'Questions',
        'Contact us at hello@websiteloom.com to discuss a specific project or invoice.',
      ],
    ],
  },
  {
    _id: 'seed-legal-gdpr',
    title: 'GDPR Compliance',
    slug: 'gdpr-compliance',
    seoDescription: 'How Websiteloom approaches GDPR and data protection for visitors and clients.',
    intro:
      'We take data protection seriously and aim to handle personal data lawfully, fairly, and transparently.',
    sections: [
      [
        'Your rights',
        'Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data.',
      ],
      [
        'Lawful basis',
        'We process contact and project data based on consent, contract necessity, or legitimate interests related to providing our services.',
      ],
      [
        'Retention',
        'We keep personal data only as long as needed for the purpose it was collected, or as required by law.',
      ],
      [
        'Requests',
        'To make a data request, email hello@websiteloom.com with enough detail for us to verify and respond.',
      ],
    ],
  },
  {
    _id: 'seed-legal-affiliates',
    title: 'Affiliates Disclosure',
    slug: 'affiliates-disclosure',
    seoDescription: 'Affiliate and partnership disclosure for Websiteloom.',
    intro:
      'This disclosure explains how affiliate links or partnerships may appear on the Websiteloom website.',
    sections: [
      [
        'Affiliate relationships',
        'Some links on our site may be affiliate links. If you click and make a purchase, we may earn a commission at no extra cost to you.',
      ],
      [
        'Editorial independence',
        'Recommendations are based on our experience and judgment. Affiliate relationships do not change our commitment to honest advice.',
      ],
      [
        'Updates',
        'We may update this disclosure as our partnerships change. Please check this page periodically.',
      ],
    ],
  },
] as const

function key(prefix: string, index: number) {
  return `${prefix}${index}`
}

async function seed() {
  console.log('Seeding legal pages…')

  const transaction = client.transaction()

  for (const page of pages) {
    const body = [
      block(page.intro),
      ...page.sections.flatMap(([heading, text]) => [block(heading, 'h2'), block(text)]),
    ]

    transaction.createOrReplace({
      _id: page._id,
      _type: 'legalPage',
      title: page.title,
      slug: {_type: 'slug', current: page.slug},
      seoDescription: page.seoDescription,
      lastUpdated: '2026-07-24',
      body,
    })
  }

  const settings = await client.fetch(`*[_id == "singleton-siteSettings"][0]{_id, footer}`)
  if (settings) {
    transaction.patch('singleton-siteSettings', (p) =>
      p.set({
        'footer.legalLinks': [
          {_key: key('lg', 0), label: 'Privacy Policy', href: '/legal/privacy-policy'},
          {_key: key('lg', 1), label: 'Terms & Conditions', href: '/legal/terms-and-conditions'},
          {_key: key('lg', 2), label: 'Refund Policy', href: '/legal/refund-policy'},
          {_key: key('lg', 3), label: 'GDPR Compliance', href: '/legal/gdpr-compliance'},
          {_key: key('lg', 4), label: 'Affiliates Disclosure', href: '/legal/affiliates-disclosure'},
        ],
      }),
    )
  }

  await transaction.commit()
  console.log(`Seeded ${pages.length} legal pages and updated footer legal links.`)
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
