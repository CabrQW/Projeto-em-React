import { useContext } from "react"
import { Link } from "react-router-dom"
import"./Hero.css"
import Button from "../Button/Button"

//CONTEXT
import { AppConstext } from '../../contexts/AppContext'

function Hero (){
    const appConstext = useContext(AppConstext)
    return(
        <div className="hero d-flex al-center">
            <div className="hero-text">
                <h1>
                    {appConstext.languages[appConstext.language].hero.title} 
                </h1>
                <p>
                    {appConstext.languages[appConstext.language].hero.subtitle} 
                </p>
                <Link>
                    <Button buttonStyle="secondary" arrow>
                        {appConstext.languages[appConstext.language].hero.cta}
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Hero