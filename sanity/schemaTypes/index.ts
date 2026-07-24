import type {SchemaTypeDefinition} from 'sanity'
import {aboutPage} from './aboutPage'
import {caseStudy} from './caseStudy'
import {contactPage} from './contactPage'
import {homePage} from './homePage'
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
    siteSettings,
    service,
    project,
    caseStudy,
    testimonial,
  ],
}
