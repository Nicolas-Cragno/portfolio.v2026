import { Modal } from './Modal.jsx'

export function ProjectDetailModal({ project, content, onClose }) {
  const { labels } = content
  const metadata = ['client', 'brand', 'status', 'period', 'type', 'access'].filter(field => project[field])
  const paragraphs = ['description', 'challenge', 'solution', 'participation', 'impact'].filter(field => project[field])
  const lists = ['features', 'technologies', 'metrics'].filter(field => project[field]?.length)
  const gallery = project.gallery?.filter(image => image.src && image.alt) || []
  const collaborators = project.collaborators?.filter(person => person.name) || []

  return (
    <Modal title={project.name} content={content} onClose={onClose} className="project-detail-modal">
      {!!metadata.length && (
        <dl className="project-metadata">
          {metadata.map(field => <div key={field}><dt>{labels[field]}</dt><dd>{project[field]}</dd></div>)}
        </dl>
      )}
      <div className="project-detail-content">
        {paragraphs.map(field => (
          <section className="project-detail-section" key={field}>
            <h3>{labels[field]}</h3><p>{project[field]}</p>
          </section>
        ))}
        {lists.map(field => (
          <section className="project-detail-section" key={field}>
            <h3>{field === 'features' ? project.featuresLabel || labels.features : labels[field]}</h3>
            <ul className={field === 'technologies' ? 'project-tags' : 'project-detail-list'}>
              {project[field].map(item => <li key={item}>{item}</li>)}
            </ul>
          </section>
        ))}
        {!!collaborators.length && (
          <section className="project-detail-section">
            <h3>{labels.collaborators}</h3>
            <ul className="project-collaborators">
              {collaborators.map(person => (
                <li key={person.name}>
                  {person.url ? <a href={person.url} target="_blank" rel="noopener noreferrer">{person.name}</a> : <span>{person.name}</span>}
                  {person.role && <p>{person.role}</p>}
                </li>
              ))}
            </ul>
          </section>
        )}
        {!!gallery.length && (
          <section className="project-detail-section">
            <h3>{labels.gallery}</h3>
            <div className="project-gallery">
              {gallery.map(image => (
                <figure key={image.src}>
                  <img src={image.src} alt={image.alt} loading="lazy" width={image.width} height={image.height} />
                  {image.caption && <figcaption>{image.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </section>
        )}
        {(project.web || project.github) && (
          <div className="project-external-links">
            {['web', 'github'].filter(field => project[field]).map(field => (
              <a className="button" key={field} href={project[field]} target="_blank" rel="noopener noreferrer">{labels[field]}<span aria-hidden="true">↗</span></a>
            ))}
          </div>
        )}
      </div>
    </Modal>
  )
}
