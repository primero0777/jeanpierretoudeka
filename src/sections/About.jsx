import SectionHead from '../components/SectionHead.jsx'
import portrait from '../assets/portrait.webp'

const keys = ['Conduite de travaux', 'Coordination technique', "Leadership d'équipe", 'Qualité et sécurité']

export default function About() {
  return (
    <section className="section about" id="a-propos">
      <div className="wrap">
        <SectionHead num="01" label="À propos" lines={['Un professionnel', 'bâti sur la précision.']} />
        <div className="about-grid">
          <div className="about-text">
            <p className="lead" data-reveal>Conducteur de travaux génie civil diplômé de l'École Supérieure des Ponts et Chaussées de Lomé.</p>
            <div data-stagger>
              <p>Plus de trois ans de conduite de chantiers de bâtiment, dont deux ans sur un établissement recevant du public.</p>
              <p>Je prends en charge la finition carrelage, l'aménagement complet et les systèmes techniques (plomberie, électricité), de la préparation à la réception.</p>
              <p>Trois ans de management en organisation internationale : je sais fédérer une équipe sans levier hiérarchique.</p>
            </div>
            <ul className="about-keys" data-stagger>
              {keys.map((k) => <li key={k}>{k}</li>)}
            </ul>
          </div>
          <figure className="about-portrait">
            <div className="portrait-frame" data-mask>
              <img src={portrait} width="1000" height="1073" alt="Portrait de Jean-Pierre Toudeka, bras croisés, en chemise et cravate" decoding="async" />
            </div>
            <figcaption>Jean-Pierre Toudeka<span>Lomé, Togo</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
