import { experiences } from "../../data/data"
import "./Experience.css"


export default function Experience(){
    return(
        <section id="Experiences">
            <h2>Mon Expereince</h2>
        <div className="experiences_partie">
           {
            experiences.map((item,index) =>(
                <div key={index} className="content_card">

                    
                        <div className="head">
<h4>{item.company}</h4>
                    <h5>{item.title}</h5>
                    <span>{item.start}{item.end}</span>
                        </div>
                    
                    <div className="resp">
                        <p>{item.responsibilities}</p>
                    </div>
                    
                </div>
            ))
           }
        </div>
        
        </section>
    )
}