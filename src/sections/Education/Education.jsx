import styles from './EducationStyles.module.css'
import EducationList from '../../common/EducationList'
function Education() {
  return (
   <section id='section' className={styles.container}>
    <h1 className='sectionTitle'> Education</h1>
    <div className={styles.EducationList}>
        <EducationList 
            CollegeName="• Seattle University"
            degree = "M.Sc. Computer Science"
            duriation = "Spetember, 2023 - June, 2025"
        />
        <EducationList 
            CollegeName="• Sree Vidyanikethan Engineering College"
            degree = "B.Tech. Computer Science"
            duriation = "June, 2018 - June, 2022"
        />
    </div>

   </section>
  )
}

export default Education