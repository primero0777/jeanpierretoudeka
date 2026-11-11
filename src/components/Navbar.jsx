import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, reducedMotion } from '../animations/gsapConfig'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Magnetic from './Magnetic.jsx'
import { scrollToTarget, pauseScroll, resumeScroll } from '../animations/smoothScroll'

const links = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'formation', label: 'Formation' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [shown, setShown] = useState(false)
  const menuRef = useRef(null)

  // Le menu reste monté pendant l'animation de fermeture, puis il est retiré.
  useEffect(() => {
    if (open) { setShown(true); return }
    if (!shown || !menuRef.current) return
    if (reducedMotion()) { setShown(false); return }
    const tween = gsap.to(menuRef.current, { clipPath: 'inset(0% 0% 100% 0%)', duration: 0.45, ease: 'power3.inOut', onComplete: () => setShown(false) })
    return () => tween.kill()
  }, [open]) // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    if (!shown || !open || !menuRef.current || reducedMotion()) return
    const el = menuRef.current
    const ctx = gsap.context(() => {
      gsap.fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.55, ease: 'power4.inOut' })
      gsap.fromTo(el.querySelectorAll('a'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, delay: 0.2, ease: 'power3.out' })
    }, el)
    return () => ctx.revert()
  }, [shown]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    document.querySelectorAll('main section[id]').forEach((s) => io.observe(s))
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  useEffect(() => {
    if (open) pauseScroll(); else resumeScroll()
    const esc = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    resumeScroll()
    setTimeout(() => scrollToTarget(id === 'top' ? 0 : `#${id}`), 10)
  }

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap nav-row">
          <a className="nav-logo" href="#top" onClick={(e) => go(e, 'top')} aria-label="Jean-Pierre Toudeka, retour en haut">JP <i>/</i> Toudeka</a>
          <nav className="nav-links" aria-label="Navigation principale">
            {links.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)} className={active === l.id ? 'is-active' : ''} aria-current={active === l.id ? 'true' : undefined}>{l.label}</a>
            ))}
          </nav>
          <Magnetic>
            <a className="nav-cta" href="#contact" onClick={(e) => go(e, 'contact')}>Me contacter <ArrowUpRight size={16} aria-hidden="true" /></a>
          </Magnetic>
          <button className="nav-burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>
      {shown && (
        <nav id="menu-mobile" className="mobile-menu" aria-label="Menu mobile" ref={menuRef}>
          {[...links, { id: 'contact', label: 'Contact' }].map((l, i) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
              <span>0{i + 1}</span>{l.label}
            </a>
          ))}
        </nav>
      )}
    </>
  )
}
