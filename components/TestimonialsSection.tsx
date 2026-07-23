import {Star} from 'lucide-react'
import Link from 'next/link'

type TestimonialItem = {
  _id: string
  name?: string | null
  role?: string | null
  quote?: string | null
  initials?: string | null
  avatarTone?: string | null
  rating?: number | null
  verified?: boolean | null
}

type SectionData = {
  eyebrow?: string | null
  title?: string | null
  titleAccent?: string | null
  description?: string | null
  ratingValue?: string | null
  ratingSummary?: string | null
  recommendLabel?: string | null
  sourceNote?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
}

export default function TestimonialsSection({
  section,
  testimonials,
}: {
  section?: SectionData | null
  testimonials: TestimonialItem[]
}) {
  if (!testimonials.length) return null

  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <h2 className="sr-only">Testimonials from clients of Websiteloom</h2>

      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          {section?.eyebrow ? (
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            {section?.title}
            {section?.titleAccent ? (
              <>
                <br />
                <span className="font-medium italic text-muted-foreground">{section.titleAccent}</span>
              </>
            ) : null}
          </h2>
          {section?.description ? (
            <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
              {section.description}
            </p>
          ) : null}

          <div className="mb-12 mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex gap-0.5">
              {Array.from({length: 5}).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            {section?.ratingValue ? (
              <span className="text-sm font-extrabold text-foreground">{section.ratingValue}</span>
            ) : null}
            {section?.ratingSummary ? (
              <>
                <span className="h-3.5 w-px bg-border" />
                <span className="text-xs text-muted-foreground">{section.ratingSummary}</span>
              </>
            ) : null}
            {section?.recommendLabel ? (
              <>
                <span className="h-3.5 w-px bg-border" />
                <span className="text-xs text-muted-foreground">{section.recommendLabel}</span>
              </>
            ) : null}
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t._id}
                className="group relative flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <span className="pointer-events-none absolute right-7 top-5 select-none text-7xl font-extrabold leading-none text-foreground/5">
                  &quot;
                </span>

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${
                      t.avatarTone === 'green'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-primary/15 text-primary'
                    }`}
                  >
                    {t.initials}
                  </span>

                  <div className="flex gap-0.5">
                    {Array.from({length: t.rating || 5}).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {t.quote ? (
                  <p className="flex-1 text-sm italic leading-relaxed text-muted-foreground">{t.quote}</p>
                ) : null}

                <div className="flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs tracking-[0.03em] text-muted-foreground">{t.role}</p>
                  </div>
                  {t.verified ? (
                    <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                      Verified
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/70 bg-card px-5 py-4">
            {section?.sourceNote ? (
              <p className="text-sm text-muted-foreground">{section.sourceNote}</p>
            ) : (
              <span />
            )}
            {section?.ctaLabel && section?.ctaHref ? (
              <Link
                href={section.ctaHref}
                className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-secondary hover:text-foreground"
              >
                {section.ctaLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
