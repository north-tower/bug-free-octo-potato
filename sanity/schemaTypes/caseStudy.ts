import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry Label',
      type: 'string',
      description: 'e.g. Publishing · WordPress',
    }),
    defineField({
      name: 'featured',
      title: 'Show on Home',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
            defineField({
              name: 'tone',
              type: 'string',
              options: {
                list: [
                  { title: 'Success (green)', value: 'success' },
                  { title: 'Primary', value: 'primary' },
                ],
                layout: 'radio',
              },
              initialValue: 'primary',
            }),
          ],
          preview: {
            select: { title: 'value', subtitle: 'label' },
          },
        }),
      ],
    }),
    defineField({
      name: 'phases',
      title: 'Phases',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
            defineField({
              name: 'body',
              type: 'text',
              rows: 4,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'tone',
              type: 'string',
              options: {
                list: [
                  { title: 'Problem', value: 'problem' },
                  { title: 'Solution', value: 'solution' },
                  { title: 'Results', value: 'results' },
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'number' },
          },
        }),
      ],
    }),
    defineField({
      name: 'resultPills',
      title: 'Result Pills',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
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
      subtitle: 'industry',
      featured: 'featured',
    },
    prepare({ title, subtitle, featured }) {
      return {
        title: featured ? `★ ${title}` : title,
        subtitle,
      }
    },
  },
})
