import { useContext } from "react"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banners/Banner" 
import Header from "../components/Header/Header"
import AboutText from "../components/AboutText/AboutText"

//CONTEXT
import { AppConstext } from '../contexts/AppContext'


function About(){
    const appConstext = useContext(AppConstext)
    return (
        <>
        <Header/>
        <Banner title={appConstext.languages[appConstext.language].menu.about}image="about.jpg" />
        <div className="container">
            <AboutText/>
        </div>
        <Footer/>
        </>
    )
}

export default About