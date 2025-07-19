import"./AboutText.css"
import { useContext } from "react"

//CONTEXT
import { AppConstext } from '../../contexts/AppContext'

function AboutText (){
    const appConstext = useContext(AppConstext)
    return(
            <div className="container">
                <div className="text-section d-flex">
                    <div className="text-section-text ">
                        <h2>{appConstext.languages[appConstext.language].about.title}</h2>
                    </div>
                    <div className="text-section-text ">
                        <p className="primary-color">{appConstext.languages[appConstext.language].about.p1}</p>
                        <p>{appConstext.languages[appConstext.language].about.p2}</p>
                        <p>{appConstext.languages[appConstext.language].about.p3}</p>
                    </div>
                </div>
            </div>
    )
}

export default AboutText