import SectionHead from '../components/SectionHead.jsx'
import { education } from '../data/education'

export default function Education() {
  return (
    <section className="section alt" id="formation">
      <div className="wrap">
        <SectionHead num="05" label="Formation" lines={['Les fondations', 'derrière le travail.']} />
        <ul className="rows" data-stagger>
          {education.map((e) => (
            <li key={e.title}>
              <p className="row-period">{e.period}</p>
              <div><h3>{e.title}</h3><p>{e.place}</p></div>
              <p className="row-kind">{e.kind}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
