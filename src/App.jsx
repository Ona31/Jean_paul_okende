/** le fichier principale */


/**les importations */
import "./App.css"
import About from "./Components/About/AboutSection"
import Competance from "./Components/Competance/CompetanceSection"
import Experience from "./Components/Experience/ExperinceSection"
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
      </div>
    </div>
  )
}