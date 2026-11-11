import SectionHead from '../components/SectionHead.jsx'
import SkillCard from '../components/SkillCard.jsx'
import { skills } from '../data/skills'

export default function Expertise() {
  return (
    <section className="section alt" id="expertise">
      <div className="wrap">
        <SectionHead num="03" label="Expertise" lines={["Ce que j'apporte", 'sur le chantier.']} />
        <div className="skills" data-stagger>
          {skills.map((s, i) => <SkillCard key={s.title} skill={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}
