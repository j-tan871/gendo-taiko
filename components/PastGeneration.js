import styles from './Event.module.css';

export default function PastGeneration(props) {
  return (
    <div className='mx-1 my-2 pr-10 lg:mb-12 lg:mx-2'>
      <h3 className={styles.subheading}>{props.generation}</h3>
      <h3 className={styles.subheading}>GENERATION</h3>
      <h3 className={styles.character}>{props.characters}</h3>
      <br />
      {
        props.names.map((name, id) => <div key={id} className={`text-center ${styles.bodytext}`}>{name}</div>)
      }
    </div>
  )
}