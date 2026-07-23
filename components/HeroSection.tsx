import { ArrowRight, Check, Sparkles } from 'lucide-react'
import Link from 'next/link'

type HeroData = {
  eyebrow?: string | null
  headline?: string | null
  headlineAccent?: string | null
  body?: string | null
  primaryCtaLabel?: string | null
  primaryCtaHref?: string | null
  secondaryCtaLabel?: string | null
  secondaryCtaHref?: string | null
  highlights?: (string | null)[] | null
  stats?: {value?: string | null; label?: string | null; _key: string}[] | null
  statsDisclaimer?: string | null
  previewCaption?: string | null
}

function renderHeadline(headline?: string | null, accent?: string | null) {
  if (!headline) return null
  if (!accent || !headline.includes(accent)) {
    return headline
  }

  const [before, ...rest] = headline.split(accent)
  const after = rest.join(accent)

  return (
    <>
      {before}
      <span className="text-primary-foreground/90 underline decoration-white/35 underline-offset-8">
        {accent}
      </span>
      {after}
    </>
  )
}

export default function HeroSection({hero}: {hero?: HeroData | null}) {
  if (!hero) return null

  return (
    <section id="home" className="relative overflow-hidden" style={{background: 'var(--gradient-hero)'}}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container relative grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="text-left">
          {hero.eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-primary-foreground ring-1 ring-white/15">
              <Sparkles className="h-4 w-4" />
              {hero.eyebrow}
            </div>
          ) : null}

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            {renderHeadline(hero.headline, hero.headlineAccent)}
          </h1>

          {hero.body ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {hero.body}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            {hero.primaryCtaLabel && hero.primaryCtaHref ? (
              <Link
                href={hero.primaryCtaHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-background px-6 font-bold text-primary shadow-[var(--shadow-button)] transition-colors hover:bg-background/90"
              >
                {hero.primaryCtaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            {hero.secondaryCtaLabel && hero.secondaryCtaHref ? (
              <a
                href={hero.secondaryCtaHref}
                className="inline-flex h-12 items-center justify-center rounded-lg bg-white/10 px-6 font-semibold text-primary-foreground ring-1 ring-white/20 transition hover:bg-white/15"
              >
                {hero.secondaryCtaLabel}
              </a>
            ) : null}
          </div>

          {hero.highlights?.length ? (
            <ul className="mt-8 grid gap-2 text-sm text-primary-foreground/85 sm:grid-cols-2">
              {hero.highlights.filter(Boolean).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {hero.stats?.length ? (
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              {hero.stats.map((stat) => (
                <div key={stat._key}>
                  <div className="text-2xl font-extrabold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/75">{stat.label}</div>
                </div>
              ))}
            </div>
          ) : null}

          {hero.statsDisclaimer ? (
            <p className="mt-3 text-xs text-primary-foreground/65">{hero.statsDisclaimer}</p>
          ) : null}
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-white/10 blur-2xl" />

          <div className="overflow-hidden rounded-3xl bg-background/95 shadow-2xl ring-1 ring-white/25">
            <div className="flex items-center gap-2 border-b border-border/60 bg-muted/60 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
              </div>
              <div className="ml-3 flex-1 rounded-md bg-background px-3 py-1 text-xs text-muted-foreground">
                websiteloom.co.ke
              </div>
            </div>

            <div className="p-6">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <div className="h-4 w-24 rounded bg-muted" />
                  <div className="h-8 w-3/4 rounded bg-muted" />
                  <div className="h-4 w-2/3 rounded bg-muted" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="rounded-xl bg-card p-4 shadow-[var(--shadow-card)]">
                      <div className="h-4 w-10 rounded bg-muted" />
                      <div className="mt-3 h-6 w-20 rounded bg-muted" />
                      <div className="mt-2 h-3 w-16 rounded bg-muted" />
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-28 rounded bg-muted" />
                    <div className="h-9 w-24 rounded-lg bg-primary" />
                  </div>
                  <div className="mt-4 grid gap-2">
                    <div className="h-3 w-full rounded bg-muted" />
                    <div className="h-3 w-5/6 rounded bg-muted" />
                    <div className="h-3 w-2/3 rounded bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {hero.previewCaption ? (
            <div className="mt-4 text-center text-xs text-primary-foreground/70">{hero.previewCaption}</div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
