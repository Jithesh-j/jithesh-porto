import React from 'react'

function ProjectCard({src, link,h3,p,githubLink }) {
  return (
    <a href= {link} > 
        <img className="hover" src ={src} alt=""></img>
        <h3>{h3}</h3> 
        <p>{p}</p> 
        <p>{githubLink}</p>
    </a>
  )
}

export default ProjectCard