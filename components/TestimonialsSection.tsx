import { Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    text: "I can authoritatively say Websiteloom is the best web designer agency in Nakuru. The team went above and beyond to advise me on a feasible SEO strategy. I was highly impressed by their dual knowledge in web design and SEO, a rare combination.",
    name: "Expert Writer",
    role: "Content Professional",
    initials: "EW",
    avatarTone: "blue",
    stars: 5,
  },
  {
    text: "Peter explained everything clearly and patiently. I asked a lot of questions and never once felt like a bother. Then the website came out perfectly. These guys genuinely deserve every star.",
    name: "Paul Gachibu",
    role: "Business Owner",
    initials: "PG",
    avatarTone: "green",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <h2 className="sr-only">Testimonials from clients of Websiteloom</h2>

      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Client stories
          </p>
          <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Trusted by businesses
            <br />
            <span className="font-medium italic text-muted-foreground">across Nakuru</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-sm leading-relaxed text-muted-foreground">
            Real feedback from founders and professionals we have helped grow online.
          </p>

          <div className="mb-12 mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-foreground">5.0</span>
            <span className="h-3.5 w-px bg-border" />
            <span className="text-xs text-muted-foreground">2 verified reviews</span>
            <span className="h-3.5 w-px bg-border" />
            <span className="text-xs text-muted-foreground">100% recommend</span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="group relative flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-secondary/40"
              >
                <span className="pointer-events-none absolute right-7 top-5 select-none text-7xl font-extrabold leading-none text-foreground/5">
                  &quot;
                </span>

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold ${
                      t.avatarTone === "blue"
                        ? "bg-primary/15 text-primary"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {t.initials}
                  </span>

                  <div className="flex gap-0.5">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="flex-1 text-sm italic leading-relaxed text-muted-foreground">{t.text}</p>

                <div className="flex items-center justify-between gap-3 border-t border-border/70 pt-4">
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs tracking-[0.03em] text-muted-foreground">{t.role}</p>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-700">
                    Verified
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/70 bg-card px-5 py-4">
            <p className="text-sm text-muted-foreground">
              Reviews collected from <span className="font-semibold text-foreground">Google</span> and direct
              client feedback
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-secondary hover:text-foreground"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
