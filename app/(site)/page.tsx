import CaseStudiesSection from '@/components/CaseStudiesSection'
import HeroSection from '@/components/HeroSection'
import HowWeWorkSection from '@/components/HowWeWorkSection'
import PortfolioSection from '@/components/PortfolioSection'
import ServicesSection from '@/components/ServicesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import {sanityFetch} from '@/sanity/lib/live'
import {
  HOME_CASE_STUDIES_QUERY,
  HOME_PAGE_QUERY,
  HOME_PROJECTS_QUERY,
  HOME_SERVICES_QUERY,
  HOME_TESTIMONIALS_QUERY,
} from '@/sanity/lib/queries'

export default async function HomePage() {
  const [{data: home}, {data: services}, {data: projects}, {data: caseStudies}, {data: testimonials}] =
    await Promise.all([
      sanityFetch({query: HOME_PAGE_QUERY}),
      sanityFetch({query: HOME_SERVICES_QUERY}),
      sanityFetch({query: HOME_PROJECTS_QUERY}),
      sanityFetch({query: HOME_CASE_STUDIES_QUERY}),
      sanityFetch({query: HOME_TESTIMONIALS_QUERY}),
    ])

  return (
    <>
      <HeroSection hero={home?.hero} />
      <ServicesSection section={home?.servicesSection} services={services ?? []} />
      <HowWeWorkSection section={home?.processSection} />
      <PortfolioSection section={home?.portfolioSection} projects={projects ?? []} />
      <CaseStudiesSection section={home?.caseStudiesSection} caseStudy={caseStudies?.[0] ?? null} />
      <TestimonialsSection section={home?.testimonialsSection} testimonials={testimonials ?? []} />
    </>
  )
}
