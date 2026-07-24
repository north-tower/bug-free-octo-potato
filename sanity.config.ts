'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {apiVersion, dataset, projectId} from './sanity/env'
import {resolve} from './sanity/presentation/resolve'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Loom Studio',
  schema,
  plugins: [
    structureTool({structure}),
    presentationTool({
      resolve,
      previewUrl: {
        /**
         * Embedded Studio shares the Next.js origin. Resolve from the Studio
         * location so Vercel (and any host) works without a hardcoded localhost.
         * Override with NEXT_PUBLIC_SITE_URL when the preview app differs.
         */
        initial: async ({origin}) => {
          const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
          const isLocalStudio =
            origin.includes('localhost') || origin.includes('127.0.0.1')
          const configuredIsLocal =
            !configured ||
            configured.includes('localhost') ||
            configured.includes('127.0.0.1')

          // Local Studio → local Next.js (or configured local URL)
          if (isLocalStudio) {
            return configuredIsLocal
              ? configured || 'http://localhost:3000'
              : configured
          }

          // Deployed Studio → same origin unless a non-local site URL is set
          return configuredIsLocal ? origin : configured!
        },
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      allowOrigins: [
        'http://localhost:*',
        'http://127.0.0.1:*',
        'https://*.vercel.app',
      ],
    }),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
