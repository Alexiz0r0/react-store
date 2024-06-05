import { useEffect, useRef, useState } from 'react';
import style from './Checkout.module.css';
import truck from '../assets/truck.svg';
import plane from '../assets/plane.svg';

import products from '../assets/products';

interface Props {
  price: number;
  stock: number;
  id: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  colors: string[];
  onSale: boolean;
}

const Checkout: React.FC<Props> = ({ price, stock, id }) => {
  const [quantity, setQuantity] = useState(stock);
  const [button, setButton] = useState(false);
  const units = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const productsOnCart: Product[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    const product: Product = products.find((item) => item.id === id)!;
    const one = productsOnCart.find((each) => each.id === product.id);
    if (one) {
      setQuantity(one.stock);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [id]);

  const manageCart = () => {
    let productsInStorage: Product[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    const product: Product = products.find((item) => item.id === id)!;

    const one = productsInStorage.find((each) => each.id === product.id);
    if (!one) {
      product.stock = quantity;
      productsInStorage.push(product);
      setButton(true);
    } else {
      productsInStorage = productsInStorage.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem('cart', JSON.stringify(productsInStorage));
  };

  return (
    <>
      <div className={style['product-checkout-block']}>
        <div className={style['checkout-container']}>
          <span className={style['checkout-total-label']}>Total:</span>
          <h2 id='price' className={style['checkout-total-price']}>
            {(price * quantity).toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </h2>
          <p className={style['checkout-description']}>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711 haciendo la
            solicitud en AFIP.
          </p>
          <ul className={style['checkout-policy-list']}>
            <li>
              <span className={style['policy-icon']}>
                <img src={truck} alt='Truck' />
              </span>
              <span className='policy-desc'>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li>
              <span className={style['policy-icon']}>
                <img src={plane} alt='Plane' />
              </span>
              <span className={style['policy-desc']}>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
              </span>
            </li>
          </ul>
          <div className={style['checkout-process']}>
            <div className={style['top']}>
              <input
                type='number'
                min='1'
                defaultValue={quantity}
                ref={units}
                onChange={() => setQuantity(Number(units.current?.value) || 1)}
              />
              <button
                type='button'
                className={button ? style['remove-btn'] : style['cart-btn']}
                onClick={manageCart}
              >
                {button ? 'Remove from cart' : 'Add to cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
