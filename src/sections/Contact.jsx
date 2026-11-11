import { Linkedin, Mail, Phone } from 'lucide-react'
import SectionHead from '../components/SectionHead.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { contact } from '../data/education'

export default function Contact() {
  return (
    <section className="section alt" id="contact">
      <div className="wrap">
        <SectionHead num="07" label="Contact" lines={['Construisons', 'quelque chose', 'qui compte.']}>
          <p className="section-intro" data-reveal>Un chantier, une opportunité professionnelle ou une collaboration en vue ? Parlons-en.</p>
        </SectionHead>
        <div className="contact-actions" data-stagger>
          <Magnetic strength={0.12}><a className="action" href={contact.phones[0].href}><Phone size={20} aria-hidden="true" />M'appeler</a></Magnetic>
          <Magnetic strength={0.12}><a className="action" href={`mailto:${contact.email}`}><Mail size={20} aria-hidden="true" />Écrire un e-mail</a></Magnetic>
          <Magnetic strength={0.12}><a className="action" href={contact.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} aria-hidden="true" />Me suivre sur LinkedIn</a></Magnetic>
        </div>
        <div className="contact-grid">
          <dl className="contact-info" data-stagger>
            <div><dt>Téléphone</dt>{contact.phones.map((p) => <dd key={p.href}><a href={p.href}>{p.label}</a></dd>)}</div>
            <div><dt>E-mail</dt><dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd></div>
            <div><dt>LinkedIn</dt><dd><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/jeanpierretoudeka</a></dd></div>
            <div><dt>Adresse</dt><dd>{contact.address}</dd></div>
          </dl>
          <div data-reveal><ContactForm /></div>
        </div>
      </div>
    </section>
  )
}
