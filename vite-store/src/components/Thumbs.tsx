// import style from './Thumbs.module.css';
import { useState, useEffect } from 'react';

interface Props {
  images: string[];
}
const Thumbs: React.FC<Props> = ({ images }) => {
  const [thumb, setThumb] = useState(images[0] || '/mock1.jpg');

  useEffect(() => setThumb(images[0]), [images]);

  return (
    <>
      <section className='w-full p-4 my-2.5 mx-1.5 flex flex-row'>
        <div className='basis-1/5'>
          {images.map((each) => (
            <img
              className='w-full h-[70px] bg-contain bg-center'
              key={each}
              src={each}
              alt="MacBook Pro 13'4"
              onClick={() => setThumb(each)}
            />
          ))}
        </div>
        <div className='basis-4/5'>
          <img
            className='w-full h-[290px] bg-contain bg-center'
            id='big-img'
            src={thumb}
            alt="MacBook Pro 13'4"
          />
        </div>
      </section>
    </>
  );
};

export default Thumbs;

{
  /* <img className={style['mini-img']} src={images[0]} alt="MacBook Pro 13'4" />
<img className={style['mini-img']} src={images[1]} alt="MacBook Pro 13'4" /> */
}
