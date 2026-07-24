import PortableTextRenderer from '@/components/PortableTextRenderer'
import {buildPageMetadata} from '@/lib/metadata'
import {urlFor} from '@/sanity/lib/image'
import {client} from '@/sanity/lib/client'
import {sanityFetch} from '@/sanity/lib/live'
import {BLOG_POST_QUERY, BLOG_SLUGS_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {notFound} from 'next/navigation'

type PageProps = {
  params: Promise<{slug: string}>
}

const categoryLabels: Record<string, string> = {
  'web-design': 'Web Design',
  seo: 'SEO',
  business: 'Business',
  tips: 'Tips',
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
  const slugs = await client.withConfig({useCdn: false}).fetch(BLOG_SLUGS_QUERY)
  return (slugs || [])
    .map((item: {slug?: string | null}) => item.slug)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({slug}))
}

export async function generateMetadata({params}: PageProps): Promise<Metadata> {
  const {slug} = await params
  const {data} = await sanityFetch({
    query: BLOG_POST_QUERY,
    params: {slug},
    stega: false,
  })

  if (!data) {
    return {title: 'Post not found'}
  }

  const imageUrl = data.coverImage
    ? urlFor(data.coverImage).width(1200).height(630).fit('crop').url()
    : null

  return buildPageMetadata({
    title: data.title || 'Blog Post',
    description: data.excerpt || undefined,
    path: `/blog/${slug}`,
    imageUrl,
  })
}

export default async function BlogPostPage({params}: PageProps) {
  const {slug} = await params
  const {data: post} = await sanityFetch({
    query: BLOG_POST_QUERY,
    params: {slug},
  })

  if (!post) notFound()

  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1400).height(800).url()
    : null

  return (
    <article>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4">
          <Link
            href="/blog"
            className="mb-6 inline-flex text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            ← Back to blog
          </Link>
          <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            {post.category ? (
              <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-primary">
                {categoryLabels[post.category] || post.category}
              </span>
            ) : null}
            {post.publishedAt ? <span>{formatDate(post.publishedAt)}</span> : null}
            {post.readTime ? <span>{post.readTime} min read</span> : null}
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          {post.excerpt ? (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {post.excerpt}
            </p>
          ) : null}
        </div>
      </section>

      {imageUrl ? (
        <div className="container mx-auto max-w-4xl px-4">
          <div className="relative -mt-8 aspect-[21/9] overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] md:-mt-12">
            <Image
              src={imageUrl}
              alt={post.title || 'Blog post'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
              priority
            />
          </div>
        </div>
      ) : null}

      <section className="bg-background py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <PortableTextRenderer value={post.body} />
          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-opacity hover:opacity-90"
            >
              Talk about your project
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
