import { icons } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: icons.tag,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'number',
      title: 'Display Number',
      type: 'string',
      description: 'e.g. 01',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'e.g. Development, Strategy, Content',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Globe', value: 'globe' },
          { title: 'Search', value: 'search' },
          { title: 'Pen', value: 'pen' },
        ],
        layout: 'radio',
      },
      initialValue: 'globe',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Feature List',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'stat',
      title: 'Stat Value',
      type: 'string',
    }),
    defineField({
      name: 'statLabel',
      title: 'Stat Label',
      type: 'string',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA Label',
      type: 'string',
      initialValue: 'Learn more',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      number: 'number',
    },
    prepare({ title, subtitle, number }) {
      return {
        title: number ? `${number} · ${title}` : title,
        subtitle,
      }
    },
  },
})
