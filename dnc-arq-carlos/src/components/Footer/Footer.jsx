import { Link } from 'react-router-dom'
import { useContext } from 'react'

//ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import BrasilIcon from '../../assets/brasil-icon.svg'
import USAIcon from '../../assets/EUA.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import TwitterIcon from '../../assets/twitter-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import InstragramIcon from '../../assets/instragram-icon.svg'

//COMPONET
import Button from '../Button/Button'

//CONTEXT
import { AppConstext } from '../../contexts/AppContext'

function Footer(){
    const appConstext = useContext(AppConstext)
    const changeLanguage = (country) => {
        appConstext.setLanguage(country)
    }
    return(
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className='footer-lodo-col'>
                        <img src={Logo} className='footer-logo'/>
                        <p className='grey-1-color'>
                            {appConstext.languages[appConstext.language].general.footerLogoText}
                        </p>
                        <div className="d-flex social-links">
                            <a href="#" target='_blank'>
                                <img src={FacebookIcon} />
                            </a>
                            <a href="#" target='_blank'>
                                <img src={TwitterIcon} />
                            </a>
                            <a href="#" target='_blank'>
                                <img src={LinkedinIcon} />
                            </a>
                            <a href="#" target='_blank'>
                                <img src={InstragramIcon} />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>{appConstext.languages[appConstext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appConstext.languages[appConstext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appConstext.languages[appConstext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appConstext.languages[appConstext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appConstext.languages[appConstext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>{appConstext.languages[appConstext.language].general.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">Copyright © DNC - 2024</p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('br')}>
                            <img src={BrasilIcon}  height="29px"/>
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage('en')}>
                            <img src={USAIcon} height="29px"/>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer