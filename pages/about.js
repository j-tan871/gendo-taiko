import Head from 'next/head';
import Image from 'next/image';

import Navigation from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>Gendo Taiko - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main>
        <div className={`h-auto ${styles.container}`}>
          <div className='flex flex-wrap overflow-hidden lg:px-20 lg:pt-20'>
            <div className='w-full overflow-hidden p-12 lg:w-2/3 lg:px-32'>
              <div className={`text-3xl lg:text-5xl ${styles.heading}`}>WHAT IS GENDO TAIKO?</div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.
              </div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
                Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet consectetur adipiscing elit ut aliquam purus sit. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Ac tortor dignissim convallis aenean et. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Cras semper auctor neque vitae tempus quam. Arcu felis bibendum ut tristique et. Donec pretium vulputate sapien nec sagittis aliquam malesuada.
              </div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
              Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. Cursus turpis massa tincidunt dui ut ornare. Bibendum at varius vel pharetra.
              </div>
            </div>
            <div className={`w-full overflow-hidden p-12 lg:w-1/3 lg:py-20`}>
              <div className={`text-5xl ${styles.character}`}>幻道太鼓</div>
              <div className={styles.bodytext}>gendō taiko</div>
              <div className={`text-5xl mt-12 ${styles.character}`}>和太鼓幻創</div>
              <div className={styles.bodytext}>wadaiko gensō</div>
            </div>
          </div>
          <div className='flex flex-wrap overflow-hidden lg:px-20 lg:pb-20'>
            <div className='w-full overflow-hidden p-12 lg:w-2/3 lg:px-32'>
              <div className={`text-3xl lg:text-5xl ${styles.heading}`}>TAIKO IN AMERICA</div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Arcu dui vivamus arcu felis bibendum ut tristique et. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Purus non enim praesent elementum. Mauris in aliquam sem fringilla ut.
              </div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
                Eget arcu dictum varius duis at consectetur. Amet nisl suscipit adipiscing bibendum est ultricies. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet consectetur adipiscing elit ut aliquam purus sit. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Ac tortor dignissim convallis aenean et. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Cras semper auctor neque vitae tempus quam. Arcu felis bibendum ut tristique et. Donec pretium vulputate sapien nec sagittis aliquam malesuada.
              </div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
              Ullamcorper a lacus vestibulum sed arcu. Imperdiet proin fermentum leo vel orci porta. Bibendum arcu vitae elementum curabitur vitae nunc sed. Cursus turpis massa tincidunt dui ut ornare. Bibendum at varius vel pharetra.
              </div>
            </div>
            <div className={`w-full overflow-hidden pb-12 lg:pt-24 lg:w-1/3`}>
              <Image
                src='/../public/images/about.jpg'
                alt='miyake'
                width={750}
                height={450}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}