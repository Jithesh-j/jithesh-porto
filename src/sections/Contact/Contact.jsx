import styles from './ContactStyles.module.css'
function Contact() {
  return (
    <section id='contact' className={styles.container}>
          <h1 className='sectionTitle'> Contact </h1>
          <form action="https://formspree.io/f/xwprpapw" method='post'>
            {/* Name */}
            <div className='formGroup'>
              <label htmlFor='name' hidden > Name</label>
              <input 
                  type='text' 
                  name='name' 
                  id='name' 
                  placeholder='name' 
                  required>  
              </input>
            </div>
        {/* Email */}
            <div className='formGroup'>
              <label htmlFor='email' hidden > E-mail</label>
              <input 
                  type='text' 
                  name='email' 
                  id='email' 
                  placeholder='E-mail' 
                  required>  
              </input>
            </div>
        {/*  Text Area, Message */}

            <div className='formGroup'>
              <label htmlFor='message' hidden > Message</label>
              <textarea 
                  name='message' 
                  id='message' 
                  placeholder='Message' 
                  required>  
              </textarea>
            </div>
            {/* submit button */}
            <input  className='hover btn' type='submit' value="Submit"></input>
          </form>
    </section>

  );
}

export default Contact