import Image from 'next/image';

export default function Img(props) {
  return (
    <div className='mx-1 mb-1'>
      <Image
        src={props.image}
        alt='member'
        width={350}
        height={233}
        className='object-contain'
      />
    </div>
  )
}