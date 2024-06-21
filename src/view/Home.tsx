import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
// import style from './Home.module.css';
// import products from '../assets/products';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Product } from '../interfaces/Product.interface';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Home = () => {
  const text = useSelector((state: RootState) => state.filter.value);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get('/react-store/products.json')
      .then(({ data }) => {
        const filterData = data.filter((each: Product) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <Hero firstMsg='tecnología' secondMsg='renovada'></Hero>
      <div className='flex flex-col items-center max-w-[1220px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
          {products.map((item) => (
            <ProductCard
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
    </>
  );
};

export default Home;
