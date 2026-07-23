"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const projects = [
  {
    image: "/images/portfolio-ecommerce.jpg",
    title: "E-commerce Store Redesign",
    tag: "E-commerce · Redesign",
    category: "E-commerce",
    featured: true,
  },
  {
    image: "/images/portfolio-corporate.jpg",
    title: "Corporate Website Development",
    tag: "Corporate · Development",
    category: "Corporate",
  },
  {
    image: "/images/portfolio-restaurant.jpg",
    title: "Restaurant Website & SEO",
    tag: "Hospitality · SEO",
    category: "Hospitality",
  },
  {
    image: "/images/portfolio-ngo.jpg",
    title: "NGO Platform Launch",
    tag: "Nonprofit · Platform",
    category: "Nonprofit",
    featured: true,
  },
];

const PortfolioSection = () => {
  const filters = ["All", "E-commerce", "Corporate", "Hospitality", "Nonprofit"] as const;
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="bg-background py-20 md:py-28">
      <h2 className="sr-only">Portfolio section showcasing client projects</h2>

      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-5xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Selected work
            </p>
            <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Projects that <span className="font-medium italic text-muted-foreground">speak</span>
              <br />
              for themselves
            </h2>
            <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
              From e-commerce to nonprofits - real work, real results.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                  activeFilter === filter
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:bg-secondary hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className={`group overflow-hidden bg-card ${
                  project.featured && activeFilter === "All" ? "md:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    project.featured && activeFilter === "All" ? "aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-medium text-foreground">
                      View case study
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-border/70 p-5">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                      {project.tag}
                    </p>
                    <h4 className="text-base font-bold leading-tight text-foreground">{project.title}</h4>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{visibleProjects.length}</span> of{" "}
              <span className="font-semibold text-foreground">24</span> projects
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-secondary hover:text-foreground"
            >
              View all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
