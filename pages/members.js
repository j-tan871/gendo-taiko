import Head from 'next/head';

import Navigation from '../components/Navbar';
import Member from '../components/Member';
import PastGeneration from '../components/PastGeneration';
import Footer from '../components/Footer';
import styles from '../styles/Members.module.css';

export default function Members() {
  return (
    <>
      <Head>
        <title>Gendo Taiko - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
      <div className={`${styles.container} p-5 lg:p-32`}>
        <h1 className={`${styles.heading} my-5`}>CURRENT MEMBERS</h1>
        <h2 className={styles.subheading}>SEVENTEENTH GENERATION <span className={styles.character}>十匕代目</span></h2>
        <div className='flex flex-wrap'>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
        </div>
        <h2 className={styles.subheading}>SIXTEENTH GENERATION <span className={styles.character}>十六代目</span></h2>
        <div className='flex flex-wrap'>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
        </div>
        <h2 className={styles.subheading}>FIFTEENTH GENERATION <span className={styles.character}>十五代目</span></h2>
        <div className='flex flex-wrap'>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
          <Member name='Kelvin Yang' year='Brown ‘21' image='/images/portrait.jpg'/>
        </div>
        <h1 className={`${styles.heading} my-5`}>PAST MEMBERS</h1>
        <div className='flex flex-wrap'>
          <PastGeneration generation='FOURTEENTH' characters='十四代目' names={['Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21']} />
          <PastGeneration generation='THIRTEENTH' characters='十四代目' names={['Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21']} />
          <PastGeneration generation='TWELFTH' characters='十四代目' names={['Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21']} />
          <PastGeneration generation='ELEVENTH' characters='十四代目' names={['Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21']} />
          <PastGeneration generation='TENTH' characters='十四代目' names={['Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21']} />
          <PastGeneration generation='NINTH' characters='十四代目' names={['Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21', 'Kelvin Yang • Brown ‘21']} />
        </div>
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}