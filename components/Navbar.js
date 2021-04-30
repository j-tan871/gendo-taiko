import Link from 'next/link';
import Image from 'next/image';

import styles from './Navbar.module.css';

export default function Navigation() {
  return (
    <div className={`grid grid-cols-14 items-center text-center px-3 h-16 text-xs ${styles.navtext}`}>
      <div className='col-start-1 col-end-2'>
        <Link href='/'>HOME</Link>
      </div>
      <div className='col-start-2 col-end-3'>
        <Link href='/about'>ABOUT</Link>
      </div>
      <div className='col-start-3 col-end-4'>
        <Link href='/events'>EVENTS</Link>
      </div>
      <div className='col-start-4 col-end-10 grid justify-items-center'>
        <Link href='/'>
          <div className='flex flex-column content-center items-center'>
            <div className={`align-middle text-xl ${styles.logotext}`}>GENDO&nbsp;</div>
            {/* <span className={`align-middle text-xl ${styles.logotext}`}>GENDO</span> */}
            <Image
              src='/images/GendoCrest.png'
              alt='Gendo Taiko logo'
              width='30%'
              height='30%'
            />
            <div className={`align-middle text-xl ${styles.logotext}`}>&nbsp;TAIKO</div>
            {/* <span className={`align-middle text-xl ${styles.logotext}`}>TAIKO</span> */}
          </div>
        </Link>
      </div>
      <div className='col-start-10 col-end-11'>
        <Link href='/members'>MEMBERS</Link>
      </div>
      <div className='col-start-11 col-end-12'>
        <Link href='/media'>MEDIA</Link>
      </div>
      <div className='col-start-12 col-end-13'>
        <Link href='/contact'>CONTACT</Link>
      </div>
    </div>
  )
}