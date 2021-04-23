import Head from 'next/head';
import Image from 'next/image';

import Navigation from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gendo Taiko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <main>
        <div className='h-screen relative'>
          <Image 
            src='/../public/images/cover.jpg'
            alt='miyake'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className={`${styles.info}`}>
          <div className={`text-lg ${styles.subheading}`}>hi</div>
          <div className={`${styles.bodytext}`}>bye</div>
        </div>
      </main>
      <footer></footer>
    </div>
  )
}
