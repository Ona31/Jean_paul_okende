import "./HeroSection.css"


export default function Hero(){
    return(
      <section id="Hero">
         <h1>Jean-Paul <br /> Okende Kaleo</h1>
         <p>Basé à Kolwezi en République Démocratique du Congo, 
            je suis spécialisé dans la maintenance des équipements mécaniques industriels depuis plus de 15 ans.
                Mon objectif 
                  est de mettre mon expertise au service de la performance, de la fiabilité et de la sécurité des installations industrielles.</p>
                       <div className="links">
                <a href="" className="cv"><i class="fa-solid fa-regular fa-download"></i>Telecharger CV</a>
                <a href="" className="wts"><i class="fa-brands fa- fa-whatsapp"></i>Whatsapp</a>
            </div>
      </section>
    )
}
