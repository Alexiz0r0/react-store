import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
// import style from './Home.module.css';
import products from '../assets/products';

const Home = () => {
  console.log(products);

  return (
    <>
      <Hero firstMsg='tecnología' secondMsg='renovada'></Hero>
      <div className='flex flex-col justify-items-center max-w-[1220px] border-2 border-stone-400'>
        <div className='grid grid-cols-4 gap-4 my-5'>
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
