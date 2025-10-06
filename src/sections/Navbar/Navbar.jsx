import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <section id='section' className={styles.container}>
      <div className={styles.navbar}>
        <ul>
        <li className="list1">
            
            <Link to="/">
              <button className='hover' >&#x2302;</button>
            </Link>
          </li>
          
          <li>

            <Link to="/expirence">
              <button className='hover'>Experience</button>
            </Link>
          </li>

          <li>
            <Link to="/education">
            <button className='hover'>Education</button>

            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
