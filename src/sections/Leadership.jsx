import SectionHead from '../components/SectionHead.jsx'
import { leadership } from '../data/education'

export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="wrap">
        <SectionHead num="06" label="Leadership" lines={['Au-delà', 'du chantier.']} />
        <div className="lead-grid" data-stagger>
          {leadership.map((l) => (
            <article key={l.org}>
              <p className="row-period">{l.period}</p>
              <h3>{l.org}</h3>
              <p className="lead-role">{l.role}</p>
              <p>{l.text}</p>
              {l.points.length > 0 && <ul className="plain">{l.points.map((p) => <li key={p}>{p}</li>)}</ul>}
            </article>
          ))}
        </div>
        <div className="extras" data-stagger>
          <div>
            <h3>Langues</h3>
            <dl>
              <div><dt>Français</dt><dd>Langue de travail : parlé, lu, écrit</dd></div>
              <div><dt>Anglais</dt><dd>Niveau scolaire : parlé, lu, écrit</dd></div>
            </dl>
          </div>
          <div>
            <h3>Centres d'intérêt</h3>
            <ul className="tags"><li>Sport</li><li>Musique</li><li>Lecture</li></ul>
          </div>
        </div>
      </div>
    </section>
  )
}
