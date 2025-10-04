import styles from './ExpirenceStyles.module.css'
import ExpirenceCard from '../../common/ExpirenceCard';

function Expirence() {
  return (
   <section id='section' className={styles.container} >
        <h1 className='sectionTitle' > Expirence</h1>
        <div className={styles.ExpirenceCard}>
            <ExpirenceCard 
            h3 = "Creative Funding Agency"
            title = "Technical Engineer"
            duriation = "July, 2025 - Present"
            description1="• Enhanced user experience by integrating Spotify’s developer API, enabling real-time access to artist information such as popularity, genres, top tracks, and listener metrics."
            description2="• Designed and implemented dynamic valuation algorithms to estimate catalog worth based on real-time popularity and engagement metrics, generating ranges such as $800K – $1.2M in projected catalog value and $250K/year in estimated revenue per artist."
            description3="• Reduced manual effort in artist valuation by 90% by automating financial projections using Spotify data, replacing spreadsheets with API-driven logic."
            technologies ="Technologies"
            technologiesList = "Application Programming Interface(API) Integration, JavaScript, HTML, CSS"
            > 
            </ExpirenceCard>
        </div>
        <hr></hr>
        <div className={styles.ExpirenceCard}>
            <ExpirenceCard 
            h3 = "Innova Solutions"
            title = "Software Engineer"
            duriation = "June, 2022 - May, 2023"
            description1="• Spearheaded the development of a cutting-edge Time & Expense management interface using Angular, enhancing platform usability and boosting user satisfaction by 30%."
            description2="• The process automation scripts written have reached a level of efficiency which resulted in a 40% reduction of manual work."
            description3="• Employed SQL for database management and backend development, ensuring high-level performance across the application."
            description4="• Performance testing resulted in a 20% reduction of application load times through optimized load time and scalability improvements."
            technologies ="Technologies"
            technologiesList = "SQL, JavaScript, YAML, TypeScript, Angular, HTML, CSS."
            > 
            </ExpirenceCard>
        </div>
        <hr></hr>
        <div className={styles.ExpirenceCard}>
            <ExpirenceCard 
            h3 = "Manac Info Tech (P) LTD"
            title = "Web Development Engineer Intern"
            duriation = "June, 2022 - May, 2023"
            description1="• Acquired and honed expertise in HTML, CSS, and JavaScript, laying a strong foundation for modern web application development.."
            description2="• Collaborated with senior developers to contribute to responsive, user-focused web applications."
            technologies ="Technologies"
            technologiesList = "HTML, CSS, JavaScript, Ajax."
            > 
            </ExpirenceCard>
        </div>
   </section>
  );
}

export default Expirence 