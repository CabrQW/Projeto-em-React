import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

// PAGES & COMPONENTS
import  Home from './pages/Home'
import  About from './pages/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import  Projects from './pages/Projects'
import  Contact from './pages/Contact'

//Utils
import ScrollTop from './utils/ScrollTop'
import { AppConstext } from './contexts/AppContext'

function App() {
  const appConstext = useContext(AppConstext)

  if(appConstext.loading){
    return <LoadingSpinner/>
  }
  return (
    <Router>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App