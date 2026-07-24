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

      S.listItem()
        .title('Contact Page')
        .icon(icons.envelope)
        .child(S.document().schemaType('contactPage').documentId('singleton-contactPage')),

      S.listItem()
        .title('Blog Page')
        .icon(icons.book)
        .child(S.document().schemaType('blogPage').documentId('singleton-blogPage')),

      S.divider(),

      S.listItem()
        .title('Blog Posts')
        .icon(icons.compose)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Posts')),

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

      S.divider(),

      S.listItem()
        .title('Contact Submissions')
        .icon(icons.envelope)
        .child(
          S.list()
            .title('Contact Submissions')
            .items([
              S.listItem()
                .title('New')
                .icon(icons.envelope)
                .child(
                  S.documentTypeList('contactSubmission')
                    .title('New Submissions')
                    .filter('_type == "contactSubmission" && status == "new"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('In Progress')
                .icon(icons.envelope)
                .child(
                  S.documentTypeList('contactSubmission')
                    .title('In Progress')
                    .filter('_type == "contactSubmission" && status == "in-progress"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('Archived')
                .icon(icons.envelope)
                .child(
                  S.documentTypeList('contactSubmission')
                    .title('Archived')
                    .filter('_type == "contactSubmission" && status == "archived"')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
                ),
              S.listItem()
                .title('All Submissions')
                .icon(icons.envelope)
                .schemaType('contactSubmission')
                .child(
                  S.documentTypeList('contactSubmission')
                    .title('All Submissions')
                    .defaultOrdering([{field: 'submittedAt', direction: 'desc'}]),
                ),
            ]),
        ),

      S.divider(),

      S.listItem()
        .title('Site Settings')
        .icon(icons.cog)
        .child(S.document().schemaType('siteSettings').documentId('singleton-siteSettings')),
    ])
