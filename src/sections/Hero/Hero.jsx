export function Hero({ profile, theme }) {
  const { hero, assets } = profile

  return (
    <section className="hero container" id="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-location ui"><span aria-hidden="true">↗</span> {profile.location}</p>
        <h1 id="hero-title">{profile.name}</h1>
        <p className="hero-role">{profile.role}</p>
        <p className="hero-introduction">{hero.introduction}</p>
        <p className="hero-secondary">{hero.secondary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{hero.projects}<span aria-hidden="true">↗</span></a>
          <a className="button" href={assets.cv} target="_blank" rel="noopener noreferrer" aria-label={hero.cvLabel}>{hero.cv}<span aria-hidden="true">↗</span></a>
          <a className="hero-contact" href="#contact">{hero.contact}<span aria-hidden="true">→</span></a>
        </div>
      </div>
      <div className="hero-art">
        <img src={assets.hero[theme]} alt={hero.imageAlt[theme]} width="1536" height="1024" fetchPriority="high" />
      </div>
    </section>
  )
}
