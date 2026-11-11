import { useRef } from 'react'
import { gsap, reducedMotion } from '../animations/gsapConfig'

// Léger effet magnétique à la souris. Le focus clavier et le clic restent ceux de l'élément enfant.
export default function Magnetic({ children, strength = 0.25 }) {
  const ref = useRef(null)
  const active = () => !reducedMotion() && window.matchMedia('(pointer: fine)').matches
  const move = (e) => {
    if (!active()) return
    const r = ref.current.getBoundingClientRect()
    gsap.to(ref.current, { x: (e.clientX - r.left - r.width / 2) * strength, y: (e.clientY - r.top - r.height / 2) * strength, duration: 0.4, ease: 'power3.out' })
  }
  const leave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
  return <span ref={ref} className="magnetic" onMouseMove={move} onMouseLeave={leave}>{children}</span>
}
