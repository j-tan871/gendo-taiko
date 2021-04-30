import Head from 'next/head';

import Img from '../components/Img';
import styles from '../styles/About.module.css';

export default function Media() {
  return (
    <>
      <Head>
        <title>Gendo Taiko - Media</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`${styles.container} p-5 lg:p-20`}>
          <h1 className={`${styles.heading} mb-5 lg:mb-12`}>MEDIA</h1>
          <div className='flex flex-wrap w-full'>
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
            <Img image='/images/miyake_kelvmel.jpg' />
          </div>
        </div>
      </main>
    </>
  )
}