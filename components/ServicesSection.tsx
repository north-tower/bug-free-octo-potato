import { ArrowRight, Globe, PenSquare, Search } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    tag: "Development",
    stat: "120+",
    statLabel: "projects shipped",
    Icon: Globe,
    title: "Web Design",
    description:
      "We build websites that help you sell, get inquiries, and look credible online. From online stores to business websites for real estate companies, doctors, engineers, and logistics firms.",
    items: [
      "E-commerce Websites (Sell Products & Digital Goods)",
      "Business Websites (Lead Generation)",
      "Personal Blogs (Authentic Connection)",
      "Mobile-Responsive & Fast-Loading",
    ],
  },
  {
    number: "02",
    tag: "Strategy",
    stat: "3.4x",
    statLabel: "avg. ROAS improvement",
    Icon: Search,
    title: "SEO Services",
    description:
      "Our SEO services go beyond Google Business Profiles. We help you build high-quality backlinks, get mentions on reputable websites, and refresh content that ranks.",
    items: [
      "Local SEO (GBP Setup & Optimization)",
      "GBP Consultation",
      "AI-Powered SEO",
      "Technical SEO (Speed Optimization)",
      "Google Search Console Error Removal",
    ],
  },
  {
    number: "03",
    tag: "Content",
    stat: "98%",
    statLabel: "client satisfaction",
    Icon: PenSquare,
    title: "Copywriting",
    description:
      "We specialize in SEO copywriting that turns visitors into leads, buyers, or meaningful actions, while positioning your business as a thought leader in your field.",
    items: [
      "SEO-Optimized Content Writing",
      "Content Refresh & Updates",
      "Website Copy That Converts",
      "Blog Posts & Articles",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-secondary py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 border-b border-border/70 pb-8 md:mb-14 md:flex md:items-end md:justify-between md:gap-8">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What we do
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                Digital solutions
                <br />
                <span className="font-medium italic text-muted-foreground">built to perform</span>
              </h2>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:mt-0">
              Comprehensive digital services tailored to help your business grow, scale, and stand out.
            </p>
          </div>
        </div>

        <div className="grid w-full overflow-hidden rounded-xl border border-border/70 bg-border/60 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col gap-5 bg-card p-7 transition-colors hover:bg-muted/40"
            >
              <span className="pointer-events-none absolute right-4 top-0 text-7xl font-extrabold leading-none text-foreground/[0.035] transition-opacity group-hover:opacity-[0.07]">
                {service.number}
              </span>

              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <service.Icon className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {service.tag}
                </span>
              </div>

              <h3 className="text-xl font-bold leading-tight text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="h-px w-full bg-border/80" />

              <ul className="flex flex-1 flex-col gap-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-end justify-between gap-3">
                <div>
                  <p className="text-2xl font-extrabold text-primary">{service.stat}</p>
                  <p className="text-xs text-muted-foreground">{service.statLabel}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-sm font-medium text-foreground opacity-70 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
