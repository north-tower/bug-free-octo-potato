import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Eye, Heart, Target, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Websiteloom is a Nakuru-based web design and digital marketing agency helping businesses across Kenya build powerful online presences.",
};

const stats = [
  { number: "100+", label: "Websites Built", sublabel: "and counting" },
  { number: "50+", label: "Happy Clients", sublabel: "across Kenya" },
  { number: "3+", label: "Years Experience", sublabel: "in the industry" },
  { number: "24/7", label: "Online Support", sublabel: "always here" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every website we build is crafted with precision, tested rigorously, and optimized for performance.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "We deliver fast-loading websites on tight timelines without cutting corners.",
  },
  {
    icon: Heart,
    title: "Client-Centered",
    description: "Your success is our success. We listen, adapt, and go above and beyond for every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with you throughout the process so the final product is exactly what you envisioned.",
  },
];

const missionVision = [
  {
    icon: Target,
    label: "Mission",
    title: "Drive growth, build credibility.",
    body: "To empower Kenyan businesses with world-class websites and digital marketing strategies that drive growth, build credibility, and turn visitors into loyal customers and supporters.",
  },
  {
    icon: Eye,
    label: "Vision",
    title: "East Africa's most trusted agency.",
    body: "To be East Africa's most trusted web design agency known for delivering beautiful, fast, and results-driven digital experiences that help businesses thrive online.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            Nakuru-Based - Kenya-Focused
          </p>
          <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            We Craft Digital Experiences That Convert
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Websiteloom is a web design and digital marketing agency helping businesses across Kenya build
            powerful, profitable online presences.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
          >
            Start your project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
              >
                <p className="text-3xl font-extrabold text-primary">{stat.number}</p>
                <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
              <Image
                src="/images/about-office.jpg"
                alt="Websiteloom office"
                width={800}
                height={600}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Our Story</p>
              <h2 className="mb-5 text-3xl font-extrabold text-foreground md:text-4xl">
                Built for Kenya, built to last.
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Websiteloom was founded with a simple mission: to make professional, high-performing websites
                accessible to businesses of all sizes across Kenya.
              </p>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                From our office on Kenyatta Avenue in Nakuru City, we have grown into a trusted team of web
                designers, SEO specialists, and copywriters who deliver real results.
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Today, we serve clients across Kenya, from e-commerce startups to established corporate firms,
                building websites that are fast, beautiful, and built to grow your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Purpose</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Mission &amp; Vision</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {missionVision.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary">{item.label}</p>
                <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">What drives us</p>
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Our Values</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">The people</p>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Faces behind your next great website.
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We are a small, dedicated team passionate about the web. Every project gets our full attention,
                creativity, and technical expertise with no outsourcing and no shortcuts.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
              <Image
                src="/images/team-peter.jpg"
                alt="Peter"
                width={112}
                height={112}
                className="mx-auto h-28 w-28 rounded-full border-2 border-primary/20 object-cover"
              />
              <h3 className="mt-5 text-xl font-bold text-foreground">Peter</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-primary">
                Founder &amp; Lead Developer
              </p>
              <div className="mt-5 flex items-center justify-center gap-4 border-t border-border pt-5">
                {["Design", "Dev", "SEO"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
            Let&apos;s work together
          </p>
          <h2 className="mb-4 text-2xl font-extrabold text-primary-foreground md:text-4xl">
            Ready to build something remarkable?
          </h2>
          <p className="mb-8 text-base text-primary-foreground/80">
            Tell us about your project. We will get back to you within 24 hours with a practical plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
          >
            Get started today <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
