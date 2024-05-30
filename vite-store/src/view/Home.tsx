import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import style from './Home.module.css';
import products from '../assets/products';

const Home = () => {
  console.log(products);

  return (
    <>
      <Hero firstMsg='tecnología' secondMsg='renovada'></Hero>
      <div className={style.container}>
        <div className={style['product-container']}>
          {products.map((item) => (
            <ProductCard key={item.id} id={item.id} title={item.title} images={item.images[0]} price={item.price} colors={item.colors[0]} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
