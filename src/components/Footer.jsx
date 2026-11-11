import { ArrowUp } from 'lucide-react'
import { scrollToTarget } from '../animations/smoothScroll'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <div>
          <p className="footer-name">Jean-Pierre Toudeka</p>
          <p>Conducteur de travaux génie civil<br />Lomé, Togo</p>
        </div>
        <p>© 2026. Tous droits réservés.</p>
        <a className="to-top" href="#top" onClick={(e) => { e.preventDefault(); scrollToTarget(0) }} aria-label="Retour en haut"><ArrowUp size={20} aria-hidden="true" /></a>
      </div>
    </footer>
  )
}
