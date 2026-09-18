import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '../buttons/ThemeToggle.jsx'

export function Header({ profile, theme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const menuButtonRef = useRef(null)
  const lastFocusedRef = useRef(null)
  const { navigation, locale } = profile

  function navigateTo(id) {
    setIsOpen(false)
    document.getElementById(id)?.focus({ preventScroll: true })
  }

  useEffect(() => {
    const header = headerRef.current
    const root = document.documentElement
    const observer = new ResizeObserver(([entry]) => {
      root.style.setProperty('--header-measured-height', `${entry.target.getBoundingClientRect().height}px`)
    })
    observer.observe(header)
    const desktop = window.matchMedia('(min-width: 64rem)')
    function onResize(event) {
      const active = document.activeElement === document.body ? lastFocusedRef.current : document.activeElement
      if (event.matches) {
        setIsOpen(false)
        if (active === menuButtonRef.current) header.querySelector('.brand')?.focus()
      } else if (header.querySelector('nav')?.contains(active)) {
        menuButtonRef.current?.focus()
      }
    }
    desktop.addEventListener('change', onResize)
    return () => {
      observer.disconnect()
      root.style.removeProperty('--header-measured-height')
      desktop.removeEventListener('change', onResize)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    function onOutsideClick(event) {
      if (!headerRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onOutsideClick)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onOutsideClick)
    }
  }, [isOpen])

  return (
    <header className="site-header" ref={headerRef} onFocusCapture={event => {
      lastFocusedRef.current = event.target
    }} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) {
        setIsOpen(false)
        if (event.relatedTarget) lastFocusedRef.current = null
      }
    }}>
      <div className="container header-inner">
        <a className="brand" href="#hero" onClick={() => navigateTo('hero')}>{profile.name}</a>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={isOpen} aria-controls="site-navigation" aria-label={isOpen ? navigation.closeMenu : navigation.openMenu} onClick={() => setIsOpen(!isOpen)}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d={isOpen ? 'M6 6l12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <nav id="site-navigation" className={`header-navigation${isOpen ? ' is-open' : ''}`} aria-label={navigation.label}>
          <ul className="nav-links">
            {navigation.items.map(({ id, label }) => (
              <li key={id}><a href={`#${id}`} onClick={() => navigateTo(id)}>{label}</a></li>
            ))}
          </ul>
          <div className="header-controls">
            <div className="language-switch" role="group" aria-label={navigation.language}>
              <a href="/" lang="es" hrefLang="es" aria-current={locale === 'es' ? 'page' : undefined}>ES</a>
              <a href="/en" lang="en" hrefLang="en" aria-current={locale === 'en' ? 'page' : undefined}>EN</a>
            </div>
            <ThemeToggle theme={theme} onChange={onThemeChange} labels={navigation} />
          </div>
        </nav>
      </div>
    </header>
  )
}
