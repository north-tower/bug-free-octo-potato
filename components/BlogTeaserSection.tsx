import {urlFor} from '@/sanity/lib/image'
import {ArrowRight} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type {SanityImageSource} from '@sanity/image-url'

const categoryLabels: Record<string, string> = {
  'web-design': 'Web Design',
  seo: 'SEO',
  business: 'Business',
  tips: 'Tips',
}

type BlogPost = {
  _id: string
  title?: string | null
  slug?: string | null
  excerpt?: string | null
  category?: string | null
  publishedAt?: string | null
  readTime?: number | null
  coverImage?: SanityImageSource | null
}

type SectionData = {
  eyebrow?: string | null
  title?: string | null
  titleAccent?: string | null
  description?: string | null
  ctaLabel?: string | null
  ctaHref?: string | null
}

function formatDate(value?: string | null) {
  if (!value) return ''
  return new Date(value).toLocaleDateString('en-KE', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogTeaserSection({
  section,
  posts,
}: {
  section?: SectionData | null
  posts: BlogPost[]
}) {
  if (!posts.length) return null

  return (
    <section id="blog" className="bg-secondary py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-5xl text-center md:mb-14">
            {section?.eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {section.eyebrow}
              </p>
            ) : null}
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              {section?.title}
              {section?.titleAccent ? (
                <>
                  <br />
                  <span className="font-medium italic text-muted-foreground">{section.titleAccent}</span>
                </>
              ) : null}
            </h2>
            {section?.description ? (
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            ) : null}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              if (!post.slug) return null
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
                    <h3 className="mb-3 text-lg font-bold leading-tight text-foreground">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    {post.excerpt ? (
                      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    ) : null}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Read article
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>

          {section?.ctaLabel && section?.ctaHref ? (
            <div className="mt-10 flex justify-center">
              <Link
                href={section.ctaHref}
                className="inline-flex items-center gap-1 rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:bg-background hover:text-foreground"
              >
                {section.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
