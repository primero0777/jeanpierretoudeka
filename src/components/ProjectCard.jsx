import { ArrowUpRight } from 'lucide-react'
import PhotoSlot from './PhotoSlot.jsx'

export default function ProjectCard({ project, onOpen }) {
  const big = Boolean(project.image)
  return (
    <article className={`project ${big ? 'is-big' : 'is-row'}`}>
      <button className="project-btn" onClick={() => onOpen(project)} data-cursor="Voir" aria-label={`Ouvrir le détail : ${project.title}`}>
        {big && (
          <div className="project-media" data-mask>
            <PhotoSlot src={project.image} alt={project.imageHint} hint={project.imageHint} ratio="21 / 9" />
          </div>
        )}
        <div className="project-info">
          <p className="project-period">{project.period}</p>
          <div>
            <h3>{project.title}</h3>
            <p className="project-role">{project.role}<span>{project.category}</span></p>
          </div>
          <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
        </div>
      </button>
    </article>
  )
}
