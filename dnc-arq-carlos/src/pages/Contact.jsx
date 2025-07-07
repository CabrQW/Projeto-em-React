import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banners/Banner"
import ContacForm from "../components/ContacForm/ContacForm"

function Contact(){
    return (
        <>
        <Header/>
        <Banner title='Contact' image="contact.jpg" />
        <div className="container">
            <ContacForm/>
        </div>
        <Footer/>
        </>
    )
}

export default Contact