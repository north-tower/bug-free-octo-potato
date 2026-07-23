import {AlertTriangle, Lightbulb, TrendingUp} from 'lucide-react'

type CaseStudyItem = {
  _id: string
  title?: string | null
  industry?: string | null
  metrics?: {
    _key: string
    value?: string | null
    label?: string | null
    tone?: string | null
  }[] | null
  phases?: {
    _key: string
    number?: string | null
    label?: string | null
    body?: string | null
    tone?: string | null
  }[] | null
  resultPills?: (string | null)[] | null
}

type SectionData = {
  eyebrow?: string | null
  title?: string | null
  titleAccent?: string | null
  description?: string | null
}

const phaseIcons = {
  problem: AlertTriangle,
  solution: Lightbulb,
  results: TrendingUp,
} as const

export default function CaseStudiesSection({
  section,
  caseStudy,
}: {
  section?: SectionData | null
  caseStudy?: CaseStudyItem | null
}) {
  if (!caseStudy) return null

  return (
    <section id="case-studies" className="bg-secondary py-20 md:py-28">
      <h2 className="sr-only">Case studies section - real client problems and results</h2>

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

          <article className="mt-12 overflow-hidden rounded-2xl border border-border/70 bg-card">
            <div className="flex flex-col gap-6 border-b border-border/70 p-6 md:flex-row md:items-start md:justify-between md:p-8">
              <div>
                {caseStudy.industry ? (
                  <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                    {caseStudy.industry}
                  </span>
                ) : null}
                <h4 className="text-2xl font-extrabold leading-tight text-foreground md:text-3xl">
                  {caseStudy.title}
                </h4>
              </div>

              <div className="flex gap-6 md:gap-8">
                {caseStudy.metrics?.map((metric) => (
                  <div key={metric._key} className="text-left md:text-right">
                    <p
                      className={`text-3xl font-extrabold leading-none ${
                        metric.tone === 'success' ? 'text-emerald-600' : 'text-primary'
                      }`}
                    >
                      {metric.value}
                    </p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              {caseStudy.phases?.map((phase, index) => {
                const Icon =
                  phaseIcons[(phase.tone as keyof typeof phaseIcons) || 'solution'] || Lightbulb
                const toneClasses =
                  phase.tone === 'problem'
                    ? {
                        iconBg: 'bg-orange-100',
                        iconColor: 'text-orange-700',
                        numColor: 'text-orange-500',
                        labelColor: 'text-orange-700',
                      }
                    : phase.tone === 'solution'
                      ? {
                          iconBg: 'bg-primary/15',
                          iconColor: 'text-primary',
                          numColor: 'text-primary',
                          labelColor: 'text-primary',
                        }
                      : {
                          iconBg: 'bg-emerald-100',
                          iconColor: 'text-emerald-700',
                          numColor: 'text-emerald-500',
                          labelColor: 'text-emerald-700',
                        }

                return (
                  <div
                    key={phase._key}
                    className={`p-6 md:p-7 ${
                      index < (caseStudy.phases?.length || 0) - 1
                        ? 'border-b border-border/70 md:border-b-0 md:border-r'
                        : ''
                    }`}
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-lg ${toneClasses.iconBg} ${toneClasses.iconColor}`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className={`text-[10px] font-bold tracking-[0.08em] ${toneClasses.numColor}`}>
                        {phase.number}
                      </span>
                    </div>
                    <p className={`mb-2 text-xs font-bold uppercase tracking-[0.06em] ${toneClasses.labelColor}`}>
                      {phase.label}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{phase.body}</p>
                  </div>
                )
              })}
            </div>

            {caseStudy.resultPills?.length ? (
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 bg-secondary/50 px-6 py-5 md:px-7">
                {caseStudy.resultPills.filter(Boolean).map((pill) => (
                  <p key={pill} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{pill}</span>
                  </p>
                ))}
              </div>
            ) : null}
          </article>
        </div>
      </div>
    </section>
  )
}
