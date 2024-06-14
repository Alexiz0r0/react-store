import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../interfaces/Product.interface';
import { CartCardProps } from '../interfaces/CartCardProps.interface';

// interface Props {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   images: string;
//   stock: number;
//   colors: string;
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

const CartCard: React.FC<CartCardProps> = ({
  id,
  title,
  description,
  price,
  images,
  colors,
  stock,
}) => {
  const [quantity, setQuantity] = useState(stock);
  const units = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const manageUnits = () => {
    const productsInStorage: Product[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    const one = productsInStorage.find((each) => each.id === id);
    setQuantity(Number(units.current?.value));
    if (one) {
      one.stock = Number(units.current?.value);
    } else {
      navigate('/home');
    }
    localStorage.setItem('cart', JSON.stringify(productsInStorage));
  };

  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-4'>
        <div className='w-full sm:w-40 flex justify-center'>
          <img className='w-40 h-[150px] rounded-xl' src={images} alt='ipad' />
        </div>
        <div className='grow flex flex-col'>
          <strong className='text-lg md:text-2xl font-bold'>{title}</strong>
          <span className='text-sm font-thin'>- {colors}</span>
          <p className='truncate max-w-xs md:max-w-sm'>{description}</p>
          <input
            className='max-w-[50px] rounded-lg p-2 my-2'
            type='number'
            name='quantity'
            defaultValue={quantity}
            ref={units}
            onChange={manageUnits}
            min='1'
            id='P7Q8R90'
          />
        </div>
        <div className='w-full sm:w-40 text-end'>
          <strong className='text-lg font-normal text-indigo-600'>
            {price.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </strong>
        </div>
      </div>
    </>
  );
};

export default CartCard;
