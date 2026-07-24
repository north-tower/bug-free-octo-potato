import {icons} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

const linkFields = [
  defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
  defineField({name: 'href', type: 'string', validation: (rule) => rule.required()}),
]

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: icons.cog,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      initialValue: 'Site Settings',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      initialValue: 'Websiteloom',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', type: 'string', title: 'Alternative text'})],
    }),
    defineField({
      name: 'navbar',
      title: 'Navbar',
      type: 'object',
      fields: [
        defineField({
          name: 'links',
          title: 'Nav Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: linkFields,
              preview: {select: {title: 'label', subtitle: 'href'}},
            }),
          ],
        }),
        defineField({name: 'phone', type: 'string'}),
        defineField({name: 'phoneHref', type: 'string'}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({name: 'tagline', type: 'text', rows: 2}),
        defineField({name: 'ctaLabel', type: 'string'}),
        defineField({name: 'ctaHref', type: 'string'}),
        defineField({
          name: 'quickLinksTitle',
          type: 'string',
          initialValue: 'Quick links',
        }),
        defineField({
          name: 'quickLinks',
          title: 'Quick Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: linkFields,
              preview: {select: {title: 'label', subtitle: 'href'}},
            }),
          ],
        }),
        defineField({name: 'findUsTitle', type: 'string', initialValue: 'Find us'}),
        defineField({
          name: 'addressLines',
          title: 'Address Lines',
          type: 'array',
          of: [defineArrayMember({type: 'string'})],
        }),
        defineField({name: 'mapLabel', type: 'string', initialValue: 'View on map'}),
        defineField({name: 'mapHref', type: 'url'}),
        defineField({name: 'phone', type: 'string'}),
        defineField({name: 'phoneHref', type: 'string'}),
        defineField({name: 'hoursTitle', type: 'string', initialValue: 'Hours'}),
        defineField({name: 'walkInLabel', type: 'string', initialValue: 'Walk-in'}),
        defineField({name: 'walkInHours', type: 'text', rows: 2}),
        defineField({name: 'onlineLabel', type: 'string', initialValue: 'Online'}),
        defineField({name: 'onlineBadge', type: 'string', initialValue: '24 / 7 available'}),
        defineField({name: 'careersTitle', type: 'string', initialValue: 'Careers'}),
        defineField({name: 'careersBody', type: 'text', rows: 3}),
        defineField({name: 'careersCtaLabel', type: 'string'}),
        defineField({name: 'careersCtaHref', type: 'string'}),
        defineField({name: 'socialTitle', type: 'string', initialValue: 'Follow us'}),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', type: 'string', validation: (rule) => rule.required()}),
                defineField({name: 'href', type: 'url'}),
                defineField({
                  name: 'color',
                  type: 'string',
                  description: 'Tailwind bg class, e.g. bg-[#1877F2]',
                }),
              ],
              preview: {select: {title: 'label', subtitle: 'href'}},
            }),
          ],
        }),
        defineField({name: 'copyright', type: 'string'}),
        defineField({
          name: 'legalLinks',
          title: 'Legal Links',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: linkFields,
              preview: {select: {title: 'label', subtitle: 'href'}},
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
