
/*la nav barre */

import "./Navbar.css"
import "./script"


export default  function Navbar(){
    return(
        <header id="header">
            <div className="logo">
                <h1><span>JP</span>Okende</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="#Hero">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Competence">Competance</a></li>
                    <li><a href="#Experiences">Experiences</a></li>
                    <li><a href="#Footer">Contacts</a></li>
                </ul>
            </nav>
            <div className="links">
                <a href="" className="cv"><i class="fa-solid fa-regular fa-download"></i>Telecharger CV</a>
                <a href="" className="wts"><i class="fa-brands fa- fa-whatsapp"></i>Whatsapp</a>
            </div>
        </header>
    )
}