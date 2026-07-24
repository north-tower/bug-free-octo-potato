import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import {DisableDraftMode} from '@/components/DisableDraftMode'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {SITE_SETTINGS_QUERY} from '@/sanity/lib/queries'
import {VisualEditing} from 'next-sanity/visual-editing'
import {draftMode} from 'next/headers'

export default async function SiteLayout({children}: {children: React.ReactNode}) {
  const {data: settings} = await sanityFetch({query: SITE_SETTINGS_QUERY})

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        data={{
          siteName: settings?.siteName,
          logo: settings?.logo,
          links: settings?.navbar?.links,
          phone: settings?.navbar?.phone,
          phoneHref: settings?.navbar?.phoneHref,
          ctaLabel: settings?.navbar?.ctaLabel,
          ctaHref: settings?.navbar?.ctaHref,
        }}
      />
      <main className="flex-1">{children}</main>
      <Footer
        data={{
          siteName: settings?.siteName,
          logo: settings?.logo,
          ...settings?.footer,
        }}
      />
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <VisualEditing />
          <DisableDraftMode />
        </>
      )}
    </div>
  )
}
