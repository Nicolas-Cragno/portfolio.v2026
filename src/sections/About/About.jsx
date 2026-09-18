export function About({ content }) {
  return (
    <section id="about" tabIndex={-1} className="content-section section" aria-labelledby="about-title">
      <div className="container content-layout">
        <div className="content-heading">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h2 id="about-title">{content.title}</h2>
        </div>
        <div className="content-prose about-prose">
          {content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
