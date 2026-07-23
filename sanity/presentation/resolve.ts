import {
  defineDocuments,
  defineLocations,
  type PresentationPluginOptions,
} from 'sanity/presentation'

const mainDocuments = defineDocuments([
  {
    route: '/',
    filter: `_id == "singleton-homePage"`,
  },
])

const locations = {
  homePage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Home Page', href: '/'}],
    }),
  }),

  service: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Service', href: '/#services'}],
    }),
  }),

  project: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Project', href: '/#portfolio'}],
    }),
  }),

  caseStudy: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Case Study', href: '/#case-studies'}],
    }),
  }),

  testimonial: defineLocations({
    select: {name: 'name'},
    resolve: (doc) => ({
      locations: [{title: doc?.name || 'Testimonial', href: '/#testimonials'}],
    }),
  }),
}

export const resolve: PresentationPluginOptions['resolve'] = {
  mainDocuments,
  locations,
}
