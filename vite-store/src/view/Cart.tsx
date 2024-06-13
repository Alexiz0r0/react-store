import { useEffect, useState } from 'react';
import CartCard from '../components/CartCard';
import CartResume from '../components/CartResume';
import Hero from '../components/Hero';
import { useNavigate } from 'react-router-dom';
// import style from './Cart.module.css';

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

const Cart = () => {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const products: Product[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    if (products.length === 0) {
      navigate('/home');
    }
    setProductsOnCart(products);
  }, [navigate]);

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
              colors={each.colors[0]}
              stock={each.stock}
              key={each.id}
            />
          ))}
        </article>

        <CartResume price={10} qty={2} />
      </div>
    </>
  );
};

export default Cart;
