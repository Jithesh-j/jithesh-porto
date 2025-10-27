import styles from './ProjectStyles.module.css'
import brickgame from '../../assets/brickgame.jpg'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'
import ecommerce from '../../assets/e-commerce.webp'
import reRecipe from '../../assets/cookbook.webp'
import ChatGpt from '../../assets/chatgpt.png'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1> 
        <div className={styles.projectsContainer}> 
          <ProjectCard src = {ecommerce} 
                      link = 'https://github.com/Jithesh-j/ecommerce' 
                      h3 ="E-commerce" 
                      p="shopping Website"
                      githubLink = "(Github)"> 
          </ProjectCard>
          <ProjectCard src = {ChatGpt} 
                      link = 'https://github.com/Jithesh-j/GPTModel' 
                      h3 ="GPT-Mini"
                      p="My own AI chat system" 
                      githubLink = "(Github)"> 
          </ProjectCard>
          
          <ProjectCard src = {brickgame} 
                      link = 'https://github.com/Jithesh-j/Brick' 
                      h3 ="Brick Game"
                      p="Game Design" 
                      githubLink = "(Github)"> 
          </ProjectCard>
          
          <ProjectCard src = {reRecipe} 
                      link = 'https://github.com/Re-Recipe/Re-Recipe' 
                      h3 ="Re-Recipe"
                      p="A Cooking Website" 
                      githubLink = "(Github)"> 
          </ProjectCard>
        </div>
    </section> 
  )
}

export default Projects