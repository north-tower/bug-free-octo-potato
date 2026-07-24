import PortableTextRenderer from '@/components/PortableTextRenderer'
import {client} from '@/sanity/lib/client'
import {sanityFetch} from '@/sanity/lib/live'
import {LEGAL_PAGE_QUERY, LEGAL_SLUGS_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'
import Link from 'next/link'
import {notFound} from 'next/navigation'

type PageProps = {
  params: Promise<{slug: string}>
}

function formatDate(value?: string | null) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateStaticParams() {
  const slugs = await client.withConfig({useCdn: false}).fetch(LEGAL_SLUGS_QUERY)
  return (slugs || [])
    .map((item: {slug?: string | null}) => item.slug)
    .filter(Boolean)
    .map((slug: string) => ({slug}))
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params
  const {data} = await sanityFetch({
    query: LEGAL_PAGE_QUERY,
    params: {slug},
    stega: false,
  })

  if (!data) {
    return {title: 'Page not found'}
  }

  return {
    title: data.title || 'Legal',
    description: data.seoDescription || undefined,
  }
}

export default async function LegalPage({params}: PageProps) {
  const {slug} = await params
  const {data: page} = await sanityFetch({
    query: LEGAL_PAGE_QUERY,
    params: {slug},
  })

  if (!page) notFound()

  return (
    <article>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            href="/"
            className="mb-6 inline-flex text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to home
          </Link>
          <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            {page.title}
          </h1>
          {page.lastUpdated ? (
            <p className="mt-4 text-sm text-muted-foreground">
              Last updated {formatDate(page.lastUpdated)}
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-background py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <PortableTextRenderer value={page.body} />
          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-opacity hover:opacity-90"
            >
              Questions? Contact us
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
