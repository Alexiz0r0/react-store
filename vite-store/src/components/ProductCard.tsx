import style from './ProductCard.module.css';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  price: number;
  images: string;
  colors: string;
}

const ProductCard: React.FC<Props> = ({ id, title, colors, price, images }) => {
  return (
    <>
      <Link to={'/details/' + id} className={style['product-card-link']}>
        <article className={style['product-card']}>
          <img src={images} alt={id} className={style['product-img']} />
          <div className={style['product-info']}>
            <span className={style['product-title']}>{title}</span>
            <span className={style['product-description']}>{colors}</span>
          </div>
          <div className={style['product-price-block']}>
            <span className={style['product-price-value']}>${price}</span>
            <span className={style.discount}>50% off</span>
          </div>
          <div className={style['product-tax-policy']}>Incluye impuesto País y percepción AFIP</div>
        </article>
      </Link>
    </>
  );
};

export default ProductCard;
