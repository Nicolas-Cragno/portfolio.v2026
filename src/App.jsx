import { getData } from './data/index.js'
import { usePageMetadata } from './hooks/usePageMetadata.js'
import { useTheme } from './hooks/useTheme.js'
import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './sections/Hero/Hero.jsx'

function App() {
  const { profile } = getData(window.location.pathname)
  const { theme, setTheme } = useTheme()
  usePageMetadata(profile)

  return (
    <>
      <a className="skip-link" href="#main">{profile.navigation.skip}</a>
      <Header profile={profile} theme={theme} onThemeChange={setTheme} />
      <main id="main" tabIndex={-1}>
        <Hero profile={profile} theme={theme} />
        <div className="reserved-anchors" aria-hidden="true">
          <span id="projects" />
          <span id="experience" />
          <span id="about" />
        </div>
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App
