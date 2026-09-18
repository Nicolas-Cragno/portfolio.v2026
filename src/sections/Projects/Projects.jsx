import { useState } from "react";
import { ProjectCard } from "../../components/cards/ProjectCard.jsx";
import { ProjectsModal } from "../../components/modals/ProjectsModal.jsx";
import { ProjectDetailModal } from "../../components/modals/ProjectDetailModal.jsx";
import { GoArrowUpRight } from "react-icons/go";

export function Projects({ projects, content }) {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      tabIndex={-1}
      className="projects-section section"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <div className="projects-heading">
          <p className="section-eyebrow">{content.eyebrow}</p>
          <h2 id="projects-title">{content.title}</h2>
          <p className="projects-introduction">{content.introduction}</p>
        </div>
        <div className="cards-grid featured-projects">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                content={content}
                onSelect={setSelectedProject}
              />
            ))}
        </div>
        <div className="projects-actions">
          <button
            type="button"
            className="button"
            onClick={() => setShowAll(true)}
            aria-haspopup="dialog"
          >
            {content.all}
            <GoArrowUpRight className="icon" />
          </button>
        </div>
      </div>
      {showAll && (
        <ProjectsModal
          projects={projects}
          content={content}
          onSelect={setSelectedProject}
          onClose={() => setShowAll(false)}
        />
      )}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          content={content}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
