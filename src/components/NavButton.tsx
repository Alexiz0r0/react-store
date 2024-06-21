import { Link } from 'react-router-dom';
// import style from './NavButton.module.css';

const NavButton = () => {
  return (
    <>
      <ul className='flex flex-row justify-around py-4 text-white font-semibold text-sm md:text-base'>
        <li className=' hover:text-gray-200'>
          <Link to='/sale'>Ofertas</Link>
        </li>
        <li className='hover:text-gray-200'>
          <a>Cómo comprar</a>
        </li>
        <li className='hover:text-gray-200'>
          <a>Costos y tarifas</a>
        </li>
        <li className='hover:text-gray-200'>
          <a>Mis pedidos</a>
        </li>
        <li className='hover:text-gray-200'>
          <a>Garantía</a>
        </li>
      </ul>
    </>
  );
};

export default NavButton;
