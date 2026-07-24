import {urlFor} from '@/sanity/lib/image'
import {sanityFetch} from '@/sanity/lib/live'
import {BLOG_PAGE_QUERY, BLOG_POSTS_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

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
    month: 'short',
    day: 'numeric',
  })
}

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await sanityFetch({query: BLOG_PAGE_QUERY, stega: false})

  return {
    title: 'Blog',
    description:
      data?.seoDescription ||
      'Tips on web design, SEO, and growing your business online from the Websiteloom team.',
  }
}

export default async function BlogPage() {
  const [{data: page}, {data: posts}] = await Promise.all([
    sanityFetch({query: BLOG_PAGE_QUERY}),
    sanityFetch({query: BLOG_POSTS_QUERY}),
  ])

  return (
    <>
      <section className="py-20 md:py-28" style={{background: 'var(--gradient-hero)'}}>
        <div className="container mx-auto max-w-3xl px-4 text-center">
          {page?.hero?.eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              {page.hero.eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            {page?.hero?.headline || 'Blog'}
          </h1>
          {page?.hero?.body ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {page.hero.body}
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container px-4">
          {!posts?.length ? (
            <p className="text-center text-muted-foreground">No posts yet.</p>
          ) : (
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => {
                const imageUrl = post.coverImage
                  ? urlFor(post.coverImage).width(800).height(500).url()
                  : null

                return (
                  <article
                    key={post._id}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] transition-colors hover:border-primary/30"
                  >
                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] bg-muted">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title || 'Blog post'}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      ) : (
                        <div
                          className="absolute inset-0"
                          style={{background: 'var(--gradient-primary)'}}
                        />
                      )}
                    </Link>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        {post.category ? (
                          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-semibold uppercase tracking-[0.08em] text-primary">
                            {categoryLabels[post.category] || post.category}
                          </span>
                        ) : null}
                        {post.publishedAt ? <span>{formatDate(post.publishedAt)}</span> : null}
                        {post.readTime ? <span>{post.readTime} min read</span> : null}
                      </div>
                      <h2 className="mb-3 text-xl font-bold leading-tight text-foreground">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt ? (
                        <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {post.excerpt}
                        </p>
                      ) : null}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-sm font-semibold text-primary hover:underline"
                      >
                        Read article
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
