import { Linkedin, Mail, Phone } from 'lucide-react'
import SectionHead from '../components/SectionHead.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { contact } from '../data/education'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="wrap">
        <SectionHead num="05" label="Contact" lines={['Construisons', 'ensemble.']}>
          <p className="section-intro" data-reveal>Un chantier, une opportunité ou une collaboration en vue ? Parlons-en. Basé à {contact.address}.</p>
        </SectionHead>
        <div className="contact-grid">
          <div className="contact-actions" data-stagger>
            <Magnetic strength={0.1}><a className="action" href={contact.phones[0].href}><Phone size={20} aria-hidden="true" /><span>M'appeler<small>{contact.phones.map((p) => p.label).join(' / ')}</small></span></a></Magnetic>
            <Magnetic strength={0.1}><a className="action" href={`mailto:${contact.email}`}><Mail size={20} aria-hidden="true" /><span>Écrire un e-mail<small>{contact.email}</small></span></a></Magnetic>
            <Magnetic strength={0.1}><a className="action" href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} aria-hidden="true" /><span>LinkedIn<small>in/jeanpierretoudeka</small></span></a></Magnetic>
          </div>
          <div data-reveal><ContactForm /></div>
        </div>
      </div>
    </section>
  )
}
