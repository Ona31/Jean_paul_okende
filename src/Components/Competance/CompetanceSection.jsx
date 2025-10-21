

import { competences } from "../../data/data"
import "./Competence.css"



export default function Competance(){
    return(
        <section id="Competence">
            <h2>Mes Competences</h2>
            <div className="comp_partie">
                {
                    competences.map((item,index) =>(
                     <div key={index} className="card_comp">

                        <div className="t_card">
                             <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>

                            <h3>{item.titre}</h3>
                        </div>
                        <p>{item.description}</p>
                     </div>

                    ))
                }
            </div>
        </section>
    )
}