import Head from 'next/head';
import Image from 'next/image';

import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Gendo Taiko</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <main>
        <div className='h-auto relative bg-black md:h-screen'>
          <Image
            src='/images/cover.jpg'
            alt='miyake'
            width={1080}
            height={720}
            className='visible md:invisible'
          />
          <Image
            src='/images/cover.jpg'
            alt='miyake'
            layout='fill'
            objectFit='cover'
            className='invisible md:visible'
          />
        </div>
        <div className={`h-auto flex flex-wrap p-12 lg:px-48 ${styles.info}`}>
          <div className={`my-1 px-1 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-2/3`}>
            <h2 className={styles.subheading}>Mission statement sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
            <p className={styles.bodytext}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. See more photos and videos of our performances here.</p>
          </div>
          <div className={`my-1 px-1 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/3`}></div>
        </div>
        <hr />
        {/* <div className={`divide-y h-0.5`}></div> */}
        <div className={` ${styles.info} h-auto flex flex-wrap overflow-hidden p-6 lg:px-12`}>
          <div className='my-1 px-1 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/2'>
            <div className='h-auto items-center m-5'>
              <div className="flex flex-wrap overflow-hidden">
                <div className="w-1/3 my-0.5 overflow-hidden">
                  <Image 
                    src='/images/square.jpg'
                    alt='instagram picture'
                    width={500}
                    height={475}
                    className='object-contain'
                  />
                </div>
                <div className="w-1/3 my-0.5 overflow-hidden">
                  <Image 
                    src='/images/square.jpg'
                    alt='instagram picture'
                    width={500}
                    height={475}
                    className='object-contain'
                  />
                </div>
                <div className="w-1/3 my-0.5 overflow-hidden">
                  <Image 
                    src='/images/square.jpg'
                    alt='instagram picture'
                    width={500}
                    height={475}
                    className='object-contain'
                  />
                </div>
                <div className="w-1/3 my-0.5 overflow-hidden">
                  <Image 
                    src='/images/square.jpg'
                    alt='instagram picture'
                    width={500}
                    height={475}
                    className='object-contain'
                  />
                </div>
                <div className="w-1/3 my-0.5 overflow-hidden">
                  <Image 
                    src='/images/square.jpg'
                    alt='instagram picture'
                    width={500}
                    height={475}
                    className='object-contain'
                  />
                </div>
                <div className="w-1/3 my-0.5 overflow-hidden">
                  <Image 
                    src='/images/square.jpg'
                    alt='instagram picture'
                    width={500}
                    height={475}
                    className='object-contain'
                  />
                </div>
              </div>
            </div>
            <div className='h-100 m-5 lg:m-12'>
              <h2 className={styles.subheading}>Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.</h2>
              <p className={styles.bodytext}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. See more photos and videos of our performances here.</p>
            </div>
            <div className='aspect-w-16 aspect-h-9 mx-5 lg:mx-12'>
              <iframe src='https://www.youtube.com/embed/uBDabxR74IU' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
            </div>
          </div>
          <div className='my-1 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/2'>
            <div className='h-auto m-5 lg:m-12'>
              <h2 className={styles.subheading}>We perform eget arcu dictum varius duis at consectetur</h2>
              <p className={styles.bodytext}>Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Learn more about our upcoming and past events.</p>
            </div>
            <div className='h-auto m-5 lg:m-12'>
              <Image
                src='/images/miyake_kelvmel.jpg'
                alt='miyake'
                width={750}
                height={475}
                className='object-contain'
              />
            </div>
            <div className='sm:h-108 lg:h-64 xl:h-64 m-5 lg:m-12'>
              <h2 className={styles.subheading}>Gendo Taiko is made up of students who attend Brown University and the Rhode Island School of Design</h2>
              <p className={styles.bodytext}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Learn more about our group’s history and  what taiko is all about here.</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
