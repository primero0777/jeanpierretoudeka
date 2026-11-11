import { Download, FileText, Mail, Phone, Share2 } from 'lucide-react'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa6'
import SectionHead from '../components/SectionHead.jsx'
import ContactForm from '../components/ContactForm.jsx'
import CopyButton from '../components/CopyButton.jsx'
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
            <div className="cc">
              <p className="cc-label"><Phone size={15} aria-hidden="true" />Téléphone</p>
              <ul className="cc-list">
                {contact.phones.map((p) => (
                  <li key={p.href}>
                    <a className="cc-value" href={p.href}>{p.label}</a>
                    {p.whatsapp && (
                      <a className="chip-wa" href={p.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Écrire sur WhatsApp au ${p.label}`}>
                        <FaWhatsapp size={13} aria-hidden="true" />WhatsApp
                      </a>
                    )}
                    <CopyButton value={p.label.replace(/\s/g, '')} label={`Copier le numéro ${p.label}`} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="cc">
              <p className="cc-label"><Mail size={15} aria-hidden="true" />E-mail</p>
              <ul className="cc-list">
                <li>
                  <a className="cc-value" href={`mailto:${contact.email}`}>{contact.email}</a>
                  <CopyButton value={contact.email} label="Copier l'adresse e-mail" />
                </li>
              </ul>
            </div>
            <div className="cc cc-cv">
              <p className="cc-label"><FileText size={15} aria-hidden="true" />CV</p>
              <a className="cv-link" href={contact.cv} download="CV-Jean-Pierre-Toudeka.pdf" target="_blank" rel="noopener">
                <span>Télécharger mon CV<small>PDF, 1 page</small></span>
                <Download size={20} aria-hidden="true" />
              </a>
            </div>
            {socials.length > 0 && (
              <div className="cc">
                <p className="cc-label"><Share2 size={15} aria-hidden="true" />Réseaux</p>
                <ul className="socials">
                  {socials.map((s) => {
                    const Icon = icons[s.id]
                    return (
                      <li key={s.id}>
                        <Magnetic strength={0.3}>
                          <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                            <Icon size={18} aria-hidden="true" />
                            <span className="tip" aria-hidden="true">{s.label}</span>
                          </a>
                        </Magnetic>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
          <div data-reveal><ContactForm /></div>
        </div>
      </div>
    </section>
  )
}
