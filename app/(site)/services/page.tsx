import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle,
  Globe,
  GraduationCap,
  Landmark,
  PenTool,
  Search,
  ShoppingCart,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, SEO, and copywriting packages for businesses across Kenya — Starter, Business, and E-Commerce.",
};

const mainServices = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "We build websites that help you sell, get inquiries, and look credible online. From online stores to business websites for real estate companies, doctors, engineers, and logistics firms.",
    features: [
      "E-commerce Websites (Sell Products & Digital Goods)",
      "Business Websites (Lead Generation)",
      "Personal Blogs (Authentic Connection)",
      "Mobile-Responsive & Fast-Loading",
      "Custom CMS Integration",
      "Website Redesign & Revamp",
    ],
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Our SEO services go beyond Google Business Profiles. We help you build high-quality backlinks, get mentions on reputable websites, and refresh content that ranks.",
    features: [
      "Local SEO (GBP Setup & Optimization)",
      "GBP Consultation",
      "AI-Powered SEO",
      "Technical SEO (Speed Optimization)",
      "Google Search Console Error Removal",
      "Keyword Research & Strategy",
    ],
  },
  {
    icon: PenTool,
    title: "Copywriting & Content",
    description:
      "We specialize in SEO copywriting that turns visitors into leads, buyers, or meaningful actions, while positioning your business as a thought leader in your field.",
    features: [
      "SEO-Optimized Content Writing",
      "Content Refresh & Updates",
      "Website Copy That Converts",
      "Blog Posts & Articles",
      "Product Descriptions",
      "Email Marketing Copy",
    ],
  },
];

const industries = [
  {
    icon: ShoppingCart,
    name: "E-Commerce",
    description: "Online stores that drive sales with seamless checkout experiences",
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Property listing sites with lead capture and virtual tours",
  },
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "Professional websites for hospitals, clinics, and private practices",
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "School and university websites with portals and enrollment systems",
  },
  {
    icon: Landmark,
    name: "NGOs & Non-Profits",
    description: "Donation-ready websites that tell your story and inspire action",
  },
  {
    icon: BarChart3,
    name: "Corporate & Finance",
    description: "Polished, trust-building websites for established businesses",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We learn about your business goals, target audience, and competitors to craft a tailored plan.",
  },
  {
    step: "02",
    title: "Design & Wireframing",
    description:
      "We create mockups and wireframes so you can visualize your website before development begins.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "Our developers bring the design to life with clean code, then rigorously test across devices.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We launch your website and provide ongoing support, updates, and performance monitoring.",
  },
];

const packages = [
  {
    name: "Starter",
    price: "KSh 15,000",
    description: "Perfect for personal blogs and simple landing pages",
    features: ["Up to 5 Pages", "Mobile-Responsive Design", "Basic SEO Setup", "Contact Form", "1 Month Support"],
    highlighted: false,
  },
  {
    name: "Business",
    price: "KSh 35,000",
    description: "Ideal for growing businesses that need lead generation",
    features: [
      "Up to 15 Pages",
      "Custom Design",
      "Advanced SEO",
      "Google Analytics",
      "Blog Integration",
      "3 Months Support",
      "Social Media Integration",
    ],
    highlighted: true,
  },
  {
    name: "E-Commerce",
    price: "KSh 60,000",
    description: "Full online store with payment processing and inventory",
    features: [
      "Unlimited Products",
      "Payment Gateway (M-Pesa & Card)",
      "Inventory Management",
      "Order Tracking",
      "Advanced SEO",
      "6 Months Support",
      "Email Marketing Setup",
    ],
    highlighted: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mt-5 text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            Comprehensive web design, SEO, and copywriting solutions to help your business grow online.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
          >
            Get FREE Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="services" className="bg-background py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">What We Do</h2>
            <p className="mt-3 text-base text-muted-foreground">
              End-to-end digital solutions tailored to your business
            </p>
          </div>
          <div className="mx-auto max-w-6xl space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`grid items-center gap-10 md:grid-cols-2 ${index % 2 !== 0 ? "md:[direction:rtl]" : ""}`}
              >
                <div className={index % 2 !== 0 ? "md:[direction:ltr]" : ""}>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex h-72 items-center justify-center rounded-xl md:h-80 ${index % 2 !== 0 ? "md:[direction:ltr]" : ""}`}
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <service.icon className="h-20 w-20 text-primary-foreground/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Industries We Serve</h2>
            <p className="mt-3 text-base text-muted-foreground">
              Specialized solutions for diverse business sectors
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">{industry.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Our Process</h2>
            <p className="mt-3 text-base text-muted-foreground">How we bring your website to life</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <div className="mb-3 text-5xl font-extrabold text-primary/15">{item.step}</div>
                <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20 md:py-28">
        <div className="container px-4">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Our Packages</h2>
            <p className="mt-3 text-base text-muted-foreground">Transparent pricing for every budget</p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col overflow-hidden rounded-xl border bg-card ${
                  pkg.highlighted
                    ? "scale-[1.02] border-primary shadow-[var(--shadow-button)]"
                    : "border-border shadow-[var(--shadow-card)]"
                }`}
              >
                {pkg.highlighted && (
                  <div
                    className="py-2 text-center text-xs font-bold uppercase tracking-wider text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                  <p className="mb-5 mt-1 text-sm text-muted-foreground">{pkg.description}</p>
                  <p className="mb-6 text-3xl font-extrabold text-primary">{pkg.price}</p>
                  <ul className="mb-8 flex-1 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`block h-12 text-center text-sm font-semibold leading-[3rem] transition-opacity hover:opacity-90 ${
                      pkg.highlighted
                        ? "rounded-lg bg-primary text-primary-foreground shadow-[var(--shadow-button)]"
                        : "rounded-lg border border-primary text-primary hover:bg-primary/5"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-4 text-2xl font-extrabold text-primary-foreground md:text-3xl">
            Not Sure Which Package Is Right for You?
          </h2>
          <p className="mb-8 text-base text-primary-foreground/80">
            Contact us for a free consultation and we&apos;ll recommend the best solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
          >
            Get FREE Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
