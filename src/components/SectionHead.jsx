import Lines from './Lines.jsx'

export default function SectionHead({ num, label, lines, children }) {
  return (
    <header className="section-head">
      <p className="section-label" data-reveal><span>{num}</span> / {label}</p>
      <Lines lines={lines} className="section-title" />
      {children}
    </header>
  )
}
