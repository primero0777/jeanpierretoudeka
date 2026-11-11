import { useCallback, useState } from 'react'
import SectionHead from '../components/SectionHead.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CaseStudy from '../components/CaseStudy.jsx'
import { projects } from '../data/projects'

export default function Projects() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  return (
    <section className="section" id="parcours">
      <div className="wrap">
        <SectionHead num="02" label="Parcours" lines={['Chantier', 'par chantier.']} />
        <div className="projects">
          {projects.map((p) => <ProjectCard key={p.id} project={p} onOpen={setOpen} />)}
        </div>
      </div>
      {open && <CaseStudy project={open} onClose={close} />}
    </section>
  )
}
