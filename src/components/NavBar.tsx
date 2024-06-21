import NavButton from './NavButton';

import tiendamia from '../assets/tiendamia-logo.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import cart from '../assets/cart.svg';

// import style from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getText } from '../store/slices/filterSlice';
import { RootState } from '../store/store';
import { ProductLocalStorage } from '../interfaces/ProductLocalStorage.interface';
import { getQyt } from '../store/slices/qytItemSlice';

const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const textSelec = useSelector((state: RootState) => state.filter.value);

  const text = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const qytSelec = useSelector((state: RootState) => state.qyt.value);

  const setText = () => {
    console.log(text.current?.value);
    const txt = text.current?.value ?? '';
    dispatch(getText(txt));
  };

  useEffect(() => {
    const products: ProductLocalStorage[] = JSON.parse(localStorage.getItem('cart') ?? '[]');
    console.log(products.length);

    dispatch(getQyt(products.length));
  }, [dispatch]);

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
                {pathname === '/home' && (
                  <input
                    className='py-3 px-4 block w-full rounded-lg shadow font-thin focus:outline-none focus:shadow-md focus:shadow-indigo-700 duration-100 shadow-indigo-100"'
                    type='text'
                    placeholder='Search'
                    ref={text}
                    onChange={setText}
                    defaultValue={textSelec}
                  />
                )}
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
                  <div className='relative'>
                    <img src={cart} alt='cart' className='' />
                    <div className='top-0 right-0 absolute animate-bounce'>
                      <span className='flex h-2 w-2 items-center justify-center rounded-full bg-indigo-500 p-3 text-xs text-white'>
                        {qytSelec}
                      </span>
                    </div>
                  </div>
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
