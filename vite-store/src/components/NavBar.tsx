import NavButton from './NavButton';

import tiendamia from '../assets/tiendamia-logo.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import cart from '../assets/cart.svg';

// import style from './NavBar.module.css';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getText } from '../store/slices/filterSlice';

const NavBar = () => {
  const text = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const setText = () => {
    console.log(text.current?.value);
    const txt = text.current?.value ?? '';
    dispatch(getText(txt));
  };

  return (
    <>
      <header className='h-[152px] bg-[#ff3b3c] flex items-center justify-center'>
        <div className='mx-auto max-w-[1220px] w-full mx-2 md:mx-0'>
          <div className='flex justify-between items-center'>
            <Link to='/'>
              <img src={tiendamia} width='218' alt='Logo store' />
            </Link>
            <div className=''>
              <form>
                <input
                  className='py-3 px-4 block w-full rounded-lg shadow font-thin focus:outline-none focus:shadow-md focus:shadow-indigo-700 duration-100 shadow-indigo-100"'
                  type='text'
                  placeholder='Search'
                  ref={text}
                  onChange={setText}
                />
              </form>
            </div>
            <ul className='flex flex-row justify-end gap-4'>
              <li>
                <a>
                  <img src={facebook} alt='facebook' />
                </a>
              </li>
              <li>
                <a>
                  <img src={instagram} alt='instagram' />
                </a>
              </li>
              <li>
                <Link to='/cart'>
                  <img src={cart} alt='cart' className='animate-bounce' />
                </Link>
              </li>
            </ul>
          </div>
          <NavButton></NavButton>
        </div>
      </header>
    </>
  );
};

export default NavBar;
