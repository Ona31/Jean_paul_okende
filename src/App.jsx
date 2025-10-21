/** le fichier principale */


/**les importations */
import "./App.css"
import About from "./Components/About/AboutSection"
import DeveloperBadge from "./Components/BTN/BoutonFlot"
import Competance from "./Components/Competance/CompetanceSection"
import Experience from "./Components/Experience/ExperinceSection"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/HeroSection"
import Navbar from "./Components/NavBar/Navbar"
/**-------------------------------- */



export default function App(){

  return(
    <div className="container">
      <Navbar/>
      <div className="main">
        <Hero/>
        <About/>
        <Competance/>
        <Experience/>
        <Footer/>
        <DeveloperBadge/>
      </div>
      
    </div>
  )
}