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
  {
    route: '/contact',
    filter: `_id == "singleton-contactPage"`,
  },
  {
    route: '/blog',
    filter: `_id == "singleton-blogPage"`,
  },
  {
    route: '/blog/:slug',
    filter: `_type == "post" && slug.current == $slug`,
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

  contactPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Contact Page', href: '/contact'}],
    }),
  }),

  blogPage: defineLocations({
    select: {title: 'title'},
    resolve: (doc) => ({
      locations: [{title: doc?.title || 'Blog Page', href: '/blog'}],
    }),
  }),

  post: defineLocations({
    select: {title: 'title', slug: 'slug.current'},
    resolve: (doc) => ({
      locations: [
        {
          title: doc?.title || 'Blog Post',
          href: doc?.slug ? `/blog/${doc.slug}` : '/blog',
        },
      ],
    }),
  }),

  siteSettings: defineLocations({
    message: 'Navbar and footer appear on every page',
    tone: 'caution',
  }),

  contactSubmission: defineLocations({
    message: 'Form submissions are managed in Studio only',
    tone: 'caution',
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
