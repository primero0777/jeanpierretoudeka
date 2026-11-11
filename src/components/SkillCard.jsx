const keepCase = ['ArchiCAD', 'AutoCAD', 'Word, Excel, PowerPoint']
const lower = (s, i) => (i === 0 || keepCase.includes(s) || !/^\p{Lu}\p{Ll}/u.test(s) ? s : s[0].toLocaleLowerCase('fr') + s.slice(1))

export default function SkillCard({ skill, index }) {
  return (
    <article className="skill">
      <span className="skill-num">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <h3>{skill.title}</h3>
        <p>{skill.items.map(lower).join(', ')}.</p>
      </div>
    </article>
  )
}
