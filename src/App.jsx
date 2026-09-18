import { getData } from './data/index.js'
import { usePageMetadata } from './hooks/usePageMetadata.js'
import { useTheme } from './hooks/useTheme.js'
import { Header } from './components/layout/Header.jsx'
import { Footer } from './components/layout/Footer.jsx'
import { Hero } from './sections/Hero/Hero.jsx'
import { Projects } from './sections/Projects/Projects.jsx'
import { Experience } from './sections/Experience/Experience.jsx'
import { About } from './sections/About/About.jsx'
import { Contact } from './sections/Contact/Contact.jsx'

function App() {
  const { profile, projects, projectsContent, experience } = getData(window.location.pathname)
  const { theme, setTheme } = useTheme()
  usePageMetadata(profile)

  return (
    <>
      <a className="skip-link" href="#main">{profile.navigation.skip}</a>
      <Header profile={profile} theme={theme} onThemeChange={setTheme} />
      <main id="main" tabIndex={-1}>
        <Hero profile={profile} theme={theme} />
        <Projects projects={projects} content={projectsContent} />
        <Experience experience={experience} content={profile.experience} />
        <About content={profile.about} />
        <Contact content={profile.contactContent} links={profile.contact} />
      </main>
      <Footer profile={profile} />
    </>
  )
}

export default App
