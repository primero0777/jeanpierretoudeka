import SectionHead from '../components/SectionHead.jsx'
import { education, leadership } from '../data/education'

export default function Education() {
  return (
    <section className="section alt" id="formation">
      <div className="wrap">
        <SectionHead num="04" label="Formation et engagement" lines={['Les fondations', 'du métier.']} />
        <div className="edu-grid">
          <div>
            <h3 className="col-title">Formation</h3>
            <ul className="rows" data-stagger>
              {education.map((e) => (
                <li key={e.title}>
                  <p className="row-period">{e.period}</p>
                  <div><h4>{e.title}</h4><p>{e.place}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="col-title">Engagement</h3>
            <ul className="rows" data-stagger>
              {leadership.map((l) => (
                <li key={l.org}>
                  <p className="row-period">{l.period}</p>
                  <div>
                    <h4>{l.org}</h4>
                    <p>{l.role}. {l.text}{l.points.length > 0 && ` ${l.points.join('. ')}.`}</p>
                  </div>
                </li>
              ))}
            </ul>
            <dl className="mini" data-reveal>
              <div><dt>Langues</dt><dd>Français, langue de travail. Anglais, niveau scolaire.</dd></div>
              <div><dt>Centres d'intérêt</dt><dd>Sport, musique, lecture.</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
