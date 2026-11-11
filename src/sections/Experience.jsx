import SectionHead from '../components/SectionHead.jsx'
import TimelineItem from '../components/TimelineItem.jsx'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section className="section" id="parcours">
      <div className="wrap">
        <SectionHead num="02" label="Parcours" lines={["L'expérience", 'qui inspire confiance.']} />
        <ol className="timeline">
          <span className="timeline-track" aria-hidden="true"><span className="timeline-progress" /></span>
          {experiences.map((x) => <TimelineItem key={x.org} item={x} />)}
        </ol>
      </div>
    </section>
  )
}
