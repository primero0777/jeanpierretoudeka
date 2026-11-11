import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Magnetic from './Magnetic.jsx'
import { scrollToTarget, pauseScroll, resumeScroll } from '../animations/smoothScroll'

const links = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'parcours', label: 'Parcours' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'projets', label: 'Projets' },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      <AnimatePresence>
        {open && (
          <motion.nav id="menu-mobile" className="mobile-menu" aria-label="Menu mobile"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }} animate={{ clipPath: 'inset(0% 0% 0% 0%)' }} exit={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}>
            {[...links, { id: 'contact', label: 'Contact' }].map((l, i) => (
              <motion.a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}
                initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}>
                <span>0{i + 1}</span>{l.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
