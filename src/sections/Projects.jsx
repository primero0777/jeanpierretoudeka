import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionHead from '../components/SectionHead.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import CaseStudy from '../components/CaseStudy.jsx'
import { projects } from '../data/projects'

export default function Projects() {
  const [open, setOpen] = useState(null)
  const close = useCallback(() => setOpen(null), [])
  return (
    <section className="section" id="projets">
      <div className="wrap">
        <SectionHead num="04" label="Réalisations" lines={['Construit', 'avec intention.']} />
        <div className="projects">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} onOpen={setOpen} />)}
        </div>
      </div>
      <AnimatePresence>{open && <CaseStudy project={open} onClose={close} />}</AnimatePresence>
    </section>
  )
}
