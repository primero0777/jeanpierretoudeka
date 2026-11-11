import { useState } from 'react'
import { contact } from '../data/education'

const empty = { name: '', email: '', subject: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Indiquez votre nom complet.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Indiquez une adresse e-mail valide.'
  if (v.subject.trim().length < 3) e.subject = 'Indiquez un objet.'
  if (v.message.trim().length < 10) e.message = 'Écrivez un message de 10 caractères au minimum.'
  return e
}

// Pas de serveur : le formulaire prépare l'e-mail et ouvre la messagerie du visiteur.
// Rien n'est envoyé depuis le site, et le site ne prétend pas le contraire.
export default function ContactForm() {
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [opened, setOpened] = useState(false)

  const set = (k) => (e) => {
    const next = { ...values, [k]: e.target.value }
    setValues(next)
    if (errors[k]) setErrors(validate(next))
  }

  const submit = (e) => {
    e.preventDefault()
    const err = validate(values)
    setErrors(err)
    if (Object.keys(err).length) {
      document.getElementById(`f-${Object.keys(err)[0]}`)?.focus()
      return
    }
    const body = `${values.message.trim()}\n\n${values.name.trim()}\n${values.email.trim()}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  const field = (k, label, props = {}) => (
    <div className={`field ${errors[k] ? 'has-error' : ''}`}>
      <label htmlFor={`f-${k}`}>{label}</label>
      {props.rows
        ? <textarea id={`f-${k}`} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} />
        : <input id={`f-${k}`} value={values[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `e-${k}` : undefined} {...props} />}
      {errors[k] && <p className="field-error" id={`e-${k}`}>{errors[k]}</p>}
    </div>
  )

  return (
    <form className="form" onSubmit={submit} noValidate>
      <div className="form-row">
        {field('name', 'Nom complet', { type: 'text', autoComplete: 'name' })}
        {field('email', 'Adresse e-mail', { type: 'email', autoComplete: 'email' })}
      </div>
      {field('subject', 'Objet', { type: 'text' })}
      {field('message', 'Message', { rows: 5 })}
      <div className="form-foot">
        <button type="submit" className="btn-yellow">Préparer l'e-mail</button>
        <p className="form-note" role="status">
          {opened
            ? "Votre messagerie s'ouvre avec le message prêt. Il part quand vous cliquez sur Envoyer dans votre messagerie."
            : "Ce bouton ouvre votre messagerie avec le message déjà rédigé. Rien n'est envoyé depuis ce site."}
        </p>
      </div>
    </form>
  )
}
