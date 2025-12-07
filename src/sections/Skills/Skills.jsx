import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList'
function Skills() {
  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'> Skills</h1>
        <div className={styles.skillList}>
            <SkillList src ={checkMarkIcon} skill ="Python" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="JavaScript" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="SQL" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="YAML" ></SkillList>
        </div>  
        <hr></hr>
        <div className={styles.skillList}>
            <SkillList src ={checkMarkIcon} skill ="React" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="Angular" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="HTML" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="CSS" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="PyTorch" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="Matplotlib" ></SkillList> 
            <SkillList src ={checkMarkIcon} skill ="torchvision"></SkillList> 
            <SkillList src ={checkMarkIcon} skill ="NumPy" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="tiktoken" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="Django"></SkillList> 
        </div>
        <hr></hr>
        <div className={styles.skillList}>
            <SkillList src ={checkMarkIcon} skill ="GIT" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="AWS" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="CI/CD Pipeline" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="Docker" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="Jenkins" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="Selenium" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="StripeAPI" ></SkillList>
            <SkillList src ={checkMarkIcon} skill ="SpotifyAPI" ></SkillList> 
            <SkillList src ={checkMarkIcon} skill ="Jupyter Notebook" ></SkillList>
            
        </div>  


    </section>
  );
}

export default Skills