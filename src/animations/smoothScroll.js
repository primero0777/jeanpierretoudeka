import Lenis from 'lenis'
import { gsap, ScrollTrigger, reducedMotion } from './gsapConfig'

let lenis = null

// Lenis pilote le défilement, ScrollTrigger lit sa position : une seule boucle, celle de GSAP.
export function startSmoothScroll() {
  if (reducedMotion()) return () => {}
  lenis = new Lenis({ duration: 1.1, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (time) => lenis && lenis.raf(time * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return () => {
    gsap.ticker.remove(tick)
    lenis.destroy()
    lenis = null
  }
}

export function scrollToTarget(target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target
  if (!el && target !== 0) return
  if (lenis) lenis.scrollTo(target === 0 ? 0 : el, { offset: target === 0 ? 0 : -70 })
  else if (target === 0) window.scrollTo({ top: 0 })
  else el.scrollIntoView()
}

export const pauseScroll = () => lenis && lenis.stop()
export const resumeScroll = () => lenis && lenis.start()
