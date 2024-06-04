import style from './Thumbs.module.css';
import { useState, useEffect } from 'react';

interface Props {
  images: string[];
}
const Thumbs: React.FC<Props> = ({ images }) => {
  const [thumb, setThumb] = useState(images[0] || '/mock1.jpg');

  useEffect(() => setThumb(images[0]), [images]);

  return (
    <>
      <section className={style['product-images-block']}>
        <div className={style['product-images']}>
          {images.map((each) => (
            <img
              className={style['mini-img']}
              key={each}
              src={each}
              alt="MacBook Pro 13'4"
              onClick={() => setThumb(each)}
            />
          ))}
        </div>
        <img className={style['big-img']} id='big-img' src={thumb} alt="MacBook Pro 13'4" />
      </section>
    </>
  );
};

export default Thumbs;

{
  /* <img className={style['mini-img']} src={images[0]} alt="MacBook Pro 13'4" />
<img className={style['mini-img']} src={images[1]} alt="MacBook Pro 13'4" /> */
}
