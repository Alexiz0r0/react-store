import { useEffect, useState } from 'react';
// import style from './OnSaleCard.module.css';

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
      <Link to={'/details/' + id} className='hover:opacity-50'>
        <article className='max-w-[295px] lg:w-full overflow-hidden bg-slate-100 rounded-xl'>
          <img src={images} alt={id} className='w-full h-[270px] bg-cover' />
          <div className='p-5'>
            <span className='text-lg font-bold block'>{title}</span>
            <span className='text-sm font-light block text-zinc-500'>{colors}</span>
          </div>
          <div className='line-through px-5'>
            <span className='text-base font-normal text-zinc-500'>Desde</span>
            <span className='text-base font-normal text-zinc-500'>
              {price.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </span>
          </div>
          <div className='flex justify-between items-center pt-1 px-5'>
            <span className='text-base font-normal text-indigo-600'>
              {discount.toLocaleString('es-AR', {
                style: 'currency',
                currency: 'ARS',
              })}
            </span>
            <span className='text-base font-normal text-green-500'>50% off</span>
          </div>
          <div className='text-xs font-normal text-zinc-400 p-5'>¡Compra y paga en pesos!</div>
        </article>
      </Link>
    </>
  );
};

export default OnSaleCard;
