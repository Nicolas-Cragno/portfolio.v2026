import { useId } from 'react'

export function ProjectCard({ project, content, onSelect }) {
  const titleId = useId()

  return (
    <article className="card project-card" aria-labelledby={titleId}>
      {(project.brand || project.type) && <p className="project-category">{project.brand || project.type}</p>}
      <h3 id={titleId}>{project.name}</h3>
      {project.client && <p className="project-client">{project.client}</p>}
      {project.status && <p className="project-status"><span aria-hidden="true">·</span> {project.status}</p>}
      {project.description && <p className="project-summary">{project.description}</p>}
      {!!project.technologies?.length && (
        <ul className="project-tags" aria-label={content.labels.technologies}>
          {project.technologies.slice(0, 3).map(technology => <li className="tag" key={technology}>{technology}</li>)}
        </ul>
      )}
      <div className="project-card-footer">
        {project.access && <span className="project-access">{project.access}</span>}
        <button type="button" className="project-detail-button" onClick={() => onSelect(project)} aria-label={`${content.detail}: ${project.name}`} aria-haspopup="dialog">
          {content.detail}<span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  )
}
