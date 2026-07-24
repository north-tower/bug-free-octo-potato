import {buildPageMetadata} from '@/lib/metadata'
import {sanityFetch} from '@/sanity/lib/live'
import {SERVICES_PAGE_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Globe,
  GraduationCap,
  Landmark,
  PenTool,
  Search,
  ShoppingCart,
  Stethoscope,
} from 'lucide-react'

const offeringIcons = {
  globe: Globe,
  search: Search,
  pen: PenTool,
} as const

const industryIcons = {
  'shopping-cart': ShoppingCart,
  building: Building2,
  stethoscope: Stethoscope,
  graduation: GraduationCap,
  landmark: Landmark,
  'bar-chart': BarChart3,
} as const

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await sanityFetch({query: SERVICES_PAGE_QUERY, stega: false})

  return buildPageMetadata({
    title: 'Services',
    description:
      data?.seoDescription ||
      'Web design, SEO, and copywriting packages for businesses across Kenya — Starter, Business, and E-Commerce.',
    path: '/services',
  })
}

export default async function ServicesPage() {
  const {data} = await sanityFetch({query: SERVICES_PAGE_QUERY})

  if (!data) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">Services content is not available yet.</p>
      </section>
    )
  }

  return (
    <>
      <section className="py-20 md:py-28" style={{background: 'var(--gradient-hero)'}}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            {data.hero?.headline}
          </h1>
          {data.hero?.body ? (
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {data.hero.body}
            </p>
          ) : null}
          {data.hero?.ctaLabel && data.hero?.ctaHref ? (
            <Link
              href={data.hero.ctaHref}
              className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
            >
              {data.hero.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </section>

      {data.offerings?.items?.length ? (
        <section id="services" className="bg-background py-20 md:py-28">
          <div className="container px-4">
            <div className="mb-14 text-center">
              {data.offerings.title ? (
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  {data.offerings.title}
                </h2>
              ) : null}
              {data.offerings.subtitle ? (
                <p className="mt-3 text-base text-muted-foreground">{data.offerings.subtitle}</p>
              ) : null}
            </div>
            <div className="mx-auto max-w-6xl space-y-16">
              {data.offerings.items.map((service, index) => {
                const Icon =
                  offeringIcons[(service.icon as keyof typeof offeringIcons) || 'globe'] || Globe

                return (
                  <div
                    key={service._key}
                    className={`grid items-center gap-10 md:grid-cols-2 ${
                      index % 2 !== 0 ? 'md:[direction:rtl]' : ''
                    }`}
                  >
                    <div className={index % 2 !== 0 ? 'md:[direction:ltr]' : ''}>
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-foreground">{service.title}</h3>
                      {service.description ? (
                        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                          {service.description}
                        </p>
                      ) : null}
                      {service.features?.length ? (
                        <ul className="space-y-3">
                          {service.features.filter(Boolean).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-sm text-foreground"
                            >
                              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                    <div
                      className={`flex h-72 items-center justify-center rounded-xl md:h-80 ${
                        index % 2 !== 0 ? 'md:[direction:ltr]' : ''
                      }`}
                      style={{background: 'var(--gradient-primary)'}}
                    >
                      <Icon className="h-20 w-20 text-primary-foreground/30" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      {data.industries?.items?.length ? (
        <section className="bg-secondary py-20 md:py-28">
          <div className="container px-4">
            <div className="mb-14 text-center">
              {data.industries.title ? (
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  {data.industries.title}
                </h2>
              ) : null}
              {data.industries.subtitle ? (
                <p className="mt-3 text-base text-muted-foreground">{data.industries.subtitle}</p>
              ) : null}
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {data.industries.items.map((industry) => {
                const Icon =
                  industryIcons[(industry.icon as keyof typeof industryIcons) || 'building'] ||
                  Building2

                return (
                  <div
                    key={industry._key}
                    className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-foreground">{industry.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {industry.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      {data.process?.steps?.length ? (
        <section className="bg-background py-20 md:py-28">
          <div className="container px-4">
            <div className="mb-14 text-center">
              {data.process.title ? (
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  {data.process.title}
                </h2>
              ) : null}
              {data.process.subtitle ? (
                <p className="mt-3 text-base text-muted-foreground">{data.process.subtitle}</p>
              ) : null}
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {data.process.steps.map((item) => (
                <div
                  key={item._key}
                  className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="mb-3 text-5xl font-extrabold text-primary/15">{item.step}</div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {data.packages?.items?.length ? (
        <section className="bg-secondary py-20 md:py-28">
          <div className="container px-4">
            <div className="mb-14 text-center">
              {data.packages.title ? (
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  {data.packages.title}
                </h2>
              ) : null}
              {data.packages.subtitle ? (
                <p className="mt-3 text-base text-muted-foreground">{data.packages.subtitle}</p>
              ) : null}
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
              {data.packages.items.map((pkg) => (
                <div
                  key={pkg._key}
                  className={`flex flex-col overflow-hidden rounded-xl border bg-card ${
                    pkg.highlighted
                      ? 'scale-[1.02] border-primary shadow-[var(--shadow-button)]'
                      : 'border-border shadow-[var(--shadow-card)]'
                  }`}
                >
                  {pkg.highlighted ? (
                    <div
                      className="py-2 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground"
                      style={{background: 'var(--gradient-primary)'}}
                    >
                      Most Popular
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                    {pkg.description ? (
                      <p className="mb-5 mt-1 text-sm text-muted-foreground">{pkg.description}</p>
                    ) : null}
                    <p className="mb-6 text-3xl font-extrabold text-primary">{pkg.price}</p>
                    {pkg.features?.length ? (
                      <ul className="mb-8 flex-1 space-y-3">
                        {pkg.features.filter(Boolean).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-foreground"
                          >
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {pkg.ctaLabel && pkg.ctaHref ? (
                      <Link
                        href={pkg.ctaHref}
                        className={`block h-12 text-center text-sm font-semibold leading-[3rem] transition-opacity hover:opacity-90 ${
                          pkg.highlighted
                            ? 'rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-button)]'
                            : 'rounded-lg border border-primary text-primary hover:bg-primary/5'
                        }`}
                      >
                        {pkg.ctaLabel}
                      </Link>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {data.cta ? (
        <section className="py-20" style={{background: 'var(--gradient-hero)'}}>
          <div className="container mx-auto max-w-2xl px-4 text-center">
            {data.cta.title ? (
              <h2 className="mb-4 text-2xl font-extrabold text-primary-foreground md:text-3xl">
                {data.cta.title}
              </h2>
            ) : null}
            {data.cta.body ? (
              <p className="mb-8 text-base text-primary-foreground/80">{data.cta.body}</p>
            ) : null}
            {data.cta.ctaLabel && data.cta.ctaHref ? (
              <Link
                href={data.cta.ctaHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
              >
                {data.cta.ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  )
}
