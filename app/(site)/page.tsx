import BlogTeaserSection from '@/components/BlogTeaserSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import HeroSection from '@/components/HeroSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import PortfolioSection from '@/components/PortfolioSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import {sanityFetch} from '@/sanity/lib/live'
import {
  HOME_BLOG_POSTS_QUERY,
  HOME_CASE_STUDIES_QUERY,
  HOME_PAGE_QUERY,
  HOME_PROJECTS_QUERY,
  HOME_SERVICES_QUERY,
  HOME_TESTIMONIALS_QUERY,
} from '@/sanity/lib/queries'

export default async function HomePage() {
  const {data: home} = await sanityFetch({query: HOME_PAGE_QUERY})
  const postLimit = Math.min(Math.max(home?.blogSection?.postCount || 3, 1), 6)

  const [{data: services}, {data: projects}, {data: caseStudies}, {data: testimonials}, {data: posts}] =
    await Promise.all([
      sanityFetch({query: HOME_SERVICES_QUERY}),
      sanityFetch({query: HOME_PROJECTS_QUERY}),
      sanityFetch({query: HOME_CASE_STUDIES_QUERY}),
      sanityFetch({query: HOME_TESTIMONIALS_QUERY}),
      sanityFetch({query: HOME_BLOG_POSTS_QUERY, params: {limit: postLimit}}),
    ])

  return (
    <>
      <HeroSection hero={home?.hero} />
      <ServicesSection section={home?.servicesSection} services={services ?? []} />
      <HowWeWorkSection section={home?.processSection} />
      <PortfolioSection section={home?.portfolioSection} projects={projects ?? []} />
      <CaseStudiesSection section={home?.caseStudiesSection} caseStudy={caseStudies?.[0] ?? null} />
      <TestimonialsSection section={home?.testimonialsSection} testimonials={testimonials ?? []} />
      <BlogTeaserSection section={home?.blogSection} posts={posts ?? []} />
    </>
  )
}
