export function Contact({ content, links }) {
  return (
    <section id="contact" tabIndex={-1} className="content-section contact-section section" aria-labelledby="contact-title">
      <div className="container content-layout">
        <div className="content-heading">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h2 id="contact-title">{content.title}</h2>
        </div>
        <div className="contact-content">
          <p className="contact-description">{content.description}</p>
          <ul className="contact-links">
            {Object.entries(content.labels).map(([key, label]) => (
              <li key={key}>
                <a href={key === 'email' ? `mailto:${links[key]}` : links[key]} target={key === 'email' ? undefined : '_blank'} rel={key === 'email' ? undefined : 'noopener noreferrer'}>
                  <span>{label}</span><span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
