import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { gsap, reducedMotion } from '../animations/gsapConfig'
import { X } from 'lucide-react'
import PhotoSlot from './PhotoSlot.jsx'
import { pauseScroll, resumeScroll } from '../animations/smoothScroll'

export default function CaseStudy({ project, onClose }) {
  const closeRef = useRef(null)
  const ref = useRef(null)
  const closing = useRef(false)

  useLayoutEffect(() => {
    if (reducedMotion()) return
    const tween = gsap.fromTo(ref.current, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.7, ease: 'power4.inOut' })
    return () => tween.kill()
  }, [])

  // On joue la fermeture, puis on prévient le parent qui retire la fiche.
  const close = useCallback(() => {
    if (closing.current) return
    closing.current = true
    if (reducedMotion()) { onClose(); return }
    gsap.to(ref.current, { clipPath: 'inset(100% 0% 0% 0%)', duration: 0.6, ease: 'power4.inOut', onComplete: onClose })
  }, [onClose])

  useEffect(() => {
    const previous = document.activeElement
    pauseScroll()
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const key = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('keydown', key)
      document.body.style.overflow = ''
      resumeScroll()
      previous?.focus?.()
    }
  }, [close])

  return (
    <div className="case" role="dialog" aria-modal="true" aria-labelledby="case-title" data-lenis-prevent ref={ref}>
      <div className="wrap case-inner">
        <button ref={closeRef} className="case-close" onClick={close}><X size={18} aria-hidden="true" /> Fermer</button>
        <p className="section-label"><span>{project.role}</span> / {project.category}</p>
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
          <PhotoSlot src={project.image} hint={project.imageHint} ratio="16 / 9" className="wide" caption />
          {project.gallery.map((g, i) => <PhotoSlot key={i} src={g.image} hint={g.hint} ratio={g.ratio || '4 / 3'} className={g.wide ? 'wide' : ''} caption />)}
        </div>
      </div>
    </div>
  )
}
