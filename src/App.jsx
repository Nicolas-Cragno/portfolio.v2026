import { getData } from './data/index.js'
import { usePageMetadata } from './hooks/usePageMetadata.js'
import { useTheme } from './hooks/useTheme.js'

function App() {
  const { profile } = getData(window.location.pathname)
  useTheme()
  usePageMetadata(profile)

  return (
    <main className="container section">
      <h1>{profile.name}</h1>
    </main>
  )
}

export default App
