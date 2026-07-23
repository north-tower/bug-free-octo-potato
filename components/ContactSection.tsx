"use client";

import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    "E-commerce store",
    "Business website",
    "Personal blog",
    "NGO / Gov platform",
    "SEO & marketing",
    "Something else",
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setSelectedServices([]);
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <h2 className="sr-only">Contact section - get in touch with Websiteloom</h2>

      <div className="container px-4">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/70 bg-card px-6 py-14 md:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-96 rounded-full bg-[radial-gradient(ellipse,rgba(55,138,221,0.12)_0%,transparent_70%)]" />
          <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-80 rounded-full bg-[radial-gradient(ellipse,rgba(29,158,117,0.10)_0%,transparent_70%)]" />

          <div className="relative z-10 mx-auto max-w-5xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Get in touch
            </p>
            <h2 className="text-center text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Let&apos;s build something
              <br />
              <span className="font-medium italic text-muted-foreground">worth talking about</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
              Tell us what you need - an e-commerce store, a corporate site, a personal blog, or an NGO
              platform. We are ready to listen.
            </p>

            <div className="mb-10 mt-7 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Reply within 24 hrs
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Free consultation
              </span>
              <span className="h-3 w-px bg-border" />
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                No commitment required
              </span>
            </div>

            <div className="mx-auto max-w-3xl rounded-2xl border border-border/70 bg-background/70 p-6 md:p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="text-left">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium tracking-[0.03em] text-muted-foreground">
                        First name *
                      </label>
                      <input
                        required
                        placeholder="Jane"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium tracking-[0.03em] text-muted-foreground">
                        Last name *
                      </label>
                      <input
                        required
                        placeholder="Kamau"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium tracking-[0.03em] text-muted-foreground">
                        Email address *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium tracking-[0.03em] text-muted-foreground">
                        Phone <span className="text-muted-foreground/70">(optional)</span>
                      </label>
                      <input
                        placeholder="+254 7xx xxx xxx"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="h-11 w-full rounded-lg border border-border bg-card px-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-xs font-medium tracking-[0.03em] text-muted-foreground">
                        What do you need? <span className="text-muted-foreground/70">(pick all that apply)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                              selectedServices.includes(service)
                                ? "border-primary/60 bg-primary/10 text-primary"
                                : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-medium tracking-[0.03em] text-muted-foreground">
                        Tell us more <span className="text-muted-foreground/70">(optional)</span>
                      </label>
                      <textarea
                        placeholder="Briefly describe your project, timeline, or any questions you have..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="h-24 w-full resize-none rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                      We&apos;ll never share your details. No spam, ever.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-background transition-colors hover:bg-foreground/90"
                    >
                      Talk to us now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/20">
                    <Check className="h-5 w-5 text-emerald-600" />
                  </span>
                  <p className="text-xl font-extrabold text-foreground">Message sent!</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>

            <div className="mx-auto mt-7 flex max-w-3xl flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="mailto:hello@websiteloom.com" className="inline-flex items-center gap-2 hover:text-foreground">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                hello@websiteloom.com
              </a>
              <span className="h-3 w-px bg-border" />
              <a href="tel:+254707803637" className="inline-flex items-center gap-2 hover:text-foreground">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                +254 707 803 637
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
