import { ProjectCard } from '../cards/ProjectCard.jsx'
import { Modal } from './Modal.jsx'

export function ProjectsModal({ projects, content, onSelect, onClose }) {
  return (
    <Modal title={content.allTitle} content={content} onClose={onClose} className="projects-list-modal">
      <div className="cards-grid projects-modal-grid">
        {projects.map(project => <ProjectCard key={project.id} project={project} content={content} onSelect={onSelect} />)}
      </div>
    </Modal>
  )
}
