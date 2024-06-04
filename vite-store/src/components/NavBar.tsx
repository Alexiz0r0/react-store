import NavButton from './NavButton';

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
                <img src='../../public/tiendamia-logo.svg' width='218' alt='Logo store' />
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
                    <img src='../../public/facebook.svg' alt='facebook' />
                  </a>
                </li>
                <li>
                  <a>
                    <img src='../../public/instagram.svg' alt='instagram' />
                  </a>
                </li>
                <li>
                  <Link to='/cart'>
                    <img src='../../public/cart.svg' alt='cart' />
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
