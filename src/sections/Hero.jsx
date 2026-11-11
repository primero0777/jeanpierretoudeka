import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Lines from '../components/Lines.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { gsap, reducedMotion } from '../animations/gsapConfig'
import { scrollToTarget } from '../animations/smoothScroll'

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    if (reducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .from('.hero-kicker', { y: 16, autoAlpha: 0, duration: 0.8 })
        .from('.hero-title .line-in', { yPercent: 110, duration: 1.1, stagger: 0.1 }, 0.1)
        .fromTo('.hero-photo', { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'power4.inOut' }, 0.15)
        .fromTo('.hero-photo img', { scale: 1.2 }, { scale: 1, duration: 1.8, ease: 'power3.out' }, 0.15)
        .from('.hero-frame', { x: -18, y: -18, autoAlpha: 0, duration: 1 }, 0.9)
        .from('.hero-desc, .hero-actions', { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.1 }, 0.7)
        .from('.hero-stat', { scale: 0.6, autoAlpha: 0, duration: 0.7, stagger: 0.12, ease: 'back.out(1.6)' }, 1.1)
    }, ref)
    return () => ctx.revert()
  }, [])

  const go = (e, id) => { e.preventDefault(); scrollToTarget(id) }

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="wrap hero-inner">
        <div className="hero-text">
          <p className="hero-kicker"><span className="dot" aria-hidden="true" />Conducteur de travaux génie civil, Lomé</p>
          <Lines as="h1" className="hero-title" lines={['Construire', 'avec précision.']} />
          <p className="hero-desc">Jean-Pierre Toudeka. Je mène les chantiers de bâtiment de la préparation à la réception : finitions, plomberie, électricité et équipes.</p>
          <div className="hero-actions">
            <Magnetic strength={0.15}><a className="btn-yellow" href="#parcours" onClick={(e) => go(e, '#parcours')}>Voir mes chantiers</a></Magnetic>
            <a className="btn-line" href="#contact" onClick={(e) => go(e, '#contact')}>Me contacter <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </div>

        <figure className="hero-visual">
          <div className="hero-photo-wrap">
            <span className="hero-frame" aria-hidden="true" />
            <div className="hero-photo">
              <img src="./photos/mrode-chambre-portrait.webp" width="720" height="1080" alt="Chambre de l'annexe de l'hôtel M'RODE : panneaux muraux en bois à joints fins, suspensions, mobilier intégré" fetchpriority="high" />
            </div>
            <p className="hero-stat s1"><strong>3+ ans</strong>de conduite de chantiers</p>
            <p className="hero-stat s2"><strong>2 ans</strong>sur un établissement recevant du public</p>
          </div>
          <figcaption>Annexe de l'hôtel M'RODE, Lomé</figcaption>
        </figure>
      </div>
    </section>
  )
}
