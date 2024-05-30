import { useParams } from 'react-router-dom';
import style from './Details.module.css';
import products from '../assets/products';
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
  console.log(product);

  return (
    <>
      <main>
        <div className={style['details-container']}>
          <div id='details' className={style['columns-container']}>
            <section className={style['product-images-block']}>
              <div className={style['product-images']}>
                <img className={style['mini-img']} src={product.images[0]} alt="MacBook Pro 13'4" />
                <img className={style['mini-img']} src={product.images[1]} alt="MacBook Pro 13'4" />
              </div>
              <img className={style['big-img']} id='big-img' src={product.images[0]} alt="MacBook Pro 13'4" />
            </section>
            <div className={style['product-description-block']}>
              <h1 className={style['product-title']}>{product.title}</h1>
              <form className={style['product-selector']}>
                <fieldset className={style['product-fieldset']}>
                  <label className={style['product-label']} htmlFor='color'>
                    Color
                  </label>
                  <select className={style['product-select']} id='color'>
                    <option value='Silver'>Silver</option>
                  </select>
                </fieldset>
              </form>
              <div className={style['product-description']}>
                <span className={style['product-label']}>Descripción</span>
                <p>{product.description}</p>
              </div>
            </div>
            <div className={style['product-checkout-block']}>
              <div className={style['checkout-container']}>
                <span className={style['checkout-total-label']}>Total:</span>
                <h2 id='price' className={style['checkout-total-price']}>
                  ${product.price}
                </h2>
                <p className={style['checkout-description']}>
                  Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711 haciendo la solicitud en AFIP.
                </p>
                <ul className={style['checkout-policy-list']}>
                  <li>
                    <span className={style['policy-icon']}>
                      <img src='/truck.svg' alt='Truck' />
                    </span>
                    <span className='policy-desc'>Agrega el producto al carrito para conocer los costos de envío</span>
                  </li>
                  <li>
                    <span className={style['policy-icon']}>
                      <img src='/plane.svg' alt='Plane' />
                    </span>
                    <span className={style['policy-desc']}>Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal</span>
                  </li>
                </ul>
                <div className={style['checkout-process']}>
                  <div className={style['top']}>
                    <input type='number' min='1' value={product.stock} />
                    <button type='button' className={style['cart-btn']}>
                      Añadir al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
