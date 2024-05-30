import style from './NavButton.module.css';

const NavButton = () => {
  return (
    <>
      <div className={style.nav}>
        <ul>
          <li>
            <a>Ofertas</a>
          </li>
          <li>
            <a>Cómo comprar</a>
          </li>
          <li>
            <a>Costos y tarifas</a>
          </li>
          <li>
            <a>Mis pedidos</a>
          </li>
          <li>
            <a>Garantía</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavButton;
