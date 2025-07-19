import { useState, useEffect, useContext } from 'react'
import './ProjectsList.css'

//ASSETS
import Likedescuro from '../../assets/like-icon.svg'
import like from '../../assets/like.svg'

//UTILS

import { getApiData } from '../../services/apiServices'

//CONTEXT
import { AppConstext } from '../../contexts/AppContext'


function ProjectsList (){
    const [projects, setProjects] = useState()

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
                                <img src={Likedescuro} height='20px'/>
                        </div>                    
                        )) 
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectsList