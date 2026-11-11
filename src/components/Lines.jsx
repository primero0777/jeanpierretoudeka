// Titre découpé en lignes, chacune dans un masque pour la révélation verticale.
export default function Lines({ as: Tag = 'h2', lines, className = '' }) {
  return (
    <Tag className={className} data-lines aria-label={lines.join(' ')}>
      {lines.map((l, i) => (
        <span className="line" aria-hidden="true" key={i}>
          <span className="line-in">{l}</span>
        </span>
      ))}
    </Tag>
  )
}
