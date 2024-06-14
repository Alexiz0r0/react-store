import { useEffect, useRef, useState } from 'react';
import style from './Checkout.module.css';
import truck from '../assets/truck.svg';
import plane from '../assets/plane.svg';

import products from '../assets/products';

import { CheckoutProps } from '../interfaces/CheckoutProps.interface';
import { ProductLocalStorage } from '../interfaces/ProductLocalStorage.interface';
import { Product } from '../interfaces/Product.interface';

// interface Props {
//   price: number;
//   stock: number;
//   id: string;
//   color: string;
// }

// interface Product {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   stock: number;
//   images: string[];
//   colors: string[];
//   onSale: boolean;
// }

// interface ProductLocalStorage {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   stock: number;
//   images: string[];
//   color: string;
//   onSale: boolean;
// }

const Checkout: React.FC<CheckoutProps> = ({ price, stock, id, color }) => {
  const [quantity, setQuantity] = useState<number>(stock);
  const [button, setButton] = useState<boolean>(false);
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
    let productsInStorage: ProductLocalStorage[] = JSON.parse(
      localStorage.getItem('cart') ?? '[]'
    );
    const product: Product = products.find((item) => item.id === id)!;

    const one = productsInStorage.find((each) => each.id === product.id);
    if (!one) {
      product.stock = quantity;
      const { colors: _, ...items } = product;
      productsInStorage.push({ color, ...items });
      setButton(true);
    } else {
      productsInStorage = productsInStorage.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem('cart', JSON.stringify(productsInStorage));
  };

  return (
    <>
      <div className='w-full p-4 my-2.5 mx-1.5 flex flex-col'>
        <div className={style['checkout-container']}>
          <span className='text-base font-bold text-red-500'>Total:</span>
          <h2 id='price' className='text-2xl font-bold text-neutral-900 my-3'>
            {(price * quantity).toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </h2>
          <p className='text-base text-neutral-700'>
            Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711 haciendo la
            solicitud en AFIP.
          </p>
          <ul className='text-sm text-neutral-700'>
            <li className='flex gap-4 items-center my-2'>
              <span className={style['policy-icon']}>
                <img src={truck} alt='Truck' />
              </span>
              <span className='policy-desc'>
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li className='flex gap-4 items-center my-2'>
              <span className={style['policy-icon']}>
                <img src={plane} alt='Plane' />
              </span>
              <span className={style['policy-desc']}>
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
              </span>
            </li>
          </ul>
          <div className='grid grid-cols-2 gap-2 justify-items-center items-center'>
            <input
              type='number'
              min='1'
              defaultValue={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current?.value) || 1)}
              className='max-w-[50px] rounded-lg p-2 my-2'
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
    </>
  );
};

export default Checkout;
