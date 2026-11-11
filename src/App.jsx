import { useCallback, useEffect, useRef, useState } from 'react'
import Preloader from './components/Preloader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Expertise from './sections/Expertise.jsx'
import Projects from './sections/Projects.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
import { startSmoothScroll } from './animations/smoothScroll'
import { initScrollAnimations } from './animations/scrollAnimations'

export default function App() {
  const [ready, setReady] = useState(false)
  const root = useRef(null)
  const done = useCallback(() => setReady(true), [])

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = ready ? '' : 'hidden'
    if (!ready) return
    const stopScroll = startSmoothScroll()
    const stopAnims = initScrollAnimations(root.current)
    return () => { stopAnims(); stopScroll() }
  }, [ready])

  return (
    <div ref={root}>
      {!ready && <Preloader onDone={done} />}
      <CustomCursor />
      <a className="skip" href="#a-propos">Aller au contenu</a>
      <Navbar />
      <main>
        <Hero ready={ready} />
        <About />
        <Projects />
        <Expertise />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
