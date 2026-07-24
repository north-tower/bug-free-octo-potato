import {urlFor} from '@/sanity/lib/image'
import {PortableText, type PortableTextComponents} from '@portabletext/react'
import Image from 'next/image'
import type {SanityImageSource} from '@sanity/image-url'

const components: PortableTextComponents = {
  block: {
    h2: ({children}) => (
      <h2 className="mt-10 mb-4 text-2xl font-extrabold text-foreground md:text-3xl">{children}</h2>
    ),
    h3: ({children}) => (
      <h3 className="mt-8 mb-3 text-xl font-bold text-foreground">{children}</h3>
    ),
    normal: ({children}) => (
      <p className="mb-4 text-base leading-relaxed text-muted-foreground">{children}</p>
    ),
    blockquote: ({children}) => (
      <blockquote className="my-6 border-l-4 border-primary/40 pl-4 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({children}) => <strong className="font-semibold text-foreground">{children}</strong>,
    em: ({children}) => <em>{children}</em>,
    link: ({children, value}) => (
      <a
        href={value?.href}
        className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
        rel="noreferrer"
        target={value?.href?.startsWith('http') ? '_blank' : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({value}) => {
      if (!value?.asset) return null
      const src = urlFor(value as SanityImageSource).width(1200).url()
      return (
        <figure className="my-8 overflow-hidden rounded-xl border border-border">
          <Image
            src={src}
            alt={value.alt || ''}
            width={1200}
            height={675}
            className="h-auto w-full object-cover"
          />
        </figure>
      )
    },
  },
}

export default function PortableTextRenderer({
  value,
}: {
  value: unknown
}) {
  if (!value) return null
  return <PortableText value={value as never} components={components} />
}
