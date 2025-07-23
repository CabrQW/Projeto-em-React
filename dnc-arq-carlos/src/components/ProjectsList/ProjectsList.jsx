import { useState, useEffect, useContext } from 'react'
import './ProjectsList.css'

//ASSETS
import Likedescuro from '../../assets/like-icon.svg'
import Likevazio from '../../assets/like.svg'

//COMPONENT
import Button from '../Button/Button'

//UTILS

import { getApiData } from '../../services/apiServices'

//CONTEXT
import { AppConstext } from '../../contexts/AppContext'


function ProjectsList (){
    const [projects, setProjects] = useState()
    const [favProjects, setFavProject] = useState([])
    const handleSavedProjects = (id) => {
        setFavProject((prevFavProjects) => {
            if (prevFavProjects.includes(id)){
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id)
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray))
                return prevFavProjects.filter((projectId) => projectId !== id)
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]))
                return[...prevFavProjects, id]
            }
        })
    }

    useEffect(() => {
        const fetchData = async () =>{
            try{
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'))
        if (savedFavProjects){
            setFavProject(savedFavProjects)
        }
    }, [])

    const appConstext = useContext(AppConstext)
    return(
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appConstext.languages[appConstext.language].projects.title}</h2>
                <p>{appConstext.languages[appConstext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">

                {   projects ?
                        projects.map((project) =>(
                        <div className='projects-card d-flex jc-center al-center fd-column'>
                            <div className="thumb tertiary-background" style={{backgroundImage: `url(${project.thumb})`}}></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <Button buttonStyle='unstyled' onClick={() => handleSavedProjects(project.id)}>
                                    <img src={favProjects.includes(project.id) ? Likedescuro : Likevazio} height='20px'/>
                                </Button>
                        </div>                    
                        )) 
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectsList