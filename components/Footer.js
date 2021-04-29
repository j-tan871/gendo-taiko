import styles from '../components/Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={`h-64 bg-black text-white text-center ${styles.footer}`}>
        <div className='p-10'>
          <div className='my-4'>CONTACT US</div>
          <div>

          </div>
          <div className={styles.info}>GENDO TAIKO</div>
          <div className={styles.info}>INFO@GENDOTAIKO.COM</div>
          <div className={`my-4 ${styles.info}`}>© 2021 Gendo Taiko</div>
        </div>
      </div>
    </>
  )
}