import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'
import Lines from '../components/Lines.jsx'
import { gsap, reducedMotion } from '../animations/gsapConfig'

export default function Hero({ ready }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ready || reducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power4.out' } })
        .fromTo('.hero-bg img', { scale: 1.18, opacity: 0 }, { scale: 1.04, opacity: 1, duration: 2.4, ease: 'power3.out' }, 0)
        .from('.hero-id > *', { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.08 })
        .from('.hero-title .line-in', { yPercent: 110, duration: 1.2, stagger: 0.1 }, 0.1)
        .from('.hero-rule', { scaleX: 0, duration: 1.2, ease: 'power3.inOut' }, 0.5)
        .from('.hero-foot > *', { y: 24, autoAlpha: 0, duration: 0.9, stagger: 0.1 }, 0.9)
    }, ref)
    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero-bg" aria-hidden="true"><img src="./photos/facade-plongee.webp" alt="" fetchpriority="high" /></div>
      <div className="wrap hero-inner">
        <div className="hero-id">
          <p className="hero-name">Jean-Pierre Toudeka</p>
          <p className="hero-role">Conducteur de travaux génie civil</p>
        </div>
        <div>
          <Lines as="h1" className="hero-title" lines={['Construire', 'avec', 'précision.']} />
          <span className="hero-rule" aria-hidden="true" />
        </div>
        <div className="hero-foot">
          <p className="hero-desc">De la planification technique à la réception, je coordonne les travaux, j'encadre des équipes pluridisciplinaires et je veille à la qualité d'exécution sur des chantiers de bâtiment.</p>
          <ul className="hero-meta">
            <li>Lomé, Togo</li>
            <li>Plus de 3 ans de conduite de chantiers</li>
            <li className="is-open">Ouvert aux opportunités professionnelles</li>
          </ul>
          <p className="hero-scroll" aria-hidden="true">Défiler <ArrowDown size={16} /></p>
        </div>
      </div>
    </section>
  )
}
