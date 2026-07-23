import {
  CommentIcon,
  DocumentIcon,
  HomeIcon,
  ProjectsIcon,
  TagIcon,
} from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(HomeIcon)
        .child(S.document().schemaType('homePage').documentId('singleton-homePage')),

      S.divider(),

      S.listItem()
        .title('Services')
        .icon(TagIcon)
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services')),

      S.listItem()
        .title('Projects')
        .icon(ProjectsIcon)
        .schemaType('project')
        .child(S.documentTypeList('project').title('Projects')),

      S.listItem()
        .title('Case Studies')
        .icon(DocumentIcon)
        .schemaType('caseStudy')
        .child(S.documentTypeList('caseStudy').title('Case Studies')),

      S.listItem()
        .title('Testimonials')
        .icon(CommentIcon)
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials')),
    ])
