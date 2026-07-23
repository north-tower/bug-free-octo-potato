import {ArrowRight, Globe, PenSquare, Search} from 'lucide-react'
import Link from 'next/link'

const iconMap = {
  globe: Globe,
  search: Search,
  pen: PenSquare,
} as const

type ServiceItem = {
  _id: string
  title?: string | null
  number?: string | null
  tag?: string | null
  icon?: string | null
  description?: string | null
  items?: (string | null)[] | null
  stat?: string | null
  statLabel?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
}

type SectionData = {
  eyebrow?: string | null
  title?: string | null
  titleAccent?: string | null
  description?: string | null
}

export default function ServicesSection({
  section,
  services,
}: {
  section?: SectionData | null
  services: ServiceItem[]
}) {
  if (!services.length) return null

  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 border-b border-border/70 pb-8 md:mb-14 md:flex md:items-end md:justify-between md:gap-8">
            <div>
              {section?.eyebrow ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {section.eyebrow}
                </p>
              ) : null}
              <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                {section?.title}
                {section?.titleAccent ? (
                  <>
                    <br />
                    <span className="font-medium italic text-muted-foreground">{section.titleAccent}</span>
                  </>
                ) : null}
              </h2>
            </div>
            {section?.description ? (
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-0">
                {section.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid w-full overflow-hidden rounded-xl border border-border/70 bg-border/60 md:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[(service.icon as keyof typeof iconMap) || 'globe'] || Globe

            return (
              <div
                key={service._id}
                className="group relative flex flex-col gap-5 bg-card p-7 transition-colors hover:bg-muted/40"
              >
                {service.number ? (
                  <span className="pointer-events-none absolute right-4 top-0 text-7xl font-extrabold leading-none text-foreground/[0.035] transition-opacity group-hover:opacity-[0.07]">
                    {service.number}
                  </span>
                ) : null}

                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  {service.tag ? (
                    <span className="rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {service.tag}
                    </span>
                  ) : null}
                </div>

                <h3 className="text-xl font-bold leading-tight text-foreground">{service.title}</h3>
                {service.description ? (
                  <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                ) : null}

                <div className="h-px w-full bg-border/80" />

                {service.items?.length ? (
                  <ul className="flex flex-1 flex-col gap-2">
                    {service.items.filter(Boolean).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto flex items-end justify-between gap-3">
                  <div>
                    {service.stat ? (
                      <p className="text-2xl font-extrabold text-primary">{service.stat}</p>
                    ) : null}
                    {service.statLabel ? (
                      <p className="text-xs text-muted-foreground">{service.statLabel}</p>
                    ) : null}
                  </div>
                  {service.ctaLabel && service.ctaHref ? (
                    <Link
                      href={service.ctaHref}
                      className="inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-70 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                    >
                      {service.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
