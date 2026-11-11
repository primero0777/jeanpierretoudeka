export default function TimelineItem({ item }) {
  return (
    <li className="tl-item" data-reveal>
      <span className="tl-mark" aria-hidden="true" />
      <p className="tl-period">{item.period}</p>
      <div className="tl-body">
        <p className="tl-role">{item.role}</p>
        <h3>{item.org}</h3>
        <p className="tl-place">{item.place}</p>
        <p className="tl-text">{item.text}</p>
        <ul className="tags">{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </li>
  )
}
