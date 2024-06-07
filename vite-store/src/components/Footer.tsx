// import style from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <footer className='bg-violet-600 h-[300px]'>
        <div className='h-full flex items-end mx-auto max-w-[1220px] border-2 border-stone-400'>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between item-end my-7'>
              <div className=''>
                <ul className='list-none text-white'>
                  <li className='font-bold mb-3'>
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
              <div className=''>
                <ul className='list-none text-white'>
                  <li className='font-bold mb-3'>
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
              <div className=''>
                <ul className='list-none text-white'>
                  <li className='font-bold mb-3'>
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
              <div className=''>
                <ul className='list-none text-white'>
                  <li className='font-bold mb-3'>
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
              <div className=''>
                <ul className='list-none text-white'>
                  <li className='font-bold mb-3'>
                    <a href='#'>Garantía</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='border-t-2 border-purple-500 text-center font-bold text-white py-6'>
              Curso de HTML + CSS 2023
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
