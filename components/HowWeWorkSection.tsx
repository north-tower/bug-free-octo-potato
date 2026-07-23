const HowWeWorkSection = () => {
  const steps = [
    { label: "Discovery", number: "01", dotClass: "bg-primary" },
    { label: "Strategy", number: "02", dotClass: "bg-emerald-400" },
    { label: "Build", number: "03", dotClass: "bg-violet-400" },
    { label: "Launch", number: "04", dotClass: "bg-orange-400" },
  ];

  const stats = [
    { value: "2 wks", label: "avg. discovery to kickoff" },
    { value: "94%", label: "on-time delivery rate" },
    { value: "40+", label: "industries served" },
  ];

  return (
    <section id="process" className="bg-background py-20 md:py-28">
      <h2 className="sr-only">How we work - video overview of our process</h2>

      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Our process
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            See how we <span className="font-medium italic text-muted-foreground">transform</span>
            <br />
            businesses
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            From first brief to final launch - a proven process that delivers results, every time.
          </p>

          <div className="group relative mt-12 aspect-video overflow-hidden rounded-2xl border border-border/70 bg-foreground md:mt-14">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="pointer-events-none absolute left-1/2 top-[30%] h-56 w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,hsla(var(--primary),0.25)_0%,transparent_70%)]" />
            <div className="absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:opacity-55" />

            <span className="absolute right-5 top-5 z-20 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white/65">
              Coming soon
            </span>

            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between p-4 md:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-sm"
                  >
                    <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${step.dotClass}`} />
                    <span className="text-[11px] font-medium tracking-[0.04em] text-white/75">{step.label}</span>
                    <span className="text-[10px] text-white/45">{step.number}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-white/45">
                <span className="text-xs tracking-[0.04em]">4 min 32 sec</span>
                <span className="rounded border border-white/20 px-1.5 py-0.5 text-[11px]">CC</span>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-white/25" />
            <div className="absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-white/25 [animation-delay:1.1s]" />
            <div className="absolute left-1/2 top-1/2 z-30 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span className="ml-1 h-0 w-0 border-b-[10px] border-l-[17px] border-t-[10px] border-b-transparent border-l-foreground border-t-transparent" />
            </div>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-xl border border-border/70 bg-border/70 md:mt-10 md:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-border/70 bg-card p-4 text-center last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
