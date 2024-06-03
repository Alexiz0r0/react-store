import style from './Thumbs.module.css';

interface Props {
  images: string[];
}
const Thumbs: React.FC<Props> = ({ images }) => {
  return (
    <div>
      <section className={style['product-images-block']}>
        <div className={style['product-images']}>
          <img className={style['mini-img']} src={images[0]} alt="MacBook Pro 13'4" />
          <img className={style['mini-img']} src={images[1]} alt="MacBook Pro 13'4" />
        </div>
        <img className={style['big-img']} id='big-img' src={images[0]} alt="MacBook Pro 13'4" />
      </section>
    </div>
  );
};

export default Thumbs;
