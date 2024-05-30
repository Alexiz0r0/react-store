import { Link } from 'react-router-dom';

import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <>
      <div className={style['face']}>
        <div className={style['band']}>
          <div className={style['red']}></div>
          <div className={style['white']}></div>
          <div className={style['blue']}></div>
        </div>
        <div className={style['eyes']}></div>
        <div className={style['dimples']}></div>
        <div className={style['mouth']}></div>
      </div>

      <h1>Lo sentimos, la página que estás buscando no existe.</h1>
      <div className={style['btn']}>
        <Link to='/'>Return to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
