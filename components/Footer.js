import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../components/Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={`h-auto bg-black text-white text-center ${styles.footer}`}>
        <div className='p-10'>
          <div className='my-4'>CONTACT US</div>
          <div className='grid justify-items-center pb-5 text-4xl'>
            <div>
              <a href='https://www.instagram.com/gendotaiko/'>
                <FontAwesomeIcon icon={faInstagram} className='mx-3'/>
              </a>
              <a href='https://www.facebook.com/gendotaiko/'>
                <FontAwesomeIcon icon={faFacebook} className='mx-3'/>
              </a>
              <a href='https://www.youtube.com/channel/UCVY_EyNbypUi5v1kXF09GOQ'>
                <FontAwesomeIcon icon={faYoutube} className='mx-3'/>
              </a>
            </div>
          </div>
          <div className={styles.info}>GENDO TAIKO</div>
          <div className={styles.info}>INFO@GENDOTAIKO.COM</div>
          <div className={`my-4 ${styles.info}`}>© 2021 Gendo Taiko</div>
        </div>
      </div>
    </>
  )
}