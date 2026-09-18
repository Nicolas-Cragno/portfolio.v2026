import { useEffect, useState } from 'react'

const storageKey = 'portfolio-theme'
const systemTheme = '(prefers-color-scheme: dark)'

function readPreference() {
  try {
    const value = window.localStorage.getItem(storageKey)
    return value === 'dark' || value === 'light' ? value : 'system'
  } catch {
    return 'system'
  }
}

export function useTheme() {
  const [preference, setPreference] = useState(readPreference)
  const [systemDark, setSystemDark] = useState(() => window.matchMedia(systemTheme).matches)
  const theme = preference === 'system' ? (systemDark ? 'dark' : 'light') : preference

  useEffect(() => {
    const media = window.matchMedia(systemTheme)
    const update = (event) => setSystemDark(event.matches)
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      if (preference === 'system') {
        window.localStorage.removeItem(storageKey)
      } else {
        window.localStorage.setItem(storageKey, preference)
      }
    } catch {
      return
    }
  }, [preference, theme])

  function setTheme(value) {
    if (['dark', 'light', 'system'].includes(value)) setPreference(value)
  }

  return { theme, preference, setTheme }
}
