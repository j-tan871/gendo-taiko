import Head from 'next/head';
import Image from 'next/image';

import Navigation from '../components/Navbar';
import Event from '../components/Event';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function Events() {
  return (
    <>
      <Head>
        <title>Gendo Taiko - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <div className={`${styles.container} p-5 lg:p-32`}>
          <h1 className={`${styles.heading} my-5`}>UPCOMING EVENTS</h1>
          <div className='flex flex-wrap overflow-hidden h-auto px-5 lg:px-12'>
            <div className='w-full lg:w-2/3'>
              <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' />
              <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' />
              <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' />
              <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' />
            </div>
            <div className='w-full lg:w-1/3'>
              <Image
                src='/images/home_bottom.jpg'
                alt='shime'
                width={800}
                height={550}
                className='object-contain'
              />
            </div>
          </div>
          <h1 className={`${styles.heading} my-5 lg:mt-12`}>PAST EVENTS</h1>
          <div className='flex flex-wrap overflow-hidden h-auto px-5 lg:px-12'>
            <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.' image='/images/home_bottom.jpg'/>
            <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.' image='/images/home_bottom.jpg'/>
            <Event date='January 42, 2041' line1='ECTC 2041 • website.com' address='4023 Address Street Providence, Rhode Island 02969' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.'/>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}