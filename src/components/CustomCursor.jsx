import { useEffect, useRef, useState } from 'react'
import { gsap, reducedMotion } from '../animations/gsapConfig'

// Curseur personnalisé, uniquement à la souris. Il s'agrandit sur les éléments [data-cursor].
export default function CustomCursor() {
  const ref = useRef(null)
  const [label, setLabel] = useState('')
  const [enabled] = useState(() => window.matchMedia('(pointer: fine)').matches && !reducedMotion())

  useEffect(() => {
    if (!enabled) return
    const el = ref.current
    const x = gsap.quickTo(el, 'x', { duration: 0.35, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'y', { duration: 0.35, ease: 'power3.out' })
    const move = (e) => { x(e.clientX); y(e.clientY); el.classList.add('is-on') }
    const over = (e) => { const t = e.target.closest('[data-cursor]'); setLabel(t ? t.dataset.cursor : '') }
    const out = () => el.classList.remove('is-on')
    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    document.documentElement.addEventListener('mouseleave', out)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      document.documentElement.removeEventListener('mouseleave', out)
    }
  }, [enabled])

  if (!enabled) return null
  return <div ref={ref} className={`cursor ${label ? 'has-label' : ''}`} aria-hidden="true"><span>{label}</span></div>
}
