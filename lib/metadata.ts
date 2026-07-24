import {urlFor} from '@/sanity/lib/image'
import {sanityFetch} from '@/sanity/lib/live'
import {SITE_SETTINGS_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (configuredUrl) return configuredUrl.replace(/\/$/, '')

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}

export async function getSiteSettings() {
  const {data} = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    stega: false,
  })
  return data
}

export async function buildRootMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()
  const siteUrl = getSiteUrl()
  const siteName = settings?.siteName || 'Websiteloom'
  const title = settings?.seo?.title || siteName
  const description =
    settings?.seo?.description ||
    'Website Loom builds custom e-commerce stores, lead-generating business sites, and organizational websites across Kenya.'
  const titleTemplate = settings?.seo?.titleTemplate || `%s | ${siteName}`
  const keywords = (settings?.seo?.keywords || []).filter(Boolean) as string[]

  const ogImage = settings?.seo?.ogImage
    ? urlFor(settings.seo.ogImage).width(1200).height(630).fit('crop').url()
    : `${siteUrl}/og-image.png`

  const twitterHandle = settings?.seo?.twitterHandle?.replace(/^@/, '')

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: titleTemplate,
    },
    description,
    keywords: keywords.length ? keywords : undefined,
    authors: [{name: siteName}],
    openGraph: {
      title,
      description,
      type: 'website',
      siteName,
      url: siteUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: (settings?.seo?.ogImage as {alt?: string} | null)?.alt || title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: twitterHandle ? `@${twitterHandle}` : undefined,
    },
  }
}

export function buildPageMetadata({
  title,
  description,
  path,
  imageUrl,
}: {
  title?: string | null
  description?: string | null
  path?: string
  imageUrl?: string | null
}): Metadata {
  const siteUrl = getSiteUrl()
  const url = path ? `${siteUrl}${path.startsWith('/') ? path : `/${path}`}` : undefined

  return {
    title: title || undefined,
    description: description || undefined,
    alternates: url ? {canonical: url} : undefined,
    openGraph: {
      title: title || undefined,
      description: description || undefined,
      url,
      images: imageUrl ? [{url: imageUrl}] : undefined,
    },
    twitter: {
      title: title || undefined,
      description: description || undefined,
      images: imageUrl ? [imageUrl] : undefined,
    },
  }
}
