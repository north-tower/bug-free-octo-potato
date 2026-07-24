import {defineQuery} from 'next-sanity'

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage" && _id == "singleton-homePage"][0]{
  hero,
  servicesSection,
  processSection,
  portfolioSection,
  caseStudiesSection,
  testimonialsSection
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
