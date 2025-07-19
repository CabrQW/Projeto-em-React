import { useContext } from "react"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Banner from "../components/Banners/Banner" 
import Header from "../components/Header/Header"

//CONTEXT
import { AppConstext } from '../contexts/AppContext'

function Projects(){
    const appConstext = useContext(AppConstext)
    return (
        <>
        <Header/>
        <Banner title={appConstext.languages[appConstext.language].menu.projects}image="projects.jpg" />
        <div className="container">
            <ProjectsList/>
        </div>
        <Footer/>
        </>
    )
}

export default Projects