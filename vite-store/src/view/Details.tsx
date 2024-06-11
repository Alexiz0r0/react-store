import { Navigate, useParams } from 'react-router-dom';
// import style from './Details.module.css';
import products from '../assets/products';
import Thumbs from '../components/Thumbs';
import Description from '../components/Description';
import Checkout from '../components/Checkout';
import ProductCard from '../components/ProductCard';

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

const Details = () => {
  const { id } = useParams();
  const product: Product = products.find((item) => item.id === id)!;

  const onSaleItems: Product[] = products.filter((each) => each.onSale === true);

  if (!product) {
    return <Navigate to='notFound' />;
  }

  return (
    <>
      <main className='flex flex-col items-center max-w-[1220px]'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Thumbs images={product.images} />
          <Description title={product.title} description={product.description} />
          <Checkout price={product.price} stock={product.stock} id={product.id} />
        </div>

        <div className='flex flex-col items-center mt-5'>
          <h2 className='text-3xl md:text-4xl font-bold'>Ofertas de la semana</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-5'>
            {onSaleItems.map((item) => (
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
      </main>
    </>
  );
};

export default Details;
