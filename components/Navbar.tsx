'use client'

import {urlFor} from '@/sanity/lib/image'
import {Menu, Phone} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import type {SanityImageSource} from '@sanity/image-url'

export type NavLink = {
  _key?: string
  label?: string | null
  href?: string | null
}

export type NavbarData = {
  siteName?: string | null
  logo?: SanityImageSource | null
  links?: NavLink[] | null
  phone?: string | null
  phoneHref?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
}

export default function Navbar({data}: {data?: NavbarData | null}) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const siteName = data?.siteName || 'Websiteloom'
  const links = (data?.links || []).filter((link) => link.label && link.href)
  const logoUrl = data?.logo
    ? urlFor(data.logo).width(72).height(72).url()
    : '/images/websiteloom-logo.png'
  const phone = data?.phone || '+254 707 803 637'
  const phoneHref = data?.phoneHref || 'tel:+254707803637'
  const ctaLabel = data?.ctaLabel || 'Get Website Now'
  const ctaHref = data?.ctaHref || '/contact'

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <h2 className="sr-only">Websiteloom site navigation</h2>

      <div className="container flex h-[68px] items-center justify-between gap-8">
        <Link href="/" className="flex flex-shrink-0 items-center gap-2.5">
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

        <nav className="hidden flex-1 items-center justify-center md:flex">
          {links.map((link) => (
            <Link
              key={link._key || link.label}
              href={link.href!}
              className="rounded-md px-3.5 py-1.5 text-[13.5px] text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden flex-shrink-0 items-center gap-2.5 md:flex">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5" />
            {phone}
          </a>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-bold text-background transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {ctaLabel}
          </Link>
        </div>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/80 bg-background px-4 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link._key || link.label}
              href={link.href!}
              className="block border-b border-border/50 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground last:border-b-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={phoneHref}
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground/80"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="h-4 w-4" />
            {phone}
          </a>
          <Link
            href={ctaHref}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background"
            onClick={() => setMobileOpen(false)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </header>
  )
}
