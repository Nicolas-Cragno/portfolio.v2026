export function ThemeToggle({ theme, onChange, labels }) {
  const isDark = theme === 'dark'
  const label = isDark ? labels.lightTheme : labels.darkTheme

  return (
    <button className="theme-toggle" type="button" onClick={() => onChange(isDark ? 'light' : 'dark')} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
          </>
        ) : <path d="M20 14.1A8.5 8.5 0 0 1 9.9 4a8.5 8.5 0 1 0 10.1 10.1Z" />}
      </svg>
    </button>
  )
}
