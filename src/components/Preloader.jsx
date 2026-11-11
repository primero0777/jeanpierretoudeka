import { useEffect, useRef, useState } from 'react'
import { gsap, reducedMotion } from '../animations/gsapConfig'

export default function Preloader({ onDone }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    if (reducedMotion()) { onDone(); return }
    const count = { v: 0 }
    const tl = gsap.timeline({ onComplete: onDone })
    tl.to(count, { v: 100, duration: 1.5, ease: 'power2.inOut', onUpdate: () => setN(Math.round(count.v)) })
      .fromTo('.pre-line', { scaleX: 0 }, { scaleX: 1, duration: 1.5, ease: 'power2.inOut' }, 0)
      .to('.pre-inner', { autoAlpha: 0, duration: 0.3 })
      .to(ref.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' })
    return () => tl.kill()
  }, [onDone])

  return (
    <div className="preloader" ref={ref} aria-hidden="true">
      <div className="pre-inner">
        <span className="pre-initials">JP</span>
        <span className="pre-count">{String(n).padStart(3, '0')}</span>
      </div>
      <span className="pre-line" />
    </div>
  )
}
