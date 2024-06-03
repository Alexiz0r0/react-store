import { Navigate, useParams } from 'react-router-dom';
import style from './Details.module.css';
import products from '../assets/products';
import Thumbs from '../components/Thumbs';
import Description from '../components/Description';
import Checkout from '../components/Checkout';

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
      </main>
    </>
  );
};

export default Details;

// <div className='sales-block'>
//             <h2 className='sales-title'>Ofertas de la semana</h2>
//             <div id='product-container' className='product-container'>
//               <a className='product-card' href='./details.html'>
//                 <img className='product-img' src='https://i.postimg.cc/2ymFtsTn/kindle2.jpg' alt='Kindle Paperwhite' />
//                 <div className='product-info'>
//                   <span className='product-title'>Kindle Paperwhite</span>
//                   <span className='product-description'>Black</span>
//                   <div className='product-price-block'>
//                     <span className='product-price'>100000</span>
//                     <span className='product-discount'>50% Off</span>
//                   </div>
//                   <div className='product-tax-policy'>Incluye impuesto País y percepción AFIP</div>
//                 </div>
//               </a>
//               <a className='product-card' href='./details.html'>
//                 <img className='product-img' src='https://i.postimg.cc/2ymFtsTn/kindle2.jpg' alt='Kindle Paperwhite' />
//                 <div className='product-info'>
//                   <span className='product-title'>Kindle Paperwhite</span>
//                   <span className='product-description'>Black</span>
//                   <div className='product-price-block'>
//                     <span className='product-price'>100000</span>
//                     <span className='product-discount'>50% Off</span>
//                   </div>
//                   <div className='product-tax-policy'>Incluye impuesto País y percepción AFIP</div>
//                 </div>
//               </a>
//               <a className='product-card' href='./details.html'>
//                 <img className='product-img' src='https://i.postimg.cc/2ymFtsTn/kindle2.jpg' alt='Kindle Paperwhite' />
//                 <div className='product-info'>
//                   <span className='product-title'>Kindle Paperwhite</span>
//                   <span className='product-description'>Black</span>
//                   <div className='product-price-block'>
//                     <span className='product-price'>100000</span>
//                     <span className='product-discount'>50% Off</span>
//                   </div>
//                   <div className='product-tax-policy'>Incluye impuesto País y percepción AFIP</div>
//                 </div>
//               </a>
//             </div>
//           </div>
