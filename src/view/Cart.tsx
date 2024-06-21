import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartCard from '../components/CartCard';
import CartResume from '../components/CartResume';
import Hero from '../components/Hero';
// import style from './Cart.module.css';

import { ProductLocalStorage } from '../interfaces/ProductLocalStorage.interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { calculateTotal } from '../store/slices/totalSlice';

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

const Cart = () => {
  const [productsOnCart, setProductsOnCart] = useState<ProductLocalStorage[]>([]);
  const navigate = useNavigate();

  const totalSelec = useSelector((state: RootState) => state.total.total);
  const dispatch = useDispatch();

  useEffect(() => {
    const products: ProductLocalStorage[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    if (products.length === 0) {
      navigate('/home');
    }
    setProductsOnCart(products);
    dispatch(calculateTotal(products));
  }, [navigate, dispatch]);

  return (
    <>
      <Hero firstMsg='mi' secondMsg='carrito'></Hero>
      <div className='flex flex-col lg:flex-row md:items-start gap-4 my-4 max-w-[1220px] mx-4 lg:mx-0'>
        <article className='basis-3/4 bg-gray-200 rounded-md p-7 flex flex-col gap-7'>
          {productsOnCart.map((each) => (
            <CartCard
              id={each.id}
              title={each.title}
              description={each.description}
              price={each.price}
              images={each.images[0]}
              colors={each.color}
              stock={each.stock}
              key={each.id}
            />
          ))}
        </article>

        <CartResume total={totalSelec} />
      </div>
    </>
  );
};

export default Cart;
