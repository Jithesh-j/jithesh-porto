import styles from './Navbar.module.css'
function Navbar() {
  return (
   <session id='section' className={styles.container} >
    <div className= {styles.navbar} >
    <ul>
        <li>
            <a  href='/expirence'>
                <button className='hover'> Expirence </button>
            </a>
        </li>
        
        <li>
            <a href='/education'>
                <button className='hover'> Education </button>
            </a>
        </li>
    </ul>

    </div>
    
   </session> 
  )
}

export default Navbar