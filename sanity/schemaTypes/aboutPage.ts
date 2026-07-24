import {icons} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: icons.users,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'About',
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
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'headline', type: 'string', validation: (rule) => rule.required()}),
        defineField({name: 'body', type: 'text', rows: 3}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'number', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
            defineField({name: 'sublabel', type: 'string'}),
          ],
          preview: {
            select: {title: 'number', subtitle: 'label'},
          },
        }),
      ],
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [defineArrayMember({type: 'text', rows: 3})],
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
        }),
      ],
    }),
    defineField({
      name: 'purpose',
      title: 'Mission & Vision',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Items',
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
                      {title: 'Target (Mission)', value: 'target'},
                      {title: 'Eye (Vision)', value: 'eye'},
                    ],
                    layout: 'radio',
                  },
                }),
                defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'body', type: 'text', rows: 4, validation: (rule) => rule.required()}),
              ],
              preview: {
                select: {title: 'label', subtitle: 'title'},
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({
          name: 'items',
          title: 'Value Cards',
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
                      {title: 'Award', value: 'award'},
                      {title: 'Zap', value: 'zap'},
                      {title: 'Heart', value: 'heart'},
                      {title: 'Users', value: 'users'},
                    ],
                  },
                }),
                defineField({name: 'title', type: 'string', validation: (rule) => rule.required()}),
                defineField({
                  name: 'description',
                  type: 'text',
                  rows: 3,
                  validation: (rule) => rule.required(),
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
      name: 'team',
      title: 'Team',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'body', type: 'text', rows: 3}),
        defineField({
          name: 'members',
          title: 'Members',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'name', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'role', type: 'string'}),
                defineField({
                  name: 'image',
                  type: 'image',
                  options: {hotspot: true},
                  fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
                }),
                defineField({
                  name: 'tags',
                  type: 'array',
                  of: [defineArrayMember({type: 'string'})],
                }),
              ],
              preview: {
                select: {title: 'name', subtitle: 'role', media: 'image'},
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
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'body', type: 'text', rows: 2}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'About Page'}
    },
  },
})
