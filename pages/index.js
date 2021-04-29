import Head from 'next/head';
import Image from 'next/image';

import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
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
        <div className={`divide-y px-48 pb-12 ${styles.info}`}>
          <div className='grid grid-cols-3 h-64 items-center'>
            <div className={`col-span-2 text-3xl ${styles.subheading}`}>Mission statement sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>

            <div className={`col-span-1`}></div>
          </div>
        </div>
        <div className={` ${styles.info} flex flex-wrap -mx-1 overflow-hidden lg:-mx-6 xl:-mx-6`}>
          <div className="my-1 px-1 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
            <div className='h-56 items-center'>

            </div>
            <div className='h-100 m-12'>
              <div className={`text-3xl ${styles.subheading}`}>Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.</div>
              <div className={`text-base ${styles.bodytext}`}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. See more photos and videos of our performances here.</div>
            </div>

            <div className='aspect-w-16 aspect-h-9'>
              <iframe src="https://www.youtube.com/embed/uBDabxR74IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="my-1 px-1 w-full overflow-hidden lg:my-6 lg:px-6 lg:w-1/2 xl:my-6 xl:px-6 xl:w-1/2">
            <div className='h-auto m-12'>
              <div className={`text-3xl m-5 ${styles.subheading}`}>We perform eget arcu dictum varius duis at consectetur</div>
              <div className={`text-base m-5 ${styles.bodytext}`}>Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Learn more about our upcoming and past events.</div>
            </div>
            <div className='h-auto m-12'>
              <Image
                src='/../public/images/miyake_kelvmel.jpg'
                alt='miyake'
                width={750}
                height={475}
                className='object-contain'
              />
            </div>
            <div className='h-64 m-12'>
              <div className={` text-3xl m-5 ${styles.subheading}`}>Gendo Taiko is made up of students who attend Brown University and the Rhode Island School of Design</div>
              <div className={` text-base m-5 ${styles.bodytext}`}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Learn more about our group’s history and  what taiko is all about here.</div>
            </div>
          </div>
        </div>
        {/* <div className={`divide-y px-48 pb-12 ${styles.info}`}>
          <div className='grid grid-cols-3 h-64 items-center'>
            <div className={`col-span-2 text-3xl ${styles.subheading}`}>Mission statement sit amet, consectetur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>

            <div className={`col-span-1`}></div> 
          </div>
          <div className={`grid grid-cols-2 h-auto ${styles.bodytext}`}>
            <div className='col-span-1 h-60'>

              <div className='h-56 items-center'>

              </div>
              <div className='h-100 m-12'>
                <div className={`text-3xl m-5 ${styles.subheading}`}>Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam.</div>
                <div className={`text-base m-5 ${styles.bodytext}`}>Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. See more photos and videos of our performances here.</div>
              </div>

              <div className='aspect-w-16 aspect-h-9'>
                <iframe src="https://www.youtube.com/embed/uBDabxR74IU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className='col-span-1'>
              <div className='h-auto m-12'>
                <div className={`text-3xl m-5 ${styles.subheading}`}>We perform eget arcu dictum varius duis at consectetur</div>
                <div className={`text-base m-5 ${styles.bodytext}`}>Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Learn more about our upcoming and past events.</div>
              </div>
              <div className='h-auto m-12'>
                <Image 
                  src='/../public/images/miyake_kelvmel.jpg'
                  alt='miyake'
                  width={750}
                  height={475}
                  className='object-contain'
                />
              </div>
              <div className='h-64 m-12'>
                <div className={` text-3xl m-5 ${styles.subheading}`}>Gendo Taiko is made up of students who attend Brown University and the Rhode Island School of Design</div>
                <div className={` text-base m-5 ${styles.bodytext}`}>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Learn more about our group’s history and  what taiko is all about here.</div>
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
