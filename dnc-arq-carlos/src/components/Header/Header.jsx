import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'


//ASSETS
import './Header.css'
import Logo from '../../assets/dnc-logo.svg'

//Components
import Button from '../Button/Button'

//CONTEXT
import { AppConstext } from '../../contexts/AppContext'

function Header(){
    const [isOpne,setIsOpen] = useState(false)
    const toggleMenu = () =>{
        setIsOpen(!isOpne)
    }
    const appConstext = useContext(AppConstext)

    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to ='/'><img src={Logo} /></Link>
                    <div className="mobile-menu">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpne ? 'open' : ''}`} >
                        <Button buttonStyle='unstyled' className="mobile-menu close-btn" onClick={toggleMenu}>
                            X
                        </Button>
                    <ul className="d-flex">
                        <li><Link to="/">{appConstext.languages[appConstext.language].menu.home} </Link></li>
                        <li><Link to="/about">{appConstext.languages[appConstext.language].menu.about} </Link></li>
                        <li><Link to="/projects">{appConstext.languages[appConstext.language].menu.projects} </Link></li>
                        <li><Link to="/contact">{appConstext.languages[appConstext.language].menu.contact} </Link></li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header