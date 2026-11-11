import { useEffect, useState } from 'react'
import { Check, Copy } from 'lucide-react'

// Copie une valeur dans le presse-papiers et confirme par « Copié ».
export default function CopyButton({ value, label }) {
  const [state, setState] = useState('idle')

  useEffect(() => {
    if (state === 'idle') return
    const t = setTimeout(() => setState('idle'), 2000)
    return () => clearTimeout(t)
  }, [state])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('done')
    } catch {
      setState('failed')
    }
  }

  return (
    <button type="button" className={`copy is-${state}`} onClick={copy} aria-label={label}>
      {state === 'done' ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span aria-live="polite">{state === 'done' ? 'Copié' : state === 'failed' ? 'Copie impossible' : 'Copier'}</span>
    </button>
  )
}
