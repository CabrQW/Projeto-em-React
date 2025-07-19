import { useContext } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banners/Banner"
import ContacForm from "../components/ContacForm/ContacForm"

//CONTEXT
import { AppConstext } from '../contexts/AppContext'

function Contact(){
    const appConstext = useContext(AppConstext)
    return (
        <>
        <Header/>
        <Banner title={appConstext.languages[appConstext.language].menu.contact} image="contact.jpg" />
        <div className="container">
            <ContacForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact