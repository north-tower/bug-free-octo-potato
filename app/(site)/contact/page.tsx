import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Websiteloom in Nakuru. Free consultation for web design, SEO, and copywriting projects.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />

      <section className="bg-background pb-20 md:pb-28">
        <div className="container px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Visit us
              </p>
              <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                Find our <span className="font-medium italic text-muted-foreground">Nakuru office</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Prefer meeting in person? We are located along Kenyatta Avenue, Nakuru.
              </p>
            </div>

            <div className="mb-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border/70 bg-card p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  Location
                </p>
                <p className="text-sm text-foreground">Kimotho House, Kenyatta Avenue, Nakuru City</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" />
                  Phone
                </p>
                <a href="tel:+254707803637" className="text-sm text-primary hover:underline">
                  +254 707 803 637
                </a>
              </div>
              <div className="rounded-xl border border-border/70 bg-card p-4">
                <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" />
                  Hours
                </p>
                <p className="text-sm text-foreground">Mon - Fri, 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border/70 bg-card">
              <iframe
                title="Websiteloom office location map"
                src="https://www.google.com/maps?q=Kenyatta%20Avenue%20Nakuru%20Kimotho%20House&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-5 flex justify-end">
              <a
                href="https://www.google.com/maps?q=Kenyatta%20Avenue%20Nakuru%20Kimotho%20House"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-secondary hover:text-foreground"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
