import {icons} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(icons.home)
        .child(S.document().schemaType('homePage').documentId('singleton-homePage')),

      S.listItem()
        .title('About Page')
        .icon(icons.users)
        .child(S.document().schemaType('aboutPage').documentId('singleton-aboutPage')),

      S.listItem()
        .title('Services Page')
        .icon(icons.tag)
        .child(S.document().schemaType('servicesPage').documentId('singleton-servicesPage')),

      S.divider(),

      S.listItem()
        .title('Homepage Services')
        .icon(icons.tag)
        .schemaType('service')
        .child(S.documentTypeList('service').title('Homepage Services')),

      S.listItem()
        .title('Projects')
        .icon(icons.projects)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),

      S.listItem()
        .title('Case Studies')
        .icon(icons.document)
        .schemaType('caseStudy')
        .child(S.documentTypeList('caseStudy').title('Case Studies')),

      S.listItem()
        .title('Testimonials')
        .icon(icons.comment)
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
    ])
