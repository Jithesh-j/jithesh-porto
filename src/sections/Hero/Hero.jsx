import styles from './HeroStyles.module.css'
import heroImg from '../../assets/jitheshimg.jpeg'
import sun from '../../assets/sun.svg'
import dark from '../../assets/moon.svg'
import twitterIconlight from '../../assets/twitter-light.svg'
import twitterIcondark from '../../assets/twitter-dark.svg'
import LinkedInIcondark from '../../assets/linkedin-dark.svg'
import LinkedInIconlight from '../../assets/linkedin-light.svg'
import GitHubIconlight from '../../assets/github-light.svg'
import GitHubIcondark from '../../assets/github-dark.svg'

import Resume from '../../assets/Resume.pdf'
import { useTheme } from '../../common/Themecontext'
function Hero() { 
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light'? sun : dark;
    const twitterIcon = theme === 'light' ? twitterIconlight: twitterIcondark;
    const LinkedIn = theme === 'light' ? LinkedInIconlight: LinkedInIcondark;
    const GitHub = theme === 'light' ? GitHubIconlight: GitHubIcondark;

  return <section id='hero' className={styles.container} > 
  <div>
    <img className={styles.hero} 
    src={heroImg} 
    alt='Profile Pic(Jithesh Jalapothu)' 
    />
    <img className={styles.colorMode}
    src={themeIcon} 
    alt='Color mode icon'
    onClick={toggleTheme} 
    />

  </div>

  <div className={styles.info}>
    <h1> Jithesh Jalapothu</h1>
    <h2>Software Engineer (2+ years)</h2>
    <span>
        <a href='https://x.com/Jithesh_01' target='_blank' >
            <img src={twitterIcon}></img>
            <p className={styles.logoName} >Twitter</p>
        </a>
        <a href='https://www.linkedin.com/in/jithesh-jalapothu-17a184202/' target='_blank' >
            <img src={LinkedIn}></img>
            <p className={styles.logoName} >LinkedIn</p>
            </a>
        <a href='https://github.com/Jithesh-j' target='_blank' >
            <img src={GitHub}></img>
            <p className={styles.logoName} >Github</p>
            </a>
        
    </span>
    <p className= {styles.description}> Passion for developing Software for commercial business</p>

    <a href={Resume}>
        <button className='hover'> Resume </button>
    </a>
    
    <div className={styles.arrow}>
      <p> Projects & More..</p>
      <p>&#8595;</p>
    </div>
  
  </div>
  
  </section>
  
}

export default Hero