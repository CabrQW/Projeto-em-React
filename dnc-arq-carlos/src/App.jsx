import { BrowserRouter as Router, Route, Routes} from 'react-router-dom' 

// PAGES
import  Home from './pages/Home'
import  About from './pages/About'
import  Projects from './pages/Projects'
import  Contact from './pages/Contact'

//Utils
import ScrollTop from './utils/ScrollTop'

function App() {
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