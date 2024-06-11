import OnSaleCard from '../components/OnSaleCard';
import style from './OnSale.module.css';

import products from '../assets/products';
import { useState } from 'react';

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

const OnSale = () => {
  const onSaleItems: Product[] = products.filter((each) => each.onSale === true);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(4);

  const fourItems = onSaleItems.slice(from, to);

  const handleRangeChange = (newFrom: number, newTo: number) => {
    setFrom(newFrom);
    setTo(newTo);
  };

  return (
    <>
      <div className='flex flex-col items-center max-w-[1220px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
          {fourItems.map((item) => (
            <OnSaleCard
              key={item.id}
              id={item.id}
              title={item.title}
              images={item.images[0]}
              price={item.price}
              colors={item.colors[0]}
            />
          ))}
        </div>
      </div>
      <div className={style['paginator-container']}>
        {from > 0 && (
          <button
            className={style['paginator-btn']}
            onClick={() => handleRangeChange(from - 4, to - 4)}
          >
            Anterior
          </button>
        )}
        {to < onSaleItems.length && (
          <button
            className={style['paginator-btn']}
            onClick={() => handleRangeChange(from + 4, to + 4)}
          >
            Siguiente
          </button>
        )}
      </div>
    </>
  );
};

export default OnSale;
