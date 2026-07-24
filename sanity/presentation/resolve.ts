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
  {
    route: '/about',
    filter: `_id == "singleton-aboutPage"`,
  },
  {
    route: '/services',
    filter: `_id == "singleton-servicesPage"`,
  },
])

const locations = {
  homePage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Home Page', href: '/'}],
    }),
  }),

  aboutPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'About Page', href: '/about'}],
    }),
  }),

  servicesPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Services Page', href: '/services'}],
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
