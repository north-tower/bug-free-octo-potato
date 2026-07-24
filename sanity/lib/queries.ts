import {defineQuery} from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage" && _id == "singleton-homePage"][0]{
  seoTitle,
  seoDescription,
  hero,
  servicesSection,
  processSection,
  portfolioSection,
  caseStudiesSection,
  testimonialsSection,
  blogSection
}`)

export const HOME_SERVICES_QUERY = defineQuery(`*[_type == "service"] | order(order asc){
  _id,
  title,
  number,
  tag,
  icon,
  description,
  items,
  stat,
  statLabel,
  ctaLabel,
  ctaHref
}`)

export const HOME_PROJECTS_QUERY = defineQuery(`*[_type == "project"] | order(order asc){
  _id,
  title,
  tag,
  category,
  featured,
  image
}`)

export const HOME_CASE_STUDIES_QUERY = defineQuery(`*[_type == "caseStudy" && featured == true] | order(order asc)[0...1]{
  _id,
  title,
  industry,
  metrics,
  phases,
  resultPills
}`)

export const HOME_TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial" && featured == true] | order(order asc){
  _id,
  name,
  role,
  quote,
  initials,
  avatarTone,
  rating,
  verified
}`)

export const HOME_BLOG_POSTS_QUERY = defineQuery(`*[_type == "post"] | order(featured desc, publishedAt desc)[0...$limit]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  featured,
  coverImage
}`)

export const ABOUT_PAGE_QUERY = defineQuery(`*[_type == "aboutPage" && _id == "singleton-aboutPage"][0]{
  seoDescription,
  hero,
  stats,
  story{
    eyebrow,
    title,
    paragraphs,
    image
  },
  purpose,
  values,
  team{
    eyebrow,
    title,
    body,
    members[]{
      _key,
      name,
      role,
      tags,
      image
    }
  },
  cta
}`)

export const SERVICES_PAGE_QUERY = defineQuery(`*[_type == "servicesPage" && _id == "singleton-servicesPage"][0]{
  seoDescription,
  hero,
  offerings,
  industries,
  process,
  packages,
  cta
}`)

export const CONTACT_PAGE_QUERY = defineQuery(`*[_type == "contactPage" && _id == "singleton-contactPage"][0]{
  seoDescription,
  formSection,
  visitSection
}`)

export const SITE_SETTINGS_QUERY = defineQuery(`*[_type == "siteSettings" && _id == "singleton-siteSettings"][0]{
  siteName,
  logo,
  seo,
  navbar,
  footer
}`)

export const BLOG_PAGE_QUERY = defineQuery(`*[_type == "blogPage" && _id == "singleton-blogPage"][0]{
  seoDescription,
  hero
}`)

export const BLOG_POSTS_QUERY = defineQuery(`*[_type == "post"] | order(publishedAt desc){
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  featured,
  coverImage
}`)

export const BLOG_POST_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  coverImage,
  body
}`)

export const BLOG_SLUGS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`)

export const LEGAL_PAGE_QUERY = defineQuery(`*[_type == "legalPage" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  seoDescription,
  lastUpdated,
  body
}`)

export const LEGAL_SLUGS_QUERY = defineQuery(`*[_type == "legalPage" && defined(slug.current)]{
  "slug": slug.current
}`)
