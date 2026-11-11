import { Mail, Phone } from 'lucide-react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import SectionHead from '../components/SectionHead.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { contact } from '../data/education'

const icons = { linkedin: FaLinkedinIn, facebook: FaFacebookF, instagram: FaInstagram, tiktok: FaTiktok, whatsapp: FaWhatsapp }

export default function Contact() {
  const socials = contact.socials.filter((s) => s.url)
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead num="05" label="Contact" lines={['Construisons', 'ensemble.']}>
          <p className="section-intro" data-reveal>Un chantier, une opportunité ou une collaboration en vue ? Parlons-en. Basé à {contact.address}.</p>
        </SectionHead>
        <div className="contact-grid">
          <div className="contact-side" data-stagger>
            <div className="action">
              <Phone size={20} aria-hidden="true" />
              <div>
                <p className="action-title">M'appeler</p>
                <p className="action-links">
                  {contact.phones.map((p) => <a key={p.href} href={p.href}>{p.label}</a>)}
                </p>
              </div>
            </div>
            <a className="action" href={`mailto:${contact.email}`}>
              <Mail size={20} aria-hidden="true" />
              <div>
                <p className="action-title">Écrire un e-mail</p>
                <p className="action-links"><span>{contact.email}</span></p>
              </div>
            </a>
            {socials.length > 0 && (
              <ul className="socials" aria-label="Réseaux sociaux">
                {socials.map((s) => {
                  const Icon = icons[s.id]
                  return (
                    <li key={s.id}>
                      <Magnetic strength={0.3}>
                        <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}><Icon size={18} aria-hidden="true" /></a>
                      </Magnetic>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div data-reveal><ContactForm /></div>
        </div>
      </div>
    </section>
  )
}
