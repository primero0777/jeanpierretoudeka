import { ArrowUpRight } from 'lucide-react'
import PhotoSlot from './PhotoSlot.jsx'

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="project">
      <button className="project-btn" onClick={() => onOpen(project)} data-cursor="Voir" aria-label={`Ouvrir le détail : ${project.title}`}>
        <div className="project-media" data-mask>
          <PhotoSlot src={project.image} alt={project.imageHint} hint={project.imageHint} ratio={index === 0 ? '16 / 9' : '4 / 3'} />
        </div>
        <div className="project-info">
          <p className="project-kind"><span>{project.kind}</span>{project.category}</p>
          <h3>{project.title}</h3>
          <p className="project-meta">{project.place}<br />{project.period}</p>
          <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={22} /></span>
        </div>
      </button>
    </article>
  )
}
