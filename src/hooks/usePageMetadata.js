import { useEffect } from 'react'

export function usePageMetadata(profile) {
  useEffect(() => {
    const title = `${profile.name} | ${profile.role}`
    document.documentElement.lang = profile.locale
    document.title = title
    const metadata = {
      'meta[name="description"]': profile.description,
      'meta[property="og:title"]': title,
      'meta[property="og:description"]': profile.description,
      'meta[property="og:locale"]': profile.locale === 'en' ? 'en_US' : 'es_AR',
      'meta[name="twitter:title"]': title,
      'meta[name="twitter:description"]': profile.description,
    }
    for (const [selector, content] of Object.entries(metadata)) {
      document.querySelector(selector)?.setAttribute('content', content)
    }
  }, [profile])
}
