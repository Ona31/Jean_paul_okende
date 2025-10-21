import "./Footer.css";

export default function Footer() {
  return (
    <footer id="Footer">
      <div className="footer-container">
        {/* Bloc gauche : logo + texte */}
        <div className="footer-about">
          <h2><span>JP</span>Okende</h2>
         <p>
  Technicien spécialisé dans la maintenance des pompes centrifuges et volumétriques, 
  des bandes transporteuses et des équipements mécaniques industriels. 
  Plus de 15 ans d’expérience dans l’industrie minière. 
  Expertise en maintenance préventive et corrective, amélioration des systèmes et sécurité au travail.
</p>

        </div>

        {/* Bloc centre : liens rapides */}
        <div className="footer-links">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="#Hero">Accueil</a></li>
            <li><a href="#About">À propos</a></li>
            <li><a href="#Competence">Compétences</a></li>
            <li><a href="#Experiences">Expériences</a></li>
            <li><a href="#Footer">Contacts</a></li>
          </ul>
        </div>

        {/* Bloc droit : contact + réseaux */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><i className="fa-solid fa-envelope"></i> okendejeanpaul979@gmail.com</p>
          <p><i className="fa-solid fa-phone"></i> +243 976 50 88 11</p>
          <div className="socials">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
            <a href="#"><i className="fa-brands fa-github"></i></a>
            <a href="https://wa.me/243976508811" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JP Okende. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
