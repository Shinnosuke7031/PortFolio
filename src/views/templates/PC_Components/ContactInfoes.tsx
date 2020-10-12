import React, { FC } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from './pc.module.css';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ContactInfoes: FC<{}> = () => {

  return (
    <React.Fragment>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.contact}>

        <div className={styles.mail}>
          <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'20px'}}/>
          <a className={`${styles.show_line_from_left} ${styles.change_color_from_left}`} href="mailto:8120505@ed.tus.ac.jp">8120505@ed.tus.ac.jp</a>
        </div>
        <hr style={{margin: '15px 0 15px 0'}} />
        <div>
          <a href="https://github.com/Shinnosuke7031"><FontAwesomeIcon icon={faGithub} style={{fontSize:'25px'}} className={`${styles.contact_icon}`}/></a>
          <a href="https://twitter.com/web7031boushi"><FontAwesomeIcon icon={faTwitter} style={{fontSize:'25px'}} className={`${styles.contact_icon}`}/></a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactInfoes;