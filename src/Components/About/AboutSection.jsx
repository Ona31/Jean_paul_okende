import "./AboutSection.css";
import profile from "../../assets/IMG-20251002-WA0126.jpg";

export default function About() {
  return (
    <section id="About">
      <h2>A propos de moi</h2>
      <div className="content">
        <div className="img">
          <div className="hr_tl"></div>
          <img src={profile} alt="profile image" />
        </div>
        <div className="text">
          <p>
            <strong>
              Je suis technicien spécialisé <br />
            </strong>
             Dans la maintenance des pompes
            centrifuges et volumétriques, des bandes transporteuses et des
            équipements mécaniques industriels. Au cours de ma carrière, j’ai eu
            l’opportunité de travailler pour plusieurs grandes entreprises
            minières, ce qui m’a permis d’acquérir une expérience solide et
            diversifiée.
          </p>
          <div className="card_text">
            <h4>Avec plus de 15 ans d’expérience ,Je me suis illustré par ma
              capacité à : </h4>
            <ol>
             <li>Optimiser les programmes de maintenance préventive.</li> 
           <li>   Réduire les temps d’arrêt des équipements critiques.</li> 
           <li>Superviser et
              encadrer des équipes de maintenance de plus de dix techniciens. Ma
              vision repose sur trois piliers essentiels : rigueur technique,
              sécurité au travail, et esprit d’équipe.</li> 
            
            </ol>
            <p>  Je crois qu’un
              environnement de travail sûr, allié à des pratiques de maintenance
              modernes, permet d’atteindre les plus hauts niveaux de performance
              et de productivité.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
