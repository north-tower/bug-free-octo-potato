import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Home',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'text',
          rows: 3,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'headlineAccent',
          title: 'Headline Accent Word',
          type: 'string',
          description: 'Word/phrase underlined in the headline (e.g. convert)',
        }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 4,
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'primaryCtaLabel',
          title: 'Primary CTA Label',
          type: 'string',
        }),
        defineField({
          name: 'primaryCtaHref',
          title: 'Primary CTA Link',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaLabel',
          title: 'Secondary CTA Label',
          type: 'string',
        }),
        defineField({
          name: 'secondaryCtaHref',
          title: 'Secondary CTA Link',
          type: 'string',
        }),
        defineField({
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [defineArrayMember({ type: 'string' })],
        }),
        defineField({
          name: 'stats',
          title: 'Hero Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
              ],
              preview: {
                select: { title: 'value', subtitle: 'label' },
              },
            }),
          ],
        }),
        defineField({
          name: 'statsDisclaimer',
          title: 'Stats Disclaimer',
          type: 'string',
        }),
        defineField({
          name: 'previewCaption',
          title: 'Preview Caption',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'servicesSection',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'titleAccent', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'processSection',
      title: 'Process Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'titleAccent', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({
          name: 'badge',
          title: 'Video Badge',
          type: 'string',
          description: 'e.g. Coming soon',
        }),
        defineField({
          name: 'durationLabel',
          title: 'Duration Label',
          type: 'string',
        }),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'number', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
              ],
              preview: {
                select: { title: 'label', subtitle: 'number' },
              },
            }),
          ],
        }),
        defineField({
          name: 'stats',
          title: 'Process Stats',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
                defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
              ],
              preview: {
                select: { title: 'value', subtitle: 'label' },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'portfolioSection',
      title: 'Portfolio Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'titleAccent', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({
          name: 'totalCountLabel',
          title: 'Total Projects Count',
          type: 'number',
          description: 'Used in “Showing X of Y projects”',
        }),
        defineField({ name: 'ctaLabel', type: 'string' }),
        defineField({ name: 'ctaHref', type: 'string' }),
      ],
    }),
    defineField({
      name: 'caseStudiesSection',
      title: 'Case Studies Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'titleAccent', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'testimonialsSection',
      title: 'Testimonials Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'titleAccent', type: 'string' }),
        defineField({ name: 'description', type: 'text', rows: 3 }),
        defineField({ name: 'ratingValue', type: 'string', description: 'e.g. 5.0' }),
        defineField({ name: 'ratingSummary', type: 'string', description: 'e.g. 2 verified reviews' }),
        defineField({ name: 'recommendLabel', type: 'string' }),
        defineField({ name: 'sourceNote', type: 'string' }),
        defineField({ name: 'ctaLabel', type: 'string' }),
        defineField({ name: 'ctaHref', type: 'string' }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Home Page' }
    },
  },
})
