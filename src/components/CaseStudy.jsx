import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import PhotoSlot from './PhotoSlot.jsx'
import { pauseScroll, resumeScroll } from '../animations/smoothScroll'

export default function CaseStudy({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const previous = document.activeElement
    pauseScroll()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const key = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('keydown', key)
      document.body.style.overflow = ''
      resumeScroll()
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <motion.div className="case" role="dialog" aria-modal="true" aria-labelledby="case-title" data-lenis-prevent
      initial={{ clipPath: 'inset(100% 0% 0% 0%)' }} animate={{ clipPath: 'inset(0% 0% 0% 0%)' }} exit={{ clipPath: 'inset(100% 0% 0% 0%)' }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
      <div className="wrap case-inner">
        <button ref={closeRef} className="case-close" onClick={onClose}><X size={18} aria-hidden="true" /> Fermer</button>
        <p className="section-label"><span>{project.kind}</span> / {project.category}</p>
        <h2 id="case-title" className="section-title">{project.title}</h2>
        <div className="case-grid">
          <dl className="case-facts">
            <div><dt>Lieu</dt><dd>{project.place}</dd></div>
            <div><dt>Période</dt><dd>{project.period}</dd></div>
          </dl>
          <div>
            <p className="case-text">{project.text}</p>
            <h3 className="case-sub">Périmètre d'intervention</h3>
            <ul className="tags">{project.scope.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
        <div className="case-photos">
          <PhotoSlot src={project.image} alt={project.title} hint={project.imageHint} ratio="16 / 9" className="wide" />
          {project.gallery.map((g, i) => <PhotoSlot key={i} src={g.image} alt={g.hint} hint={g.hint} ratio="4 / 3" />)}
        </div>
      </div>
    </motion.div>
  )
}
