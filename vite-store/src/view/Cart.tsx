import Hero from '../components/Hero';
import style from './Cart.module.css';

const Cart = () => {
  return (
    <>
      <Hero firstMsg='mi' secondMsg='carrito'></Hero>
      <div className={style['cart-container']}>
        <article className={style['product-cart']}>
          <img className={style['product-img']} src='https://i.postimg.cc/kX8PKZpq/ipad.jpg' alt='ipad' />
          <div className={style['product-details']}>
            <strong className={style['product-title']}>iPad Pro 13</strong>
            <span className={style['product-description']}>- Silver</span>
            <p className={style['product-description']}>
              The iPad Pro 13 is a stunning piece of technology, boasting a large 12.9-inch Retina display with ProMotion technology. With 256GB
              of storage, this iPad provides ample space for all your files, apps, and multimedia content. The sleek and slim design, combined
              with the silver color, gives it a sophisticated look. Enjoy seamless connectivity with the WiFi feature. Capture your memorable
              moments with the high-quality camera and relive them on the impressive screen. Whether you're a professional artist, student, or
              just someone who appreciates cutting-edge technology, the iPad Pro 12.9 is a versatile device that meets all your needs.
            </p>
            <input className={style['product-input']} type='number' name='quantity' value='1' min='1' id='P7Q8R90' />
          </div>
          <strong className='price'>AR$ $800000</strong>
        </article>
        <div className={style['cart-resume']}>
          <div className={style['cart-data']}>
            <h2 className={style['cart-title']}>
              <span>Resumen</span>
              <span>del</span>
              <span>pedido</span>
            </h2>
            <div className={style['cart-total']}>
              <h3>Total</h3>
              <strong className={style['cart-price']}>$800000</strong>
            </div>
            <small className={style['cart-tax']}>Incluye impuesto PAIS y percepción AFIP.</small>
          </div>
          <button className={style['cart-btn']} id='buy' type='button'>
            COMPRAR
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
