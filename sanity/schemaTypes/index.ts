import type {SchemaTypeDefinition} from 'sanity'
import {aboutPage} from './aboutPage'
import {caseStudy} from './caseStudy'
import {contactPage} from './contactPage'
import {homePage} from './homePage'
import {project} from './project'
import {service} from './service'
import {servicesPage} from './servicesPage'
import {testimonial} from './testimonial'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    homePage,
    aboutPage,
    servicesPage,
    contactPage,
    service,
    project,
    caseStudy,
    testimonial,
  ],
}
