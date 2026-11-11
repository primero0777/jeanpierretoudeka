import { ClipboardList, Grid2x2, Zap, Users, ShieldCheck, Handshake, DraftingCompass, Square } from 'lucide-react'

const Icons = { ClipboardList, Grid2x2, Zap, Users, ShieldCheck, Handshake, DraftingCompass }

export default function SkillCard({ skill, index }) {
  const Icon = Icons[skill.icon] || Square
  return (
    <article className="skill">
      <div className="skill-top">
        <span className="skill-num">{String(index + 1).padStart(2, '0')}</span>
        <Icon size={26} strokeWidth={1.25} aria-hidden="true" />
      </div>
      <h3>{skill.title}</h3>
      <ul>{skill.items.map((i) => <li key={i}>{i}</li>)}</ul>
    </article>
  )
}
