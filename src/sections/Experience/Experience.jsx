export function Experience({ experience, content }) {
  return (
    <section id="experience" tabIndex={-1} className="content-section section" aria-labelledby="experience-title">
      <div className="container content-layout">
        <div className="content-heading">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h2 id="experience-title">{content.title}</h2>
        </div>
        <div className="experience-list">
          {experience.map(entry => (
            <article className="experience-entry" key={entry.id} aria-labelledby={`experience-${entry.id}`}>
              <p className="experience-period ui">{entry.period}</p>
              <h3 id={`experience-${entry.id}`}>{entry.role}</h3>
              <p className="experience-company">{entry.company}</p>
              <div className="content-prose">
                {entry.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
