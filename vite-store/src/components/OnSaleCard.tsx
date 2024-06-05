import { useEffect, useState } from 'react';
import style from './OnSaleCard.module.css';

import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  price: number;
  images: string;
  colors: string;
}

const OnSaleCard: React.FC<Props> = ({ id, title, colors, price, images }) => {
  const [discount, setDiscount] = useState(price);

  useEffect(() => {
    setDiscount(price * 0.5);
  }, [price]);

  return (
    <>
      <Link to={'/details/' + id} className={style['product-card-link']}>
        <article className={style['product-card']}>
          <img src={images} alt={id} className={style['product-img']} />
          <div className={style['product-info']}>
            <span className={style['product-title']}>{title}</span>
            <span className={style['product-description']}>{colors}</span>
          </div>
          <div className={style['product-price-block-real']}>
            <span className={style['product-price-desc-real']}>Desde</span>
            <span className={style['product-price-value-real']}>
              {price.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </span>
          </div>
          <div className={style['product-price-block']}>
            <span className={style['product-price-value']}>
              {discount.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </span>
            <span className={style.discount}>50% off</span>
          </div>
          <div className={style['product-tax-policy']}>¡Compra y paga en pesos!</div>
        </article>
      </Link>
    </>
  );
};

export default OnSaleCard;
