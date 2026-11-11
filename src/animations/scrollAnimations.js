import { gsap, ScrollTrigger, reducedMotion } from './gsapConfig'

// Toutes les animations liées au défilement, déclarées par attributs data-* dans le JSX.
export function initScrollAnimations(root) {
  if (reducedMotion()) return () => {}
  const ctx = gsap.context(() => {
    gsap.utils.toArray('[data-lines]').forEach((el) => {
      if (el.closest('.hero')) return
      gsap.from(el.querySelectorAll('.line-in'), {
        yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.09,
        scrollTrigger: { trigger: el, start: 'top 86%' },
      })
    })
    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.from(el, { y: 28, autoAlpha: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
    })
    gsap.utils.toArray('[data-stagger]').forEach((el) => {
      gsap.from(el.children, { y: 24, autoAlpha: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } })
    })
    gsap.utils.toArray('[data-mask]').forEach((el) => {
      gsap.fromTo(el, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 86%' } })
      const img = el.querySelector('img')
      if (img) gsap.fromTo(img, { scale: 1.12 }, { scale: 1, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } })
    })
    const tl = root.querySelector('.timeline')
    if (tl) {
      gsap.fromTo('.timeline-progress', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 65%', end: 'bottom 65%', scrub: true } })
    }
    const philo = root.querySelector('.philo')
    if (philo) {
      gsap.fromTo('.philo .w', { opacity: 0.14 }, { opacity: 1, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: philo, start: 'top 65%', end: 'center 45%', scrub: true } })
    }
    gsap.to('.hero-bg', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    gsap.to('.hero-grid', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
  }, root)
  const refresh = () => ScrollTrigger.refresh()
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh)
  window.addEventListener('load', refresh)
  return () => { window.removeEventListener('load', refresh); ctx.revert() }
}
