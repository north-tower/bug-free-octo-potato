import {urlFor} from '@/sanity/lib/image'
import {sanityFetch} from '@/sanity/lib/live'
import {ABOUT_PAGE_QUERY} from '@/sanity/lib/queries'
import type {Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {ArrowRight, Award, Eye, Heart, Target, Users, Zap} from 'lucide-react'

const purposeIcons = {
  target: Target,
  eye: Eye,
} as const

const valueIcons = {
  award: Award,
  zap: Zap,
  heart: Heart,
  users: Users,
} as const

export async function generateMetadata(): Promise<Metadata> {
  const {data} = await sanityFetch({query: ABOUT_PAGE_QUERY, stega: false})

  return {
    title: 'About',
    description:
      data?.seoDescription ||
      'Websiteloom is a Nakuru-based web design and digital marketing agency helping businesses across Kenya build powerful online presences.',
  }
}

export default async function AboutPage() {
  const {data} = await sanityFetch({query: ABOUT_PAGE_QUERY})

  if (!data) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">About content is not available yet.</p>
      </section>
    )
  }

  const storyImageUrl = data.story?.image
    ? urlFor(data.story.image).width(800).height(600).url()
    : null

  return (
    <>
      <section className="py-20 md:py-28" style={{background: 'var(--gradient-hero)'}}>
        <div className="container mx-auto max-w-4xl px-4 text-center">
          {data.hero?.eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              {data.hero.eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-extrabold leading-tight text-primary-foreground md:text-5xl">
            {data.hero?.headline}
          </h1>
          {data.hero?.body ? (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {data.hero.body}
            </p>
          ) : null}
          {data.hero?.ctaLabel && data.hero?.ctaHref ? (
            <Link
              href={data.hero.ctaHref}
              className="mt-10 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
            >
              {data.hero.ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </section>

      {data.stats?.length ? (
        <section className="bg-background py-12 md:py-16">
          <div className="container px-4">
            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.stats.map((stat) => (
                <div
                  key={stat._key}
                  className="rounded-xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]"
                >
                  <p className="text-3xl font-extrabold text-primary">{stat.number}</p>
                  <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
                  {stat.sublabel ? (
                    <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {data.story ? (
        <section className="bg-secondary py-20 md:py-28">
          <div className="container px-4">
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
                {storyImageUrl ? (
                  <Image
                    src={storyImageUrl}
                    alt={
                      (data.story.image as {alt?: string} | null)?.alt ||
                      'Websiteloom office'
                    }
                    width={800}
                    height={600}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                ) : (
                  <div className="aspect-[4/3] bg-muted" />
                )}
              </div>
              <div>
                {data.story.eyebrow ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {data.story.eyebrow}
                  </p>
                ) : null}
                {data.story.title ? (
                  <h2 className="mb-5 text-3xl font-extrabold text-foreground md:text-4xl">
                    {data.story.title}
                  </h2>
                ) : null}
                {data.story.paragraphs?.filter(Boolean).map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-sm leading-relaxed text-muted-foreground ${
                      index < (data.story?.paragraphs?.length || 0) - 1 ? 'mb-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {data.purpose?.items?.length ? (
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              {data.purpose.eyebrow ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {data.purpose.eyebrow}
                </p>
              ) : null}
              {data.purpose.title ? (
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  {data.purpose.title}
                </h2>
              ) : null}
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {data.purpose.items.map((item) => {
                const Icon =
                  purposeIcons[(item.icon as keyof typeof purposeIcons) || 'target'] || Target

                return (
                  <div
                    key={item._key}
                    className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      {item.label}
                    </p>
                    <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      {data.values?.items?.length ? (
        <section className="bg-secondary py-20 md:py-28">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              {data.values.eyebrow ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {data.values.eyebrow}
                </p>
              ) : null}
              {data.values.title ? (
                <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
                  {data.values.title}
                </h2>
              ) : null}
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.values.items.map((item) => {
                const Icon =
                  valueIcons[(item.icon as keyof typeof valueIcons) || 'award'] || Award

                return (
                  <div
                    key={item._key}
                    className="rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-colors hover:border-primary/40"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ) : null}

      {data.team ? (
        <section className="bg-background py-20 md:py-28">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                {data.team.eyebrow ? (
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {data.team.eyebrow}
                  </p>
                ) : null}
                {data.team.title ? (
                  <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                    {data.team.title}
                  </h2>
                ) : null}
                {data.team.body ? (
                  <p className="text-sm leading-relaxed text-muted-foreground">{data.team.body}</p>
                ) : null}
              </div>
              <div className="space-y-6">
                {data.team.members?.map((member) => {
                  const memberImageUrl = member.image
                    ? urlFor(member.image).width(224).height(224).url()
                    : null

                  return (
                    <div
                      key={member._key}
                      className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]"
                    >
                      {memberImageUrl ? (
                        <Image
                          src={memberImageUrl}
                          alt={
                            (member.image as {alt?: string} | null)?.alt || member.name || 'Team member'
                          }
                          width={112}
                          height={112}
                          className="mx-auto h-28 w-28 rounded-full border-2 border-primary/20 object-cover"
                        />
                      ) : (
                        <div className="mx-auto h-28 w-28 rounded-full bg-muted" />
                      )}
                      <h3 className="mt-5 text-xl font-bold text-foreground">{member.name}</h3>
                      {member.role ? (
                        <p className="mt-1 text-xs uppercase tracking-[0.1em] text-primary">
                          {member.role}
                        </p>
                      ) : null}
                      {member.tags?.length ? (
                        <div className="mt-5 flex items-center justify-center gap-4 border-t border-border pt-5">
                          {member.tags.filter(Boolean).map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {data.cta ? (
        <section className="py-20" style={{background: 'var(--gradient-hero)'}}>
          <div className="container mx-auto max-w-2xl px-4 text-center">
            {data.cta.eyebrow ? (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                {data.cta.eyebrow}
              </p>
            ) : null}
            {data.cta.title ? (
              <h2 className="mb-4 text-2xl font-extrabold text-primary-foreground md:text-4xl">
                {data.cta.title}
              </h2>
            ) : null}
            {data.cta.body ? (
              <p className="mb-8 text-base text-primary-foreground/80">{data.cta.body}</p>
            ) : null}
            {data.cta.ctaLabel && data.cta.ctaHref ? (
              <Link
                href={data.cta.ctaHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-background px-10 text-base font-bold text-primary transition-colors hover:bg-background/90"
              >
                {data.cta.ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  )
}
