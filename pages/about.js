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
            <div className='w-full overflow-hidden p-12 lg:w-2/3 lg:px-12'>
              <div className={`text-3xl lg:text-5xl ${styles.heading}`}>WHAT IS GENDO TAIKO?</div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
                One of the earliest collegiate Taiko drumming groups established on the East Coast, Gendo Taiko was constituted at Brown University in the Fall of 2004 by Raiki Machida (Brown ’07) and Joshua Goldner (Brown ’05). Initially dubbed Brown Taiko, Gendo’s musical styles were originally based on those of Wadaiko Gensou, a semi-professional Taiko group based in Miyagi, Japan, with whom Machida had trained extensively. In the summer of 2006, Goldner and Machida hosted Wadaiko Gensou’s founding members Takao Handa and Satoko Nambu at Brown University to expand the group’s repertoire, hone its members’ techniques, and build a new set of drums. As the group grew in membership and developed its own unique musical styles and arrangements, it adopted a formal audition process, developed a Group Independent Study Project (GISP) to explore the history of Taiko, and is now in the course of developing a well-structured program of study for its members.
              </div>
              <div className={`leading-relaxed my-5 ${styles.bodytext}`}>
                Today, Gendo Taiko continues to build and acquire new drums, expand its repertoire by composing new songs, and collaborate with the greater Taiko community by hosting and participating in annual conferences and invitationals. Handa-san and Nambu-san gave the team the name Gendo (幻道) during their stay in 2006. Gendo, loosely translating to “path of free imagination,” represents the journeys taken by members in years past, and the experience of creative inspiration we hope to pass down to future members and audiences in the years to come.
              </div>
            </div>
            <div className={`w-full overflow-hidden p-12 lg:w-1/3 lg:py-20`}>
              <div className={`text-5xl mb-3 ${styles.character}`}>幻道太鼓</div>
              <div className={styles.bodytext}>gendō taiko</div>
              <div className={`text-5xl mb-3 mt-12 ${styles.character}`}>和太鼓幻創</div>
              <div className={styles.bodytext}>wadaiko gensō</div>
            </div>
          </div>
          <div className='flex flex-wrap overflow-hidden lg:px-20 lg:pb-20'>
            <div className='w-full overflow-hidden p-12 lg:w-2/3 lg:px-12'>
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
                src='/images/about.jpg'
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