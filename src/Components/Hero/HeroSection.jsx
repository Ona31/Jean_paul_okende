import "./HeroSection.css"


export default function Hero(){
    return(
      <section id="Hero">
         <h1>Jean-Paul <br /> Okende Kaleo</h1>
         <p>Basé à Kolwezi en République Démocratique du Congo, 
            je suis spécialisé dans la maintenance des équipements mécaniques industriels depuis plus de 15 ans.
                Mon objectif 
                  est de mettre mon expertise au service de la performance, de la fiabilité et de la sécurité des installations industrielles.</p>
                     <div className="linkss">
        <a href="#" className="cv">
          <i className="fa-solid fa-download"></i> Télécharger CV
        </a>
        <a href="#" className="wts">
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
      </div>
      
      <div className="links">
        <a  href="/cv/CV_JeanPaul_Okende_International_FR_Modern.pdf" 
  download className="cv">
          <i className="fa-solid fa-download"></i> Télécharger CV
        </a>
        <a href="https://wa.me/243976508811" target="_blank" className="wts">
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </a>
      </div>
      </section>
    )
}
