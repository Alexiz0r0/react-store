import { Navigate, useParams } from 'react-router-dom';
import style from './Details.module.css';
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
      <main>
        <div className={style['details-container']}>
          <div id='details' className={style['columns-container']}>
            <Thumbs images={product.images} />
            <Description title={product.title} description={product.description} />
            <Checkout price={product.price} stock={product.stock} id={product.id} />
          </div>
        </div>
        <div className={style['sales-block']}>
          <h2 className={style['sales-title']}>Ofertas de la semana</h2>
          <div className={style['product-container']}>
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
