import { AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";

const caseStudy = {
  industry: "Publishing · WordPress",
  metrics: [
    { value: "300%", label: "book sales increase", valueClass: "text-emerald-600" },
    { value: "<2s", label: "page load time", valueClass: "text-primary" },
  ],
  phases: [
    {
      number: "01",
      label: "The Problem",
      text: (
        <>
          An author needed a place to share stories and sell books, but her old WordPress site was a mess,
          loading in <strong className="font-semibold text-foreground">12 seconds</strong>. She wanted a
          minimalist redesign built from scratch.
        </>
      ),
      icon: AlertTriangle,
      tone: "problem",
    },
    {
      number: "02",
      label: "Our Solution",
      text: (
        <>
          We turned her sketch into a live site in one week, replaced the bloated theme with{" "}
          <strong className="font-semibold text-foreground">GeneratePress</strong>, integrated{" "}
          <strong className="font-semibold text-foreground">Paystack</strong>, and custom-coded every key
          detail.
        </>
      ),
      icon: Lightbulb,
      tone: "solution",
    },
    {
      number: "03",
      label: "The Results",
      text: (
        <>
          Load time dropped from 12s to{" "}
          <strong className="font-semibold text-foreground">under 2 seconds</strong>. The author loved the
          experience, and book sales increased by{" "}
          <strong className="font-semibold text-foreground">300%</strong> within months.
        </>
      ),
      icon: TrendingUp,
      tone: "results",
    },
  ],
  resultPills: [
    "Delivered in 1 week",
    "Load time: 12s -> <2s",
    "Book sales up 300%",
    "Custom WordPress + Paystack",
  ],
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="bg-secondary py-20 md:py-28">
      <h2 className="sr-only">Case studies section - real client problems and results</h2>

      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Case studies
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Real problems.
            <br />
            <span className="font-medium italic text-muted-foreground">Real results.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
            A look inside how we think, build, and deliver for our clients.
          </p>

          <article className="mt-12 overflow-hidden rounded-2xl border border-border/70 bg-card">
            <div className="flex flex-col gap-6 border-b border-border/70 p-6 md:flex-row md:items-start md:justify-between md:p-8">
              <div>
                <span className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {caseStudy.industry}
                </span>
                <h4 className="text-2xl font-extrabold leading-tight text-foreground md:text-3xl">
                  Building a Personal Blog
                  <br />
                  for an Author
                </h4>
              </div>

              <div className="flex gap-6 md:gap-8">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="text-left md:text-right">
                    <p className={`text-3xl font-extrabold leading-none ${metric.valueClass}`}>{metric.value}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3">
              {caseStudy.phases.map((phase, index) => {
                const Icon = phase.icon;
                const toneClasses =
                  phase.tone === "problem"
                    ? {
                        iconBg: "bg-orange-100",
                        iconColor: "text-orange-700",
                        numColor: "text-orange-500",
                        labelColor: "text-orange-700",
                      }
                    : phase.tone === "solution"
                      ? {
                          iconBg: "bg-primary/15",
                          iconColor: "text-primary",
                          numColor: "text-primary",
                          labelColor: "text-primary",
                        }
                      : {
                          iconBg: "bg-emerald-100",
                          iconColor: "text-emerald-700",
                          numColor: "text-emerald-500",
                          labelColor: "text-emerald-700",
                        };

                return (
                  <div
                    key={phase.number}
                    className={`p-6 md:p-7 ${index < caseStudy.phases.length - 1 ? "border-b border-border/70 md:border-b-0 md:border-r" : ""}`}
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
                    <p className="text-sm leading-relaxed text-muted-foreground">{phase.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border/70 bg-secondary/50 px-6 py-5 md:px-7">
              {caseStudy.resultPills.map((pill) => (
                <p key={pill} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>{pill}</span>
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
