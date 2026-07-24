import {icons} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  icon: icons.tag,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Services',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'headline', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'body', type: 'text', rows: 3}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
      ],
    }),
    defineField({
      name: 'offerings',
      title: 'What We Do',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Service Offerings',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Globe', value: 'globe'},
                      {title: 'Search', value: 'search'},
                      {title: 'Pen', value: 'pen'},
                    ],
                  },
                  initialValue: 'globe',
                }),
                defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
                defineField({
                  name: 'description',
                  type: 'text',
                  rows: 3,
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'features',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'description'},
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'industries',
      title: 'Industries',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Industry Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'E-Commerce', value: 'shopping-cart'},
                      {title: 'Real Estate', value: 'building'},
                      {title: 'Healthcare', value: 'stethoscope'},
                      {title: 'Education', value: 'graduation'},
                      {title: 'NGOs', value: 'landmark'},
                      {title: 'Corporate', value: 'bar-chart'},
                    ],
                  },
                }),
                defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
                defineField({
                  name: 'description',
                  type: 'text',
                  rows: 2,
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {title: 'name', subtitle: 'description'},
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'process',
      title: 'Process',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'step', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
                defineField({
                  name: 'description',
                  type: 'text',
                  rows: 3,
                  validation: (rule) => rule.required(),
                }),
              ],
              preview: {
                select: {title: 'title', subtitle: 'step'},
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'subtitle', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Package Cards',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'price', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'description', type: 'text', rows: 2}),
                defineField({
                  name: 'features',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
                defineField({
                  name: 'highlighted',
                  title: 'Most Popular',
                  type: 'boolean',
                  initialValue: false,
                }),
                defineField({name: 'ctaLabel', type: 'string', initialValue: 'Get Started'}),
                defineField({name: 'ctaHref', type: 'string', initialValue: '/contact'}),
              ],
              preview: {
                select: {title: 'name', subtitle: 'price', highlighted: 'highlighted'},
                prepare({title, subtitle, highlighted}) {
                  return {
                    title: highlighted ? `★ ${title}` : title,
                    subtitle,
                  }
                },
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom CTA',
      type: 'object',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'body', type: 'text', rows: 2}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Services Page'}
    },
  },
})
