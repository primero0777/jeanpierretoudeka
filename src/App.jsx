import { useEffect, useRef } from 'react'
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
  const root = useRef(null)

  useEffect(() => {
    const stopScroll = startSmoothScroll()
    const stopAnims = initScrollAnimations(root.current)
    return () => { stopAnims(); stopScroll() }
  }, [])

  return (
    <div ref={root}>
      <CustomCursor />
      <a className="skip" href="#a-propos">Aller au contenu</a>
      <Navbar />
      <main>
        <Hero />
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
