import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Websiteloom", href: "/about" },
    { label: "Contact us", href: "/contact" },
    { label: "Blog", href: "/#blog" },
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Refund Policy",
    "GDPR Compliance",
    "Affiliates Disclosure",
  ];

  const social = [
    { label: "Facebook", color: "bg-[#1877F2]" },
    { label: "LinkedIn", color: "bg-[#0A66C2]" },
    { label: "YouTube", color: "bg-[#FF0000]" },
    { label: "TikTok", color: "bg-foreground" },
    { label: "Reddit", color: "bg-[#FF4500]" },
  ];

  return (
    <footer className="border-t border-border/70 bg-secondary">
      <h2 className="sr-only">Websiteloom site footer</h2>

      <div className="container px-4">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border/70 py-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/websiteloom-logo.png"
              alt="Websiteloom"
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
            />
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              Websiteloom<span className="text-primary">.</span>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            We build fast, beautiful websites for businesses, creatives, and nonprofits across Kenya.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Start a project
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-1 w-1 rounded-full bg-border" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">Find us</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>Nakuru City</p>
              <p>Kenyatta Avenue</p>
              <p>Kimotho House</p>
              <p>Ground Floor, Office 28</p>
              <a
                href="https://maps.google.com"
                className="mt-2 inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <MapPin className="h-3 w-3" />
                View on map
              </a>
              <br />
              <a href="tel:+254707803637" className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                <Phone className="h-3.5 w-3.5" />
                +254 707 803 637
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">Hours</h3>
            <div className="mb-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">Walk-in</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Monday - Friday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>
            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">Online</p>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                24 / 7 available
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">Careers</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We are always looking for talented people who love web design and digital marketing. Come
              build with us.
            </p>
            <a
              href="#"
              className="mt-3 inline-flex items-center rounded-full border border-foreground px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View open positions
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 py-8">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-foreground">Follow us</p>
          <div className="flex flex-wrap gap-2">
            {social.map((item) => (
              <a
                key={item.label}
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                <span className={`h-3.5 w-3.5 rounded-sm ${item.color}`} />
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 py-5">
          <p className="text-xs text-muted-foreground">© 2026 Websiteloom. All rights reserved.</p>
          <div className="flex flex-wrap items-center">
            {legalLinks.map((link, index) => (
              <a
                key={link}
                href="#"
                className={`px-2 text-[11px] text-muted-foreground transition-colors hover:text-foreground ${
                  index < legalLinks.length - 1 ? "border-r border-border" : ""
                } ${index === 0 ? "pl-0" : ""}`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
