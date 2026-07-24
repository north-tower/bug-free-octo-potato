import {icons} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  icon: icons.envelope,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'formSection',
      title: 'Form Section',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'titleAccent', type: 'string'}),
        defineField({name: 'body', type: 'text', rows: 3}),
        defineField({
          name: 'trustBadges',
          title: 'Trust Badges',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({
          name: 'serviceOptions',
          title: 'Service Options',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'privacyNote', type: 'string'}),
        defineField({name: 'submitLabel', type: 'string'}),
        defineField({name: 'successTitle', type: 'string'}),
        defineField({name: 'successBody', type: 'text', rows: 2}),
        defineField({name: 'email', type: 'string'}),
        defineField({name: 'phone', type: 'string'}),
        defineField({name: 'phoneHref', type: 'string', description: 'e.g. tel:+254707803637'}),
      ],
    }),
    defineField({
      name: 'visitSection',
      title: 'Visit / Office Section',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', type: 'string'}),
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'titleAccent', type: 'string'}),
        defineField({name: 'body', type: 'text', rows: 2}),
        defineField({name: 'locationLabel', type: 'string', initialValue: 'Location'}),
        defineField({name: 'location', type: 'string'}),
        defineField({name: 'phoneLabel', type: 'string', initialValue: 'Phone'}),
        defineField({name: 'phone', type: 'string'}),
        defineField({name: 'phoneHref', type: 'string'}),
        defineField({name: 'hoursLabel', type: 'string', initialValue: 'Hours'}),
        defineField({name: 'hours', type: 'string'}),
        defineField({
          name: 'mapEmbedUrl',
          title: 'Map Embed URL',
          type: 'url',
        }),
        defineField({
          name: 'mapLinkUrl',
          title: 'Open in Maps URL',
          type: 'url',
        }),
        defineField({name: 'mapLinkLabel', type: 'string', initialValue: 'Open in Google Maps'}),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Contact Page'}
    },
  },
})
