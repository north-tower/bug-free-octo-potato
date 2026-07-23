'use client'

import {disableDraftMode} from '@/app/actions/disableDraftMode'
import {useVisualEditingEnvironment} from 'next-sanity/hooks'
import {useRouter} from 'next/navigation'
import {useTransition} from 'react'

export function DisableDraftMode() {
  const router = useRouter()
  const [pending, startTransition] = useTransition()
  const environment = useVisualEditingEnvironment()

  if (environment === 'presentation-iframe' || environment === 'presentation-window') {
    return null
  }

  const disable = () =>
    startTransition(async () => {
      await disableDraftMode()
      router.refresh()
    })

  return (
    <div className="fixed top-2 left-2 z-50">
      {pending ? (
        <span className="rounded bg-black px-3 py-2 text-sm text-white">Disabling draft mode...</span>
      ) : (
        <button
          type="button"
          onClick={disable}
          className="rounded bg-red-600 px-3 py-2 text-sm font-medium text-white shadow"
        >
          Disable draft mode
        </button>
      )}
    </div>
  )
}
