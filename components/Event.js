import { useState } from 'react';
import Image from 'next/image';

import styles from './Event.module.css'

export default function Event(props) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <div className={props.description ? 'flex flex-wrap overflow-hidden w-2/3' : 'flex flex-wrap overflow-hidden w-full'}>
        <p className={`${styles.bodytext} w-full lg:w-1/5`}>{props.date}</p>
        <div className='w-full lg:w-4/5'>
          <p className={styles.bodytext}>{props.line1} <br /> {props.address}</p>
          {
            props.description ?
              <>
                <div>
                  <p className={styles.bodytext}>{visible ? props.description : null}</p>
                  <button className={styles.bodytext} onClick={() => setVisible(!visible)}>{visible ? 'Show less' : 'Show more'}</button>
                </div>
              </> : null
          }
        </div>
      </div>
      {
        props.image && visible ?
          <div className='w-full lg:w-1/3 px-5'>
            <Image
              src={props.image}
              alt='event image'
              width={300}
              height={225}
              className='object-contain'
            />
          </div> : null
      }
    </>
  )
}