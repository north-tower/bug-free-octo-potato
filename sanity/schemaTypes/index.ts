import type { SchemaTypeDefinition } from 'sanity'
import { aboutPage } from './aboutPage'
import { caseStudy } from './caseStudy'
import { homePage } from './homePage'
import { project } from './project'
import { service } from './service'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, aboutPage, service, project, caseStudy, testimonial],
}
