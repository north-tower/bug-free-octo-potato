import {urlFor} from '@/sanity/lib/image'
import {MapPin, Phone} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type {SanityImageSource} from '@sanity/image-url'
import type {NavLink} from './Navbar'

export type FooterData = {
  siteName?: string | null
  logo?: SanityImageSource | null
  tagline?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
  quickLinksTitle?: string | null
  quickLinks?: NavLink[] | null
  findUsTitle?: string | null
  addressLines?: (string | null)[] | null
  mapLabel?: string | null
  mapHref?: string | null
  phone?: string | null
  phoneHref?: string | null
  hoursTitle?: string | null
  walkInLabel?: string | null
  walkInHours?: string | null
  onlineLabel?: string | null
  onlineBadge?: string | null
  careersTitle?: string | null
  careersBody?: string | null
  careersCtaLabel?: string | null
  careersCtaHref?: string | null
  socialTitle?: string | null
  socialLinks?: {
    _key?: string
    label?: string | null
    href?: string | null
    color?: string | null
  }[] | null
  copyright?: string | null
  legalLinks?: NavLink[] | null
}

export default function Footer({data}: {data?: FooterData | null}) {
  const siteName = data?.siteName || 'Websiteloom'
  const logoUrl = data?.logo
    ? urlFor(data.logo).width(72).height(72).url()
    : '/images/websiteloom-logo.png'
  const quickLinks = (data?.quickLinks || []).filter((link) => link.label && link.href)
  const addressLines = (data?.addressLines || []).filter(Boolean) as string[]
  const socialLinks = (data?.socialLinks || []).filter((item) => item.label)
  const legalLinks = (data?.legalLinks || []).filter((link) => link.label && link.href)

  return (
    <footer className="border-t border-border/70 bg-secondary">
      <h2 className="sr-only">Websiteloom site footer</h2>

      <div className="container px-4">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border/70 py-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src={logoUrl}
              alt={siteName}
              width={36}
              height={36}
              className="h-9 w-9 rounded-lg"
            />
            <span className="text-lg font-extrabold tracking-tight text-foreground">
              {siteName}
              <span className="text-primary">.</span>
            </span>
          </Link>
          {data?.tagline ? (
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{data.tagline}</p>
          ) : null}
          {data?.ctaLabel && data?.ctaHref ? (
            <Link
              href={data.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {data.ctaLabel}
            </Link>
          ) : null}
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">
              {data?.quickLinksTitle || 'Quick links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link._key || link.label}>
                  <Link
                    href={link.href!}
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
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">
              {data?.findUsTitle || 'Find us'}
            </h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {data?.mapHref ? (
                <a
                  href={data.mapHref}
                  className="mt-2 inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  <MapPin className="h-3 w-3" />
                  {data.mapLabel || 'View on map'}
                </a>
              ) : null}
              {data?.phone ? (
                <>
                  <br />
                  <a
                    href={data.phoneHref || `tel:${data.phone.replace(/\s/g, '')}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {data.phone}
                  </a>
                </>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">
              {data?.hoursTitle || 'Hours'}
            </h3>
            {data?.walkInHours ? (
              <div className="mb-3">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">
                  {data.walkInLabel || 'Walk-in'}
                </p>
                <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {data.walkInHours}
                </p>
              </div>
            ) : null}
            {data?.onlineBadge ? (
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">
                  {data.onlineLabel || 'Online'}
                </p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  {data.onlineBadge}
                </span>
              </div>
            ) : null}
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-foreground">
              {data?.careersTitle || 'Careers'}
            </h3>
            {data?.careersBody ? (
              <p className="text-sm leading-relaxed text-muted-foreground">{data.careersBody}</p>
            ) : null}
            {data?.careersCtaLabel && data?.careersCtaHref ? (
              <a
                href={data.careersCtaHref}
                className="mt-3 inline-flex items-center rounded-full border border-foreground px-4 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                {data.careersCtaLabel}
              </a>
            ) : null}
          </div>
        </div>

        {socialLinks.length ? (
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 py-8">
            <p className="text-xs font-bold uppercase tracking-[0.08em] text-foreground">
              {data?.socialTitle || 'Follow us'}
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item._key || item.label}
                  href={item.href || '#'}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                >
                  <span className={`h-3.5 w-3.5 rounded-sm ${item.color || 'bg-foreground'}`} />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 py-5">
          <p className="text-xs text-muted-foreground">
            {data?.copyright || '© 2026 Websiteloom. All rights reserved.'}
          </p>
          {legalLinks.length ? (
            <div className="flex flex-wrap items-center">
              {legalLinks.map((link, index) => {
                const className = `px-2 text-[11px] text-muted-foreground transition-colors hover:text-foreground ${
                  index < legalLinks.length - 1 ? 'border-r border-border' : ''
                } ${index === 0 ? 'pl-0' : ''}`

                return link.href?.startsWith('/') ? (
                  <Link key={link._key || link.label} href={link.href} className={className}>
                    {link.label}
                  </Link>
                ) : (
                  <a key={link._key || link.label} href={link.href!} className={className}>
                    {link.label}
                  </a>
                )
              })}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  )
}
