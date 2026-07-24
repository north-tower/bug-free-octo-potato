import ContactSection from '@/components/ContactSection'
import {sanityFetch} from '@/sanity/lib/live'
import {CONTACT_PAGE_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'
import {ArrowUpRight, Clock3, MapPin, Phone} from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await sanityFetch({query: CONTACT_PAGE_QUERY, stega: false})

  return {
    title: 'Contact',
    description:
      data?.seoDescription ||
      'Get in touch with Websiteloom in Nakuru. Free consultation for web design, SEO, and copywriting projects.',
  }
}

export default async function ContactPage() {
  const {data} = await sanityFetch({query: CONTACT_PAGE_QUERY})

  if (!data) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">Contact content is not available yet.</p>
      </section>
    )
  }

  const visit = data.visitSection

  return (
    <>
      <ContactSection data={data.formSection} />

      {visit ? (
        <section className="bg-background pb-20 md:pb-28">
          <div className="container px-4">
            <div className="mx-auto max-w-5xl">
              <div className="mb-8 text-center">
                {visit.eyebrow ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {visit.eyebrow}
                  </p>
                ) : null}
                <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                  {visit.title}{' '}
                  {visit.titleAccent ? (
                    <span className="font-medium italic text-muted-foreground">
                      {visit.titleAccent}
                    </span>
                  ) : null}
                </h2>
                {visit.body ? (
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {visit.body}
                  </p>
                ) : null}
              </div>

              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                {visit.location ? (
                  <div className="rounded-xl border border-border/70 bg-card p-4">
                    <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {visit.locationLabel || 'Location'}
                    </p>
                    <p className="text-sm text-foreground">{visit.location}</p>
                  </div>
                ) : null}
                {visit.phone ? (
                  <div className="rounded-xl border border-border/70 bg-card p-4">
                    <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      {visit.phoneLabel || 'Phone'}
                    </p>
                    <a
                      href={visit.phoneHref || `tel:${visit.phone.replace(/\s/g, '')}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {visit.phone}
                    </a>
                  </div>
                ) : null}
                {visit.hours ? (
                  <div className="rounded-xl border border-border/70 bg-card p-4">
                    <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      <Clock3 className="h-3.5 w-3.5" />
                      {visit.hoursLabel || 'Hours'}
                    </p>
                    <p className="text-sm text-foreground">{visit.hours}</p>
                  </div>
                ) : null}
              </div>

              {visit.mapEmbedUrl ? (
                <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
                  <iframe
                    title="Websiteloom office location map"
                    src={visit.mapEmbedUrl}
                    className="h-[420px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              ) : null}

              {visit.mapLinkUrl ? (
                <div className="mt-5 flex justify-end">
                  <a
                    href={visit.mapLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-secondary hover:text-foreground"
                  >
                    {visit.mapLinkLabel || 'Open in Google Maps'}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
