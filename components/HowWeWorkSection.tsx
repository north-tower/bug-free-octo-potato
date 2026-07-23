type SectionData = {
  eyebrow?: string | null
  title?: string | null
  titleAccent?: string | null
  description?: string | null
  badge?: string | null
  durationLabel?: string | null
  steps?: {number?: string | null; label?: string | null; _key: string}[] | null
  stats?: {value?: string | null; label?: string | null; _key: string}[] | null
}

const stepDotClasses = ['bg-primary', 'bg-emerald-400', 'bg-violet-400', 'bg-orange-400']

export default function HowWeWorkSection({section}: {section?: SectionData | null}) {
  if (!section) return null

  return (
    <section id="process" className="bg-background py-20 md:py-28">
      <h2 className="sr-only">How we work - video overview of our process</h2>

      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          {section.eyebrow ? (
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            {section.title}
            {section.titleAccent ? (
              <>
                <br />
                <span className="font-medium italic text-muted-foreground">{section.titleAccent}</span>
              </>
            ) : null}
          </h2>
          {section.description ? (
            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
              {section.description}
            </p>
          ) : null}

          <div className="group relative mt-12 aspect-video overflow-hidden rounded-2xl border border-border/70 bg-foreground md:mt-14">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="pointer-events-none absolute left-1/2 top-[30%] h-56 w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,hsla(var(--primary),0.25)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:opacity-55" />

            {section.badge ? (
              <span className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/65">
                {section.badge}
              </span>
            ) : null}

            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                {section.steps?.map((step, index) => (
                  <div
                    key={step._key}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm"
                  >
                    <span
                      className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${stepDotClasses[index % stepDotClasses.length]}`}
                    />
                    <span className="text-[11px] font-medium tracking-[0.04em] text-white/75">{step.label}</span>
                    <span className="text-[10px] text-white/45">{step.number}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-white/45">
                <span className="text-xs tracking-[0.04em]">{section.durationLabel}</span>
                <span className="rounded border border-white/20 px-1.5 py-0.5 text-[11px]">CC</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-white/25" />
            <div className="absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-white/25 [animation-delay:1.1s]" />
            <div className="absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span className="ml-1 h-0 w-0 border-b-[10px] border-l-[17px] border-t-[10px] border-b-transparent border-l-foreground border-t-transparent" />
            </div>
          </div>

          {section.stats?.length ? (
            <div className="mt-8 grid overflow-hidden rounded-xl border border-border/70 bg-border/70 md:mt-10 md:grid-cols-3">
              {section.stats.map((stat) => (
                <div
                  key={stat._key}
                  className="border-b border-border/70 bg-card p-4 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
