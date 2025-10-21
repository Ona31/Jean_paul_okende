import { useState } from "react";
import "./Navbar.css";
import './script';

export default function Navbar() {
  // état pour gérer l’ouverture/fermeture du menu
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header id="header">
      <div className="logo">
        <h1>
          <span>JP</span>Okende
        </h1>
      </div>

      {/* Bouton menu burger */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </div>

      <nav>
        <ul className={menuOpen ? "active" : ""}>
          <li><a href="#Hero" onClick={closeMenu}>Home</a></li>
          <li><a href="#About" onClick={closeMenu}>About</a></li>
          <li><a href="#Competence" onClick={closeMenu}>Competence</a></li>
          <li><a href="#Experiences" onClick={closeMenu}>Experiences</a></li>
          <li><a href="#Footer" onClick={closeMenu}>Contacts</a></li>
        <div className="linkss">
        <a href="/cv/CV_JeanPaul_Okende_International_FR_Modern.pdf" 
  download className="cv">
          <i className="fa-solid fa-download"></i> Télécharger CV
        </a>
        <a href="#" className="wts">
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
      </div>
        </ul>
        
      </nav>

      <div className="links">
        <a  href="/cv/CV_JeanPaul_Okende_International_FR_Modern.pdf" 
  download className="cv">
          <i className="fa-solid fa-download"></i> Télécharger CV
        </a>
        <a href="https://wa.me/243976508811" target="_blank" className="wts">
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
      </div>
    </header>
  );
}
