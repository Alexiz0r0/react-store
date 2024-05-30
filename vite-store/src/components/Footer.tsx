import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className={style.container}>
          <div className={style['columns-container']}>
            <div className={style.col}>
              <ul>
                <li>
                  <a href='#'>Ofertas</a>
                </li>
                <li>
                  <a href='#'>Laptops</a>
                </li>
                <li>
                  <a href='#'>Audio</a>
                </li>
                <li>
                  <a href='#'>Auriculares</a>
                </li>
              </ul>
            </div>
            <div className={style.col}>
              <ul>
                <li>
                  <a href='#'>Cómo comprar</a>
                </li>
                <li>
                  <a href='#'>Formas de pago</a>
                </li>
                <li>
                  <a href='#'>Envio</a>
                </li>
                <li>
                  <a href='#'>Devoluciones</a>
                </li>
              </ul>
            </div>
            <div className={style.col}>
              <ul>
                <li>
                  <a href='#'>Costos y tarifas</a>
                </li>
                <li>
                  <a href='#'>Impuestos</a>
                </li>
                <li>
                  <a href='#'>Facturacion</a>
                </li>
              </ul>
            </div>
            <div className={style.col}>
              <ul>
                <li>
                  <a href='#'>Mis pedidos</a>
                </li>
                <li>
                  <a href='#'>Pedir nuevamente</a>
                </li>
                <li>
                  <a href='#'>Lista de deseos</a>
                </li>
              </ul>
            </div>
            <div className={style.col}>
              <ul>
                <li>
                  <a href='#'>Garantía</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.copyright}>Curso de HTML + CSS 2023</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
