import type {SchemaTypeDefinition} from 'sanity'
import {aboutPage} from './aboutPage'
import {blogPage} from './blogPage'
import {caseStudy} from './caseStudy'
import {contactPage} from './contactPage'
import {contactSubmission} from './contactSubmission'
import {homePage} from './homePage'
import {legalPage} from './legalPage'
import {post} from './post'
import {project} from './project'
import {service} from './service'
import {servicesPage} from './servicesPage'
import {siteSettings} from './siteSettings'
import {testimonial} from './testimonial'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    homePage,
    aboutPage,
    servicesPage,
    contactPage,
    blogPage,
    siteSettings,
    service,
    project,
    caseStudy,
    testimonial,
    post,
    contactSubmission,
    legalPage,
  ],
}
