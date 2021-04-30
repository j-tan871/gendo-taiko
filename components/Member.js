import Image from 'next/image';

import styles from './Event.module.css';

export default function Member(props) {
  return (
    <div class='mx-1 my-2 lg:mb-12 lg:mx-2'>
      <Image 
        src='/images/portrait.jpg'
        alt='member'
        width={150}
        height={200}
        className='object-contain'
      />
      <div className={styles.bodytext}>{props.name} <br /> {props.year}</div>
    </div>
  )
}