import NavButton from './NavButton';

import tiendamia from '../assets/tiendamia-logo.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import cart from '../assets/cart.svg';

import style from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <div className={style.container}>
          <div className={style.search}>
            <div className={style.logo}>
              <Link to='/'>
                <img src={tiendamia} width='218' alt='Logo store' />
              </Link>
            </div>
            <div className={style.form}>
              {/* <form>
                <input type='text' placeholder='Search' />
              </form> */}
            </div>
            <div className={style.social}>
              <ul>
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
                    <img src={cart} alt='cart' />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <NavButton></NavButton>
        </div>
      </header>
    </>
  );
};

export default NavBar;
